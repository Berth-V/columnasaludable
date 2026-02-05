import "./CareProcess.css";

export default function CareProcess() {
    return (
        <section className="careProcess">
            <h2 className="careProcess__title">Nuestro proceso de atención</h2>

            <div className="careProcess__steps">
                <div className="careProcess__step">
                    <span className="careProcess__number">1</span>
                    <h3>Valoración inicial</h3>
                    <p>Evaluamos tu caso de forma integral y personalizada.</p>
                </div>

                <div className="careProcess__step">
                    <span className="careProcess__number">2</span>
                    <h3>Diagnóstico</h3>
                    <p>Identificamos el origen del problema con criterios clínicos.</p>
                </div>

                <div className="careProcess__step">
                    <span className="careProcess__number">3</span>
                    <h3>Tratamiento</h3>
                    <p>Aplicamos el plan más adecuado según tus objetivos.</p>
                </div>

                <div className="careProcess__step">
                    <span className="careProcess__number">4</span>
                    <h3>Seguimiento</h3>
                    <p>Monitoreamos tu progreso y ajustamos el tratamiento.</p>
                </div>
            </div>
        </section>
    );
}