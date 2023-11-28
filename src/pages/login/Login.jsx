import { useContext } from "react"
import "./login.scss"
import { LoginContext } from "../../context/LoginContext"

function Login() {

  const { setLogin } = useContext(LoginContext)

  return (
    <div className="login">
      <div className="container">
        <div className="form">
            <h2>Ingresa tus credenciales y administra tu <span>restaurane</span></h2>
          <form>
            <div>
              <label htmlFor="email">Correo:</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" />
            </div>
            <button onClick={() => setLogin(false)}>Iniciar Sesión</button>
          </form>
        </div>
        <div className="image">
          <img src="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg" alt="comidas rapidas imagen" />
        </div>
      </div>
    </div>
  )
}
export default Login