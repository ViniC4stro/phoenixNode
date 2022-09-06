import { Request, Response } from 'express'
import { Produto } from '../models/produto'

// CRIANDO A ROTA 'SEARCH'
export const search = (req: Request, res: Response) =>{
    
    let query: string = req.query.q as string

    let list = Produto.getFromName(query)

    res.render('pages/pages',{
        list
    })
}