/*
 * RUMBO 360 - Prototipo V1
 * P1 y P10 NO puntúan RIASEC.
 * P2-P9 alimentan el perfil.
 *
 * Escala:
 * 1.0 = señal principal
 * 0.5 = señal secundaria
 */
const dimensiones = ["R", "I", "A", "S", "E", "C"];

const preguntas = [
    {
        id: "P1",
        tipo: "abierta",
        titulo: "Para comenzar, cuéntanos un poco sobre ti. ¿Qué actividades disfrutas hacer cuando tienes tiempo libre o cuando estás aprendiendo algo nuevo?",
        ayuda: "Escribe con tus propias palabras. No hay respuestas correctas o incorrectas.",
    },
    {
        id: "P2",
        tipo: "multiple",
        max: 3,
        titulo: "¿Cuáles consideras que son algunas de tus principales fortalezas?",
        opciones: [
            ["A", "Dibujar, diseñar o crear", {A: 1}],
            ["B", "Matemáticas y cálculos", {I: 1, C: 0.5}],
            ["C", "Escribir", {A: 1, S: 0.5}],
            ["D", "Comunicar o explicar", {S: 1, A: 0.5, E: 0.5}],
            ["E", "Escuchar a otras personas", {S: 1}],
            ["F", "Trabajar en equipo", {S: 1, E: 0.5}],
            ["G", "Organizar", {C: 1, E: 0.5}],
            ["H", "Resolver problemas", {I: 1, R: 0.5, E: 0.5}],
            ["I", "Computadores o tecnología", {I: 1, R: 0.5}],
            ["J", "Aprender cosas nuevas", {I: 1}],
            ["K", "Imaginar nuevas ideas", {A: 1, I: 0.5}],
            ["L", "Liderar", {E: 1, S: 0.5}],
            ["M", "Construir o reparar", {R: 1}],
            ["N", "Analizar", {I: 1, C: 0.5}],
        ],
    },
    {
        id: "P3",
        tipo: "multiple",
        max: 3,
        titulo: "Cuando encuentras un problema, ¿qué haces normalmente?",
        opciones: [
            ["A", "Intento solucionarlo por mi cuenta", {I: 1, R: 0.5}],
            ["B", "Busco información para entenderlo", {I: 1, C: 0.5}],
            ["C", "Pregunto a alguien que pueda ayudarme", {S: 1}],
            ["D", "Pruebo diferentes formas de solucionarlo", {I: 1, R: 0.5, A: 0.5}],
            ["E", "Analizo primero las causas", {I: 1, C: 0.5}],
            ["F", "Divido el problema en partes", {I: 1, C: 0.5}],
            ["G", "Busco ejemplos de problemas similares", {I: 1, A: 0.5}],
            ["H", "Experimento para encontrar una solución", {I: 1, R: 0.5, A: 0.5}],
            ["I", "Prefiero seguir instrucciones claras", {C: 1, I: 0.5}],
            ["J", "Si no funciona, vuelvo a intentarlo", {I: 1, R: 0.5}],
        ],
    },
    {
        id: "P4",
        tipo: "multiple",
        max: 3,
        titulo: "¿Cómo es tu relación con la tecnología?",
        opciones: [
            ["A", "La uso principalmente para actividades cotidianas", {C: 0.5, I: 0.5}],
            ["B", "Me gusta utilizar herramientas digitales para trabajar o estudiar", {C: 1, I: 0.5}],
            ["C", "Me interesa entender cómo funcionan las tecnologías", {I: 1, R: 0.5}],
            ["D", "Me gusta crear contenido digital", {A: 1}],
            ["E", "Me interesa programar o desarrollar aplicaciones", {I: 1, R: 0.5}],
            ["F", "Me interesa analizar datos", {I: 1, C: 0.5}],
            ["G", "Me gustaría automatizar tareas", {I: 1, E: 0.5, R: 0.5}],
            ["H", "Me interesa reparar o configurar equipos", {R: 1, I: 0.5}],
            ["I", "Me interesa aplicar tecnología a problemas reales", {I: 1, R: 0.5, E: 0.5}],
        ],
    },
    {
        id: "P5",
        tipo: "multiple",
        max: 3,
        titulo: "Si pudieras solucionar o mejorar algo de tu entorno, ¿qué te gustaría abordar?",
        opciones: [
            ["A", "Problemas técnicos o prácticos", {R: 1, I: 0.5}],
            ["B", "Problemas científicos o de investigación", {I: 1}],
            ["C", "Problemas relacionados con tecnología", {I: 1, R: 0.5, E: 0.5}],
            ["D", "Problemas sociales o de las personas", {S: 1, E: 0.5}],
            ["E", "Problemas de comunicación o creatividad", {A: 1, S: 0.5}],
            ["F", "Problemas empresariales o de negocios", {E: 1, S: 0.5}],
            ["G", "Problemas administrativos u organizativos", {C: 1, I: 0.5, E: 0.5}],
            ["H", "Problemas ambientales", {I: 1, R: 0.5, S: 0.5}],
        ],
    },
    {
        id: "P6",
        tipo: "multiple",
        max: 3,
        titulo: "Pensando en el futuro, ¿cómo te imaginas trabajando?",
        opciones: [
            ["A", "Trabajando con máquinas, equipos u objetos", {R: 1, I: 0.5}],
            ["B", "Investigando, analizando o buscando respuestas", {I: 1}],
            ["C", "Creando, diseñando o expresando ideas", {A: 1}],
            ["D", "Trabajando para ayudar o acompañar a personas", {S: 1, E: 0.5}],
            ["E", "Liderando equipos o proyectos", {E: 1, S: 0.5}],
            ["F", "Emprendiendo o desarrollando un negocio", {E: 1, C: 0.5}],
            ["G", "Organizando información, procesos o recursos", {C: 1, E: 0.5, I: 0.5}],
            ["H", "Trabajando con tecnología", {I: 1, R: 0.5}],
        ],
    },
    {
        id: "P7",
        tipo: "multiple",
        max: 4,
        titulo: "Si tuvieras la oportunidad de realizar diferentes actividades durante tus estudios o trabajo, ¿cuáles te gustaría hacer?",
        ayuda: "Selecciona máximo 4 opciones.",
        opciones: [
            ["A", "Construir, reparar, instalar o trabajar con objetos, herramientas o equipos.", {R: 1}],
            ["B", "Investigar, analizar información y encontrar respuestas a problemas.", {I: 1}],
            ["C", "Crear diseños, contenidos, imágenes, videos o nuevas ideas.", {A: 1}],
            ["D", "Programar, desarrollar aplicaciones o crear soluciones tecnológicas.", {I: 1, R: 0.5}],
            ["E", "Enseñar, orientar, acompañar o ayudar a otras personas.", {S: 1}],
            ["F", "Liderar equipos, organizar proyectos o tomar decisiones.", {E: 1, S: 0.5}],
            ["G", "Vender, negociar, emprender o desarrollar ideas de negocio.", {E: 1}],
            ["H", "Organizar información, documentos, datos o procesos.", {C: 1, I: 0.5, E: 0.5}],
            ["I", "Trabajar en proyectos relacionados con la comunidad o el entorno.", {S: 1, E: 0.5}],
            ["J", "Realizar actividades prácticas y aprender haciendo.", {R: 1, I: 0.5}],
            ["K", "Experimentar y probar nuevas formas de hacer las cosas.", {I: 1, R: 0.5, A: 0.5}],
            ["L", "Todavía no tengo claro qué actividades me gustaría realizar.", {}],
        ],
    },
    {
        id: "P8",
        tipo: "multiple",
        max: 3,
        titulo: "Si pudieras utilizar tus habilidades para generar un cambio en tu entorno, ¿qué te gustaría aportar principalmente?",
        ayuda: "Selecciona máximo 3 opciones.",
        opciones: [
            ["A", "Crear soluciones nuevas para resolver problemas.", {I: 1, A: 0.5}],
            ["B", "Mejorar la forma en que funcionan las cosas o los procesos.", {C: 1, I: 0.5, E: 0.5}],
            ["C", "Crear productos, diseños o contenidos que expresen nuevas ideas.", {A: 1}],
            ["D", "Ayudar a las personas a aprender, crecer o superar dificultades.", {S: 1}],
            ["E", "Crear oportunidades de negocio, empleo o emprendimiento.", {E: 1, C: 0.5}],
            ["F", "Utilizar la tecnología para facilitar la vida de las personas.", {I: 1, R: 0.5, S: 0.5}],
            ["G", "Investigar y generar nuevos conocimientos.", {I: 1}],
            ["H", "Contribuir al desarrollo de mi comunidad o territorio.", {S: 1, E: 0.5}],
            ["I", "Cuidar el medio ambiente y encontrar soluciones sostenibles.", {I: 1, R: 0.5, S: 0.5}],
            ["J", "Construir, reparar o desarrollar soluciones prácticas.", {R: 1, I: 0.5}],
            ["K", "Liderar proyectos y lograr que las ideas se conviertan en realidad.", {E: 1, S: 0.5}],
            ["L", "Todavía no tengo claro qué me gustaría aportar.", {}],
        ],
    },
    {
        id: "P9",
        tipo: "multiple",
        max: 3,
        titulo: "Cuando imaginas tu futuro, ¿cómo te gustaría verte?",
        ayuda: "Selecciona máximo 3 opciones.",
        opciones: [
            ["A", "Trabajando en algo que me permita crear, diseñar o expresar mis ideas.", {A: 1}],
            ["B", "Resolviendo problemas, investigando o descubriendo cómo funcionan las cosas.", {I: 1}],
            ["C", "Trabajando con tecnología y desarrollando soluciones para necesidades reales.", {I: 1, R: 0.5}],
            ["D", "Ayudando, enseñando u orientando a otras personas.", {S: 1}],
            ["E", "Liderando equipos, proyectos o iniciativas.", {E: 1, S: 0.5}],
            ["F", "Creando mi propio negocio o desarrollando proyectos de emprendimiento.", {E: 1}],
            ["G", "Trabajando en una profesión u oficio práctico donde pueda construir, reparar o hacer cosas.", {R: 1}],
            ["H", "Organizando procesos, información o recursos para que las cosas funcionen mejor.", {C: 1, E: 0.5}],
            ["I", "Contribuyendo al desarrollo de mi comunidad o generando un impacto positivo en mi entorno.", {S: 1, E: 0.5}],
            ["J", "Alcanzando estabilidad y creciendo profesionalmente, aunque todavía no tenga claro exactamente cómo.", {C: 0.5, E: 0.5}],
            ["K", "Todavía estoy explorando y no tengo una imagen clara de cómo quiero verme.", {}],
        ],
    },
    {
        id: "P10",
        tipo: "single",
        titulo: "Después de terminar el colegio, ¿cuál de estas situaciones podría dificultar que continúes tus estudios?",
        ayuda: "Selecciona una opción. Esta respuesta no modifica tu perfil RIASEC; nos ayuda a adaptar la ruta de acceso.",
        opciones: [
            ["A", "Desplazamiento: me preocupa la distancia o el transporte para llegar a la institución.", "desplazamiento"],
            ["B", "No puedo pagar una carrera: el costo de estudiar sería una dificultad para mí.", "economico"],
            ["C", "No tengo tiempo por temas laborales: necesito una opción que se adapte mejor a mi tiempo.", "laboral"],
            ["D", "No tengo problemas para estudiar: actualmente no tengo una dificultad importante para continuar.", "ninguno"],
        ],
    },
];

