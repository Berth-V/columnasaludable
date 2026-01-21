import './Frontpage.css';
import doctorImg from '../../../../assets/doctor.webp';

function Frontpage() {
  return (
    <section className="frontpage">
      <div className="frontpage__content">
        <div className="frontpage__photo">
          <img src={doctorImg} alt="Doctor especialista" />
        </div>

        <h1>
          Clínica de Fisioterapia, Rehabilitación <br />
          y Medicina Regenerativa
        </h1>

        <p>
          Somos una clínica especializada en fisioterapia, rehabilitación y
          medicina regenerativa, ubicados en Tijuana, Baja California.
          Integramos atención médica profesional, tecnología moderna y un
          enfoque humano para mejorar la movilidad, reducir el dolor y
          recuperar la calidad de vida.
        </p>
      </div>

      {/* OLA REAL */}
      <svg
        className="frontpage__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,120 480,0 720,20 960,40 1200,100 1440,60 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}

export default Frontpage;
