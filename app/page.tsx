import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Growth from "@/components/Growth";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Education />
        <Growth />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