const respuestas = {};
let preguntaActual = 0;

function inicializarRespuestas() {
    preguntas.forEach((p) => {
        respuestas[p.id] = p.tipo === "abierta" ? "" : [];
    });
}

function renderPregunta() {
    const p = preguntas[preguntaActual];
    const container = document.getElementById("questionContainer");
    const total = preguntas.length;
    const porcentaje = Math.round(((preguntaActual + 1) / total) * 100);

    document.getElementById("progressText").textContent =
        `Pregunta ${preguntaActual + 1} de ${total}`;
    document.getElementById("progressPercent").textContent = `${porcentaje}%`;
    document.getElementById("progressFill").style.width = `${porcentaje}%`;

    let html = `
        <div class="question-card active-card">
            <div class="question-number">${p.id}</div>
            <label>${p.titulo}</label>
            ${p.ayuda ? `<p class="question-help">${p.ayuda}</p>` : ""}
    `;

    if (p.tipo === "abierta") {
        html += `
            <textarea id="openAnswer"
                placeholder="Escribe aquí tu respuesta..."
                maxlength="1000">${escapeHtml(respuestas[p.id])}</textarea>
        `;
    } else {
        html += `<div class="options ${p.tipo === "multiple" ? "multi-options" : ""}">`;

        p.opciones.forEach((opcion) => {
            const [codigo, texto] = opcion;
            const valorRespuesta = p.id === "P10" ? opcion[2] : codigo;
            const selected = respuestas[p.id].includes(valorRespuesta) ? "selected" : "";
            html += `
                <button type="button"
                        class="option ${selected}"
                        data-value="${codigo}">
                    <span class="option-code">${codigo}</span>
                    <span>${texto}</span>
                </button>
            `;
        });

        html += `</div>`;
    }

    html += `</div>`;
    container.innerHTML = html;

    const buttons = container.querySelectorAll(".option");
    buttons.forEach((button) => {
        button.addEventListener("click", () => seleccionarOpcion(p, button.dataset.value));
    });

    const textarea = document.getElementById("openAnswer");
    if (textarea) {
        textarea.addEventListener("input", () => {
            respuestas[p.id] = textarea.value;
        });
        textarea.focus();
    }

    document.getElementById("prevButton").disabled = preguntaActual === 0;
    document.getElementById("nextButton").textContent =
        preguntaActual === total - 1 ? "Ver mi orientación" : "Siguiente";
}

