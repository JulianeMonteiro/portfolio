import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoAviso = styled(Botao)`
  background-color: yellow;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoAviso as="a" principal fontSize="18px">
        <span>Aviso</span>
      </BotaoAviso>
    </>
  )
}

export default Teste
