import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticate-user'
import { CreateClientController } from './modules/clients/usecases'

export const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

routes.post('/clients', createClientController.handle)
routes.post('/sessions', authenticateClientController.handle)