function seleccionarOpcion(pregunta, codigo) {
    const seleccionadas = respuestas[pregunta.id];

    if (pregunta.tipo === "single") {
        const opcionSeleccionada = pregunta.opciones.find(opcion => opcion[0] === codigo);
        const valorRespuesta = pregunta.id === "P10" && opcionSeleccionada ? opcionSeleccionada[2] : codigo;
        respuestas[pregunta.id] = [valorRespuesta];
        renderPregunta();
        return;
    }

    const indice = seleccionadas.indexOf(codigo);

    if (indice >= 0) {
        seleccionadas.splice(indice, 1);
    } else {
        if (seleccionadas.length >= pregunta.max) {
            alert(`Puedes seleccionar máximo ${pregunta.max} opciones.`);
            return;
        }
        seleccionadas.push(codigo);
    }

    renderPregunta();
}

function validarPregunta() {
    const p = preguntas[preguntaActual];

    if (p.tipo === "abierta") {
        const respuesta = respuestas[p.id].trim();
        if (!respuesta) {
            alert("Cuéntanos un poco sobre ti antes de continuar.");
            return false;
        }
        return true;
    }

    if (!respuestas[p.id] || respuestas[p.id].length === 0) {
        alert("Selecciona al menos una opción para continuar.");
        return false;
    }

    return true;
}

function obtenerOrientacion(codigoP9) {
    const orientaciones = {
        A: "Tu proyección muestra interés por crear, diseñar y expresar ideas.",
        B: "Tu proyección muestra interés por investigar, analizar y resolver problemas.",
        C: "Tu proyección muestra interés por la tecnología y por desarrollar soluciones para necesidades reales.",
        D: "Tu proyección muestra interés por ayudar, enseñar y acompañar a otras personas.",
        E: "Tu proyección muestra interés por liderar equipos, proyectos o iniciativas.",
        F: "Tu proyección muestra interés por emprender y desarrollar proyectos propios.",
        G: "Tu proyección muestra interés por actividades prácticas, construcción y solución de problemas concretos.",
        H: "Tu proyección muestra interés por organizar procesos, información y recursos.",
        I: "Tu proyección muestra interés por contribuir a tu comunidad y generar impacto positivo.",
        J: "Tu proyección muestra interés por alcanzar estabilidad y crecer profesionalmente.",
        K: "Todavía estás explorando cómo quieres verte en el futuro; tus demás respuestas ayudarán a orientar las opciones."
    };
    return orientaciones[codigoP9] || "Tu perfil se construye a partir del conjunto de tus respuestas.";
}

function calcularPerfil() {
    const puntajes = {R: 0, I: 0, A: 0, S: 0, E: 0, C: 0};

    // P1 es abierta y deliberadamente NO puntúa.
    for (const p of preguntas) {
        if (p.id === "P1" || p.id === "P10") continue;

        const seleccionadas = respuestas[p.id] || [];
        const opcionesMap = Object.fromEntries(p.opciones.map(o => [o[0], o]));

        seleccionadas.forEach((codigo) => {
            const opcion = opcionesMap[codigo];
            if (!opcion) return;
            const mapa = opcion[2];
            Object.entries(mapa).forEach(([dimension, valor]) => {
                puntajes[dimension] += valor;
            });
        });
    }

    // Normalización simple por el máximo teórico de cada dimensión
    // usando las opciones que realmente están disponibles en P2-P9.
    const maximos = {R: 0, I: 0, A: 0, S: 0, E: 0, C: 0};

    for (const p of preguntas) {
        if (p.id === "P1" || p.id === "P10") continue;

        const maximaSeleccion = p.max || 1;
        const contribuciones = {R: 0, I: 0, A: 0, S: 0, E: 0, C: 0};

        p.opciones.forEach((o) => {
            Object.entries(o[2]).forEach(([d, v]) => {
                contribuciones[d] = Math.max(contribuciones[d], v);
            });
        });

        Object.keys(maximos).forEach((d) => {
            maximos[d] += contribuciones[d] * maximaSeleccion;
        });
    }

    const porcentajes = {};
    dimensiones.forEach((d) => {
        porcentajes[d] = maximos[d]
            ? Math.round((puntajes[d] / maximos[d]) * 100)
            : 0;
    });

    const orden = [...dimensiones].sort((a, b) => {
        if (puntajes[b] !== puntajes[a]) return puntajes[b] - puntajes[a];
        return dimensiones.indexOf(a) - dimensiones.indexOf(b);
    });

    return {
        puntajes,
        porcentajes,
        orden,
        codigo: orden.slice(0, 3).join(""),
        orientacion: obtenerOrientacion(respuestas.P9[0]),
    };
}

