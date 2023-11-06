import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
            <nav className="mainnav">
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/blog/"}>
              <li>Blogs</li>
            </Link>
            <Link href={"/about"}>
              <li>About Us</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>

    </>
  )
}

export default NavBar
