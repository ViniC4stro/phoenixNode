import { Router } from 'express'
import * as PageController from '../controllers/pageController'

const router = Router()

//CRIANDO AS ROTAS
router.get ('/', PageController.home)

router.get ('/produtos', PageController.produtos)

router.get ('/login', PageController.login)

router.get ('/umProduto', PageController.umProduto)

export default router