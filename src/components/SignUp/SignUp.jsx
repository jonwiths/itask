import { useEffect, useRef } from "react";
import Title from "../Title/Title";
import Wrapper from "../../Wrapper/Wrapper";
import { Link } from "react-router-dom";
import ThirdPartyAccounts from "../ThirdPartyAccounts/ThirdPartyAccounts";

const SignUp = () => {
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const emailRef = useRef();

  return (
    <Wrapper>
      <Title />
      <div className="flex flex-col px-7 w-full ">
        <h3 className="text-center mb-4 -mt-2">Create an account</h3>
        <label htmlFor="email" className="block text-sm ">
          Email
        </label>
        <input
          type="text"
          ref={emailRef}
          maxLength={55}
          placeholder="juandelacruz@email.com"
          className="input-txt text-gray-800"
        />

        <label htmlFor="username" className="block text-sm mt-4">
          Username
        </label>
        <input
          type="text"
          maxLength={55}
          placeholder="juandelacruz11"
          className="input-txt text-gray-800"
        />

        <label htmlFor="password" className="block text-sm mt-4">
          Password
        </label>
        <input
          type="password"
          className="input-txt text-gray-800"
          placeholder="••••••••••••••••"
        />

        <p className="text-center text-sm mt-5">
          Do you have account?{" "}
          <Link to="/login" className="intro-link">
            Login
          </Link>
        </p>

        <button className="btn-main px-12 mx-auto mt-8 ">Sign-in</button>

        <ThirdPartyAccounts />
      </div>
    </Wrapper>
  );
};

export default SignUp;
