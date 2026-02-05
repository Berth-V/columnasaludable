import "./About.css";
import doctorImg from "../../assets/doctor.webp";

export default function About() {
    return (
        <main className="about">
            <section className="about__hero">
                <div className="about__heroInner">
                    <div className="about__photo">
                        <img src={doctorImg} alt="Doctor especialista" />
                    </div>

                    <div className="about__text">
                        <h1>Nos especializamos en...</h1>

                        <p>
                            Somos una clínica especializada en el manejo médico del dolor de columna, ubicada en Tijuana, Baja California. Integramos tratamientos médicos, medicina regenerativa y fisioterapia integral para ofrecer una atención profesional, segura y centrada en la recuperación funcional de cada paciente.
                        </p>

                        <div className="about__chips">
                            <span className="about__chip">Enfoque humano</span>
                            <span className="about__chip">Tecnología moderna</span>
                            <span className="about__chip">Atención profesional</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__body">
                <div className="about__grid">
                    <article className="about__card">
                        <h2>Atención personalizada</h2>
                        <p>
                            Diseñamos un plan según tu caso, metas y evolución. No es un
                            enfoque genérico.
                        </p>
                    </article>

                    <article className="about__card">
                        <h2>Rehabilitación integral</h2>
                        <p>
                            Combinamos fisioterapia, evaluación funcional y seguimiento para
                            recuperar movilidad.
                        </p>
                    </article>

                    <article className="about__card">
                        <h2>Enfoque humano</h2>
                        <p>
                            Comunicación clara, trato respetuoso y acompañamiento durante tu
                            proceso.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}