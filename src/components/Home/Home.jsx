import './Home.css';
import Frontpage from './Sections/Frontpage/Frontpage';
import RegenerativeTeaser from './Sections/RegenerativeTeaser/RegenerativeTeaser';
import SportMedicine from './Sections/SportMedicine/SportMedicine';
import Skeleton from './Sections/Skeleton/Skeleton'
import CareProcess from './Sections/CareProcess/CareProcess';
import LocationSection from './Sections/LocationSection/LocationSection';
import { SkeletonProvider } from './Sections/Skeleton/context/SkeletonContext';


function Home() {
  return (
    <div className="home">
      <Frontpage />
      <RegenerativeTeaser />
      <SportMedicine />
      <SkeletonProvider>
        <Skeleton />
      </SkeletonProvider>
      <CareProcess />
      <LocationSection />
    </div>
  );
}

export default Home;