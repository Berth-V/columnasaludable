import "./Services.css";
import servicesData from "./data/servicesData.es.js";
import { Link } from "react-router-dom";

const icons = import.meta.glob("/src/assets/services_icons/*.png", { eager: true });

const SERVICE_GROUPS = [
    {
        title: "Tratamientos no quirúrgicos",
        items: [
            "Infiltraciones articulares (ácido hialurónico, corticosteroides, plasma rico en plaquetas)",
            "Manejo del dolor y la inflamación",
            "Tratamiento conservador personalizado",
            "Coordinación con fisioterapia y rehabilitación",
        ],
    },
    {
        title: "Fracturas y traumatismos",
        items: [
            "Atención de fracturas simples y complejas",
            "Luxaciones y subluxaciones",
            "Inmovilización con férulas o yeso",
            "Valoración ortopédica integral",
        ],
        emphasis: true,
    },
    {
        title: "Lesiones deportivas",
        items: [
            "Esguinces y distensiones",
            "Lesiones de ligamentos y meniscos",
            "Dolor por sobreuso",
            "Plan de retorno seguro al deporte",
        ],
    },
    {
        title: "Columna y dolor lumbar/cervical",
        items: [
            "Dolor lumbar agudo y crónico",
            "Hernia de disco (valoración y manejo)",
            "Ciática",
            "Rehabilitación y fortalecimiento",
        ],
    },
    {
        title: "Rodilla, hombro y cadera",
        items: [
            "Dolor articular y tendinitis",
            "Bursitis",
            "Lesiones del manguito rotador",
            "Artrosis (manejo integral)",
        ],
    },
    {
        title: "Rehabilitación y seguimiento",
        items: [
            "Rehabilitación post-operatoria",
            "Programas personalizados",
            "Reintegración funcional",
            "Educación del paciente sobre cuidado articular",
        ],
    },
];

function countLabel(n) {
    return `${n} Lesiones y Tratamientos Disponibles`;
}

export default function Services() {
    const parts = Object.entries(servicesData);

    return (
        <section className="services">
            <header className="services__header">
                <h2>Servicios</h2>
                <p>Traumatología y Ortopedia Especializada, acompañada de manejo Fisioterapéutico</p>
            </header>

            <div className="services__content">
                <div className="services__grid">
                    {SERVICE_GROUPS.map((group) => (
                        <article
                            key={group.title}
                            className={`serviceCard ${group.emphasis ? "serviceCard--emphasis" : ""}`}
                        >
                            <div className="serviceCard__head">
                                <h3 className="serviceCard__title">{group.title}</h3>
                            </div>

                            <ul className="serviceCard__list">
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>

            <section className="servicesAll">
                <header className="servicesAll__header">
                    <h3 className="servicesAll__title">Todos los servicios</h3>
                </header>

                <div className="servicesAll__grid">
                    {parts.map(([id, part]) => {
                        const icon = icons[`/src/assets/services_icons/${id}.png`];

                        return (
                            <Link key={id} className="servicesAll__card" to={`/services/${id}`}>
                                <div className="servicesAll__iconWrap">
                                    {icon ? (
                                        <img
                                            className="servicesAll__icon"
                                            src={icon.default}
                                            alt={part.title}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <span className="servicesAll__iconFallback" aria-hidden="true">
                                            🧩
                                        </span>
                                    )}
                                </div>

                                <div className="servicesAll__body">
                                    <h4 className="servicesAll__name">{part.title}</h4>
                                    <p className="servicesAll__meta">{countLabel(part?.injuries?.length || 0)}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}