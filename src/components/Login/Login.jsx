import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import Wrapper from "../../Wrapper/Wrapper";

import ThirdPartyAccounts from "../ThirdPartyAccounts/ThirdPartyAccounts";

const Login = () => {
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const emailRef = useRef();

  return (
    <Wrapper>
      <Title />
      <div className="flex flex-col px-7 w-full ">
        <label htmlFor="email" className="block text-sm ">
          Email
        </label>
        <input
          type="text"
          ref={emailRef}
          className="input-txt text-gray-800"
          placeholder="juandelacruz@email.com"
        />

        <label htmlFor="password" className="block text-sm mt-4">
          Password
        </label>
        <input
          type="password"
          className="input-txt text-gray-800"
          placeholder="••••••••••••••••"
        />

        <p className="text-center text-sm mt-4">
          No account?{" "}
          <Link to="/signup" className="intro-link">
            Sign-up
          </Link>
        </p>

        <p className="text-xs text-center mt-4">
          Language - <span className="text-gray-500">EN</span>
        </p>

        <button className="btn-main px-12 mx-auto mt-8">Login</button>

        <button className="text-sm mt-7 underline text-gray-500 hover:text-white">
          Guest Mode
        </button>

        <ThirdPartyAccounts />
      </div>
    </Wrapper>
  );
};

export default Login;
