/* =========================================================================
   ABD RC — Central data layer
   All sample content lives here so every page renders from one source.
   Replace with live API calls when a backend is connected (see comments).
   ========================================================================= */

const ABD = window.ABD || {};

/* ---------------- Services (10 categories) ---------------- */
ABD.services = [
  {
    slug: "rc-aircraft",
    name: "RC Aircraft Services",
    short: "Fixed-wing builds, setup and performance tuning for trainers, sport, scale and aerobatic aircraft.",
    icon: "plane",
    items: ["Fixed-wing RC aircraft", "Electric gliders", "Gasoline-powered aircraft", "Scale aircraft", "Sport & trainer aircraft", "Aerobatic aircraft", "Delta-wing aircraft", "High-speed RC aircraft", "Custom aircraft builds", "Assembly & setup", "CG balancing", "Control-surface setup", "Propeller selection", "Power-system optimization"]
  },
  {
    slug: "uav-drones",
    name: "UAV & Drone Services",
    short: "Multirotor, fixed-wing and VTOL UAV platforms engineered for mapping, inspection and mission payloads.",
    icon: "drone",
    items: ["Multirotor UAV", "Fixed-wing UAV", "VTOL UAV", "Hybrid VTOL platforms", "Mapping drones", "Inspection drones", "Agricultural UAV platforms", "Custom UAV development", "Payload integration", "Autopilot installation", "Ground-control integration", "Telemetry systems", "Flight testing", "UAV troubleshooting"]
  },
  {
    slug: "fpv",
    name: "FPV Services",
    short: "Racing, freestyle and long-range FPV builds with precision electronics tuning and pilot training.",
    icon: "fpv",
    items: ["FPV drone building", "FPV fixed-wing aircraft", "Long-range FPV", "Racing FPV", "Freestyle FPV", "Flight-controller setup", "ESC configuration", "VTX configuration", "FPV camera installation", "Antenna setup", "Radio configuration", "FPV troubleshooting", "FPV pilot training"]
  },
  {
    slug: "helicopters",
    name: "RC Helicopter Services",
    short: "Electric and gas helicopter builds with precise mechanical setup, gyro tuning and blade balancing.",
    icon: "heli",
    items: ["Electric helicopters", "Gas helicopters", "Scale helicopters", "Helicopter assembly", "Mechanical setup", "Gyro configuration", "Servo setup", "Blade balancing", "Maintenance", "Repair", "Flight setup"]
  },
  {
    slug: "rc-cars",
    name: "RC Car Services",
    short: "Electric and nitro platforms, off-road and on-road, tuned for competitive and recreational performance.",
    icon: "car",
    items: ["Electric RC cars", "Nitro RC cars", "Off-road vehicles", "On-road vehicles", "Crawlers", "Custom builds", "Suspension tuning", "Motor upgrades", "ESC setup", "Battery systems", "Repairs", "Performance optimization"]
  },
  {
    slug: "engineering",
    name: "Custom RC Design & Engineering",
    short: "Full engineering lifecycle — concept, CAD, prototyping and structural design for bespoke platforms.",
    icon: "engineering",
    items: ["Concept development", "CAD design", "3D modeling", "Aerodynamic design", "Structural design", "Electrical design", "Power-system selection", "Propulsion optimization", "Battery selection", "Avionics integration", "Prototype development", "3D printing", "CNC fabrication", "Laser cutting", "Composite fabrication", "Custom parts", "Reverse engineering"]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Fabrication",
    short: "In-house 3D printing, CNC and composite fabrication for airframes, brackets and enclosures.",
    icon: "manufacturing",
    items: ["3D printing", "CNC machining", "Laser cutting", "Foam cutting", "Carbon-fiber components", "Fiberglass components", "Composite structures", "Wooden structures", "Custom brackets", "Electronic enclosures", "Custom mounts", "Replacement parts"]
  },
  {
    slug: "repair-maintenance",
    name: "Repair & Maintenance",
    short: "Crash recovery, structural repair and preventive maintenance to keep platforms flight-ready.",
    icon: "repair",
    items: ["Aircraft repairs", "Crash damage repair", "Wing repair", "Fuselage repair", "Landing gear repair", "Servo replacement", "Motor replacement", "ESC replacement", "Wiring repair", "Battery diagnostics", "Radio-system troubleshooting", "Autopilot troubleshooting", "Pre-flight inspection", "Preventive maintenance", "Complete refurbishment"]
  },
  {
    slug: "electronics-avionics",
    name: "Electronics & Avionics",
    short: "Precision installation, configuration and troubleshooting of flight electronics and radio systems.",
    icon: "electronics",
    items: ["RC transmitters", "Receivers", "Flight controllers", "Autopilots", "GPS", "Telemetry", "ESCs", "Servos", "Motors", "Power distribution", "BEC systems", "FPV electronics", "Antennas", "Radio configuration", "Wiring & soldering", "Electrical troubleshooting"]
  },
  {
    slug: "flight-testing",
    name: "Flight Testing",
    short: "Aerospace-style test protocols — from pre-flight verification to maiden flight and data analysis.",
    icon: "test",
    items: ["Pre-flight inspection", "CG verification", "Control-surface verification", "Power-system testing", "Range testing", "Maiden flight", "Flight performance testing", "Stability assessment", "Autopilot testing", "Emergency procedure testing", "Flight data analysis", "Post-flight inspection"]
  }
];

