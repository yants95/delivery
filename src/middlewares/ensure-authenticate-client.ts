import { NextFunction, request, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string
}

export async function ensureAuthenticateClient (req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ message: 'Token is missing.' })
  const [, token] = header.split(' ')
  try {
    const { sub } = verify(token, String(process.env.JWT_SECRET_CLIENT)) as Payload
    request.client_id = sub
    return next()
  } catch {
    return res.status(401).json({ message: 'Invalid token.' })
  }
}
