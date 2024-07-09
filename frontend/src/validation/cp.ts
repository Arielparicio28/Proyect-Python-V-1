import { z } from 'zod'
//Validación codigo postal

const cp = z.object({
  codigo: z.string()
  .min(2, { message: 'El código postal debe tener al menos 2 caracteres' })
  .max(5, { message: 'El código postal no puede tener más de 5 caracteres' }),
  
    descripcion: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
  
})


export default cp