/* ---------------- Projects / Portfolio ---------------- */
ABD.projects = [
  {
    id: "p1", slug: "custom-fixed-wing-rc-aircraft", name: "Custom Fixed-Wing RC Aircraft", category: "RC Aircraft",
    challenge: "Client required a lightweight sport aircraft with extended flight time for repeated demonstration flights.",
    solution: "Engineered a low-drag airframe with optimized wing loading, matched motor/prop combo and a balanced power system.",
    specs: { "Wingspan": "1800 mm", "Length": "1150 mm", "MTOW": "2.4 kg", "Motor": "Brushless 950KV", "Battery": "4S 4000mAh LiPo", "Flight Time": "18–22 min", "Cruise Speed": "55 km/h" },
    tech: ["Balsa/ply composite airframe", "Brushless propulsion", "6-channel radio"],
    results: "Delivered 30% longer flight endurance than the client's previous platform, verified across five test flights."
  },
  {
    id: "p2", slug: "electric-glider", name: "Electric Glider", category: "RC Aircraft",
    challenge: "Design a high-aspect-ratio glider capable of efficient thermal soaring with electric self-launch.",
    solution: "High-aspect wing with a folding prop electric launch system and low-drag fuselage profile.",
    specs: { "Wingspan": "2600 mm", "Length": "1300 mm", "MTOW": "1.9 kg", "Motor": "Brushless 850KV (folding prop)", "Battery": "3S 2200mAh LiPo", "Glide Ratio": "16:1" },
    tech: ["High-aspect wing design", "Folding propeller", "Lightweight composite structure"],
    results: "Achieved sustained thermal soaring flights exceeding 40 minutes on a single launch in test conditions."
  },
  {
    id: "p3", slug: "high-speed-delta-rc-aircraft", name: "High-Speed Delta RC Aircraft", category: "RC Aircraft",
    challenge: "Build a high-speed delta-wing platform for aggressive sport flying with strong structural integrity.",
    specs: { "Wingspan": "900 mm", "Length": "780 mm", "MTOW": "1.1 kg", "Motor": "Brushless 2200KV", "Battery": "4S 1500mAh LiPo", "Max Speed": "180+ km/h" },
    solution: "Reinforced EPP/carbon composite structure with reinforced leading edges and a high-KV power system tuned for top-end speed.",
    tech: ["EPP/carbon composite airframe", "High-KV propulsion", "Reinforced control horns"],
    results: "Verified stable high-speed flight above 180 km/h across structured test passes with no flutter observed."
  },
  {
    id: "p4", slug: "fpv-aircraft", name: "FPV Aircraft", category: "FPV",
    challenge: "Long-range FPV fixed-wing platform with reliable video and telemetry link over extended distances.",
    solution: "Integrated long-range VTX, directional antenna tracking-ready mount, and a dedicated telemetry radio link.",
    specs: { "Wingspan": "1500 mm", "Length": "980 mm", "VTX Power": "800mW (region-compliant)", "Camera": "1200TVL analog", "Battery": "4S 5200mAh LiPo", "Link Range": "Tested to several km, LOS" },
    tech: ["Long-range VTX", "Diversity receiver setup", "Telemetry radio link"],
    results: "Sustained a stable FPV video and telemetry link throughout all logged test flights within tested range."
  },
  {
    id: "p5", slug: "custom-multirotor-uav", name: "Custom Multirotor UAV", category: "UAV",
    challenge: "Client needed a mapping-capable quadcopter with interchangeable camera payloads.",
    solution: "Modular payload bay, redundant power distribution and autopilot-driven mission planning integration.",
    specs: { "Frame": "550 mm quad", "MTOW": "3.2 kg", "Payload Capacity": "800 g", "Flight Controller": "Open-source autopilot", "GPS": "RTK-ready module", "Flight Time": "24–28 min (payload dependent)" },
    tech: ["Modular payload mount", "RTK-ready GPS", "Mission-planning ground control"],
    results: "Delivered consistent mapping-grade flight paths with repeatable payload swaps in under two minutes."
  },
  {
    id: "p6", slug: "vtol-uav", name: "VTOL UAV", category: "UAV",
    challenge: "Combine vertical takeoff convenience with fixed-wing range for a survey mission profile.",
    solution: "Hybrid quad-plane configuration with automated transition logic and dedicated forward-flight propulsion.",
    specs: { "Wingspan": "2000 mm", "MTOW": "4.1 kg", "Configuration": "Quad-plane hybrid VTOL", "Cruise Speed": "65 km/h", "Endurance": "45–55 min" },
    tech: ["Quad-plane hybrid layout", "Automated VTOL transition", "Dual power system"],
    results: "Achieved reliable automated transitions across repeated test cycles with a significant range increase over multirotor-only platforms."
  },
  {
    id: "p7", slug: "rc-helicopter-build", name: "RC Helicopter Build", category: "Helicopter",
    challenge: "Precision scale-style electric helicopter build requiring exact mechanical tolerances.",
    solution: "Full mechanical assembly with gyro tuning, blade balancing and swashplate calibration to factory tolerances.",
    specs: { "Rotor Diameter": "700-class", "Motor": "Brushless heli motor", "Battery": "6S 3000mAh LiPo", "Flight Time": "8–10 min" },
    tech: ["Precision swashplate calibration", "Digital gyro tuning", "Dynamic blade balancing"],
    results: "Achieved smooth, drift-free hover and stable 3D flight characteristics after final tuning pass."
  },
  {
    id: "p8", slug: "custom-rc-vehicle", name: "Custom RC Vehicle", category: "RC Car",
    challenge: "Off-road crawler platform required upgraded suspension travel and drivetrain durability.",
    solution: "Custom long-travel suspension geometry, upgraded drivetrain components and reinforced chassis mounts.",
    specs: { "Scale": "1/10", "Motor": "Brushless crawler motor", "Battery": "2S–3S LiPo", "Suspension Travel": "Extended long-arm" },
    tech: ["Long-arm suspension", "Reinforced chassis", "Upgraded drivetrain"],
    results: "Significantly improved articulation and durability confirmed across repeated off-road test runs."
  },
  {
    id: "p9", slug: "uav-payload-integration", name: "UAV Payload Integration", category: "UAV",
    challenge: "Integrate a thermal imaging payload onto an existing multirotor platform without exceeding weight budget.",
    solution: "Custom lightweight gimbal mount, dedicated power regulation and vibration-isolated payload bay.",
    specs: { "Payload": "Thermal imaging module", "Added Weight": "Within platform payload budget", "Mount": "Vibration-isolated gimbal" },
    tech: ["Vibration isolation mount", "Dedicated payload power regulation", "Custom bracket fabrication"],
    results: "Delivered stable, usable thermal footage across test flights with no measurable payload-induced drift."
  },
  {
    id: "p10", slug: "custom-cnc-aircraft-components", name: "Custom CNC Aircraft Components", category: "Manufacturing",
    challenge: "Client required a batch of precision-matched structural brackets for a fleet of training aircraft.",
    solution: "CNC-machined aluminum brackets designed in CAD, produced to tight tolerance for consistent fit across the fleet.",
    specs: { "Material": "6061 Aluminum", "Process": "3-axis CNC machining", "Tolerance": "±0.05 mm", "Batch Size": "Fleet-matched production run" },
    tech: ["CAD-to-CNC workflow", "Aluminum machining", "Batch quality verification"],
    results: "Delivered a fully interchangeable bracket set across the fleet with zero fitment rework required."
  }
];

