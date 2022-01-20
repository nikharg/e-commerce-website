import Navbar from '../Components/Navbar'
const Login = () => {
  return(
      <>
       <Navbar/>
       <div className="login-container">
       <div className="login-inner-container">
          <h1 className="title">Sign in</h1>
          <div className="login-form">
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </form>
          </div>
          <div className="btn">
            <button>
              <h1>Login</h1>
            </button>
            <p>Forgot your password?</p>
            <p>Create a new account</p>
          </div>
        </div>
       </div>
      </>
  );
};

export default Login;
