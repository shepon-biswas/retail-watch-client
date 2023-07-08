import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto grid grid-cols-2 items-center px-5 my-5">
        {/* Login Banner */}
        <div className="max-w-xl">
          <img
            className="rounded-md w-full"
            src="https://i.ibb.co/rHvZ4Pc/sign-page-abstract-concept-illustration-335657-3875.jpg"
            alt="login image"
          />
        </div>
        {/* Login Form */}
        <div className="max-w-md shadow-2xl bg-base-100 my-5 rounded-lg  ">
          {/* Login Title */}
          <div className="text-center mt-3 px-7">
            <h4 className="text-2xl font-bold mb-2 text-[#9336B4] ">
              Please Login
            </h4>
            <hr />
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#9336B4] border-none text-white hover:bg-[#b842e3]">
                Login
              </button>
            </div>
            <div>
              <p>
                Don't have any account?{" "}
                <Link to={"/register"} className="underline text-[#9336B4]">
                  Register
                </Link>
              </p>
            </div>
          </form>
          {/* Signin with google & Github Section */}
          <div className="divider px-7">OR</div>
          <div className="px-7 my-5">
            <button className="btn btn-outline text-[#9336B4] hover:bg-[#b842e3] hover:border-none w-full mb-3">
              <FaGoogle className="me-3"></FaGoogle> continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
