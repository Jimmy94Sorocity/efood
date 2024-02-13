import { Link } from 'react-router-dom'
import { HeaderBar, LogoContainer, Title } from './styles'

import logo from '../../assets/images/efood_logo.png'

const Header = () => (
  <HeaderBar>
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
    </LogoContainer>
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
