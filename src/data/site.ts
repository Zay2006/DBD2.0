export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

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
  storyDriven: 'https://www.thestorydrivengame.com/',
  live: 'https://dbdcreativeagency.com',
} as const

export type NavItem = {
  label: string
  to?: string
  href?: string
  children?: NavItem[]
}

export const nav: NavItem[] = [
  { to: '/', label: 'Home' },
  { href: `${site.live}/my-journey/`, label: 'My Journey' },
  { href: `${site.live}/visual-storytelling/`, label: 'Classes' },
  { href: site.storyDriven, label: 'Story Driven' },
  { href: `${site.live}/ifoundareason/`, label: 'Books' },
  {
    href: `${site.live}/filmmaking/`,
    label: 'Filmmaking',
    children: [
      { href: `${site.live}/filmmaking/`, label: 'Filmmaking' },
      { href: `${site.live}/documentary-trailers/`, label: 'Documentary Trailers' },
    ],
  },
  {
    href: `${site.live}/family-photography/`,
    label: 'Photography',
    children: [
      { href: `${site.live}/family-photography/`, label: 'Family Photography' },
      { href: `${site.live}/commercial-photography/`, label: 'Commercial Photography' },
      { href: site.proofing, label: 'Client Portfolio' },
    ],
  },
  { href: `${site.live}/testimonials/`, label: 'Testimonials' },
  { href: `${site.live}/contact/`, label: 'Contact Me' },
]

/** Old rebuild paths → the live WordPress (or Story Driven) page. */
export const liveRoutes: Record<string, string> = {
  '/my-journey': `${site.live}/my-journey/`,
  '/classes': `${site.live}/visual-storytelling/`,
  '/visual-storytelling': `${site.live}/visual-storytelling/`,
  '/story-driven': site.storyDriven,
  '/books': `${site.live}/ifoundareason/`,
  '/ifoundareason': `${site.live}/ifoundareason/`,
  '/filmmaking': `${site.live}/filmmaking/`,
  '/documentary-trailers': `${site.live}/documentary-trailers/`,
  '/family-photography': `${site.live}/family-photography/`,
  '/commercial-photography': `${site.live}/commercial-photography/`,
  '/testimonials': `${site.live}/testimonials/`,
  '/contact': `${site.live}/contact/`,
  '/shop': `${site.live}/store-2/`,
  '/store-2': `${site.live}/store-2/`,
  '/packages': `${site.live}/packages/`,
  '/about': `${site.live}/my-journey/`,
  '/work': `${site.live}/family-photography/`,
  '/hire': `${site.live}/commercial-photography/`,
  '/programs': `${site.live}/visual-storytelling/`,
}

export function liveUrlFor(pathname: string) {
  const key = pathname.replace(/\/$/, '') || '/'
  return liveRoutes[key] ?? null
}

export type MapCluster = 'see' | 'make' | 'begin'

export type MapNode = {
  id: string
  label: string
  kicker: string
  hint: string
  to?: string
  href?: string
  image: string
  x: number
  y: number
  cluster: MapCluster
}

export const mapClusters: { id: MapCluster; label: string }[] = [
  { id: 'see', label: 'See the work' },
  { id: 'make', label: 'Make with us' },
  { id: 'begin', label: 'Begin' },
]

export const mapNodes: MapNode[] = [
  {
    id: 'journey',
    label: 'My Journey',
    kicker: 'Michael',
    hint: 'How the studio began',
    href: `${site.live}/my-journey/`,
    image: asset('/images/michael.jpg'),
    x: 50,
    y: 16,
    cluster: 'begin',
  },
  {
    id: 'family',
    label: 'Family Photography',
    kicker: 'Portraits',
    hint: 'Weddings, portraits, real rooms',
    href: `${site.live}/family-photography/`,
    image: asset('/images/family.jpg'),
    x: 18,
    y: 28,
    cluster: 'see',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    kicker: 'Studio',
    hint: 'Orgs who serve children',
    href: `${site.live}/commercial-photography/`,
    image: asset('/images/jhec-cover.jpg'),
    x: 82,
    y: 28,
    cluster: 'see',
  },
  {
    id: 'film',
    label: 'Filmmaking',
    kicker: 'Motion',
    hint: 'Documentary and promo',
    href: `${site.live}/filmmaking/`,
    image: asset('/images/garry.jpg'),
    x: 11,
    y: 47,
    cluster: 'see',
  },
  {
    id: 'trailers',
    label: 'Docu Trailers',
    kicker: 'Short form',
    hint: 'Stories cut to the bone',
    href: `${site.live}/documentary-trailers/`,
    image: asset('/images/hancock.jpg'),
    x: 89,
    y: 47,
    cluster: 'see',
  },
  {
    id: 'visual',
    label: 'Classes',
    kicker: 'Schools',
    hint: 'The Art of Visual Storytelling',
    href: `${site.live}/visual-storytelling/`,
    image: asset('/images/avs.jpg'),
    x: 17,
    y: 66,
    cluster: 'make',
  },
  {
    id: 'story',
    label: 'Story Driven',
    kicker: 'The game',
    hint: "Unlocking writer's block",
    href: site.storyDriven,
    image: asset('/images/story-cards.jpg'),
    x: 83,
    y: 66,
    cluster: 'make',
  },
  {
    id: 'books',
    label: 'Books',
    kicker: 'Print',
    hint: 'I Found a Reason to Speak',
    href: `${site.live}/ifoundareason/`,
    image: asset('/images/book-ifound.jpg'),
    x: 28,
    y: 82,
    cluster: 'make',
  },
  {
    id: 'shop',
    label: 'Shop',
    kicker: 'Store',
    hint: 'Games and kits',
    href: `${site.live}/store-2/`,
    image: asset('/images/story-board.png'),
    x: 72,
    y: 82,
    cluster: 'make',
  },
  {
    id: 'contact',
    label: 'Contact Me',
    kicker: 'Begin',
    hint: "Let's work together",
    href: `${site.live}/contact/`,
    image: asset('/images/mccarter.jpg'),
    x: 50,
    y: 86,
    cluster: 'begin',
  },
]
