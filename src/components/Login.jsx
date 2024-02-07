import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute z-9">
        <img
          className="bg-opacity-30"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      </div>

      <form className="absolute m-10 p-12 w-1/4 my-36 mx-auto right-0 left-0 bg-black rounded-md bg-opacity-60 text-white">
        <h1 className="font-semibold text-white my-2 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mt-4 mb-1 w-full rounded-sm bg-[#111111] border border-white"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 my-2  w-full rounded-sm bg-[#111111] border border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-1 w-full rounded-sm bg-[#111111] border border-white"
        />
        <button className="p-2 my-4 w-full bg-red-600 rounded-sm text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
