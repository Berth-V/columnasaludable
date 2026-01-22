import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
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
      <Header />
      <Loader isLoading={loading} />
      {!loading &&
        <Home />
      }

    </>
  );
}

export default App;
