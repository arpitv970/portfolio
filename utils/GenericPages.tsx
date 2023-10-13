const GenericPages = ({ title, bgColor = 'grey', children }: {
  title: String,
  bgColor: 'grey' | 'lightGrey' | 'black',
  children: React.ReactNode,
}) => {
  return (
    <section className={`gen-page bgColor-${bgColor}`}>
      <h1 className='gen-title'>{title}</h1>
      <section className='gen-subsection'>
        {children}
      </section>
    </section>
  )
}

export default GenericPages
