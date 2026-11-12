# Ролик для «ОБЪЁМ»: одно видео — от бетона до вечернего интерьера

**Обновлено 12.11 (раунд 2).** Кисти больше нет. Одно видео делает всё сразу: пустая бетонная коробка днём → ремонт «таймлапсом» → готовая комната вечером с горящими лампами, плюс медленный наезд камеры. Сайт проигрывает его сам и даёт прокрутить колесом или пальцем вперёд и назад.

**Расход Kling: 1 видео (kling-video-v3_0, first+tail frame, 720p, без звука). 5 с — ~30 кредитов. Запускать только после «да» Ивана.**

## Опорные кадры (`frames/`, все уже есть)

| Файл | Роль |
|---|---|
| `0-empty.png` | **первый кадр видео**: бетон, дневной холодный свет, полный кадр |
| `1-final.png` | в видео не участвует, остаётся для запасного режима |
| `2-evening.png` | **последний кадр видео**: готовый интерьер вечером, лампы горят, кадр с наездом 88% |

Геометрия `0-empty` совпадает с `1-final`, а `2-evening` — это `1-final` с наездом. Поэтому Kling получает «тот же зал, только ближе», и наезд камеры выходит сам.

## Ролик (`video/1-empty-to-evening.mp4`)

Старт `0-empty` → финиш `2-evening`, 5 с.

Промпт движения:
> Time-lapse renovation of the same room with a slow continuous cinematic dolly-in towards the center. Stage by stage: smooth warm plaster spreads over the grey concrete walls, light oak herringbone floor rolls across the screed from the windows towards the camera, the kitchen island and the linen sofa slide in and settle into place, then the rug, travertine coffee table, plant and brass floor lamp appear, linen curtains unfold. At the same time cold overcast daylight turns into warm golden evening light, sun stripes slide across the floor, and at the very end the floor lamp and the pendant lamps above the island switch on with a warm glow. Smooth, no cuts, no people.

Негатив: `camera shake, fast zoom, pan, people, workers, text, flicker, melting furniture, morphing walls, distorted windows, objects floating`

Если в середине ролика мебель «плавится» сильнее, чем на одну-две секунды, — перегенерировать один раз с той же связкой кадров (ещё ~30 кредитов), тоже только после «да».