function obtenerCondicion() {
    return respuestas.P10 && respuestas.P10.length ? respuestas.P10[0] : "ninguno";
}

const URL_OFERTA_ITM = "https://www.itm.edu.co/aspirante-pregrado/";
const URL_OFERTA_COLMAYOR = "https://www.colmayor.edu.co/admisiones/inscripciones-2027-1/";

/*
 * RUMBO 360 V2.4 — Motor de oferta educativa multiinstitucional.
 * La matriz RIASEC de cada programa es una capa de orientación propia de RUMBO 360;
 * no representa una clasificación oficial de las instituciones.
 * Catálogos base: oferta oficial de pregrado ITM y Colegio Mayor.
 */
const catalogoProgramas = [
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Gestión Administrativa – Virtual",
        programaBase: "Tecnología en Gestión Administrativa",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {C: 1, E: 0.9, S: 0.5, I: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-gestion-administrativa-virtual/",
        etiqueta: "Administración y organizaciones"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Análisis de Costos y Presupuestos – Virtual",
        programaBase: "Tecnología en Análisis de Costos y Presupuestos",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {C: 1, I: 0.9, E: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-analisis-de-costos-y-presupuestos-virtual/",
        etiqueta: "Análisis, finanzas y procesos"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Tecnología en Diseño y Programación de Soluciones de Software como Servicio – SaaS",
        programaBase: "Tecnología en Diseño y Programación de Soluciones de Software como Servicio – SaaS",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7, A: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-diseno-y-programacion-de-soluciones-de-software-como-servicio-saas-virtual/",
        etiqueta: "Tecnología y desarrollo de software"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Desarrollo de Aplicaciones para Dispositivos Móviles",
        programaBase: "Tecnología en Desarrollo de Aplicaciones para Dispositivos Móviles",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.8, A: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-desarrollo-de-aplicaciones-para-dispositivos-moviles-virtual/",
        etiqueta: "Programación y soluciones móviles"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Gestión Comercial – Virtual Dual",
        programaBase: "Tecnología en Gestión Comercial",
        nivel: "Tecnológica",
        modalidad: "Virtual Dual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {E: 1, C: 0.8, S: 0.6, I: 0.4},
        url: "https://www.itm.edu.co/tecnologia-en-gestion-comercial-virtual-dual/",
        etiqueta: "Gestión, ventas y emprendimiento"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Desarrollo de Software",
        programaBase: "Tecnología en Desarrollo de Software",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.8, A: 0.3, C: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-desarrollo-de-software/",
        etiqueta: "Software, programación y datos"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Gestión de Redes de Telecomunicaciones",
        programaBase: "Tecnología en Gestión de Redes de Telecomunicaciones",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.9, C: 0.3},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-gestion-de-redes-de-telecomunicaciones/",
        etiqueta: "Redes y telecomunicaciones"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Automatización Electrónica",
        programaBase: "Tecnología en Automatización Electrónica",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 0.9},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-automatizacion-electronica/",
        etiqueta: "Electrónica y automatización"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Sistemas de Producción",
        programaBase: "Tecnología en Sistemas de Producción",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 0.9, I: 0.9, C: 0.6, E: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-sistemas-de-produccion/",
        etiqueta: "Producción y procesos"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Tecnología en Sistemas Electromecánicos",
        programaBase: "Tecnología en Sistemas Electromecánicos",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 0.9},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-sistemas-electromecanicos/",
        etiqueta: "Mecánica, electricidad y mantenimiento"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Tecnología en Informática Musical",
        programaBase: "Tecnología en Informática Musical",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["La Floresta"],
        ofertaTerritorial: [],
        perfil: {A: 1, I: 0.7, R: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-informatica-musical/",
        etiqueta: "Música, creación y tecnología"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Tecnología en Diseño Industrial",
        programaBase: "Tecnología en Diseño Industrial",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, R: 0.8, I: 0.7},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-diseno-industrial/",
        etiqueta: "Diseño de productos y soluciones"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias de la Construcción",
        nombre: "Tecnología en Construcción de Acabados Arquitectónicos",
        programaBase: "Tecnología en Construcción de Acabados Arquitectónicos",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 0.7, A: 0.6, C: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-construccion-de-acabados-arquitectonicos/",
        etiqueta: "Construcción y arquitectura"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Tecnología en Mantenimiento de Equipo Biomédico",
        programaBase: "Tecnología en Mantenimiento de Equipo Biomédico",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Castilla"],
        ofertaTerritorial: [{"estrategia": "ITM en mi Barrio", "nodo": "Nodo 3", "territorio": "Comuna 5", "punto": "Campus Castilla"}, {"estrategia": "ITM en mi Barrio", "nodo": "Nodo 9", "territorio": "Comuna 80", "punto": "I.E. San Antonio de Prado"}],
        perfil: {R: 1, I: 0.9, S: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-mantenimiento-de-equipo-biomedico/",
        etiqueta: "Tecnología aplicada a la salud"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Administración Tecnológica",
        programaBase: "Administración Tecnológica",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {E: 1, C: 0.8, I: 0.7},
        url: "https://www.itm.edu.co/aspirante-pregrado/programas-profesionales/administracion-tecnologica/",
        etiqueta: "Gestión, tecnología e innovación"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Biología",
        programaBase: "Biología",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.5, S: 0.3},
        url: "",
        etiqueta: "Ciencia e investigación"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Diseño para la Comunicación Interactiva",
        programaBase: "Diseño para la Comunicación Interactiva",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "8 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, I: 0.6, S: 0.5},
        url: "",
        etiqueta: "Diseño, comunicación y experiencias digitales"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Marketing",
        programaBase: "Marketing",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {E: 1, A: 0.7, S: 0.7, C: 0.4},
        url: "",
        etiqueta: "Mercadeo, comunicación y negocios"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Ciencia y Tecnología de los Alimentos",
        programaBase: "Ciencia y Tecnología de los Alimentos",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7, C: 0.4},
        url: "",
        etiqueta: "Ciencia aplicada y alimentos"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Física",
        programaBase: "Física",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.6},
        url: "",
        etiqueta: "Ciencia, análisis e investigación"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Administración del Deporte",
        programaBase: "Administración del Deporte",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {E: 1, S: 0.8, C: 0.6},
        url: "",
        etiqueta: "Gestión y deporte"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Ingeniería en Ciencias de Datos",
        programaBase: "Ingeniería en Ciencias de Datos",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, C: 0.8, R: 0.4},
        url: "",
        etiqueta: "Datos, análisis y tecnología"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Artes de la Grabación y Producción Musical",
        programaBase: "Artes de la Grabación y Producción Musical",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["La Floresta"],
        ofertaTerritorial: [],
        perfil: {A: 1, I: 0.5, R: 0.5},
        url: "",
        etiqueta: "Arte, sonido y producción"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Artes Visuales",
        programaBase: "Artes Visuales",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["La Floresta"],
        ofertaTerritorial: [],
        perfil: {A: 1, S: 0.4},
        url: "",
        etiqueta: "Arte y creación visual"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Ciencias Ambientales",
        programaBase: "Ciencias Ambientales",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [{"estrategia": "ITM en mi Barrio", "nodo": "Nodo 2", "territorio": "Comunas 3 y 4", "punto": "I.E. Fe y Alegría La Cima"}, {"estrategia": "ITM en mi Barrio", "nodo": "Nodo 2", "territorio": "Comunas 3 y 4", "punto": "I.E. Montecarlo Guillermo Gaviria Correa"}],
        perfil: {I: 1, R: 0.6, S: 0.5},
        url: "",
        etiqueta: "Ambiente, ciencia y territorio"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Cine",
        programaBase: "Cine",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 semestres",
        sedes: ["La Floresta"],
        ofertaTerritorial: [],
        perfil: {A: 1, S: 0.5, I: 0.3},
        url: "",
        etiqueta: "Narrativa, creación y producción audiovisual"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Contaduría Pública",
        programaBase: "Contaduría Pública",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [{"estrategia": "ITM en mi Barrio", "nodo": "Nodo 2", "territorio": "Comuna 3", "punto": "I.E. Manuela Beltrán"}, {"estrategia": "ITM en mi Barrio", "nodo": "Nodo 4", "territorio": "Comunas 7 y 60", "punto": "I.E. Jorge Robledo"}, {"estrategia": "ITM en mi Barrio", "nodo": "Nodo 9", "territorio": "Comuna 80", "punto": "I.E. San Antonio de Prado"}],
        perfil: {C: 1, I: 0.8, E: 0.5},
        url: "",
        etiqueta: "Contabilidad, análisis y gestión"
    },
    {
        institucion: "ITM",
        facultad: "Artes y Humanidades",
        nombre: "Diseño",
        programaBase: "Diseño",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "8 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, I: 0.6, R: 0.5},
        url: "",
        etiqueta: "Diseño y creatividad"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Ingeniería Biomédica",
        programaBase: "Ingeniería Biomédica",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.9, S: 0.4},
        url: "",
        etiqueta: "Ingeniería aplicada a la salud"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería de la Calidad",
        programaBase: "Ingeniería de la Calidad",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, C: 0.9, R: 0.5, E: 0.4},
        url: "",
        etiqueta: "Calidad, procesos y mejora"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería de Producción",
        programaBase: "Ingeniería de Producción",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores al ciclo tecnológico",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 0.9, I: 0.9, C: 0.8, E: 0.5},
        url: "",
        etiqueta: "Producción, procesos y operaciones"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería de Sistemas",
        programaBase: "Ingeniería de Sistemas",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores al ciclo tecnológico",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7, C: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/programas-profesionales/ingenieria-de-sistemas/",
        etiqueta: "Software, sistemas y tecnología"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería de Telecomunicaciones",
        programaBase: "Ingeniería de Telecomunicaciones",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores al ciclo tecnológico",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.9, C: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/programas-profesionales/ingenieria-de-telecomunicaciones/",
        etiqueta: "Redes, comunicaciones y tecnología"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería Electrónica",
        programaBase: "Ingeniería Electrónica",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores al ciclo tecnológico",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {R: 0.9, I: 1},
        url: "",
        etiqueta: "Electrónica y tecnología"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Ingeniería Financiera",
        programaBase: "Ingeniería Financiera",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores al ciclo tecnológico",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [],
        perfil: {I: 0.9, C: 0.9, E: 0.7},
        url: "",
        etiqueta: "Finanzas, análisis y decisiones"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería Mecatrónica",
        programaBase: "Ingeniería Mecatrónica",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 1, A: 0.3},
        url: "",
        etiqueta: "Automatización, robótica e ingeniería"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Química Industrial",
        programaBase: "Química Industrial",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7},
        url: "",
        etiqueta: "Ciencia, laboratorio e industria"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Exactas y Aplicadas",
        nombre: "Interpretación y Traducción Lengua de Señas Colombiana - español",
        programaBase: "Interpretación y Traducción Lengua de Señas Colombiana - español",
        nivel: "Profesional",
        modalidad: "Virtual",
        duracion: "8 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {S: 1, A: 0.5, I: 0.4},
        url: "",
        etiqueta: "Comunicación, inclusión y servicio"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Análisis de Costos y Presupuestos – Presencial",
        programaBase: "Tecnología en Análisis de Costos y Presupuestos",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Castilla", "Fraternidad"],
        ofertaTerritorial: [],
        perfil: {C: 1, I: 0.9, E: 0.5},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-analisis-de-costos-y-presupuestos-presencial/",
        etiqueta: "Análisis, finanzas y procesos"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Gestión Administrativa – Presencial",
        programaBase: "Tecnología en Gestión Administrativa",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Castilla", "Fraternidad"],
        ofertaTerritorial: [{"estrategia": "ITM en mi Barrio", "nodo": "Nodo 1", "territorio": "Comunas 1 y 2", "punto": "I.E. Villa del Socorro"}],
        perfil: {C: 1, E: 0.9, S: 0.5, I: 0.5},
        url: "https://www.itm.edu.co/tecnologia-en-gestion-administrativa-presencial/",
        etiqueta: "Administración y organizaciones"
    },
    {
        institucion: "ITM",
        facultad: "Ciencias Económicas y Administrativas",
        nombre: "Tecnología en Control de Calidad",
        programaBase: "Tecnología en Control de Calidad",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Fraternidad"],
        ofertaTerritorial: [{"estrategia": "ITM en mi Barrio", "nodo": "Nodo 1", "territorio": "Comunas 1 y 2", "punto": "I.E. Villa del Socorro"}],
        perfil: {C: 1, I: 0.9, R: 0.5, E: 0.4},
        url: "https://www.itm.edu.co/aspirante-pregrado/tecnologias/tecnologia-en-control-de-calidad/",
        etiqueta: "Calidad, procesos y metrología"
    },
    {
        institucion: "ITM",
        facultad: "Ingenierías",
        nombre: "Ingeniería Electromecánica",
        programaBase: "Ingeniería Electromecánica",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "4 semestres posteriores a la formación en tecnología y componente propedéutico",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 1, A: 0.2},
        url: "https://www.itm.edu.co/aspirante-pregrado/programas-profesionales/ingenieria-electromecanica/",
        etiqueta: "Ingeniería, automatización y mantenimiento"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión de Servicios Gastronómicos",
        programaBase: "Tecnología en Gestión de Servicios Gastronómicos",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1", "El Banco"],
        ofertaTerritorial: [],
        perfil: {A: 1, E: 0.8, S: 0.5, R: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Gastronomía y servicios"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión Turística – Presencial",
        programaBase: "Tecnología en Gestión Turística",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {E: 1, S: 0.8, A: 0.5, C: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Turismo y gestión"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión Turística – Virtual",
        programaBase: "Tecnología en Gestión Turística",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {E: 1, S: 0.8, A: 0.5, C: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Turismo y gestión"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión de Procesos de Repostería y Panificación",
        programaBase: "Tecnología en Gestión de Procesos de Repostería y Panificación",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {R: 0.9, A: 0.8, E: 0.6, C: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Producción gastronómica"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión Comercial",
        programaBase: "Tecnología en Gestión Comercial",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["C4TA San Javier", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {E: 1, S: 0.7, C: 0.6, A: 0.3},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Gestión comercial y ventas"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión de Guianza Turística – Presencial",
        programaBase: "Tecnología en Gestión de Guianza Turística",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "El Banco", "Plato"],
        ofertaTerritorial: [],
        perfil: {S: 1, E: 0.8, A: 0.5, R: 0.3},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Turismo, guía y servicio"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Tecnología en Gestión de Guianza Turística – Virtual",
        programaBase: "Tecnología en Gestión de Guianza Turística",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {S: 1, E: 0.8, A: 0.5, C: 0.3},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Turismo, guía y servicio"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Tecnología en Delineante de Arquitectura e Ingeniería",
        programaBase: "Tecnología en Delineante de Arquitectura e Ingeniería",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["C4TA San Javier", "El Banco"],
        ofertaTerritorial: [],
        perfil: {A: 1, R: 0.8, I: 0.7, C: 0.5},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Representación técnica y diseño"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Tecnología en Gestión Catastral",
        programaBase: "Tecnología en Gestión Catastral",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {C: 1, I: 0.9, R: 0.5, E: 0.3},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Catastro y territorio"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Tecnología en Gestión Ambiental – Virtual",
        programaBase: "Tecnología en Gestión Ambiental",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {I: 1, S: 0.6, R: 0.5, C: 0.4},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Gestión ambiental"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias de la Salud",
        nombre: "Tecnología en Seguridad y Salud en el Trabajo – Presencial",
        programaBase: "Tecnología en Seguridad y Salud en el Trabajo",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {S: 1, I: 0.8, C: 0.7, E: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-ciencias-de-la-salud/",
        etiqueta: "Salud, prevención y trabajo"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias de la Salud",
        nombre: "Tecnología en Seguridad y Salud en el Trabajo – Virtual",
        programaBase: "Tecnología en Seguridad y Salud en el Trabajo",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {S: 1, I: 0.8, C: 0.7, E: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-ciencias-de-la-salud/",
        etiqueta: "Salud, prevención y trabajo"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Tecnología en Gestión Comunitaria – Presencial",
        programaBase: "Tecnología en Gestión Comunitaria",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1", "El Bagre", "Arboletes", "El Banco"],
        ofertaTerritorial: [],
        perfil: {S: 1, E: 0.7, C: 0.4, I: 0.3},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Comunidad y desarrollo social"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Tecnología en Gestión Comunitaria – Virtual",
        programaBase: "Tecnología en Gestión Comunitaria",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {S: 1, E: 0.7, C: 0.4, I: 0.3},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Comunidad y desarrollo social"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Tecnología en Gestión de la Comunicación en Medios – Presencial",
        programaBase: "Tecnología en Gestión de la Comunicación en Medios",
        nivel: "Tecnológica",
        modalidad: "Presencial",
        duracion: "6 semestres",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {A: 1, S: 0.8, E: 0.6, I: 0.4},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Comunicación y medios"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Tecnología en Gestión de la Comunicación en Medios – Virtual",
        programaBase: "Tecnología en Gestión de la Comunicación en Medios",
        nivel: "Tecnológica",
        modalidad: "Virtual",
        duracion: "6 semestres",
        sedes: [],
        ofertaTerritorial: [],
        perfil: {A: 1, S: 0.8, E: 0.6, I: 0.4},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Comunicación y medios"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Administración de Empresas Turísticas",
        programaBase: "Administración de Empresas Turísticas",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["C4TA San Javier"],
        ofertaTerritorial: [],
        perfil: {E: 1, S: 0.8, C: 0.6, A: 0.5},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Turismo y administración"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Gastronomía y Culinaria",
        programaBase: "Gastronomía y Culinaria",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, R: 0.8, E: 0.7, S: 0.4},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Gastronomía y emprendimiento"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Administración",
        nombre: "Ingeniería Comercial",
        programaBase: "Ingeniería Comercial",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 semestres",
        sedes: ["C4TA San Javier"],
        ofertaTerritorial: [],
        perfil: {E: 1, C: 0.8, I: 0.7, S: 0.5},
        url: "https://www.colmayor.edu.co/facultad-de-administracion/",
        etiqueta: "Negocios, análisis y gestión"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Arquitectura",
        programaBase: "Arquitectura",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, I: 0.8, R: 0.7, E: 0.4},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Diseño, espacio y territorio"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Construcciones Civiles",
        programaBase: "Construcciones Civiles",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {R: 1, I: 0.8, C: 0.7, E: 0.5},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Construcción y obras civiles"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Arquitectura e Ingeniería",
        nombre: "Ingeniería Ambiental",
        programaBase: "Ingeniería Ambiental",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7, S: 0.6, C: 0.4},
        url: "https://www.colmayor.edu.co/programas/pep-programas/pep-programas-de-la-facultad-de-arquitectura-e-ingenieria/",
        etiqueta: "Ambiente, territorio y sostenibilidad"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias de la Salud",
        nombre: "Bacteriología y Laboratorio Clínico",
        programaBase: "Bacteriología y Laboratorio Clínico",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "8 niveles",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.7, S: 0.6, C: 0.5},
        url: "https://www.colmayor.edu.co/facultad-de-ciencias-de-la-salud/",
        etiqueta: "Ciencia, laboratorio y salud"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias de la Salud",
        nombre: "Biotecnología",
        programaBase: "Biotecnología",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "9 niveles",
        sedes: ["Robledo"],
        ofertaTerritorial: [],
        perfil: {I: 1, R: 0.8, A: 0.3, S: 0.3},
        url: "https://www.colmayor.edu.co/facultad-de-ciencias-de-la-salud/",
        etiqueta: "Ciencia y biotecnología"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Planeación y Desarrollo Social",
        programaBase: "Planeación y Desarrollo Social",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["Robledo", "Comuna 1", "El Bagre", "Arboletes", "El Banco", "Plato"],
        ofertaTerritorial: [],
        perfil: {S: 1, E: 0.7, I: 0.6, C: 0.5},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Desarrollo social y territorio"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Licenciatura en Ciencias Sociales",
        programaBase: "Licenciatura en Ciencias Sociales",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["Robledo", "Comuna 1"],
        ofertaTerritorial: [],
        perfil: {S: 1, I: 0.7, A: 0.5, E: 0.4},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Educación y ciencias sociales"
    },
    {
        institucion: "Colegio Mayor de Antioquia",
        facultad: "Ciencias Sociales y Educación",
        nombre: "Comunicación Social",
        programaBase: "Comunicación Social",
        nivel: "Profesional",
        modalidad: "Presencial",
        duracion: "10 niveles",
        sedes: ["C4TA San Javier", "Robledo"],
        ofertaTerritorial: [],
        perfil: {A: 1, S: 0.8, E: 0.6, I: 0.5},
        url: "https://www.colmayor.edu.co/programas/facultad-de-ciencias-sociales-y-educacion/",
        etiqueta: "Comunicación y sociedad"
    }
];

