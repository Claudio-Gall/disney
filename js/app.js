const app = {
    state: {
        tripDate: new Date('2026-01-21T00:00:00'),
        currentDay: 1,
        viewMode: 'list', // 'list' or 'map'
        accommodation: {
            name: "Champions Gate (Oasis Club Blvd)",
            address: "1520 Oasis Club Blvd, ChampionsGate, FL 33896",
            coords: "28.2614,-81.6288" // Approx coords
        },
        parks: {
            1: { name: "Animal Kingdom", parking: "Disney's Animal Kingdom General Parking", mapImg: "img/map_ak_illustrated_1768099975412.png" },
            2: { name: "Magic Kingdom", parking: "Transportation and Ticket Center", mapImg: "img/map_mk_illustrated_1768100001500.png" },
            3: { name: "Hollywood Studios", parking: "Disney's Hollywood Studios Parking", mapImg: "img/map_hs_illustrated_1768100039767.png" }
        },
        // Expanded Itinerary with Filler & GPS
        itinerary: {
            1: {
                park: "Animal Kingdom",
                date: "Miércoles 21 de enero",
                strategy: {
                    llsp: ["Avatar Flight of Passage"],
                    llmp: ["Kilimanjaro Safaris (9-10am)", "Expedition Everest", "Na'vi River Journey"],
                    notes: "Compra LLSP primero. Luego reserva Safaris inmediatamente."
                },
                travel: {
                    depart: "06:30 AM",
                    msg: "Salida de Champions Gate. 30 min viaje + 30 min parking/seguridad.",
                    link: "https://www.google.com/maps/dir/?api=1&origin=1520+Oasis+Club+Blvd,+ChampionsGate,+FL+33896&destination=Disney's+Animal+Kingdom+Parking"
                },
                events: [
                    { time: "07:00 AM", title: "⚡ EJECUTAR ESTRATEGIA (VER ARRIBA)", desc: "Abre la App de Disney. Prioridad: Flight of Passage (LLSP) y Safaris (LLMP).", type: "booking" },
                    { time: "07:45 AM", title: "Llegada & Seguridad", desc: "Estacionar y pasar seguridad. Caminar hacia el Árbol de la Vida.", type: "logistics", coords: { top: 90, left: 50 } },
                    { time: "08:00 AM", title: "🏃 Rope Drop: Early Entry", desc: "Si entras antes: ¡Corre a <b>Na'vi River Journey</b>!", type: "rope-drop", map: "Na'vi River Journey", coords: { top: 40, left: 20 } },
                    { time: "08:30 AM", title: "🦒 Rope Drop: General", desc: "Camino secreto a África (izq del Árbol). Objetivo: <b>Kilimanjaro Safaris</b> (animales activos).", type: "rope-drop", map: "Kilimanjaro Safaris", img: "img/ak_safari_kilimanjaro_1768099295067.png", coords: { top: 20, left: 30 } },
                    { time: "09:30 AM", title: "🦍 Gorilla Falls Trail", desc: "Paseo relajado para ver gorilas. Relleno perfecto post-safari.", type: "attraction", map: "Gorilla Falls Exploration Trail", coords: { top: 25, left: 35 } },
                    { time: "10:30 AM", title: "🎭 Festival of Lion King", desc: "Show estilo Broadway. Imperdible. Descansa pies y aire acondicionado.", type: "show", map: "Festival of the Lion King", coords: { top: 30, left: 25 } },
                    { time: "11:30 AM", title: "🦕 DINOSAUR (DinoLand)", desc: "Última oportunidad antes que cierre para siempre en Feb 2026.", type: "attraction", map: "DINOSAUR", coords: { top: 70, left: 75 } },
                    { time: "12:15 PM", title: "🍔 Pedido Móvil: Satu'li", desc: "Haz el pedido en la app ahora para ganar tiempo.", type: "food" },
                    { time: "12:30 PM", title: "🍽️ Almuerzo: Satu'li Canteen", desc: "El mejor bowl de Disney. Cheeseburger Pods para los niños.", type: "food", map: "Satu'li Canteen", coords: { top: 45, left: 22 } },
                    { time: "02:00 PM", title: "🦅 Flight of Passage", desc: "¡La Joya! Usa tu LLSP comprado. Si no, fila de 120min.", type: "attraction", map: "Avatar Flight of Passage", img: "img/ak_avatar_flight_1768099277323.png", coords: { top: 50, left: 15 } },
                    { time: "03:30 PM", title: "🎢 Expedition Everest", desc: "Montaña rusa principal. Usa Single Rider si la fila es larga.", type: "attraction", map: "Expedition Everest", img: "img/ak_everest_yeti_1768099314545.png", coords: { top: 40, left: 80 } },
                    { time: "04:30 PM", title: "🌳 Caminata Discovery Island", desc: "Ver canguros y nutrias al rededor del árbol.", type: "attraction", coords: { top: 60, left: 50 } }
                ]
            },
            2: {
                park: "Magic Kingdom",
                date: "Jueves 22 de enero",
                strategy: {
                    llsp: ["TRON Lightcycle / Run", "Seven Dwarfs Mine Train"],
                    llmp: ["Tiana's Bayou Adventure", "Peter Pan's Flight", "Haunted Mansion"],
                    notes: "¡Día crítico! Compra TRON a las 7:00 AM en punto."
                },
                travel: {
                    depart: "07:00 AM",
                    msg: "Salida tempano. Recuerda: Parking es en TTC, luego Monorriel/Ferry.",
                    link: "https://www.google.com/maps/dir/?api=1&origin=1520+Oasis+Club+Blvd,+ChampionsGate,+FL+33896&destination=Transportation+and+Ticket+Center"
                },
                events: [
                    { time: "07:00 AM", title: "⚡ ESTRATEGIA DE COMBATE", desc: "1. Compra <b>LLSP TRON</b>.<br>2. Compra <b>LLSP Seven Dwarfs</b>.<br>3. Reserva <b>LLMP Tiana</b>.", type: "booking" },
                    { time: "08:30 AM", title: "🏃 Rope Drop: Peter Pan", desc: "Fantasyland se llena rápido. Peter Pan primero.", type: "rope-drop", map: "Peter Pan's Flight", coords: { top: 30, left: 45 } },
                    { time: "09:15 AM", title: "👻 Haunted Mansion", desc: "Clásico imperdible. Fila suele ser baja temprano.", type: "attraction", map: "Haunted Mansion", coords: { top: 35, left: 30 } },
                    { time: "10:30 AM", title: "🏴‍☠️ Pirates of Caribbean", desc: "Antes que se forme fila. Aventura clásica.", type: "attraction", map: "Pirates of the Caribbean", coords: { top: 50, left: 25 } },
                    { time: "11:30 AM", title: "🍽️ Almuerzo: Columbia Harbour", desc: "Piso 2 para aire y paz. Lobster Roll recomendado.", type: "food", map: "Columbia Harbour House", coords: { top: 35, left: 35 } },
                    { time: "01:00 PM", title: "🐸 Tiana's Bayou Adv.", desc: "Tu LLMP reservado. Prepárate para mojarte un poco.", type: "attraction", map: "Tiana's Bayou Adventure", img: "img/mk_tiana_splash_1768099377475.png", coords: { top: 40, left: 20 } },
                    { time: "02:30 PM", title: "🎢 Big Thunder Mountain", desc: "¡CERRADA POR REMODELACIÓN! (Nota mental).", type: "info", coords: { top: 45, left: 15 } },
                    { time: "03:00 PM", title: "🎭 Desfile de la Tarde", desc: "Verlo desde Frontierland para menos gente.", type: "show", coords: { top: 55, left: 30 } },
                    { time: "04:30 PM", title: "🚀 Space Mountain", desc: "Si hay energía, Tomorrowland. O PeopleMover para descansar.", type: "attraction", map: "Space Mountain", coords: { top: 40, left: 80 } },
                    { time: "06:00 PM", title: "🏍️ TRON Lightcycle / Run", desc: "Tu LLSP individual. ¡La más rápida!", type: "attraction", map: "TRON Lightcycle / Run", img: "img/mk_tron_cycle_1768099355904.png", coords: { top: 20, left: 85 } },
                    { time: "07:45 PM", title: "✨ Disney Starlight Parade", desc: "¡NUEVO! Ubícate en Main Street 45min antes.", type: "show", coords: { top: 70, left: 50 } },
                    { time: "09:00 PM", title: "🎆 Happily Ever After", desc: "Cierre con fuegos artificiales.", type: "show", img: "img/mk_castle_fireworks_1768099335498.png", coords: { top: 50, left: 50 } }
                ]
            },
            3: {
                park: "Hollywood Studios",
                date: "Sábado 24 de enero",
                strategy: {
                    llsp: ["Star Wars: Rise of the Resistance"],
                    llmp: ["Slinky Dog Dash", "Mickey & Minnie's Runaway Railway", "Tower of Terror"],
                    notes: "Rise of Resistance es la prioridad #1 absoluta."
                },
                travel: {
                    depart: "06:45 AM",
                    msg: "Tráfico medio. Objetivo: Llegar antes de la apertura masiva.",
                    link: "https://www.google.com/maps/dir/?api=1&origin=1520+Oasis+Club+Blvd,+ChampionsGate,+FL+33896&destination=Disney's+Hollywood+Studios"
                },
                events: [
                    { time: "07:00 AM", title: "⚡ COMPRA RISE OF RESISTANCE", desc: "Compra <b>LLSP Rise</b> inmediatamente. Luego reserva Slinky Dog.", type: "booking" },
                    { time: "08:30 AM", title: "🐕 Rope Drop: Slinky Dog", desc: "Si no tienes LLMP, corre aquí. Si tienes, ve a Mickey & Minnie.", type: "rope-drop", map: "Slinky Dog Dash", img: "img/hs_slinky_dash_1768099425030.png", coords: { top: 40, left: 80 } },
                    { time: "09:30 AM", title: "🚂 Mickey & Minnie's RR", desc: "La primera atracción con Mickey. Tecnología increíble.", type: "attraction", map: "Mickey & Minnie's Runaway Railway", coords: { top: 50, left: 50 } },
                    { time: "11:00 AM", title: "🧸 Toy Story Mania", desc: "Competencia de disparos 4D. ¡A ganar!", type: "attraction", map: "Toy Story Mania!", coords: { top: 50, left: 75 } },
                    { time: "12:30 PM", title: "🚀 Star Tours", desc: "Relleno clásico. Fila suele ser rápida.", type: "attraction", map: "Star Tours", coords: { top: 50, left: 30 } },
                    { time: "01:30 PM", title: "🍽️ Almuerzo: Galaxy's Edge", desc: "Docking Bay 7. Ronto Wrap es buena opción.", type: "food", map: "Docking Bay 7 Food and Cargo", coords: { top: 25, left: 25 } },
                    { time: "03:00 PM", title: "⚔️ Rise of Resistance", desc: "Tu LLSP. La mejor experiencia de inmersión en el mundo.", type: "attraction", map: "Star Wars: Rise of the Resistance", img: "img/hs_rise_resistance_1768099400957.png", coords: { top: 20, left: 20 } },
                    { time: "04:30 PM", title: "🤠 Indiana Jones Stunt", desc: "Show de acción. Clásico y entretenido.", type: "show", map: "Indiana Jones Epic Stunt Spectacular!", coords: { top: 50, left: 40 } },
                    { time: "06:00 PM", title: "🏨 Tower of Terror", desc: "Si te atreves. Imperdible al atardecer.", type: "attraction", map: "The Twilight Zone Tower of Terror", img: "img/hs_tower_terror_1768099455421.png", coords: { top: 70, left: 80 } },
                    { time: "08:00 PM", title: "🐉 Fantasmic!", desc: "Cierre épico. Llega 1 hora antes para sentar a los 8.", type: "show", map: "Fantasmic!", coords: { top: 30, left: 40 } }
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
            // New Map Elements (will be created in HTML)
            viewToggle: document.getElementById('view-toggle')
        };
    },

    bindEvents() {
        // Navigation Logic
        this.dom.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetId = item.dataset.target; // Get target from the clicked element
                /* Fix: Handle click on icon/span inside button */
                const actualTarget = e.currentTarget.dataset.target || targetId;
                if (actualTarget) this.navigate(actualTarget);
            });
        });

        // Day Selector Logic
        this.dom.dayBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const day = btn.dataset.day;
                this.state.currentDay = day; // Update state
                this.renderItinerary(day);

                // Update active button state
                this.dom.dayBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // View Toggle Logic
        const viewToggleBtn = document.getElementById('view-toggle-btn');
        if (viewToggleBtn) {
            viewToggleBtn.addEventListener('click', () => {
                this.state.viewMode = this.state.viewMode === 'list' ? 'map' : 'list';
                // Update button text/icon
                const newIcon = this.state.viewMode === 'list' ? '<i class="fa-solid fa-map"></i> Ver Mapa' : '<i class="fa-solid fa-list-ul"></i> Ver Lista';
                viewToggleBtn.innerHTML = newIcon;
                this.renderItinerary(this.state.currentDay);
            });
        }

        // Slot Interactions (Simple Toggle for now)
        document.querySelectorAll('.ll-slot').forEach(slot => {
            slot.addEventListener('click', () => {
                slot.classList.toggle('filled');
                const content = slot.querySelector('.slot-content');
                if (slot.classList.contains('filled')) {
                    content.textContent = "Reservado (Click para liberar)";
                    content.style.color = "var(--success)";
                } else {
                    content.textContent = "Disponible";
                    content.style.color = "var(--text-muted)";
                }
            });
        });
    },

    navigate(targetId) {
        // Update Nav
        this.dom.navItems.forEach(item => {
            if (item.dataset.target === targetId) item.classList.add('active');
            else item.classList.remove('active');
        });

        // Update Pages
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

            // Dynamic Status Update
            if (this.dom.nextAction) {
                if (days > 7) {
                    this.dom.nextAction.textContent = "Planificación anticipada";
                } else if (days <= 7 && days > 3) {
                    this.dom.nextAction.textContent = "¡Reserva LLMP & LLSP (Hotel Disney)!";
                } else {
                    this.dom.nextAction.textContent = "¡Preparar maletas!";
                }
            }
        };

        updateTimer();
        setInterval(updateTimer, 60000); // Update every minute
    },

    renderItinerary(dayKey) {
        const data = this.state.itinerary[dayKey];
        if (!data) return;

        // --- MAP VIEW RENDER ---
        if (this.state.viewMode === 'map') {
            const parkInfo = this.state.parks[dayKey];

            // Generate Markers
            let markersHtml = '';
            let markerCount = 0;

            data.events.forEach(event => {
                if (event.coords) {
                    markerCount++;
                    // Basic tooltip content
                    const tooltipHtml = `
                        <div class="marker-tooltip">
                            <strong>${markerCount}. ${event.title}</strong>
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

            const mapHtml = `
                <div class="map-container fade-in">
                    <div class="map-card">
                        <div class="map-wrapper">
                            <img src="${parkInfo.mapImg}" alt="Mapa de ${parkInfo.name}" class="park-map-img">
                            ${markersHtml}
                        </div>
                        <div class="map-overlay-info">
                            <h3>${parkInfo.name}</h3>
                            <p>Mapa Interactivo de Secuencia</p>
                        </div>
                    </div>
                </div>
            `;
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

            return `
            <div class="timeline-item ${event.type} ${event.img ? 'has-image' : ''}">
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
