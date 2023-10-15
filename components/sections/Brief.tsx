import GenericPages from "@/utils/GenericPages"
import Image from "next/image"

const Brief = () => {
  return (
    <GenericPages title={'Brief Intro'} bgColor='lightGrey'>
      <section className='brief-intro-sec'>
        <p>I am a Freelancer, Full-Stack Developer & Open-Source Contributor. Also, I have great work experience in building products & services for various startups. Being a curious developer, I am currently exploring the vast field of DevOps in as full-time role.</p>
        <section className='my-profile '>
          <Image
            src='/assets/images/Arpit-img.svg'
            alt='Arpit Verma'
            height={100}
            width={100}
          // fill
          // style={{
          //   objectFit: 'cover'
          // }}
          />
          <p>arpitv970@gmail.com</p>
        </section>
      </section>
      <section></section>
      <button></button>
    </GenericPages>
  )
}

export default Brief
