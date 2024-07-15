import { Link } from 'react-router-dom'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
import SearchInput from './Search'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

export function SheetMenu () {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className='h-7 w-18 md:h-8'
          variant='outline'
        >
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent className='text-sm w-[250px] sm:w-[540px]'>
        <div className='text-left mt-10 mb-9'>
          <SearchInput />
        </div>
        <div className='text-left mb-6'>

          <SheetTitle className='text-sm block'>CLIENTES</SheetTitle>

          <Separator className='mb-4' />
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/clientes'>
              Clientes
            </Link>
          </SheetClose>
           <SheetClose asChild>

            <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/cliente'>
              Alta Cliente
            </Link>
          </SheetClose>
        </div>
        <div className='text-left mt-10 mb-6'>
          <SheetTitle className='text-sm block'>CONVOCATORIAS</SheetTitle>
          <Separator className='mb-4' />
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/allcalls'>
              Convocatorias
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className='block mb-4 hover:text-orange-600' to='http://localhost:5173/newcall'>
              Nueva convocatoria
            </Link>
          </SheetClose>

<SheetTitle className='text-sm block'>CP</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/cp'>
    Código Postal
  </Link>
</SheetClose>


<SheetTitle className='text-sm block'>POBLACIÓN</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/poblacion'>
    Población
  </Link>
</SheetClose>


<SheetTitle className='text-sm block'>PROVINCIAS</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/provincias'>
    Provincias
  </Link>
</SheetClose>

<SheetTitle className='text-sm block'>BANCOS</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/bancos'>
    Bancos
  </Link>
</SheetClose>

<SheetTitle className='text-sm block'>PRODUCTOS</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/productos'>
    Productos
  </Link>
</SheetClose>

<SheetTitle className='text-sm block'>FACTURAS</SheetTitle>
<Separator className='mb-4' />
<SheetClose asChild>
  <Link className='block mb-4 hover:text-pink-600' to='http://localhost:5173/facturas'>
    Facturas
  </Link>
</SheetClose>


        </div>
      </SheetContent>
    </Sheet>
  )
}
