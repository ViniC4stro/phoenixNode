import { Request, Response } from 'express'
import { request } from 'http'
import { Produto } from '../models/produto'

// CRIANDO A ROTA 'HOME'
export const home = (req: Request, res: Response) =>{
    
    res.render('pages/pages')
    
}

// CRIANDO A ROTA 'PRODUTOS'
export const produtos = (req: Request, res: Response) =>{
    let list = Produto.getAll()
    res.render('pages/produtos',{
        list
    })
}

// CRIANDO A ROTA 'LOGIN'
export const login = (req: Request, res: Response) =>{
    res.render('pages/login')
}

export const umProduto = (req: Request, res: Response) =>{
    res.render('pages/umProduto')
}

