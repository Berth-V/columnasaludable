import { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import servicesData from "./data/servicesData.es.js";
import "./ServicesDetails.css";

const LABELS_ES = {
    inestable: "Inestable",
    recurrent: "Recurrente",
    methods: "Metodico",
    refractory: "Refractaria",
    injections: "Inyecciones",
    activity: "Activacion",
    unstable: "Inestable",
    indications: "Indicaciones",
    resistant: "Resistente",
    fixed: "Fijo",
    evaluation: "Evaluación",
    young: "Jovenes",
    elderly: "Adultos mayores",
    children: "Niños",
    note: "Nota",
    complex: "Compleja",
    followUp: "Seguimiento",
    immediate: "Inmediato",
    advantages: "Ventajozo",
    advantage: "Ventajoza",
    indication: "Indicado",
    nonDisplaced: "No Desplazada",
    standard: "Estándar",
    stabilization: "Estabilización",
    stable: "Estable",
    displaced: "Desplazada",
    rehabilitation: "Rehabilitación",
    conservative: "Conservador",
    surgical: "Quirúrgico",
    initial: "Inicial",
    advanced: "Avanzado",
    early: "Temprano",
    persistent: "Persistente",
    mild: "Leve",
    moderate: "Moderado",
    severe: "Severo",
    acute: "Agudo",
    chronic: "Crónico",
    partial: "Parcial",
    complete: "Completa",
};

function formatKey(key) {
    if (!key) return "Tratamiento";
    if (LABELS_ES[key]) return LABELS_ES[key];

    // Fallback: "non_surgical" -> "Non surgical"
    const pretty = String(key).replace(/[-_]/g, " ").trim();
    return pretty.charAt(0).toUpperCase() + pretty.slice(1);
}

function normalizeTreatment(treatment) {
    // Tu data: objeto { stable: "...", displaced: "...", ... }
    if (!treatment) return [];

    // si viene como string (por si alguna lesión futura lo trae así)
    if (typeof treatment === "string") {
        return [{ key: "treatment", label: "Tratamiento", text: treatment }];
    }

    // si viene como array (por compatibilidad)
    if (Array.isArray(treatment)) {
        return treatment.map((t, idx) => ({
            key: `step-${idx}`,
            label: `Paso ${idx + 1}`,
            text: typeof t === "string" ? t : t?.text || t?.label || JSON.stringify(t),
        }));
    }

    // objeto normal
    if (typeof treatment === "object") {
        return Object.entries(treatment)
            .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
            .map(([k, v]) => ({
                key: k,
                label: formatKey(k),
                text: String(v),
            }));
    }

    return [];
}

export default function ServicesDetails() {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const service = servicesData?.[serviceId];

    // Fallback: si el ID no existe
    if (!service) {
        return (
            <section className="serviceDetail">
                <header className="serviceDetail__header">
                    <button className="serviceDetail__backBtn" onClick={() => navigate("/services")}>
                        ← Volver
                    </button>

                    <div className="serviceDetail__crumbs">
                        <Link to="/services">Servicios</Link> / No encontrado
                    </div>
                </header>

                <div className="serviceDetail__panel">
                    <h2 className="serviceDetail__injuryTitle">Servicio no encontrado</h2>
                    <p className="serviceDetail__injuryDesc">
                        Este enlace parece apuntar a una ruta vieja. Regresa a Servicios y entra desde la lista.
                    </p>
                </div>
            </section>
        );
    }

    const injuries = useMemo(() => {
        const raw = service?.injuries || [];
        return raw
            .map((inj, idx) => ({
                id: inj?.id ?? `${serviceId}-${idx}`,
                name: inj?.name ?? inj?.title ?? `Lesión ${idx + 1}`,
                description: inj?.description ?? "",
                treatment: inj?.treatment ?? inj?.treatments ?? null, // <- aquí ya dejamos objeto
            }))
            .filter(Boolean);
    }, [service, serviceId]);

    const [activeId, setActiveId] = useState(injuries[0]?.id || null);
    const active = injuries.find((x) => x.id === activeId) || injuries[0];

    const treatmentItems = useMemo(() => normalizeTreatment(active?.treatment), [active]);

    return (
        <section className="serviceDetail">
            <header className="serviceDetail__header">
                <button className="serviceDetail__backBtn" onClick={() => navigate("/services")}>
                    ← Volver
                </button>

                <div className="serviceDetail__crumbs">
                    <Link to="/services">Servicios</Link> / {service.title}
                </div>
            </header>

            <div className="serviceDetail__layout">
                <aside className="serviceDetail__aside">
                    <h3 className="serviceDetail__asideTitle">Procedimientos</h3>

                    <ul className="serviceDetail__asideList">
                        {injuries.map((inj) => (
                            <li key={inj.id}>
                                <button
                                    type="button"
                                    className={`serviceDetail__pill ${inj.id === active?.id ? "is-active" : ""}`}
                                    onClick={() => setActiveId(inj.id)}
                                >
                                    {inj.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="serviceDetail__main">
                    <div className="serviceDetail__panel">
                        <div className="serviceDetail__topbar">
                            <h2 className="serviceDetail__injuryTitle">{active?.name}</h2>
                        </div>

                        {active?.description && <p className="serviceDetail__injuryDesc">{active.description}</p>}

                        <div className="serviceDetail__treatment">
                            <h3 className="serviceDetail__treatmentTitle">Tratamiento</h3>

                            {treatmentItems.length > 0 ? (
                                <ul className="serviceDetail__list">
                                    {treatmentItems.map((t) => (
                                        <li className="serviceDetail__item" key={`${active?.id}-${t.key}`}>
                                            <strong>{t.label}</strong>
                                            <div>{t.text}</div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="serviceDetail__injuryDesc">La información de tratamiento se mostrará aquí.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}