export const site = {
  name: 'Driven by Design',
  legal: 'Driven by Design Creative Agency LLC',
  tagline: 'Multimedia visual storytelling',
  sentence:
    'Michael Clay helps families, schools, and organizations who serve children tell true stories through photography, film, writing, and play.',
  email: 'dbdcreativeagency@gmail.com',
  phone: '(609) 850-8031',
  phoneHref: 'tel:+16098508031',
  instagram: 'https://www.instagram.com/dbdcreativeagency/',
  proofing: 'https://proof.dbdcreativeagency.com/',
  youtube: 'https://www.youtube.com/@dbdcreativeagency6698',
  amazonBook:
    'https://www.amazon.com/s?k=I+Found+A+Reason+To+Speak+Michael+L+Clay',
} as const

export const nav = [
  { to: '/work', label: 'Work' },
  { to: '/hire', label: 'Hire' },
  { to: '/programs', label: 'Programs' },
  { to: '/story-driven', label: 'Story Driven' },
  { to: '/books', label: 'Books' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
] as const

export type WorkItem = {
  src: string
  alt: string
  title: string
  caption: string
  category: 'Photography' | 'Film' | 'Community'
}

export const work: WorkItem[] = [
  {
    src: '/images/hero-loc.jpg',
    alt: 'Soul line dancers in a community hall',
    title: 'Community on the Line',
    caption: 'Library of Congress Community Collections',
    category: 'Community',
  },
  {
    src: '/images/loc-dance.jpg',
    alt: 'Dancers moving together at a community event',
    title: 'Atrium Dance Studio',
    caption: 'Library of Congress · soul line dancing',
    category: 'Photography',
  },
  {
    src: '/images/family.jpg',
    alt: 'A couple embracing at a birthday celebration',
    title: 'Simone, 40',
    caption: 'Candid family documentary',
    category: 'Photography',
  },
  {
    src: '/images/family-glaze.jpg',
    alt: 'Family portrait session',
    title: 'The Glaze Family',
    caption: 'Portraiture',
    category: 'Photography',
  },
  {
    src: '/images/wedding-yang.jpg',
    alt: 'Wedding portrait',
    title: 'The Yang Wedding',
    caption: 'Wedding documentary',
    category: 'Photography',
  },
  {
    src: '/images/wedding.jpg',
    alt: 'Wedding day moment',
    title: 'Wedding day',
    caption: 'Unposed coverage',
    category: 'Photography',
  },
  {
    src: '/images/headshots.jpg',
    alt: 'Outdoor professional headshot of a woman smiling',
    title: 'Corporate headshots',
    caption: 'For speaking, faculty, and social',
    category: 'Photography',
  },
  {
    src: '/images/jhec.jpg',
    alt: 'Education consultant teaching in a classroom',
    title: 'Jennifer Howard Education Consulting',
    caption: 'Editorial portraiture, 2026',
    category: 'Photography',
  },
  {
    src: '/images/mccarter.jpg',
    alt: 'Crowd at an outdoor theatre block party',
    title: 'McCarter Theatre Block Party',
    caption: 'Event photography',
    category: 'Photography',
  },
  {
    src: '/images/favorites.jpg',
    alt: 'Documentary moment from a community gathering',
    title: 'Favorites, 2019',
    caption: 'Community event',
    category: 'Photography',
  },
  {
    src: '/images/avs.jpg',
    alt: 'Elementary students rehearsing a story in their classroom',
    title: 'Art of Visual Storytelling',
    caption: "Cooper's Poynt Family School, Camden",
    category: 'Film',
  },
  {
    src: '/images/hancock.jpg',
    alt: 'Youth documentary portrait, Hancock Squad',
    title: '315 Hancock Squad',
    caption: 'Documentary still',
    category: 'Film',
  },
  {
    src: '/images/garry.jpg',
    alt: 'On the Garry family documentary project poster',
    title: 'On the Garry',
    caption: 'Family oral history · Penn MAKUU, Willingboro Library',
    category: 'Film',
  },
  {
    src: '/images/story-legacy.jpg',
    alt: 'Students gathered around the Story Driven board game',
    title: 'Story Driven at Legacy Charter',
    caption: 'Classroom residency',
    category: 'Community',
  },
  {
    src: '/images/story-life.jpg',
    alt: 'Life-sized Story Driven board game laid out on a lawn',
    title: 'Shining a Light on Our Stories',
    caption: '1,200 sq ft board · families walk the game',
    category: 'Community',
  },
  {
    src: '/images/book-signing.jpg',
    alt: 'First book signing for I Found a Reason to Speak',
    title: 'I Found a Reason to Speak',
    caption: 'First book signing, December 2024',
    category: 'Community',
  },
  {
    src: '/images/expo.jpg',
    alt: 'Story Driven table at a homeschool expo',
    title: 'Maryland Homeschool Expo',
    caption: 'Story Driven on the road',
    category: 'Community',
  },
  {
    src: '/images/sitwrite.jpg',
    alt: 'Sit and write Story Driven session',
    title: 'Sit & Write',
    caption: 'Family writing session',
    category: 'Community',
  },
]

export const testimonials = [
  {
    quote:
      'If you are looking for a creative agency that is professional, communicative, efficient, and delivers a customer-centered product on time, choose Driven by Design.',
    name: 'World Cafe Live',
    role: 'Arts education documentation',
  },
  {
    quote:
      'These shots are amazing. We have been dealing with photographers lately who are not at your level of expertise. These are very, very refreshing.',
    name: 'McCarter Theatre',
    role: 'Event photography',
  },
  {
    quote:
      "Mr. Clay's program is innovative to say the least. The impact on my students is monumental. They were script writers and camera operators, and they were ready.",
    name: "Cooper's Poynt Family School",
    role: 'Art of Visual Storytelling',
  },
  {
    quote:
      'Michael over-delivered. Under immense time constraints he produced four promotional videos that elevated our nominations to award-worthy status.',
    name: 'Polo Ridge Apartments',
    role: 'Garden State Awards',
  },
  {
    quote:
      'We have worked with several videographers over the years and this was the best experience we have had. Polished, professional, and so quick we were amazed.',
    name: 'Whitesbog Preservation Trust',
    role: 'Oral history, NJ Humanities Council',
  },
  {
    quote:
      'He curates them for you. He understood what the company was seeking and was able to communicate that in the photos.',
    name: 'Segunda Quimbamba',
    role: 'Student recital',
  },
]

export const partners = [
  'Library of Congress',
  'Smithsonian Center for Folklife & Cultural Heritage',
  'African American Museum of Philadelphia',
  'University of Pennsylvania MAKUU',
  'McCarter Theatre',
  'World Cafe Live',
]

export const timeline = [
  {
    year: '2009',
    title: 'The calling',
    body: 'Began teaching entrepreneurship at Leap Academy and found the work was really about students’ lives.',
  },
  {
    year: '2013',
    title: 'MKC Photography',
    body: 'Opened a photography practice with his wife, then spent years documenting families and organizations in South Jersey.',
  },
  {
    year: '2017',
    title: 'Driven by Design',
    body: 'Combined the businesses into Driven by Design Creative Agency LLC — one studio for stills, film, and teaching.',
  },
  {
    year: '2018',
    title: 'Classrooms and history',
    body: 'Designed the Art of Visual Storytelling and launched Driven For Him Inc, a 501(c)(3) for teaching history through visual story.',
  },
  {
    year: '2022',
    title: 'Library of Congress',
    body: 'Photographed Community on the Line: Soul Line Dancing for the Library of Congress Community Collections — then returned in 2023.',
  },
  {
    year: '2025',
    title: 'Story Driven',
    body: 'Released Story Driven: Unlocking Writer’s Block, a physical writing game, and published I Found a Reason to Speak.',
  },
  {
    year: '2026',
    title: 'The board on the road',
    body: 'With his wife, staged Shining a Light on Our Stories — families walking a 1,200 sq ft version of the game, writing and filming as they went.',
  },
]
