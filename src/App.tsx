import './style.scss';
import Logo from './react-logo.png'

const App = () => {
  return (
    <div>
      <h1>Wbpack setup</h1>
      <p>Env testing - {process.env.NODE_ENV}</p>
      <p>own env var - {process.env.name}</p>
      <img src={Logo} alt="logo" width="240"/>
    </div>
  );
};

export default App;
