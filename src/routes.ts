import { Router } from 'express'
import { CreateClientController } from './modules/clients/usecases'

export const routes = Router()

const createClientController = new CreateClientController()

routes.post('/clients', createClientController.handle)