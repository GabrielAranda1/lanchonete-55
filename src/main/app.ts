import 'reflect-metadata'
import { config } from 'dotenv'
import { startHttpServer } from '../presentation/gateway/httpServer'

config()

startHttpServer()