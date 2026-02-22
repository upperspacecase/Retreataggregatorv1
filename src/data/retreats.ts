export interface Retreat {
  slug: string;
  name: string;
  location: string;
  country: string;
  tagline: string;
  description: string[];
  experience: string[];
  duration: string;
  priceRange: string;
  priceNote: string;
  includes: string[];
  dates: string[];
  maxGuests: number;
  intents: Intent[];
  images: {
    hero: string;
    gallery: string[];
  };
  preparation: {
    packing: string[];
    whatToExpect: string[];
    personalNote: string;
  };
}

export type Intent =
  | "Stillness"
  | "Movement"
  | "Transformation"
  | "Connection"
  | "Reset";

export const intents: { label: Intent; description: string }[] = [
  {
    label: "Stillness",
    description: "Meditation, silence, and deep inner quiet",
  },
  {
    label: "Movement",
    description: "Yoga, dance, somatic practices, and body wisdom",
  },
  {
    label: "Transformation",
    description: "Profound personal shifts and deep inner work",
  },
  {
    label: "Connection",
    description: "Community, ceremony, and shared experience",
  },
  {
    label: "Reset",
    description: "Rest, recovery, and gentle recalibration",
  },
];

export const retreats: Retreat[] = [
  {
    slug: "casa-silencio-galicia",
    name: "Casa del Silencio",
    location: "Costa da Morte, Galicia",
    country: "Spain",
    tagline:
      "Four days of silence on the Galician coast, where the only schedule is the tide.",
    description: [
      "Perched on the granite cliffs of Costa da Morte, Casa del Silencio is not a place that announces itself. You arrive by a narrow road that winds through eucalyptus groves, and the first thing you notice is the sound — or rather, the absence of it. Just wind, waves, and the occasional cry of a seabird.",
      "The house itself is a restored 18th-century rectory, its thick stone walls holding a silence that feels earned, not imposed. There are no schedules posted on the wall, no bells summoning you to sessions. Your days belong to you.",
      "Most mornings, guests find their way to the meditation hall — a simple room with floor-to-ceiling windows facing the Atlantic. The practice here is vipassana-influenced but undogmatic. Sit if you want. Walk the coastal path if you need to move. The teachers are present but never prescriptive.",
    ],
    experience: [
      "You wake to the sound of waves against granite. The bedroom is cool, the linen heavy and soft. Through the window, the Atlantic stretches to the horizon, steel-grey and alive.",
      "Breakfast appears in the kitchen at your own pace — dense sourdough, local honey, fruit from the garden. You eat in silence, and the silence feels like a gift rather than a rule.",
      "The morning practice is optional — most mornings you go. The meditation hall is cool stone and warm light, facing the sea. An hour passes like ten minutes.",
      "Afternoons dissolve into long walks along the cliff paths, reading in the library, or simply sitting in the walled garden watching clouds build over the ocean. Time moves differently here.",
      "Dinner is communal but quiet — seasonal Galician cooking by a local chef who treats vegetables like poetry. Wine is offered without fanfare. You sleep deeply, the sound of the sea threading through your dreams.",
    ],
    duration: "4 nights",
    priceRange: "\u20AC1,200 \u2013 \u20AC1,600",
    priceNote: "Varies by room selection. All meals included.",
    includes: [
      "All meals (locally sourced, seasonal)",
      "Daily guided meditation (optional)",
      "Coastal walking guides",
      "Private room with ocean or garden view",
      "Airport transfer from Santiago de Compostela",
    ],
    dates: [
      "March 15\u201319, 2026",
      "April 12\u201316, 2026",
      "May 10\u201314, 2026",
      "September 6\u201310, 2026",
    ],
    maxGuests: 12,
    intents: ["Stillness", "Reset"],
    images: {
      hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Layers for coastal weather \u2014 mornings are cool even in summer",
        "Comfortable walking shoes for cliff paths",
        "A journal, if that\u2019s part of your practice",
        "Something warm for evening meditation",
        "Leave the laptop. You won\u2019t need it.",
      ],
      whatToExpect: [
        "Silence is maintained in common areas but is not absolute \u2014 practical communication is welcome",
        "No structured schedule. Teachers are available for one-on-one guidance by request",
        "Mobile signal is limited. Wi-Fi is available in the library only",
        "The nearest village is a 20-minute walk \u2014 a beautiful one",
      ],
      personalNote:
        "The silence at Casa del Silencio isn\u2019t austere \u2014 it\u2019s generous. Most guests tell us they were nervous about four days without conversation, and then didn\u2019t want to leave. Trust the process, and trust yourself.",
    },
  },
  {
    slug: "bambu-ubud",
    name: "Bambu Retreat",
    location: "Ubud, Bali",
    country: "Indonesia",
    tagline:
      "A week of movement and stillness in the rice terraces, where the jungle teaches patience.",
    description: [
      "Bambu sits in a river valley north of Ubud, far enough from the town\u2019s tourist pulse to feel genuinely remote. The compound is built entirely of bamboo and reclaimed teak \u2014 open-air pavilions connected by stone pathways that wind through tropical gardens.",
      "The program here is rooted in traditional Balinese wellness practices combined with contemporary yoga and somatic work. Each day has a rhythm but never a rigidity: morning flow, afternoon bodywork or breathwork, evening ceremony. The teachers are a mix of Balinese healers and international practitioners who\u2019ve made Bali their home.",
      "What makes Bambu rare is its relationship with the surrounding community. The retreat employs local staff exclusively, sources food from neighboring farms, and invites guests into genuine cultural exchange \u2014 not performance. A temple ceremony here is not a tourist attraction. It\u2019s an invitation.",
    ],
    experience: [
      "You wake before dawn to the sound of roosters and gamelan practice from the village below. The air is warm and heavy with frangipani. Your open-air room glows with the first light filtering through bamboo lattice.",
      "Morning practice happens on a raised platform overlooking the river gorge. The yoga is vinyasa-based but deeply informed by somatic principles \u2014 you\u2019re guided to feel rather than perform. Birdsong is the soundtrack.",
      "After a breakfast of tropical fruit, eggs from the village, and Balinese coffee, the morning is yours. Most guests swim in the river pool, read in hammocks, or walk the rice terraces that climb the hillside above the retreat.",
      "Afternoon sessions rotate: breathwork, traditional Balinese massage, sound healing, or guided meditation. Nothing is mandatory. Everything is offered with genuine warmth.",
      "Evenings often include ceremony \u2014 candle-lit offerings by the river, chanting with local musicians, or simply sitting together as the jungle comes alive with the sound of insects and tree frogs.",
    ],
    duration: "7 nights",
    priceRange: "$2,400 \u2013 $3,200",
    priceNote: "Varies by accommodation. All meals and treatments included.",
    includes: [
      "All meals (organic, locally sourced)",
      "Daily yoga and movement practice",
      "Three bodywork sessions (Balinese massage, breathwork)",
      "Temple ceremony and cultural immersion",
      "Open-air bamboo accommodation",
      "Airport transfer from Denpasar",
    ],
    dates: [
      "March 1\u20138, 2026",
      "April 5\u201312, 2026",
      "June 14\u201321, 2026",
      "October 4\u201311, 2026",
    ],
    maxGuests: 16,
    intents: ["Movement", "Connection", "Transformation"],
    images: {
      hero: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80",
        "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80",
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80",
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Light, breathable clothing \u2014 cotton and linen",
        "A sarong for temple visits (or borrow one of ours)",
        "Insect repellent for evening ceremonies",
        "Yoga mat if you\u2019re particular (we provide them)",
        "An open heart and unhurried mind",
      ],
      whatToExpect: [
        "The retreat is open-air \u2014 you\u2019ll share space with geckos, butterflies, and the occasional frog",
        "Wi-Fi is available but intentionally slow. Embrace it.",
        "Balinese ceremonies are sacred. Your guides will explain protocol.",
        "The food is extraordinary. Many guests say it\u2019s the best they\u2019ve eaten.",
      ],
      personalNote:
        "Bali has a way of finding exactly what you need and delivering it in unexpected ways. Come without an agenda and you\u2019ll leave with more than you imagined. The jungle is a generous teacher.",
    },
  },
  {
    slug: "highland-house-scotland",
    name: "Highland House",
    location: "Isle of Skye, Scotland",
    country: "United Kingdom",
    tagline:
      "Wild swimming, whisky, and the particular magic of Scottish light on ancient stone.",
    description: [
      "Highland House is a converted crofter\u2019s cottage on the eastern shore of Skye, expanded over decades into a rambling, warm refuge of thick walls, deep fireplaces, and windows that frame the Cuillin ridge like living paintings.",
      "This is not a silent retreat. It\u2019s not a yoga retreat. It\u2019s a reset \u2014 a week designed around the Scottish landscape and the particular restorative power of wild, beautiful places. Each day involves being outside: guided hill walks, wild swimming in lochs and sea pools, foraging with a local botanist, cooking together.",
      "The retreat is run by Fiona and James, who left careers in architecture and psychotherapy respectively to create the kind of place they\u2019d always wanted to find. Their hosting style is generous and unforced \u2014 exceptional food, single malt by the fire, conversations that go deep because the setting invites it.",
    ],
    experience: [
      "You wake to rain on the window and the smell of peat smoke from the kitchen stove. The light is silver and soft \u2014 a Highland morning that makes everything feel gentled.",
      "Breakfast is unhurried: porridge with cream and heather honey, eggs from the croft\u2019s own chickens, sourdough toast with local butter. The kitchen is the heart of the house, and mornings here feel like family.",
      "The day\u2019s adventure depends on weather and whim. A hill walk to the Old Man of Storr in crisp air. Wild swimming in a hidden loch where the water is dark and cold and absolutely alive. Foraging sea herbs on the rocky shore.",
      "Afternoons might bring a cooking session with Fiona \u2014 venison stew, foraged mushroom risotto, or the simplest possible fish supper. Or you might disappear with a book into the snug by the fire.",
      "Evenings are the best part. Long, candlelit dinners. Whisky from James\u2019s carefully curated collection. Conversations about everything and nothing. Sometimes someone plays guitar. Sometimes you just listen to the wind.",
    ],
    duration: "6 nights",
    priceRange: "\u00A31,800 \u2013 \u00A32,400",
    priceNote: "Varies by room. All meals, activities, and whisky included.",
    includes: [
      "All meals (locally sourced, often foraged)",
      "Guided hill walks and wild swimming",
      "Foraging and cooking sessions",
      "Curated whisky tasting evenings",
      "Private room in the main house or cottage",
      "Transfer from Portree",
    ],
    dates: [
      "May 2\u20138, 2026",
      "June 13\u201319, 2026",
      "August 22\u201328, 2026",
      "September 19\u201325, 2026",
    ],
    maxGuests: 8,
    intents: ["Reset", "Connection"],
    images: {
      hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
        "https://images.unsplash.com/photo-1470770841497-7b3212e57498?w=1200&q=80",
        "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1200&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Waterproof layers \u2014 Skye weather changes by the hour",
        "Sturdy walking boots and wool socks",
        "A swimsuit and a thick towel for wild swimming",
        "Something warm and comfortable for long evenings",
        "A flask \u2014 Fiona will fill it with something wonderful for your walks",
      ],
      whatToExpect: [
        "Maximum 8 guests. The group becomes close quickly.",
        "Wild swimming is exhilarating but cold. Wetsuits available on request.",
        "Mobile signal is patchy. The house has Wi-Fi.",
        "Fiona and James are extraordinary hosts. Let them take care of you.",
      ],
      personalNote:
        "Skye has a quality of light that changes how you see things \u2014 literally and otherwise. Give yourself permission to do less than you think you should. The landscape does the work.",
    },
  },
  {
    slug: "desert-springs-joshua-tree",
    name: "Desert Springs",
    location: "Joshua Tree, California",
    country: "United States",
    tagline:
      "Three days of breathwork and starlight in the high desert, where the horizon teaches perspective.",
    description: [
      "Desert Springs is a private compound in the high desert outside Joshua Tree National Park \u2014 a cluster of minimalist adobe buildings arranged around a natural spring that\u2019s been a gathering place for centuries. The architecture is deliberately understated: clean lines, natural materials, vast windows that make the desert landscape the primary artwork.",
      "The retreat is built around breathwork \u2014 specifically holotropic and Wim Hof methods \u2014 combined with cold exposure, sound healing, and extended time in nature. The facilitators, Maya and Ren, trained with Stanislav Grof and have a combined thirty years of practice. Their approach is rigorous but deeply compassionate.",
      "What draws people here is the desert itself. The Mojave has a particular energy that strips away pretense. Under skies so clear you can see the Milky Way with your naked eye, the questions that seemed complicated in the city become remarkably simple.",
    ],
    experience: [
      "You arrive in late afternoon, when the desert light turns everything gold. The compound emerges from the landscape like something that grew there \u2014 adobe walls the color of sand, mesquite trees casting long shadows across the courtyard.",
      "Your room is a study in desert minimalism: a platform bed, a sheepskin rug, a window framing a Joshua tree silhouetted against the sky. The air is dry and clean and scented with sage.",
      "Morning breathwork sessions happen outdoors, on a stone platform facing east. As the sun crests the mountains, Maya guides you through increasingly deep breathing patterns. The desert air seems to amplify everything \u2014 sensations are sharper, emotions closer to the surface.",
      "Afternoons involve cold plunge in the spring-fed pool (bracing at altitude), desert walks among the boulder formations, or rest in the silence that only exists in places this remote.",
      "Night is the revelation. After a simple, beautiful dinner, the group gathers on the mesa for stargazing. The Milky Way is not a suggestion here \u2014 it\u2019s a river of light across the sky. Sound bowls and gentle chanting under infinite stars. This is the moment people remember.",
    ],
    duration: "3 nights",
    priceRange: "$1,800 \u2013 $2,200",
    priceNote: "All-inclusive. Private and shared rooms available.",
    includes: [
      "All meals (plant-forward, organic)",
      "Daily breathwork sessions",
      "Cold plunge access",
      "Sound healing ceremony",
      "Stargazing experience",
      "Private or shared desert accommodation",
    ],
    dates: [
      "March 20\u201323, 2026",
      "April 17\u201320, 2026",
      "October 9\u201312, 2026",
      "November 13\u201316, 2026",
    ],
    maxGuests: 14,
    intents: ["Transformation", "Stillness", "Reset"],
    images: {
      hero: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1200&q=80",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Layers \u2014 desert days are warm but nights drop sharply",
        "Sunscreen and a wide-brimmed hat",
        "A water bottle you love (hydration is essential at altitude)",
        "Comfortable, loose clothing for breathwork",
        "A sleeping bag liner if you want to sleep under the stars (many do)",
      ],
      whatToExpect: [
        "Breathwork can bring up intense emotions. The facilitators are experienced and present.",
        "The cold plunge is cold. Start with short immersions and build up.",
        "No cell service at the compound. Embrace the disconnection.",
        "The desert is beautiful but unforgiving \u2014 always carry water on walks.",
      ],
      personalNote:
        "The desert has a way of showing you exactly what you need to see. Don\u2019t come with a plan for what you want to get out of this \u2014 come with willingness, and the experience will find its own shape. We\u2019re honored to hold space for your journey.",
    },
  },
  {
    slug: "mountain-refuge-alps",
    name: "Berghain Refuge",
    location: "Engadin Valley, Switzerland",
    country: "Switzerland",
    tagline:
      "Alpine silence and somatic healing at 2,000 meters, where the mountains hold everything.",
    description: [
      "Berghain Refuge occupies a converted mountain inn in the Upper Engadin \u2014 a region of Switzerland where the light is so clear it\u2019s almost hallucinatory. At 2,000 meters, above the tree line, the landscape is reduced to its essentials: rock, snow, sky, and the extraordinary silence of altitude.",
      "The program combines somatic experiencing (a body-based approach to trauma healing) with alpine movement \u2014 hiking, cold lake swimming, and guided breathwork at altitude. The lead practitioner, Dr. Elisa Brandt, trained with Peter Levine and brings twenty years of clinical experience to a setting that amplifies the body\u2019s natural capacity for healing.",
      "This retreat is for people who\u2019ve done some inner work and are ready to go deeper. It\u2019s not entry-level wellness \u2014 it\u2019s sophisticated, evidence-based somatic healing in a setting of extraordinary natural power. Meals are simple, precise, and beautiful \u2014 Alpine cuisine at its most refined.",
    ],
    experience: [
      "You wake to silence so complete it rings. Your room is simple but perfectly considered: warm wood, thick wool blankets, a window that frames the Piz Palii glacier. The morning light at this altitude is unlike anything you\u2019ve experienced \u2014 crystal, clean, almost liquid.",
      "Breakfast is Swiss precision meets mountain generosity: fresh bread, alpine cheese, bircher muesli with berries, strong coffee. Eaten slowly, by a window, watching the peaks catch the first sun.",
      "Morning somatic sessions happen in a studio with floor-to-ceiling windows facing the mountain wall. Dr. Brandt guides with a voice that\u2019s both clinical and deeply kind. You learn to listen to what your body has been trying to tell you.",
      "Afternoons involve the mountains themselves. Guided hikes along high-altitude trails, pausing at glacier lakes for breathwork. Or swimming in Lej da Staz \u2014 the water is snowmelt-cold, and the gasp when you enter is followed by a rush of aliveness that lasts for hours.",
      "Evenings are quiet. A simple, exquisite dinner. Tea by the fire. Perhaps conversation with fellow guests, perhaps not. Sleep at altitude is deep and dreamful. The mountains hold everything.",
    ],
    duration: "5 nights",
    priceRange: "CHF 3,200 \u2013 CHF 4,500",
    priceNote:
      "Includes all meals, somatic sessions, and guided activities. Travel to Engadin not included.",
    includes: [
      "All meals (refined Alpine cuisine)",
      "Daily somatic experiencing sessions with Dr. Brandt",
      "Guided mountain walks and wild swimming",
      "Breathwork at altitude",
      "Private room with mountain view",
      "Transfer from St. Moritz station",
    ],
    dates: [
      "June 20\u201325, 2026",
      "July 18\u201323, 2026",
      "August 29\u2013September 3, 2026",
    ],
    maxGuests: 10,
    intents: ["Transformation", "Stillness", "Movement"],
    images: {
      hero: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Proper mountain gear: waterproof jacket, hiking boots, warm layers",
        "Swimwear for lake swimming (neoprene gloves recommended)",
        "Sunglasses and high-SPF sunscreen (altitude UV is intense)",
        "Comfortable clothing for somatic sessions",
        "A notebook for integration notes",
      ],
      whatToExpect: [
        "Altitude may cause mild symptoms the first day. Arrive a day early in St. Moritz if possible.",
        "Somatic sessions can surface strong emotions. This is expected and supported.",
        "The food is outstanding but portions are intentional \u2014 nourishing, not indulgent.",
        "Maximum 10 guests. Privacy is respected. Depth is invited.",
      ],
      personalNote:
        "The mountains at this altitude have a quality that\u2019s hard to describe but impossible to forget. They reduce everything to what matters. Come ready to be surprised by what your body already knows.",
    },
  },
  {
    slug: "rio-selvagem-brazil",
    name: "Rio Selvagem",
    location: "Chapada dos Veadeiros, Brazil",
    country: "Brazil",
    tagline:
      "Dance, water, and ceremony in the Brazilian cerrado, where the earth hums beneath your feet.",
    description: [
      "Rio Selvagem is hidden in the cerrado highlands of central Brazil, near the crystal-studded landscapes of Chapada dos Veadeiros \u2014 a UNESCO-recognized region of extraordinary biodiversity and geological power. The retreat sits on a private reserve, accessible by a dirt road that winds through tall grasses and stands of twisted cerrado trees.",
      "This is a movement retreat in the deepest sense. Combining 5Rhythms dance, capoeira, ecstatic dance, and traditional Brazilian body practices, the program is facilitated by a collective of Brazilian and international practitioners who understand movement as a language for transformation.",
      "The water here is extraordinary. Natural pools fed by crystalline springs, waterfalls hidden in sandstone canyons, and rivers that run over beds of rose quartz. Water is central to the experience \u2014 ceremony, play, healing, and simple joy.",
    ],
    experience: [
      "You wake to birdsong \u2014 a dawn chorus that\u2019s almost orchestral. Your cabin is simple, beautiful: whitewashed walls, a hammock on the porch, screened windows open to the morning air. The sky is enormous.",
      "Morning practice begins with gentle body awakening \u2014 stretching, shaking, finding your edges. Then music begins, and the dance builds. 5Rhythms takes you through waves of movement: flowing, staccato, chaos, lyrical, stillness. By the end, you\u2019re someone you didn\u2019t know you could be.",
      "After a vibrant breakfast of tropical fruits, tapioca, and fresh juice, the group walks to one of the natural pools. The water is so clear you can count the crystals in the riverbed. Swimming here feels like being held by the earth itself.",
      "Afternoon sessions vary: capoeira with a local mestre, somatic exploration, voice work, or guided walks through the cerrado with a botanist who knows every medicinal plant. The land is alive with intention.",
      "Evenings bring ceremony. Sometimes it\u2019s a fire circle with singing. Sometimes it\u2019s ecstatic dance under the stars. Sometimes it\u2019s simply gathering around a long table for a meal prepared with love \u2014 Brazilian home cooking elevated by intention and extraordinary ingredients.",
    ],
    duration: "7 nights",
    priceRange: "$1,900 \u2013 $2,800",
    priceNote: "Includes all meals, activities, and ceremonies. Flights to Bras\u00edlia not included.",
    includes: [
      "All meals (Brazilian home cooking, plant-rich)",
      "Daily movement and dance practice",
      "Capoeira sessions",
      "Guided nature excursions and waterfall visits",
      "Evening ceremonies",
      "Shared or private cabin accommodation",
      "Transfer from Bras\u00edlia or Alto Para\u00edso",
    ],
    dates: [
      "April 25\u2013May 2, 2026",
      "July 11\u201318, 2026",
      "September 12\u201319, 2026",
    ],
    maxGuests: 20,
    intents: ["Movement", "Connection", "Transformation"],
    images: {
      hero: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
        "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1200&q=80",
      ],
    },
    preparation: {
      packing: [
        "Loose, comfortable clothing for movement",
        "A swimsuit that stays on in waterfalls",
        "Sturdy sandals and walking shoes",
        "Sunscreen and insect repellent",
        "An open spirit \u2014 the cerrado will do the rest",
      ],
      whatToExpect: [
        "The retreat is immersive. Plan to disconnect from devices.",
        "Movement sessions can be intense. All fitness levels welcome \u2014 the practice meets you where you are.",
        "The cerrado is a powerful landscape. Some people experience strong emotions just being in it.",
        "Brazilian warmth is not a stereotype. The hospitality here will change your expectations.",
      ],
      personalNote:
        "Chapada dos Veadeiros is one of the most energetically potent places on Earth \u2014 the quartz deposits beneath the soil literally vibrate. Come ready to move, to feel, to be surprised by joy. The dance will find you.",
    },
  },
];
