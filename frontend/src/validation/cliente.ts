import { z } from 'zod'
//Validación cliente

const cliente = z.object({
  codigo_cliente: z.coerce.number().nullable(),
    nombre: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
      apellido: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
      codigo_postal: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
      cif_nie: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
     
})


export default cliente 


