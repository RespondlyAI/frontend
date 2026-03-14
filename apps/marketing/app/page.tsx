import { Hero3D } from "@/components/hero/splineScene"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { FocusRailSection } from "@/components/sections/focus-rail-section"
import { WhyChooseBento } from "@/components/sections/why-choose-bento"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main>
      <Hero3D />
      <FeatureGrid />
      <FocusRailSection />
      <WhyChooseBento />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}