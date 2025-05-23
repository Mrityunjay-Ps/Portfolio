import About from "@/components/about";
import BottomSectionDivider from "@/components/bottom-section-divder";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import { Projects } from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About />
      <Skills />
      <Projects />
      <BottomSectionDivider />
      <Contact />
    </main>
  )
}