/* ---------------- Products / Parts catalog ---------------- */
ABD.products = [
  { id:"m1", name:"Brushless Outrunner Motor 950KV", cat:"Motors", specs:["950KV","Shaft 5mm","Max 380W"], stock:"in", price:null },
  { id:"m2", name:"Brushless Inrunner Motor 2200KV", cat:"Motors", specs:["2200KV","Shaft 4mm","Max 620W"], stock:"in", price:null },
  { id:"e1", name:"40A Brushless ESC (BLHeli)", cat:"ESCs", specs:["40A continuous","2–4S LiPo","BEC 5V/2A"], stock:"in", price:null },
  { id:"e2", name:"60A Car ESC Waterproof", cat:"ESCs", specs:["60A continuous","2–3S LiPo","Fwd/Rev/Brake"], stock:"low", price:null },
  { id:"s1", name:"Digital Metal-Gear Servo 9g", cat:"Servos", specs:["9g","1.8kg·cm torque","Metal gear train"], stock:"in", price:null },
  { id:"s2", name:"High-Torque Servo 20kg", cat:"Servos", specs:["20kg·cm torque","Metal gear","Waterproof case"], stock:"in", price:null },
  { id:"pr1", name:"Carbon Fiber Propeller 10x6", cat:"Propellers", specs:["10x6 pitch","Carbon composite","Balanced pair"], stock:"in", price:null },
  { id:"pr2", name:"Tri-Blade FPV Propeller 5\"", cat:"Propellers", specs:["5 inch","Tri-blade","Polycarbonate"], stock:"in", price:null },
  { id:"b1", name:"LiPo Battery 4S 4000mAh 50C", cat:"Batteries", specs:["14.8V","4000mAh","50C discharge"], stock:"in", price:null },
  { id:"b2", name:"LiPo Battery 6S 3000mAh 75C", cat:"Batteries", specs:["22.2V","3000mAh","75C discharge"], stock:"low", price:null },
  { id:"c1", name:"Smart Balance Charger 200W", cat:"Chargers", specs:["200W","1–6S LiPo","LCD interface"], stock:"in", price:null },
  { id:"r1", name:"8-Channel 2.4GHz Radio System", cat:"Radios", specs:["8 channels","2.4GHz","Telemetry-ready"], stock:"in", price:null },
  { id:"rx1", name:"Micro Receiver 8-Channel", cat:"Receivers", specs:["8 channels","PPM/SBUS","1g weight"], stock:"in", price:null },
  { id:"fc1", name:"Flight Controller (F7 Stack)", cat:"Flight Controllers", specs:["F7 processor","Integrated OSD","BetaFlight/ArduPilot compatible"], stock:"in", price:null },
  { id:"gp1", name:"GPS Module + Compass", cat:"GPS", specs:["M8N chipset","Integrated compass","UART interface"], stock:"in", price:null },
  { id:"ap1", name:"Autopilot Module (Open-Source)", cat:"Autopilots", specs:["32-bit processor","IMU + barometer","Mission planner compatible"], stock:"low", price:null },
  { id:"fp1", name:"FPV Camera 1200TVL", cat:"FPV Equipment", specs:["1200TVL","NTSC/PAL","Wide dynamic range"], stock:"in", price:null },
  { id:"fp2", name:"5.8GHz VTX 25/200/600mW", cat:"FPV Equipment", specs:["Switchable power","40 channels","SmartAudio support"], stock:"in", price:null },
  { id:"cf1", name:"Carbon Fiber Plate 3mm", cat:"Carbon Components", specs:["3mm thickness","3K weave","200x300mm sheet"], stock:"in", price:null },
  { id:"cf2", name:"Carbon Fiber Tube 10x8mm", cat:"Carbon Components", specs:["10mm OD / 8mm ID","1m length","Roll-wrapped"], stock:"in", price:null },
  { id:"cn1", name:"XT60 Connector Pair", cat:"Connectors", specs:["60A rated","Male/female pair","Gold-plated pins"], stock:"in", price:null },
  { id:"wr1", name:"Silicone Wire 14AWG (1m)", cat:"Wires", specs:["14AWG","High-strand copper","200°C silicone jacket"], stock:"in", price:null },
  { id:"hw1", name:"Nylon Hardware Kit (M2–M4)", cat:"Hardware", specs:["Nylon standoffs","M2/M3/M4 screws","120-piece kit"], stock:"in", price:null },
  { id:"tl1", name:"Precision Build Tool Kit", cat:"Tools", specs:["Hex driver set","Prop balancer","Soldering iron"], stock:"in", price:null }
];

