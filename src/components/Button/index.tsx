import { ButtonContainer } from './styles'

type Props = {
  to?: string
  children: string
}

const Button = ({ to, children }: Props) => (
  <ButtonContainer to={to as string}>{children}</ButtonContainer>
)

export default Button
