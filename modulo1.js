// =============================================================================
// FASE 1: CHILE EN LOS AÑOS 50 Y CRISIS DEL MODELO ISI (Claves 1 a 4)
// =============================================================================
window.MODULO_1 = {
  id: "m1",
  tag: "Fase 1 • Claves 1 a 4",
  title: "Años 50 y Crisis del Modelo ISI",
  desc: "Pobreza multidimensional, migración campo-ciudad, explosión urbana (1952–1970) y factores de la crisis del modelo ISI.",
  clavesCovered: [1, 2, 3, 4],
  steps: [
    // -------------------------------------------------------------------------
    // ETAPA 1: SÍNTESIS VISUAL (100% AUTOSUFICIENTE)
    // -------------------------------------------------------------------------
    {
      label: "Síntesis Visual",
      type: "training",
      intro: "Comprende los cuatro grandes procesos sociales, demográficos y económicos del Chile de los años 50 antes de pasar a la práctica.",
      items: [
        {
          tag: "Sociedad en los años 50",
          title: "Pobreza multidimensional y precariedad en Chile",
          text: "Durante la década de 1950, gran parte de la población chilena vivía en condiciones de profunda desigualdad y precariedad. Se habla de pobreza multidimensional porque no consistía únicamente en tener bajos ingresos, sino en la privación simultánea de múltiples condiciones básicas para vivir con dignidad.",
          bullets: [
            { label: "Salud y alimentación", text: "Alta tasa de mortalidad infantil, elevada desnutrición y acceso muy limitado a atención médica y hospitales." },
            { label: "Educación", text: "Altos índices de analfabetismo y baja escolaridad promedio, especialmente en zonas rurales y sectores populares." },
            { label: "Vivienda y servicios básicos", text: "Grave déficit habitacional, hacinamiento y falta de agua potable, alcantarillado y electricidad en conventillos y 'poblaciones callampa'." }
          ],
          highlight: "La pobreza multidimensional combina carencias simultáneas en salud, educación, alimentación y vivienda; no se reduce solo a la falta de dinero."
        },
        {
          tag: "Dinámica demográfica",
          title: "Migración del campo a la ciudad: causas y efectos urbanos",
          text: "A mediados del siglo XX se aceleró un masivo desplazamiento de población rural hacia ciudades como Santiago, Valparaíso y Concepción. Este éxodo combinó factores que expulsaban gente del campo con factores que la atraían a la ciudad.",
          flow: [
            {
              tag: "Expulsión rural",
              title: "Crisis y precariedad del campo",
              detail: "Estancamiento agrícola, sistema tradicional de inquilinaje con bajos salarios y escaso acceso a tierra, escuelas o salud rural."
            },
            {
              tag: "Atracción urbana",
              title: "Búsqueda de empleo y servicios",
              detail: "Expectativa de trabajo en las nuevas industrias urbanas y mayor acceso a educación y atención sanitaria."
            },
            {
              tag: "Impacto en las ciudades",
              title: "Colapso habitacional y de servicios",
              detail: "Déficit de viviendas, auge de poblaciones callampa y tomas de terreno, hacinamiento e insuficiencia de agua potable, alcantarillado, luz y transporte."
            }
          ],
          highlight: "La migración campo-ciudad ocurrió por el choque entre la precariedad rural y el polo industrial urbano, desbordando la capacidad habitacional y sanitaria de las ciudades."
        },
        {
          tag: "Análisis de datos urbanos",
          title: "Explosión urbana (1952–1970): ¿más ciudad significó mejor vida?",
          text: "Entre 1952 y 1970, Chile vivió una acelerada urbanización que lo consolidó como un país mayoritariamente urbano. Sin embargo, el crecimiento porcentual de habitantes en las ciudades es un dato cuantitativo que por sí solo no demuestra una mejora en la calidad de vida.",
          barChart: {
            title: "Evolución de la población urbana en Chile (1952–1970)",
            subtitle: "Porcentaje del total nacional viviendo en áreas urbanas",
            bars: [
              { label: "Censo 1952", value: "60,2% urbana", pct: 60.2 },
              { label: "Censo 1970", value: "75,1% urbana (+14,9 pts)", pct: 75.1 }
            ]
          },
          bullets: [
            { label: "Transformación demográfica", text: "En menos de dos décadas, 3 de cada 4 chilenos pasó a vivir en ciudades." },
            { label: "Límite del indicador", text: "La llegada de población creció más rápido que la construcción de casas, los empleos formales y la red de servicios básicos, ampliando la marginalidad urbana." }
          ],
          highlight: "Vivir en la ciudad no equivale automáticamente a mayor bienestar cuando la infraestructura, las viviendas y los empleos crecen más lento que la población."
        },
        {
          tag: "Economía • Modelo ISI",
          title: "El Modelo ISI: objetivo inicial y sus 5 factores de crisis",
          text: "Durante las décadas de 1940 y 1950, Chile y gran parte de América Latina aplicaron la Industrialización Sustitutiva de Importaciones (ISI). Aunque la industria liviana creció durante años, no se cumplieron sus metas de largo plazo: consolidar la industria pesada nacional, sustituir por completo las importaciones y lograr autosuficiencia económica.",
          bullets: [
            { label: "1. Reducción del presupuesto fiscal", text: "El Estado contó con menos recursos para sostener el impulso industrial." },
            { label: "2. Características del mercado interno", text: "Un mercado nacional estrecho y de bajo poder adquisitivo limitó la demanda de bienes industriales." },
            { label: "3. Dispar crecimiento agrícola vs. industrial", text: "El campo quedó estancado frente a la industria, obligando a importar alimentos." },
            { label: "4. Dependencia tecnológica y de bienes de capital", text: "La necesidad de comprar maquinaria e insumos tecnológicos en Europa y EE.UU. mantuvo la dependencia externa." },
            { label: "5. Espiral inflacionario", text: "El alza sostenida de precios deterioró los salarios y agudizó el desequilibrio." }
          ],
          highlight: "La crisis del ISI rompió el consenso político de mediados de siglo: la izquierda criticó la mayor dependencia externa (préstamos y subsidios) y la derecha acusó que el exceso de control estatal ahogó la iniciativa privada."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 2: CONEXIONES CAUSA -> EFECTO (FOCUS-RIGHT)
    // -------------------------------------------------------------------------
    {
      label: "Conexiones Causa–Efecto",
      type: "match",
      intro: "A la izquierda verás causas o procesos históricos y a la derecha sus consecuencias. Primero selecciona una causa a la izquierda; las demás se bloquearán para que te enfoques en conectar su efecto a la derecha.",
      title: "Conecta cada proceso de los años 50 con su consecuencia directa",
      leftTitle: "Causa o Proceso",
      rightTitle: "Consecuencia o Concepto",
      pairs: [
        {
          id: "p1",
          left: "Privación simultánea de vivienda digna, salud, educación y servicios básicos",
          right: "Pobreza multidimensional (va más allá de los bajos ingresos)",
          hint: "Busca el concepto que explica por qué la pobreza no se mide únicamente por la falta de dinero.",
          explain: "La pobreza multidimensional integra múltiples carencias: mortalidad infantil, desnutrición, analfabetismo, hacinamiento y falta de saneamiento."
        },
        {
          id: "p2",
          left: "Estancamiento agrícola, sistema de inquilinaje y atracción del empleo industrial",
          right: "Masiva migración del campo a la ciudad",
          hint: "¿Qué movimiento de población provocaron las malas condiciones rurales sumadas al atractivo industrial urbano?",
          explain: "Los factores de expulsión rural y atracción urbana explican el éxodo campesino de mediados del siglo XX."
        },
        {
          id: "p3",
          left: "Llegada acelerada de familias a las ciudades por sobre la oferta de casas e infraestructura",
          right: "Poblaciones callampa, tomas de terreno y colapso de servicios básicos",
          hint: "¿Qué ocurrió con las viviendas y los servicios cuando la población urbana creció más rápido que la infraestructura?",
          explain: "El crecimiento urbano desbordó la planificación y multiplicó los asentamientos precarios sin agua potable ni alcantarillado."
        },
        {
          id: "p4",
          left: "Necesidad de importar maquinaria, tecnología y bienes de capital de Europa y EE.UU.",
          right: "Frustración de la autosuficiencia e independencia económica del modelo ISI",
          hint: "Aunque Chile producía bienes livianos, seguía necesitando del extranjero para equipar sus fábricas.",
          explain: "Al no consolidarse la industria pesada nacional, persistió la dependencia tecnológica y financiera externa."
        },
        {
          id: "p5",
          left: "Dispar crecimiento entre un sector agrícola estancado y el sector industrial",
          right: "Insuficiencia productiva de alimentos y presión sobre la inflación",
          hint: "¿Qué ocurre en la economía cuando el campo no crece al ritmo de la población urbana e industrial?",
          explain: "El retraso agrícola obligó a importar alimentos y alimentó el alza sostenida del costo de la vida."
        },
        {
          id: "p6",
          left: "Agotamiento y crisis del modelo ISI a comienzos de la década de 1950",
          right: "Fractura política entre control estatal y liberalización del mercado",
          hint: "¿Qué debate entre sectores políticos se desató al quedar en evidencia los límites del modelo económico?",
          explain: "La izquierda denunció mayor dependencia externa y la derecha culpó a la excesiva intervención del Estado."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 3: CLASIFICADOR HISTÓRICO
    // -------------------------------------------------------------------------
    {
      label: "Clasificador",
      type: "classify",
      intro: "Te aparecerán hechos, cifras y procesos históricos de uno en uno. Tu misión es identificar a cuál de los tres grandes ámbitos pertenece cada elemento.",
      categories: [
        "Pobreza en los años 50",
        "Migración y Urbanización",
        "Crisis del Modelo ISI"
      ],
      items: [
        {
          statement: "Alta mortalidad infantil y desnutrición en sectores populares",
          correct: "Pobreza en los años 50",
          hint: "Es un indicador social que refleja precariedad sanitaria y alimentaria.",
          explain: "Mortalidad infantil y desnutrición son indicadores clave de la pobreza multidimensional de la década de 1950."
        },
        {
          statement: "Aumento de la población urbana del 60,2% (1952) al 75,1% (1970)",
          correct: "Migración y Urbanización",
          hint: "Compara dos censos sobre dónde habitaba la población chilena.",
          explain: "Muestra el acelerado paso hacia una sociedad mayoritariamente urbana impulsado por el éxodo rural."
        },
        {
          statement: "Dependencia de insumos tecnológicos y bienes de capital provenientes de Europa y EE.UU.",
          correct: "Crisis del Modelo ISI",
          hint: "Fue uno de los factores económicos que impidió consolidar la industria pesada nacional.",
          explain: "Esta necesidad de maquinaria extranjera impidió alcanzar la independencia económica que buscaba el ISI."
        },
        {
          statement: "Proliferación de 'poblaciones callampa', hacinamiento y tomas de terreno en la periferia",
          correct: "Migración y Urbanización",
          hint: "Fue la consecuencia habitacional directa de la llegada masiva de familias a las ciudades.",
          explain: "El déficit habitacional y los campamentos informales reflejaron la incapacidad urbana de absorber el rápido crecimiento."
        },
        {
          statement: "Mercado interno estrecho y reducción del presupuesto fiscal",
          correct: "Crisis del Modelo ISI",
          hint: "Fueron dos obstáculos estructurales que frenaron el financiamiento y la demanda industrial.",
          explain: "Un mercado interno limitado y menos recursos públicos impidieron sostener el crecimiento industrial."
        },
        {
          statement: "Elevadas tasas de analfabetismo y baja escolaridad promedio",
          correct: "Pobreza en los años 50",
          hint: "Apunta a la dimensión educativa dentro de la precariedad social de la época.",
          explain: "Confirma que la pobreza no era solo económica, sino también de acceso a la educación."
        },
        {
          statement: "Debate entre mantener control estatal o liberalizar la economía frente a la espiral inflacionaria",
          correct: "Crisis del Modelo ISI",
          hint: "Corresponde a la fractura política que surgió ante el desequilibrio del modelo económico.",
          explain: "El agotamiento del ISI dividió al país entre proyectos estatistas y propuestas de liberalización."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 4: ANÁLISIS HISTÓRICO (TIPO PAES)
    // -------------------------------------------------------------------------
    {
      label: "Análisis Histórico",
      type: "quiz",
      intro: "Ahora pondrás a prueba tu comprensión analítica interpretando datos, causas y posturas políticas en preguntas de selección múltiple con pistas deductivas.",
      items: [
        {
          question: "¿Por qué la pobreza en Chile durante la década de 1950 se describe como un fenómeno 'multidimensional'?",
          options: [
            "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
            "Porque afectaba únicamente a los habitantes de las zonas rurales del sur del país.",
            "Porque dependía exclusivamente de las variaciones del precio del cobre.",
            "Porque se medía solo a partir del salario mínimo de los obreros industriales."
          ],
          correct: "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
          hint: "Piensa en el prefijo 'multi-': involucra distintas dimensiones de la vida cotidiana, no solo dinero.",
          explain: "Abarcaba salud (mortalidad infantil), educación (analfabetismo), vivienda (hacinamiento) y falta de saneamiento."
        },
        {
          question: "¿Qué combinación explica mejor las causas de la migración del campo a la ciudad a mediados del siglo XX?",
          options: [
            "El estancamiento agrícola y la precariedad del inquilinaje, sumados a la expectativa de empleo industrial y servicios urbanos.",
            "La entrega gratuita de viviendas en el centro de Santiago para todos los campesinos.",
            "La prohibición legal de trabajar en la agricultura para trasladar la mano de obra a la capital.",
            "El cierre de las fábricas urbanas que empujó a las familias a mudarse al campo."
          ],
          correct: "El estancamiento agrícola y la precariedad del inquilinaje, sumados a la expectativa de empleo industrial y servicios urbanos.",
          hint: "Combina un factor de expulsión rural (condiciones del campo) con un factor de atracción urbana (trabajo y servicios).",
          explain: "La crisis rural empujaba a salir del campo mientras el desarrollo industrial urbano actuaba como foco de atracción."
        },
        {
          question: "¿Cuál fue una consecuencia directa de la migración campo-ciudad sobre las viviendas y servicios urbanos?",
          options: [
            "La agudización del déficit habitacional, el surgimiento de poblaciones callampa y la insuficiencia de agua potable y alcantarillado.",
            "La desaparición del hacinamiento gracias al exceso de casas disponibles.",
            "La caída en la demanda de transporte, hospitales y escuelas en las ciudades.",
            "El abandono de las capitales regionales por falta de habitantes."
          ],
          correct: "La agudización del déficit habitacional, el surgimiento de poblaciones callampa y la insuficiencia de agua potable y alcantarillado.",
          hint: "Piensa qué pasa cuando miles de familias llegan más rápido de lo que se construyen casas y redes sanitarias.",
          explain: "La infraestructura urbana colapsó, dando origen a asentamientos precarios sin servicios básicos."
        },
        {
          barChart: {
            title: "Población urbana en Chile (1952 vs. 1970)",
            subtitle: "Porcentaje del total nacional",
            bars: [
              { label: "1952", value: "60,2%", pct: 60.2 },
              { label: "1970", value: "75,1%", pct: 75.1 }
            ]
          },
          question: "La población urbana subió del 60,2% en 1952 al 75,1% en 1970. ¿Por qué estos datos NO permiten afirmar por sí solos que mejoró la calidad de vida?",
          options: [
            "Porque muestran dónde vivía la gente, pero ocultan la marginalidad urbana, el hacinamiento, el empleo informal y la falta de servicios.",
            "Porque demuestran que la población rural creció más rápido que la urbana.",
            "Porque el 75,1% corresponde solo a trabajadores agrícolas temporales.",
            "Porque el crecimiento de las ciudades garantiza automáticamente mejores salarios."
          ],
          correct: "Porque muestran dónde vivía la gente, pero ocultan la marginalidad urbana, el hacinamiento, el empleo informal y la falta de servicios.",
          hint: "Un dato sobre dónde vive la población no indica automáticamente en qué condiciones materiales vive.",
          explain: "El crecimiento demográfico superó la oferta de viviendas y servicios, expandiendo la pobreza urbana."
        },
        {
          question: "¿Cuál era el objetivo de largo plazo del modelo de Industrialización Sustitutiva de Importaciones (ISI)?",
          options: [
            "Consolidar una industria pesada nacional, sustituir las importaciones y alcanzar autosuficiencia e independencia económica.",
            "Eliminar las industrias locales para importar todos los bienes desde Europa.",
            "Privatizar todas las empresas estatales y suprimir los impuestos aduaneros.",
            "Limitar la economía exclusivamente a la exportación de productos agrícolas."
          ],
          correct: "Consolidar una industria pesada nacional, sustituir las importaciones y alcanzar autosuficiencia e independencia económica.",
          hint: "La sigla significa Industrialización Sustitutiva de Importaciones: fabricar en el país lo que antes se compraba afuera.",
          explain: "Aunque la industria liviana creció, los objetivos de industria pesada y autosuficiencia no se cumplieron."
        },
        {
          question: "¿Por qué la industria nacional bajo el modelo ISI no logró romper la dependencia económica externa?",
          options: [
            "Porque necesitaba seguir importando insumos tecnológicos y bienes de capital (maquinaria) desde Europa y Estados Unidos.",
            "Porque la población dejó de consumir productos manufacturados en los años 50.",
            "Porque la agricultura creció mucho más rápido que la industria.",
            "Porque el Estado acumuló un exceso de presupuesto fiscal sin uso."
          ],
          correct: "Porque necesitaba seguir importando insumos tecnológicos y bienes de capital (maquinaria) desde Europa y Estados Unidos.",
          hint: "Para producir en fábricas nacionales se necesitaban máquinas y tecnología que Chile no fabricaba.",
          explain: "La dependencia de tecnología y bienes de capital extranjeros fue uno de los factores clave de la crisis del ISI."
        },
        {
          question: "¿Qué posturas opuestas surgieron en Chile frente a la crisis del modelo ISI a inicios de los años 50?",
          options: [
            "La izquierda criticó que aumentó la dependencia externa; la derecha acusó que la excesiva intervención estatal ahogó la iniciativa privada.",
            "Ambos sectores acordaron mantener el modelo intacto sin modificaciones.",
            "La derecha propuso aumentar el control estatal, mientras la izquierda pidió liberar totalmente el mercado.",
            "Ambos sectores culparon únicamente a la baja población urbana."
          ],
          correct: "La izquierda criticó que aumentó la dependencia externa; la derecha acusó que la excesiva intervención estatal ahogó la iniciativa privada.",
          hint: "Cada sector diagnosticó el problema según su visión sobre el rol del Estado y la dependencia externa.",
          explain: "Esa fractura debilitó el consenso de los gobiernos radicales y dio paso a proyectos políticos opuestos en los años 60."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 5: TALLER DE ARGUMENTACIÓN HÍBRIDO (ORIENTACIÓN + BLOQUES + IA)
    // -------------------------------------------------------------------------
    {
      label: "Taller de Argumentación",
      type: "guided_writing",
      intro: "Aquí aprenderás a redactar respuestas de desarrollo completas. Antes de responder, verás por qué cada pregunta necesita una estructura distinta; podrás practicar armándola por bloques y luego redactarla con tus palabras evaluada por el Tutor IA.",
      items: [
        {
          claveId: 1,
          shortLabel: "1. Pobreza años 50",
          question: "¿Qué problemas caracterizaban la pobreza y la precariedad en Chile durante la década de 1950? Menciona tres indicadores y explica por qué la pobreza era multidimensional.",
          strategy: {
            typeName: "Definición + Evidencia + Concepto",
            whyThisStructure: "Esta pregunta tiene tres tareas: caracterizar el problema, respaldarlo con 3 indicadores concretos y explicar un concepto ('multidimensional'). Si solo nombras ejemplos sin definir el concepto al final, la respuesta queda incompleta.",
            blueprintSteps: [
              {
                stepTitle: "Panorama general",
                explanation: "Sitúa el problema de precariedad y desigualdad en el Chile de los años 50.",
                starter: "Durante la década de 1950, la precariedad en Chile se caracterizó por..."
              },
              {
                stepTitle: "Tres indicadores concretos",
                explanation: "Nombra evidencia de distintos ámbitos: salud, educación y vivienda/servicios.",
                starter: "Esto se reflejaba en indicadores como..."
              },
              {
                stepTitle: "Explicar 'multidimensional'",
                explanation: "Aclara que no era solo falta de dinero, sino privaciones simultáneas en varias áreas.",
                starter: "Por eso era una pobreza multidimensional, ya que no se reducía solo a..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Panorama general",
              prompt: "¿Qué inicio sitúa mejor el problema de la pobreza en Chile durante los años 50?",
              options: [
                "Durante la década de 1950, gran parte de la población chilena vivía en profunda desigualdad y precarias condiciones de vida.",
                "Durante la década de 1950, Chile superó por completo la desigualdad gracias al crecimiento de la industria pesada.",
                "En los años 50, los problemas sociales se limitaban únicamente a la falta de acceso a bienes de lujo."
              ],
              correct: "Durante la década de 1950, gran parte de la población chilena vivía en profunda desigualdad y precarias condiciones de vida.",
              hint: "Busca la afirmación que describe la realidad social de precariedad y desigualdad sin exagerar ni contradecir la época.",
              explain: "Un buen párrafo histórico comienza ubicando el periodo y planteando la idea central de forma directa."
            },
            {
              partLabel: "Parte 2 • Tres indicadores concretos",
              prompt: "¿Qué bloque entrega tres indicadores históricos variados y precisos?",
              options: [
                "Tres indicadores clave fueron la alta mortalidad infantil (junto a la desnutrición), el elevado analfabetismo y el grave déficit habitacional con falta de agua potable y alcantarillado.",
                "Los tres indicadores fueron el aumento del precio del cobre, la creación de fábricas livianas y el comercio con Europa.",
                "Un indicador importante fue que algunas personas tenían sueldos bajos."
              ],
              correct: "Tres indicadores clave fueron la alta mortalidad infantil (junto a la desnutrición), el elevado analfabetismo y el grave déficit habitacional con falta de agua potable y alcantarillado.",
              hint: "La pregunta pide 3 indicadores de pobreza y precariedad: busca el bloque que mencione salud, educación y vivienda.",
              explain: "Elegir indicadores de tres dimensiones distintas (salud, educación y vivienda) prepara automáticamente la explicación final."
            },
            {
              partLabel: "Parte 3 • Explicar la multidimensionalidad",
              prompt: "¿Qué cierre explica realmente por qué la pobreza era 'multidimensional'?",
              options: [
                "Por eso se entiende como multidimensional: no se reducía únicamente a tener bajos ingresos, sino a sufrir privaciones simultáneas en salud, educación, alimentación y vivienda digna.",
                "Era multidimensional porque ocurrió en muchas regiones distintas del país al mismo tiempo.",
                "Era multidimensional porque los indicadores se medían en porcentajes censales."
              ],
              correct: "Por eso se entiende como multidimensional: no se reducía únicamente a tener bajos ingresos, sino a sufrir privaciones simultáneas en salud, educación, alimentación y vivienda digna.",
              hint: "Recuerda: 'multidimensional' contrasta 'solo falta de dinero' frente a 'múltiples necesidades básicas insatisfechas a la vez'.",
              explain: "Con este cierre conectas los ejemplos anteriores con el concepto exacto que exigía la pregunta."
            }
          ],
          aiRubric: [
            "Caracteriza la precariedad y desigualdad en Chile durante la década de 1950.",
            "Menciona al menos tres indicadores concretos (ej. mortalidad infantil, desnutrición, analfabetismo, déficit habitacional, hacinamiento o falta de agua potable/alcantarillado).",
            "Explica claramente por qué era multidimensional (no se limitaba solo a falta de dinero/ingresos, sino a privaciones simultáneas en distintas dimensiones básicas)."
          ],
          referenceSummary: "En Chile en los años 50 existía profunda desigualdad y precariedad. Indicadores: alta mortalidad infantil, desnutrición, analfabetismo/baja escolaridad, déficit habitacional, hacinamiento, conventillos y poblaciones callampa sin agua potable ni alcantarillado. Era multidimensional porque iba más allá de bajos ingresos e implicaba privación simultánea en salud, educación, alimentación y vivienda."
        },
        {
          claveId: 2,
          shortLabel: "2. Migración campo–ciudad",
          question: "Explica dos causas de la migración del campo a la ciudad y dos consecuencias que tuvo para las viviendas y los servicios urbanos.",
          strategy: {
            typeName: "Estructura Causa ➔ Consecuencia (2 x 2)",
            whyThisStructure: "Cuando una pregunta pide causas y consecuencias, el error más común es mezclarlas en una sola frase. Separar claramente 'por qué ocurrió' (causas) y luego usar un conector para explicar 'qué provocó' (viviendas y servicios) hace tu respuesta mucho más clara.",
            blueprintSteps: [
              {
                stepTitle: "Dos causas (campo y ciudad)",
                explanation: "Combina una razón de expulsión rural con una de atracción urbana.",
                starter: "La migración del campo a la ciudad fue causada, por un lado, por... y, por otro, por..."
              },
              {
                stepTitle: "Consecuencia en viviendas",
                explanation: "Conecta con el déficit habitacional, hacinamiento o poblaciones callampa.",
                starter: "Como consecuencia, en el ámbito de la vivienda..."
              },
              {
                stepTitle: "Consecuencia en servicios urbanos",
                explanation: "Explica el colapso o insuficiencia de agua potable, alcantarillado, luz o salud.",
                starter: "Asimismo, respecto a los servicios urbanos..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Dos causas diferenciadas",
              prompt: "¿Qué bloque explica correctamente dos causas de la migración campo-ciudad?",
              options: [
                "Entre sus causas estuvieron el estancamiento agrícola y la precariedad laboral del inquilinaje en el campo, sumados a la expectativa de encontrar empleo industrial y mejores servicios en la ciudad.",
                "Sus causas fueron la abundancia de viviendas gratuitas en la periferia y el cierre total de las haciendas.",
                "Ocurrió simplemente porque los campesinos querían conocer ciudades más grandes."
              ],
              correct: "Entre sus causas estuvieron el estancamiento agrícola y la precariedad laboral del inquilinaje en el campo, sumados a la expectativa de encontrar empleo industrial y mejores servicios en la ciudad.",
              hint: "Busca la opción que explique tanto qué expulsaba a la gente del campo como qué la atraía a la ciudad.",
              explain: "Combinar expulsión rural + atracción urbana demuestra comprensión multicausal del proceso."
            },
            {
              partLabel: "Parte 2 • Consecuencia en viviendas",
              prompt: "¿Qué bloque explica de forma precisa el impacto en las viviendas?",
              options: [
                "Como consecuencia, se agudizó el déficit habitacional en las ciudades, generando hacinamiento, tomas de terreno y el auge de las 'poblaciones callampa'.",
                "Como consecuencia, todas las familias migrantes recibieron casas sólidas en el centro urbano.",
                "Como consecuencia, disminuyó la necesidad de construir viviendas en Santiago y Valparaíso."
              ],
              correct: "Como consecuencia, se agudizó el déficit habitacional en las ciudades, generando hacinamiento, tomas de terreno y el auge de las 'poblaciones callampa'.",
              hint: "Piensa en el efecto habitacional directo de recibir miles de familias sin planificación previa.",
              explain: "Usar conceptos históricos precisos ('déficit habitacional', 'poblaciones callampa', 'tomas de terreno') fortalece tu respuesta."
            },
            {
              partLabel: "Parte 3 • Consecuencia en servicios urbanos",
              prompt: "¿Qué cierre responde específicamente sobre los servicios urbanos?",
              options: [
                "Además, los servicios urbanos resultaron insuficientes para la nueva población, provocando graves carencias de agua potable, alcantarillado, electricidad, transporte y atención de salud.",
                "Además, el modelo ISI redujo el presupuesto fiscal de las fábricas pesadas.",
                "Además, el campo aumentó rápidamente su producción de alimentos."
              ],
              correct: "Además, los servicios urbanos resultaron insuficientes para la nueva población, provocando graves carencias de agua potable, alcantarillado, electricidad, transporte y atención de salud.",
              hint: "Asegúrate de nombrar servicios concretos de la ciudad (agua, alcantarillado, luz, salud o transporte).",
              explain: "Así dejas respondidas todas las partes de la pregunta sin confundir temas económicos con servicios urbanos."
            }
          ],
          aiRubric: [
            "Explica al menos dos causas de la migración campo-ciudad (ej. crisis/estancamiento agrícola, inquilinaje, búsqueda de empleo industrial y acceso a servicios urbanos).",
            "Explica una consecuencia concreta sobre las viviendas (déficit habitacional, hacinamiento, poblaciones callampa o tomas de terreno).",
            "Explica una consecuencia concreta sobre los servicios urbanos (insuficiencia/colapso de agua potable, alcantarillado, electricidad, salud o transporte)."
          ],
          referenceSummary: "Causas migración campo-ciudad: estancamiento agrícola, bajos salarios y precariedad del sistema de inquilinaje en el campo (expulsión) + expectativa de empleo en las industrias del modelo ISI y mayor acceso a educación/salud en ciudades (atracción). Consecuencias viviendas: déficit habitacional, hacinamiento, tomas de terreno y poblaciones callampa. Consecuencias servicios urbanos: infraestructura insuficiente y falta de agua potable, alcantarillado, electricidad, transporte y atención médica."
        },
        {
          claveId: 3,
          shortLabel: "3. Urbanización 1952–1970",
          question: "La población urbana aumentó del 60,2% en 1952 al 75,1% en 1970. ¿Qué transformación muestran estos datos y por qué no permiten afirmar, por sí solos, que mejoró la calidad de vida?",
          strategy: {
            typeName: "Interpretación de Dato + Giro Crítico",
            whyThisStructure: "Las preguntas con porcentajes exigen dos movimientos distintos: primero leer qué cambio objetivo muestra el número, y luego usar un conector de contraste ('Sin embargo...') para explicar lo que el número NO muestra.",
            blueprintSteps: [
              {
                stepTitle: "Lectura del dato",
                explanation: "Traduce el salto del 60,2% al 75,1% en un proceso histórico (urbanización acelerada).",
                starter: "Estos datos reflejan un acelerado proceso de urbanización, ya que..."
              },
              {
                stepTitle: "Giro crítico (límite del dato)",
                explanation: "Señala que el porcentaje solo indica localización geográfica, no bienestar.",
                starter: "Sin embargo, por sí solos no permiten afirmar que mejoró la calidad de vida porque..."
              },
              {
                stepTitle: "Respaldo histórico",
                explanation: "Menciona problemas reales que vivieron los nuevos habitantes urbanos.",
                starter: "De hecho, en la práctica miles de familias urbanas enfrentaron..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Lectura de la transformación",
              prompt: "¿Qué frase interpreta correctamente el salto del 60,2% al 75,1%?",
              options: [
                "Estos datos evidencian un acelerado proceso de urbanización entre 1952 y 1970, consolidando a Chile como un país mayoritariamente urbano.",
                "Estos datos muestran que la población chilena prefirió regresar a vivir en zonas rurales.",
                "Estos datos indican que el 75,1% de los chilenos obtuvo vivienda propia en 1970."
              ],
              correct: "Estos datos evidencian un acelerado proceso de urbanización entre 1952 y 1970, consolidando a Chile como un país mayoritariamente urbano.",
              hint: "No inventes información que el porcentaje no dice; concéntrate en el cambio demográfico entre campo y ciudad.",
              explain: "Interpretar bien un dato significa nombrar el proceso histórico ('urbanización') sin sacar conclusiones apresuradas."
            },
            {
              partLabel: "Parte 2 • El giro crítico",
              prompt: "¿Qué bloque explica por qué el porcentaje NO basta para afirmar una mejor calidad de vida?",
              options: [
                "Sin embargo, estas cifras no demuestran por sí solas una mejora en la calidad de vida, porque únicamente miden dónde vive la población y no sus condiciones materiales.",
                "Sin embargo, no sirven porque los censos de 1952 y 1970 eran falsos.",
                "Por lo tanto, el aumento urbano confirma que el bienestar social mejoró para todos."
              ],
              correct: "Sin embargo, estas cifras no demuestran por sí solas una mejora en la calidad de vida, porque únicamente miden dónde vive la población y no sus condiciones materiales.",
              hint: "Usa el contraste ('Sin embargo...'): distingue entre 'dónde vive la gente' y 'cómo vive la gente'.",
              explain: "Este es el corazón del pensamiento crítico histórico: reconocer los límites de un indicador cuantitativo."
            },
            {
              partLabel: "Parte 3 • Evidencia histórica de respaldo",
              prompt: "¿Qué cierre respalda ese argumento con hechos concretos de las ciudades de la época?",
              options: [
                "En la realidad, la población creció más rápido que la oferta de viviendas, empleos estables y servicios básicos, por lo que aumentaron la marginalidad urbana, el hacinamiento y las poblaciones callampa.",
                "En la realidad, las ciudades se vaciaron rápidamente por la crisis del modelo ISI.",
                "En la realidad, el Estado logró entregar agua potable y alcantarillado inmediato a cada migrante."
              ],
              correct: "En la realidad, la población creció más rápido que la oferta de viviendas, empleos estables y servicios básicos, por lo que aumentaron la marginalidad urbana, el hacinamiento y las poblaciones callampa.",
              hint: "Conecta con lo aprendido sobre el impacto urbano: ¿en qué condiciones vivieron muchos de los nuevos habitantes de las ciudades?",
              explain: "Cerrar con evidencia concreta convierte una opinión general en un argumento histórico sólido."
            }
          ],
          aiRubric: [
            "Identifica la transformación histórica que muestran los datos: acelerada urbanización que consolida a Chile como sociedad mayoritariamente urbana.",
            "Explica por qué los datos no bastan por sí solos para afirmar mejora en la calidad de vida (solo miden localización/cantidad, no condiciones de vida).",
            "Respalda con evidencia real de las ciudades de la época (marginalidad urbana, hacinamiento, poblaciones callampa, empleos informales o falta de servicios)."
          ],
          referenceSummary: "El paso del 60,2% (1952) al 75,1% (1970) muestra una acelerada urbanización que consolidó a Chile como un país mayoritariamente urbano. No permite afirmar por sí solo mejora en la calidad de vida porque el dato solo indica ubicación geográfica, no condiciones materiales; en la práctica, las ciudades crecieron más rápido que las viviendas, los empleos formales y los servicios sanitarios, expandiendo la marginalidad, el hacinamiento y las poblaciones callampa."
        },
        {
          claveId: 4,
          shortLabel: "4. Modelo ISI y crisis",
          question: "¿Cuál era el objetivo del modelo ISI? Explica dos dificultades que impidieron alcanzar una mayor independencia económica.",
          strategy: {
            typeName: "Meta vs. Obstáculos",
            whyThisStructure: "Esta pregunta contrapone una intención ('qué buscaba el modelo') frente a sus límites reales ('qué lo frenó'). Definir primero el propósito y luego desarrollar dos obstáculos explicados (no solo nombrados) asegura claridad total.",
            blueprintSteps: [
              {
                stepTitle: "Objetivo del modelo ISI",
                explanation: "Define qué buscaba la Industrialización Sustitutiva de Importaciones.",
                starter: "El objetivo del modelo ISI era impulsar la industria nacional para..."
              },
              {
                stepTitle: "Primera dificultad explicada",
                explanation: "Por ejemplo, la necesidad de importar tecnología y bienes de capital (maquinaria) de Europa y EE.UU.",
                starter: "Una primera dificultad fue..., lo que impidió..."
              },
              {
                stepTitle: "Segunda dificultad explicada",
                explanation: "Elige otro factor real (mercado interno estrecho, retraso agrícola, inflación o reducción fiscal) y explica su efecto.",
                starter: "En segundo lugar, ..., dificultando así..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Objetivo del modelo",
              prompt: "¿Qué bloque define con mayor precisión el objetivo del modelo ISI?",
              options: [
                "El objetivo del modelo ISI era desarrollar la industria nacional —avanzando hacia la industria pesada— para sustituir las importaciones extranjeras y alcanzar autosuficiencia e independencia económica.",
                "El objetivo del modelo ISI era eliminar las fábricas chilenas y depender únicamente de productos importados.",
                "El objetivo del modelo ISI era privatizar todas las empresas del Estado para abrir las fronteras sin aranceles."
              ],
              correct: "El objetivo del modelo ISI era desarrollar la industria nacional —avanzando hacia la industria pesada— para sustituir las importaciones extranjeras y alcanzar autosuficiencia e independencia económica.",
              hint: "Recuerda el significado exacto de ISI: Industrialización Sustitutiva de Importaciones.",
              explain: "Nombrar la meta de largo plazo (sustituir importaciones, industria pesada y autosuficiencia) da el marco perfecto para explicar por qué fracasó."
            },
            {
              partLabel: "Parte 2 • Primera dificultad explicada",
              prompt: "¿Cuál de estos bloques explica bien una dificultad clave que mantuvo la dependencia externa?",
              options: [
                "Una primera dificultad fue la necesidad de seguir comprando tecnología y bienes de capital (maquinaria) en Europa y Estados Unidos, lo que mantuvo la dependencia externa e impidió consolidar la industria pesada.",
                "Una primera dificultad fue que Chile fabricaba demasiada maquinaria pesada y no tenía dónde venderla.",
                "Una primera dificultad fue la total ausencia de inflación durante los años 40 y 50."
              ],
              correct: "Una primera dificultad fue la necesidad de seguir comprando tecnología y bienes de capital (maquinaria) en Europa y Estados Unidos, lo que mantuvo la dependencia externa e impidió consolidar la industria pesada.",
              hint: "Piensa qué necesitaban importar las industrias locales desde Europa y EE.UU. para poder funcionar.",
              explain: "No basta con nombrar el factor; fíjate cómo la segunda parte de la frase explica *por qué* frenó la independencia económica."
            },
            {
              partLabel: "Parte 3 • Segunda dificultad explicada",
              prompt: "¿Qué segundo obstáculo completa la explicación con rigor histórico?",
              options: [
                "En segundo lugar, un mercado interno estrecho y con bajo poder adquisitivo —sumado al estancamiento agrícola, la reducción del presupuesto fiscal y la espiral inflacionaria— frenó el crecimiento sostenido del modelo.",
                "En segundo lugar, el sector agrícola creció tanto que dejó sin trabajadores a todas las fábricas de las ciudades.",
                "En segundo lugar, la población urbana disminuyó drásticamente impidiendo el consumo."
              ],
              correct: "En segundo lugar, un mercado interno estrecho y con bajo poder adquisitivo —sumado al estancamiento agrícola, la reducción del presupuesto fiscal y la espiral inflacionaria— frenó el crecimiento sostenido del modelo.",
              hint: "Recuerda los otros factores de crisis del ISI: mercado interno limitado, retraso agrícola, menos presupuesto fiscal e inflación.",
              explain: "Con dos dificultades claramente explicadas, la respuesta demuestra dominio completo del proceso económico."
            }
          ],
          aiRubric: [
            "Define correctamente el objetivo del modelo ISI (desarrollar industria nacional para sustituir importaciones y lograr autosuficiencia/independencia económica).",
            "Explica una primera dificultad concreta (ej. dependencia de insumos tecnológicos y bienes de capital de Europa y EE.UU., impidiendo consolidar la industria pesada).",
            "Explica una segunda dificultad concreta (ej. mercado interno estrecho, dispar crecimiento agrícola vs. industrial, reducción del presupuesto fiscal o espiral inflacionario)."
          ],
          referenceSummary: "El modelo ISI buscaba desarrollar la industria nacional (de liviana a pesada) para sustituir importaciones y lograr autosuficiencia e independencia económica. Factores de crisis que lo impidieron: 1) reducción del presupuesto fiscal, 2) mercado interno estrecho, 3) dispar crecimiento del sector agrícola respecto del industrial, 4) necesidad de obtener insumos tecnológicos y bienes de capital en Europa y EE.UU. (mantuvo dependencia externa), 5) espiral inflacionario."
        }
      ]
    }
  ]
};