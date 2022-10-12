import { Container } from '../../components/container/Container.styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { NewAccount } from '../../components/NewAccount'

export function CreateAccount() {
  return (
    <Container>
      <Header />
      <NewAccount />
      <Footer />
    </Container>
  )
}
