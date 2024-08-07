import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SheetUserNav } from './navbar/SheetUserNav'
import { SheetMenu } from './navbar/SheetMenu'
import { Separator } from './ui/separator'

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCrossIcon, setIsCrossIcon] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsCrossIcon(!isCrossIcon)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false)
      setIsCrossIcon(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className='flex items-center h-full  container mx-auto'>

        <Link className='flex items-center' to='/'>
          <img
            src='onizea_logo.jpg'
            className='max-w-[80px] h-auto mb-4 ml-0 mt-4 md:max-w-[90px]'
            alt='onizea logo'
          />
        </Link>
        <div className='flex items-center mt-2 ml-auto'>
          <button
            className='flex items-center space-x-4 md:space-x-7'
            onClick={toggleMenu}
          >
            <SheetMenu />
            <div>
              <Separator orientation='vertical' className='w-px h-6 bg-gray-900' />
            </div>
            <SheetUserNav />
          </button>
        </div>
      </div>
      <div className='container mx-auto'>
        <Separator />
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
