// BMAN121 (Semester Test 3) Prescribed Question Bank
// Curriculum: Study Unit 7, Study Unit 8, Study Unit 9
// Total Verified Questions: 120 (40 SU7 + 40 SU8 + 40 SU9)
const BMAN121_QUESTIONS = [
  {
    "id": "SU7-01",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Operations Transformation Model",
    "question": "In the operations transformation model, an automobile assembly plant in Rosslyn, Pretoria converts steel sheets, electronic components, and glass into completed motor vehicles using robotic welding stations and skilled assembly technicians. In this operational system, which of the following is classified as a 'transforming resource'?",
    "options": [
      "The sheet steel and automotive glass being fitted to the chassis",
      "The robotic welding stations and skilled assembly technicians",
      "The production schedules and quality inspection blueprints",
      "The completed passenger motor vehicles delivered to auto dealerships"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Transforming resources are the operational assets and human personnel that perform the conversion on inputs, specifically facilities and human labour.",
      "whyCorrect": "Option B is correct because the operations management model divides inputs into two distinct groups: transformed resources (materials, information, and customers converted in the process) and transforming resources (facilities, plant, machinery, and labour that perform the transformation). Robotic welding stations (machinery/facilities) and technicians (human labour) act upon the inputs to transform them.",
      "whyDistractors": [
        "Option A is incorrect because sheet steel and automotive glass are raw materials that undergo physical change, making them 'transformed resources' (materials), not transforming resources.",
        "Option C is incorrect because production schedules and blueprints are informational inputs used to direct work, classifying them as transformed resources (information).",
        "Option D is incorrect because completed vehicles are the 'outputs' resulting from the operational transformation process, not input resources."
      ],
      "reference": "BMAN121 SU7: Operations Management — The Transformation Model (Inputs, Process, Outputs)"
    }
  },
  {
    "id": "SU7-02",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Transformed Resources",
    "question": "Which of the following operations is an example where 'customers' themselves serve as the primary transformed resource?",
    "options": [
      "A Sasol petroleum refinery producing jet fuel and diesel from coal and crude oil",
      "A Mediclinic hospital emergency department treating patients with acute trauma",
      "An automated packaging warehouse preparing parcels for Takealot online shoppers",
      "A Tiger Brands milling facility producing Maize meal from raw grain harvests"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "In customer-processing operations (like healthcare, passenger transport, or hair salons), customers are transformed physically, physiologically, or psychologically.",
      "whyCorrect": "Option B is correct because in a hospital, the patients themselves enter the operational system, receive medical treatment and physiological transformation, and exit healthier. In operations management, customers are the transformed resource when they are the direct object of the transformation process.",
      "whyDistractors": [
        "Option A is incorrect because an oil refinery is a material-processing operation where crude oil and coal (physical materials) are transformed into petroleum products.",
        "Option C is incorrect because an e-commerce fulfillment warehouse processes materials (consumer goods, parcels, packaging) and informational orders, not customers themselves.",
        "Option D is incorrect because a grain mill is an agricultural materials-processing operation transforming grain into maize meal."
      ],
      "reference": "BMAN121 SU7: Operations Management — Categories of Transformed Resources (Materials, Information, Customers)"
    }
  },
  {
    "id": "SU7-03",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Goods vs Services Operations",
    "question": "Which of the following represents a fundamental operational distinction between pure goods-producing operations and pure service operations?",
    "options": [
      "Services produce tangible outputs that can be held in inventory during low-demand periods",
      "Goods-producing operations typically feature high customer contact during the manufacturing process",
      "Services feature intangible outputs, simultaneous production and consumption, and cannot be inventoried",
      "Goods-producing operations exhibit lower uniformity and higher variability in their final output"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Services are intangible, perishable, produced and consumed simultaneously, and cannot be stored as finished inventory.",
      "whyCorrect": "Option C is correct because service operations are characterised by intangibility, simultaneous production and consumption (inseparability), perishability (capacity cannot be inventoried for future peak demand), and high customer contact.",
      "whyDistractors": [
        "Option A is incorrect because services produce intangible outputs and cannot be inventoried or stored on a shelf.",
        "Option B is incorrect because goods manufacturing operations typically have low direct customer contact, with production separated from the consumer by time and physical space.",
        "Option D is incorrect because goods manufacturing generally achieves high uniformity and low output variability due to standardized machinery and quality control standards."
      ],
      "reference": "BMAN121 SU7: Operations Management — Differences Between Goods and Service Operations"
    }
  },
  {
    "id": "SU7-04",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Productivity Measurement",
    "question": "A furniture workshop in Knysna employs 5 carpenters working 8 hours per day each (40 total labour hours per day). The workshop produces 120 handcrafted dining chairs in a single day. What is the labour productivity of the workshop?",
    "options": [
      "0.33 chairs per labour hour",
      "3.00 chairs per labour hour",
      "24.00 chairs per carpenter per week",
      "15.00 chairs per labour hour"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Productivity is calculated as the ratio of Total Output to Total Input (Productivity = Output / Input).",
      "whyCorrect": "Option B is correct. Labour Productivity = Total Units of Output / Total Labour Hours Input = 120 chairs / (5 carpenters × 8 hours) = 120 / 40 = 3.00 chairs per labour hour.",
      "whyDistractors": [
        "Option A is incorrect because 0.33 is the inverse calculation (40 hours / 120 chairs), which indicates hours per chair rather than chairs per hour.",
        "Option C is incorrect because 120 / 5 = 24 chairs per carpenter per day, not per week, and fails to state productivity per standard input hour.",
        "Option D is incorrect because 15.00 is a calculation error resulting from dividing 120 by 8 hours without accounting for all 5 carpenters."
      ],
      "reference": "BMAN121 SU7: Operations Management — Productivity Formula and Metrics"
    }
  },
  {
    "id": "SU7-05",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Efficiency vs Effectiveness",
    "question": "In operations management, how is 'efficiency' strictly distinguished from 'effectiveness'?",
    "options": [
      "Efficiency means 'doing the right things' to achieve organisational goals, whereas effectiveness means 'doing things right' with minimal waste",
      "Efficiency refers to minimising resource inputs for a given output ('doing things right'), while effectiveness refers to achieving desired goals and targets ('doing the right things')",
      "Efficiency is solely measured by customer satisfaction, whereas effectiveness is solely measured by machine utilisation",
      "Efficiency applies only to service organizations, whereas effectiveness applies exclusively to physical manufacturing"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Efficiency focuses on the input-output ratio (doing things right with minimal waste), while effectiveness focuses on achieving goals and fulfilling objectives (doing the right things).",
      "whyCorrect": "Option B is correct. In classical management and operations theory, efficiency relates to means—minimising resource consumption, costs, and waste while converting inputs into outputs ('doing things right'). Effectiveness relates to ends—selecting the correct goals and successfully attaining organizational and customer objectives ('doing the right things').",
      "whyDistractors": [
        "Option A is incorrect because it inverts the definitions: 'doing the right things' is effectiveness, while 'doing things right' is efficiency.",
        "Option C is incorrect because customer satisfaction reflects effectiveness (meeting market expectations), while machine utilisation reflects efficiency.",
        "Option D is incorrect because both efficiency and effectiveness are universal operational metrics applicable to all goods-producing and service-rendering organizations."
      ],
      "reference": "BMAN121 SU7: Operations Management — Efficiency, Effectiveness, and Operational Performance"
    }
  },
  {
    "id": "SU7-06",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Operations Performance Objectives",
    "question": "A courier company guarantees delivery of critical business documents across Gauteng within 90 minutes of order placement. Which core operational performance objective is this company prioritizing as its primary competitive advantage?",
    "options": [
      "Speed",
      "Flexibility",
      "Cost reduction",
      "Economies of scale"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "The five core operations performance objectives are Quality, Speed, Dependability, Flexibility, and Cost. Guarantees regarding elapsed delivery time directly target the Speed objective.",
      "whyCorrect": "Option A is correct. The 'Speed' performance objective refers to minimizing elapsed time between customer request and delivery of the product or service. A 90-minute guaranteed delivery directly focuses on operational velocity as a competitive differentiator.",
      "whyDistractors": [
        "Option B is incorrect because 'Flexibility' refers to the ability to modify what the operation does (product/service mix), how much it produces (volume), or when it delivers (timing variations).",
        "Option C is incorrect because express 90-minute courier services incur premium logistical costs rather than prioritizing low-cost leadership.",
        "Option D is incorrect because economies of scale refers to lowering unit costs through massive production volumes, not rapid individual express delivery."
      ],
      "reference": "BMAN121 SU7: Operations Management — The Five Operational Performance Objectives"
    }
  },
  {
    "id": "SU7-07",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Manufacturing Process Types",
    "question": "The construction of the Kusile and Medupi coal-fired mega-power stations by Eskom involves highly customized, large-scale, one-off engineering works where work teams, specialized heavy equipment, and building materials are brought to a single permanent location over multiple years. What type of manufacturing/operations process is this?",
    "options": [
      "Batch process",
      "Mass production process",
      "Project process",
      "Continuous flow process"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Project processes deal with discrete, highly customised, low-volume, high-variety products with long completion times and dedicated resource mobilization.",
      "whyCorrect": "Option C is correct. Project processes are characterised by high product variety, extremely low volume (often a single unique entity), long production cycles, high complexity, and resources dedicated to that specific project site (e.g., civil infrastructure, ship building, skyscraper construction).",
      "whyDistractors": [
        "Option A is incorrect because batch processes produce medium volumes of goods in discrete batches of identical units (e.g. bakeries, clothing factories).",
        "Option B is incorrect because mass production processes produce high volumes of identical, standardized items along an assembly line (e.g. consumer electronics, automobiles).",
        "Option D is incorrect because continuous flow processes operate 24/7 without interruption for non-discrete, fluid materials (e.g. oil refining, chemical plants)."
      ],
      "reference": "BMAN121 SU7: Operations Management — Manufacturing Process Types (Project, Jobbing, Batch, Mass, Continuous)"
    }
  },
  {
    "id": "SU7-08",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Manufacturing Process Types",
    "question": "A bespoke dressmaker in Rosebank designs and sews unique, custom wedding gowns tailored to each bride's exact measurements and individual styling preferences. What manufacturing process type does this represent?",
    "options": [
      "Continuous process",
      "Mass production",
      "Jobbing (job-lot) process",
      "Standardised batch process"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Jobbing or job-lot processes manufacture small quantities or one-off items tailored to specific customer specifications with high skill and high variety.",
      "whyCorrect": "Option C is correct. In a jobbing (job-lot) process, products are made individually to customer specifications, involving high variety, low volume, general-purpose equipment, and highly skilled craftsmen (e.g., bespoke tailoring, custom furniture makers, prototype machine shops).",
      "whyDistractors": [
        "Option A is incorrect because continuous processes produce massive volumes of homogeneous, non-discrete fluids or chemicals with zero variety.",
        "Option B is incorrect because mass production produces thousands of identical garments using specialized assembly machinery with minimal variety.",
        "Option D is incorrect because standardized batch manufacturing produces runs of dozens or hundreds of identical garments at a time rather than individual custom orders."
      ],
      "reference": "BMAN121 SU7: Operations Management — Manufacturing Process Types: Jobbing vs Other Processes"
    }
  },
  {
    "id": "SU7-09",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Manufacturing Process Types",
    "question": "An Albany commercial bakery produces 2,000 loaves of white bread, pauses to clean and reconfigure the mixing troughs and slicing machines, and then produces 1,500 loaves of brown wholewheat bread. Which manufacturing process is being used?",
    "options": [
      "Jobbing process",
      "Batch process",
      "Project process",
      "Continuous process"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Batch processes produce discrete groups of identical products through an operational sequence before resetting machinery to produce another distinct group.",
      "whyCorrect": "Option B is correct. In batch production, a set quantity of identical items moves together through each production stage before the equipment is switched over or re-tooled to produce another variant (e.g., batches of bread, paint shades, pharmaceuticals, canned foods).",
      "whyDistractors": [
        "Option A is incorrect because jobbing processes create one-off unique items to custom customer orders rather than repeated batches of 2,000 standard loaves.",
        "Option C is incorrect because project processes involve complex, long-term single infrastructure or construction deliverables.",
        "Option D is incorrect because continuous processes operate without stopping for changeovers or distinct product runs (e.g., continuous oil refining)."
      ],
      "reference": "BMAN121 SU7: Operations Management — Batch Production in Food and Manufacturing Industries"
    }
  },
  {
    "id": "SU7-10",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Manufacturing Process Types",
    "question": "The Sasol Secunda synthetic fuel plant converts coal and natural gas into liquid synthetic fuels and chemicals via a non-stop, highly capital-intensive, automated flow operating 24 hours a day, 365 days a year. This operation is an example of a:",
    "options": [
      "Mass production process",
      "Continuous flow process",
      "Jobbing process",
      "Cellular batch process"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Continuous flow processes handle non-discrete, liquid, gas, or bulk materials through dedicated pipelines and automated machinery in an uninterrupted, high-volume flow.",
      "whyCorrect": "Option B is correct. Continuous flow processes operate around the clock with extremely high capital intensity, automated pipelines, zero variety, and non-discrete products (fuels, chemicals, electricity, steel melting) where shutting down the process is technically difficult and expensive.",
      "whyDistractors": [
        "Option A is incorrect because mass production processes manufacture high volumes of discrete, separable units (such as cars, toasters, or bottled drinks) rather than continuous fluid flows.",
        "Option C is incorrect because jobbing processes handle one-off, low-volume, high-variety custom jobs.",
        "Option D is incorrect because cellular batch processes group work stations into cells for discrete part families rather than continuous pipeline refining."
      ],
      "reference": "BMAN121 SU7: Operations Management — Continuous Flow Processes"
    }
  },
  {
    "id": "SU7-11",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Volume-Variety Continuum",
    "question": "According to the product-process matrix in operations management, how do production volume and product variety typically relate to one another?",
    "options": [
      "High product variety is always associated with high production volume",
      "As product volume increases, product variety typically decreases and process flow becomes more standardized",
      "Volume and variety increase simultaneously in project and jobbing processes",
      "Continuous processes have the highest product variety and the lowest output volume"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The Volume-Variety continuum establishes that high volume operations are standardized with low variety, whereas high variety operations produce low volumes.",
      "whyCorrect": "Option B is correct. The fundamental trade-off in the product-process matrix demonstrates an inverse relationship: operations designed for high volume (mass and continuous processes) require standardization and low product variety to achieve low unit costs, while operations with high variety (project and jobbing) inherently produce low volume.",
      "whyDistractors": [
        "Option A is incorrect because high variety disrupts standardization and prevents achieving mass volume.",
        "Option C is incorrect because project and jobbing processes have very low volume and very high variety.",
        "Option D is incorrect because continuous processes produce the highest volumes with the lowest variety (often single commodity outputs)."
      ],
      "reference": "BMAN121 SU7: Operations Management — Volume vs Variety in Operations Systems"
    }
  },
  {
    "id": "SU7-12",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Service Operations Types",
    "question": "A top-tier commercial law firm in Sandton provides corporate restructuring, bespoke antitrust litigation advice, and tailored mergers-and-acquisitions counsel to multinational corporations. In service operations classification, this firm is an example of:",
    "options": [
      "A mass service",
      "A professional service",
      "A service shop",
      "A back-office processing factory"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Professional services feature high customer contact, high customisation, high advisor skill, and significant time spent with each client.",
      "whyCorrect": "Option B is correct. Professional services are defined by high levels of customisation, high customer contact, client-specific diagnosis, and highly qualified professional personnel (e.g., management consultants, corporate attorneys, specialized medical surgeons, chartered accountants).",
      "whyDistractors": [
        "Option A is incorrect because mass services (e.g. railway ticketing, retail banking call centres) feature low customisation, low contact time, and high transaction volume.",
        "Option C is incorrect because service shops (e.g. retail bank branches, standard restaurants) balance front-office customer contact with back-office standardized processing.",
        "Option D is incorrect because back-office processing factories deal with standardized, repetitive clerical tasks with zero direct customer interaction."
      ],
      "reference": "BMAN121 SU7: Operations Management — Typology of Service Operations: Professional Services"
    }
  },
  {
    "id": "SU7-13",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Service Operations Types",
    "question": "An inbound airline call centre handles 10,000 standard seat reservations and baggage fee payments per day using pre-scripted agent prompts and automated voice response menus. This operation is classified as:",
    "options": [
      "A professional service",
      "A mass service",
      "A project service",
      "A jobbing service"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Mass services are standardized, high-volume operations with low customisation and brief contact time per transaction.",
      "whyCorrect": "Option B is correct. Mass services process large numbers of customer transactions through standardized procedures, automated systems, division of labour, and low levels of customisation (e.g., airport check-in, mass call centres, public transit systems).",
      "whyDistractors": [
        "Option A is incorrect because professional services require individualized advice, high professional discretion, and low volume.",
        "Option C is incorrect because 'project service' is not a standard service operations category in the BMAN121 curriculum.",
        "Option D is incorrect because 'jobbing' is a manufacturing process category, not a service category."
      ],
      "reference": "BMAN121 SU7: Operations Management — Mass Services Classification"
    }
  },
  {
    "id": "SU7-14",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Service Operations Types",
    "question": "A Standard Bank retail branch or a Spur Steak Ranches restaurant combines standardized front-of-house customer service with structured back-office food preparation or administrative procedures. This intermediate service type is termed:",
    "options": [
      "A professional service",
      "A continuous service",
      "A service shop",
      "A mass transactional line"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Service shops occupy the middle ground between professional services and mass services, featuring moderate customer contact and moderate customisation.",
      "whyCorrect": "Option C is correct. Service shops fall between professional services and mass services. They exhibit moderate levels of customer contact, moderate customisation, and a balanced mix of front-office customer-facing interaction and back-office standard operations (e.g. retail bank branches, restaurants, auto repair shops).",
      "whyDistractors": [
        "Option A is incorrect because professional services have very high customisation and client-specific professional judgment.",
        "Option B is incorrect because 'continuous service' is not a recognized operations classification term.",
        "Option D is incorrect because mass transactional lines describe pure mass services without intermediate customisation."
      ],
      "reference": "BMAN121 SU7: Operations Management — Service Shops Typology"
    }
  },
  {
    "id": "SU7-15",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Plant Layout Types",
    "question": "In the construction of a large commercial container ship at Durban harbour, the hull remains stationary on the dry dock while cranes, welding equipment, steel plates, and construction crews move to and around the ship. What layout type is this?",
    "options": [
      "Process (functional) layout",
      "Product (line) layout",
      "Fixed-position layout",
      "Cellular layout"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "In a fixed-position layout, the product is stationary due to its bulk, fragility, or size, and transforming resources move to the product.",
      "whyCorrect": "Option C is correct. In a fixed-position layout, the subject of the transformation (the product) cannot easily be moved because it is too large, heavy, or delicate (e.g., ships, buildings, bridges, open-heart surgery patients). Transforming resources (workers, machines, materials) must travel to the stationary product.",
      "whyDistractors": [
        "Option A is incorrect because in a process layout, similar machines are grouped into functional departments and the work-in-progress moves from department to department.",
        "Option B is incorrect because in a product layout, machinery is arranged sequentially in a line and the product moves down the assembly line.",
        "Option D is incorrect because a cellular layout groups diverse machines into dedicated cells to produce part families."
      ],
      "reference": "BMAN121 SU7: Operations Management — Fixed-Position Operations Layout"
    }
  },
  {
    "id": "SU7-16",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Plant Layout Types",
    "question": "A hospital groups its operations into specialized departments: Radiology, Cardiology, Pathology, and Orthopaedics. Patients move from one department to another depending on their specific diagnostic needs. What type of operational layout does this represent?",
    "options": [
      "Product (assembly line) layout",
      "Process (functional) layout",
      "Fixed-position layout",
      "Continuous pipe layout"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A process (functional) layout groups similar resources, machines, or operational functions together in dedicated departments.",
      "whyCorrect": "Option B is correct. A process (functional) layout arranges facilities by grouping similar processes, equipment, and expertise together (e.g., all X-ray machines in Radiology, all drilling machines in one workshop bay). Different products or customers follow unique routing paths through the required departments.",
      "whyDistractors": [
        "Option A is incorrect because a product layout arranges machines strictly in the sequence of production operations for a single uniform product flow.",
        "Option C is incorrect because in a fixed-position layout, the patient or product would stay in one room while all specialists and diagnostic machines came to them.",
        "Option D is incorrect because continuous pipe layout refers to non-discrete pipeline systems in chemical plants, not departmental layouts."
      ],
      "reference": "BMAN121 SU7: Operations Management — Process (Functional) Layout"
    }
  },
  {
    "id": "SU7-17",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Plant Layout Types",
    "question": "A Coca-Cola bottling plant in Midrand arranges bottle washing, filling, capping, labelling, and boxing machinery in a strict linear sequence along an automated conveyor line. What type of operational layout is this?",
    "options": [
      "Process layout",
      "Product (line) layout",
      "Fixed-position layout",
      "Job-shop layout"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A product (line) layout arranges transforming resources sequentially to mirror the exact progressive steps required to produce a standardized, high-volume item.",
      "whyCorrect": "Option B is correct. In a product (line) layout, machinery and workstations are located along the path that the product follows as it is assembled or processed (e.g., car assembly lines, beverage bottling lines). It is optimal for standardized, high-volume production with low unit costs.",
      "whyDistractors": [
        "Option A is incorrect because a process layout groups machines by function rather than sequential processing order.",
        "Option C is incorrect because in a fixed-position layout the product does not travel on an automated conveyor line.",
        "Option D is incorrect because a job-shop layout is synonymous with a process layout suited for custom, low-volume batches."
      ],
      "reference": "BMAN121 SU7: Operations Management — Product (Line) Layout"
    }
  },
  {
    "id": "SU7-18",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Plant Layout Types",
    "question": "An engineering manufacturer reorganises its factory floor by grouping disparate machines (lathes, millers, and drills) into compact U-shaped workstations, each dedicated to producing a specific 'family' of automotive drive shafts. This is an example of:",
    "options": [
      "A cellular layout",
      "A fixed-position layout",
      "A pure functional layout",
      "A project layout"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "A cellular layout combines the efficiency of a product layout with the flexibility of a process layout by grouping machines into dedicated cells for product families.",
      "whyCorrect": "Option A is correct. A cellular layout brings together different machines and personnel into self-contained work 'cells' (often U-shaped to facilitate communication and multi-machine operation) dedicated to manufacturing a family of parts with similar processing requirements.",
      "whyDistractors": [
        "Option B is incorrect because in a fixed-position layout the item is stationary and machines are moved to it.",
        "Option C is incorrect because a pure functional layout keeps all lathes in one room, all drills in another, causing high travel distance and work-in-progress inventory.",
        "Option D is incorrect because project layouts deal with unique, stationary large-scale outputs."
      ],
      "reference": "BMAN121 SU7: Operations Management — Cellular Layout Principles and Benefits"
    }
  },
  {
    "id": "SU7-19",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Demand Forecasting",
    "question": "Which of the following operations forecasting methods is correctly classified as a 'qualitative' forecasting technique?",
    "options": [
      "Exponential smoothing",
      "The Delphi method using a panel of industry experts",
      "Linear regression analysis",
      "Three-month moving averages"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Qualitative forecasting relies on managerial judgment, expert opinions, and subjective consensus rather than mathematical analysis of historical time-series data.",
      "whyCorrect": "Option B is correct. Qualitative forecasting techniques rely on human judgment, expert consensus, intuition, and consumer surveys rather than purely numerical data. The Delphi method gathers independent forecasts from a panel of experts through iterative questionnaires until consensus emerges.",
      "whyDistractors": [
        "Option A is incorrect because exponential smoothing is a quantitative time-series forecasting technique using weighted historical values.",
        "Option C is incorrect because linear regression is a quantitative causal forecasting technique calculating mathematical relationships between variables.",
        "Option D is incorrect because moving averages is a quantitative mathematical technique averaging past numerical sales data."
      ],
      "reference": "BMAN121 SU7: Operations Management — Qualitative vs Quantitative Forecasting"
    }
  },
  {
    "id": "SU7-20",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Capacity Planning Strategies",
    "question": "A solar panel manufacturer builds factory capacity that exceeds current market demand in anticipation of future market growth, ensuring it never loses market share due to stockouts. This capacity planning strategy is known as a:",
    "options": [
      "Capacity lag strategy",
      "Capacity lead strategy",
      "Tracking / match strategy",
      "Contingency shrinkage strategy"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A capacity lead strategy adds production capacity ahead of expected demand to capture demand spikes and maintain high customer service levels.",
      "whyCorrect": "Option B is correct. Under a 'capacity lead' strategy, the firm proactively expands operating capacity prior to the arrival of projected demand. This cushions against supply shortages and deters potential competitors, though it risks higher initial idle capacity costs.",
      "whyDistractors": [
        "Option A is incorrect because a capacity lag strategy waits until actual demand has materialized before adding capacity (minimising idle capital risk but risking lost sales).",
        "Option C is incorrect because a match/tracking strategy adjusts capacity incrementally in small steps to follow demand closely.",
        "Option D is incorrect because 'contingency shrinkage' is not an operations management capacity strategy."
      ],
      "reference": "BMAN121 SU7: Operations Management — Capacity Planning: Lead, Lag, and Match Strategies"
    }
  },
  {
    "id": "SU7-21",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Reconciling Supply and Demand",
    "question": "A hotel in Umhlanga faces intense demand during December school holidays and very low demand in winter. To reconcile supply and demand without changing physical room capacity, management introduces off-peak discounts, conference packages in winter, and premium holiday tariffs. This approach is an example of:",
    "options": [
      "A level capacity strategy",
      "A chase demand strategy",
      "Managing demand (demand management)",
      "A subcontracting capacity strategy"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Demand management uses marketing mechanisms (pricing, promotions, product bundling, reservations) to smooth out fluctuations in demand to match fixed operational capacity.",
      "whyCorrect": "Option C is correct. Rather than trying to alter physical operations (which is impossible for fixed hotel rooms), 'managing demand' uses marketing and pricing levers (off-peak pricing, promotional packages, seasonal differentiation) to shift consumer demand away from peak periods into quiet troughs.",
      "whyDistractors": [
        "Option A is incorrect because a level capacity strategy maintains constant production output regardless of demand, absorbing differences through inventory (which services cannot do).",
        "Option B is incorrect because a chase demand strategy alters operating capacity (e.g. hiring/firing staff, changing shift hours) to match demand swings exactly.",
        "Option D is incorrect because subcontracting involves hiring external firms to handle excess work."
      ],
      "reference": "BMAN121 SU7: Operations Management — Reconciling Supply and Demand (Level, Chase, and Demand Management)"
    }
  },
  {
    "id": "SU7-22",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Project Scheduling Tools",
    "question": "In project planning and scheduling, what is the primary structural characteristic of a 'Gantt Chart'?",
    "options": [
      "A network diagram illustrating circular nodes connected by dependency arrows with zero slack",
      "A horizontal bar chart showing project activities plotted against a timeline, displaying start times, durations, and completion status",
      "A statistical control chart displaying upper and lower tolerance limits for manufacturing defects",
      "A financial statement tracking project cash expenditures against monthly budget allocations"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A Gantt chart is a graphical scheduling tool displaying project tasks as horizontal bars against a calendar timeline.",
      "whyCorrect": "Option B is correct. Developed by Henry Gantt, a Gantt chart plots project tasks and milestones along a time axis as horizontal bars. The length of each bar represents task duration, and their positioning indicates planned start and finish dates and concurrent operational activities.",
      "whyDistractors": [
        "Option A is incorrect because network diagrams with nodes, arrows, and slack calculations describe Critical Path Method (CPM) and PERT networks, not Gantt charts.",
        "Option C is incorrect because statistical control charts are quality management tools (Shewhart charts), not project schedule charts.",
        "Option D is incorrect because financial cash statements are accounting budgets, not operational scheduling tools."
      ],
      "reference": "BMAN121 SU7: Operations Management — Project Scheduling: Gantt Charts"
    }
  },
  {
    "id": "SU7-23",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Critical Path Method (CPM)",
    "question": "In network scheduling (CPM / PERT), what defines the 'Critical Path' of a project?",
    "options": [
      "The sequence of activities with the shortest duration and maximum available slack time",
      "The longest continuous sequence of dependent activities through the network, determining the minimum total time required to complete the project",
      "The path containing only those tasks that carry the highest financial cost",
      "The route that bypasses all non-essential administrative dependencies"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The critical path is the longest sequence of dependent activities in a project network and has zero slack time; any delay on this path delays the entire project.",
      "whyCorrect": "Option B is correct. In network analysis, the critical path is the longest time path through the network of dependent tasks. It represents the shortest possible time in which the entire project can be completed. Activities on this path have zero total float (slack).",
      "whyDistractors": [
        "Option A is incorrect because the critical path is the longest path, not the shortest, and activities on the critical path have zero slack, not maximum slack.",
        "Option C is incorrect because the critical path is calculated based on time/duration, not monetary task expense.",
        "Option D is incorrect because the critical path cannot bypass essential dependencies; it reflects all interdependent predecessor tasks."
      ],
      "reference": "BMAN121 SU7: Operations Management — Network Scheduling and Critical Path Analysis"
    }
  },
  {
    "id": "SU7-24",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Independent vs Dependent Demand",
    "question": "A bicycle manufacturer produces 500 completed mountain bikes. Each bike requires exactly two rubber tires and one chain. In operations inventory terminology, demand for the finished mountain bikes is ________, whereas demand for the tires and chains is ________.",
    "options": [
      "Dependent; Independent",
      "Independent; Dependent",
      "Continuous; Intermittent",
      "Deterministic; Stochastic"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Independent demand is driven by external market conditions, while dependent demand is directly derived from the production schedule of parent items.",
      "whyCorrect": "Option B is correct. Demand for finished mountain bikes comes from external consumers in the marketplace and cannot be calculated directly from internal schedules (independent demand). Demand for component parts (tires, chains) depends directly on how many bikes are scheduled for assembly (dependent demand, calculated via Bill of Materials in MRP).",
      "whyDistractors": [
        "Option A is incorrect because it reverses the relationship: end products are independent, while subcomponents are dependent.",
        "Option C is incorrect because continuous and intermittent describe production process flows, not demand dependency.",
        "Option D is incorrect because deterministic and stochastic describe predictability, not internal dependency on the master production schedule."
      ],
      "reference": "BMAN121 SU7: Operations Management — Inventory Demand Classification (Independent vs Dependent Demand)"
    }
  },
  {
    "id": "SU7-25",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Inventory Holding vs Ordering Costs",
    "question": "In basic inventory management, what fundamental trade-off does the Economic Order Quantity (EOQ) model seek to balance?",
    "options": [
      "The trade-off between customer marketing costs and shipping freight tariffs",
      "The trade-off between annual inventory holding (carrying) costs and annual ordering (setup) costs",
      "The trade-off between employee overtime wages and raw material purchase discounts",
      "The trade-off between machine maintenance expenses and finished goods quality inspection"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "EOQ identifies the order size that minimizes the sum of inventory carrying costs and order replenishment costs.",
      "whyCorrect": "Option B is correct. As order quantity ($Q$) increases, fewer orders are placed per year, reducing annual ordering costs. However, average inventory levels rise, increasing annual holding costs (storage, insurance, obsolescence, interest). The EOQ formula finds the exact point where these two opposing cost curves intersect to minimize total inventory costs.",
      "whyDistractors": [
        "Option A is incorrect because marketing advertising and shipping tariffs are not the dual opposing cost variables modeled in the standard EOQ formula.",
        "Option C is incorrect because overtime wages and material price breaks are operational labor and purchasing terms, not the baseline EOQ holding vs ordering balance.",
        "Option D is incorrect because maintenance and quality inspection costs relate to TQM and plant maintenance, not order replenishment size."
      ],
      "reference": "BMAN121 SU7: Operations Management — The Economic Order Quantity (EOQ) Model"
    }
  },
  {
    "id": "SU7-26",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "EOQ Formula Application",
    "question": "A retail distributor has an annual demand of $D = 10,000$ units, an ordering cost of $S = R50$ per order, and an annual holding cost of $H = R4$ per unit per year. Using the EOQ formula $EOQ = \\sqrt{\\frac{2DS}{H}}$, what is the optimal economic order quantity?",
    "options": [
      "250 units",
      "500 units",
      "1,000 units",
      "2,500 units"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The EOQ formula calculates $EOQ = \\sqrt{(2 \\times D \\times S) / H}$.",
      "whyCorrect": "Option B is correct. Calculation: $EOQ = \\sqrt{\\frac{2 \\times 10,000 \\times 50}{4}} = \\sqrt{\\frac{1,000,000}{4}} = \\sqrt{250,000} = 500$ units.",
      "whyDistractors": [
        "Option A is incorrect because 250 is the result before taking the square root of 250,000 / 1,000 or forgetting the factor of 2 in the numerator.",
        "Option C is incorrect because 1,000 units results from forgetting to divide by the holding cost of R4 before taking the square root: $\\sqrt{1,000,000} = 1,000$.",
        "Option D is incorrect because 2,500 results from arithmetic errors in multiplying and dividing the variables."
      ],
      "reference": "BMAN121 SU7: Operations Management — Economic Order Quantity Mathematical Calculation"
    }
  },
  {
    "id": "SU7-27",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Just-in-Time (JIT) / Lean Philosophy",
    "question": "Which of the following operational practices is a core pillar of the Just-in-Time (JIT) / Lean production philosophy developed by Toyota?",
    "options": [
      "Maintaining large buffer inventories of raw materials to protect against any supplier failure",
      "The systematic elimination of all forms of waste (muda) and producing only what is needed, when needed, using a pull system",
      "Running large production batch sizes to maximize individual machine economies of scale",
      "Decentralizing supplier relationships by purchasing from dozens of competing spot-market vendors"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "JIT / Lean aims to eliminate all waste (muda), utilize pull production (Kanban), minimize inventory, and maintain close partnerships with dependable suppliers.",
      "whyCorrect": "Option B is correct. Just-in-Time (JIT) operations aim to eliminate waste (muda) across seven categories (overproduction, waiting, transport, inappropriate processing, unnecessary inventory, unnecessary motion, and defects). It relies on customer demand pulling production through small batch sizes and flawless quality.",
      "whyDistractors": [
        "Option A is incorrect because large buffer inventories hide operational problems and tie up working capital; JIT strives for zero unnecessary inventory.",
        "Option C is incorrect because running large batches to maximize machine utilisation is a traditional mass-production approach; JIT promotes small batch sizes to maintain agility.",
        "Option D is incorrect because JIT relies on long-term cooperative partnerships with a few highly vetted, reliable suppliers rather than adversarial spot-market buying."
      ],
      "reference": "BMAN121 SU7: Operations Management — Just-In-Time (JIT) and Lean Operations"
    }
  },
  {
    "id": "SU7-28",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "JIT Kanban Control",
    "question": "In a Lean / JIT manufacturing facility, what is the operational purpose of a 'Kanban' card or signal?",
    "options": [
      "It serves as a formal written reprimand for an employee who produced a defective component",
      "It acts as an authorization signal that triggers the production or movement of parts only when downstream workstations have consumed existing stock (pull system)",
      "It provides a financial summary of daily plant operational expenditures for upper management",
      "It schedules long-term preventive maintenance shutdowns for heavy machinery"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Kanban is a visual signaling mechanism (card, bin, light) in a pull system authorizing upstream stations to produce or transfer parts.",
      "whyCorrect": "Option B is correct. In Japanese, 'Kanban' means visual card or billboard. It operates as the physical or electronic communication mechanism in a pull system: an upstream workstation is not permitted to produce a part until a Kanban card or empty container arrives from the downstream station indicating that a part has been consumed.",
      "whyDistractors": [
        "Option A is incorrect because Kanban is a scheduling authorization tool, not a disciplinary employee reprimand.",
        "Option C is incorrect because financial expenditure tracking is an accounting function, not a shop-floor Kanban signal.",
        "Option D is incorrect because machine maintenance schedules are planned via plant maintenance systems, not operational Kanban pull cards."
      ],
      "reference": "BMAN121 SU7: Operations Management — The Kanban Visual Pull Control System"
    }
  },
  {
    "id": "SU7-29",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Total Quality Management (TQM)",
    "question": "Which of the following statements encapsulates the philosophy of Total Quality Management (TQM)?",
    "options": [
      "Quality is solely the responsibility of the final inspection department at the end of the assembly line",
      "An organisation-wide commitment to continuous improvement (Kaizen), customer focus, total employee empowerment, and zero defects",
      "Quality is achieved by accepting a statistically tolerable defect rate of 5% to 10% to control operational costs",
      "Quality management requires replacing human workers with automated robotics across all operational phases"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "TQM is an organization-wide management approach focused on continuous process improvement (Kaizen), customer satisfaction, employee involvement, and defect prevention.",
      "whyCorrect": "Option B is correct. Total Quality Management (TQM) is an all-encompassing philosophy that integrates quality into every organizational process and employee role. Key tenets include continuous improvement (Kaizen), meeting or exceeding customer requirements, employee empowerment, and designing processes to prevent defects rather than inspecting them out.",
      "whyDistractors": [
        "Option A is incorrect because TQM rejects the traditional notion that quality belongs only to final inspectors; quality must be built in at the source by every worker.",
        "Option C is incorrect because TQM strives for continuous improvement toward zero defects (six sigma philosophy) rather than complacent acceptable defect thresholds.",
        "Option D is incorrect because TQM places heavy emphasis on human employee involvement, teamwork, and empowerment, not purely automated substitution."
      ],
      "reference": "BMAN121 SU7: Operations Management — Principles of Total Quality Management (TQM)"
    }
  },
  {
    "id": "SU7-30",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Continuous Improvement (Kaizen)",
    "question": "The Japanese philosophy of 'Kaizen', widely adopted in modern operations management, is best defined as:",
    "options": [
      "Radical, episodic technological redesign of an entire operational facility",
      "A culture of continuous, incremental improvements involving everyone from executive management to front-line shop-floor workers",
      "A punitive inspection system for workers who fail daily production quotas",
      "A commercial contracting method for procuring raw materials at the lowest market bid"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Kaizen translates to continuous improvement through ongoing, small, incremental enhancements by all employees across all levels.",
      "whyCorrect": "Option B is correct. Kaizen is a cornerstone of TQM and Lean thinking. It emphasizes small, steady, incremental improvements to daily work processes, workplace organization (5S), and workflow efficiency, empowering every employee to identify and solve problems.",
      "whyDistractors": [
        "Option A is incorrect because radical, breakthrough redesign is known as Business Process Reengineering (BPR) or kaikaku, whereas Kaizen focuses on gradual, incremental evolution.",
        "Option C is incorrect because Kaizen fosters a supportive, blameless problem-solving culture focused on process improvement rather than punitive individual blame.",
        "Option D is incorrect because raw material procurement bidding is a purchasing function, not the philosophy of Kaizen."
      ],
      "reference": "BMAN121 SU7: Operations Management — Continuous Improvement and Kaizen Philosophy"
    }
  },
  {
    "id": "SU7-31",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Costs of Quality",
    "question": "A manufacturer of high-precision surgical instruments conducts extensive employee training programmes on quality procedures and invests in advanced computer-aided machine calibration to prevent errors before they occur. In the cost of quality framework, these expenditures are:",
    "options": [
      "Appraisal costs",
      "Internal failure costs",
      "Prevention costs",
      "External failure costs"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Prevention costs are incurred to avoid non-conformance and prevent defects from happening in the first place.",
      "whyCorrect": "Option C is correct. Prevention costs are proactive investments aimed at stopping defects before they arise. Examples include employee quality training, robust product and process design, equipment calibration, supplier capability evaluations, and quality planning.",
      "whyDistractors": [
        "Option A is incorrect because appraisal costs are incurred to inspect, test, and audit items to detect defects that may have already been produced (e.g. lab testing, inspections).",
        "Option B is incorrect because internal failure costs are incurred when defects are caught before delivery to the customer (e.g., scrap, rework, re-testing).",
        "Option D is incorrect because external failure costs occur when defective products reach the customer (e.g., warranty claims, recalls, legal liabilities)."
      ],
      "reference": "BMAN121 SU7: Operations Management — Costs of Quality: Prevention, Appraisal, and Failure Costs"
    }
  },
  {
    "id": "SU7-32",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Costs of Quality",
    "question": "An electronics manufacturing facility in East London discovers that 15% of printed circuit boards coming off the soldering line fail diagnostic electrical tests and must be melted down as scrap or manually reworked by technicians before packing. What cost of quality category does this represent?",
    "options": [
      "Prevention costs",
      "Appraisal costs",
      "Internal failure costs",
      "External failure costs"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Internal failure costs arise from rectifying defective units before they leave the factory and reach the customer.",
      "whyCorrect": "Option C is correct. Internal failure costs are all costs associated with defects detected inside the production plant prior to transfer of ownership to the customer. Common examples include scrap, reworking, downtime caused by defects, and re-testing.",
      "whyDistractors": [
        "Option A is incorrect because prevention costs are upfront investments to design error-free processes (e.g., training, process engineering).",
        "Option B is incorrect because appraisal costs are the costs of conducting the inspections or tests themselves, not the loss from the scrapped boards.",
        "Option D is incorrect because external failure costs occur after the product has been delivered to external customers."
      ],
      "reference": "BMAN121 SU7: Operations Management — Internal vs External Failure Costs"
    }
  },
  {
    "id": "SU7-33",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Costs of Quality",
    "question": "A domestic appliance company is forced to issue a nationwide recall on 50,000 electric kettles due to a faulty thermostat that caused kitchen fires, resulting in extensive warranty payouts, customer lawsuits, and severe brand damage. These costs are classified as:",
    "options": [
      "Appraisal costs",
      "Prevention costs",
      "Internal failure costs",
      "External failure costs"
    ],
    "correctIndex": 3,
    "explanation": {
      "summary": "External failure costs are incurred when defective products escape the factory and reach end consumers.",
      "whyCorrect": "Option D is correct. External failure costs arise when defects are discovered after the customer has received the product or service. These are typically the most damaging quality costs and include product recalls, warranty repairs, customer complaint processing, liability lawsuits, and loss of goodwill.",
      "whyDistractors": [
        "Option A is incorrect because appraisal costs are the costs of measuring and evaluating products during production.",
        "Option B is incorrect because prevention costs are proactive spending to prevent errors.",
        "Option C is incorrect because internal failure costs occur when defects are caught and rectified inside the factory before shipment."
      ],
      "reference": "BMAN121 SU7: Operations Management — External Failure Quality Costs"
    }
  },
  {
    "id": "SU7-34",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Costs of Quality",
    "question": "In a dairy processing plant, quality control technicians extract samples of pasteurized milk from every batch to test butterfat content and conduct microbiological lab cultures. The cost of running this laboratory and its test equipment is categorized as:",
    "options": [
      "Prevention cost",
      "Appraisal (inspection) cost",
      "Internal failure cost",
      "External failure cost"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Appraisal costs are the expenditures incurred to inspect, test, and audit items to verify whether they conform to quality specifications.",
      "whyCorrect": "Option B is correct. Appraisal costs are the costs associated with measuring, evaluating, or auditing products, components, and purchased materials to ensure conformance to quality standards. Routine laboratory testing, sampling, and in-line inspections fall under appraisal.",
      "whyDistractors": [
        "Option A is incorrect because prevention costs involve planning and training to prevent defects from being produced in the first place.",
        "Option C is incorrect because internal failure costs are the expenses resulting from scrapping or fixing defective units, not the testing equipment itself.",
        "Option D is incorrect because external failure costs occur after shipment to the consumer."
      ],
      "reference": "BMAN121 SU7: Operations Management — Appraisal and Inspection Costs"
    }
  },
  {
    "id": "SU7-35",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Quality Management Standards",
    "question": "What is the primary focus of the internationally recognized 'ISO 9000' series of standards?",
    "options": [
      "Establishing statutory minimum wage and working hour conditions in industrial factories",
      "Providing a framework for quality management systems (QMS) ensuring processes consistently meet customer and regulatory requirements",
      "Mandating specific physical technical dimensions for all engineered consumer products",
      "Certifying environmental protection and greenhouse gas emission limits"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "ISO 9000 establishes international standards for quality management systems (QMS), focusing on consistent processes, customer satisfaction, and continuous improvement.",
      "whyCorrect": "Option B is correct. The ISO 9000 family of standards (notably ISO 9001) specifies requirements for a Quality Management System. It ensures that an organisation has documented, repeatable, and audited operational processes to consistently produce quality outputs and meet regulatory demands.",
      "whyDistractors": [
        "Option A is incorrect because statutory wages and working hours are governed by labour law (e.g., BCEA in South Africa), not ISO standards.",
        "Option C is incorrect because ISO 9000 focuses on management processes, not product-specific physical engineering dimensions.",
        "Option D is incorrect because environmental management and emissions are governed by the ISO 14000 series, not ISO 9000."
      ],
      "reference": "BMAN121 SU7: Operations Management — ISO 9000 Quality Management Standards"
    }
  },
  {
    "id": "SU7-36",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Quality Improvement Tools",
    "question": "A production manager observes that 80% of assembly defects on a refrigerator line originate from only 20% of the operational work steps. Which quality management principle / tool does this observation reflect?",
    "options": [
      "Ishikawa Fishbone Cause-and-Effect diagram",
      "The Pareto Principle (80/20 rule)",
      "Statistical Process Control (SPC) X-bar chart",
      "Deming's PDCA (Plan-Do-Check-Act) cycle"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The Pareto Principle posits that a vital few causes (approx 20%) account for the majority (approx 80%) of quality problems.",
      "whyCorrect": "Option B is correct. The Pareto Principle (originating from Vilfredo Pareto and applied to quality management by Joseph Juran) states that roughly 80% of consequences come from 20% of causes. In quality control, Pareto analysis helps operations teams identify and prioritize the 'vital few' defect causes over the 'trivial many'.",
      "whyDistractors": [
        "Option A is incorrect because an Ishikawa (fishbone) diagram categorizes potential root causes into branches (methods, machines, materials, people), but does not calculate the 80/20 distribution.",
        "Option C is incorrect because SPC X-bar charts track process stability over time against control limits.",
        "Option D is incorrect because Deming's PDCA cycle is a four-step iterative methodology for implementing change and improvement."
      ],
      "reference": "BMAN121 SU7: Operations Management — Quality Tools: The Pareto Analysis"
    }
  },
  {
    "id": "SU7-37",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Benchmarking",
    "question": "An express courier firm in South Africa studies the pit-stop tire-changing procedures of a Formula 1 racing team to improve the vehicle maintenance and turnaround speed of its own delivery fleet. This practice is known as:",
    "options": [
      "Process layout balancing",
      "Benchmarking",
      "Capacity lagging",
      "Reverse financial auditing"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Benchmarking is the practice of comparing an organization's business processes and performance metrics to industry bests or best practices from other industries.",
      "whyCorrect": "Option B is correct. Benchmarking involves measuring an organisation's processes against recognized world-class leaders, whether within the same industry or in completely different sectors (functional/generic benchmarking), to adapt superior practices and achieve breakthrough operational performance.",
      "whyDistractors": [
        "Option A is incorrect because line balancing is the technical equalization of task times across workstations along an assembly line.",
        "Option C is incorrect because capacity lagging is an operational capacity strategy of waiting for demand before building facilities.",
        "Option D is incorrect because financial auditing is an accounting review of financial statements, not an operational process enhancement technique."
      ],
      "reference": "BMAN121 SU7: Operations Management — Quality Improvement Techniques: Benchmarking"
    }
  },
  {
    "id": "SU7-38",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Material Requirements Planning (MRP)",
    "question": "What is the primary role of a 'Bill of Materials' (BOM) within a computerized Material Requirements Planning (MRP) system?",
    "options": [
      "It lists the financial invoice amounts owed to raw material suppliers",
      "It specifies the exact hierarchy, quantities, and subassemblies required to manufacture one unit of a finished product",
      "It records the daily clock-in hours and wage rates of factory workers",
      "It defines the commercial freight contracts for transporting goods to retail stores"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A Bill of Materials (BOM) is an engineering product structure document identifying all sub-components, parts, and raw materials needed to construct a finished unit.",
      "whyCorrect": "Option B is correct. In MRP, the Bill of Materials (BOM) acts as the operational recipe or product structure tree. It details every component, raw material, and subassembly—along with the precise quantities required—to build one finished unit of an end product.",
      "whyDistractors": [
        "Option A is incorrect because supplier invoices and amounts owed are tracked in Accounts Payable in the financial system.",
        "Option C is incorrect because worker clock-in records are tracked in HR payroll timekeeping systems.",
        "Option D is incorrect because outbound freight contracts are logistics and distribution management documents."
      ],
      "reference": "BMAN121 SU7: Operations Management — Material Requirements Planning (MRP) and the Bill of Materials"
    }
  },
  {
    "id": "SU7-39",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Operations Layout Balancing",
    "question": "In an automotive assembly plant using a product layout, Workstation 1 takes 60 seconds, Workstation 2 takes 120 seconds, and Workstation 3 takes 60 seconds per vehicle. Workstation 2 causes inventory to pile up in front of it while Workstation 3 frequently sits idle. In operations management, Workstation 2 is a:",
    "options": [
      "Kanban buffer",
      "Bottleneck",
      "Fixed-position station",
      "Transforming node"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A bottleneck is the operational stage with the lowest capacity or longest processing time that limits the total output throughput of the entire line.",
      "whyCorrect": "Option B is correct. A bottleneck is a point of congestion in an operations system where the workload arrives faster than that stage can process it. The capacity of Workstation 2 (120 seconds) limits the cycle time of the entire line, causing upstream inventory build-up and downstream starvation.",
      "whyDistractors": [
        "Option A is incorrect because a Kanban buffer is an intentional inventory storage zone managed by pull signals, not an unplanned constraint.",
        "Option C is incorrect because fixed-position stations refer to layouts where the product does not move.",
        "Option D is incorrect because while all stations transform inputs, 'transforming node' is not the operational term for a line capacity constraint."
      ],
      "reference": "BMAN121 SU7: Operations Management — Line Balancing and Bottleneck Identification"
    }
  },
  {
    "id": "SU7-40",
    "studyUnit": "SU7",
    "unitTitle": "Study Unit 7: Operations & Production Management",
    "topic": "Operations Strategy & Competitive Priorities",
    "question": "A custom architectural glassmaker can switch its manufacturing machinery within minutes to produce bullet-resistant glass, double-glazed soundproof glass, or decorative frosted panels to meet unique client orders. Which operational capability is this firm demonstrating?",
    "options": [
      "High volume economies of scale",
      "Process flexibility",
      "Continuous mass standardization",
      "Inventory buffer accumulation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Flexibility is the operational ability to adapt to changes in product mix, product design, production volume, or delivery timing.",
      "whyCorrect": "Option B is correct. Operational flexibility refers to the ease and speed with which an operations system can adapt to changes in customer demands, product mix, volume, or specifications without incurring excessive disruption, downtime, or cost.",
      "whyDistractors": [
        "Option A is incorrect because high-volume economies of scale arise from producing massive runs of standard identical items, which sacrifices variety.",
        "Option C is incorrect because continuous mass standardization relies on rigid automated processes with zero product variation.",
        "Option D is incorrect because buffer inventory accumulation is holding stock to cover demand spikes, not the inherent machinery ability to switch production types."
      ],
      "reference": "BMAN121 SU7: Operations Management — Operations Competitive Capabilities: Flexibility"
    }
  },
  {
    "id": "SU8-01",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "The Nature of Marketing",
    "question": "Which of the following statements best defines the fundamental concept of 'marketing' in contemporary business management?",
    "options": [
      "The aggressive practice of convincing consumers to purchase goods that a factory has already manufactured",
      "The process of identifying, anticipating, and satisfying customer needs and wants profitably through mutually beneficial value exchanges",
      "The non-personal paid presentation and promotion of ideas, goods, and services through mass print and broadcast media",
      "The physical transportation and warehousing of finished merchandise from producers to retail distribution centers"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Marketing is the managerial process of identifying, anticipating, and satisfying customer needs and wants through the creation and exchange of value.",
      "whyCorrect": "Option B is correct. Modern marketing is centered on customer orientation and value creation. It involves researching customer requirements, designing appropriate value offerings, pricing, promoting, and distributing them to establish long-term mutually beneficial relationships that achieve organizational objectives.",
      "whyDistractors": [
        "Option A is incorrect because aggressive persuasion to sell already-manufactured stock defines the obsolete 'sales orientation', not modern marketing.",
        "Option C is incorrect because non-personal paid promotion defines 'advertising', which is only one element of the promotional mix within marketing.",
        "Option D is incorrect because the physical movement and storage of products defines 'logistics' or 'physical distribution', which is only one component of the Place element."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Nature and Definition of Marketing"
    }
  },
  {
    "id": "SU8-02",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Orientations / Philosophies",
    "question": "Henry Ford famously stated, 'Any customer can have a car painted any colour that he wants so long as it is black,' reflecting a belief that consumers favor products that are widely available and highly affordable. Which marketing philosophy does this represent?",
    "options": [
      "The Marketing Concept",
      "The Production Orientation",
      "The Societal Marketing Concept",
      "The Relationship Marketing Orientation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The production orientation assumes consumers favor readily available and low-cost goods, leading management to focus on production efficiency and mass distribution.",
      "whyCorrect": "Option B is correct. Under the production orientation, businesses concentrate on mass manufacturing efficiency, maximizing output, and lowering unit costs through economies of scale, assuming that supply creates its own demand if products are cheap and widely accessible.",
      "whyDistractors": [
        "Option A is incorrect because the marketing concept starts with consumer desires and customizes offerings to fit diverse customer needs rather than forcing a single product.",
        "Option C is incorrect because societal marketing balances company profits, consumer desires, and long-term societal well-being and environmental ethics.",
        "Option D is incorrect because relationship marketing focuses on building enduring, personalized customer loyalty rather than mass production standardization."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Evolution of Marketing Thought: Production Orientation"
    }
  },
  {
    "id": "SU8-03",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Orientations / Philosophies",
    "question": "A technology manufacturer concentrates entirely on engineering the most complex, feature-packed smartphones with unmatched technical specifications, but ignores customer feedback indicating users find the device confusing, heavy, and overpriced. This company is suffering from:",
    "options": [
      "A Sales orientation",
      "The Product orientation (Marketing Myopia)",
      "A Societal orientation",
      "A Market segmentation fallacy"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The product orientation assumes consumers want superior technical quality, leading firms to fall in love with their products and ignore actual customer utility (Marketing Myopia).",
      "whyCorrect": "Option B is correct. Under a product orientation, management focuses inward on product engineering, believing that building a 'better mousetrap' automatically attracts buyers. As Theodore Levitt noted, this leads to 'Marketing Myopia'—an inward focus on the product rather than the underlying need it satisfies.",
      "whyDistractors": [
        "Option A is incorrect because a sales orientation focuses on hard selling and heavy promotional pressure to move existing inventory.",
        "Option C is incorrect because a societal orientation focuses on public welfare, ethics, and sustainability.",
        "Option D is incorrect because 'market segmentation fallacy' is not a marketing orientation category."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Product Orientation and Marketing Myopia"
    }
  },
  {
    "id": "SU8-04",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Orientations / Philosophies",
    "question": "A timeshare holiday club trains its sales agents in aggressive, high-pressure cold-calling tactics to persuade customers to sign binding long-term contracts during one-off promotional presentations. This business operates under the:",
    "options": [
      "Societal marketing orientation",
      "Sales orientation",
      "Customer-centric orientation",
      "Holistic marketing orientation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A sales orientation assumes that consumers will not buy enough products unless subjected to aggressive, high-pressure selling and promotional efforts.",
      "whyCorrect": "Option B is correct. The sales orientation assumes that consumers show buying resistance and must be coaxed into buying through hard-selling tactics and high-pressure promotions. It focuses on the seller's immediate need to convert goods into cash rather than the buyer's genuine satisfaction.",
      "whyDistractors": [
        "Option A is incorrect because societal marketing prioritizes customer well-being and ethical responsibility.",
        "Option C is incorrect because a customer-centric orientation listens to customer needs and offers solutions, avoiding manipulative sales tactics.",
        "Option D is incorrect because holistic marketing integrates relationship marketing, integrated marketing, internal marketing, and performance marketing."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Sales Orientation"
    }
  },
  {
    "id": "SU8-05",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Orientations / Philosophies",
    "question": "Woolworths South Africa implements its 'Good Business Journey', sourcing organic produce from local emerging farmers, using recyclable packaging, and reducing water and energy usage across its supply chain while delivering customer satisfaction. This aligns with:",
    "options": [
      "The Production concept",
      "The Sales concept",
      "The Societal Marketing concept",
      "The Classical Mechanistic concept"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "The societal marketing concept balances company profitability, customer need satisfaction, and long-term societal and environmental well-being.",
      "whyCorrect": "Option C is correct. The societal marketing concept holds that an organization's task is to determine the needs, wants, and interests of target markets and deliver satisfaction more effectively than competitors in a way that preserves or enhances the well-being of consumers and society as a whole.",
      "whyDistractors": [
        "Option A is incorrect because the production concept focuses strictly on internal factory output and low-cost mass production.",
        "Option B is incorrect because the sales concept focuses on aggressive selling of existing items.",
        "Option D is incorrect because the classical mechanistic concept refers to early bureaucratic and scientific management models, not marketing philosophies."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Societal Marketing Concept"
    }
  },
  {
    "id": "SU8-06",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "The Marketing Concept",
    "question": "Which four fundamental pillars form the operational foundation of the modern 'Marketing Concept'?",
    "options": [
      "Low manufacturing cost, aggressive advertising, quota management, and rapid turnover",
      "Market focus, customer orientation, integrated marketing, and profitability through customer satisfaction",
      "Product engineering, technical perfection, patent protection, and premium pricing",
      "Direct selling, trade credit, mass warehousing, and public relations"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The modern marketing concept rests on four pillars: target market focus, customer orientation, integrated marketing across all departments, and achieving long-term profitability through customer satisfaction.",
      "whyCorrect": "Option B is correct. Unlike older production and sales mindsets, the modern marketing concept is built on defining target markets, understanding customer needs, coordinating all departments (integrated marketing), and generating profit by delivering superior customer satisfaction.",
      "whyDistractors": [
        "Option A is incorrect because low manufacturing cost and aggressive selling reflect production and sales orientations.",
        "Option C is incorrect because product engineering and technical perfection reflect a product orientation.",
        "Option D is incorrect because direct selling and warehousing are operational tactical tools, not the conceptual pillars of marketing philosophy."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Core Pillars of the Marketing Concept"
    }
  },
  {
    "id": "SU8-07",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Research Process",
    "question": "What is the critical first step in the formal marketing research process?",
    "options": [
      "Designing the survey questionnaire and sampling frame",
      "Collecting primary empirical data through field interviews",
      "Defining the research problem, problem context, and research objectives",
      "Presenting statistical findings and graphs to executive directors"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Defining the problem and research objectives is the crucial first step; an improperly defined problem leads to irrelevant or wasteful research.",
      "whyCorrect": "Option C is correct. The marketing research process systematically begins with: 1. Defining the problem and research objectives. Without clearly defining what management needs to understand or decide, subsequent steps (data collection, sampling, analysis) will be misdirected.",
      "whyDistractors": [
        "Option A is incorrect because designing instruments and sampling frames is part of step 2 (developing the research plan).",
        "Option B is incorrect because primary data collection is step 3 (implementing the research plan).",
        "Option D is incorrect because presenting findings is the final step in the research process."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Marketing Research Process"
    }
  },
  {
    "id": "SU8-08",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Primary vs Secondary Data",
    "question": "A market researcher at Pick n Pay analyses published demographic data from Statistics South Africa (Census 2022) to evaluate population density in Polokwane. In marketing research, this census data is classified as:",
    "options": [
      "Primary data",
      "Secondary data",
      "Experimental data",
      "Observational data"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Secondary data consists of information that already exists somewhere, having been collected previously for another purpose.",
      "whyCorrect": "Option B is correct. Secondary data is information that was compiled prior to the current project by third parties (e.g. government census publications, trade journals, commercial databases) or from existing internal records. It is typically faster and less expensive to obtain than primary data.",
      "whyDistractors": [
        "Option A is incorrect because primary data refers to fresh data gathered specifically for the particular research problem at hand (e.g. customized surveys, customer interviews).",
        "Option C is incorrect because experimental data is gathered by manipulating independent variables in controlled conditions.",
        "Option D is incorrect because observational data involves observing people's actions and situations in real time."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Primary vs Secondary Marketing Data"
    }
  },
  {
    "id": "SU8-09",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Marketing Research Methods",
    "question": "Nando's convenes a group of 8 to 10 consumers along with a trained moderator in an informal setting to discuss their emotional associations, taste perceptions, and dining preferences regarding spicy grilled chicken. This qualitative research technique is:",
    "options": [
      "A structured postal survey",
      "A focus group interview",
      "A mechanical scanner experiment",
      "A quantitative regression census"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A focus group is a qualitative research method bringing 6 to 10 people together with a trained moderator to explore thoughts, attitudes, and perceptions on a topic.",
      "whyCorrect": "Option B is correct. Focus groups are a staple qualitative marketing research technique. A skilled moderator facilitates an open-ended discussion among a small group of pre-screened participants to generate rich, descriptive insights into consumer feelings, beliefs, and reactions to products or advertisements.",
      "whyDistractors": [
        "Option A is incorrect because postal surveys use written, quantitative questionnaires mailed to respondents with no interactive discussion.",
        "Option C is incorrect because mechanical scanner experiments track barcode purchase scans at supermarket tills.",
        "Option D is incorrect because regression analysis is a quantitative statistical modeling technique."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Qualitative Research Techniques: Focus Groups"
    }
  },
  {
    "id": "SU8-10",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Market Segmentation Concept",
    "question": "Why do contemporary business organizations divide broad total markets into smaller market segments?",
    "options": [
      "To eliminate the need for advertising and public relations campaigns",
      "Because buyers have diverse needs, resources, and buying behaviors, and a company cannot effectively serve all consumers in a heterogeneous market with a single offering",
      "To legally comply with the South African Consumer Protection Act's fair trade mandates",
      "To guarantee that the business can charge monopoly prices without attracting competitors"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Market segmentation divides a large, heterogeneous market into smaller, homogeneous segments that can be satisfied more effectively with tailored marketing mixes.",
      "whyCorrect": "Option B is correct. Modern markets are heterogeneous—consumers vary in their tastes, income, geographical locations, lifestyle, and buying motives. By segmenting the market, a firm can design precise products, prices, distribution channels, and promotional messages that match the distinct expectations of specific subgroups.",
      "whyDistractors": [
        "Option A is incorrect because segmented marketing still requires targeted advertising and promotion tailored to each selected segment.",
        "Option C is incorrect because the Consumer Protection Act regulates consumer rights, product safety, and fair disclosure, not corporate marketing segmentation choices.",
        "Option D is incorrect because market segmentation does not grant legal monopoly status or eliminate competition."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Rationale for Market Segmentation"
    }
  },
  {
    "id": "SU8-11",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Bases of Market Segmentation",
    "question": "A bank segments its retail client base into: 'Gen Z Students' (ages 18–24), 'Young Career Professionals' (ages 25–35), and 'Retirees' (ages 60+). Which segmentation base is the bank primarily applying?",
    "options": [
      "Geographic segmentation",
      "Demographic segmentation",
      "Psychographic segmentation",
      "Behavioural segmentation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Demographic segmentation groups consumers based on observable personal variables such as age, gender, income, education, occupation, and family life cycle stage.",
      "whyCorrect": "Option B is correct. Dividing a market on the basis of age and life cycle stages (students, young professionals, retirees) is standard demographic segmentation. Demographics are the most widely used segmentation variables because consumer needs often vary closely with demographic traits and they are easily measurable.",
      "whyDistractors": [
        "Option A is incorrect because geographic segmentation divides markets based on nations, provinces, cities, urban/rural areas, or climatic zones.",
        "Option C is incorrect because psychographic segmentation groups consumers based on lifestyle, values, personality, and social class.",
        "Option D is incorrect because behavioural segmentation divides buyers based on product knowledge, usage rates, brand loyalty, and benefits sought."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Demographic Market Segmentation"
    }
  },
  {
    "id": "SU8-12",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Bases of Market Segmentation",
    "question": "An activewear outdoor clothing brand segments its consumer audience based on individuals who prioritize environmental conservation, pursue mountaineering and trail adventures, and value personal self-actualization. This is an example of:",
    "options": [
      "Demographic segmentation",
      "Psychographic segmentation",
      "Geographic segmentation",
      "Legal-entity segmentation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Psychographic segmentation categorizes consumers by psychological and lifestyle traits, including activities, interests, opinions (AIOs), personal values, and personality.",
      "whyCorrect": "Option B is correct. Psychographic segmentation divides buyers into different groups based on social class, lifestyle (activities, interests, opinions), or personality characteristics. Targeting outdoor conservationists and adventurous lifestyle enthusiasts relies on psychographic profiling.",
      "whyDistractors": [
        "Option A is incorrect because demographic segmentation relies on objective personal statistics such as age, income, and gender.",
        "Option C is incorrect because geographic segmentation is based on physical geographic boundaries.",
        "Option D is incorrect because 'legal-entity segmentation' is not a marketing segmentation category."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Psychographic Market Segmentation"
    }
  },
  {
    "id": "SU8-13",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Bases of Market Segmentation",
    "question": "An airline rewards its 'Platinum Frequent Flyers'—who generate 60% of premium ticket revenues despite accounting for only 10% of total passenger volume—with priority boarding and dedicated airport lounge access. What segmentation base is this?",
    "options": [
      "Geographic segmentation",
      "Psychographic segmentation",
      "Behavioural segmentation (usage rate / loyalty status)",
      "Demographic age cohort segmentation"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Behavioural segmentation divides consumers based on knowledge, attitude, usage rate, brand loyalty, and response to a product (including the 80/20 usage principle).",
      "whyCorrect": "Option C is correct. Segmenting customers into heavy, medium, and light users, or classifying them by brand loyalty and transaction frequency, is behavioural segmentation. Airlines targeting frequent flyers leverage the classic 80/20 rule (where a small percentage of heavy users account for a major portion of sales).",
      "whyDistractors": [
        "Option A is incorrect because geographic segmentation focuses on geographic territories.",
        "Option B is incorrect because psychographic segmentation evaluates psychological mindset, personality, and social values.",
        "Option D is incorrect because demographic age cohort segmentation looks at birth year cohorts (e.g. Boomers, Millennials), not transaction frequency."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Behavioural Segmentation and Usage Rates"
    }
  },
  {
    "id": "SU8-14",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Criteria for Effective Segmentation",
    "question": "To ensure that a market segment is viable and strategically practical for a firm to target, it must satisfy four key criteria: Measurability, Accessibility, Substantiality, and:",
    "options": [
      "Unilateral rigidity",
      "Actionability (Actionable)",
      "Theoretical homogeneity",
      "Price indifference"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Effective market segments must be Measurable, Accessible, Substantial, Differentiable, and Actionable.",
      "whyCorrect": "Option B is correct. For market segments to be useful, they must be: Measurable (size and purchasing power can be calculated), Accessible (can be effectively reached and served), Substantial (large or profitable enough to serve), Differentiable (conceptually distinguishable and respond differently to marketing mix elements), and Actionable (effective programmes can be formulated for attracting and serving them).",
      "whyDistractors": [
        "Option A is incorrect because rigidity prevents adaptation to shifting consumer preferences.",
        "Option C is incorrect because 'theoretical homogeneity' is an academic abstract term, not the strategic criterion of actionability.",
        "Option D is incorrect because price indifference does not exist in competitive markets where consumers have budget constraints."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Criteria for Useful and Effective Market Segmentation"
    }
  },
  {
    "id": "SU8-15",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Target Marketing Strategies",
    "question": "A salt producer distributes one single standard package of table salt at one uniform price through all grocery stores with one national advertising slogan, treating the entire market as homogeneous. Which target marketing strategy is this?",
    "options": [
      "Differentiated (multi-segment) marketing",
      "Undifferentiated (mass) marketing",
      "Concentrated (niche) marketing",
      "Micromarketing (individual marketing)"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Undifferentiated (mass) marketing targets the entire market with one single marketing mix, ignoring segment differences.",
      "whyCorrect": "Option B is correct. In undifferentiated (mass) marketing, a firm decides to ignore market segment differences and go after the whole market with one offer. It focuses on what is common in consumer needs rather than what is different (typical of basic commodities like table salt or white sugar).",
      "whyDistractors": [
        "Option A is incorrect because differentiated marketing develops distinct marketing mixes tailored for multiple individual segments.",
        "Option C is incorrect because concentrated (niche) marketing focuses on capturing a large share of one or a few narrow specialized niches.",
        "Option D is incorrect because micromarketing tailors products and marketing programmes to suit individual customers or hyper-local communities."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Target Marketing Strategies: Undifferentiated vs Others"
    }
  },
  {
    "id": "SU8-16",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Target Marketing Strategies",
    "question": "Toyota manufactures and markets the Aygo for budget students, the Corolla for families, the Hilux for farmers and commercial contractors, and the Lexus for luxury corporate executives. This target marketing strategy is termed:",
    "options": [
      "Undifferentiated marketing",
      "Differentiated (multi-segment) marketing",
      "Concentrated (niche) marketing",
      "Single-channel distribution"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Differentiated (multi-segment) marketing targets several market segments and designs separate value offerings and marketing mixes for each.",
      "whyCorrect": "Option B is correct. Under a differentiated marketing strategy, a company operates in multiple market segments and develops distinct products, pricing structures, and promotions for each (e.g. Toyota offering budget, utility, family, and luxury vehicle lines). This produces higher total sales, although at higher operational and marketing costs.",
      "whyDistractors": [
        "Option A is incorrect because undifferentiated marketing serves the whole market with a single, uniform product and mix.",
        "Option C is incorrect because concentrated (niche) marketing devotes all resources to one single, narrowly defined market niche.",
        "Option D is incorrect because single-channel distribution is a logistics method, not a market targeting strategy."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Differentiated (Multi-Segment) Targeting"
    }
  },
  {
    "id": "SU8-17",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Target Marketing Strategies",
    "question": "A small financial services boutique focuses 100% of its advisory services and wealth management solutions exclusively on medical specialists and dental practitioners in South Africa. What targeting strategy is this firm pursuing?",
    "options": [
      "Undifferentiated marketing",
      "Concentrated (niche) marketing",
      "Mass production marketing",
      "Counter-segmentation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Concentrated (niche) marketing focuses an organization's limited resources on achieving a dominant market position within one specialized submarket.",
      "whyCorrect": "Option B is correct. Concentrated (or niche) marketing occurs when an enterprise targets a single, highly specialized, well-defined segment or niche market. Through specialization, the firm achieves deep market knowledge and a strong reputation within that distinct niche, which is ideal for small firms with limited resources.",
      "whyDistractors": [
        "Option A is incorrect because undifferentiated marketing pursues the entire mass public with a uniform offering.",
        "Option C is incorrect because mass production marketing produces identical commodities for mass consumption.",
        "Option D is incorrect because counter-segmentation combines distinct small segments into a broader segment to achieve cost savings."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Concentrated (Niche) Targeting Strategies"
    }
  },
  {
    "id": "SU8-18",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Product Positioning",
    "question": "What is the strategic purpose of 'Product Positioning' in marketing management?",
    "options": [
      "Physically arranging merchandise on eye-level supermarket display gondolas",
      "Arranging for a brand or product to occupy a clear, distinctive, and desirable place relative to competing products in the mind of the target consumer",
      "Registering legal trademarks with the national patent office",
      "Setting the geographical delivery boundaries for wholesale logistics"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Product positioning is the act of designing a company's offering and image to occupy a distinctive, valued mental position in target consumers' minds.",
      "whyCorrect": "Option B is correct. As formulated by Al Ries and Jack Trout, positioning is not what you do to a product physically; it is what you do to the mind of the prospect. It establishes the brand's Unique Selling Proposition (USP) and competitive differentiation in relation to rivals (e.g. Volvo = safety, BMW = driving performance).",
      "whyDistractors": [
        "Option A is incorrect because placing products on retail shelves is 'visual merchandising' or 'shelf planogramming', not market positioning.",
        "Option C is incorrect because trademark registration is an intellectual property legal compliance step.",
        "Option D is incorrect because setting delivery routes is physical distribution logistics."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Product Positioning and Brand Differentiation"
    }
  },
  {
    "id": "SU8-19",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Perceptual Mapping",
    "question": "A marketing team constructs a visual two-dimensional grid displaying various passenger cars plotted along two axes: 'Price (Economy vs Luxury)' and 'Performance (Practical vs Sporty)'. What is this analytical tool called?",
    "options": [
      "A BCG Growth-Share Matrix",
      "A Perceptual (Positioning) Map",
      "An Ansoff Product-Market Expansion Grid",
      "A Porter Five Forces Diagram"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A perceptual (positioning) map visually plots customer perceptions of competing brands along key evaluative dimensions to identify brand positions and market gaps.",
      "whyCorrect": "Option B is correct. A perceptual map (or positioning map) displays the location of competing products in two or more dimensions (such as price and quality/performance) as perceived by target consumers, helping marketers identify where their brand sits relative to rivals and spot untapped market niches.",
      "whyDistractors": [
        "Option A is incorrect because the BCG Matrix plots market growth rate against relative market share (Stars, Cash Cows, Question Marks, Dogs).",
        "Option C is incorrect because the Ansoff Matrix categorizes growth into Market Penetration, Market Development, Product Development, and Diversification.",
        "Option D is incorrect because Porter's Five Forces model evaluates industry competitive intensity."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Perceptual Mapping in Positioning Decisions"
    }
  },
  {
    "id": "SU8-20",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "The Three Product Levels",
    "question": "When a hotel guest books a room at a Protea Hotel, they are fundamentally purchasing restful sleep and relaxation. In Kotler's three-level product model, this fundamental underlying benefit represents the:",
    "options": [
      "Actual product",
      "Core customer benefit (core product)",
      "Augmented product",
      "Differentiated product"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The core customer benefit is the fundamental service or problem-solving benefit that the consumer is truly buying.",
      "whyCorrect": "Option B is correct. In the three levels of product: 1. Core customer benefit: the problem-solving service or core need the consumer is buying (e.g. sleep/rest in a hotel, drilling a hole when buying a drill). 2. Actual product: the tangible product and attributes (bed, bathroom, styling, brand). 3. Augmented product: additional services and benefits (free Wi-Fi, breakfast, reward points).",
      "whyDistractors": [
        "Option A is incorrect because the actual product consists of the physical hotel room, clean sheets, television, and bathroom facilities.",
        "Option C is incorrect because the augmented product includes additional supportive benefits like room service, loyalty points, or complimentary airport shuttles.",
        "Option D is incorrect because differentiated product is a competitive strategy term, not one of Kotler's three formal product levels."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Three Levels of a Product (Core, Actual, Augmented)"
    }
  },
  {
    "id": "SU8-21",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Goods Classification",
    "question": "A consumer walking past a till in a Spar supermarket sees a packet of chewing gum and a chocolate bar, and adds them to their basket without any prior planning or comparative search. These items are classified as:",
    "options": [
      "Shopping goods",
      "Impulse convenience goods",
      "Specialty goods",
      "Unsought emergency goods"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Convenience goods are purchased frequently with minimal shopping effort; impulse goods are bought on the spur of the moment without prior planning.",
      "whyCorrect": "Option B is correct. Convenience goods are non-durable goods bought frequently, immediately, and with minimal comparison effort. Subcategories include staple goods (bread, milk), impulse goods (sweets and magazines bought spontaneously without planning), and emergency goods (plasters, umbrellas).",
      "whyDistractors": [
        "Option A is incorrect because shopping goods (clothing, major appliances, furniture) require time and effort comparing quality, price, and style.",
        "Option C is incorrect because specialty goods (luxury watches, sports cars) have unique brand identification and high purchase effort.",
        "Option D is incorrect because emergency convenience goods are bought when an urgent need arises (e.g. bandages after an accident), not for spontaneous pleasure."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Classification of Consumer Goods: Convenience Goods"
    }
  },
  {
    "id": "SU8-22",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Goods Classification",
    "question": "A family visits three different electronics retailers across Pretoria to compare prices, screen sizes, energy ratings, and warranty conditions before purchasing a new 65-inch Smart TV. In consumer goods classification, this television is:",
    "options": [
      "A convenience good",
      "A shopping good",
      "An unsought good",
      "A raw material commodity"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Shopping goods are items for which the consumer compares suitability, quality, price, and style across different outlets before purchase.",
      "whyCorrect": "Option B is correct. Shopping goods are consumer products that the customer, in the process of selection and purchase, typically compares on such bases as suitability, quality, price, and styling (e.g., furniture, major electrical appliances, clothing).",
      "whyDistractors": [
        "Option A is incorrect because convenience goods are bought frequently with minimum effort and no extensive multi-store comparison.",
        "Option C is incorrect because unsought goods are products consumers do not know about or normally think of buying (e.g., life insurance).",
        "Option D is incorrect because a finished television is an assembled consumer electronic device, not an industrial raw material."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Shopping Goods Characteristics"
    }
  },
  {
    "id": "SU8-23",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Goods Classification",
    "question": "A consumer insists on purchasing only a handcrafted Rolex Submariner timepiece, refusing to consider any alternative brands and willingly waiting 6 months on an official dealer waiting list. In marketing terms, this watch is classified as:",
    "options": [
      "A convenience good",
      "A staple good",
      "A specialty good",
      "An unsought emergency item"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Specialty goods possess unique characteristics or strong brand identification for which buyers are willing to expend significant purchase effort without accepting substitutes.",
      "whyCorrect": "Option C is correct. Specialty products have unique characteristics or high brand identification for which a significant group of buyers is willing to make a special purchase effort. Buyers do not compare specialty goods extensively; they invest time to reach the specific dealer holding the coveted brand.",
      "whyDistractors": [
        "Option A is incorrect because convenience goods are low-cost, readily available everyday items.",
        "Option B is incorrect because staple goods are regular convenience purchases like bread or toothpaste.",
        "Option D is incorrect because unsought items are products that consumers actively avoid or only buy under distress."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Specialty Goods Characteristics"
    }
  },
  {
    "id": "SU8-24",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Goods Classification",
    "question": "Products such as funeral policies, blood donations to the SANBS, and home smoke detectors are goods that consumers typically do not think of purchasing until prompted by advertising or necessity. These are classified as:",
    "options": [
      "Specialty luxury goods",
      "Shopping goods",
      "Unsought goods",
      "Durable capital equipment"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Unsought goods are consumer products that the consumer either does not know about or knows about but does not normally consider buying.",
      "whyCorrect": "Option C is correct. Unsought goods are products that potential customers do not actively look for or anticipate needing until special circumstances or promotional pressure intervene (e.g. funeral policies, life insurance, reference encyclopedias, smoke detectors). They require substantial marketing communication and personal selling.",
      "whyDistractors": [
        "Option A is incorrect because specialty luxury goods are prestige items that consumers actively desire and plan for.",
        "Option B is incorrect because shopping goods involve comparative shopping for desired lifestyle items.",
        "Option D is incorrect because durable capital equipment refers to industrial machinery, not individual consumer products."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Unsought Goods"
    }
  },
  {
    "id": "SU8-25",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Product Life Cycle (PLC)",
    "question": "During which stage of the Product Life Cycle (PLC) does a firm typically experience negative or zero profits, slow sales growth, and exceptionally high promotional expenditures aimed at educating the market?",
    "options": [
      "Maturity stage",
      "Introduction stage",
      "Growth stage",
      "Decline stage"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The introduction stage is characterized by slow sales takeoff, negative or negligible profits, high launch costs, and informative promotional campaigns.",
      "whyCorrect": "Option B is correct. In the Introduction stage of the PLC, sales grow slowly because the product is new to the market. Profits are negative or very low due to the heavy expenses of product launch, distribution setup, and informative marketing communications aimed at building primary demand.",
      "whyDistractors": [
        "Option A is incorrect because the Maturity stage features peak sales, high accumulated profits, and fierce market saturation competition.",
        "Option C is incorrect because the Growth stage is characterized by rapidly rising sales, increasing profits, and economies of scale.",
        "Option D is incorrect because the Decline stage features dropping sales and eroding profits as consumers switch to newer replacements."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Product Life Cycle: Introduction Stage"
    }
  },
  {
    "id": "SU8-26",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Product Life Cycle (PLC)",
    "question": "A consumer packaged goods market exhibits saturated sales, fierce price competition among established brands, heavy reminder advertising, and frequent product modifications. What PLC stage is this market in?",
    "options": [
      "Introduction stage",
      "Growth stage",
      "Maturity stage",
      "R&D development stage"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "The maturity stage is characterized by peak sales, market saturation, intense price competition, product differentiation/modifications, and defensive advertising.",
      "whyCorrect": "Option C is correct. In the Maturity stage, sales reach their peak and market growth slows down. Almost all potential buyers have adopted the product. Overcapacity leads to fierce competition, price wars, increased advertising budgets to defend market share, and product line extensions.",
      "whyDistractors": [
        "Option A is incorrect because the introduction stage has few competitors and low total sales volume.",
        "Option B is incorrect because the growth stage features rapid market expansion with room for multiple competitors without bitter price cutting.",
        "Option D is incorrect because R&D occurs before commercial launch when sales are zero."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Product Life Cycle: Maturity Stage"
    }
  },
  {
    "id": "SU8-27",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Branding & Private Labels",
    "question": "Shoprite markets canned beans, sugar, and detergents under its own proprietary 'Ritebrand' label, while Pick n Pay uses 'No Name'. In marketing terminology, these are classified as:",
    "options": [
      "Manufacturer (national) brands",
      "Private (retailer / store) brands",
      "Generic untrademarked commodities",
      "Franchise licensing alliances"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Private brands (store brands or retailer brands) are owned and branded by retailers or wholesalers rather than the original manufacturer.",
      "whyCorrect": "Option B is correct. Private brands (also known as store brands, house brands, or private labels) are brands developed and owned by intermediaries such as retailers (e.g. Shoprite Ritebrand, Pick n Pay No Name, Woolworths Food). They allow retailers to offer lower prices while capturing higher profit margins.",
      "whyDistractors": [
        "Option A is incorrect because manufacturer brands (e.g. Koo, Kellogg's, Coca-Cola) are owned and marketed by the producing company.",
        "Option C is incorrect because private brands are legally registered trademarks owned by the retailer, not unbranded generic commodities.",
        "Option D is incorrect because licensing involves paying royalties to use a third-party character or logo, not internal house brand development."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Brand Decisions: Manufacturer vs Private Brands"
    }
  },
  {
    "id": "SU8-28",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Pricing Strategies for New Products",
    "question": "Apple launches a flagship iPhone at an exceptionally high introductory price to recover heavy R&D costs by capturing maximum revenue from enthusiastic early adopters before gradually reducing prices over time. This pricing strategy is:",
    "options": [
      "Market-penetration pricing",
      "Market-skimming pricing",
      "Predatory loss-leader pricing",
      "Cost-plus standard markup pricing"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Market-skimming sets a high initial price to skim maximum revenues layer-by-layer from segments willing to pay high prices for novelty.",
      "whyCorrect": "Option B is correct. Market-skimming pricing involves setting a high price for a new product to skim maximum revenues layer by layer from segments willing to pay the premium. The company makes fewer but more profitable sales, and subsequently lowers the price to capture more price-sensitive layers.",
      "whyDistractors": [
        "Option A is incorrect because market-penetration pricing sets a low initial price to penetrate the market deeply and quickly gain a large market share.",
        "Option C is incorrect because loss-leader pricing sells an item below cost to draw shoppers into a retail store.",
        "Option D is incorrect because cost-plus markup simply adds a standard percentage mark-up to the unit production cost."
      ],
      "reference": "BMAN121 SU8: Marketing Management — New Product Pricing: Skimming vs Penetration"
    }
  },
  {
    "id": "SU8-29",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Pricing Strategies for New Products",
    "question": "Capitec Bank entered the South African retail banking market by offering extremely low, transparent monthly administration fees and high interest on transaction balances to attract millions of price-sensitive customers away from traditional banks. This strategy represents:",
    "options": [
      "Market-skimming pricing",
      "Market-penetration pricing",
      "Prestige luxury pricing",
      "Price discrimination by location"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Market-penetration pricing sets a low initial price to attract a large number of buyers rapidly and win a dominant market share.",
      "whyCorrect": "Option B is correct. Under market-penetration pricing, a firm sets an attractive low price on a new product or service to penetrate the market quickly and deeply, attracting large volumes of customers and building economies of scale that erect barriers against competitors.",
      "whyDistractors": [
        "Option A is incorrect because skimming sets high initial prices to extract premium profits from early adopters.",
        "Option C is incorrect because prestige pricing sets high prices to signal exclusivity, status, and superior luxury.",
        "Option D is incorrect because price discrimination charges different prices to different customers based on geographic location."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Market Penetration Pricing Strategy"
    }
  },
  {
    "id": "SU8-30",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Pricing Tactics",
    "question": "A clothing retailer prices a jacket at R499.99 instead of R500.00, relying on consumers perceiving the item to be in the 'R400 range' rather than the 'R500 range'. This pricing tactic is known as:",
    "options": [
      "Cost-plus pricing",
      "Psychological (odd-even) pricing",
      "Dynamic auction pricing",
      "Transfer pricing"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Psychological (odd-even) pricing uses specific numerical price endings (such as .99 or .95) to create a psychological impression of a bargain or lower price tier.",
      "whyCorrect": "Option B is correct. Psychological pricing considers the psychology of prices rather than simply the economics. Odd pricing (e.g. R499.99 or R9.95) makes consumers view the product as significantly cheaper because the left-most digit anchors their mental perception of value.",
      "whyDistractors": [
        "Option A is incorrect because cost-plus pricing simply adds a profit margin percentage to the unit cost of production.",
        "Option C is incorrect because dynamic auction pricing adjusts prices continuously based on fluctuating bids.",
        "Option D is incorrect because transfer pricing is the internal accounting price charged when one corporate subsidiary sells to another."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Pricing Tactics: Psychological Pricing"
    }
  },
  {
    "id": "SU8-31",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Distribution Channels",
    "question": "A winemaker in Stellenbosch sells wine directly to visiting tourists at the estate's tasting room and via its own e-commerce website, without using any wholesalers or independent retailers. This distribution arrangement is:",
    "options": [
      "A direct distribution channel (zero-level)",
      "An indirect distribution channel (two-level)",
      "An intensive wholesale network",
      "A franchise distribution vertical"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "A direct channel of distribution moves goods directly from producer to final consumer without any commercial intermediaries.",
      "whyCorrect": "Option A is correct. A direct distribution channel (also termed a zero-level channel) has no intermediary levels. The manufacturer sells directly to the end consumer (e.g. winery cellar doors, farm stalls, corporate e-commerce websites, Dell direct orders).",
      "whyDistractors": [
        "Option B is incorrect because an indirect two-level channel includes two intermediaries (Producer -> Wholesaler -> Retailer -> Consumer).",
        "Option C is incorrect because intensive wholesale networks utilize many independent wholesale distributors.",
        "Option D is incorrect because franchise licensing uses contractual third-party franchisees to operate store outlets."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Distribution Channel Structure: Direct vs Indirect"
    }
  },
  {
    "id": "SU8-32",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Market Coverage Intensity",
    "question": "Coca-Cola aims to have its soft drinks available 'within an arm's reach of desire', placing cans in supermarkets, convenience stores, petrol stations, school tuckshops, and vending machines. What market coverage strategy is this?",
    "options": [
      "Exclusive distribution",
      "Selective distribution",
      "Intensive distribution",
      "Niche single-channel distribution"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Intensive distribution stocks products in as many retail and vending outlets as possible to maximize consumer exposure and convenience.",
      "whyCorrect": "Option C is correct. Intensive distribution is a strategy in which a producer places goods in as many retail outlets as possible. It is the mandatory distribution strategy for convenience goods and fast-moving consumer goods (FMCG) like soft drinks, bread, and chewing gum, where customers demand immediate availability.",
      "whyDistractors": [
        "Option A is incorrect because exclusive distribution gives only a very limited number of dealers the exclusive right to distribute the product in their territories (e.g. Ferrari).",
        "Option B is incorrect because selective distribution uses more than one, but fewer than all, of the intermediaries willing to carry the company's products (e.g. major home appliances).",
        "Option D is incorrect because niche single-channel distribution restricts access to a single narrow distributor."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Market Coverage Intensity: Intensive Distribution"
    }
  },
  {
    "id": "SU8-33",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Market Coverage Intensity",
    "question": "A luxury German sports car brand authorizes only two premier dealerships in Gauteng and one in the Western Cape to sell its vehicles, forbidding any other retailers from stocking the cars. What distribution coverage strategy is this?",
    "options": [
      "Intensive distribution",
      "Selective distribution",
      "Exclusive distribution",
      "Mass retail distribution"
    ],
    "correctIndex": 2,
    "explanation": {
      "summary": "Exclusive distribution grants sole selling rights for an organization's products to a single intermediary or very few dealers in a defined geographic area.",
      "whyCorrect": "Option C is correct. Exclusive distribution severely limits the number of intermediaries. It is applied when the producer wants to maintain complete control over the service level, prestige branding, and retail pricing offered by dealers, typical of luxury automobiles and haute couture fashion.",
      "whyDistractors": [
        "Option A is incorrect because intensive distribution seeks maximum retail outlet saturation for everyday convenience goods.",
        "Option B is incorrect because selective distribution uses several qualified retailers in an area rather than strictly one or two exclusive agents.",
        "Option D is incorrect because mass retail distribution places goods in high-volume supermarket chains."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Exclusive Distribution Strategy"
    }
  },
  {
    "id": "SU8-34",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Promotional Mix Elements",
    "question": "Which component of the promotional mix involves short-term incentives—such as 'Buy One Get One Free' (BOGO), scratch cards, seasonal discount vouchers, and cash-back competitions—to encourage the immediate purchase of a product?",
    "options": [
      "Public relations (PR)",
      "Sales promotion",
      "Personal selling",
      "Institutional advertising"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Sales promotion encompasses short-term incentives designed to motivate immediate trial, purchase, or volume consumption of a product or service.",
      "whyCorrect": "Option B is correct. While advertising provides a reason to buy, sales promotion provides an immediate incentive to buy. Sales promotions include consumer tools like discount coupons, samples, premiums, contests, rebates, point-of-purchase displays, and temporary bundle deals.",
      "whyDistractors": [
        "Option A is incorrect because public relations focuses on building corporate image, goodwill, and managing public news coverage, not immediate transaction coupons.",
        "Option C is incorrect because personal selling involves direct, interpersonal presentations by a salesforce to build relationships.",
        "Option D is incorrect because institutional advertising builds long-term reputation for an entire organization rather than offering temporary price incentives."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Promotional Mix: Sales Promotion"
    }
  },
  {
    "id": "SU8-35",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Promotional Mix Elements",
    "question": "A financial advisory firm sends skilled wealth advisors to meet face-to-face with high-net-worth clients to explain complex investment portfolios, answer questions, and build long-term advisory relationships. This promotional activity is:",
    "options": [
      "Personal selling",
      "Publicity",
      "Sales promotion",
      "Broadcast mass advertising"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Personal selling is direct interpersonal interaction between a sales representative and prospective buyers to make sales and build customer relationships.",
      "whyCorrect": "Option A is correct. Personal selling is the personal presentation by the firm's sales force for the purpose of making sales and building enduring client relationships. It is the most effective tool at later stages of the buying process, especially for high-value, complex, or customized business and financial offerings.",
      "whyDistractors": [
        "Option B is incorrect because publicity is unpaid media coverage secured through press releases and media interest.",
        "Option C is incorrect because sales promotion consists of short-term discounts, coupons, and temporary incentives.",
        "Option D is incorrect because broadcast advertising is non-personal mass communication via television or radio."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Personal Selling in the Promotional Mix"
    }
  },
  {
    "id": "SU8-36",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Public Relations (PR)",
    "question": "After an unexpected product contamination scare, a food manufacturer's executive team holds a national press conference, issues transparent laboratory reports to journalists, and sponsors community health clinics. In the promotional mix, this falls under:",
    "options": [
      "Direct marketing",
      "Public relations (PR) and corporate communication",
      "Point-of-sale merchandising",
      "Commercial price-skimming"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Public relations involves building good relations with company stakeholders, obtaining favorable publicity, and handling rumors, stories, and crisis events.",
      "whyCorrect": "Option B is correct. Public Relations (PR) is the function dedicated to fostering understanding and goodwill between an organization and its diverse publics (media, customers, government, shareholders). Crisis management, press conferences, press releases, and corporate social responsibility (CSR) programs are core PR activities.",
      "whyDistractors": [
        "Option A is incorrect because direct marketing uses direct mail, telemarketing, or email to elicit an immediate order or inquiry.",
        "Option C is incorrect because point-of-sale merchandising involves in-store shelf displays, banners, and signs.",
        "Option D is incorrect because price-skimming is a pricing strategy, not a communication or public relations response."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Public Relations and Crisis Management"
    }
  },
  {
    "id": "SU8-37",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Buying Decision Process",
    "question": "What is the correct sequential order of stages in the consumer buying decision-making process?",
    "options": [
      "Information search -> Need recognition -> Purchase decision -> Alternative evaluation -> Post-purchase evaluation",
      "Need (problem) recognition -> Information search -> Evaluation of alternatives -> Purchase decision -> Post-purchase evaluation",
      "Alternative evaluation -> Need recognition -> Purchase decision -> Information search -> Cognitive dissonance",
      "Purchase decision -> Need recognition -> Information search -> Alternative evaluation -> Satisfaction"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The 5-stage consumer buying decision process moves sequentially from Need Recognition to Information Search, Alternative Evaluation, Purchase Decision, and Post-purchase Evaluation.",
      "whyCorrect": "Option B is correct. The standard model of consumer decision-making comprises five stages: 1. Need (problem) recognition (recognizing a difference between actual and desired state), 2. Information search (internal memory and external research), 3. Evaluation of alternatives (comparing brand attributes), 4. Purchase decision (buying the preferred alternative), and 5. Post-purchase evaluation (assessing satisfaction and dealing with dissonance).",
      "whyDistractors": [
        "Option A is incorrect because information search cannot occur before the consumer recognizes that a problem or need exists.",
        "Option C is incorrect because evaluating alternatives requires that alternatives have already been identified through information search.",
        "Option D is incorrect because purchasing occurs near the end of the process, not at the very beginning."
      ],
      "reference": "BMAN121 SU8: Marketing Management — The Consumer Buying Decision Process"
    }
  },
  {
    "id": "SU8-38",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Cognitive Dissonance",
    "question": "After signing a lease on an expensive luxury vehicle, a consumer experiences psychological discomfort, second-guessing whether they should have purchased a cheaper family SUV instead. In marketing and consumer behaviour, this post-purchase anxiety is termed:",
    "options": [
      "Perceptual defense",
      "Cognitive dissonance",
      "Subliminal perception",
      "Marketing myopia"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Cognitive dissonance is buyer discomfort or post-purchase anxiety caused by post-purchase conflict between chosen and forgone product alternatives.",
      "whyCorrect": "Option B is correct. Formulated by Leon Festinger, cognitive dissonance in marketing describes post-purchase psychological tension or anxiety experienced when a consumer faces doubts about whether they made the right choice, especially after a high-involvement, expensive purchase. Marketers counter this by sending reassuring follow-up letters, warranties, and confirmation messages.",
      "whyDistractors": [
        "Option A is incorrect because perceptual defense is the subconscious filtering out of information that threatens an individual's existing beliefs.",
        "Option C is incorrect because subliminal perception refers to processing stimuli below the threshold of conscious awareness.",
        "Option D is incorrect because marketing myopia is management's short-sighted focus on products rather than customer needs."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Post-Purchase Evaluation and Cognitive Dissonance"
    }
  },
  {
    "id": "SU8-39",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Consumer Behaviour Determinants",
    "question": "In Maslow's Hierarchy of Needs, an insurance company marketing vehicle safety airbags, comprehensive life insurance, and home burglar alarms is directly targeting which level of human need?",
    "options": [
      "Physiological needs",
      "Safety and security needs",
      "Social / belonging needs",
      "Self-actualization needs"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Safety needs encompass physical safety, economic security, protection from harm, and emotional stability.",
      "whyCorrect": "Option B is correct. In Abraham Maslow's hierarchy of needs, once basic physiological survival needs (food, water, shelter) are met, individuals seek safety and security (physical protection, job security, health, insurance against loss). Insurance products and vehicle safety devices directly appeal to this second tier.",
      "whyDistractors": [
        "Option A is incorrect because physiological needs are fundamental biological drives like food, water, sleep, and warmth.",
        "Option C is incorrect because social/belonging needs involve love, affection, friendship, and group acceptance.",
        "Option D is incorrect because self-actualization is the highest need level, focusing on realizing one's full personal potential and self-development."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Maslow's Hierarchy of Needs in Consumer Behaviour"
    }
  },
  {
    "id": "SU8-40",
    "studyUnit": "SU8",
    "unitTitle": "Study Unit 8: Marketing Management",
    "topic": "Social Influences on Consumer Behaviour",
    "question": "A teenager decides to purchase a specific brand of designer sneakers primarily because a celebrated professional soccer star wears them and their close circle of school friends all wear the same brand. In consumer behaviour, these influencing social groups are known as:",
    "options": [
      "Reference groups",
      "Statutory councils",
      "Administrative committees",
      "Cultural monopolies"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Reference groups are social groups (membership groups, aspirational groups) that serve as direct or indirect points of comparison and influence in shaping a person's attitudes and behavior.",
      "whyCorrect": "Option A is correct. Reference groups have a direct (face-to-face) or indirect influence on a person's attitudes, values, and purchasing behavior. They include primary membership groups (family, peer groups, friends) and aspirational groups (celebrities, sports stars that the consumer aspires to emulate).",
      "whyDistractors": [
        "Option B is incorrect because statutory councils are legal or governmental regulatory bodies.",
        "Option C is incorrect because administrative committees are formal organizational governance bodies.",
        "Option D is incorrect because 'cultural monopolies' is not a marketing or consumer behaviour concept."
      ],
      "reference": "BMAN121 SU8: Marketing Management — Reference Groups and Social Influences on Consumer Behaviour"
    }
  },
  {
    "id": "SU9-01",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Financial Objectives",
    "question": "What is universally considered the primary, long-term strategic objective of financial management in a private enterprise?",
    "options": [
      "Maximising total gross sales revenue in the immediate quarter",
      "Maximising the long-term wealth of the owners (shareholders) by increasing the value of the firm",
      "Minimising corporate tax payments through aggressive accounting write-downs",
      "Maintaining 100% of all company assets in liquid cash balances"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The ultimate objective of financial management is to maximize shareholder wealth over the long term, reflected in firm valuation and share price.",
      "whyCorrect": "Option B is correct. While businesses pursue intermediate goals such as profit, liquidity, and solvency, the primary financial management objective is the maximisation of owner/shareholder wealth. This means making investment, financing, and asset management decisions that sustainably increase the market value of the business.",
      "whyDistractors": [
        "Option A is incorrect because maximising short-term sales revenue can occur at the expense of profitability, margins, and cash flow.",
        "Option C is incorrect because tax management is an operational administrative responsibility, not the core strategic goal of financial management.",
        "Option D is incorrect because keeping 100% in cash destroys profitability due to inflation and lack of return on productive assets."
      ],
      "reference": "BMAN121 SU9: Financial Management — The Primary Objective of Financial Management"
    }
  },
  {
    "id": "SU9-02",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Liquidity vs Solvency",
    "question": "A construction company holds R50 million in heavy equipment and real estate (total assets exceed total liabilities by R30 million), but has zero cash in its bank account and is unable to pay its weekly employee wages or settle a R200,000 supplier invoice due today. This firm is:",
    "options": [
      "Insolvent but liquid",
      "Solvent but illiquid",
      "Both insolvent and illiquid",
      "Operating at peak working capital efficiency"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Solvency means total assets exceed total liabilities; liquidity means having sufficient cash or near-cash to settle short-term debts as they become due.",
      "whyCorrect": "Option B is correct. The company is 'solvent' because its total assets (R50m) comfortably exceed its total liabilities (positive net worth of R30m). However, it is 'illiquid' because it lacks ready cash or near-cash current assets to meet its immediate, maturing short-term financial obligations.",
      "whyDistractors": [
        "Option A is incorrect because it inverts the definitions: the firm has assets exceeding debt (solvent), but cannot pay immediate bills (illiquid).",
        "Option C is incorrect because insolvency only occurs when total liabilities exceed total assets.",
        "Option D is incorrect because failing to meet payroll and immediate supplier debts represents a critical liquidity crisis, not working capital efficiency."
      ],
      "reference": "BMAN121 SU9: Financial Management — Distinction Between Solvency and Liquidity"
    }
  },
  {
    "id": "SU9-03",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Core Financial Principles",
    "question": "The foundational financial principle stating that investors demand a higher expected rate of return as compensation when committing capital to ventures with greater uncertainty and potential volatility is:",
    "options": [
      "The Cost-Benefit Principle",
      "The Risk-Return Trade-Off Principle",
      "The Time Value of Money Principle",
      "The Accrual Matching Principle"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The risk-return principle dictates that higher risk must be compensated with higher expected returns.",
      "whyCorrect": "Option B is correct. The Risk-Return principle is central to finance: risk-averse investors will only undertake higher risk if compensated by a higher expected return. Conversely, low-risk investments (e.g. government treasury bills) yield lower returns.",
      "whyDistractors": [
        "Option A is incorrect because the cost-benefit principle states that an action should only be taken if its incremental benefits exceed its incremental costs.",
        "Option C is incorrect because the time value of money asserts that a rand received today is worth more than a rand in the future.",
        "Option D is incorrect because the matching principle is an accounting standard requiring expenses to be matched with the revenues they helped generate."
      ],
      "reference": "BMAN121 SU9: Financial Management — Core Financial Principles: Risk and Return"
    }
  },
  {
    "id": "SU9-04",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Core Financial Principles",
    "question": "Why is a sum of R10,000 received today worth more to a business than R10,000 to be received three years from today?",
    "options": [
      "Because statutory tax laws do not permit firms to record future revenue",
      "Because of the time value of money: money on hand today can earn interest, and future purchasing power is eroded by inflation",
      "Because long-term debtor accounts are prohibited under South African credit laws",
      "Because accounting rules classify all future money as bad debt"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Due to earning power (interest) and inflation, money available at the present time is worth more than the identical sum in the future.",
      "whyCorrect": "Option B is correct. The Time Value of Money principle recognizes that a rand today is worth more than a rand tomorrow because it can be invested to earn interest immediately, and future money is subject to inflation risk and uncertainty.",
      "whyDistractors": [
        "Option A is incorrect because tax laws recognize revenue timing, but this does not define the financial time value principle.",
        "Option C is incorrect because credit laws govern consumer credit agreements, not the concept of present value.",
        "Option D is incorrect because future receivables are recognized assets, not automatically written off as bad debt."
      ],
      "reference": "BMAN121 SU9: Financial Management — The Time Value of Money Principle"
    }
  },
  {
    "id": "SU9-05",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Financial Statements",
    "question": "Which financial statement provides a financial 'snapshot' of an enterprise's financial condition—showing its assets, liabilities, and owners' equity—at a specific point in time?",
    "options": [
      "The Income Statement (Statement of Comprehensive Income)",
      "The Balance Sheet (Statement of Financial Position)",
      "The Cash Budget",
      "The Value-Added Tax (VAT) Return"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The Balance Sheet reflects the financial position (Assets = Equity + Liabilities) of a business at a specific date.",
      "whyCorrect": "Option B is correct. The Balance Sheet (or Statement of Financial Position) details what a business owns (assets), what it owes to third parties (liabilities), and the residual interest belonging to shareholders (equity) as of a specific date (a static snapshot).",
      "whyDistractors": [
        "Option A is incorrect because the Income Statement measures operational performance (revenues, expenses, and net profit) over a period of time (dynamic movie).",
        "Option C is incorrect because a Cash Budget is an internal planning forecast of projected cash receipts and disbursements.",
        "Option D is incorrect because a VAT return is a statutory tax filing submitted to SARS."
      ],
      "reference": "BMAN121 SU9: Financial Management — The Balance Sheet Structure"
    }
  },
  {
    "id": "SU9-06",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Financial Statements",
    "question": "A retail business reports Sales Revenue of R1,000,000 and Cost of Sales of R600,000. Its operating expenses (rent, salaries, utility bills) total R250,000. What is the business's Gross Profit and Operating Profit?",
    "options": [
      "Gross Profit = R400,000; Operating Profit = R150,000",
      "Gross Profit = R150,000; Operating Profit = R400,000",
      "Gross Profit = R600,000; Operating Profit = R350,000",
      "Gross Profit = R750,000; Operating Profit = R100,000"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Gross Profit = Sales Revenue - Cost of Sales; Operating Profit = Gross Profit - Operating Expenses.",
      "whyCorrect": "Option A is correct. Calculations: 1. Gross Profit = Sales Revenue (R1,000,000) - Cost of Sales (R600,000) = R400,000. 2. Operating Profit = Gross Profit (R400,000) - Operating Expenses (R250,000) = R150,000.",
      "whyDistractors": [
        "Option B is incorrect because it reverses Gross Profit and Operating Profit.",
        "Option C is incorrect because R600,000 is the Cost of Sales, not the Gross Profit.",
        "Option D is incorrect because R750,000 subtracts operating expenses directly from sales without calculating cost of sales correctly."
      ],
      "reference": "BMAN121 SU9: Financial Management — Income Statement Calculations"
    }
  },
  {
    "id": "SU9-07",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Liquidity Ratios",
    "question": "An enterprise has Current Assets of R600,000 and Current Liabilities of R300,000. What is its Current Ratio, and how is it interpreted?",
    "options": [
      "0.50:1 — The business has insufficient current assets to cover its short-term debts",
      "2.00:1 — The business possesses R2.00 of current assets for every R1.00 of short-term liabilities",
      "1.80:1 — The business is exceeding standard solvency gearing limits",
      "3.00:1 — The business has excessive inventory stockpiles"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Current Ratio = Current Assets / Current Liabilities. A ratio of 2:1 indicates R2 of current assets for every R1 of short-term obligations.",
      "whyCorrect": "Option B is correct. Current Ratio = Current Assets / Current Liabilities = R600,000 / R300,000 = 2.00:1. This standard liquidity ratio indicates that the firm possesses R2.00 in liquid resources for every R1.00 of current debt maturing within the year, representing a healthy liquidity cushion.",
      "whyDistractors": [
        "Option A is incorrect because 0.50:1 is the inverse calculation (R300,000 / R600,000).",
        "Option C is incorrect because 1.80:1 is an arithmetic error, and current ratio measures liquidity, not debt gearing.",
        "Option D is incorrect because 3.00:1 is an arithmetic calculation error."
      ],
      "reference": "BMAN121 SU9: Financial Management — Liquidity Ratios: Current Ratio"
    }
  },
  {
    "id": "SU9-08",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Liquidity Ratios",
    "question": "A retail firm has Current Assets of R500,000 (comprising R100,000 cash, R150,000 debtors, and R250,000 inventory). Its Current Liabilities are R250,000. What is its Acid-Test (Quick) Ratio?",
    "options": [
      "2.00:1",
      "1.00:1",
      "0.50:1",
      "1.60:1"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Acid-Test Ratio = (Current Assets - Inventory) / Current Liabilities. Inventory is excluded because it is the least liquid current asset.",
      "whyCorrect": "Option B is correct. Acid-Test (Quick) Ratio = (Current Assets - Inventory) / Current Liabilities = (R500,000 - R250,000) / R250,000 = R250,000 / R250,000 = 1.00:1. This benchmark ratio shows that the firm has exactly R1.00 in quick assets to cover every R1.00 of current liabilities.",
      "whyDistractors": [
        "Option A is incorrect because 2.00:1 is the unadjusted Current Ratio (R500,000 / R250,000) that mistakenly includes inventory.",
        "Option C is incorrect because 0.50:1 only considers cash (R100,000 / R250,000) and ignores debtors.",
        "Option D is incorrect because 1.60:1 is an arithmetic calculation error."
      ],
      "reference": "BMAN121 SU9: Financial Management — Liquidity Ratios: The Acid-Test (Quick) Ratio"
    }
  },
  {
    "id": "SU9-09",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Solvency & Debt Ratios",
    "question": "A company has Total Assets of R2,000,000 and Total Debt (liabilities) of R1,200,000. What is its Debt Ratio, and what financial risk does a high debt ratio indicate?",
    "options": [
      "40% — Low financial leverage and zero bankruptcy risk",
      "60% — High financial leverage indicating that 60% of assets are funded by creditors, increasing vulnerability to interest rate increases",
      "166% — Severe insolvency requiring immediate judicial liquidation",
      "25% — Optimal balance sheet capitalization"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Debt Ratio = Total Debt / Total Assets. A higher ratio indicates higher financial leverage and greater risk of financial distress during downturns.",
      "whyCorrect": "Option B is correct. Debt Ratio = Total Debt / Total Assets = R1,200,000 / R2,000,000 = 0.60 or 60%. This shows that 60% of the firm's assets are financed through borrowed debt capital. High debt gearing increases fixed interest commitments, making the firm vulnerable to rising interest rates or drops in sales.",
      "whyDistractors": [
        "Option A is incorrect because 40% represents the owners' equity portion (R800,000 / R2,000,000), not the debt ratio.",
        "Option C is incorrect because 166% is the inverse ratio (R2,000,000 / R1,200,000), and the firm is still solvent since assets exceed debt.",
        "Option D is incorrect because 25% is an arbitrary calculation error."
      ],
      "reference": "BMAN121 SU9: Financial Management — Debt Management and Gearing Ratios"
    }
  },
  {
    "id": "SU9-10",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Profitability Ratios",
    "question": "A manufacturer reports Sales Revenue of R5,000,000, Net Profit After Tax of R500,000, and Total Owners' Equity of R2,500,000. What is its Net Profit Margin and Return on Equity (ROE)?",
    "options": [
      "Net Profit Margin = 10%; Return on Equity = 20%",
      "Net Profit Margin = 20%; Return on Equity = 10%",
      "Net Profit Margin = 50%; Return on Equity = 5%",
      "Net Profit Margin = 5%; Return on Equity = 25%"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Net Profit Margin = (Net Profit / Sales) × 100%; Return on Equity (ROE) = (Net Profit / Equity) × 100%.",
      "whyCorrect": "Option A is correct. Calculations: 1. Net Profit Margin = (Net Profit / Sales) × 100 = (R500,000 / R5,000,000) × 100 = 10%. 2. Return on Equity (ROE) = (Net Profit / Equity) × 100 = (R500,000 / R2,500,000) × 100 = 20%.",
      "whyDistractors": [
        "Option B is incorrect because it inverts the two ratios.",
        "Option C is incorrect because 50% is an incorrect margin calculation.",
        "Option D is incorrect because 5% and 25% are mathematical errors."
      ],
      "reference": "BMAN121 SU9: Financial Management — Profitability Ratios: Net Profit Margin and ROE"
    }
  },
  {
    "id": "SU9-11",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Working Capital Concept",
    "question": "In financial management, how is 'Net Working Capital' strictly defined and calculated?",
    "options": [
      "Total Non-Current Assets minus Total Long-Term Debt",
      "Current Assets minus Current Liabilities",
      "Gross Sales Revenue minus Total Operational Expenses",
      "Total Owners' Equity plus Retained Earnings"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Net Working Capital is the difference between an enterprise's current assets and its current liabilities.",
      "whyCorrect": "Option B is correct. Net Working Capital = Current Assets - Current Liabilities. It represents the liquid buffer available to support day-to-day operations and settle short-term commitments. A positive net working capital indicates that the firm can comfortably finance its operational cycle.",
      "whyDistractors": [
        "Option A is incorrect because non-current assets minus long-term debt relates to long-term capital structure, not working capital.",
        "Option C is incorrect because sales revenue minus operating expenses measures operating profit, not working capital.",
        "Option D is incorrect because equity plus retained earnings represents shareholders' total book value, not working capital."
      ],
      "reference": "BMAN121 SU9: Financial Management — Net Working Capital Fundamentals"
    }
  },
  {
    "id": "SU9-12",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Working Capital Management",
    "question": "What core trade-off must a financial manager balance when managing working capital?",
    "options": [
      "The trade-off between customer service and corporate taxation",
      "The trade-off between liquidity and profitability",
      "The trade-off between employee recruitment and machine depreciation",
      "The trade-off between advertising spend and product packaging"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Working capital management balances liquidity (safety) against profitability (returns on productive investments).",
      "whyCorrect": "Option B is correct. Holding higher levels of working capital (cash and inventory) enhances liquidity and reduces the risk of default or stockouts, but lowers profitability because idle cash earns minimal return. Holding lower working capital boosts profitability but exposes the enterprise to severe liquidity risks.",
      "whyDistractors": [
        "Option A is incorrect because customer service and tax compliance are not the central variables in working capital balance.",
        "Option C is incorrect because recruitment and depreciation are operational and accounting issues, not the working capital trade-off.",
        "Option D is incorrect because advertising and packaging are marketing mix decisions."
      ],
      "reference": "BMAN121 SU9: Financial Management — The Liquidity vs Profitability Trade-Off"
    }
  },
  {
    "id": "SU9-13",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Management of Trade Receivables",
    "question": "A wholesaler grants trade credit terms of '2/10 net 30' to its retail clients. What do these commercial credit terms mean?",
    "options": [
      "The buyer pays 2% interest per month if the invoice is settled within 10 days",
      "The buyer may deduct a 2% cash discount if payment is made within 10 days; otherwise the full net invoice amount is due within 30 days",
      "The buyer must pay a 20% cash deposit upon order and the remaining balance over 10 to 30 weeks",
      "The seller delivers 2 free units for every 10 units purchased within 30 days"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "'2/10 net 30' offers a 2% cash settlement discount for payment within 10 days, with the full invoice due in 30 days.",
      "whyCorrect": "Option B is correct. In trade credit management, '2/10 net 30' is standard credit notation. The first number (2) specifies the percentage discount allowed, the second number (10) is the discount period in days, and 'net 30' indicates that the full invoice balance must be settled within 30 days if the cash discount is forgone.",
      "whyDistractors": [
        "Option A is incorrect because the 2% is a cash discount rewarding early payment, not a penalty interest charge.",
        "Option C is incorrect because it misinterprets standard trade credit notation as an installment lay-by contract.",
        "Option D is incorrect because it confuses a financial payment settlement discount with a promotional sales bonus."
      ],
      "reference": "BMAN121 SU9: Financial Management — Management of Debtors: Cash Discounts and Credit Terms"
    }
  },
  {
    "id": "SU9-14",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "The Cash Budget",
    "question": "What is the primary managerial function of a 'Cash Budget' in financial administration?",
    "options": [
      "To record historical taxable profits for submission to SARS",
      "To forecast anticipated cash receipts and cash disbursements over future time periods, identifying expected cash surpluses or deficits",
      "To evaluate the market value of company shares traded on the JSE",
      "To track physical machine maintenance hours on the factory floor"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The cash budget plans and monitors future cash inflows and outflows to anticipate shortfalls (requiring financing) or surpluses (for investment).",
      "whyCorrect": "Option B is correct. A cash budget is a detailed forecast of expected cash inflows (receipts from sales, debtor collections) and cash outflows (supplier payments, wages, rent, capital expenditures) over a future operational period (usually monthly). It enables the financial manager to arrange bank overdrafts before shortfalls occur or invest surplus cash.",
      "whyDistractors": [
        "Option A is incorrect because historical taxable profits are recorded in statutory financial statements and tax returns, not the operational cash budget.",
        "Option C is incorrect because JSE share valuations reflect stock market investor trading, not internal cash flow budgets.",
        "Option D is incorrect because factory machine maintenance is recorded in operations logs."
      ],
      "reference": "BMAN121 SU9: Financial Management — Purpose and Preparation of the Cash Budget"
    }
  },
  {
    "id": "SU9-15",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Cash Budget Calculations",
    "question": "A small business begins November with an opening cash balance of R25,000. During November, total cash receipts are R180,000 and total cash payments are R140,000. What is the business's Net Cash Flow for November and its Closing Cash Balance at the end of the month?",
    "options": [
      "Net Cash Flow = R40,000; Closing Cash Balance = R65,000",
      "Net Cash Flow = R65,000; Closing Cash Balance = R40,000",
      "Net Cash Flow = -R40,000; Closing Cash Balance = R15,000",
      "Net Cash Flow = R180,000; Closing Cash Balance = R205,000"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Net Cash Flow = Total Receipts - Total Payments; Closing Cash Balance = Opening Cash Balance + Net Cash Flow.",
      "whyCorrect": "Option A is correct. Calculations: 1. Net Cash Flow = Total Receipts (R180,000) - Total Payments (R140,000) = R40,000 surplus. 2. Closing Cash Balance = Opening Balance (R25,000) + Net Cash Flow (R40,000) = R65,000.",
      "whyDistractors": [
        "Option B is incorrect because it transposes Net Cash Flow and Closing Cash Balance.",
        "Option C is incorrect because receipts exceed payments, resulting in a positive R40,000 cash flow, not a deficit.",
        "Option D is incorrect because R180,000 represents total gross receipts before deducting R140,000 in cash payments."
      ],
      "reference": "BMAN121 SU9: Financial Management — Cash Budget Mechanical Calculations"
    }
  },
  {
    "id": "SU9-16",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Cost Classification",
    "question": "In cost-volume-profit analysis, which of the following is classified as a 'fixed cost' for a manufacturing facility?",
    "options": [
      "Direct raw materials consumed in production",
      "Factory building lease rental and permanent administrative salaries",
      "Sales commission paid per unit sold",
      "Packaging cartons for finished items"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Fixed costs remain constant in total irrespective of fluctuations in production output volume within the relevant range.",
      "whyCorrect": "Option B is correct. Fixed costs are operational expenses that do not vary with the volume of goods or services produced (e.g., factory building rent, executive salaries, municipal property rates, insurance). They must be paid regardless of whether production is zero or at full capacity.",
      "whyDistractors": [
        "Option A is incorrect because raw materials vary directly in proportion to the number of units manufactured (variable cost).",
        "Option C is incorrect because sales commission is paid directly per unit sold (variable cost).",
        "Option D is incorrect because packaging cartons are required for each additional unit produced (variable cost)."
      ],
      "reference": "BMAN121 SU9: Financial Management — Cost Behavior: Fixed vs Variable Costs"
    }
  },
  {
    "id": "SU9-17",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Contribution Margin",
    "question": "A manufacturer sells executive leather bags for R800 each. The variable cost to produce each bag is R500. What is the 'contribution margin per unit', and what is its financial significance?",
    "options": [
      "R1,300 — It reflects the combined operating margin of the firm",
      "R300 — Each unit sold contributes R300 toward covering total fixed costs and generating net profit",
      "R500 — It covers the total cost of production",
      "R0.62 — It represents the break-even production factor"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Contribution Margin per unit = Selling Price - Variable Cost per unit ($P - VC$). It contributes toward covering fixed costs.",
      "whyCorrect": "Option B is correct. Unit Contribution Margin = Selling Price ($P$) - Variable Cost ($VC$) = R800 - R500 = R300 per unit. Every bag sold generates R300 to first cover fixed operating overheads; once fixed costs are fully covered, each additional unit contributes R300 directly to net profit.",
      "whyDistractors": [
        "Option A is incorrect because R1,300 adds price and variable cost together, which is economically meaningless.",
        "Option C is incorrect because R500 is the variable cost, not the contribution margin.",
        "Option D is incorrect because R0.62 is the variable cost ratio (500/800), not the unit contribution margin."
      ],
      "reference": "BMAN121 SU9: Financial Management — The Unit Contribution Margin Concept"
    }
  },
  {
    "id": "SU9-18",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Break-Even Analysis",
    "question": "A boutique bakery has fixed operating costs of R60,000 per month. It sells celebration cakes for R300 each, and the variable ingredients and packaging cost per cake is R100. Using the formula $Q_{BE} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost}}$, how many cakes must the bakery sell per month to break even?",
    "options": [
      "200 cakes",
      "300 cakes",
      "600 cakes",
      "150 cakes"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Break-Even Quantity ($Q_{BE}$) = Fixed Costs / (Price - Variable Cost per unit).",
      "whyCorrect": "Option B is correct. Unit contribution margin = R300 - R100 = R200. Break-Even Quantity = Fixed Costs / Contribution Margin = R60,000 / R200 = 300 cakes per month. At 300 cakes, total revenue (300 × R300 = R90,000) exactly equals total costs (R60,000 fixed + R30,000 variable = R90,000), yielding zero profit and zero loss.",
      "whyDistractors": [
        "Option A is incorrect because 200 cakes results from dividing fixed costs by selling price alone (R60,000 / R300 = 200), ignoring variable costs.",
        "Option C is incorrect because 600 cakes results from dividing fixed costs by variable costs alone (R60,000 / R100 = 600).",
        "Option D is incorrect because 150 cakes is an arithmetic error."
      ],
      "reference": "BMAN121 SU9: Financial Management — Break-Even Quantity Calculation"
    }
  },
  {
    "id": "SU9-19",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Break-Even Analysis",
    "question": "What is the 'Margin of Safety' in break-even analysis?",
    "options": [
      "The statutory minimum cash reserve required by the South African Reserve Bank",
      "The excess of actual or budgeted sales over the break-even sales volume, representing the cushion before the firm incurs losses",
      "The insurance policy covering inventory damage in transit",
      "The maximum price increase allowable under national consumer legislation"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The margin of safety is the amount by which actual or projected sales exceed the break-even point, indicating how much sales can drop before losses occur.",
      "whyCorrect": "Option B is correct. Margin of Safety = Actual/Budgeted Sales - Break-Even Sales. It indicates the buffer or cushion by which sales can fall during economic downturns before the firm enters an operating deficit/loss position.",
      "whyDistractors": [
        "Option A is incorrect because bank reserve requirements are macroeconomic monetary policies, not break-even metrics.",
        "Option C is incorrect because insurance policies are commercial risk contracts.",
        "Option D is incorrect because price gouging limits are legal price regulations, not margin of safety."
      ],
      "reference": "BMAN121 SU9: Financial Management — Break-Even Analysis: Margin of Safety"
    }
  },
  {
    "id": "SU9-20",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Sources of Financing",
    "question": "Which of the following is correctly classified as a 'short-term source of debt financing' for a business?",
    "options": [
      "Issuing 20-year corporate debentures on the bond exchange",
      "A commercial bank overdraft facility",
      "Issuing new ordinary shares to institutional equity investors",
      "Securing a 30-year commercial mortgage bond on land and buildings"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Short-term debt financing must be repaid within one year; bank overdrafts and trade credit are primary examples.",
      "whyCorrect": "Option B is correct. A bank overdraft is a flexible short-term credit facility allowing a business to withdraw funds up to an approved limit on its current bank account to fund seasonal working capital fluctuations. It is repayable on demand or within 12 months.",
      "whyDistractors": [
        "Option A is incorrect because 20-year debentures are long-term debt instruments.",
        "Option C is incorrect because ordinary shares represent permanent equity capital, not short-term debt.",
        "Option D is incorrect because a 30-year mortgage bond is a long-term secured liability."
      ],
      "reference": "BMAN121 SU9: Financial Management — Sources of Financing: Short-Term Financing"
    }
  },
  {
    "id": "SU9-21",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Sources of Financing",
    "question": "A business experiencing a severe cash flow crunch sells its outstanding customer invoice debtors ledger to a specialized financial institution at a discount to obtain immediate cash. This financing practice is known as:",
    "options": [
      "Debt factoring",
      "Venture equity dilution",
      "Commercial mortgage underwriting",
      "Sale-and-leaseback"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "Factoring involves selling accounts receivable (debtors) to a financial institution (factor) at a discount for immediate cash liquidity.",
      "whyCorrect": "Option A is correct. Debt factoring is a financial arrangement where a firm sells its trade receivables (invoices owed by debtors) to a third-party commercial financial institution (a factor) at a discount, receiving immediate liquidity without waiting for 30, 60, or 90 days for customers to pay.",
      "whyDistractors": [
        "Option B is incorrect because venture equity dilution involves issuing ownership shares to venture capitalists.",
        "Option C is incorrect because mortgage underwriting assesses property loans.",
        "Option D is incorrect because sale-and-leaseback involves selling fixed property or equipment and immediately leasing it back."
      ],
      "reference": "BMAN121 SU9: Financial Management — Factoring of Debtors"
    }
  },
  {
    "id": "SU9-22",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Sources of Financing",
    "question": "What is the primary difference between 'equity capital' and 'debt capital' in financing a business?",
    "options": [
      "Debt capital provides ownership rights and voting power, whereas equity capital must be repaid on fixed dates with interest",
      "Equity capital represents permanent ownership funds provided by shareholders with no fixed maturity date, whereas debt capital consists of borrowed funds that legally mandate interest payments and principal repayment",
      "Equity capital is legally secured by fixed physical assets, whereas debt capital cannot be secured",
      "Debt capital is only available to registered non-profit organizations"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Equity capital provides ownership interest and carries no mandatory repayment obligation; debt capital is borrowed money that legally requires interest and principal repayment.",
      "whyCorrect": "Option B is correct. Equity capital (ordinary shares, retained earnings) represents owners' stake in the business; it does not have to be repaid and carries voting rights and residual profit dividends. Debt capital (loans, debentures) is borrowed money with fixed maturity dates that legally requires regular interest payments regardless of company profitability.",
      "whyDistractors": [
        "Option A is incorrect because it completely reverses the attributes of debt and equity.",
        "Option C is incorrect because debt capital is often secured by company assets (e.g. mortgage bonds), while ordinary equity is unsecured residual interest.",
        "Option D is incorrect because debt capital is the primary form of borrowing for commercial profit-seeking enterprises."
      ],
      "reference": "BMAN121 SU9: Financial Management — Equity Financing vs Debt Financing"
    }
  },
  {
    "id": "SU9-23",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Strategic Role of Human Resources",
    "question": "In contemporary business management, how has the conceptual view of Human Resource Management (HRM) transformed from the traditional 'personnel administration' model?",
    "options": [
      "HR is now viewed exclusively as a policing department focused on enforcing employee disciplinary codes",
      "Employees are recognized as valuable strategic assets and human capital that drive sustained competitive advantage, rather than merely as variable operating costs",
      "HR has replaced all executive management functions in setting corporate strategy",
      "HR focuses entirely on automating workforce roles to eliminate human staff"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Modern HRM views employees as strategic human capital essential for competitive advantage, moving beyond routine administrative record-keeping.",
      "whyCorrect": "Option B is correct. Traditional 'personnel management' treated employees as interchangeable costs and focused on administrative payroll and record-keeping. Modern strategic HRM treats people as a source of competitive advantage whose skills, knowledge, and motivation are strategic assets aligned with organizational goals.",
      "whyDistractors": [
        "Option A is incorrect because seeing HR as a punitive policing department is an outdated, negative view rejected by strategic HRM.",
        "Option C is incorrect because HR collaborates with executive leadership rather than replacing executive management.",
        "Option D is incorrect because HRM develops, retains, and engages human talent, not just substituting staff."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — The Strategic Role of HRM"
    }
  },
  {
    "id": "SU9-24",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Job Analysis: Description vs Specification",
    "question": "A recruitment document states: 'The position requires a BCom in Financial Accounting, 5 years of post-qualification auditing experience, advanced proficiency in SAP ERP, and strong analytical problem-solving skills.' This document is:",
    "options": [
      "A Job Description",
      "A Job Specification",
      "A Performance Appraisal Scale",
      "A Collective Bargaining Agreement"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A Job Specification lists the human qualifications, skills, experience, and competencies required to perform the job successfully.",
      "whyCorrect": "Option B is correct. In job analysis: 1. Job Description details the job itself (tasks, duties, responsibilities, reporting lines, physical working conditions). 2. Job Specification details the person required (qualifications, degrees, years of experience, technical skills, and personal attributes).",
      "whyDistractors": [
        "Option A is incorrect because a job description focuses on the duties, tasks, and daily responsibilities of the role itself.",
        "Option C is incorrect because a performance appraisal scale measures an existing employee's job output against targets.",
        "Option D is incorrect because a collective agreement is a negotiated labor contract between an employer and a trade union."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Job Analysis: Job Description vs Job Specification"
    }
  },
  {
    "id": "SU9-25",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Job Analysis: Description vs Specification",
    "question": "A document for a newly created role at an insurance company outlines: 'Job Title: Risk Officer; Reports to: Chief Risk Officer; Key Duties: Monitor daily underwriting limits, draft monthly compliance audit reports, and conduct branch safety audits.' This document is:",
    "options": [
      "A Job Specification",
      "A Job Description",
      "A Labour Relations Act notice",
      "An Induction checklist"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A Job Description is a written statement detailing what the jobholder does, how it is done, reporting relationships, and why it is done.",
      "whyCorrect": "Option B is correct. A Job Description outlines the title, purpose, tasks, key performance areas, reporting lines, and operational duties of a position. By contrast, a job specification outlines the qualifications and traits needed by the person who fills that role.",
      "whyDistractors": [
        "Option A is incorrect because a job specification outlines the candidate's qualifications, education, and skills.",
        "Option C is incorrect because an LRA notice relates to statutory labor disputes or union procedures.",
        "Option D is incorrect because an induction checklist tracks onboarding activities for new hires."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Job Description Attributes"
    }
  },
  {
    "id": "SU9-26",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Internal vs External Recruitment",
    "question": "Which of the following is a recognized advantage of 'internal recruitment' (promoting or transferring existing employees from within the company)?",
    "options": [
      "It injects completely new perspectives and innovative ideas from competitors",
      "It boosts employee morale, reduces recruitment and onboarding costs, and leverages known candidate performance records",
      "It prevents internal workplace rivalry and succession competition",
      "It automatically fulfills all Employment Equity designated group quotas"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Internal recruitment boosts workforce morale, reduces recruitment expenses, and utilizes known employee performance history.",
      "whyCorrect": "Option B is correct. Promoting from within incentivizes high performance, improves retention, lowers orientation and hiring expenses, and reduces the risk of hiring errors because management has direct observations of the candidate's past performance and cultural fit.",
      "whyDistractors": [
        "Option A is incorrect because bringing in fresh perspectives and external innovation is an advantage of external recruitment, not internal recruitment.",
        "Option C is incorrect because internal promotion can often foster workplace jealousy and internal rivalry among unsuccessful peers.",
        "Option D is incorrect because internal recruitment does not guarantee equity targets if existing internal staff lack representative demographic diversity."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Internal vs External Recruitment"
    }
  },
  {
    "id": "SU9-27",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Selection Process Steps",
    "question": "What is the typical sequential flow of steps in the formal employee selection process?",
    "options": [
      "Job offer -> Medical exam -> Initial screening -> Selection tests -> Interviews",
      "Initial screening of applications -> Selection tests / assessments -> Selection interviews -> Reference & background checks -> Medical check & formal job offer",
      "Interviews -> Job offer -> Selection tests -> Advertising vacancy -> Induction",
      "Induction -> Job specification -> Screening -> Employment contract"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The selection process screens applicants through sequential hurdles: application review, testing, interviewing, reference checks, and final offer.",
      "whyCorrect": "Option B is correct. Selection systematically screens candidates: 1. Initial application screening (filtering against job specification minimums), 2. Testing/competency assessments, 3. In-depth interviews, 4. Background and reference checks, 5. Medical examination (where legally permissible and job-relevant) and formal job offer.",
      "whyDistractors": [
        "Option A is incorrect because job offers occur at the conclusion of the selection process, not at the beginning.",
        "Option C is incorrect because advertising a vacancy is part of recruitment, which precedes selection.",
        "Option D is incorrect because induction happens after the candidate has been selected, hired, and contracted."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — The Employee Selection Process Steps"
    }
  },
  {
    "id": "SU9-28",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Employee Induction / Onboarding",
    "question": "What is the primary operational objective of conducting a comprehensive 'Induction' (onboarding) programme for newly appointed employees?",
    "options": [
      "To test whether the employee should be immediately dismissed without notice",
      "To reduce initial anxiety, socialize the employee into company culture and policies, and accelerate their integration into productive work",
      "To conduct formal collective bargaining negotiations with trade union shop stewards",
      "To calculate the employee's final retirement pension payout"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Induction introduces new employees to their job, colleagues, policies, and culture, reducing first-day stress and accelerating productivity.",
      "whyCorrect": "Option B is correct. Induction (or onboarding) familiarizes new employees with the organization's mission, values, workplace safety rules, physical layout, and fellow team members. A well-designed induction reduces first-day anxiety, minimizes early turnover, and accelerates time-to-productivity.",
      "whyDistractors": [
        "Option A is incorrect because induction is supportive onboarding, not a punitive trap for dismissal.",
        "Option C is incorrect because collective bargaining is a union-management labor relations process.",
        "Option D is incorrect because retirement pension payouts occur at the conclusion of a career, not upon entry."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Employee Induction and Socialization"
    }
  },
  {
    "id": "SU9-29",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Training vs Development",
    "question": "In human resources management, how is 'Training' formally distinguished from 'Development'?",
    "options": [
      "Training focuses on executive leadership skills for future roles, while development teaches immediate technical tasks to shop-floor workers",
      "Training focuses on acquiring specific practical skills for the employee's current job, whereas development focuses on broader learning for future career growth and leadership roles",
      "Training is mandated by the BCEA, whereas development is strictly prohibited under South African labor law",
      "Training is conducted exclusively off-the-job, while development is only conducted on-the-job"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Training provides specific skills for the current role; development prepares employees for future organizational responsibilities and broader career growth.",
      "whyCorrect": "Option B is correct. In HRM theory, training is short-term and job-specific, aimed at improving immediate performance in an employee's current role (e.g. learning new software or operating a machine). Development is long-term and career-oriented, developing conceptual, strategic, and leadership capabilities for future challenges.",
      "whyDistractors": [
        "Option A is incorrect because it reverses the definitions: current technical skills are training, while executive leadership is development.",
        "Option C is incorrect because South African law (e.g. Skills Development Act) encourages both training and development.",
        "Option D is incorrect because both training and development utilize on-the-job and off-the-job modalities."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Training vs Development Distinction"
    }
  },
  {
    "id": "SU9-30",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Performance Appraisal Biases",
    "question": "A manager rates an employee as 'outstanding' across all performance dimensions (punctuality, leadership, technical accuracy, client communication) simply because the employee gave an impressive presentation in the boardroom last week. This appraisal error is known as:",
    "options": [
      "The Recency error combined with the Halo effect",
      "The Central tendency bias",
      "The Strictness / Severity bias",
      "The Contrast error"
    ],
    "correctIndex": 0,
    "explanation": {
      "summary": "The Halo effect occurs when one positive trait influences overall ratings; the recency error over-weights recent events rather than performance across the full year.",
      "whyCorrect": "Option A is correct. The 'Halo effect' occurs when a supervisor's overall evaluation of an employee is unduly influenced by a single favorable characteristic or notable event. Over-weighting recent occurrences (last week's presentation) over the full annual appraisal period exemplifies the 'Recency error'.",
      "whyDistractors": [
        "Option B is incorrect because central tendency occurs when an evaluator rates all employees in the middle/average range of the scale.",
        "Option C is incorrect because strictness/severity occurs when an evaluator gives universally harsh, low ratings to everyone.",
        "Option D is incorrect because contrast error occurs when an employee is rated in comparison to preceding candidates rather than objective standards."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Performance Appraisal Biases and Errors"
    }
  },
  {
    "id": "SU9-31",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Performance Appraisal Biases",
    "question": "An evaluator wants to avoid workplace conflict, so they award a safe 'average' score (e.g. 3 out of 5) to all subordinates on their team, failing to reward star performers or identify underperformers. This appraisal bias is:",
    "options": [
      "Halo effect",
      "Central tendency bias",
      "Recency bias",
      "Horn effect"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Central tendency bias is the tendency of raters to evaluate all employees as average or near the midpoint of the rating scale.",
      "whyCorrect": "Option B is correct. Central tendency bias occurs when an evaluator avoids giving very high or very low scores, clustering all employee evaluations around the average midpoint. This distorts appraisal data and de-motivates top performers.",
      "whyDistractors": [
        "Option A is incorrect because the halo effect occurs when one positive trait inflates all other ratings.",
        "Option C is incorrect because recency bias over-emphasizes performance right before appraisal time.",
        "Option D is incorrect because the horn effect occurs when one negative trait causes an evaluator to rate an employee poorly on all dimensions."
      ],
      "reference": "BMAN121 SU9: Human Resource Management — Performance Appraisal: Central Tendency Bias"
    }
  },
  {
    "id": "SU9-32",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "BCEA Working Hours",
    "question": "Under the South African Basic Conditions of Employment Act (BCEA, Act 75 of 1997), what is the statutory maximum for 'ordinary hours of work' per week for an employee who works 5 days or fewer per week?",
    "options": [
      "40 hours per week (8 hours per day)",
      "45 hours per week (9 hours per day)",
      "50 hours per week (10 hours per day)",
      "35 hours per week (7 hours per day)"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The BCEA stipulates a maximum of 45 ordinary hours per week, which translates to 9 hours per day for employees working 5 days or fewer.",
      "whyCorrect": "Option B is correct. Under Section 9 of the BCEA, an employer may not require or permit an employee to work more than 45 ordinary hours in any week, and not more than 9 hours in any day if the employee works for five days or fewer in a week (or 8 hours per day if working more than 5 days a week).",
      "whyDistractors": [
        "Option A is incorrect because while 40 hours is a common collective bargaining goal, the statutory ceiling in the BCEA is 45 hours.",
        "Option C is incorrect because 50 hours exceeds the maximum legal ordinary working week in South Africa.",
        "Option D is incorrect because 35 hours is not a statutory ceiling under South African labor law."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — Basic Conditions of Employment Act (BCEA): Ordinary Working Hours"
    }
  },
  {
    "id": "SU9-33",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "BCEA Overtime Provisions",
    "question": "According to the BCEA, what is the maximum permissible overtime an employee may agree to work per week, and what is the minimum statutory payment rate for overtime work on ordinary working days?",
    "options": [
      "Maximum 5 hours per week; paid at 1.25 times the normal wage",
      "Maximum 10 hours per week; paid at minimum 1.5 times the ordinary hourly wage",
      "Maximum 20 hours per week; paid at 2.0 times the ordinary hourly wage",
      "Unlimited overtime; paid at standard flat normal hourly rates"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The BCEA caps overtime at 10 hours per week and mandates payment at 1.5 times (one-and-a-half times) the employee's normal wage.",
      "whyCorrect": "Option B is correct. Section 10 of the BCEA states that overtime may not exceed 10 hours per week (and not more than 12 hours total work in any single day). Overtime worked on ordinary days must be paid at at least one and a half times (1.5×) the employee's normal hourly wage (or compensated with paid time off).",
      "whyDistractors": [
        "Option A is incorrect because the overtime limit is 10 hours, and the statutory rate is 1.5x, not 1.25x.",
        "Option C is incorrect because overtime cannot legally exceed 10 hours per week under basic conditions.",
        "Option D is incorrect because overtime cannot be unlimited and paying flat standard rates violates the BCEA."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — BCEA: Overtime Limits and Remuneration Rates"
    }
  },
  {
    "id": "SU9-34",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "BCEA Leave Entitlements",
    "question": "What is the statutory minimum 'annual leave' entitlement mandated by the BCEA for a full-time employee in South Africa?",
    "options": [
      "10 consecutive calendar days per year",
      "21 consecutive days (or 15 working days for a 5-day worker) on full remuneration per annual leave cycle",
      "30 working days per year",
      "Unpaid leave determined at the employer's sole discretion"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The BCEA mandates at least 21 consecutive days (3 weeks, or 15 working days for a 5-day week) of paid annual leave per year.",
      "whyCorrect": "Option B is correct. Under Section 20 of the BCEA, an employee is entitled to at least 21 consecutive days of annual leave on full pay in respect of each annual leave cycle (which equates to 15 working days for an employee on a 5-day working week, or 1 day of leave for every 17 days worked).",
      "whyDistractors": [
        "Option A is incorrect because 10 consecutive days is below the statutory legal minimum.",
        "Option C is incorrect because 30 working days exceeds the statutory minimum requirement (though employers may offer it contractually).",
        "Option D is incorrect because annual leave is a statutory paid legal right, not unpaid discretionary leave."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — BCEA: Annual Leave Entitlements"
    }
  },
  {
    "id": "SU9-35",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "BCEA Sick Leave Entitlements",
    "question": "Under the BCEA, how many days of paid sick leave is an employee working a 5-day week entitled to over a 36-month (3-year) sick leave cycle?",
    "options": [
      "10 days",
      "30 days",
      "60 days",
      "12 days"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Over a 36-month cycle, an employee is entitled to paid sick leave equal to the number of days they would normally work in a 6-week period (30 days for a 5-day worker).",
      "whyCorrect": "Option B is correct. Section 22 of the BCEA provides that during every 36-month cycle, an employee is entitled to paid sick leave equal to the number of days they normally work in a 6-week period. For a 5-day per week worker, 6 weeks × 5 days = 30 days of paid sick leave.",
      "whyDistractors": [
        "Option A is incorrect because 10 days is only the entitlement for the first 6 months of employment (1 day per 26 days worked).",
        "Option C is incorrect because 60 days exceeds the standard 6-week statutory cycle.",
        "Option D is incorrect because 12 days is an incorrect annual assumption."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — BCEA: Sick Leave Provisions"
    }
  },
  {
    "id": "SU9-36",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "LRA Grounds for Fair Dismissal",
    "question": "Under the South African Labour Relations Act (LRA, Act 66 of 1995), what are the only three legally recognized substantive grounds for a fair dismissal?",
    "options": [
      "Union membership, personality clashes, and political affiliation",
      "Conduct of the employee, capacity of the employee, and operational requirements of the employer",
      "Refusing to work unpaid overtime, whistleblowing, and gender identity",
      "Absenteeism, age, and marital status"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Under Section 188 of the LRA, dismissal is only substantively fair if based on: 1. Conduct (misconduct), 2. Capacity (poor performance/ill health), or 3. Operational requirements (retrenchment).",
      "whyCorrect": "Option B is correct. The Labour Relations Act recognizes exactly three substantive grounds for dismissing an employee: 1. Misconduct (breach of company rules), 2. Incapacity (ill-health, injury, or poor work performance), and 3. Operational requirements of the employer (economic, technological, structural reasons / retrenchment).",
      "whyDistractors": [
        "Option A is incorrect because dismissing an employee for trade union membership or political views is automatically unfair under Section 187.",
        "Option C is incorrect because dismissing an employee for whistleblowing (protected disclosures) or refusing illegal overtime is automatically unfair.",
        "Option D is incorrect because age and marital status are prohibited discriminatory grounds under the Employment Equity Act and LRA."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — Labour Relations Act (LRA): Substantive Grounds for Fair Dismissal"
    }
  },
  {
    "id": "SU9-37",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "LRA Procedural Fairness",
    "question": "A warehouse manager catches a worker stealing power tools and immediately fires him on the spot, telling him never to return. Even though the worker was guilty of gross misconduct, why would the CCMA find this dismissal unfair?",
    "options": [
      "Because theft of company property is not a valid substantive reason for dismissal under the LRA",
      "Because the employer violated 'procedural fairness' by failing to conduct a fair disciplinary hearing, give notice of charges, and allow representation",
      "Because only the South African Police Service can terminate an employment contract",
      "Because workers have an absolute statutory immunity against dismissal during their first year"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "A dismissal must be both substantively fair (a valid reason) and procedurally fair (a fair inquiry, notification, time to prepare, representation).",
      "whyCorrect": "Option B is correct. Under the LRA, a dismissal must satisfy two tests: substantive fairness (valid reason) AND procedural fairness. Even if substantive guilt exists, firing an employee without formulating written charges, allowing reasonable preparation time, and holding a fair disciplinary hearing where the employee can present a defence and be represented by a colleague or shop steward renders the dismissal procedurally unfair.",
      "whyDistractors": [
        "Option A is incorrect because theft is gross misconduct and is a legitimate substantive reason for dismissal.",
        "Option C is incorrect because employers have full legal authority to terminate contracts following fair disciplinary procedures.",
        "Option D is incorrect because probation does not grant immunity from disciplinary action for theft."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — LRA: Procedural Fairness in Disciplinary Action"
    }
  },
  {
    "id": "SU9-38",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "LRA Dispute Resolution & CCMA",
    "question": "What is the primary statutory function of the 'Commission for Conciliation, Mediation and Arbitration' (CCMA) established under the LRA?",
    "options": [
      "To set corporate tax rates and audit business income statements",
      "To resolve workplace labor disputes through statutory conciliation and arbitration, promoting peaceful labor relations",
      "To manage national pension fund asset investments",
      "To prosecute criminal offenses committed in the workplace"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "The CCMA is an independent statutory dispute-resolution body facilitating conciliation and issuing binding arbitration awards in labor disputes.",
      "whyCorrect": "Option B is correct. The CCMA is an independent statutory body established by the LRA. Its primary role is to resolve labor disputes (unfair dismissals, unfair labor practices) first through conciliation (mediation) and, if unresolved, through binding arbitration, providing an accessible alternative to formal civil court litigation.",
      "whyDistractors": [
        "Option A is incorrect because corporate taxes are audited by SARS, not the CCMA.",
        "Option C is incorrect because pension fund investments are regulated by the Financial Sector Conduct Authority (FSCA).",
        "Option D is incorrect because criminal prosecution is the function of the National Prosecuting Authority (NPA)."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — The Role and Functions of the CCMA"
    }
  },
  {
    "id": "SU9-39",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Employment Equity Act (EEA)",
    "question": "Under the South African Employment Equity Act (EEA, Act 55 of 1998), which groups are legally designated for affirmative action measures to ensure equitable workplace representation?",
    "options": [
      "Only individuals holding recognized postgraduate university degrees",
      "Black people (defined as Africans, Coloureds, and Indians), women, and people with disabilities",
      "All foreign expatriate technical specialists working under corporate visas",
      "Senior executives and company directors earning above the BCEA threshold"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "Under the EEA, designated groups for affirmative action are Black people (Africans, Coloureds, Indians), women, and people with disabilities.",
      "whyCorrect": "Option B is correct. Section 1 of the Employment Equity Act explicitly defines 'designated groups' as Black people (a generic term including African, Coloured, and Indian South African citizens), women, and people with disabilities who have been historically disadvantaged. Designated employers must implement affirmative action measures to ensure their equitable representation in all occupational levels.",
      "whyDistractors": [
        "Option A is incorrect because affirmative action in SA is aimed at redressing historic systemic demographic disadvantages, not university degree holders.",
        "Option C is incorrect because foreign expatriates are explicitly excluded from designated groups under South African employment equity regulations.",
        "Option D is incorrect because the BCEA earnings threshold governs overtime exclusions, not affirmative action designated categories."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — Employment Equity Act: Designated Groups"
    }
  },
  {
    "id": "SU9-40",
    "studyUnit": "SU9",
    "unitTitle": "Study Unit 9: Financial & Human Resources Management",
    "topic": "Skills Development Act (SDA)",
    "question": "What is the primary role of 'Sector Education and Training Authorities' (SETAs) established under the Skills Development Act (SDA, Act 97 of 1998)?",
    "options": [
      "To enforce criminal sanctions on workers who engage in strike action",
      "To develop sector skills plans, disburse training grants from skills levies, and promote learnerships and national workplace skills development",
      "To register trademarks and patents for South African commercial inventors",
      "To regulate commercial banking interest rates and microloans"
    ],
    "correctIndex": 1,
    "explanation": {
      "summary": "SETAs develop sector skills plans, register learnerships, and disburse mandatory/discretionary training grants from the skills development levy.",
      "whyCorrect": "Option B is correct. SETAs are established under the Skills Development Act to identify skill shortages in specific economic sectors (e.g. Services SETA, BANKSETA, MerSETA), develop Sector Skills Plans, approve Workplace Skills Plans (WSPs), allocate training grant rebates funded by the 1% Skills Development Levy, and oversee registered learnerships.",
      "whyDistractors": [
        "Option A is incorrect because strikes and dispute enforcement are governed by the LRA and police/courts, not SETAs.",
        "Option C is incorrect because trademarks and patents are administered by CIPC (Companies and Intellectual Property Commission).",
        "Option D is incorrect because banking rates are set by the South African Reserve Bank and National Credit Regulator."
      ],
      "reference": "BMAN121 SU9: Labour Legislation — Skills Development Act and the Role of SETAs"
    }
  }
];

// Make available for both browser and Node/testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BMAN121_QUESTIONS };
}
