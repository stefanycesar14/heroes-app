import { heroes } from "../data/heroes"

export const getHeroByName = (name='')=>{
const heroName = name.toLocaleLowerCase().trim()
if(heroName.length ===0)return [];

return heroes.filter((hero)=>{
  return  hero.superhero.toLocaleLowerCase().includes(heroName)
})


}
