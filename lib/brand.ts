export const SITE_URL = 'https://www.poker-reflex.com'

export const BRAND_ASSETS = {
  logoSvgPath: '/brand/poker-reflex-logo.svg',
  emailLogoPath: '/brand/poker-reflex-logo-email.png',
  squareLogoPath: '/brand/poker-reflex-logo-square-512.png',
  logoSvgUrl: `${SITE_URL}/brand/poker-reflex-logo.svg`,
  emailLogoUrl: `${SITE_URL}/brand/poker-reflex-logo-email.png`,
  squareLogoUrl: `${SITE_URL}/brand/poker-reflex-logo-square-512.png`,
} as const

export const BRAND_ASSET_LIST = [
  {
    name: 'SVG logo',
    path: BRAND_ASSETS.logoSvgPath,
    url: BRAND_ASSETS.logoSvgUrl,
    usage: 'Web and brand references',
  },
  {
    name: 'Email logo',
    path: BRAND_ASSETS.emailLogoPath,
    url: BRAND_ASSETS.emailLogoUrl,
    usage: 'Transactional emails',
  },
  {
    name: 'Square logo 512',
    path: BRAND_ASSETS.squareLogoPath,
    url: BRAND_ASSETS.squareLogoUrl,
    usage: 'SEO, metadata, app icons',
  },
] as const
