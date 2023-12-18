import React from 'react'
import { ProjectType } from './types'
import Link from 'next/link'

const ProjectCard = ({
  id, title, img, code, demo, bullets
}: ProjectType) => {

  return (
    <section className='ProjectCard'>
      <Link href={`/projects/${id}`}>
        <section className='project-title bgColor-lightGrey hover:bgColor-grey'>{title}</section>
      </Link >
      {/* <section className='project-desc'> */}
      {/* <ul> */}
      {/* { */}
      {/*   bullets.map((point, key) => { */}
      {/*     return ( */}
      {/*       <li key={key}>{point}</li> */}
      {/*     ) */}
      {/*   }) */}
      {/* } */}
      {/* </ul> */}
      <section className='project-actions'>
        <Link href={demo}><span>Demo</span></Link>
        <Link href={code}><span>Code</span></Link>
      </section>
      {/* </section> */}
    </section>
  )
}

export default ProjectCard
