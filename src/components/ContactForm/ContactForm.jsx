import "./ContactForm.css";

export default function ContactForm() {
    return (
        <section className="contactForm" aria-label="Formulario de contacto">
            <div className="contactForm__inner">
                <header className="contactForm__header">
                    <h2>Agenda tu valoración</h2>
                    <p>
                        Déjanos tus datos y un breve contexto. Te contactamos para orientarte
                        y confirmar disponibilidad.
                    </p>
                </header>

                <form className="contactForm__form">
                    <div className="contactForm__field">
                        <label htmlFor="patientName">Nombre del paciente</label>
                        <input
                            id="patientName"
                            name="patientName"
                            type="text"
                            placeholder="Ej. Juan Pérez"
                            autoComplete="name"
                        />
                    </div>

                    <div className="contactForm__row">
                        <div className="contactForm__field">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="correo@ejemplo.com"
                                autoComplete="email"
                            />
                        </div>

                        <div className="contactForm__field">
                            <label htmlFor="phone">Número de celular</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Ej. 664 123 4567"
                                autoComplete="tel"
                            />
                        </div>
                    </div>

                    <div className="contactForm__field">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Ej. Dolor de rodilla desde hace 3 semanas, me limita al caminar…"
                        />
                        <span className="contactForm__hint">
                            Puedes incluir zona de dolor, tiempo de evolución y si fue por lesión o cirugía.
                        </span>
                    </div>

                    <div className="contactForm__actions">
                        <button type="button" className="contactForm__btn">
                            Solicitar contacto
                        </button>

                        <p className="contactForm__note">
                            Respuesta en horario de atención. (Por ahora es maqueta.)
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}