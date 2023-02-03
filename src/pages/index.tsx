import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '10 10 10 10',
  span: {
    fontWeight: 'bold'
  },
  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>
        <span>Teste</span>
        Enviar
        </Button>
    </>
  )
}
