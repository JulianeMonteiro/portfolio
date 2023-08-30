import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Description, BotaoTema, Sidebarcontainer } from './styles'

const Sidebar = () => (
  <aside>
    <Sidebarcontainer>
      <Avatar />
      <Title fontSize={20}>Juliane Monteiro</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        JulianeMonteiro
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Engenheira Front-End
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </Sidebarcontainer>
  </aside>
)

export default Sidebar
