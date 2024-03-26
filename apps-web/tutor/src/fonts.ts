import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from 'next/font/google'

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

export const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-ibm-plex-sans-thai',
})
