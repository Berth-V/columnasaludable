import './Home.css';
import Frontpage from './Sections/Frontpage/Frontpage';

function Home() {
  return (
    <div className="home">
      {/* HERO / COMING SOON */}
      <Frontpage />

      {/*
        FUTURE SECTIONS (disabled for demo)

        <Skeleton />
        <Map />
        <Reviews />

        These sections will be enabled when the full site is launched.
      */}
    </div>
  );
}

export default Home;
