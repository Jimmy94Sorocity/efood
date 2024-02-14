// import ProductsList from '../../components/ProductsList'
import Lojas from '../../models/Lojas'

import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import pizza from '../../assets/images/pizza.png'
// import diablo from '../../assets/images/diablo.png'
// import zelda from '../../assets/images/zelda.png'
// import starWars from '../../assets/images/star_wars.png'

const itens: Lojas[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    name: 'Hioki Sushi',
    avaliation: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: pizza
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    avaliation: 4.6,
    infos: ['Italiana'],
    image: pizza
  }
]

// const emBreve: Games[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Diablo 4',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: diablo
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Resident Evil 4',
//     system: 'Nintendo Switch',
//     infos: ['17/05'],
//     image: resident
//   }
// ]

const Restaurante = () => (
  <>
    <ProductsList lojas={itens} />
  </>
)

export default Restaurante
