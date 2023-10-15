import GenericPages from "@/utils/GenericPages"
import Image from "next/image"
import { user } from '@/utils/index';
import Socials from "../Socials";
import Link from "next/link";

const Brief = () => {
  return (
    <GenericPages title={'Brief Intro'} bgColor='lightGrey'>
      <section className='brief-intro-sec'>
        <p className='brief-para'>
          {
            user.brief
          }
        </p>
        <section className='my-profile '>
          <Image
            src={user.avatar}
            alt={user.name}
            height={100}
            width={100}
            layout='responsive'
          />
          <Link
            href={`mailto:${user.email}`}
            rel='noopener noreferrer'
            target='_blank'
            className='user-email'>
            {user.email}
          </Link>
          <Socials />
        </section>
      </section>
      <section className='resume-sec'>
        <p className='brief-para'>For more about me checkout my Resume:</p>
        <button className='btn mx-auto my-3'>Resume</button>
      </section>
    </GenericPages>
  )
}

export default Brief
