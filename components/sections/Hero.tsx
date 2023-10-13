import Image from "next/image"

const Hero = () => {
  return (
    <section className='hero-sec'>
      <section className='absolute inset-0'>
        <Image
          src='/assets/images/mesh-img.svg'
          alt='mesh'
          fill
          style={{ objectFit: "cover" }}
        />
      </section>
      <h2>Yours Full-Stack Developer</h2>
      <h1>Arpit Verma</h1>
      <h2>I build Fast, Elegant & Creative Web Applications</h2>
    </section>
  )
}

export default Hero
