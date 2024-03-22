import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="container sticky top-0 z-10">
      <div className="navbar shadow-lg bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">JSONPlaceholder</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/pages/guide">GUIDE</Link></li>
            <li><Link href="/pages/product">DATA SHOWCASE</Link></li>
            <li><Link href="http://localhost:8000/product">MY JSON SERVER</Link></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Header