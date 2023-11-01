import './style.scss'
import Logo from './react-logo.png'
import Counter from './Counter'

const App = () => {
  const name = 'Arif'
  return (
    <div>
      <h1>Webpack setup refresh - {name}</h1>
      <p>Env testing - {process.env.NODE_ENV}</p>
      <p>own env var - {process.env.name}</p>
      <img src={Logo} alt="logo" width="240" />
      <Counter />
    </div>
  )
}

export default App
