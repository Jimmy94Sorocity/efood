class Lojas {
  name: string
  avaliation?: number
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    name: string,
    avaliation: number,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.name = name
    this.avaliation = avaliation
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Lojas