/* ---------------- Blog / Knowledge Center ---------------- */
ABD.blog = [
  {
    slug: "how-to-choose-an-rc-motor", category: "Electronics & Avionics", date: "2026-08-12", readTime: "7 min read",
    title: "How to Choose an RC Motor for Your Build",
    excerpt: "KV rating, stator size and current draw explained — how to match a motor to your airframe and mission.",
    body: [
      "Selecting the correct motor is one of the most consequential decisions in any RC or UAV build. Get it wrong and you end up with an underpowered airframe, excessive current draw, or a motor that overheats mid-flight.",
      "Start with KV rating — the RPM the motor produces per volt with no load. Lower-KV motors are suited to larger, slower-turning propellers (typical of sport and scale aircraft), while higher-KV motors suit smaller, faster propellers common in FPV and racing builds.",
      "Next, look at stator size (commonly expressed as a four-digit code, e.g. 2306). A larger stator generally means more torque and thermal headroom, at the cost of added weight — an important tradeoff for anything endurance-focused.",
      "Finally, cross-check the motor's maximum continuous current rating against your ESC and battery discharge capability. A motor that can theoretically pull 45A is meaningless if your ESC is only rated to 30A continuous.",
      "Our engineering team matches motor, ESC, propeller and battery as a single system rather than as isolated components — this is the difference between a platform that performs to spec and one that underdelivers despite good individual parts."
    ]
  },
  {
    slug: "how-to-select-a-propeller", category: "RC Aircraft", date: "2026-08-05", readTime: "6 min read",
    title: "How to Select the Right Propeller",
    excerpt: "Diameter, pitch and blade count — understanding the numbers behind propeller selection.",
    body: [
      "A propeller is specified by two core numbers — diameter and pitch, both typically in inches (e.g. 10x6). Diameter affects thrust and current draw; pitch affects top speed and efficiency at cruise.",
      "Larger diameter propellers generate more thrust at lower RPM, which is efficient but draws more current and stresses the motor and ESC more heavily. Smaller, higher-pitch propellers favor speed over raw thrust.",
      "Blade count matters too — two-blade props are typically the most efficient, while tri- and quad-blade props trade some efficiency for smoother, more predictable thrust response, common in FPV freestyle setups.",
      "Always verify the propeller you select stays within your motor manufacturer's recommended range and your ESC's current limits — an oversized prop is one of the most common causes of premature motor and ESC failure."
    ]
  },
  {
    slug: "lipo-battery-safety", category: "Electronics & Avionics", date: "2026-07-28", readTime: "8 min read",
    title: "LiPo Battery Safety: What Every RC Pilot Should Know",
    excerpt: "Charging, storage, transport and disposal practices that keep your workshop and flight line safe.",
    body: [
      "Lithium polymer batteries deliver excellent power density, but they demand disciplined handling. Always charge on a fire-safe surface, never unattended, and always at the manufacturer's recommended charge rate.",
      "Storage voltage (typically around 3.8V per cell) extends battery lifespan significantly compared to storing packs fully charged. Most quality chargers include a dedicated storage-charge mode.",
      "Inspect packs before every flight for puffing, damaged wiring, or discoloration. A compromised cell should be safely discharged and disposed of according to local battery recycling regulations — never simply thrown in general waste.",
      "Transport packs in a fire-resistant LiPo bag or case, and never leave batteries charging inside a vehicle in direct sunlight or extreme heat.",
      "Our technicians perform battery diagnostics as part of every service booking — if you are unsure about the condition of your packs, book a diagnostic rather than risk a workshop or field incident."
    ]
  },
  {
    slug: "rc-aircraft-cg-setup", category: "Flight Testing", date: "2026-07-19", readTime: "6 min read",
    title: "RC Aircraft CG Setup Explained",
    excerpt: "Why center-of-gravity is the single most important pre-flight check, and how to verify it correctly.",
    body: [
      "Center of gravity (CG) determines how an aircraft balances in pitch. An aircraft that is nose-heavy tends to dive and requires excessive up-elevator; a tail-heavy aircraft is dangerously unstable and prone to unrecoverable stalls.",
      "Manufacturers specify a recommended CG range, usually measured from the leading edge of the wing at a given percentage of the mean aerodynamic chord. Always verify against this range before a maiden flight.",
      "To check CG, balance the aircraft (fully equipped, at flight weight) on two support points at the specified location. It should sit level, or very slightly nose-down.",
      "Adjust battery position first — it is the easiest variable to shift. If further correction is needed, small amounts of nose or tail weight can be added, though this should be a last resort as it increases overall weight.",
      "We verify CG as a mandatory step in every flight-test protocol before a maiden flight leaves the ground."
    ]
  },
  {
    slug: "uav-pre-flight-inspection", category: "UAV & Drone Services", date: "2026-07-10", readTime: "7 min read",
    title: "UAV Pre-Flight Inspection Checklist",
    excerpt: "A structured, repeatable inspection sequence used before every UAV mission.",
    body: [
      "A consistent pre-flight inspection catches the majority of preventable in-flight failures. Start with the airframe — check for cracks, loose fasteners, and propeller or rotor damage.",
      "Verify battery condition and charge level, and confirm secure connection of the power connector and balance lead.",
      "Confirm GPS lock and satellite count before takeoff, and verify compass calibration if the platform or location has changed recently.",
      "Test control surfaces or motor responses through their full range and confirm correct direction of travel against the transmitter inputs.",
      "Review telemetry link strength, confirm return-to-home altitude and failsafe behavior are configured correctly, and log the flight plan before launch.",
      "A written checklist — not memory — should govern this process every time, regardless of pilot experience level."
    ]
  },
  {
    slug: "fpv-setup-guide", category: "FPV Services", date: "2026-06-30", readTime: "9 min read",
    title: "FPV Setup Guide: From Camera to Goggles",
    excerpt: "A practical walkthrough of the FPV signal chain and the settings that matter most.",
    body: [
      "The FPV signal chain runs from camera to VTX (video transmitter) to VRX (video receiver) to goggles. Each link affects final image quality and latency.",
      "Camera settings — particularly latency mode and dynamic range — should match your flying style. Racing setups favor low latency; freestyle and cinematic setups can tolerate slightly higher latency for better image quality.",
      "VTX power output must comply with local regulations, and frequency/channel selection should avoid interference from nearby pilots at events.",
      "Antenna choice matters as much as transmitter power — a quality circular-polarized antenna pair (on both VTX and goggles) improves link reliability far more than raising output power.",
      "Always bench-test your FPV chain before your first flight of the day, confirming a clean image and correct channel lock before takeoff."
    ]
  },
  {
    slug: "rc-aircraft-maintenance", category: "Repair & Maintenance", date: "2026-06-21", readTime: "6 min read",
    title: "Preventive Maintenance for RC Aircraft",
    excerpt: "A maintenance rhythm that catches wear before it becomes a mid-air failure.",
    body: [
      "Preventive maintenance is cheaper than crash repair — inspect control horns, clevises, and linkages every few flights for wear or play.",
      "Check motor mounts and firewall fasteners for looseness caused by vibration, and re-torque as needed using thread-locker where appropriate.",
      "Inspect wiring and connectors for chafing, particularly at any point where cables cross a hinge line or control surface.",
      "Clean and inspect landing gear after rough-field operations, and confirm servo gears show no visible wear or backlash.",
      "Log flight hours and maintenance actions per airframe — a simple logbook makes it far easier to catch developing patterns before they cause a failure."
    ]
  },
  {
    slug: "electric-vs-gasoline-rc-aircraft", category: "RC Aircraft", date: "2026-06-14", readTime: "7 min read",
    title: "Electric vs. Gasoline RC Aircraft: Which Is Right for You?",
    excerpt: "Comparing power systems across cost, maintenance, noise and performance.",
    body: [
      "Electric power systems offer clean, low-maintenance operation with instant throttle response and no fuel residue — ideal for smaller and mid-size sport and trainer aircraft.",
      "Gasoline (and glow) engines typically offer longer runtime per tank and are common in larger-scale aircraft where battery weight would otherwise become impractical.",
      "Noise and site restrictions matter — many flying fields and urban-adjacent locations favor or require electric power due to noise ordinances.",
      "Maintenance burden differs significantly — glow and gas engines require regular tuning, fuel system maintenance and more involved post-flight cleaning, while electric systems mainly require battery care.",
      "Our consultancy service helps clients weigh these tradeoffs against mission profile, site constraints and budget before committing to a platform."
    ]
  },
  {
    slug: "fixed-wing-vs-multirotor-uav", category: "UAV & Drone Services", date: "2026-06-02", readTime: "7 min read",
    title: "Fixed-Wing vs. Multirotor UAV: Choosing the Right Platform",
    excerpt: "Endurance, coverage area and operational flexibility compared across platform types.",
    body: [
      "Fixed-wing UAVs generally offer significantly greater range and endurance per unit of battery capacity, making them well suited to large-area mapping and survey missions.",
      "Multirotor UAVs offer vertical takeoff and landing, precise hover capability and far greater operational flexibility in confined or obstacle-dense sites.",
      "Hybrid VTOL platforms attempt to combine both advantages, at the cost of added mechanical and control-system complexity.",
      "Payload requirements also drive platform choice — some sensor payloads require the stability of hover for accurate data capture, while others are optimized for continuous forward-flight scanning.",
      "We help clients define mission requirements first, then match platform type — not the other way around."
    ]
  },
  {
    slug: "autopilot-basics", category: "Electronics & Avionics", date: "2026-05-22", readTime: "8 min read",
    title: "Autopilot Basics for RC and UAV Platforms",
    excerpt: "What an autopilot actually does, and the core sensors and modes worth understanding.",
    body: [
      "An autopilot combines an inertial measurement unit (IMU), barometer, and often GPS and compass, to stabilize and optionally automate flight beyond direct pilot control.",
      "Flight modes typically range from basic stabilization (leveling the aircraft automatically) through to fully autonomous waypoint navigation.",
      "Failsafe behavior — what the platform does on loss of radio link or GPS — should always be configured and tested deliberately, not left at default settings.",
      "Firmware and parameter tuning (particularly PID tuning) significantly affects flight quality; a poorly tuned autopilot can produce oscillation or sluggish response regardless of hardware quality.",
      "We install, configure and flight-test autopilot systems as part of our electronics and avionics service line."
    ]
  },
  {
    slug: "rc-aircraft-troubleshooting", category: "Repair & Maintenance", date: "2026-05-10", readTime: "6 min read",
    title: "Common RC Aircraft Problems and How to Troubleshoot Them",
    excerpt: "A practical diagnostic approach to the most frequent issues pilots report.",
    body: [
      "Erratic control response is most often caused by interference, a failing receiver, or a loose servo connector — check connections before assuming a radio fault.",
      "Reduced flight time usually traces back to battery degradation, an overly aggressive propeller choice, or a motor drawing more current than expected — diagnostics can isolate the true cause quickly.",
      "Vibration or unusual motor noise typically indicates propeller imbalance, a bent shaft, or worn bearings, and should be addressed before the next flight.",
      "Radio range issues are frequently caused by antenna placement or damage rather than transmitter power — always inspect antenna condition and routing first.",
      "If a fault isn't easily isolated, our diagnostic service uses a structured elimination process across power, control and structural systems to find the root cause."
    ]
  }
];

