import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Produtos = () => {

  const { color } = useTitleColorContext()
  return (
    <div><h1 style={{ color: color }}>Produtos</h1></div >
  )
}

export default Produtos