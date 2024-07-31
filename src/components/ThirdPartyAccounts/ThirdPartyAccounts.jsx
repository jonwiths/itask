import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ThirdPartyAccounts = () => {
  return (
    <>
      <div className="flex items-center mt-6 mb-5">
        <hr className="flex-grow border-t border-gray-600" />
        <span className="mx-4 text-gray-100 text-xs">Or</span>
        <hr className="flex-grow border-t border-gray-600" />
      </div>

      <div className="">
        <button className="bg-black w-full p-3 rounded-full text-xs mb-2 flex items-center justify-center gap-1 text-center">
          <FaApple size="16px" />
          CONTINUE WITH APPLE
        </button>
        <button className="bg-transparent border-2 border-white w-full p-3 rounded-full text-xs flex items-center justify-center gap-1 text-center">
          <FcGoogle size="16px" />
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </>
  );
};

export default ThirdPartyAccounts;
