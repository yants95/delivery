import express, { json, NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from '@/routes'

const app = express()

app.use(json())
app.use(routes)

app.use(
  (err: Error, _: Request, res: Response, __: NextFunction) => {
    if (err instanceof Error) return res.status(400).json({ message: err.message })

    return res.status(500).json({
      status: 'Error',
      message: 'Internal server error'
    })
  }
)

app.listen(3333, () => console.log('Server runnning!'))
