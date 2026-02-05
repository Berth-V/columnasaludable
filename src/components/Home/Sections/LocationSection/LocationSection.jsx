import "./LocationSection.css";

export default function LocationSection() {
    return (
        <section className="locationSection">
            <div className="locationSection__content">
                <h2>Ubicación y contacto</h2>

                <p className="locationSection__address">
                    Tijuana, Baja California<br />
                    Atención con cita previa
                </p>

                <ul className="locationSection__info">
                    <li><strong>Horario:</strong> Lun–Vie 9:00 a 18:00</li>
                    <li><strong>Teléfono:</strong> (664) 000-0000</li>
                </ul>

                <a
                    className="locationSection__btn"
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Cómo llegar
                </a>
            </div>

            <div className="locationSection__map">
                <iframe
                    title="Mapa clínica"
                    src="https://www.google.com/maps?q=Tijuana&output=embed"
                    loading="lazy"
                />
            </div>
        </section>
    );
}