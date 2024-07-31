import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AppRouter from "./AppRouter";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [5000]); // change time after

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
