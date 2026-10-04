'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className='menu menu-horizontal px-1 gap-4'>
      <Link className={`link ${pathname === '/' ? 'bg-lime-600' : ''} rounded-full px-3 py-1`} href="/">
        Workouts
      </Link>
 
      <Link
        className={`link ${pathname === '/my_plans' ? 'bg-lime-600' : ''} rounded-full px-3 py-1`}
        href="/my_plans"
      >
        My Plans
      </Link>
    </nav>
  )
}