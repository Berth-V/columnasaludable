import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader isLoading />;

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;