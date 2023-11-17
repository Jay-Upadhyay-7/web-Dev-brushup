import React from 'react'
import Link from "next/link"
const page = () => {
  return (
    <div>
      <Link href='/About'>About</Link>
      <Link href='/Courses'>Courses</Link>
    </div>
  )
}

export default page
