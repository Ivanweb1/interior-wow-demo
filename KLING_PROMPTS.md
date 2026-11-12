# Ролик для «ОБЪЁМ»: одно видео на весь экран

Все сцены делает **одно видео**: «пустая бетонная коробка → готовый интерьер». Оно строится от первого кадра к последнему (start frame → tail frame). На сайте ползунок прокручивает это видео по кадрам.

Опорные кадры генерирует Codex (шаг 1 в `CODEX_PROMPT.md`) и кладёт в `frames/`. Потом Claude запускает Kling.

**Расход Kling: 1 видео, ~30 кредитов (kling-video-v3_0, first+tail frame, 720p, 5 с, без звука). Запускать только после «да» Ивана.**

## Опорные кадры (`frames/`, 16:9, 1920×1080)

Главное условие: **камера, стены, окна и перспектива на двух кадрах совпадают до пикселя**. Поэтому сначала генерируется готовый интерьер, а пустой кадр делается редактированием готового, а не отдельной генерацией.

Общий стиль (дописывать в конец):
> architectural interior photography, eye-level wide shot from the room entrance, static tripod camera, 24mm lens, two large floor-to-ceiling windows on the left wall, soft daylight, photorealistic, 16:9, no people, no text, no logos

| Файл | Промпт |
|---|---|
| `1-final.png` | A finished modern living room with an open kitchen in a 74 m² city apartment: warm milky microcement walls, light oak herringbone floor, a low sand-colored linen sofa in the center, a travertine coffee table, a brass floor lamp, a large wool rug, an oak kitchen island with three stools on the right, linen curtains, a big plant by the window, warm golden late-afternoon light. Calm, expensive, minimal Scandinavian-Japanese style. Empty wall area in the upper-left third for text |
| `0-empty.png` | **Редактирование `1-final.png`:** remove all furniture, rug, lamp, plant, curtains and kitchen; bare grey concrete walls and ceiling with formwork marks, raw concrete screed floor, exposed wiring hanging from the ceiling, a few construction dust marks, cold neutral overcast daylight; keep the exact same camera, room geometry, windows and perspective |

## Ролик (`video/1-empty-to-final.mp4`)

Старт `0-empty` → финиш `1-final`, 5 с, камера неподвижна.

Промпт движения:
> Time-lapse renovation of the same room, static camera. First the concrete walls get smooth warm plaster, then oak herringbone floor spreads across the screed from the windows towards the camera, then the kitchen island and sofa materialize and slide into place, then the rug, lamp, coffee table and plant appear, curtains unfold; daylight gradually shifts from cold overcast to warm golden afternoon. Smooth continuous transformation, no cuts, no camera movement, no people.

Негатив: `camera shake, zoom, pan, people, workers, text, flicker, morphing walls, distorted windows`

Последний кадр ролика должен совпадать с `1-final.png`: Codex ставит PNG чётким постером в конечной точке ползунка.
