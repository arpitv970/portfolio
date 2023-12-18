import { projects } from '@/utils'
import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  const id = Number(params.slug);
  const project = projects.find(project => project.id === id)
  return (
    <p>
      {
        project?.title
      }
    </p>
  )
}

export default page
