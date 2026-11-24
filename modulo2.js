// =============================================================================
// FASE 2: GUERRA FRÍA, TRES TERCIOS Y JORGE ALESSANDRI (1958–1964)
// Claves cubiertas en Taller: 5, 7 y 8 (+ base de Reforma Agraria 1962 y CORA)
// =============================================================================
window.MODULO_2 = {
  id: "m2",
  tag: "Fase 2 • Claves 5, 7 y 8",
  title: "Guerra Fría y Jorge Alessandri (1958–1964)",
  desc: "Revolución Cubana, Alianza para el Progreso, los tres tercios (1958–1970), reformas liberales, Terremoto de Valdivia y primera Reforma Agraria.",
  clavesCovered: [5, 7, 8],
  steps: [
    // -------------------------------------------------------------------------
    // ETAPA 1: SÍNTESIS VISUAL (100% AUTOSUFICIENTE)
    // -------------------------------------------------------------------------
    {
      label: "Síntesis Visual",
      type: "training",
      intro: "Recorre en 5 fichas visuales el escenario internacional de la Guerra Fría, el sistema político de tres tercios y las dos etapas del gobierno de Jorge Alessandri.",
      items: [
        {
          tag: "Contexto Global • Guerra Fría",
          title: "Revolución Cubana y la Alianza para el Progreso",
          text: "A fines de la década de 1950, la Guerra Fría impactó de lleno en América Latina. El triunfo de la Revolución Cubana (1959) y la adopción del sistema marxista en Cuba llevaron a Estados Unidos a diseñar una estrategia para impedir que el comunismo se extendiera a otros países de la región.",
          flow: [
            {
              tag: "Detonante (1959)",
              title: "Triunfo de la Revolución Cubana",
              detail: "Cuba adopta un proyecto socialista cercano a la URSS, encendiendo las alarmas de Estados Unidos frente a posibles revoluciones en el continente."
            },
            {
              tag: "Respuesta de EE.UU.",
              title: "Alianza para el Progreso (Kennedy)",
              detail: "Plan de ayuda económica, educacional y técnica impulsado por el presidente John F. Kennedy para modernizar América Latina de forma democrática."
            },
            {
              tag: "Condición central",
              title: "Reformas estructurales moderadas",
              detail: "Exigía impulsar cambios profundos pero pacíficos —especialmente la Reforma Agraria— para combatir la pobreza y frenar alternativas revolucionarias."
            }
          ],
          highlight: "En la Guerra Fría, la Alianza para el Progreso buscó contener al comunismo mediante ayuda económica y reformas sociales moderadas, demostrando que el desarrollo era posible sin una revolución armada."
        },
        {
          tag: "Escenario Político • 1958–1970",
          title: "Los «tres tercios» y el papel del Congreso Pleno",
          text: "Durante los años sesenta, la política chilena se organizó en tres bloques ideológicos con proyectos de sociedad propios y muy difíciles de conciliar: Derecha (reformas liberales), Centro (reformas estructuralistas) e Izquierda (camino al socialismo). Como el electorado se dividía en proporciones cercanas a un tercio para cada bloque, rara vez un candidato lograba más del 50% de los votos.",
          table: {
            headers: ["Elección", "Derecha", "Centro", "Izquierda", "Resultado clave"],
            rows: [
              ["1958", "J. Alessandri: 31,6%", "E. Frei (20,7%) + L. Bossay (15,5%) = 36,2%", "S. Allende: 28,9% (+ ind. 3,3%)", "Gana Alessandri por mayoría relativa; ratifica Congreso Pleno."],
              ["1964", "J. Durán: 5,0%", "E. Frei Montalva: 56,1%", "S. Allende: 38,9%", "La derecha apoya a Frei para frenar a Allende (mayoría absoluta)."],
              ["1970", "J. Alessandri: 34,9%", "R. Tomic: 27,8%", "S. Allende: 36,3%", "Nadie supera el 50%; el Congreso Pleno ratifica a Allende."]
            ]
          },
          bullets: [
            { label: "Regla constitucional", text: "Si ningún candidato obtenía mayoría absoluta (más del 50%), el Congreso Pleno debía elegir entre las dos primeras mayorías relativas." },
            { label: "Consecuencia en 1970", text: "Como cada tercio presentó candidato propio, Salvador Allende ganó con un 36,3% y necesitó los votos de la Democracia Cristiana en el Congreso Pleno (tras firmar el Estatuto de Garantías Constitucionales) para asumir la presidencia." }
          ],
          highlight: "El sistema de «tres tercios» dividió al país en tres proyectos excluyentes y convirtió al Congreso Pleno en el árbitro decisivo cuando ningún bloque alcanzaba la mayoría absoluta."
        },
        {
          tag: "Jorge Alessandri • Primera Etapa",
          title: "«La hora de los gerentes»: orientación liberal y medidas",
          text: "Jorge Alessandri Rodríguez (1958–1964) asumió con un estilo técnico y empresarial conocido como «la hora de los gerentes». Su orientación económica inicial fue liberal: buscó restringir la intervención estatal del modelo ISI y devolver protagonismo y autonomía a la empresa privada.",
          bullets: [
            { label: "Apertura y precios", text: "Eliminó barreras al comercio exterior y controles al movimiento de capitales, liberó precios e incentivó a los privados a renovar maquinaria (bienes de capital)." },
            { label: "Obras públicas", text: "Impulsó fuertes inversiones estatales en infraestructura clave: transporte, comunicaciones, energía y vivienda." },
            { label: "Replanteamiento de la CORFO", text: "Formuló un plan decenal de producción para asesorar y dar créditos de fomento a la empresa privada, suspendiendo inversiones directas y privatizando la mayoría de las empresas bajo su control." }
          ],
          table: {
            headers: ["Año", "Variación PIB (%)", "Inflación (%)", "Reservas (mill. US$)"],
            rows: [
              ["1958", "5,49%", "32,51%", "29,6"],
              ["1959", "5,27%", "33,24%", "105,4"],
              ["1960", "7,88%", "5,47%", "72,8"],
              ["1961", "4,78%", "9,61%", "-5,2"]
            ]
          },
          highlight: "Al comienzo, el plan logró bajar bruscamente la inflación (del 33,2% en 1959 al 5,5% en 1960), pero esos resultados fueron coyunturales y no resolvieron los problemas estructurales."
        },
        {
          tag: "Jorge Alessandri • Segunda Etapa",
          title: "Terremoto de Valdivia, escasez de dólares y reversión",
          text: "A partir de 1960–1961, el proyecto liberal de Alessandri enfrentó graves dificultades económicas, naturales y políticas que obligaron a dar marcha atrás casi por completo.",
          bullets: [
            { label: "Terremoto de Valdivia (mayo 1960)", text: "Un violento sismo y maremoto destruyó Valdivia, inundó Corral y golpeó la producción del sur, obligando a dictar una costosa ley de reconstrucción." },
            { label: "Crisis externa y escasez de dólares", text: "La inversión extranjera no dio los frutos esperados, los empresarios se endeudaron y las reservas cayeron a cifras negativas (-5,2 millones US$ en 1961), generando crisis de balanza de pagos." },
            { label: "Reversión económica", text: "El gobierno suspendió el mercado de divisas, devaluó la moneda y revirtió sus reformas liberales una a una: repuso depósitos previos y prohibiciones de importación y aplicó un reajuste salarial del 100%." },
            { label: "Giro político (1961)", text: "Al perder el tercio constitucional en el Congreso, liberales y conservadores no bastaron: entraron los radicales al gabinete (Frente Nacional), retornando a las lógicas político-partidistas." }
          ],
          highlight: "El fracaso de la estrategia liberal frente a la escasez de dólares y la reconstrucción tras 1960 dejó a la derecha sin un discurso económico propositivo para la elección siguiente."
        },
        {
          tag: "Mundo Rural • 1962",
          title: "Primera Ley de Reforma Agraria y creación de la CORA",
          text: "Bajo la presión de la Alianza para el Progreso y el estancamiento productivo del campo, en 1962 el gobierno de Jorge Alessandri promulgó la primera Ley de Reforma Agraria en Chile y creó la Corporación de la Reforma Agraria (CORA).",
          bullets: [
            { label: "Objetivos declarados", text: "Dar acceso a la tierra a quienes la trabajan, mejorar la condición del campesinado, obligar a trabajar los fundos y aumentar la producción agropecuaria." },
            { label: "Papel de la CORA", text: "Organismo estatal encargado de administrar la subdivisión de tierras y expropiar únicamente predios abandonados o insuficientemente explotados." },
            { label: "Alcance real («reforma de macetero»)", text: "Fue una ley conservadora que resguardó fuertemente la propiedad de los terratenientes y creó muy pocos nuevos propietarios; por su bajo impacto, la izquierda marxista la apodó irónicamente «reforma de macetero»." }
          ],
          highlight: "Aunque su alcance fue muy limitado, la ley de 1962 creó la institucionalidad base (la CORA) sobre la cual Eduardo Frei y Salvador Allende profundizarían luego las expropiaciones."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 2: CONEXIONES CAUSA -> EFECTO (FOCUS-RIGHT)
    // -------------------------------------------------------------------------
    {
      label: "Conexiones Causa–Efecto",
      type: "match",
      intro: "Conecta cada proceso de la Guerra Fría o del gobierno de Jorge Alessandri (izquierda) con su consecuencia histórica directa (derecha). Recuerda: al elegir a la izquierda, las demás causas se bloquean para ayudarte a enfocar.",
      title: "Conecta cada proceso de 1958–1964 con su consecuencia directa",
      leftTitle: "Causa o Proceso Histórico",
      rightTitle: "Consecuencia o Concepto",
      pairs: [
        {
          id: "p1",
          left: "Triunfo de la Revolución Cubana (1959) y temor de EE.UU. a la expansión del comunismo",
          right: "Creación de la Alianza para el Progreso (ayuda económica y reformas moderadas)",
          hint: "¿Qué plan continental lanzó John F. Kennedy para frenar revoluciones socialistas en América Latina?",
          explain: "Estados Unidos impulsó la Alianza para el Progreso con ayuda técnica, financiera y reformas estructurales para contener la influencia cubana."
        },
        {
          id: "p2",
          left: "División del electorado en Derecha, Centro e Izquierda con fuerzas equilibradas («tres tercios»)",
          right: "Dificultad para superar el 50% de los votos e intervención decisiva del Congreso Pleno",
          hint: "¿Qué consecuencia institucional ocurría cuando ningún candidato lograba mayoría absoluta?",
          explain: "Al repartirse los votos entre tres proyectos opuestos, el Congreso Pleno debió ratificar al presidente en elecciones como 1958 y 1970."
        },
        {
          id: "p3",
          left: "Orientación económica liberal inicial de Jorge Alessandri («la hora de los gerentes»)",
          right: "Restricción del Estado, liberación de precios y replanteamiento de la CORFO hacia privados",
          hint: "Busca las medidas concretas que buscaban dar mayor autonomía a la empresa privada.",
          explain: "Alessandri redujo trabas comerciales, liberó precios y reorientó la CORFO a dar asesoría y créditos a privados en vez de invertir directamente."
        },
        {
          id: "p4",
          left: "Terremoto de Valdivia (1960), endeudamiento empresarial y grave escasez de dólares",
          right: "Devaluación y reversión de las medidas liberales (vuelven controles a las importaciones)",
          hint: "¿Cómo respondió el gobierno en su segunda etapa cuando colapsó la balanza de pagos?",
          explain: "La crisis externa obligó a suspender el mercado de divisas, devaluar y reponer controles previos y prohibiciones de importación."
        },
        {
          id: "p5",
          left: "Pérdida del tercio constitucional en el Congreso tras las elecciones de 1961",
          right: "Entrada de los radicales al gobierno (Frente Nacional) y retorno a lógicas partidistas",
          hint: "Cuando liberales y conservadores ya no bastaban en el Parlamento, ¿qué alianza política formó Alessandri?",
          explain: "Ante el rechazo de la Democracia Cristiana, Alessandri incorporó al Partido Radical al gabinete, terminando con el estilo puramente gerencial."
        },
        {
          id: "p6",
          left: "Primera Ley de Reforma Agraria (1962) muy conservadora con la propiedad terrateniente",
          right: "Creación de la CORA pero escasos nuevos propietarios («reforma de macetero»)",
          hint: "¿Qué balance histórico y qué apodo crítico recibió la reforma agraria de Alessandri?",
          explain: "Aunque fundó la CORA para subdividir predios mal explotados, repartió muy poca tierra y la izquierda marxista la llamó «reforma de macetero»."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 3: CLASIFICADOR HISTÓRICO
    // -------------------------------------------------------------------------
    {
      label: "Clasificador",
      type: "classify",
      intro: "Clasifica cada hecho, medida o dificultad histórica en el bloque que le corresponde: escenario político global, medidas iniciales de Alessandri o crisis de su segunda etapa.",
      categories: [
        "Guerra Fría y Tres Tercios",
        "Medidas Iniciales de Alessandri",
        "Crisis y Reversión (1960–1964)"
      ],
      items: [
        {
          statement: "Alianza para el Progreso impulsada por John F. Kennedy para promover ayuda técnica y reforma agraria",
          correct: "Guerra Fría y Tres Tercios",
          hint: "Fue una estrategia continental de Estados Unidos frente a la Revolución Cubana.",
          explain: "La Alianza para el Progreso respondió directamente al escenario de la Guerra Fría en América Latina."
        },
        {
          statement: "Eliminación de barreras al comercio, liberación de precios y autonomía a la empresa privada",
          correct: "Medidas Iniciales de Alessandri",
          hint: "Corresponde al paquete de reformas liberales impulsado al comienzo de su mandato.",
          explain: "Alessandri inició su gobierno restringiendo la intervención estatal y liberando precios y mercados."
        },
        {
          statement: "Terremoto y maremoto de Valdivia (mayo de 1960) que afectó la producción del sur y exigió reconstrucción",
          correct: "Crisis y Reversión (1960–1964)",
          hint: "Fue un desastre natural que alteró fuertemente el presupuesto y agravó las dificultades de su gobierno.",
          explain: "El sismo de 1960 y la ley de reconstrucción presionaron duramente las finanzas públicas."
        },
        {
          statement: "Replanteamiento de la CORFO para asesorar a privados, otorgar créditos y privatizar empresas estatales",
          correct: "Medidas Iniciales de Alessandri",
          hint: "Forma parte del cambio de rol económico del Estado al inicio de «la hora de los gerentes».",
          explain: "Durante la primera etapa, la CORFO dejó de invertir directamente y pasó a fomentar la modernización privada."
        },
        {
          statement: "Escasez de dólares, crisis de balanza de pagos y reposición de depósitos previos para importar",
          correct: "Crisis y Reversión (1960–1964)",
          hint: "Ocurrió cuando las reservas cayeron a terreno negativo en 1961 y hubo que deshacer la apertura.",
          explain: "La falta de divisas forzó a devaluar y revertir una a una las medidas liberalizadoras."
        },
        {
          statement: "División política entre reformas liberales (Derecha), reformas estructuralistas (Centro) y socialismo (Izquierda)",
          correct: "Guerra Fría y Tres Tercios",
          hint: "Describe la estructura de bloques ideológicos que marcó a Chile entre 1958 y 1970.",
          explain: "Los tres tercios definieron la competencia electoral y la polarización creciente de la década de 1960."
        },
        {
          statement: "Fuertes inversiones en obras públicas de transporte, energía, comunicaciones y vivienda",
          correct: "Medidas Iniciales de Alessandri",
          hint: "Fue una de las medidas concretas más visibles de su primera etapa de gobierno.",
          explain: "Junto a la liberalización comercial, Alessandri impulsó obras públicas estratégicas y mejoró infraestructura (como el Estadio Nacional para el Mundial de 1962)."
        },
        {
          statement: "Entrada de los radicales al gabinete (Frente Nacional) tras perder el tercio constitucional en 1961",
          correct: "Crisis y Reversión (1960–1964)",
          hint: "Fue el ajuste político obligado de la segunda etapa cuando liberales y conservadores ya no alcanzaban.",
          explain: "El ingreso del Partido Radical significó el fin de la gestión puramente gerencial y el retorno de lógicas partidistas."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 4: ANÁLISIS HISTÓRICO (TIPO PAES)
    // -------------------------------------------------------------------------
    {
      label: "Análisis Histórico",
      type: "quiz",
      intro: "Analiza tablas históricas reales, relaciones geopolíticas y cambios económicos de 1958–1970 antes de pasar al Taller de Argumentación.",
      items: [
        {
          question: "¿Cuál era el propósito geopolítico de la Alianza para el Progreso en el contexto de la Guerra Fría en América Latina?",
          options: [
            "Evitar que el comunismo se extendiera tras la Revolución Cubana, impulsando ayuda económica y reformas estructurales moderadas.",
            "Financiar la expansión del modelo socialista cubano hacia el resto de Sudamérica.",
            "Eliminar toda relación diplomática y comercial entre Estados Unidos y América Latina.",
            "Impedir cualquier tipo de reforma agraria o educativa en los países latinoamericanos."
          ],
          correct: "Evitar que el comunismo se extendiera tras la Revolución Cubana, impulsando ayuda económica y reformas estructurales moderadas.",
          hint: "Piensa qué buscaba John F. Kennedy justo después de que Cuba adoptara el sistema marxista en 1959.",
          explain: "Estados Unidos apostó por apoyo económico, educacional y reformas como la agraria para reducir la pobreza y frenar revoluciones comunistas."
        },
        {
          table: {
            headers: ["Elección", "Derecha", "Centro", "Izquierda"],
            rows: [
              ["1958", "31,6% (Alessandri)", "36,2% (Frei + Bossay)", "32,2% (Allende + ind.)"],
              ["1964", "5,0% (Durán)", "56,1% (Frei)", "38,9% (Allende)"],
              ["1970", "34,9% (Alessandri)", "27,8% (Tomic)", "36,3% (Allende)"]
            ]
          },
          question: "Observa los resultados de 1970 en la tabla: ¿por qué el sistema de «tres tercios» hizo indispensable la intervención del Congreso Pleno ese año?",
          options: [
            "Porque los votos se dividieron en tres bloques y ningún candidato superó el 50%, por lo que el Congreso Pleno debió elegir entre las dos primeras mayorías.",
            "Porque la derecha y la izquierda obtuvieron exactamente el mismo porcentaje de votos.",
            "Porque en 1970 los ciudadanos no tenían derecho a votar directamente por presidente.",
            "Porque el candidato de centro ganó con más del 56% y renunció al cargo."
          ],
          correct: "Porque los votos se dividieron en tres bloques y ningún candidato superó el 50%, por lo que el Congreso Pleno debió elegir entre las dos primeras mayorías.",
          hint: "Revisa los porcentajes de 1970: 36,3%, 34,9% y 27,8%. ¿Alguno alcanzó mayoría absoluta (>50%)?",
          explain: "Al competir los tres tercios por separado, Allende logró mayoría relativa (36,3%) y el Congreso Pleno debió ratificarlo entre él y Alessandri."
        },
        {
          question: "¿Qué orientación económica impulsó inicialmente Jorge Alessandri (1958–1964) frente al agotamiento del modelo ISI?",
          options: [
            "Una orientación liberal que restringía la intervención estatal y buscaba dar autonomía a la empresa privada.",
            "La estatización total de la banca, la minería y la industria pesada.",
            "El cierre completo del comercio exterior y la fijación estricta de todos los precios desde el primer día.",
            "La supresión de la empresa privada para reemplazarla por granjas colectivas."
          ],
          correct: "Una orientación liberal que restringía la intervención estatal y buscaba dar autonomía a la empresa privada.",
          hint: "Recuerda el lema de su inicio: «la hora de los gerentes» y su diagnóstico crítico frente al exceso de Estado.",
          explain: "Alessandri apostó inicialmente por liberar precios, abrir el comercio, incentivar a privados y replantear el rol de la CORFO."
        },
        {
          table: {
            headers: ["Año", "PIB (%)", "Inflación (%)", "Reservas (mill. US$)"],
            rows: [
              ["1958", "5,49%", "32,51%", "29,6"],
              ["1959", "5,27%", "33,24%", "105,4"],
              ["1960", "7,88%", "5,47%", "72,8"],
              ["1961", "4,78%", "9,61%", "-5,2"]
            ]
          },
          question: "Al observar los indicadores económicos de 1958–1961, ¿qué señal revela que los logros iniciales de Alessandri fueron coyunturales y comenzaron a agotarse en 1961?",
          options: [
            "Las reservas internacionales cayeron a cifras negativas (-5,2 millones US$) y la inflación volvió a subir al 9,61%.",
            "La inflación desapareció por completo llegando a 0% en 1961.",
            "El PIB creció sobre el 20% gracias al exceso de dólares en el país.",
            "Las reservas aumentaron por sobre los 105 millones de dólares en 1961."
          ],
          correct: "Las reservas internacionales cayeron a cifras negativas (-5,2 millones US$) y la inflación volvió a subir al 9,61%.",
          hint: "Mira la última fila (1961), especialmente la columna de Reservas anuales en millones de dólares.",
          explain: "El desplome de las reservas a -5,2 millones de dólares desató la crisis de balanza de pagos y obligó a devaluar y revertir las reformas liberales."
        },
        {
          question: "¿Qué ocurrió con las medidas liberalizadoras de Alessandri durante la segunda etapa de su gobierno?",
          options: [
            "Debieron revertirse una a una (se devaluó, se repusieron controles a importaciones y se reajustaron sueldos en 100%).",
            "Se profundizaron eliminando por completo al Estado de la economía chilena.",
            "Lograron mantener el tipo de cambio fijo sin ningún tipo de endeudamiento.",
            "Fueron reemplazadas por la nacionalización total del cobre en 1962."
          ],
          correct: "Debieron revertirse una a una (se devaluó, se repusieron controles a importaciones y se reajustaron sueldos en 100%).",
          hint: "Recuerda qué pasó cuando se agotaron los dólares y el Terremoto de Valdivia presionó el presupuesto.",
          explain: "Ante la escasez de dólares y la crisis externa, el gobierno suspendió el mercado de divisas y volvió a controles estatales sobre las importaciones."
        },
        {
          question: "¿Por qué la oposición marxista calificó la primera Ley de Reforma Agraria de 1962 como una «reforma de macetero»?",
          options: [
            "Porque fue muy conservadora, protegió el derecho de propiedad de los terratenientes y creó muy pocos nuevos propietarios.",
            "Porque expropió de golpe todos los fundos del país sin pagar indemnización.",
            "Porque prohibió la creación de la Corporación de la Reforma Agraria (CORA).",
            "Porque obligó a plantar flores ornamentales en todas las haciendas del sur."
          ],
          correct: "Porque fue muy conservadora, protegió el derecho de propiedad de los terratenientes y creó muy pocos nuevos propietarios.",
          hint: "Piensa en la ironía de la palabra «macetero»: ¿cuánta tierra cabe en un macetero comparado con un gran latifundio?",
          explain: "La ley de 1962 creó la CORA y permitió subdividir tierras mal explotadas, pero su alcance efectivo en redistribución fue mínimo."
        },
        {
          question: "¿Qué significó políticamente el ingreso del Partido Radical al gobierno de Alessandri tras las elecciones de 1961?",
          options: [
            "Amplió su base parlamentaria (Frente Nacional), pero marcó el retorno a las lógicas político-partidistas en las decisiones públicas.",
            "Permitió gobernar sin necesidad de negociar con ningún partido político.",
            "Produjo una alianza electoral entre la derecha y el Partido Comunista.",
            "Impidió la realización de las elecciones presidenciales de 1964."
          ],
          correct: "Amplió su base parlamentaria (Frente Nacional), pero marcó el retorno a las lógicas político-partidistas en las decisiones públicas.",
          hint: "Al perder el tercio constitucional, Alessandri ya no pudo sostener un gabinete exclusivamente técnico o independiente.",
          explain: "Al integrarse los radicales junto a liberales y conservadores, se abandonó el ideal inicial de un gobierno estrictamente gerencial."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 5: TALLER DE ARGUMENTACIÓN HÍBRIDO (CLAVES 5, 7 Y 8)
    // -------------------------------------------------------------------------
    {
      label: "Taller de Argumentación",
      type: "guided_writing",
      intro: "Aquí entrenarás tres nuevas estrategias de redacción histórica (una distinta para cada desafío). Practica primero armando la respuesta por bloques y luego redáctala con tus palabras para que el Tutor IA la evalúe.",
      items: [
        {
          claveId: 5,
          shortLabel: "5. Gobierno de Alessandri",
          question: "¿Qué orientación económica impulsó inicialmente Jorge Alessandri? Menciona dos medidas de su gobierno y una dificultad que debió enfrentar.",
          strategy: {
            typeName: "Enfoque ➔ Medidas Concretas ➔ Obstáculo",
            whyThisStructure: "Esta pregunta evalúa si distingues la teoría económica de la práctica histórica. Primero debes nombrar el enfoque general (liberal), luego bajar a tierra con 2 acciones reales y finalmente mostrar el choque con la realidad (dificultad que frenó el plan).",
            blueprintSteps: [
              {
                stepTitle: "Orientación económica inicial",
                explanation: "Define su enfoque liberal: menos intervención estatal y mayor autonomía para la empresa privada.",
                starter: "Inicialmente, Jorge Alessandri impulsó una orientación económica liberal enfocada en..."
              },
              {
                stepTitle: "Dos medidas concretas",
                explanation: "Nombra dos acciones reales (ej. liberación de precios/comercio, obras públicas o replanteamiento de la CORFO).",
                starter: "Entre sus principales medidas destacaron..., además de..."
              },
              {
                stepTitle: "Una dificultad enfrentada",
                explanation: "Explica un obstáculo real (Terremoto de Valdivia de 1960 o escasez de dólares) y qué obligó a hacer.",
                starter: "Sin embargo, debió enfrentar una grave dificultad: ..., lo que obligó a..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Orientación económica inicial",
              prompt: "¿Qué inicio define con precisión la orientación económica de la primera etapa de Alessandri?",
              options: [
                "Inicialmente, Jorge Alessandri impulsó una orientación económica liberal («la hora de los gerentes») que buscaba restringir la intervención del Estado y fortalecer la autonomía de la empresa privada.",
                "Inicialmente, Jorge Alessandri impulsó una economía socialista basada en estatizar todas las fábricas y bancos del país.",
                "Inicialmente, Jorge Alessandri mantuvo intactos todos los controles estatales del modelo ISI sin permitir la iniciativa privada."
              ],
              correct: "Inicialmente, Jorge Alessandri impulsó una orientación económica liberal («la hora de los gerentes») que buscaba restringir la intervención del Estado y fortalecer la autonomía de la empresa privada.",
              hint: "Busca la opción que identifique correctamente el enfoque liberal y el protagonismo de la empresa privada.",
              explain: "Definir primero la orientación ('liberal' + menor rol estatal) le da sentido lógico a todas las medidas que nombrarás después."
            },
            {
              partLabel: "Parte 2 • Dos medidas concretas",
              prompt: "¿Qué bloque menciona dos medidas reales del gobierno de Jorge Alessandri?",
              options: [
                "Entre sus medidas destacaron la liberación de precios y eliminación de barreras comerciales, fuertes inversiones en obras públicas (vivienda, transporte y energía) y el replanteamiento de la CORFO para asesorar y dar créditos a privados.",
                "Entre sus medidas destacaron la nacionalización total del cobre en 1971 y la creación de las Juntas de Abastecimiento y Precios (JAP).",
                "Entre sus medidas destacaron la eliminación de la CORFO y la prohibición de construir viviendas fiscales."
              ],
              correct: "Entre sus medidas destacaron la liberación de precios y eliminación de barreras comerciales, fuertes inversiones en obras públicas (vivienda, transporte y energía) y el replanteamiento de la CORFO para asesorar y dar créditos a privados.",
              hint: "No confundas gobiernos: elige medidas propias de 1958–1964 (apertura comercial, obras públicas, nuevo rol de la CORFO o ley de 1962).",
              explain: "Citar medidas precisas demuestra que conoces cómo se aplicó la orientación liberal en la práctica."
            },
            {
              partLabel: "Parte 3 • Dificultad y consecuencia",
              prompt: "¿Qué cierre explica bien una dificultad real que frenó su proyecto económico?",
              options: [
                "Sin embargo, enfrentó graves dificultades como el Terremoto de Valdivia de 1960 y una aguda escasez de dólares (crisis de balanza de pagos), lo que obligó a devaluar y revertir sus medidas liberalizadoras.",
                "Sin embargo, su única dificultad fue un exceso de dólares en el Banco Central que impidió pagar los sueldos.",
                "Como resultado, su plan liberal funcionó sin contratiempos y nunca necesitó revertirse."
              ],
              correct: "Sin embargo, enfrentó graves dificultades como el Terremoto de Valdivia de 1960 y una aguda escasez de dólares (crisis de balanza de pagos), lo que obligó a devaluar y revertir sus medidas liberalizadoras.",
              hint: "Recuerda los hechos de 1960–1961 que obligaron a dar marcha atrás con la apertura económica.",
              explain: "Conectar la dificultad (terremoto o falta de divisas) con su efecto (reversión de medidas) redondea una respuesta sobresaliente."
            }
          ],
          aiRubric: [
            "Identifica correctamente la orientación económica inicial de Alessandri (liberal, restringir intervención estatal y fomentar la empresa privada).",
            "Menciona al menos dos medidas concretas de su gobierno (ej. liberación de precios, eliminación de barreras al comercio/capitales, inversión en obras públicas, replanteamiento de la CORFO hacia privados, o primera Reforma Agraria de 1962).",
            "Explica al menos una dificultad real que debió enfrentar (ej. Terremoto de Valdivia de 1960, escasez de dólares/crisis de balanza de pagos, endeudamiento empresarial, baja inversión extranjera o pérdida del tercio parlamentario en 1961)."
          ],
          referenceSummary: "Jorge Alessandri (1958-1964) impulsó inicialmente una orientación económica liberal ('la hora de los gerentes') buscando restringir la intervención estatal y dar autonomía a la empresa privada. Medidas: eliminación de barreras al comercio y controles de capitales, liberación de precios, fuertes inversiones en obras públicas (transporte, energía, comunicaciones, vivienda), replanteamiento de la CORFO (asesoría y créditos privados, privatizaciones, fin inversiones directas) y primera Reforma Agraria (1962, CORA). Dificultades: Terremoto y maremoto de Valdivia (1960), endeudamiento empresarial, inversión extranjera menor a la esperada, escasez de dólares (crisis balanza de pagos) que obligó a devaluar y revertir medidas liberales, y pérdida de apoyo parlamentario (entrada de radicales)."
        },
        {
          claveId: 7,
          shortLabel: "7. Alianza para el Progreso",
          question: "¿Qué fue la Alianza para el Progreso? Explica sus objetivos y su relación con la Guerra Fría en América Latina.",
          strategy: {
            typeName: "Definición ➔ Objetivos ➔ Vínculo Geopolítico",
            whyThisStructure: "Para explicar un proceso internacional no basta con definir el nombre del programa: hay que conectar lo que ofrecía (ayuda y reformas) con el interés político detrás (frenar el comunismo en la Guerra Fría).",
            blueprintSteps: [
              {
                stepTitle: "Qué fue y quién la impulsó",
                explanation: "Define el programa de ayuda creado por Estados Unidos bajo el gobierno de John F. Kennedy.",
                starter: "La Alianza para el Progreso fue un plan de cooperación creado por Estados Unidos..."
              },
              {
                stepTitle: "Objetivos concretos",
                explanation: "Menciona ayuda económica, educacional y técnica junto al impulso de reformas estructurales (como la Reforma Agraria).",
                starter: "Sus objetivos principales eran entregar ayuda... e impulsar reformas como..."
              },
              {
                stepTitle: "Relación con la Guerra Fría",
                explanation: "Conecta con el triunfo de la Revolución Cubana (1959) y el temor de EE.UU. a la expansión del comunismo.",
                starter: "En el contexto de la Guerra Fría, este programa buscaba evitar que..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Definición del programa",
              prompt: "¿Qué frase define mejor qué fue la Alianza para el Progreso?",
              options: [
                "La Alianza para el Progreso fue un plan de ayuda económica, educacional y técnica impulsado por Estados Unidos durante el gobierno de John F. Kennedy para América Latina.",
                "La Alianza para el Progreso fue un tratado militar firmado por la Unión Soviética y Cuba para intervenir en Chile.",
                "La Alianza para el Progreso fue una coalición de partidos chilenos creada para elegir a Jorge Alessandri."
              ],
              correct: "La Alianza para el Progreso fue un plan de ayuda económica, educacional y técnica impulsado por Estados Unidos durante el gobierno de John F. Kennedy para América Latina.",
              hint: "Identifica qué potencia impulsó el plan, bajo qué presidente y qué tipo de cooperación ofrecía.",
              explain: "Ubicar el origen (EE.UU., gobierno de Kennedy) y la naturaleza del plan deja una base clara desde la primera oración."
            },
            {
              partLabel: "Parte 2 • Objetivos concretos",
              prompt: "¿Qué bloque explica con exactitud los objetivos del programa?",
              options: [
                "Sus objetivos eran modernizar el desarrollo económico y social de la región y promover reformas estructurales moderadas, especialmente la Reforma Agraria para redistribuir la tierra rural.",
                "Sus objetivos eran eliminar las escuelas públicas y mantener intacto el latifundio tradicional en el campo.",
                "Sus objetivos eran estatizar las empresas mineras norteamericanas en toda Sudamérica."
              ],
              correct: "Sus objetivos eran modernizar el desarrollo económico y social de la región y promover reformas estructurales moderadas, especialmente la Reforma Agraria para redistribuir la tierra rural.",
              hint: "Recuerda qué reforma estructural consideraba clave este plan para modernizar las zonas rurales.",
              explain: "Mencionar la Reforma Agraria y la mejora social explica cómo Estados Unidos buscaba atacar las causas de la desigualdad."
            },
            {
              partLabel: "Parte 3 • Relación con la Guerra Fría",
              prompt: "¿Qué cierre explica correctamente el vínculo del plan con la Guerra Fría?",
              options: [
                "Se relacionó directamente con la Guerra Fría porque, tras el triunfo de la Revolución Cubana y su giro marxista, Estados Unidos buscó evitar que el comunismo se extendiera por América Latina ofreciendo una vía reformista.",
                "Se relacionó con la Guerra Fría porque Estados Unidos quería ayudar a Cuba a consolidar su gobierno marxista.",
                "No tuvo relación con la Guerra Fría, ya que fue una iniciativa exclusivamente deportiva ligada al Mundial de 1962."
              ],
              correct: "Se relacionó directamente con la Guerra Fría porque, tras el triunfo de la Revolución Cubana y su giro marxista, Estados Unidos buscó evitar que el comunismo se extendiera por América Latina ofreciendo una vía reformista.",
              hint: "Conecta el año 1959 en Cuba con la estrategia de contención del comunismo de Estados Unidos.",
              explain: "Vincular el plan con la Revolución Cubana demuestra que entiendes la lógica geopolítica de la Guerra Fría."
            }
          ],
          aiRubric: [
            "Define qué fue la Alianza para el Progreso (plan de ayuda económica, educacional y técnica creado por Estados Unidos bajo el presidente John F. Kennedy).",
            "Explica sus objetivos (mejorar condiciones sociales/económicas e impulsar reformas estructurales, especialmente la Reforma Agraria).",
            "Explica su relación con la Guerra Fría en América Latina (contener la expansión del comunismo y evitar nuevas revoluciones tras el triunfo de la Revolución Cubana)."
          ],
          referenceSummary: "La Alianza para el Progreso fue un plan de ayuda educacional, económica y técnica creado por Estados Unidos durante el gobierno de John F. Kennedy para América Latina. Buscaba impulsar el desarrollo social y efectuar reformas estructurales moderadas, principalmente la Reforma Agraria (redistribución de la propiedad de la tierra rural). Su relación con la Guerra Fría fue directa: tras el triunfo de la Revolución Cubana y la adopción del marxismo en Cuba, EE.UU. quiso frenar la expansión del comunismo en la región promoviendo cambios reformistas."
        },
        {
          claveId: 8,
          shortLabel: "8. Tres tercios y 1970",
          question: "¿Qué significaba que la política chilena estuviera organizada en «tres tercios»? Relaciona esta situación con las elecciones presidenciales de 1970 y la intervención del Congreso Pleno.",
          strategy: {
            typeName: "Concepto ➔ Escenario 1970 ➔ Resolución Institucional",
            whyThisStructure: "Esta pregunta exige encadenar tres eslabones lógicos: qué eran los tres tercios, cómo se reflejaron en los votos de 1970 (sin mayoría absoluta) y por qué esa falta de mayoría activó al Congreso Pleno.",
            blueprintSteps: [
              {
                stepTitle: "Qué eran los «tres tercios»",
                explanation: "Explica la división política en Derecha, Centro e Izquierda con fuerza electoral similar y proyectos excluyentes.",
                starter: "Que la política chilena estuviera organizada en «tres tercios» significaba que..."
              },
              {
                stepTitle: "Relación con la elección de 1970",
                explanation: "Muestra que compitieron tres candidatos (Allende, Alessandri y Tomic) y nadie superó el 50%.",
                starter: "En las elecciones presidenciales de 1970 esto se reflejó cuando..."
              },
              {
                stepTitle: "Intervención del Congreso Pleno",
                explanation: "Explica la regla constitucional: el Congreso Pleno eligió entre las dos primeras mayorías y ratificó a Allende.",
                starter: "Al no haber mayoría absoluta, debió intervenir el Congreso Pleno para..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Definición de «tres tercios»",
              prompt: "¿Qué bloque explica con claridad qué significaba la política de «tres tercios»?",
              options: [
                "Significaba que el electorado y los partidos chilenos estaban divididos en tres bloques ideológicos con fuerza similar y proyectos propios: Derecha (liberal), Centro (reformas estructuralistas) e Izquierda (socialismo).",
                "Significaba que el país se dividía en tres zonas geográficas: norte, centro y sur.",
                "Significaba que cada presidente gobernaba solo un tercio de su período legal."
              ],
              correct: "Significaba que el electorado y los partidos chilenos estaban divididos en tres bloques ideológicos con fuerza similar y proyectos propios: Derecha (liberal), Centro (reformas estructuralistas) e Izquierda (socialismo).",
              hint: "Nombra los tres bloques políticos e indica que cada uno representaba cerca de un tercio del electorado.",
              explain: "Definir los tres bloques y sus proyectos ideológicos aclara al instante el escenario político de los años 60."
            },
            {
              partLabel: "Parte 2 • Relación con la elección de 1970",
              prompt: "¿Qué bloque conecta correctamente los tres tercios con el resultado de 1970?",
              options: [
                "En las elecciones de 1970 cada bloque presentó su candidato —Salvador Allende (36,3%), Jorge Alessandri (34,9%) y Radomiro Tomic (27,8%)—, por lo que Allende obtuvo solo una mayoría relativa sin superar el 50%.",
                "En las elecciones de 1970 los tres tercios se unieron detrás de un único candidato que obtuvo el 90% de los votos.",
                "En las elecciones de 1970 solo participaron la derecha y el centro, quedando fuera la izquierda."
              ],
              correct: "En las elecciones de 1970 cada bloque presentó su candidato —Salvador Allende (36,3%), Jorge Alessandri (34,9%) y Radomiro Tomic (27,8%)—, por lo que Allende obtuvo solo una mayoría relativa sin superar el 50%.",
              hint: "Busca la opción que muestre a los tres candidatos compitiendo por separado y el resultado sin mayoría absoluta.",
              explain: "Mencionar a los tres candidatos y la falta de mayoría absoluta (>50%) tiende el puente exacto hacia el Congreso Pleno."
            },
            {
              partLabel: "Parte 3 • Intervención del Congreso Pleno",
              prompt: "¿Qué cierre explica correctamente por qué y cómo intervino el Congreso Pleno?",
              options: [
                "Como ningún candidato alcanzó mayoría absoluta, la Constitución exigía que el Congreso Pleno eligiera entre las dos primeras mayorías; tras acordar el Estatuto de Garantías Constitucionales con la Democracia Cristiana, el Congreso ratificó a Salvador Allende como presidente.",
                "Como ningún candidato superó el 50%, el Congreso Pleno anuló la elección y reeligió a Eduardo Frei Montalva.",
                "El Congreso Pleno intervino únicamente para contar los votos de las zonas rurales."
              ],
              correct: "Como ningún candidato alcanzó mayoría absoluta, la Constitución exigía que el Congreso Pleno eligiera entre las dos primeras mayorías; tras acordar el Estatuto de Garantías Constitucionales con la Democracia Cristiana, el Congreso ratificó a Salvador Allende como presidente.",
              hint: "Recuerda qué mecanismo constitucional se activaba cuando nadie superaba la mitad de los votos.",
              explain: "Así cierras la cadena completa: sistema de tres tercios ➔ mayoría relativa en 1970 ➔ decisión del Congreso Pleno."
            }
          ],
          aiRubric: [
            "Explica correctamente qué significaban los «tres tercios» (división política/electoral en tres bloques equilibrados: Derecha, Centro e Izquierda con proyectos excluyentes).",
            "Relaciona esa división con la elección de 1970 (compitieron tres candidatos —Allende, Alessandri y Tomic— y ninguno obtuvo mayoría absoluta sobre el 50%; Allende logró mayoría relativa ~36,3%).",
            "Explica la intervención del Congreso Pleno (debía elegir entre las dos primeras mayorías cuando nadie superaba el 50%, ratificando finalmente a Salvador Allende tras el acuerdo con la Democracia Cristiana / Estatuto de Garantías Constitucionales)."
          ],
          referenceSummary: "La política de 'tres tercios' significaba que Chile estaba dividido en tres bloques ideológicos con respaldo electoral similar y proyectos propios: Derecha (reformas liberales), Centro (reformas estructuralistas / DC) e Izquierda (camino al socialismo). En las elecciones presidenciales de 1970 cada bloque llevó candidato propio: Salvador Allende (Izquierda/UP, ~36,3%-36,6%), Jorge Alessandri (Derecha, 34,9%) y Radomiro Tomic (Centro/DC, ~27,8%-27,9%). Al no lograr nadie mayoría absoluta (>50%), la Constitución establecía que el Congreso Pleno debía decidir entre las dos primeras mayorías; tras negociar el Estatuto de Garantías Constitucionales con la DC, el Congreso Pleno ratificó a Salvador Allende como presidente."
        }
      ]
    }
  ]
};