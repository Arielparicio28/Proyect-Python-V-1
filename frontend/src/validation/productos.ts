import { z } from 'zod'
//Validación productos

const productos = z.object({
  codigo_producto: z.coerce.number(),

    nombre_producto: z.string().min(2, {
        message: 'Debe completar este campo'
      }),
      valor_producto: z.coerce.number(),
      cantidad: z.coerce.number(),
      precio_unitario: z.coerce.number(),
})

export default productos
