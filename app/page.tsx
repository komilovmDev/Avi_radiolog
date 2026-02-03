import { HeroSection } from "@/components/home/hero-section"
import { ProblemSolution } from "@/components/home/problem-solution"
import { ImagesShowcase } from "@/components/home/images-showcase"
import { BenefitsSection } from "@/components/home/benefits-section"
import { WorkflowSection } from "@/components/home/workflow-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <ImagesShowcase />
      <BenefitsSection />
      <WorkflowSection />
    </>
  )
}