/* ---------------- Testimonials (demo/placeholder data) ---------------- */
ABD.testimonials = [
  { name:"D. Whitfield", company:"Regional Survey Operator (demo)", project:"Custom Multirotor UAV", rating:5, quote:"The payload integration work was precise and well documented — exactly the kind of engineering rigor we needed for repeatable survey missions." },
  { name:"A. Kessler", company:"University Robotics Program (demo)", project:"VTOL UAV", rating:5, quote:"ABD RC walked our team through the full design process and delivered a platform that performed to spec on the first test flight." },
  { name:"R. Okafor", company:"Independent RC Enthusiast (demo)", project:"Custom Fixed-Wing RC Aircraft", rating:5, quote:"Clean build quality and genuinely helpful setup advice. The CG and control-surface tuning made a noticeable difference in flight feel." },
  { name:"M. Laurent", company:"FPV Racing Team (demo)", project:"FPV Aircraft", rating:4, quote:"Fast turnaround on our race quad rebuild after a crash, with a tuning pass that improved handling beyond the original setup." },
  { name:"S. Nakamura", company:"Agricultural Services Client (demo)", project:"Mapping Drone Platform", rating:5, quote:"Professional from consultation through flight testing. Documentation provided made handover to our field team straightforward." },
  { name:"J. Alvarez", company:"Hobbyist Client (demo)", project:"RC Helicopter Build", rating:5, quote:"The mechanical setup and blade balancing work resulted in the smoothest hover I've experienced from any of my builds." }
];

