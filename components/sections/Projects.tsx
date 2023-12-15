import { projects, user } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import Socials from "../Socials"
import GenericPages from "@/utils/GenericPages"
import ProjectCard from "@/utils/ProjectCard"

const Projects = () => {
  return (
    <GenericPages title={'Projects'} bgColor='grey'>
      <h2 className="sub-header">Checkout some of my work</h2>
      <section className='projects-sec'>
        {
          projects.map((project, key) => {
            return (
              <ProjectCard
                {...project}
                key={key}
              />
            )
          })
        }
      </section>
    </GenericPages>
  )
}

export default Projects
