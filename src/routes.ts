import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares'

import { AuthenticateClientController } from './modules/account/authenticate-client'
import { AuthenticateDeliverymanController } from './modules/account/authenticate-deliveryman'
import { CreateClientController } from './modules/clients/usecases'
import { CreateDeliveryController } from './modules/deliveries/usecases'
import { CreateDeliverymanController } from './modules/deliveryman/usecases'

export const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()

routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)
