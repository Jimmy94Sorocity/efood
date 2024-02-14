import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import { Card, Titulo, Descricao, Infos, Perfil, Avaliacao } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  name: string
  description: string
  avaliation: number
  infos: string[]
  image: string
}

const Product = ({ name, avaliation, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Perfil>
      <Titulo>{name}</Titulo>
      <Avaliacao>
        <Titulo>{avaliation}</Titulo>
        <img src={estrela} alt="estrela" />
      </Avaliacao>
    </Perfil>
    <Descricao>{description}</Descricao>
    <Button to="/loja">Saiba mais</Button>
  </Card>
)

export default Product
