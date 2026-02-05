import { Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import ServicesDetails from "../components/Services/ServicesDetails";
import ContactForm from "../components/ContactForm/ContactForm";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServicesDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />

            {/* fallback */}
            <Route path="*" element={<Home />} />
        </Routes>
    );
}