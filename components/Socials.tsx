import { user } from "@/utils/index";
import Image from "next/image";
import Link from "next/link";
const Socials = () => {
  return (
    <section className='user-socials'>
      {
        user.socials.map((social, key) => (
          <Link
            href={social.url}
            className='social'
            key={key}
            rel='noopener noreferrer'
            target='_blank'>
            <Image
              src={social.logo}
              alt={social.plateform}
              width={100}
              height={100}
              layout='responsive'
            />
          </Link>
        ))
      }
    </section>
  )
}

export default Socials
