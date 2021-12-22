import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticate-user'
import { CreateClientController } from './modules/clients/usecases'
import { CreateDeliverymanController } from './modules/deliveryman/usecases'

export const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/clients', createClientController.handle)
routes.post('/sessions', authenticateClientController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)
