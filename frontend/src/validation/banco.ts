import { z } from 'zod'
//Validación Banco

const banco = z.object({
  codigo_banco: z.coerce.number(),

    iban: z.string().min(2, {
        message: 'Debe completar este campo'
      }),

      nombre_banco: z.string().min(2, {
        message: 'Debe completar este campo'
      }),

      swift_bci: z.string().min(2, {
        message: 'Debe completar este campo'
      }),   
})

export default banco
