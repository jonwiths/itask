import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="h-screen bg-darkBlue flex items-center justify-center flex-col">
      <h1 className="text-white font-normal text-6xl">
        <span className="text-titleGreen">i</span>Task
      </h1>
      <p className="text-sm text-white ">Welcome to iTask!</p>
      <Link className="btn-main" to="/login">
        Get Started
      </Link>
    </section>
  );
};

export default GetStarted;
