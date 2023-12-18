import React from 'react'

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1>Project Template</h1>
      <section>
        {children}
      </section>
    </section>
  )
}

export default template