/* ---------------- FAQ ---------------- */
ABD.faq = [
  { q:"Do you build custom RC aircraft?", a:"Yes. We design and build custom fixed-wing RC aircraft from concept through flight testing, covering airframe design, power-system selection and full assembly." },
  { q:"Do you repair crashed aircraft?", a:"Yes, we handle crash damage repair including wing, fuselage and landing-gear repair, electronics replacement and full refurbishment where needed." },
  { q:"Can you design an aircraft from scratch?", a:"Yes. Our engineering service covers the complete lifecycle — concept development, CAD design, structural and aerodynamic design, prototyping and flight testing." },
  { q:"Do you provide UAV training?", a:"Yes, our UAV Operator Course covers fundamentals, multirotor and fixed-wing operations, mission planning, ground-control systems and flight safety." },
  { q:"Do you work with FPV aircraft?", a:"Yes, we build and tune FPV racing, freestyle and long-range platforms, and offer dedicated FPV electronics setup and pilot training." },
  { q:"Can you manufacture custom parts?", a:"Yes. Our manufacturing service covers 3D printing, CNC machining, laser cutting and composite fabrication for custom brackets, mounts and structural components." },
  { q:"Can you install autopilots?", a:"Yes, we install, configure and flight-test autopilot systems as part of our electronics and avionics services." },
  { q:"Can you help select motors and propellers?", a:"Yes, our consultancy service includes motor, propeller and power-system matching based on your airframe and mission profile." },
  { q:"Do you provide flight testing?", a:"Yes, we follow a structured flight-test protocol covering pre-flight inspection, CG verification, maiden flight and post-flight data analysis." },
  { q:"Can customers send their own designs?", a:"Yes, you can upload CAD files, drawings and reference images through our Request a Quote form and our engineers will review your design." },
  { q:"Do you offer international services?", a:"We work with clients internationally on design, consultancy and parts sourcing; on-site services are subject to location and scheduling. Contact us to confirm availability for your region." }
];

