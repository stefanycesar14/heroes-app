import { heroes } from "../data/heroes"



export const getHeroesByPublisher = (publisher) =>{

const validHeroes = ['DC Comics','Marvel Comics']
if(!validHeroes.includes(publisher)){
    throw new Error(`Invalid publisher ${publisher}`)
}
return heroes.filter((hero)=>hero.publisher===publisher)
}