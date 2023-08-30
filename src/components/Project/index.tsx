import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragraph tipo="secundario">Lista de tarefas feita com VueJS</Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}
export default Project
