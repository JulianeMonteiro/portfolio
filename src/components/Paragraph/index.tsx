import { Paragraph as StyleParagraph } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <StyleParagraph tipo={tipo}>{children}</StyleParagraph>
)

export default Paragraph
