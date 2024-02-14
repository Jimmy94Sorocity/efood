import styled from 'styled-components'
import { cores } from '../../styles'
import { Card, Estrela } from '../../components/Product/styles'
import { List } from '../../components/ProductsList/styles'
import { ButtonContainer } from '../../components/Button/styles'
import massas from '../../assets/images/massa.png'

export const RestauranteContainer = styled.div`
  ${List} {
    margin-top: 56px;
    margin-bottom: 88px;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }

  ${Card} {
    background-color: ${cores.salmao};
    color: ${cores.beje};
    margin-bottom: 32px;
    height: 368px;

    img {
      padding: 8px;
    }

    ${Estrela} {
      width: 0.1px;
    }

    ${ButtonContainer} {
      background-color: ${cores.beje};
      color: ${cores.salmao};
      display: flex;
      width: 304px;
      margin: 8px;
      justify-content: center;
    }
  }
`

export const MassasItalianas = styled.div`
  background-image: url(${massas});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;

  h2 {
    color: ${cores.branca};
    font-size: 32px;
    padding: 24px 0;
  }

  p {
    color: ${cores.branca};
    font-size: 32px;
    font-weight: bold;
  }
`
