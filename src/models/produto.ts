type typeProduto = 'Cadeira' | 'Muleta' | 'Perna' | 'Bota' | 'Cadeira Banho' | 'Bota Curta' | 'Motorizada' | 'Muleta Axilar'


type Produto = {
    type: typeProduto,
    image: string,
    doador: string,
    dataPub: string
}

const data: Produto[] = [
    {
        type: 'Cadeira',
        image: 'cadeira.png',
        doador: 'Marcelo Alves',
        dataPub: '21/04/2005'
    },

    {
        type: 'Muleta',
        image: 'muleta.png',
        doador: 'Rodrigo Silva',
        dataPub: '21/04/2005'
    },

    {
        type: 'Perna',
        image: 'perna.png',
        doador: 'Vinicius Santana',
        dataPub: '21/04/2005'
    },

    {
        type: 'Bota',
        image: 'p.png',
        doador: 'Caio Moura',
        dataPub: '21/04/2005'
    },

    {
        type: 'Cadeira Banho',
        image: 'banho.jpg',
        doador: 'Augusto Lima',
        dataPub: '21/04/2005'
    },

    {
        type: 'Bota Curta',
        image: 'bota_curta.png',
        doador: 'Augusto Lima',
        dataPub: '21/04/2005'
    },

    {
        type: 'Motorizada',
        image: 'Motorizada.png',
        doador: 'Augusto Lima',
        dataPub: '21/04/2005'
    },

    {
        type: 'Muleta Axilar',
        image: 'muleta_axilar.png',
        doador: 'Augusto Lima',
        dataPub: '21/04/2005'
    }
]

export const Produto = {
    getAll: () =>{
        return data
    },
    getFromType: (type: typeProduto): Produto[] =>{
        return data.filter (item =>{

             if(item.type == type){
                return true
             }

             else{
                return false
             }
        })
    },

    getFromName: (name: string): Produto[] =>{
        return data.filter(item =>{

            if(item.type.toLowerCase().indexOf(name.toLowerCase()) > -1){
                return true

            } else {
                return false
            }
        })
    }
}