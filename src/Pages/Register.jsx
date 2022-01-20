import Navbar from "../Components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="register-container">
        <div className="register-inner-container">
          <h1 className="title">Create new account</h1>
          <div className="register-form">
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="New Password" />
              <input type="text" placeholder="Confirm New Password" />
            </form>
          </div>
          <p className="terms">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </p>
          <div className="btn">
            <button>
              <h1>Create</h1>
            </button>
            <button className="login">
              <p>Already a customer?</p>
              <h1>Log In</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