const programasITM = catalogoProgramas.filter(p => p.institucion === "ITM");
const programasColegioMayor = catalogoProgramas.filter(p => p.institucion === "Colegio Mayor de Antioquia");

function recomendarProgramas(perfil, condicion) {
    const top = perfil.orden.slice(0, 3);
    let candidatos = catalogoProgramas.map(p => {
        let score = 0;
        top.forEach((d, idx) => { score += (3 - idx) * (p.perfil[d] || 0); });

        // Refuerzo leve para coincidencias con la cuarta dimensión, sin cambiar el perfil principal.
        const cuarta = perfil.orden[3];
        if (cuarta) score += 0.35 * (p.perfil[cuarta] || 0);
        return {...p, score};
    });

    if (condicion === "laboral") {
        const virtuales = candidatos.filter(p => /virtual/i.test(p.modalidad));
        if (virtuales.length >= 4) candidatos = virtuales;
        else candidatos = [...virtuales, ...candidatos.filter(p => !/virtual/i.test(p.modalidad))];
    } else if (condicion === "desplazamiento") {
        candidatos.sort((a, b) => {
            const accesoA = /virtual/i.test(a.modalidad) || a.sedes.some(s => /comuna 1/i.test(s)) || a.ofertaTerritorial.some(t => /nodo 1|comuna 1/i.test(`${t.nodo} ${t.territorio}`));
            const accesoB = /virtual/i.test(b.modalidad) || b.sedes.some(s => /comuna 1/i.test(s)) || b.ofertaTerritorial.some(t => /nodo 1|comuna 1/i.test(`${t.nodo} ${t.territorio}`));
            return Number(accesoB) - Number(accesoA) || b.score - a.score;
        });
    }

    // Evita mostrar dos veces el mismo programa base de una institución.
    const vistos = new Set();
    const unicos = [];
    for (const p of candidatos.sort((a,b) => b.score - a.score)) {
        const clave = `${p.institucion}|${p.programaBase}`;
        if (vistos.has(clave)) continue;
        vistos.add(clave);
        unicos.push(p);
        if (unicos.length === 4) break;
    }
    return unicos;
}

