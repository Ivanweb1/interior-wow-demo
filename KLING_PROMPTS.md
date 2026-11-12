# Ролик для «ОБЪЁМ»: одно видео — кульминация

**Обновлено 12.11 (раунд 1).** Видео больше не показывает «бетон → интерьер». Это превращение теперь делает «волшебная кисть» на двух готовых кадрах (`0-empty` и `1-final`), без видео. Видео — **финальная кульминация**: готовая комната оживает, камера медленно наезжает, день сменяется тёплым вечером, загораются светильники. После него появляются метки с ценами.

**Расход Kling: 1 видео, ~30 кредитов (kling-video-v3_0, first+tail frame, 720p, 5 с, без звука). Запускать только после «да» Ивана.**

## Опорные кадры (`frames/`, 16:9, 1920×1080)

| Файл | Что | Как |
|---|---|---|
| `0-empty.png` | пустая бетонная коробка | уже есть, не трогать |
| `1-final.png` | готовый интерьер, дневной свет | уже есть, не трогать. **Это первый кадр видео** |
| `2-evening.png` | тот же интерьер вечером, камера ближе | Codex делает в два шага (ниже). **Это последний кадр видео** |

**`2-evening.png`, шаг 1, редактирование `1-final.png`:**
> Same room, same camera, same furniture and geometry. Time changed to warm evening golden hour: low orange sun from the left windows casting long soft light stripes across the oak floor and the sofa, the brass floor lamp and the two pendant lamps above the kitchen island are switched on with a warm glow, a candle lit on the coffee table, cosy evening mood, slightly deeper shadows in the corners. Photorealistic, no people, no text.

**Шаг 2, наезд:** кадрировать результат по центру до 88% ширины и высоты (центр кадра смещён чуть вниз, на диван: `y` центра = 54%) и масштабировать обратно до 1920×1080. Так в видео получится медленный наезд камеры.

## Ролик (`video/1-final-to-evening.mp4`)

Старт `1-final` → финиш `2-evening`, 5 с.

Промпт движения:
> Slow cinematic dolly-in towards the sofa. Daylight gradually turns into warm golden evening light, sun stripes slide across the floor, the floor lamp and the pendant lamps above the island softly switch on one after another, linen curtains sway gently in a light breeze, plant leaves move slightly, a candle flame flickers. Smooth continuous motion, no cuts, no people.

Негатив: `camera shake, fast zoom, pan, people, text, flicker of the whole frame, morphing furniture, distorted windows, furniture appearing or disappearing`

Последний кадр ролика должен совпадать с `2-evening.png`: на сайте он стоит чётким постером, и по нему Codex ставит метки с ценами.
