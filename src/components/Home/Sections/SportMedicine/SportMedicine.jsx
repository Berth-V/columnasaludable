import './SportMedicine.css';

export default function SportMedicine() {
    return (
        <section className="sports">
            <div className="sports__inner">
                <div
                    className="sports__image"
                    aria-hidden="true"
                />
                <div className="sports__content">
                    <h2 className="sports__title">Medicina del deporte</h2>
                    <p className="sports__text">
                        Prevención, diagnóstico y tratamiento de lesiones relacionadas con el deporte, como
                        tendinitis, lesiones musculares, esguinces y sobrecargas articulares,
                        con un enfoque orientado a la recuperación funcional y segura.
                    </p>
                </div>
            </div>
        </section>
    );
}