/* ---------------- Team (clearly demo/placeholder) ---------------- */
ABD.team = [
  { name:"[Name Placeholder]", role:"Chief RC Engineer", years:"Demo profile", exp:"Aircraft design & structural engineering" },
  { name:"[Name Placeholder]", role:"UAV Systems Engineer", years:"Demo profile", exp:"Autopilot integration & mission systems" },
  { name:"[Name Placeholder]", role:"Aerodynamics Specialist", years:"Demo profile", exp:"Airframe & propulsion optimization" },
  { name:"[Name Placeholder]", role:"FPV Specialist", years:"Demo profile", exp:"FPV builds & pilot training" },
  { name:"[Name Placeholder]", role:"Avionics Engineer", years:"Demo profile", exp:"Flight electronics & radio systems" },
  { name:"[Name Placeholder]", role:"Aircraft Technician", years:"Demo profile", exp:"Assembly, repair & maintenance" },
  { name:"[Name Placeholder]", role:"Flight Test Engineer", years:"Demo profile", exp:"Flight-test protocol & data analysis" },
  { name:"[Name Placeholder]", role:"Training Instructor", years:"Demo profile", exp:"RC & UAV pilot training programs" },
  { name:"[Name Placeholder]", role:"Customer Support Agent", years:"Demo profile", exp:"Quotes, bookings & client support" }
];

