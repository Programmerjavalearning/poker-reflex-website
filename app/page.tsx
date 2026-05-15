import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import EmailCapture from '@/components/EmailCapture'
import FAQ from '@/components/FAQ'
import DownloadCTA from '@/components/DownloadCTA'
import TrustBadges from '@/components/TrustBadges'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        <Hero />
        <Features />
        <Testimonials />
        <Stats />
        <EmailCapture />
        <FAQ />
        <DownloadCTA />
        <TrustBadges />
      </main>
      <Footer />
    </>
  )
}
