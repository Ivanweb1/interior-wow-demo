#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"; mkdir -p "$ROOT/assets/seq"
ffmpeg -y -i "$ROOT/frames/0-empty.png" -vf "scale=1920:-2:flags=lanczos" -c:v libwebp -quality 86 "$ROOT/assets/poster-0.webp"
ffmpeg -y -i "$ROOT/frames/1-final.png" -vf "scale=1920:-2:flags=lanczos" -c:v libwebp -quality 86 "$ROOT/assets/poster-1.webp"
VIDEO=$(find "$ROOT/video" -maxdepth 1 -name '1-*.mp4' -print -quit)
if [ -n "${VIDEO:-}" ]; then
  rm -f "$ROOT/assets/seq/"*.webp
  ffmpeg -y -i "$VIDEO" -vf "scale=1600:-2:flags=lanczos" -c:v libwebp -quality 82 "$ROOT/assets/seq/%04d.webp"
  COUNT=$(find "$ROOT/assets/seq" -name '*.webp' | wc -l | tr -d ' ')
else COUNT=0; fi
printf '{"frames":%s,"pattern":"%%04d.webp"}\n' "$COUNT" > "$ROOT/assets/seq/manifest.json"
echo "Prepared $COUNT video frames"