/* ---------------- Gallery (structured for easy photo replacement) ---------------- */
ABD.gallery = [
  { cat:"aircraft", title:"Custom Fixed-Wing Build", icon:"plane", h:340 },
  { cat:"workshop", title:"Composite Layup Bench", icon:"engineering", h:260 },
  { cat:"uav", title:"Mapping UAV Pre-Flight", icon:"drone", h:300 },
  { cat:"electronics", title:"Flight Controller Bench Setup", icon:"electronics", h:230 },
  { cat:"manufacturing", title:"CNC Bracket Production", icon:"manufacturing", h:310 },
  { cat:"flight-testing", title:"Maiden Flight — Range Test", icon:"test", h:270 },
  { cat:"uav", title:"VTOL Transition Test", icon:"drone", h:250 },
  { cat:"fpv", title:"FPV Freestyle Build", icon:"fpv", h:320 },
  { cat:"training", title:"Simulator Training Session", icon:"graduation", h:240 },
  { cat:"rc-cars", title:"Off-Road Crawler Tuning", icon:"car", h:280 },
  { cat:"helicopters", title:"Blade Balancing Procedure", icon:"heli", h:260 },
  { cat:"workshop", title:"Engineering Design Review", icon:"engineering", h:300 },
  { cat:"aircraft", title:"Delta-Wing Speed Build", icon:"plane", h:250 },
  { cat:"electronics", title:"Wiring Harness Assembly", icon:"electronics", h:320 },
  { cat:"uav", title:"Payload Gimbal Integration", icon:"drone", h:280 },
  { cat:"manufacturing", title:"Carbon Fiber Panel Cutting", icon:"manufacturing", h:230 },
  { cat:"flight-testing", title:"Telemetry Data Review", icon:"test", h:300 },
  { cat:"fpv", title:"Long-Range FPV Field Test", icon:"fpv", h:260 },
  { cat:"training", title:"Beginner Ground School", icon:"graduation", h:270 },
  { cat:"rc-cars", title:"Suspension Geometry Setup", icon:"car", h:250 }
];

window.ABD = ABD;
