import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Home from './components/Home/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // ⬅️ duración de la carga

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      {!loading && <Home />}
    </>
  );
}

export default App;
