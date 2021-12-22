import { Router } from 'express'
import { ensureAuthenticateClient, ensureAuthenticateDeliveryman } from './middlewares'

import { AuthenticateClientController } from './modules/account/authenticate-client'
import { AuthenticateDeliverymanController } from './modules/account/authenticate-deliveryman'
import { FindAllDeliveriesController, CreateClientController } from './modules/clients'
import { CreateDeliveryController, FindAllAvailableController, UpdateDeliverymanController } from './modules/deliveries/usecases'
import { CreateDeliverymanController } from './modules/deliveryman/usecases'

export const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()

routes.post('/clients', createClientController.handle)
routes.post('/clients/auth', authenticateClientController.handle)
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)

routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.put('/delivery/update-deliveryman/:delivery_id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.get('/clients/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle)