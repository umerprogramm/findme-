import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h3 >find me</h3>
        <Link href="/map">
        <Image
      style={{float : 'right', cursor : 'pointer'}}
      src="/world.png"
      alt="Picture of the author"
      width={40}
      height={40}
    />
    </Link>
    </div>
  )
}
