import './RegenerativeTeaser.css';

export default function RegenerativeTeaser() {
    return (
        <section className="regen">
            <div className="regen__card">
                <div className="regen__content">
                    <h2 className="regen__title">Medicina regenerativa aplicada a la columna</h2>
                    <p className="regen__text">
                        Tratamientos orientados a estimular procesos de reparación y mejorar el dolor en tu columna, siempre bajo valoración médica
                        especializada.
                    </p>
                    <a href="/services/regenerative" className="regen__btn">
                        Conoce más
                    </a>
                </div>
            </div>
        </section>
    );
}