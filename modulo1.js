// =============================================================================
// FASE 1: CHILE EN LOS AÑOS 50 Y CRISIS DEL MODELO ISI (Preguntas 1 a 4)
// =============================================================================
window.MODULO_1 = {
  id: "m1",
  tag: "Fase 1 • Preguntas 1 a 4",
  title: "Años 50 y Crisis del Modelo ISI",
  desc: "Pobreza multidimensional, migración campo-ciudad, urbanización (1952–1970) y factores de la crisis del modelo de Industrialización Sustitutiva de Importaciones.",
  questionsCovered: [1, 2, 3, 4],
  steps: [
    // -------------------------------------------------------------------------
    // ETAPA 1: SÍNTESIS VISUAL (ENTRENAMIENTO CONCEPTUAL)
    // -------------------------------------------------------------------------
    {
      label: "Síntesis Visual",
      type: "training",
      items: [
        {
          tag: "Pregunta 1 • Sociedad en los 50",
          title: "Pobreza multidimensional y precariedad en Chile (década de 1950)",
          text: "Durante la década de 1950, gran parte de la población chilena vivía en condiciones de profunda desigualdad y precariedad. Esta pobreza se entiende como multidimensional porque no se reducía únicamente a tener bajos ingresos económicos, sino que implicaba la privación simultánea de derechos y condiciones básicas para vivir con dignidad.",
          bullets: [
            { label: "Salud y alimentación", text: "Alta tasa de mortalidad infantil, elevada desnutrición infantil y acceso muy limitado a atención médica y hospitales." },
            { label: "Educación", text: "Altos índices de analfabetismo y baja escolaridad promedio, especialmente en zonas rurales y sectores populares urbanos." },
            { label: "Vivienda y servicios básicos", text: "Grave déficit habitacional, hacinamiento y falta de agua potable, alcantarillado y electricidad (proliferación de conventillos y 'poblaciones callampa')." }
          ],
          highlight: "En tu respuesta de la Pregunta 1 debes hacer dos cosas: nombrar al menos 3 indicadores concretos (ej. mortalidad infantil, analfabetismo, déficit habitacional) y explicar por qué la pobreza era multidimensional (abarca vivienda, salud, educación y servicios, no solo dinero)."
        },
        {
          tag: "Pregunta 2 • Dinámica demográfica",
          title: "Migración del campo a la ciudad: causas y efectos urbanos",
          text: "A mediados del siglo XX se aceleró un masivo desplazamiento de campesinos hacia centros urbanos como Santiago, Valparaíso y Concepción. Este fenómeno combinó factores de expulsión en el campo y factores de atracción en la ciudad.",
          flow: [
            {
              tag: "Causas (Expulsión rural)",
              title: "Crisis y precariedad del campo",
              detail: "Estancamiento agrícola, sistema tradicional de inquilinaje con bajos salarios y escaso acceso a tierra, salud o escuelas rurales."
            },
            {
              tag: "Causas (Atracción urbana)",
              title: "Búsqueda de empleo y servicios",
              detail: "Expectativa de trabajo en las nuevas industrias impulsadas por el modelo ISI y mayor acceso a educación y atención de salud."
            },
            {
              tag: "Consecuencias urbanas",
              title: "Colapso habitacional y de servicios",
              detail: "Déficit de viviendas, auge de poblaciones callampa y tomas de terreno, hacinamiento e insuficiencia de agua potable, alcantarillado, luz y transporte."
            }
          ],
          highlight: "Para la Pregunta 2 recuerda separar claramente: dos causas que explican por qué salían del campo hacia la ciudad, y dos consecuencias concretas sobre las viviendas y los servicios urbanos."
        },
        {
          tag: "Pregunta 3 • Análisis de datos",
          title: "Explosión urbana (1952–1970): ¿más ciudad significó mejor vida?",
          text: "Entre los censos de 1952 y 1970, Chile vivió una acelerada urbanización, consolidándose como una sociedad predominantemente urbana. Sin embargo, el aumento porcentual de habitantes en las ciudades es un dato cuantitativo que por sí solo no demuestra una mejora en la calidad de vida.",
          barChart: {
            title: "Evolución de la población urbana en Chile (1952–1970)",
            subtitle: "Porcentaje del total nacional viviendo en áreas urbanas (Cuestionario 2°M)",
            bars: [
              { label: "Censo 1952", value: "60,2% urbana", pct: 60.2 },
              { label: "Censo 1970", value: "75,1% urbana (+14,9 pts)", pct: 75.1 }
            ]
          },
          bullets: [
            { label: "Qué transformación muestran", text: "El paso acelerado de una sociedad con fuerte peso rural a una sociedad mayoritariamente urbana (3 de cada 4 chilenos vivía en ciudades en 1970)." },
            { label: "Por qué no bastan para afirmar mejora", text: "El crecimiento demográfico superó la capacidad del Estado y las ciudades para construir viviendas, crear empleos formales y extender servicios sanitarios, aumentando la marginalidad urbana y el hacinamiento." }
          ],
          highlight: "Regla de análisis histórico: vivir en la ciudad no equivale automáticamente a bienestar si la infraestructura, los empleos y las viviendas crecen más lento que la población."
        },
        {
          tag: "Pregunta 4 • Economía (Clase 9)",
          title: "El Modelo ISI: objetivo inicial y sus 5 factores de crisis",
          text: "Durante las décadas de 1940 y 1950, Chile y gran parte de América Latina aplicaron el modelo de Industrialización Sustitutiva de Importaciones (ISI). Logró crecer en la industria liviana (bienes de consumo), pero no consiguió consolidar la industria pesada nacional, sustituir completamente las importaciones ni alcanzar la autosuficiencia económica.",
          bullets: [
            { label: "1. Reducción del presupuesto fiscal", text: "El Estado tuvo menos recursos para financiar y sostener la inversión industrial." },
            { label: "2. Características del mercado interno", text: "Un mercado nacional estrecho y con bajo poder adquisitivo limitaba la demanda de productos industriales." },
            { label: "3. Dispar crecimiento agrícola vs. industrial", text: "El sector agrícola quedó estancado frente a la industria, obligando a importar alimentos y encareciendo el costo de vida." },
            { label: "4. Dependencia tecnológica y de bienes de capital", text: "La necesidad de comprar maquinaria e insumos tecnológicos en Europa y EE.UU. impidió lograr independencia económica." },
            { label: "5. Espiral inflacionario", text: "El alza persistente de precios deterioró los salarios y profundizó el desequilibrio económico." }
          ],
          highlight: "Esta crisis fracturó el consenso político de los años 50: la izquierda criticó que aumentó la dependencia externa (subsidios y préstamos extranjeros), mientras la derecha acusó que la excesiva intervención estatal ahogó la iniciativa privada y distorsionó el mercado."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 2: LABORATORIO DE CONEXIONES (CAUSA -> CONSECUENCIA)
    // -------------------------------------------------------------------------
    {
      label: "Conexiones Causa–Efecto",
      type: "match",
      title: "Conecta cada proceso histórico de los años 50 con su consecuencia directa",
      leftTitle: "Causa o Proceso Histórico",
      rightTitle: "Consecuencia / Concepto Asociado",
      pairs: [
        {
          id: "p1",
          left: "Privación simultánea de vivienda digna, salud, educación y servicios básicos",
          right: "Pobreza multidimensional (va más allá de los bajos ingresos)",
          hint: "Piensa en el concepto que explica por qué la pobreza no se mide solo por falta de dinero.",
          explain: "La pobreza multidimensional integra múltiples carencias: mortalidad infantil, desnutrición, analfabetismo, hacinamiento y falta de saneamiento."
        },
        {
          id: "p2",
          left: "Estancamiento agrícola, sistema de inquilinaje y atracción del empleo industrial urbano",
          right: "Masiva migración del campo a la ciudad",
          hint: "¿Qué movimiento de población provocaron las malas condiciones rurales sumadas al atractivo industrial?",
          explain: "Los factores de expulsión rural y atracción urbana explican el éxodo campesino de mediados del siglo XX."
        },
        {
          id: "p3",
          left: "Llegada acelerada de familias a las ciudades por sobre la oferta de casas e infraestructura",
          right: "Poblaciones callampa, tomas de terreno y colapso de servicios básicos",
          hint: "¿Qué ocurrió con las viviendas y servicios urbanos cuando la población creció de golpe?",
          explain: "El crecimiento urbano desbordó la planificación: surgieron asentamientos precarios sin agua potable ni alcantarillado."
        },
        {
          id: "p4",
          left: "Necesidad de importar maquinaria, tecnología y bienes de capital desde Europa y EE.UU.",
          right: "Frustración de la autosuficiencia e independencia económica del modelo ISI",
          hint: "Aunque Chile fabricaba bienes de consumo livianos, seguía dependiendo del extranjero para producir.",
          explain: "Es el cuarto factor de crisis del ISI: no se consolidó la industria pesada y continuó la dependencia externa."
        },
        {
          id: "p5",
          left: "Dispar crecimiento entre el sector agrícola estancado y el sector industrial",
          right: "Insuficiencia productiva de alimentos y presión sobre la inflación",
          hint: "Observa el tercer factor de desequilibrio del modelo ISI: ¿qué pasa cuando el campo no crece al ritmo de la ciudad?",
          explain: "El retraso del campo impidió abastecer a la creciente población urbana, obligando a importar alimentos y alimentando el alza de precios."
        },
        {
          id: "p6",
          left: "Agotamiento y crisis del modelo ISI a comienzos de la década de 1950",
          right: "Fractura política entre quienes defendían control estatal y quienes pedían liberalizar el mercado",
          hint: "¿Qué debate político se desató cuando quedaron evidentes los límites del ISI?",
          explain: "La izquierda denunció mayor dependencia financiera externa y la derecha culpó a la excesiva intervención estatal."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 3: CLASIFICADOR CONCEPTUAL
    // -------------------------------------------------------------------------
    {
      label: "Clasificador Histórico",
      type: "classify",
      categories: [
        "Indicador de Pobreza (50s)",
        "Migración y Urbanización",
        "Crisis del Modelo ISI"
      ],
      items: [
        {
          statement: "Alta mortalidad infantil y desnutrición en sectores populares",
          correct: "Indicador de Pobreza (50s)",
          hint: "Es una cifra social que refleja las precarias condiciones sanitarias y alimentarias de la época.",
          explain: "La mortalidad infantil y la desnutrición son indicadores directos de la pobreza multidimensional de los años 50."
        },
        {
          statement: "Aumento de la población urbana del 60,2% (1952) al 75,1% (1970)",
          correct: "Migración y Urbanización",
          hint: "Compara dos censos sobre dónde vivía la población chilena.",
          explain: "Refleja el acelerado proceso de urbanización impulsado por el éxodo rural."
        },
        {
          statement: "Dependencia de insumos tecnológicos y bienes de capital provenientes de Europa y EE.UU.",
          correct: "Crisis del Modelo ISI",
          hint: "Es uno de los cinco factores económicos que impidió consolidar la industria pesada nacional.",
          explain: "Corresponde al cuarto factor de la crisis del modelo ISI visto en la Clase 9."
        },
        {
          statement: "Proliferación de 'poblaciones callampa', hacinamiento y tomas de terreno en la periferia",
          correct: "Migración y Urbanización",
          hint: "Es la consecuencia habitacional directa de la llegada masiva de familias a las ciudades.",
          explain: "El déficit habitacional y los campamentos informales fueron efectos centrales del rápido crecimiento urbano."
        },
        {
          statement: "Mercado interno estrecho y reducción del presupuesto fiscal",
          correct: "Crisis del Modelo ISI",
          hint: "Son el primer y segundo factor estructural que frenaron el crecimiento industrial.",
          explain: "Un mercado interno limitado y menos recursos fiscales impidieron sostener el avance del modelo ISI."
        },
        {
          statement: "Elevadas tasas de analfabetismo y baja escolaridad promedio",
          correct: "Indicador de Pobreza (50s)",
          hint: "Se refiere a la dimensión educativa dentro de la precariedad social de la época.",
          explain: "Muestra que la pobreza no era solo económica, sino también educativa."
        },
        {
          statement: "Debate entre mantener el control estatal o liberalizar la economía para corregir la espiral inflacionaria",
          correct: "Crisis del Modelo ISI",
          hint: "Se refiere a la fractura política y técnica frente al desequilibrio económico de los años 50.",
          explain: "La crisis del ISI rompió el consenso previo y dio paso a proyectos políticos opuestos entre izquierda y derecha."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 4: MISIONES ANALÍTICAS (TIPO PAES)
    // -------------------------------------------------------------------------
    {
      label: "Análisis Tipo PAES",
      type: "quiz",
      items: [
        {
          qRef: 1,
          question: "¿Por qué la historiografía define la pobreza chilena de la década de 1950 como un fenómeno 'multidimensional'?",
          options: [
            "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
            "Porque afectaba únicamente a los habitantes de las zonas rurales del sur de Chile.",
            "Porque dependía exclusivamente del precio internacional del cobre en el mercado externo.",
            "Porque se medía únicamente a través del salario mínimo industrial de los obreros."
          ],
          correct: "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
          hint: "Fíjate en la palabra 'multi-dimensional': significa múltiples dimensiones de la vida humana, no solo el dinero.",
          explain: "Multidimensional implica que la precariedad abarcaba salud (mortalidad infantil), educación (analfabetismo), vivienda (hacinamiento) y falta de saneamiento."
        },
        {
          qRef: 2,
          question: "¿Qué combinación explica mejor las causas de la migración del campo a la ciudad a mediados del siglo XX?",
          options: [
            "El estancamiento agrícola y la precariedad del inquilinaje, sumados a la expectativa de empleo industrial y servicios en la ciudad.",
            "La construcción masiva de viviendas gratuitas en las zonas periféricas para atraer exclusivamente a campesinos.",
            "La prohibición estatal de trabajar en la agricultura para obligar a toda la población a vivir en Santiago.",
            "El cierre definitivo de las industrias urbanas que impulsó el retorno hacia las haciendas."
          ],
          correct: "El estancamiento agrícola y la precariedad del inquilinaje, sumados a la expectativa de empleo industrial y servicios en la ciudad.",
          hint: "Recuerda la dupla: factores de expulsión (malas condiciones en el campo) + factores de atracción (empleo y servicios en la ciudad).",
          explain: "La crisis rural expulsaba mano de obra mientras el crecimiento industrial y urbano bajo el ISI actuaba como polo de atracción."
        },
        {
          qRef: 2,
          question: "¿Cuál fue una consecuencia directa de la migración campo-ciudad sobre las viviendas y servicios urbanos?",
          options: [
            "La agudización del déficit habitacional, el surgimiento de poblaciones callampa y la insuficiencia de agua potable y alcantarillado.",
            "La eliminación inmediata del hacinamiento gracias a la abundancia de casas disponibles en el centro.",
            "La disminución de la demanda de transporte público, escuelas y hospitales en las capitales regionales.",
            "El abandono total de las ciudades por falta de infraestructura industrial."
          ],
          correct: "La agudización del déficit habitacional, el surgimiento de poblaciones callampa y la insuficiencia de agua potable y alcantarillado.",
          hint: "Piensa qué sucede cuando llegan miles de familias más rápido de lo que el Estado puede construir casas y redes sanitarias.",
          explain: "La infraestructura urbana no dio abasto, multiplicando los asentamientos precarios y la falta de servicios básicos."
        },
        {
          qRef: 3,
          barChart: {
            title: "Población urbana en Chile (1952 vs. 1970)",
            subtitle: "Datos del cuestionario de estudio",
            bars: [
              { label: "1952", value: "60,2%", pct: 60.2 },
              { label: "1970", value: "75,1%", pct: 75.1 }
            ]
          },
          question: "Al observar el aumento de la población urbana del 60,2% (1952) al 75,1% (1970), ¿por qué estos datos NO permiten afirmar por sí solos que mejoró la calidad de vida?",
          options: [
            "Porque indican dónde vivía la gente, pero ocultan la marginalidad urbana, el hacinamiento, el empleo informal y la falta de servicios básicos.",
            "Porque demuestran que la población rural creció más rápido que la población de las ciudades.",
            "Porque el 75,1% corresponde únicamente a trabajadores agrícolas que viajaban por temporada.",
            "Porque la urbanización siempre produce automáticamente un aumento de los salarios reales."
          ],
          correct: "Porque indican dónde vivía la gente, pero ocultan la marginalidad urbana, el hacinamiento, el empleo informal y la falta de servicios básicos.",
          hint: "Un porcentaje demográfico solo muestra localización (campo vs. ciudad), no las condiciones reales en que vivían esas familias.",
          explain: "Gran parte del nuevo crecimiento urbano se concentró en campamentos y poblaciones sin servicios, por lo que mayor urbanización no equivalió automáticamente a bienestar."
        },
        {
          qRef: 4,
          question: "¿Cuál era el objetivo de largo plazo del modelo de Industrialización Sustitutiva de Importaciones (ISI)?",
          options: [
            "Consolidar una industria pesada nacional, sustituir las importaciones y alcanzar la autosuficiencia e independencia económica.",
            "Eliminar toda industria nacional para depender únicamente de la importación de productos europeos.",
            "Privatizar todas las empresas del Estado y suprimir cualquier tipo de arancel aduanero.",
            "Limitar la economía chilena exclusivamente a la producción agrícola tradicional."
          ],
          correct: "Consolidar una industria pesada nacional, sustituir las importaciones y alcanzar la autosuficiencia e independencia económica.",
          hint: "Revisa la sigla ISI: Industrialización Sustitutiva de Importaciones. Buscaba dejar de depender de productos manufacturados extranjeros.",
          explain: "Aunque la industria liviana creció durante años, los objetivos de largo plazo (industria pesada y autosuficiencia) no se cumplieron."
        },
        {
          qRef: 4,
          question: "Según los factores de la crisis del modelo ISI, ¿por qué la industria nacional no logró romper la dependencia económica externa?",
          options: [
            "Porque necesitaba seguir comprando insumos tecnológicos y bienes de capital (maquinaria) en Europa y Estados Unidos.",
            "Porque América Latina dejó de consumir productos manufacturados durante los años 50.",
            "Porque el sector agrícola creció mucho más rápido que el sector industrial y desplazó a las fábricas.",
            "Porque el presupuesto fiscal tuvo un exceso de superávit imposible de gastar."
          ],
          correct: "Porque necesitaba seguir comprando insumos tecnológicos y bienes de capital (maquinaria) en Europa y Estados Unidos.",
          hint: "Piensa en el cuarto factor de la Clase 9: para fabricar productos en Chile, ¿de dónde venían las máquinas y la tecnología?",
          explain: "Al no consolidarse una industria pesada propia, Chile siguió dependiendo de divisas, tecnología y maquinaria extranjera."
        },
        {
          qRef: 4,
          question: "¿Cómo reaccionaron la izquierda y la derecha chilena frente a la crisis del modelo ISI a inicios de los años 50?",
          options: [
            "La izquierda criticó que aumentó la dependencia financiera externa; la derecha acusó que la excesiva intervención estatal ahogó la iniciativa privada.",
            "Ambos sectores acordaron mantener intacto el modelo ISI sin realizar ninguna reforma económica.",
            "La derecha propuso aumentar el control estatal de precios, mientras la izquierda pidió eliminar al Estado de la economía.",
            "Ambos sectores atribuyeron la crisis únicamente a la baja población urbana del país."
          ],
          correct: "La izquierda criticó que aumentó la dependencia financiera externa; la derecha acusó que la excesiva intervención estatal ahogó la iniciativa privada.",
          hint: "Recuerda el debate final de la Clase 9: cada sector diagnosticó el origen de la crisis desde su propia visión económica.",
          explain: "Esta fractura puso fin al consenso de los gobiernos radicales y preparó el choque de proyectos políticos de la década de 1960."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 5: TALLER DE DESARROLLO — PREGUNTAS EXACTAS 1 A 4 DEL CUESTIONARIO
    // -------------------------------------------------------------------------
    {
      label: "Taller Cuestionario (P1–P4)",
      type: "open_workshop",
      items: [
        {
          qNum: 1,
          question: "¿Qué problemas caracterizaban la pobreza y la precariedad en Chile durante la década de 1950? Menciona tres indicadores y explica por qué la pobreza era multidimensional.",
          structureTip: "1) Describe brevemente la precariedad de los años 50. 2) Menciona al menos 3 indicadores específicos (salud, educación, vivienda). 3) Cierra explicando por qué el concepto 'multidimensional' va más allá del dinero.",
          keywords: [
            { label: "Indicador salud/nutrición", terms: ["mortalidad", "desnutri", "salud", "hospital", "medico", "enfermedad"] },
            { label: "Indicador educación", terms: ["analfabet", "escolaridad", "educacion", "escuela"] },
            { label: "Indicador vivienda/servicios", terms: ["vivienda", "habitacional", "callampa", "hacinamiento", "agua", "alcantarillado", "conventillo"] },
            { label: "Noción multidimensional", terms: ["multidimensional", "no solo", "ingresos", "dinero", "varias dimensiones", "distintos ambitos", "simultane"] }
          ],
          rubric: [
            "Mencioné al menos tres indicadores concretos de precariedad (ej. mortalidad infantil, analfabetismo, déficit habitacional, desnutrición o falta de servicios básicos).",
            "Expliqué con mis palabras que la pobreza era multidimensional porque no se reducía solo a bajos ingresos económicos.",
            "Conecté múltiples ámbitos de privación simultánea (salud, educación, vivienda y condiciones sanitarias)."
          ],
          modelAnswer: "Durante la década de 1950, la pobreza en Chile se caracterizaba por profundas desigualdades y precarias condiciones de vida en gran parte de la población. Tres indicadores clave fueron la alta tasa de mortalidad infantil (junto a la desnutrición), el elevado analfabetismo y el grave déficit habitacional, visible en el hacinamiento y la falta de agua potable o alcantarillado en conventillos y poblaciones callampa. Esta pobreza era multidimensional porque no consistía únicamente en la falta de ingresos o dinero, sino en la privación simultánea de derechos y necesidades básicas en distintas dimensiones de la vida cotidiana: salud, educación, alimentación y vivienda digna."
        },
        {
          qNum: 2,
          question: "Explica dos causas de la migración del campo a la ciudad y dos consecuencias que tuvo para las viviendas y los servicios urbanos.",
          structureTip: "Organiza tu respuesta en dos partes claras: primero las 2 causas (una de expulsión rural y una de atracción urbana) y luego las 2 consecuencias (una sobre viviendas y otra sobre servicios urbanos).",
          keywords: [
            { label: "Causa rural (expulsión)", terms: ["agricola", "campo", "inquilin", "latifundio", "estancamiento", "pobreza rural", "salarios"] },
            { label: "Causa urbana (atracción)", terms: ["industria", "isi", "empleo", "trabajo", "oportunidades", "servicios", "ciudad"] },
            { label: "Consecuencia viviendas", terms: ["deficit", "vivienda", "callampa", "tomas", "hacinamiento", "campamento", "periferia"] },
            { label: "Consecuencia servicios", terms: ["agua", "alcantarillado", "electricidad", "luz", "transporte", "salud", "colapso", "insuficien"] }
          ],
          rubric: [
            "Expliqué al menos dos causas diferenciadas de la migración campo-ciudad (ej. crisis/precariedad agrícola y atracción del empleo industrial/servicios urbanos).",
            "Expliqué una consecuencia concreta en las viviendas (ej. déficit habitacional, hacinamiento, poblaciones callampa o tomas de terreno).",
            "Expliqué una consecuencia concreta en los servicios urbanos (ej. insuficiencia o colapso de agua potable, alcantarillado, electricidad, transporte o salud)."
          ],
          modelAnswer: "Entre las principales causas de la migración del campo a la ciudad estuvieron, por un lado, el estancamiento agrícola y las precarias condiciones laborales del sistema de inquilinaje (bajos salarios y escasas oportunidades rurales) y, por otro, la atracción que ejercían las ciudades por la expectativa de empleo en la industria impulsada por el modelo ISI y el mayor acceso a servicios. Como consecuencias, en materia de viviendas se agudizó el déficit habitacional, lo que provocó hacinamiento, tomas de terreno y el crecimiento de 'poblaciones callampa' en la periferia. Respecto a los servicios urbanos, la infraestructura resultó insuficiente para tantos habitantes nuevos, generando graves carencias de agua potable, alcantarillado, electricidad, transporte y atención de salud."
        },
        {
          qNum: 3,
          question: "La población urbana aumentó del 60,2% en 1952 al 75,1% en 1970. ¿Qué transformación muestran estos datos y por qué no permiten afirmar, por sí solos, que mejoró la calidad de vida?",
          structureTip: "1) Interpreta el cambio cuantitativo (proceso de urbanización acelerada). 2) Argumenta por qué vivir en la ciudad no garantiza automáticamente mejor calidad de vida usando ejemplos históricos.",
          keywords: [
            { label: "Transformación (urbanización)", terms: ["urbanizacion", "urbana", "mayoritariamente", "crecimiento", "migracion", "campo a la ciudad"] },
            { label: "Límite del dato", terms: ["no garantiza", "por si solos", "no implica", "no significa", "no demuestran", "no reflejan", "no basta"] },
            { label: "Evidencia de precariedad urbana", terms: ["marginalidad", "hacinamiento", "callampa", "deficit", "servicios", "pobreza", "informal", "infraestructura"] }
          ],
          rubric: [
            "Identifiqué la transformación histórica que muestran los porcentajes: una acelerada urbanización que consolidó a Chile como un país mayoritariamente urbano.",
            "Expliqué claramente por qué el dato cuantitativo no basta para concluir que mejoró la calidad de vida.",
            "Respaldé mi argumento con problemas reales de las ciudades de la época (marginalidad urbana, poblaciones callampa, hacinamiento o falta de servicios y empleos formales)."
          ],
          modelAnswer: "Estos datos muestran un acelerado proceso de urbanización en menos de dos décadas, consolidando a Chile como una sociedad mayoritariamente urbana (en 1970 tres de cada cuatro habitantes vivía en ciudades). Sin embargo, estas cifras no permiten afirmar por sí solas que mejoró la calidad de vida, porque solo miden la distribución geográfica de la población y no sus condiciones materiales. En la práctica, el crecimiento urbano fue más rápido que la capacidad del Estado y la economía para entregar viviendas dignas, empleos estables y servicios básicos, por lo que miles de nuevos habitantes urbanos vivieron en marginalidad, hacinamiento y poblaciones callampa sin saneamiento adecuado."
        },
        {
          qNum: 4,
          question: "¿Cuál era el objetivo del modelo ISI? Explica dos dificultades que impidieron alcanzar una mayor independencia económica.",
          structureTip: "1) Define el objetivo central del modelo ISI (sustituir importaciones, industrializar y lograr autosuficiencia). 2) Elige y explica 2 de los 5 factores de crisis vistos en la Clase 9 (ej. dependencia tecnológica/bienes de capital, mercado interno estrecho, estancamiento agrícola, inflación o reducción del presupuesto fiscal).",
          keywords: [
            { label: "Objetivo del ISI", terms: ["sustituir", "importaciones", "industria", "autosuficiencia", "independencia", "desarrollo industrial"] },
            { label: "Dificultad 1 (tecnología/capital)", terms: ["tecnolog", "bienes de capital", "maquinaria", "europa", "estados unidos", "ee.uu", "pesada"] },
            { label: "Dificultad 2 (mercado/fiscal/agrícola/inflación)", terms: ["mercado interno", "presupuesto fiscal", "agricola", "inflacion", "prestamos", "emprestitos", "dependencia"] }
          ],
          rubric: [
            "Expliqué correctamente el objetivo del modelo ISI (sustituir importaciones desarrollando la industria nacional para lograr autosuficiencia e independencia económica).",
            "Expliqué una primera dificultad concreta que frenó la independencia (ej. necesidad de importar tecnología y bienes de capital de Europa y EE.UU., impidiendo consolidar la industria pesada).",
            "Expliqué una segunda dificultad concreta (ej. mercado interno estrecho, dispar crecimiento agrícola frente al industrial, reducción del presupuesto fiscal o espiral inflacionario)."
          ],
          modelAnswer: "El objetivo del modelo de Industrialización Sustitutiva de Importaciones (ISI) era fomentar la industria nacional —avanzando desde la industria liviana hacia la industria pesada— para sustituir los productos manufacturados extranjeros y alcanzar una mayor autosuficiencia e independencia económica. Entre las dificultades que impidieron lograrlo destacó, primero, la persistente necesidad de comprar insumos tecnológicos y bienes de capital (maquinaria) en Europa y Estados Unidos, lo que mantuvo la dependencia externa y frenó el desarrollo de la industria pesada. En segundo lugar, las limitaciones del mercado interno (estrecho y con bajo poder adquisitivo), sumadas al dispar crecimiento del sector agrícola respecto del industrial, la reducción del presupuesto fiscal y la espiral inflacionaria, impidieron sostener el crecimiento del modelo."
        }
      ]
    }
  ]
};
