export const SITE_URL = 'https://poker-reflex.com'

// App store links. The App Store URL uses the universal id form so it
// auto-localizes to each visitor's storefront; the Play URL localizes too.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6761329446'
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.alexischup.pokerreflex'

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
