import Feedback from "./Feedback"
import Footer from "./Footer"
import Brief from "./sections/Brief"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Projects from "./sections/Projects"
import Services from "./sections/Services"
import Skills from "./sections/Skills"

const HomePage = () => {
  return (
    <section className='home-page'>
      <Hero />
      <Brief />
      <Projects />
      <Skills />
      <Services />
      <Pricing />
      <Feedback />
      <Footer />
    </section>
  )
}

export default HomePage
