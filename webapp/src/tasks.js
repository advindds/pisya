// Пул из 30 заданий с уклоном на рекламу и реальные бизнес-задачи

const businessTasks = [
  {
    id: 1,
    title: "Рекламный постер для спешелти кофейни",
    description: "Требуется создать аппетитный кадр: свежесваренный капучино с латте-артом на деревянном столе. Теплый свет, уютная атмосфера.",
    promptUrl: "Professional coffee shop advertisement poster, fresh cappuccino with latte art on a wooden table, warm lighting, cozy atmosphere, highly detailed, 4k"
  },
  {
    id: 2,
    title: "Баннер для фитнес-клуба",
    description: "Спортивный дизайн: атлетичный мужчина и женщина на тренировке, темный фон с неоновыми акцентами, мотивационный стиль.",
    promptUrl: "Modern fitness center promo banner, athletic man and woman training, dark background with neon accents, motivational style, energetic lighting, 8k"
  },
  {
    id: 3,
    title: "Обложка для курсов по IT",
    description: "Современный разработчик в наушниках за несколькими мониторами, на экранах код. Киберпанк стилистика, сине-фиолетовые тона.",
    promptUrl: "IT programming course cover, modern developer with headphones working on multiple monitors with code, cyberpunk style, blue and purple tones, highly detailed"
  },
  {
    id: 4,
    title: "Реклама элитной недвижимости",
    description: "Фотореалистичный экстерьер современной виллы с бассейном на закате. Архитектурная съемка, премиум качество.",
    promptUrl: "Luxury real estate exterior advertisement, modern villa with infinity pool at sunset, photorealistic, architectural photography, 8k masterpiece"
  },
  {
    id: 5,
    title: "Промо нового смартфона",
    description: "Стильный смартфон лежит на глянцевой темной поверхности. Минимализм, студийный свет, блики на экране.",
    promptUrl: "Smartphone product advertisement, sleek phone on dark glossy reflective surface, minimalist, studio lighting, screen glare, 3d render, 4k"
  },
  {
    id: 6,
    title: "Баннер для доставки суши",
    description: "Крупный план премиального сета роллов на черной сланцевой доске. Дымка от сухого льда, премиум подача.",
    promptUrl: "Premium sushi delivery banner, close up of high end sushi roll set on black slate board, dry ice smoke, premium food photography, highly detailed, 4k"
  },
  {
    id: 7,
    title: "Реклама мужского парфюма",
    description: "Строгий флакон духов на фоне брызг воды и темного камня. Брутальный стиль, холодные оттенки.",
    promptUrl: "Men perfume advertisement, elegant perfume bottle against splashing water and dark stone background, brutal style, cold tones, commercial photography"
  },
  {
    id: 8,
    title: "Визуал для бьюти-салона",
    description: "Девушка с идеальной сияющей кожей и легким макияжем. Естественный свет, фокус на текстуру кожи и чистоту.",
    promptUrl: "Beauty salon visual, young woman with perfect glowing skin and minimal makeup, natural lighting, focus on skin texture, beauty photography, 8k"
  },
  {
    id: 9,
    title: "Постер для турагентства (Мальдивы)",
    description: "Кристально чистая бирюзовая вода, белые виллы на воде, пальмы. Яркие, насыщенные цвета, вызывающие желание отдохнуть.",
    promptUrl: "Travel agency poster Maldives, crystal clear turquoise water, overwater bungalows, palm trees, vibrant colors, tropical paradise, highly detailed, 4k"
  },
  {
    id: 10,
    title: "Реклама автосалона (спорткар)",
    description: "Красный спортивный автомобиль едет по ночному городу. Смазанные огни на фоне (эффект скорости), кинематографично.",
    promptUrl: "Sports car dealership advertisement, red sports car driving through night city, motion blur lights background, cinematic lighting, 8k, photorealistic"
  },
  {
    id: 11,
    title: "Обложка для подкаста про бизнес",
    description: "Стильный микрофон на столе, на заднем фоне размытые силуэты бизнес-центра. Неоновая контровая подсветка.",
    promptUrl: "Business podcast cover art, stylish professional microphone on table, blurred business center background, neon rim lighting, high quality, 4k"
  },
  {
    id: 12,
    title: "Реклама бренда кроссовок",
    description: "Новая модель кроссовок парит в воздухе среди осколков бетона. Динамичная композиция, уличный стиль.",
    promptUrl: "Sneaker brand advertisement, new sneaker shoe floating in mid air among concrete debris, dynamic composition, street style, product photography, 8k"
  },
  {
    id: 13,
    title: "Баннер для зоомагазина",
    description: "Счастливый золотистый ретривер ловит мячик в парке. Яркое солнце, зелень, позитивные эмоции.",
    promptUrl: "Pet shop banner, happy golden retriever catching a ball in a sunny park, bright sunlight, green grass, joyful, professional pet photography, 4k"
  },
  {
    id: 14,
    title: "Промо органической косметики",
    description: "Баночка крема стоит на зеленом листе папоротника, вокруг капли росы. Макро-съемка, эко-стиль.",
    promptUrl: "Organic cosmetics promo, cream jar standing on a green fern leaf, dew drops, macro photography, eco style, natural lighting, 8k"
  },
  {
    id: 15,
    title: "Иллюстрация для статьи о крипте",
    description: "Абстрактный цифровой город с летящими светящимися биткоинами и графиками роста. 3D-графика.",
    promptUrl: "Cryptocurrency article illustration, abstract digital city with glowing flying bitcoins and upward charts, 3d graphics, cyberpunk colors, 4k"
  },
  {
    id: 16,
    title: "Реклама стоматологии",
    description: "Улыбающаяся девушка с идеальной белой улыбкой. Чистый, светлый, медицинский, но уютный фон.",
    promptUrl: "Dental clinic advertisement, smiling young woman with perfect white teeth, clean bright medical yet cozy background, professional portrait, 8k"
  },
  {
    id: 17,
    title: "Визуал для ресторана бургеров",
    description: "Огромный сочный бургер с летящими каплями соуса и расплавленным сыром. Темный фон, сочные цвета.",
    promptUrl: "Burger restaurant visual, huge juicy burger with flying sauce drops and melted cheese, dark background, vibrant food photography, masterpiece, 4k"
  },
  {
    id: 18,
    title: "Баннер для курсов английского",
    description: "Студенты разных национальностей общаются за чашкой кофе на фоне Биг-Бена. Дружелюбная атмосфера.",
    promptUrl: "English language course banner, diverse students chatting over coffee with Big Ben in the background, friendly atmosphere, highly detailed, 4k"
  },
  {
    id: 19,
    title: "Реклама умного дома",
    description: "Стильная гостиная, из смартфона исходит голографический интерфейс управления светом и температурой.",
    promptUrl: "Smart home advertisement, stylish modern living room, holographic interface projecting from smartphone controlling lights, futuristic, 8k"
  },
  {
    id: 20,
    title: "Промо онлайн-кинотеатра",
    description: "Попкорн, 3D-очки и пульт на диване, экран телевизора светится в темноте, излучая магический свет.",
    promptUrl: "Online cinema promo, popcorn and 3d glasses on a cozy sofa, glowing tv screen in dark room emitting magical light, cinematic lighting, 4k"
  },
  {
    id: 21,
    title: "Реклама службы клининга",
    description: "Идеально чистая белая комната, солнечный свет падает из окна. Ощущение свежести и минимализма.",
    promptUrl: "Cleaning service advertisement, perfectly clean white living room, sunlight shining through window, feeling of freshness, minimalist interior, 8k"
  },
  {
    id: 22,
    title: "Баннер для магазина часов",
    description: "Дорогие механические часы крупным планом. Видны шестеренки, металл блестит. Макро, люкс стиль.",
    promptUrl: "Luxury watch store banner, expensive mechanical watch close up, visible gears, shiny metal, macro photography, luxury style, masterpiece, 4k"
  },
  {
    id: 23,
    title: "Обложка для музыкального альбома (Электроника)",
    description: "Абстрактные неоновые волны на черном фоне, напоминающие звуковые колебания.",
    promptUrl: "Electronic music album cover, abstract neon sound waves on deep black background, glowing lines, 3d render, 4k"
  },
  {
    id: 24,
    title: "Реклама доставки цветов",
    description: "Огромный пышный букет пионов в крафтовой бумаге, нежные пастельные тона, романтичная атмосфера.",
    promptUrl: "Flower delivery advertisement, huge lush bouquet of peonies in craft paper, gentle pastel tones, romantic atmosphere, professional photography, 8k"
  },
  {
    id: 25,
    title: "Промо барбершопа",
    description: "Брутальный мужчина с ухоженной бородой в кресле барбера, процесс стрижки опасной бритвой.",
    promptUrl: "Barbershop promo, brutal man with well groomed beard in barber chair, straight razor shaving process, vintage lighting, cinematic style, 4k"
  },
  {
    id: 26,
    title: "Иллюстрация: ИИ для бизнеса",
    description: "Голографический человеческий мозг, соединенный с микросхемами, на фоне графиков роста продаж.",
    promptUrl: "AI for business illustration, holographic human brain connected to microchips, business growth charts background, futuristic corporate style, 4k"
  },
  {
    id: 27,
    title: "Баннер для доставки воды",
    description: "Ледяной куб с чистой горной водой, всплески, летящие капли, на фоне заснеженных вершин.",
    promptUrl: "Water delivery banner, ice cube with pure mountain water splashing, flying drops, snowy mountain peaks background, crisp cold, 8k, photorealistic"
  },
  {
    id: 28,
    title: "Реклама юридических услуг",
    description: "Дорогая ручка Parker, лежащая на контракте. Деревянный стол, строгий деловой свет, надежность.",
    promptUrl: "Legal services advertisement, expensive Parker pen lying on a signed contract, wooden desk, strict business lighting, corporate reliability, 4k"
  },
  {
    id: 29,
    title: "Промо игровой периферии",
    description: "Игровая мышь с RGB-подсветкой на черном коврике. Киберспортивный агрессивный дизайн, темный фон.",
    promptUrl: "Gaming peripherals promo, rgb gaming mouse on a dark mousepad, esports aggressive design, dark background with colorful neon lights, product photography, 8k"
  },
  {
    id: 30,
    title: "Баннер для пекарни",
    description: "Свежеиспеченный круассан, посыпанный сахарной пудрой. Утренний свет из окна, уютный прованс.",
    promptUrl: "Bakery banner, freshly baked croissant dusted with powdered sugar, morning sunlight from window, cozy provence style, delicious food photography, 4k"
  }
  ,{
    id: 31,
    title: "Реклама спортпита V1",
    description: "Банка протеина на черном фоне с брызгами воды и неоновым светом.",
    promptUrl: "Sports nutrition ad, protein powder tub on black background with water splashes and neon lighting, 8k"
  }
  ,{
    id: 32,
    title: "Промо наушников V1",
    description: "Беспроводные наушники парят в воздухе, вокруг звуковые волны.",
    promptUrl: "Wireless headphones promo, floating in mid air, sound waves visualization, modern tech, 4k"
  }
  ,{
    id: 33,
    title: "Баннер турагентства (Горы) V1",
    description: "Заснеженные вершины Альп на закате, уютное шале.",
    promptUrl: "Travel agency banner Alps, snow capped mountains at sunset, cozy wooden chalet, beautiful landscape, 8k"
  }
  ,{
    id: 34,
    title: "Визуал для кофейни (Айс-латте) V1",
    description: "Стакан айс-латте с кубиками льда, капли конденсата на стекле.",
    promptUrl: "Iced latte visual, glass with ice cubes and condensation drops, summer vibe, macro photography, 4k"
  }
  ,{
    id: 35,
    title: "Обложка онлайн-курса (Дизайн) V1",
    description: "Цветовая палитра, планшет со стилусом на рабочем столе.",
    promptUrl: "Online design course cover, color palette, graphic tablet with stylus on wooden desk, creative workspace, 4k"
  }
  ,{
    id: 36,
    title: "Реклама часов (Классика) V1",
    description: "Классические мужские часы с кожаным ремешком на фоне дубового стола.",
    promptUrl: "Classic men watch advertisement, leather strap on oak table, luxury lifestyle, moody lighting, 8k"
  }
  ,{
    id: 37,
    title: "Промо эко-продуктов V1",
    description: "Свежие овощи и зелень в плетеной корзине, утреннее солнце.",
    promptUrl: "Eco products promo, fresh vegetables and herbs in a wicker basket, morning sunlight, organic farm style, 4k"
  }
  ,{
    id: 38,
    title: "Визуал для IT-компании V1",
    description: "Серверная комната с синей неоновой подсветкой, бесконечные ряды стоек.",
    promptUrl: "IT company visual, server room with blue neon lighting, endless rows of racks, cyberpunk, futuristic, 4k"
  }
  ,{
    id: 39,
    title: "Реклама ювелирного магазина V1",
    description: "Золотое кольцо с бриллиантом крупным планом, искрящийся свет.",
    promptUrl: "Jewelry store advertisement, gold diamond ring close up, sparkling light, luxury photography, macro, 8k"
  }
  ,{
    id: 40,
    title: "Баннер ресторана (Стейк) V1",
    description: "Сочный стейк Рибай на гриле, огонь на заднем плане.",
    promptUrl: "Restaurant banner Ribeye steak, juicy grilled steak on fire background, appetizing food photography, 4k"
  }
  ,{
    id: 41,
    title: "Реклама парфюмерии (Женская) V1",
    description: "Розовый флакон духов среди лепестков роз, легкий свет.",
    promptUrl: "Women perfume advertisement, pink bottle among rose petals, soft light, elegant beauty, 8k"
  }
  ,{
    id: 42,
    title: "Промо автомобиля (Внедорожник) V1",
    description: "Мощный внедорожник едет по грязи в густом лесу.",
    promptUrl: "SUV promo, powerful off-road vehicle driving through mud in dense forest, dynamic, dirt flying, 8k"
  }
  ,{
    id: 43,
    title: "Обложка для подкаста (Психология) V1",
    description: "Минималистичный силуэт головы человека с шестеренками внутри.",
    promptUrl: "Psychology podcast cover, minimalist human head silhouette with gears inside, calm tones, thoughtful, 4k"
  }
  ,{
    id: 44,
    title: "Реклама одежды (Осень) V1",
    description: "Девушка в стильном осеннем пальто в парке, падающие листья.",
    promptUrl: "Autumn clothing advertisement, young woman in stylish coat in a park, falling leaves, warm colors, fashion photography, 8k"
  }
  ,{
    id: 45,
    title: "Визуал для фитнес-приложения V1",
    description: "Смартфон с интерфейсом графиков активности, рядом гантели.",
    promptUrl: "Fitness app visual, smartphone showing activity charts, dumbbells nearby, gym setting, modern, 4k"
  }
  ,{
    id: 46,
    title: "Баннер для языковой школы V1",
    description: "Девушка в наушниках с ноутбуком радостно общается онлайн.",
    promptUrl: "Language school banner, happy young woman with headphones and laptop talking online, bright background, 4k"
  }
  ,{
    id: 47,
    title: "Реклама косметики (Сыворотка) V1",
    description: "Капля прозрачной сыворотки падает с пипетки, макро.",
    promptUrl: "Cosmetics ad serum, clear serum drop falling from pipette, macro photography, clean medical style, 8k"
  }
  ,{
    id: 48,
    title: "Промо турагентства (Сафари) V1",
    description: "Слон и жираф на фоне африканского заката, саванна.",
    promptUrl: "Safari travel agency promo, elephant and giraffe against African sunset, savanna, wildlife, beautiful, 4k"
  }
  ,{
    id: 49,
    title: "Визуал доставки пиццы V1",
    description: "Горячая пицца пепперони, тянущийся сыр, летящие кусочки салями.",
    promptUrl: "Pizza delivery visual, hot pepperoni pizza, stretching cheese, flying salami slices, dynamic food photography, 8k"
  }
  ,{
    id: 50,
    title: "Реклама банковской карты V1",
    description: "Стильная черная кредитная карта парит в воздухе на темном фоне.",
    promptUrl: "Bank card ad, stylish black credit card floating in mid air, dark minimalist background, premium, 4k"
  }
  ,{
    id: 51,
    title: "Обложка для вебинара (Маркетинг) V1",
    description: "Доска с графиком роста (стрелка вверх) и иконки соцсетей.",
    promptUrl: "Marketing webinar cover, whiteboard with growth chart arrow up and social media icons, professional corporate, 4k"
  }
  ,{
    id: 52,
    title: "Баннер магазина кроссовок V1",
    description: "Новая пара белых кроссовок на неоновом фоне в стиле киберпанк.",
    promptUrl: "Sneaker store banner, new white sneakers on neon cyberpunk background, futuristic street fashion, 8k"
  }
  ,{
    id: 53,
    title: "Промо салона красоты (Маникюр) V1",
    description: "Идеальный маникюр крупным планом, красивые ногти.",
    promptUrl: "Beauty salon promo manicure, perfect nail polish close up, clean aesthetic beauty photography, 4k"
  }
  ,{
    id: 54,
    title: "Реклама энергетического напитка V1",
    description: "Банка энергетика с брызгами яркой жидкости и льдом.",
    promptUrl: "Energy drink ad, glowing can with bright liquid splashes and ice, highly energetic, vibrant colors, 8k"
  }
  ,{
    id: 55,
    title: "Визуал для студии йоги V1",
    description: "Девушка в позе лотоса на фоне рассвета у океана.",
    promptUrl: "Yoga studio visual, woman in lotus pose at sunrise by the ocean, peaceful, spiritual, calm, 4k"
  }
  ,{
    id: 56,
    title: "Реклама спортпита V2",
    description: "Банка протеина на черном фоне с брызгами воды и неоновым светом.",
    promptUrl: "Sports nutrition ad, protein powder tub on black background with water splashes and neon lighting, 8k"
  }
  ,{
    id: 57,
    title: "Промо наушников V2",
    description: "Беспроводные наушники парят в воздухе, вокруг звуковые волны.",
    promptUrl: "Wireless headphones promo, floating in mid air, sound waves visualization, modern tech, 4k"
  }
  ,{
    id: 58,
    title: "Баннер турагентства (Горы) V2",
    description: "Заснеженные вершины Альп на закате, уютное шале.",
    promptUrl: "Travel agency banner Alps, snow capped mountains at sunset, cozy wooden chalet, beautiful landscape, 8k"
  }
  ,{
    id: 59,
    title: "Визуал для кофейни (Айс-латте) V2",
    description: "Стакан айс-латте с кубиками льда, капли конденсата на стекле.",
    promptUrl: "Iced latte visual, glass with ice cubes and condensation drops, summer vibe, macro photography, 4k"
  }
  ,{
    id: 60,
    title: "Обложка онлайн-курса (Дизайн) V2",
    description: "Цветовая палитра, планшет со стилусом на рабочем столе.",
    promptUrl: "Online design course cover, color palette, graphic tablet with stylus on wooden desk, creative workspace, 4k"
  }
  ,{
    id: 61,
    title: "Реклама часов (Классика) V2",
    description: "Классические мужские часы с кожаным ремешком на фоне дубового стола.",
    promptUrl: "Classic men watch advertisement, leather strap on oak table, luxury lifestyle, moody lighting, 8k"
  }
  ,{
    id: 62,
    title: "Промо эко-продуктов V2",
    description: "Свежие овощи и зелень в плетеной корзине, утреннее солнце.",
    promptUrl: "Eco products promo, fresh vegetables and herbs in a wicker basket, morning sunlight, organic farm style, 4k"
  }
  ,{
    id: 63,
    title: "Визуал для IT-компании V2",
    description: "Серверная комната с синей неоновой подсветкой, бесконечные ряды стоек.",
    promptUrl: "IT company visual, server room with blue neon lighting, endless rows of racks, cyberpunk, futuristic, 4k"
  }
  ,{
    id: 64,
    title: "Реклама ювелирного магазина V2",
    description: "Золотое кольцо с бриллиантом крупным планом, искрящийся свет.",
    promptUrl: "Jewelry store advertisement, gold diamond ring close up, sparkling light, luxury photography, macro, 8k"
  }
  ,{
    id: 65,
    title: "Баннер ресторана (Стейк) V2",
    description: "Сочный стейк Рибай на гриле, огонь на заднем плане.",
    promptUrl: "Restaurant banner Ribeye steak, juicy grilled steak on fire background, appetizing food photography, 4k"
  }
  ,{
    id: 66,
    title: "Реклама парфюмерии (Женская) V2",
    description: "Розовый флакон духов среди лепестков роз, легкий свет.",
    promptUrl: "Women perfume advertisement, pink bottle among rose petals, soft light, elegant beauty, 8k"
  }
  ,{
    id: 67,
    title: "Промо автомобиля (Внедорожник) V2",
    description: "Мощный внедорожник едет по грязи в густом лесу.",
    promptUrl: "SUV promo, powerful off-road vehicle driving through mud in dense forest, dynamic, dirt flying, 8k"
  }
  ,{
    id: 68,
    title: "Обложка для подкаста (Психология) V2",
    description: "Минималистичный силуэт головы человека с шестеренками внутри.",
    promptUrl: "Psychology podcast cover, minimalist human head silhouette with gears inside, calm tones, thoughtful, 4k"
  }
  ,{
    id: 69,
    title: "Реклама одежды (Осень) V2",
    description: "Девушка в стильном осеннем пальто в парке, падающие листья.",
    promptUrl: "Autumn clothing advertisement, young woman in stylish coat in a park, falling leaves, warm colors, fashion photography, 8k"
  }
  ,{
    id: 70,
    title: "Визуал для фитнес-приложения V2",
    description: "Смартфон с интерфейсом графиков активности, рядом гантели.",
    promptUrl: "Fitness app visual, smartphone showing activity charts, dumbbells nearby, gym setting, modern, 4k"
  }
  ,{
    id: 71,
    title: "Баннер для языковой школы V2",
    description: "Девушка в наушниках с ноутбуком радостно общается онлайн.",
    promptUrl: "Language school banner, happy young woman with headphones and laptop talking online, bright background, 4k"
  }
  ,{
    id: 72,
    title: "Реклама косметики (Сыворотка) V2",
    description: "Капля прозрачной сыворотки падает с пипетки, макро.",
    promptUrl: "Cosmetics ad serum, clear serum drop falling from pipette, macro photography, clean medical style, 8k"
  }
  ,{
    id: 73,
    title: "Промо турагентства (Сафари) V2",
    description: "Слон и жираф на фоне африканского заката, саванна.",
    promptUrl: "Safari travel agency promo, elephant and giraffe against African sunset, savanna, wildlife, beautiful, 4k"
  }
  ,{
    id: 74,
    title: "Визуал доставки пиццы V2",
    description: "Горячая пицца пепперони, тянущийся сыр, летящие кусочки салями.",
    promptUrl: "Pizza delivery visual, hot pepperoni pizza, stretching cheese, flying salami slices, dynamic food photography, 8k"
  }
  ,{
    id: 75,
    title: "Реклама банковской карты V2",
    description: "Стильная черная кредитная карта парит в воздухе на темном фоне.",
    promptUrl: "Bank card ad, stylish black credit card floating in mid air, dark minimalist background, premium, 4k"
  }
  ,{
    id: 76,
    title: "Обложка для вебинара (Маркетинг) V2",
    description: "Доска с графиком роста (стрелка вверх) и иконки соцсетей.",
    promptUrl: "Marketing webinar cover, whiteboard with growth chart arrow up and social media icons, professional corporate, 4k"
  }
  ,{
    id: 77,
    title: "Баннер магазина кроссовок V2",
    description: "Новая пара белых кроссовок на неоновом фоне в стиле киберпанк.",
    promptUrl: "Sneaker store banner, new white sneakers on neon cyberpunk background, futuristic street fashion, 8k"
  }
  ,{
    id: 78,
    title: "Промо салона красоты (Маникюр) V2",
    description: "Идеальный маникюр крупным планом, красивые ногти.",
    promptUrl: "Beauty salon promo manicure, perfect nail polish close up, clean aesthetic beauty photography, 4k"
  }
  ,{
    id: 79,
    title: "Реклама энергетического напитка V2",
    description: "Банка энергетика с брызгами яркой жидкости и льдом.",
    promptUrl: "Energy drink ad, glowing can with bright liquid splashes and ice, highly energetic, vibrant colors, 8k"
  }
  ,{
    id: 80,
    title: "Визуал для студии йоги V2",
    description: "Девушка в позе лотоса на фоне рассвета у океана.",
    promptUrl: "Yoga studio visual, woman in lotus pose at sunrise by the ocean, peaceful, spiritual, calm, 4k"
  }
  ,{
    id: 81,
    title: "Реклама спортпита V3",
    description: "Банка протеина на черном фоне с брызгами воды и неоновым светом.",
    promptUrl: "Sports nutrition ad, protein powder tub on black background with water splashes and neon lighting, 8k"
  }
  ,{
    id: 82,
    title: "Промо наушников V3",
    description: "Беспроводные наушники парят в воздухе, вокруг звуковые волны.",
    promptUrl: "Wireless headphones promo, floating in mid air, sound waves visualization, modern tech, 4k"
  }
  ,{
    id: 83,
    title: "Баннер турагентства (Горы) V3",
    description: "Заснеженные вершины Альп на закате, уютное шале.",
    promptUrl: "Travel agency banner Alps, snow capped mountains at sunset, cozy wooden chalet, beautiful landscape, 8k"
  }
  ,{
    id: 84,
    title: "Визуал для кофейни (Айс-латте) V3",
    description: "Стакан айс-латте с кубиками льда, капли конденсата на стекле.",
    promptUrl: "Iced latte visual, glass with ice cubes and condensation drops, summer vibe, macro photography, 4k"
  }
  ,{
    id: 85,
    title: "Обложка онлайн-курса (Дизайн) V3",
    description: "Цветовая палитра, планшет со стилусом на рабочем столе.",
    promptUrl: "Online design course cover, color palette, graphic tablet with stylus on wooden desk, creative workspace, 4k"
  }
  ,{
    id: 86,
    title: "Реклама часов (Классика) V3",
    description: "Классические мужские часы с кожаным ремешком на фоне дубового стола.",
    promptUrl: "Classic men watch advertisement, leather strap on oak table, luxury lifestyle, moody lighting, 8k"
  }
  ,{
    id: 87,
    title: "Промо эко-продуктов V3",
    description: "Свежие овощи и зелень в плетеной корзине, утреннее солнце.",
    promptUrl: "Eco products promo, fresh vegetables and herbs in a wicker basket, morning sunlight, organic farm style, 4k"
  }
  ,{
    id: 88,
    title: "Визуал для IT-компании V3",
    description: "Серверная комната с синей неоновой подсветкой, бесконечные ряды стоек.",
    promptUrl: "IT company visual, server room with blue neon lighting, endless rows of racks, cyberpunk, futuristic, 4k"
  }
  ,{
    id: 89,
    title: "Реклама ювелирного магазина V3",
    description: "Золотое кольцо с бриллиантом крупным планом, искрящийся свет.",
    promptUrl: "Jewelry store advertisement, gold diamond ring close up, sparkling light, luxury photography, macro, 8k"
  }
  ,{
    id: 90,
    title: "Баннер ресторана (Стейк) V3",
    description: "Сочный стейк Рибай на гриле, огонь на заднем плане.",
    promptUrl: "Restaurant banner Ribeye steak, juicy grilled steak on fire background, appetizing food photography, 4k"
  }
  ,{
    id: 91,
    title: "Реклама парфюмерии (Женская) V3",
    description: "Розовый флакон духов среди лепестков роз, легкий свет.",
    promptUrl: "Women perfume advertisement, pink bottle among rose petals, soft light, elegant beauty, 8k"
  }
  ,{
    id: 92,
    title: "Промо автомобиля (Внедорожник) V3",
    description: "Мощный внедорожник едет по грязи в густом лесу.",
    promptUrl: "SUV promo, powerful off-road vehicle driving through mud in dense forest, dynamic, dirt flying, 8k"
  }
  ,{
    id: 93,
    title: "Обложка для подкаста (Психология) V3",
    description: "Минималистичный силуэт головы человека с шестеренками внутри.",
    promptUrl: "Psychology podcast cover, minimalist human head silhouette with gears inside, calm tones, thoughtful, 4k"
  }
  ,{
    id: 94,
    title: "Реклама одежды (Осень) V3",
    description: "Девушка в стильном осеннем пальто в парке, падающие листья.",
    promptUrl: "Autumn clothing advertisement, young woman in stylish coat in a park, falling leaves, warm colors, fashion photography, 8k"
  }
  ,{
    id: 95,
    title: "Визуал для фитнес-приложения V3",
    description: "Смартфон с интерфейсом графиков активности, рядом гантели.",
    promptUrl: "Fitness app visual, smartphone showing activity charts, dumbbells nearby, gym setting, modern, 4k"
  }
  ,{
    id: 96,
    title: "Баннер для языковой школы V3",
    description: "Девушка в наушниках с ноутбуком радостно общается онлайн.",
    promptUrl: "Language school banner, happy young woman with headphones and laptop talking online, bright background, 4k"
  }
  ,{
    id: 97,
    title: "Реклама косметики (Сыворотка) V3",
    description: "Капля прозрачной сыворотки падает с пипетки, макро.",
    promptUrl: "Cosmetics ad serum, clear serum drop falling from pipette, macro photography, clean medical style, 8k"
  }
  ,{
    id: 98,
    title: "Промо турагентства (Сафари) V3",
    description: "Слон и жираф на фоне африканского заката, саванна.",
    promptUrl: "Safari travel agency promo, elephant and giraffe against African sunset, savanna, wildlife, beautiful, 4k"
  }
  ,{
    id: 99,
    title: "Визуал доставки пиццы V3",
    description: "Горячая пицца пепперони, тянущийся сыр, летящие кусочки салями.",
    promptUrl: "Pizza delivery visual, hot pepperoni pizza, stretching cheese, flying salami slices, dynamic food photography, 8k"
  }
  ,{
    id: 100,
    title: "Реклама банковской карты V3",
    description: "Стильная черная кредитная карта парит в воздухе на темном фоне.",
    promptUrl: "Bank card ad, stylish black credit card floating in mid air, dark minimalist background, premium, 4k"
  }
  ,{
    id: 101,
    title: "Обложка для вебинара (Маркетинг) V3",
    description: "Доска с графиком роста (стрелка вверх) и иконки соцсетей.",
    promptUrl: "Marketing webinar cover, whiteboard with growth chart arrow up and social media icons, professional corporate, 4k"
  }
  ,{
    id: 102,
    title: "Баннер магазина кроссовок V3",
    description: "Новая пара белых кроссовок на неоновом фоне в стиле киберпанк.",
    promptUrl: "Sneaker store banner, new white sneakers on neon cyberpunk background, futuristic street fashion, 8k"
  }
  ,{
    id: 103,
    title: "Промо салона красоты (Маникюр) V3",
    description: "Идеальный маникюр крупным планом, красивые ногти.",
    promptUrl: "Beauty salon promo manicure, perfect nail polish close up, clean aesthetic beauty photography, 4k"
  }
  ,{
    id: 104,
    title: "Реклама энергетического напитка V3",
    description: "Банка энергетика с брызгами яркой жидкости и льдом.",
    promptUrl: "Energy drink ad, glowing can with bright liquid splashes and ice, highly energetic, vibrant colors, 8k"
  }
  ,{
    id: 105,
    title: "Визуал для студии йоги V3",
    description: "Девушка в позе лотоса на фоне рассвета у океана.",
    promptUrl: "Yoga studio visual, woman in lotus pose at sunrise by the ocean, peaceful, spiritual, calm, 4k"
  }
  ,{
    id: 106,
    title: "Реклама спортпита V4",
    description: "Банка протеина на черном фоне с брызгами воды и неоновым светом.",
    promptUrl: "Sports nutrition ad, protein powder tub on black background with water splashes and neon lighting, 8k"
  }
  ,{
    id: 107,
    title: "Промо наушников V4",
    description: "Беспроводные наушники парят в воздухе, вокруг звуковые волны.",
    promptUrl: "Wireless headphones promo, floating in mid air, sound waves visualization, modern tech, 4k"
  }
  ,{
    id: 108,
    title: "Баннер турагентства (Горы) V4",
    description: "Заснеженные вершины Альп на закате, уютное шале.",
    promptUrl: "Travel agency banner Alps, snow capped mountains at sunset, cozy wooden chalet, beautiful landscape, 8k"
  }
  ,{
    id: 109,
    title: "Визуал для кофейни (Айс-латте) V4",
    description: "Стакан айс-латте с кубиками льда, капли конденсата на стекле.",
    promptUrl: "Iced latte visual, glass with ice cubes and condensation drops, summer vibe, macro photography, 4k"
  }
  ,{
    id: 110,
    title: "Обложка онлайн-курса (Дизайн) V4",
    description: "Цветовая палитра, планшет со стилусом на рабочем столе.",
    promptUrl: "Online design course cover, color palette, graphic tablet with stylus on wooden desk, creative workspace, 4k"
  }
  ,{
    id: 111,
    title: "Реклама часов (Классика) V4",
    description: "Классические мужские часы с кожаным ремешком на фоне дубового стола.",
    promptUrl: "Classic men watch advertisement, leather strap on oak table, luxury lifestyle, moody lighting, 8k"
  }
  ,{
    id: 112,
    title: "Промо эко-продуктов V4",
    description: "Свежие овощи и зелень в плетеной корзине, утреннее солнце.",
    promptUrl: "Eco products promo, fresh vegetables and herbs in a wicker basket, morning sunlight, organic farm style, 4k"
  }
  ,{
    id: 113,
    title: "Визуал для IT-компании V4",
    description: "Серверная комната с синей неоновой подсветкой, бесконечные ряды стоек.",
    promptUrl: "IT company visual, server room with blue neon lighting, endless rows of racks, cyberpunk, futuristic, 4k"
  }
  ,{
    id: 114,
    title: "Реклама ювелирного магазина V4",
    description: "Золотое кольцо с бриллиантом крупным планом, искрящийся свет.",
    promptUrl: "Jewelry store advertisement, gold diamond ring close up, sparkling light, luxury photography, macro, 8k"
  }
  ,{
    id: 115,
    title: "Баннер ресторана (Стейк) V4",
    description: "Сочный стейк Рибай на гриле, огонь на заднем плане.",
    promptUrl: "Restaurant banner Ribeye steak, juicy grilled steak on fire background, appetizing food photography, 4k"
  }
  ,{
    id: 116,
    title: "Реклама парфюмерии (Женская) V4",
    description: "Розовый флакон духов среди лепестков роз, легкий свет.",
    promptUrl: "Women perfume advertisement, pink bottle among rose petals, soft light, elegant beauty, 8k"
  }
  ,{
    id: 117,
    title: "Промо автомобиля (Внедорожник) V4",
    description: "Мощный внедорожник едет по грязи в густом лесу.",
    promptUrl: "SUV promo, powerful off-road vehicle driving through mud in dense forest, dynamic, dirt flying, 8k"
  }
  ,{
    id: 118,
    title: "Обложка для подкаста (Психология) V4",
    description: "Минималистичный силуэт головы человека с шестеренками внутри.",
    promptUrl: "Psychology podcast cover, minimalist human head silhouette with gears inside, calm tones, thoughtful, 4k"
  }
  ,{
    id: 119,
    title: "Реклама одежды (Осень) V4",
    description: "Девушка в стильном осеннем пальто в парке, падающие листья.",
    promptUrl: "Autumn clothing advertisement, young woman in stylish coat in a park, falling leaves, warm colors, fashion photography, 8k"
  }
  ,{
    id: 120,
    title: "Визуал для фитнес-приложения V4",
    description: "Смартфон с интерфейсом графиков активности, рядом гантели.",
    promptUrl: "Fitness app visual, smartphone showing activity charts, dumbbells nearby, gym setting, modern, 4k"
  }
  ,{
    id: 121,
    title: "Баннер для языковой школы V4",
    description: "Девушка в наушниках с ноутбуком радостно общается онлайн.",
    promptUrl: "Language school banner, happy young woman with headphones and laptop talking online, bright background, 4k"
  }
  ,{
    id: 122,
    title: "Реклама косметики (Сыворотка) V4",
    description: "Капля прозрачной сыворотки падает с пипетки, макро.",
    promptUrl: "Cosmetics ad serum, clear serum drop falling from pipette, macro photography, clean medical style, 8k"
  }
  ,{
    id: 123,
    title: "Промо турагентства (Сафари) V4",
    description: "Слон и жираф на фоне африканского заката, саванна.",
    promptUrl: "Safari travel agency promo, elephant and giraffe against African sunset, savanna, wildlife, beautiful, 4k"
  }
  ,{
    id: 124,
    title: "Визуал доставки пиццы V4",
    description: "Горячая пицца пепперони, тянущийся сыр, летящие кусочки салями.",
    promptUrl: "Pizza delivery visual, hot pepperoni pizza, stretching cheese, flying salami slices, dynamic food photography, 8k"
  }
  ,{
    id: 125,
    title: "Реклама банковской карты V4",
    description: "Стильная черная кредитная карта парит в воздухе на темном фоне.",
    promptUrl: "Bank card ad, stylish black credit card floating in mid air, dark minimalist background, premium, 4k"
  }
  ,{
    id: 126,
    title: "Обложка для вебинара (Маркетинг) V4",
    description: "Доска с графиком роста (стрелка вверх) и иконки соцсетей.",
    promptUrl: "Marketing webinar cover, whiteboard with growth chart arrow up and social media icons, professional corporate, 4k"
  }
  ,{
    id: 127,
    title: "Баннер магазина кроссовок V4",
    description: "Новая пара белых кроссовок на неоновом фоне в стиле киберпанк.",
    promptUrl: "Sneaker store banner, new white sneakers on neon cyberpunk background, futuristic street fashion, 8k"
  }
  ,{
    id: 128,
    title: "Промо салона красоты (Маникюр) V4",
    description: "Идеальный маникюр крупным планом, красивые ногти.",
    promptUrl: "Beauty salon promo manicure, perfect nail polish close up, clean aesthetic beauty photography, 4k"
  }
  ,{
    id: 129,
    title: "Реклама энергетического напитка V4",
    description: "Банка энергетика с брызгами яркой жидкости и льдом.",
    promptUrl: "Energy drink ad, glowing can with bright liquid splashes and ice, highly energetic, vibrant colors, 8k"
  }
  ,{
    id: 130,
    title: "Визуал для студии йоги V4",
    description: "Девушка в позе лотоса на фоне рассвета у океана.",
    promptUrl: "Yoga studio visual, woman in lotus pose at sunrise by the ocean, peaceful, spiritual, calm, 4k"
  }
];

export const mockTasks = businessTasks.map(task => ({
    id: task.id,
    title: task.title,
    description: task.description,
    image: `https://image.pollinations.ai/prompt/${encodeURIComponent(task.promptUrl)}?width=600&height=400&nologo=true`
}));
