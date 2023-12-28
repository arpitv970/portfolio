import { navElements } from "@/utils"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <section className='nav-list'>
        {
          navElements.map((elem, idx) => (

            <Link key={idx} href={elem.url}>
              <span className='nav-item'>{elem.pageTitle}</span>
            </Link>
          ))
        }
        {/* <li className='nav-item'>Home</li> */}
        {/* <li className='nav-item'>About</li> */}
        {/* <li className='nav-item'>Projects</li> */}
        {/* <li className='nav-item'>Services</li> */}
        {/* <li className='nav-item'>Blogs</li> */}
      </section>
    </nav>
  )
}

export default Navbar
