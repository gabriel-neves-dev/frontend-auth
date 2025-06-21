// import { useState } from "react";
import "./styles/App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">

        <div className="login-card">
          <div className="login-card-image">
            <div className="image-placeholder">Imagem</div>
          </div>
          <div className="login-card-form">
            <form>
              <h2>Login</h2>
              <input type="text" placeholder="Usuário" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
