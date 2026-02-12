import "./Frontpage.css";
import doctorImg from "../../../../assets/doctor.jpeg";
import { Link } from "react-router-dom";

function Frontpage() {
  return (
    <section className="frontpage" id="top">
      <div className="frontpage__content">
        <div className="frontpage__photo">
          <img src={doctorImg} alt="Especialista de la clínica" />
        </div>

        <h1>
          Tratamiento médico especializado para columna cervical, torácica y lumbar.
        </h1>

        <p>
          Atención profesional enfocada en el manejo del dolor de columna mediante
          tratamientos médicos, bloqueos y medicina regenerativa, apoyados por
          fisioterapia integral cuando el caso lo requiere.
        </p>

        <div className="frontpage__actions">
          <Link
            to="/contact"
            className="frontpage__btn frontpage__btn--primary"
          >
            Agendar valoración
          </Link>

          <Link
            to="/services"
            className="frontpage__btn frontpage__btn--ghost"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Frontpage;
