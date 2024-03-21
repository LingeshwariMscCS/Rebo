import Card from "./context"
import "./Login.css"

function Login() {

  function handle () {
    return true;
  }

  return (
    <div className="LoginContainer">
      <Card
        bgcolor="primary"
        header="Account Login"
        login={handle}
        submitButtonLogin="Welcome to Bad Bank!"
      
      />
    </div>
  )
}

export default Login;