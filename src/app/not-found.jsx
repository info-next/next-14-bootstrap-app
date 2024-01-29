import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>Not Found</h1>
        <p>Page Not Found</p>
        <Link href='/'>Return home</Link>
    </div>
  )
}

export default NotFound