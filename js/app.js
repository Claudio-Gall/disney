const app = {
    dom: {},
    state: {
        tripDate: new Date('2026-01-21T08:00:00'), // Trip date
        currentDay: '1', // Default to Day 1
        viewMode: 'list', // 'list' or 'map'

        // Park Info for Maps (Updated IDs)
        parks: {
            1: { name: "AK + MK (Hopper)", parking: "Disney's Animal Kingdom Parking", mapImg: "img/map_ak_illustrated_1768099975412.png" }, // Using AK map as primary for start
            2: { name: "Hollywood Studios", parking: "Disney's Hollywood Studios Parking", mapImg: "img/map_hs_illustrated_1768100039767.png" }
        },

        // Expanded Itinerary with Filler & GPS
        itinerary: {
            1: {
                park: "AK (Mañana) + MK (Tarde)",
                date: "Miércoles 21 de enero",
                strategy: {
                    llsp: ["✅ CONFIRMADO: Flight of Passage (8:45 - 9:45 AM)"],
                    llmp: ["Estrategia 100% Standby (Fila Normal).", "Priorizar Shows y Clásicos."],
                    notes: "Tu LLSP de Avatar asegura la mañana. En la tarde, usa filas normales para MK."
                },
                travel: {
                    depart: "06:30 AM",
                    msg: "Salida de Champions Gate hacia ANIMAL KINGDOM.",
                    link: "https://www.google.com/maps/dir/?api=1&origin=1520+Oasis+Club+Blvd,+ChampionsGate,+FL+33896&destination=Disney's+Animal+Kingdom+Parking"
                },
                events: [
                    { time: "07:30 AM", title: "Llegada AK", desc: "Estacionar y pasar seguridad. Caminar directo a Pandora.", type: "logistics", coords: { top: 90, left: 50 } },
                    { time: "08:00 AM", title: "🏃 Rope Drop: Na'vi River", desc: "Aprovecha la entrada temprana. Fila normal standby.", type: "rope-drop", map: "Na'vi River Journey", coords: { top: 40, left: 20 } },
                    { time: "08:30 AM", title: "🦒 Kilimanjaro Safaris", desc: "<b>¡IMPERDIBLE!</b> Animales más activos temprano.", type: "rope-drop", map: "Kilimanjaro Safaris", img: "img/ak_safari_kilimanjaro_1768099295067.png", coords: { top: 20, left: 30 } },
                    { time: "09:00 AM", title: "🦅 Flight of Passage", desc: "<b>LLSP CONFIRMADO (8:45-9:45)</b>. ¡Disfruta el vuelo sin fila!", type: "attraction", map: "Avatar Flight of Passage", img: "img/ak_avatar_flight_1768099277323.png", coords: { top: 50, left: 15 } },
                    { time: "10:00 AM", title: "🦊 Zootopia: Better Zoogether!", desc: "<b>¡NUEVO!</b> Show 4D (Ex-Bichos). Judy y Nick en vivo. Aire Acondicionado.", type: "show", map: "It's Tough to be a Bug!", img: "img/ak_zootopia_show_1768705653686.png", coords: { top: 45, left: 45 } },
                    { time: "11:00 AM", title: "🎭 Festival of Lion King", desc: "Show Imperdible #1. Estilo Broadway. (30 min).", type: "show", map: "Festival of the Lion King", coords: { top: 30, left: 25 } },
                    { time: "12:00 PM", title: "🐠 Finding Nemo: Big Blue", desc: "Show Imperdible #2. Marionetas increíbles y música en vivo.", type: "show", map: "Finding Nemo: The Big Blue... and Beyond!", coords: { top: 60, left: 75 } },
                    { time: "12:45 PM", title: "🦕 DINOSAUR (Despedida)", desc: "<b>¡CIERRA PARA SIEMPRE EN FEB!</b> Es tu última oportunidad de subir.", type: "attraction", map: "DINOSAUR", coords: { top: 70, left: 85 } },
                    { time: "01:15 PM", title: "🍽️ Almuerzo: Satu'li Canteen", desc: "Cheeseburger Pods & Bowls en Pandora. Pedido Móvil recomendado.", type: "food", map: "Satu'li Canteen", coords: { top: 45, left: 22 } },
                    { time: "02:00 PM", title: "🚘 SALIDA A MAGIC KINGDOM", desc: "Ir al auto. Manejar hacia TTC (Ticket Center).", type: "logistics" },

                    // --- SWITCH TO MK ---
                    { time: "03:00 PM", title: "🏰 Llegada a Magic Kingdom", desc: "Estacionar en TTC. Tomar Ferry (vistas) o Monorriel.", type: "logistics", map: "Transportation and Ticket Center" },
                    { time: "03:30 PM", title: "🎭 Desfile de la Tarde", desc: "Festival of Fantasy. Ver en Main Street.", type: "show" },
                    { time: "04:30 PM", title: "🎺 Mickey's PhilharMagic", desc: "Cine 4D inmersivo con música clásica Disney. Tipo Show.", type: "show", map: "Mickey's PhilharMagic", coords: { top: 45, left: 40 } },
                    { time: "05:30 PM", title: "👻 Haunted Mansion", desc: "Clásico abligatorio. Fila Standby.", type: "attraction", map: "Haunted Mansion", coords: { top: 35, left: 30 } },
                    { time: "06:15 PM", title: "🏴‍☠️ Pirates of Caribbean", desc: "Fila rápida. Aventura clásica bajo techo.", type: "attraction", map: "Pirates of the Caribbean", coords: { top: 50, left: 25 } },
                    { time: "07:15 PM", title: "🐸 Tiana's Bayou Adv.", desc: "<b>¡IMPERDIBLE!</b> La atracción nueva del año. Mojarse vale la pena.", type: "attraction", map: "Tiana's Bayou Adventure", img: "img/mk_tiana_splash_1768099377475.png", coords: { top: 40, left: 15 } },
                    { time: "08:15 PM", title: "🏍️ TRON Lightcycle / Run", desc: "Opción: Fila Virtual (si logras a la 1pm) o Standby si la abren.", type: "attraction", map: "TRON Lightcycle / Run", img: "img/mk_tron_cycle_1768099355904.png", coords: { top: 20, left: 85 } },
                    { time: "09:00 PM", title: "🎆 Happily Ever After", desc: "El mejor show de fuegos artificiales del mundo.", type: "show", img: "img/mk_castle_fireworks_1768099335498.png", coords: { top: 50, left: 50 } }
                ]
            },
            2: {
                park: "Hollywood Studios",
                date: "Viernes 23 de enero",
                strategy: {
                    llsp: ["✅ CONFIRMADO: Rise of Resistance (6:50 - 7:50 PM)"],
                    llmp: ["Estrategia Standby: Llegar temprano para Slinky Dog."],
                    notes: "Tu día gira en torno a llegar a Star Wars a las 6:50 PM."
                },
                travel: {
                    depart: "07:00 AM",
                    msg: "Tráfico regular. Objetivo: Rope Drop.",
                    link: "https://www.google.com/maps/dir/?api=1&origin=1520+Oasis+Club+Blvd,+ChampionsGate,+FL+33896&destination=Disney's+Hollywood+Studios"
                },
                events: [
                    { time: "08:30 AM", title: "🐕 Rope Drop: Slinky Dog", desc: "Ve directo aquí al abrir. La fila crecerá rápido.", type: "rope-drop", map: "Slinky Dog Dash", img: "img/hs_slinky_dash_1768099425030.png", coords: { top: 40, left: 80 } },
                    { time: "09:45 AM", title: "🚂 Mickey & Minnie's RR", desc: "Atracción familiar top. Fila standby.", type: "attraction", map: "Mickey & Minnie's Runaway Railway", coords: { top: 50, left: 50 } },
                    { time: "11:00 AM", title: "🌹 Beauty & The Beast", desc: "Show estilo Broadway en vivo. Imperdible.", type: "show", map: "Beauty and the Beast - Live on Stage", coords: { top: 60, left: 70 } },
                    { time: "12:30 PM", title: "❄️ For the First Time...", desc: "Frozen Sing-Along Celebration. Muy divertido y con aire.", type: "show", map: "For the First Time in Forever: A Frozen Sing-Along Celebration", coords: { top: 50, left: 40 } },
                    { time: "01:30 PM", title: "🍽️ Almuerzo: Galaxy's Edge", desc: "Docking Bay 7. Ambiente Star Wars total.", type: "food", map: "Docking Bay 7 Food and Cargo", coords: { top: 25, left: 25 } },
                    { time: "03:00 PM", title: "🤠 Indiana Jones Stunt", desc: "Show de acción de película.", type: "show", map: "Indiana Jones Epic Stunt Spectacular!", coords: { top: 50, left: 40 } },
                    { time: "04:30 PM", title: "🧸 Toy Story Mania", desc: "Competencia 4D. Fila suele moderarse en la tarde.", type: "attraction", map: "Toy Story Mania!", coords: { top: 50, left: 75 } },
                    { time: "05:30 PM", title: "🧜‍♀️ The Little Mermaid", desc: "<b>¡NUEVO! (2025)</b> Show musical renovado. Aire acondicionado.", type: "show", map: "The Little Mermaid - A Musical Adventure", coords: { top: 60, left: 60 } },
                    { time: "06:00 PM", title: "🚀 Explorar Galaxy's Edge", desc: "Fotos en el Halcón Milenario antes de tu reserva.", type: "attraction", coords: { top: 25, left: 30 } },
                    { time: "06:50 PM", title: "⚔️ Rise of Resistance", desc: "<b>LLSP CONFIRMADO (6:50-7:50)</b>. ¡La misión principal! Entra directo.", type: "attraction", map: "Star Wars: Rise of the Resistance", img: "img/hs_rise_resistance_1768099400957.png", coords: { top: 20, left: 20 } },
                    { time: "08:00 PM", title: "🐉 Fantasmic!", desc: "El show nocturno definitivo. Mickey contra los villanos.", type: "show", map: "Fantasmic!", coords: { top: 30, left: 40 } }
                ]
            }
        }
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.startCountdown();
        this.renderItinerary(1); // Default to Day 1
        console.log("Disney Supreme Experience Initialized");
    },

    cacheDOM() {
        this.dom = {
            navItems: document.querySelectorAll('.nav-item'),
            pages: document.querySelectorAll('.page'),
            daysTimer: document.getElementById('days'),
            hoursTimer: document.getElementById('hours'),
            minutesTimer: document.getElementById('minutes'),
            nextAction: document.getElementById('next-action-text'),
            dayBtns: document.querySelectorAll('.day-btn'),
            itineraryContent: document.getElementById('itinerary-content'),
            viewToggle: document.getElementById('view-toggle')
        };
    },

    bindEvents() {
        // Navigation Logic
        this.dom.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetId = item.dataset.target;
                const actualTarget = e.currentTarget.dataset.target || targetId;
                if (actualTarget) this.navigate(actualTarget);
            });
        });

        // Day Selector Logic
        this.dom.dayBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const day = btn.dataset.day;
                this.state.currentDay = day;
                this.renderItinerary(day);

                this.dom.dayBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // View Toggle Logic
        const viewToggleBtn = document.getElementById('view-toggle-btn');
        if (viewToggleBtn) {
            viewToggleBtn.addEventListener('click', () => {
                this.state.viewMode = this.state.viewMode === 'list' ? 'map' : 'list';
                const newIcon = this.state.viewMode === 'list' ? '<i class="fa-solid fa-map"></i> Ver Mapa' : '<i class="fa-solid fa-list-ul"></i> Ver Lista';
                viewToggleBtn.innerHTML = newIcon;
                this.renderItinerary(this.state.currentDay);
            });
        }
    },

    navigate(targetId) {
        this.dom.navItems.forEach(item => {
            if (item.dataset.target === targetId) item.classList.add('active');
            else item.classList.remove('active');
        });

        this.dom.pages.forEach(page => {
            if (page.id === targetId) page.classList.add('active');
            else page.classList.remove('active');
        });
    },

    startCountdown() {
        const updateTimer = () => {
            const now = new Date();
            const diff = this.state.tripDate - now;

            if (diff <= 0) {
                this.dom.nextAction.textContent = "¡El viaje ha comenzado!";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            if (this.dom.daysTimer) {
                this.dom.daysTimer.textContent = String(days).padStart(2, '0');
                this.dom.hoursTimer.textContent = String(hours).padStart(2, '0');
                this.dom.minutesTimer.textContent = String(minutes).padStart(2, '0');
            }

            if (this.dom.nextAction) {
                if (days > 7) {
                    this.dom.nextAction.textContent = "Planificación anticipada";
                } else if (days <= 7 && days > 3) {
                    this.dom.nextAction.textContent = "¡Reserva LLMP & LLSP!";
                } else {
                    this.dom.nextAction.textContent = "¡Preparar maletas!";
                }
            }
        };

        updateTimer();
        setInterval(updateTimer, 60000);
    },

    renderItinerary(dayKey) {
        const data = this.state.itinerary[dayKey];
        if (!data) return;

        // --- MAP VIEW RENDER ---
        if (this.state.viewMode === 'map') {

            // Helper function to generate map HTML
            const generateMapCard = (title, mapImg, events, startCount) => {
                let markersHtml = '';
                let markerCount = startCount;

                events.forEach(event => {
                    if (event.coords) {
                        markerCount++;
                        // Fix: Use event.map (Ride ID/Name) if available for clearer labeling, otherwise event.title
                        const displayTitle = event.map || event.title;

                        const tooltipHtml = `
                            <div class="marker-tooltip">
                                <strong>${markerCount}. ${displayTitle}</strong>
                                <br><small>${event.time}</small>
                            </div>
                        `;

                        markersHtml += `
                            <div class="map-marker ${event.type}" style="top: ${event.coords.top}%; left: ${event.coords.left}%;">
                                <span class="marker-number">${markerCount}</span>
                                ${tooltipHtml}
                            </div>
                        `;
                    }
                });

                return `
                    <div class="map-card" style="margin-bottom: 30px;">
                        <div class="map-wrapper">
                            <img src="${mapImg}" alt="Mapa de ${title}" class="park-map-img">
                            ${markersHtml}
                        </div>
                        <div class="map-overlay-info">
                            <h3>${title}</h3>
                            <p>Mapa Interactivo de Secuencia</p>
                        </div>
                    </div>
                `;
            };

            let mapHtml = '<div class="map-container fade-in">';

            // SPECIAL LOGIC FOR DAY 1 (SPLIT MAPS)
            if (dayKey == 1) {
                // Split events: AK (Indices 0-7 approx) and MK (Indices 8+). 

                const akEvents = data.events.slice(0, 8);
                const mkEvents = data.events.slice(8);

                // Render AK Map
                mapHtml += generateMapCard(
                    "Animal Kingdom (Mañana)",
                    "img/map_ak_illustrated_1768099975412.png",
                    akEvents,
                    0
                );

                // Count markers in first map to continue sequence for second map
                const akMarkerCount = akEvents.filter(e => e.coords).length;

                // Render MK Map
                mapHtml += generateMapCard(
                    "Magic Kingdom (Tarde)",
                    "img/map_mk_illustrated_1768100001500.png",
                    mkEvents,
                    akMarkerCount
                );

            } else {
                // STANDARD SINGLE MAP (Day 2)
                const parkInfo = this.state.parks[dayKey];
                mapHtml += generateMapCard(parkInfo.name, parkInfo.mapImg, data.events, 0);
            }

            mapHtml += '</div>';
            this.dom.itineraryContent.innerHTML = mapHtml;
            return;
        }

        // --- LIST VIEW RENDER ---

        // 1. STRATEGY DASHBOARD (New!)
        let strategyHtml = '';
        if (data.strategy) {
            const llspList = data.strategy.llsp.map((item, i) => `<li><span class="rank">${i + 1}</span> ${item}</li>`).join('');
            const llmpList = data.strategy.llmp.map((item, i) => `<li><span class="rank">${i + 1}</span> ${item}</li>`).join('');

            strategyHtml = `
                <div class="strategy-dashboard">
                    <div class="strategy-header">
                        <i class="fa-solid fa-chess"></i> ESTRATEGIA DE RESERVAS (7:00 AM)
                    </div>
                    <div class="strategy-grid">
                        <div class="strategy-col llsp">
                            <div class="col-header">
                                <i class="fa-solid fa-bolt"></i> LL SINGLE PASS
                                <span class="badge-cost">$$$ Extra</span>
                            </div>
                            <ul class="strategy-list">${llspList}</ul>
                        </div>
                        <div class="strategy-col llmp">
                            <div class="col-header">
                                <i class="fa-solid fa-layer-group"></i> LL MULTI PASS
                                <span class="badge-cost">Incluido</span>
                            </div>
                            <ul class="strategy-list">${llmpList}</ul>
                        </div>
                    </div>
                    <div class="strategy-note">
                        <i class="fa-solid fa-circle-exclamation"></i> ${data.strategy.notes}
                    </div>
                </div>
            `;
        }

        // 2. Travel Logisitics Card
        let travelHtml = '';
        if (data.travel) {
            travelHtml = `
                <div class="travel-card">
                    <div class="travel-header">
                        <i class="fa-solid fa-car-side"></i>
                        <span>Logística de Salida</span>
                    </div>
                    <div class="travel-details">
                        <div class="travel-time">
                            <span class="label">Salida Sugerida</span>
                            <span class="time">${data.travel.depart}</span>
                        </div>
                        <p class="travel-msg">${data.travel.msg}</p>
                        <a href="${data.travel.link}" target="_blank" class="map-btn main-gps">
                            <i class="fa-solid fa-location-arrow"></i> Navegar al Parking
                        </a>
                    </div>
                </div>
            `;
        }

        let listSequence = 0;
        const eventsHtml = data.events.map(event => {
            let mapLink = '';
            if (event.map) {
                const safeQuery = encodeURIComponent(event.map + " Disney World");
                mapLink = `<a href="https://www.google.com/maps/search/?api=1&query=${safeQuery}" target="_blank" class="map-link" title="Ver en Mapa">
                    <i class="fa-solid fa-map-pin"></i>
                </a>`;
            }

            let imageHtml = '';
            if (event.img) {
                imageHtml = `<div class="event-image" style="background-image: url('${event.img}')"></div>`;
            }

            // Calculate sequence number for list view to match map
            let sequenceHtml = '';
            if (event.coords) {
                listSequence++;
                sequenceHtml = `<div class="list-sequence-number">${listSequence}</div>`;
            }

            return `
            <div class="timeline-item ${event.type} ${event.img ? 'has-image' : ''}">
                ${sequenceHtml}
                <span class="timeline-time">${event.time}</span>
                <div class="timeline-content">
                    ${imageHtml}
                    <div class="content-body">
                        <div class="timeline-header">
                            <div class="timeline-title">${event.title}</div>
                            ${mapLink}
                        </div>
                        <div class="timeline-desc">${event.desc}</div>
                        ${this.getTypeTag(event.type)}
                    </div>
                </div>
            </div>
        `}).join('');

        this.dom.itineraryContent.innerHTML = strategyHtml + travelHtml + eventsHtml;
    },

    getTypeTag(type) {
        const icons = {
            'booking': '<i class="fa-solid fa-mobile-screen"></i>',
            'rope-drop': '<i class="fa-solid fa-person-running"></i>',
            'food': '<i class="fa-solid fa-utensils"></i>',
            'attraction': '<i class="fa-solid fa-ticket"></i>',
            'show': '<i class="fa-solid fa-masks-theater"></i>',
            'logistics': '<i class="fa-solid fa-road"></i>',
            'info': '<i class="fa-solid fa-circle-info"></i>'
        };
        const labels = {
            'booking': 'Reserva App',
            'rope-drop': 'Estrategia',
            'food': 'Comida',
            'attraction': 'Atracción',
            'show': 'Show',
            'logistics': 'Logística',
            'info': 'Info'
        };

        return `<span class="tag ${type}">${icons[type] || ''} ${labels[type] || 'General'}</span>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
