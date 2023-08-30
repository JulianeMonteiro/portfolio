import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin: 24px 0 40px 0;
`

export const BotaoTema = styled.button`
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const Sidebarcontainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
