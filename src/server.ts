// IMPORTANDO O EXPRESS
import express from 'express'

// IMPORTANDO O MUSTACHE
import mustache from 'mustache-express'
import path from 'path'

//IMPORTANDO A ROTA
import mainRoutes from './routes/index'

const server = express()

// CONFIGURANDO O MUSTACHE
server.set('view engine','mustache')

// INFORMANDO AO MUSTACHE A MINHA PASTA DE ARQUIVOS VIEW
server.set('views',path.join(__dirname,'views'))

// USANDO O MUSTACHE
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))

// IMPORTANDO AS ROTAS DO INDEX.TS
server.use(mainRoutes)

// CRIANDO A ROTA '404'
server.use((req, res) =>{
    res.render('pages/404')
})


// HABILITANDO A ROTA
server.listen(3000)