function bloqueCondicion(condicion) {
    const bloques = {
        desplazamiento: {
            titulo: "Priorizamos alternativas con menor desplazamiento",
            texto: "Como indicaste que el desplazamiento puede ser una dificultad, RUMBO 360 prioriza opciones virtuales y ofertas disponibles en Comuna 1 cuando están presentes en el catálogo. También puedes explorar las demás opciones."
        },
        economico: {
            titulo: "Revisemos las alternativas de financiación",
            texto: "La condición económica se mantiene separada del diagnóstico RIASEC. RUMBO 360 puede mostrar apoyos y dirigir a las fuentes oficiales de cada institución cuando estén disponibles."
        },
        laboral: {
            titulo: "Priorizamos opciones compatibles con tu tiempo",
            texto: "Como indicaste que trabajas o tienes otras responsabilidades, RUMBO 360 prioriza modalidades virtuales cuando están disponibles en el catálogo."
        },
        ninguno: {
            titulo: "Puedes explorar las opciones relacionadas con tu perfil",
            texto: "No indicaste una barrera principal. RUMBO 360 prioriza las opciones que más se relacionan con tu perfil para que puedas conocerlas y decidir cuáles explorar."
        }
    };
    return bloques[condicion] || bloques.ninguno;
}

function mostrarResultado() {
    const perfil = calcularPerfil();
    const condicion = obtenerCondicion();
    const nombres = {R:"Realista", I:"Investigador", A:"Artístico", S:"Social", E:"Emprendedor", C:"Convencional"};
    const recomendaciones = recomendarProgramas(perfil, condicion);
    const info = bloqueCondicion(condicion);

    const cards = recomendaciones.map((p, i) => {
        const sedes = p.sedes.length ? p.sedes.join(" · ") : "Modalidad virtual";
        const territorial = p.ofertaTerritorial.length ? `<small class="territorial-note">Oferta territorial: ${escapeHtml(p.ofertaTerritorial.map(t => `${t.nodo} — ${t.territorio}`).join("; "))}</small>` : "";
        return `
        <article class="program-card">
            <div>
                <span class="program-rank">${i + 1}</span>
                <h4>${escapeHtml(p.nombre)}</h4>
                <p><strong>${escapeHtml(p.institucion)}</strong> · ${escapeHtml(p.etiqueta)} · ${escapeHtml(p.nivel)} · ${escapeHtml(p.modalidad)} · ${escapeHtml(p.duracion)}</p>
                <p><strong>Sede/campus:</strong> ${escapeHtml(sedes)}</p>
                ${territorial}
            </div>
            <a class="program-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Ver fuente oficial ↗</a>
        </article>`;
    }).join("");

    const debugScores = dimensiones.map(d => `
        <div class="debug-score"><strong>${d}</strong><span>${perfil.puntajes[d].toFixed(1)}</span></div>
    `).join("");

    const codigoVisible = perfil.codigo.split("").map(d => `
        <span class="riasec-letter"><strong>${d}</strong><small>${nombres[d]}</small></span>
    `).join("");

    const result = document.getElementById("result");
    result.innerHTML = `
        <p class="eyebrow">TU RUTA INICIAL</p>
        <h2>Opciones que podrías <span>explorar</span></h2>
        <p>Tu perfil se utiliza como una guía para relacionar tus intereses con programas reales. No determina una carrera obligatoria.</p>

        <div class="riasec-result-box">
            <p class="eyebrow">RESULTADO RIASEC</p>
            <h3>Tu perfil de intereses es <span>${perfil.codigo}</span></h3>
            <div class="riasec-code">${codigoVisible}</div>
            <p>Estas tres dimensiones representan las áreas de interés que obtuvieron mayor presencia en tus respuestas. Úsalas como punto de partida para explorar opciones, no como una decisión definitiva sobre tu futuro.</p>
        </div>

        <div class="orientation-box">
            <p class="eyebrow">CONDICIÓN DE ACCESO</p>
            <h3>${info.titulo}</h3>
            <p>${info.texto}</p>
        </div>

        <h3>Programas relacionados con tu perfil</h3>
        <div class="program-list">${cards || '<p>No encontramos una coincidencia suficiente con los filtros actuales.</p>'}</div>

        ${condicion === "economico" ? `
        <div class="support-box">
            <p class="eyebrow">APOYOS PARA EL ACCESO</p>
            <h3>Consulta apoyos institucionales</h3>
            <p>Los apoyos y requisitos cambian según la institución y la convocatoria. Consulta siempre la fuente oficial.</p>
            <a class="program-link" href="https://www.itm.edu.co/matricula-cero/" target="_blank" rel="noopener noreferrer">ITM · Matrícula Cero ↗</a>
            <a class="program-link" href="https://www.itm.edu.co/matricula-cero/presupuesto-participativo/" target="_blank" rel="noopener noreferrer">ITM · Presupuesto Participativo ↗</a>
            <a class="program-link" href="https://www.colmayor.edu.co/admisiones/inscripciones-2027-1/" target="_blank" rel="noopener noreferrer">Colegio Mayor · Admisiones ↗</a>
        </div>` : ""}

        <div class="source-box">
            <strong>Fuentes de oferta</strong>
            <p>RUMBO 360 utiliza catálogos de pregrado de ITM y Colegio Mayor de Antioquia. Las afinidades RIASEC son una regla de orientación propia de RUMBO 360 y no una clasificación oficial de las instituciones.</p>
            <a class="program-link" href="${URL_OFERTA_ITM}" target="_blank" rel="noopener noreferrer">Ver oferta ITM ↗</a>
            <a class="program-link" href="${URL_OFERTA_COLMAYOR}" target="_blank" rel="noopener noreferrer">Ver oferta Colegio Mayor ↗</a>
        </div>

        <details class="debug-panel">
            <summary>Panel técnico de validación RIASEC</summary>
            <p>Este panel es para calibrar el prototipo. No es el resultado principal que verá el estudiante.</p>
            <div class="debug-grid">${debugScores}</div>
            <p><strong>Código interno:</strong> ${perfil.codigo}</p>
            <p><strong>Catálogo activo:</strong> ${catalogoProgramas.length} ofertas de pregrado configuradas.</p>
        </details>

        <div class="context-box">
            <strong>P1 · Lo que nos contaste</strong>
            <p>${escapeHtml(respuestas.P1)}</p>
        </div>

        <button class="secondary-button" type="button" onclick="reiniciar()">Volver a comenzar</button>
    `;

    result.classList.remove("hidden");
    document.querySelector(".navigation").classList.add("hidden");
    document.getElementById("questionContainer").classList.add("hidden");
    document.getElementById("progress").classList.add("hidden");
    result.scrollIntoView({behavior:"smooth"});
}

function reiniciar() {
    inicializarRespuestas();
    preguntaActual = 0;
    document.getElementById("result").classList.add("hidden");
    document.querySelector(".navigation").classList.remove("hidden");
    document.getElementById("questionContainer").classList.remove("hidden");
    document.getElementById("progress").classList.remove("hidden");
    renderPregunta();
    document.getElementById("perfil").scrollIntoView({behavior: "smooth"});
}

function escapeHtml(texto) {
    return String(texto)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

document.getElementById("prevButton").addEventListener("click", () => {
    if (preguntaActual > 0) {
        preguntaActual -= 1;
        renderPregunta();
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (!validarPregunta()) return;

    if (preguntaActual < preguntas.length - 1) {
        preguntaActual += 1;
        renderPregunta();
    } else {
        mostrarResultado();
    }
});

inicializarRespuestas();
renderPregunta();
