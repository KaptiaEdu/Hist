// =============================================================================
// FASE 4: SALVADOR ALLENDE, UNIDAD POPULAR (1970–1973) Y SIMULADOR FINAL
// Claves cubiertas en Taller: 11, 12, 13, 14 y 15 + Simulador Integrador (1–15)
// =============================================================================
window.MODULO_4 = {
  id: "m4",
  tag: "Fase 4 • Claves 11 a 15 + Simulador Final",
  title: "Salvador Allende, UP y Simulador Final",
  desc: "Vía chilena al socialismo, áreas de propiedad, Nacionalización del cobre (1971), crisis 1972–73, JAP, polarización, Canción del Poder Popular y Simulador 1,0–7,0.",
  clavesCovered: [11, 12, 13, 14, 15],
  steps: [
    // -------------------------------------------------------------------------
    // ETAPA 1: SÍNTESIS VISUAL (100% AUTOSUFICIENTE)
    // -------------------------------------------------------------------------
    {
      label: "Síntesis Visual",
      type: "training",
      intro: "Recorre en 6 fichas visuales el proyecto de la Unidad Popular, la Nacionalización del cobre, la crisis de 1972–1973, la polarización política, la expresión cultural popular y el Cuadro Comparativo Maestro de los tres gobiernos.",
      items: [
        {
          tag: "Proyecto Político • 1970–1973",
          title: "La «vía chilena al socialismo», áreas de propiedad y medidas sociales",
          text: "Tras asumir en noviembre de 1970, Salvador Allende y la Unidad Popular (UP) impulsaron la «vía chilena al socialismo» («revolución con sabor a empanadas y vino tinto»): buscaban transitar hacia una sociedad socialista por medios institucionales y democráticos, superando la dependencia económica externa y la postergación social.",
          flow: [
            {
              tag: "Área de Propiedad Social",
              title: "Empresas estratégicas estatales",
              detail: "Agrupaba las grandes industrias estratégicas, la gran minería, la banca y los monopolios que pasaban a propiedad y control del Estado."
            },
            {
              tag: "Área Mixta",
              title: "Capital estatal y privado",
              detail: "Empresas en las que el Estado y empresarios privados participaban conjuntamente en la propiedad y gestión productiva."
            },
            {
              tag: "Área Privada",
              title: "Pequeños y medianos privados",
              detail: "Pequeñas y medianas empresas, comercios y talleres que permanecían en manos particulares."
            }
          ],
          bullets: [
            { label: "Políticas sociales (Primeras 40 medidas)", text: "Entrega de medio litro de leche diario a todos los niños de Chile, matrícula y útiles escolares gratuitos en enseñanza básica, desayuno y almuerzo escolar, consultorios materno-infantiles en poblaciones, medicina gratuita en hospitales, becas estudiantiles, ampliación de la previsión y aumento de sueldos y poder adquisitivo." },
            { label: "Plano educativo", text: "Se impulsó la Universidad Técnica del Estado (UTE) en la formación de trabajadores y se propuso la Escuela Nacional Unificada (ENU), rechazada por la oposición como intento de adoctrinamiento." }
          ],
          highlight: "La vía chilena al socialismo buscó una transformación socialista dentro de la democracia, combinando la estatización gradual en tres áreas de propiedad con una fuerte expansión de derechos sociales."
        },
        {
          tag: "Gran Minería • Comparación Clave",
          title: "Chilenización (Frei) vs. Nacionalización del cobre (1971)",
          text: "El cobre era considerado el «sueldo de Chile» y durante décadas estuvo controlado por compañías estadounidenses (como Anaconda y Kennecott). Entre 1965 y 1971, el país pasó de una participación pactada mayoritaria a la propiedad estatal absoluta.",
          table: {
            headers: ["Aspecto", "Chilenización / Nac. Pactada (Frei, 1965–1969)", "Nacionalización del Cobre (Allende, 1971)"],
            rows: [
              ["Propiedad de las mineras", "El Estado compró de forma pactada el 51% de las acciones de filiales estadounidenses (sociedades mixtas).", "El Estado pasó a ser dueño del 100% de la gran minería del cobre (estatización total)."],
              ["Mecanismo legal", "Acuerdos negociados con las compañías mineras; creación de Codelco.", "Reforma constitucional aprobada por unanimidad en el Congreso Pleno (todos los sectores votaron a favor)."],
              ["Relación con EE.UU.", "Contó con respaldo y créditos de Estados Unidos.", "Generó duros conflictos por las indemnizaciones y embargos de las compañías estadounidenses."]
            ]
          },
          highlight: "La diferencia clave está en la propiedad: Frei obtuvo el 51% pactado (sociedades mixtas con las mineras norteamericanas), mientras en 1971 la Nacionalización entregó el 100% de la propiedad al Estado chileno por voto unánime del Congreso."
        },
        {
          tag: "Crisis Económica • 1972–1973",
          title: "Inflación, desabastecimiento y el rol de las JAP",
          text: "Tras un primer año (1971) con reactivación económica, aumento de salarios y baja del desempleo, en 1972 y 1973 estalló una grave crisis marcada por hiperinflación (llegó al 260% en 1972), escasez de bienes básicos y largas filas.",
          bullets: [
            { label: "Desequilibrio fiscal y emisión", text: "La fuerte expansión del gasto público, el aumento de la demanda, la caída de ingresos fiscales, el agotamiento de reservas internacionales y la alta emisión monetaria dispararon la inflación." },
            { label: "Factores externos y boicot interno", text: "Estados Unidos cortó créditos y flujos financieros hacia Chile; internamente, sectores empresariales recurrieron al acaparamiento de bienes, mercado negro, especulación y boicot productivo." },
            { label: "Paro de Octubre (1972)", text: "Dueños de camiones y otros gremios paralizaron el país con respaldo de la oposición (CODE) y financiamiento de la CIA, bloqueando la distribución de alimentos y productos básicos." },
            { label: "Función de las JAP", text: "Para enfrentar la escasez y el mercado negro, el gobierno promovió las Juntas de Abastecimiento y Precios (JAP): organizaciones vecinales encargadas de fiscalizar precios oficiales y distribuir canastas de mercadería básica según las necesidades de cada familia." }
          ],
          highlight: "La crisis de 1972–1973 combinó factores económicos internos (déficit fiscal y emisión), presión externa (corte de créditos de EE.UU.) y conflictos internos (acaparamiento, mercado negro y Paro de Octubre)."
        },
        {
          tag: "Crisis Política • 1971–1973",
          title: "Polarización política, intervención de EE.UU. y militares en 1972",
          text: "A comienzos de los años setenta se rompió el consenso democrático. El debate político se volvió hostil y agresivo: los adversarios dejaron de verse como oposición para tratarse como «enemigos», mientras la sociedad se dividía en dos bandos irreconciliables.",
          bullets: [
            { label: "Conflictos internos y violencia", text: "Sin mayoría en el Congreso, la UP usó resquicios legales de 1932 y la Cámara la acusó de inconstitucionalidad. Se multiplicaron marchas (Marcha de las Cacerolas), tomas de fábricas y fundos, sabotajes y violencia de grupos extrapartidarios: Patria y Libertad (extrema derecha), MIR y VOP (extrema izquierda; asesinato de Edmundo Pérez Zujovic)." },
            { label: "Intervención de Estados Unidos", text: "Además del bloqueo financiero, la CIA financió a medios de prensa opositores (como El Mercurio) y apoyó económicamente el Paro de Octubre de 1972 para desestabilizar al gobierno." },
            { label: "Militares al gabinete (1972)", text: "Tras el Paro de Octubre, Allende incorporó a las Fuerzas Armadas a ministerios clave —como el general Carlos Prats en el Ministerio del Interior— buscando restituir el orden público y neutralizar la polarización." },
            { label: "Hacia el quiebre (1973)", text: "Las parlamentarias de marzo de 1973 (UP 43,5% vs. CODE mayoría), el intento fallido del Tanquetazo (29 de junio) y la renuncia de Prats en agosto precedieron al Golpe de Estado del 11 de septiembre de 1973." }
          ],
          highlight: "La incorporación de militares al gabinete en 1972 fue un intento desesperado de Allende por recuperar la gobernabilidad en medio de conflictos internos crecientes y la intervención encubierta de Estados Unidos."
        },
        {
          tag: "Cultura y Participación Popular",
          title: "Arte comprometido y la «Canción del Poder Popular»",
          text: "Durante los años sesenta y la Unidad Popular, la música, el muralismo (Brigada Ramona Parra) y el cine documental se convirtieron en vehículos directos de crítica social y movilización. La Nueva Canción Chilena —con figuras como Violeta Parra, Víctor Jara, Quilapayún e Inti-Illimani— reflejó el protagonismo de los sectores populares.",
          bullets: [
            { label: "Origen de la obra", text: "La «Canción del Poder Popular» (de Luis Advis y Julio Rojas, interpretada por Inti-Illimani en el álbum Canto al Programa de 1970) fue compuesta para difundir el sentido participativo del programa de la Unidad Popular." },
            { label: "Eje 1: Protagonismo ciudadano colectivo", text: "Convoca a hombres y mujeres por igual a asumir un rol activo, trabajar juntos y tomar el control de los asuntos del país en lugar de quedar como espectadores pasivos." },
            { label: "Eje 2: Cambio profundo más allá de una elección", text: "Su estribillo subraya que el proceso de 1970 no busca simplemente reemplazar un presidente por otro, sino que el propio pueblo sea el constructor de un Chile distinto, con dignidad y libertad." },
            { label: "Eje 3: Unidad inclusiva y soberanía", text: "Invita con puertas abiertas a sumarse a la Unidad Popular, proclama que los sectores populares ahora participan en el gobierno y rechaza la injerencia extranjera." }
          ],
          highlight: "La canción conecta cultura y política: refleja la ampliación del sufragio, la autogestión (cordones industriales, juntas y consejos) y la aspiración de la UP de que el pueblo fuera protagonista del cambio."
        },
        {
          tag: "Síntesis Global • 1958–1973",
          title: "Cuadro Comparativo Maestro: Alessandri, Frei y Allende",
          text: "Antes de pasar a las misiones finales y al Simulador de Prueba, fija esta panorámica completa para no confundir nunca qué impulsó cada presidente.",
          table: {
            headers: ["Eje", "J. Alessandri (1958–1964)", "E. Frei Montalva (1964–1970)", "S. Allende (1970–1973)"],
            rows: [
              ["Bloque y lema", "Derecha • «La hora de los gerentes»", "Centro (DC) • «Revolución en Libertad»", "Izquierda (UP) • «Vía chilena al socialismo»"],
              ["Economía y Estado", "Reformas liberales, autonomía privada y CORFO de fomento (revertidas tras 1961).", "Estado reformista, Alianza para el Progreso y modernización productiva.", "Tres áreas de propiedad (social, mixta y privada) y control estatal estratégico."],
              ["Cobre", "Sin cambios en la propiedad estadounidense.", "Chilenización y Nacionalización Pactada: Estado compra 51% y crea Codelco.", "Nacionalización total (1971): 100% estatal por unanimidad en el Congreso."],
              ["Reforma Agraria", "Ley 1962: crea la CORA; solo tierras mal explotadas («de macetero»).", "Ley 1967: expropia predios >80 HRB, asentamientos y sindicalización (~3,5 mill. ha).", "Aceleración máxima: incluso <80 HRB y bien explotadas (~5,5 mill. ha, CERA)."]
            ]
          },
          highlight: "Observar los tres gobiernos en paralelo muestra la aceleración histórica del siglo XX: Chile pasó de reformas liberales moderadas a transformaciones estructurales y luego a un proyecto socialista en apenas 15 años."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 2: CONEXIONES CAUSA -> EFECTO (FOCUS-RIGHT)
    // -------------------------------------------------------------------------
    {
      label: "Conexiones Causa–Efecto",
      type: "match",
      intro: "Conecta cada proceso de la Unidad Popular (izquierda) con su efecto o característica clave (derecha). Al elegir una tarjeta de la izquierda, las demás se bloquean para ayudarte a enfocar.",
      title: "Conecta cada proceso de 1970–1973 con su consecuencia directa",
      leftTitle: "Proceso o Medida (UP)",
      rightTitle: "Consecuencia o Característica",
      pairs: [
        {
          id: "p1",
          left: "Reforma constitucional unánime de 1971 sobre la gran minería del cobre",
          right: "Propiedad estatal del 100% del cobre (Nacionalización total), a diferencia del 51% pactado con Frei",
          hint: "Compara el porcentaje estatal alcanzado en 1971 frente a la Chilenización de 1965–1969.",
          explain: "La Nacionalización de 1971 traspasó completamente el «sueldo de Chile» al Estado con el apoyo unánime del Congreso Pleno."
        },
        {
          id: "p2",
          left: "Proyecto económico de la «vía chilena al socialismo» (primera fase)",
          right: "División de la economía en Área de Propiedad Social (estatal), Área Mixta y Área Privada",
          hint: "¿Cómo organizó la Unidad Popular la propiedad de las empresas en el país?",
          explain: "El programa distinguió grandes empresas estratégicas (social), asociaciones Estado-privados (mixta) y pequeños negocios (privada)."
        },
        {
          id: "p3",
          left: "Aumento del déficit fiscal, alta emisión monetaria, corte de créditos de EE.UU. y acaparamiento",
          right: "Hiperinflación (260% en 1972), mercado negro y agudo desabastecimiento de bienes básicos",
          hint: "¿Qué crisis económica y cotidiana provocaron en conjunto estos factores internos y externos?",
          explain: "La combinación de desequilibrios fiscales, bloqueo financiero externo y boicot interno disparó la inflación y las filas."
        },
        {
          id: "p4",
          left: "Escasez de alimentos básicos y especulación en el mercado negro (1972–1973)",
          right: "Creación de las Juntas de Abastecimiento y Precios (JAP) para repartir canastas y controlar precios",
          hint: "¿Qué organización vecinal promovió el gobierno para enfrentar el desabastecimiento?",
          explain: "Las JAP organizaban la distribución de productos básicos según las necesidades familiares y fiscalizaban precios oficiales."
        },
        {
          id: "p5",
          left: "Paro de Octubre de 1972 (gremio de camiones con respaldo de CODE y fondos de la CIA)",
          right: "Paralización de la distribución de bienes e ingreso de militares al gabinete (general Carlos Prats)",
          hint: "¿Qué decisión política tomó Allende en 1972 para destrabar el paro y restituir el orden?",
          explain: "Allende incorporó a las Fuerzas Armadas a ministerios clave, nombrando al general Prats en el Ministerio del Interior."
        },
        {
          id: "p6",
          left: "Búsqueda de protagonismo ciudadano y poder popular en el proyecto de la Unidad Popular",
          right: "Expresión cultural en la Nueva Canción Chilena (como la Canción del Poder Popular) y cordones industriales",
          hint: "¿Cómo se reflejó en la cultura y en las organizaciones populares la idea de que el pueblo construyera el cambio?",
          explain: "Tanto los cordones industriales como canciones del disco Canto al Programa reflejaron el ideal de participación popular directa."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 3: CLASIFICADOR HISTÓRICO
    // -------------------------------------------------------------------------
    {
      label: "Clasificador",
      type: "classify",
      intro: "Clasifica cada medida, actor o acontecimiento de 1970–1973 en su dimensión correspondiente: Proyecto UP, Crisis Económica o Polarización Política.",
      categories: [
        "Proyecto Económico y Social UP",
        "Crisis Económica y Desabastecimiento",
        "Polarización y Quiebre Político"
      ],
      items: [
        {
          statement: "Entrega de medio litro de leche diario a todos los niños de Chile y medicina gratuita en hospitales",
          correct: "Proyecto Económico y Social UP",
          hint: "Forma parte de las primeras 40 medidas sociales del gobierno de Salvador Allende.",
          explain: "Las 40 medidas priorizaron nutrición infantil, salud gratuita, becas y acceso a educación básica."
        },
        {
          statement: "Inflación del 260% en 1972 por expansión del gasto público, emisión monetaria y agotamiento de reservas",
          correct: "Crisis Económica y Desabastecimiento",
          hint: "Es un indicador directo del desequilibrio económico que golpeó al país desde 1972.",
          explain: "El aumento del déficit fiscal y la emisión crediticia aceleraron la espiral inflacionaria."
        },
        {
          statement: "Enfrentamientos y violencia callejera de grupos extrapartidarios como Patria y Libertad, MIR y VOP",
          correct: "Polarización y Quiebre Político",
          hint: "Refleja la radicalización extrema y la pérdida de consenso democrático.",
          explain: "Los grupos extrapartidarios realizaron sabotajes, tomas, barricadas y atentados (como el asesinato de Pérez Zujovic)."
        },
        {
          statement: "Organización económica en Área de Propiedad Social, Área Mixta y Área Privada",
          correct: "Proyecto Económico y Social UP",
          hint: "Corresponde a la estructura de propiedad propuesta en la primera fase de la vía chilena al socialismo.",
          explain: "La UP buscó que el Estado controlara sectores estratégicos manteniendo espacios mixtos y privados."
        },
        {
          statement: "Acaparamiento de mercadería, desarrollo del mercado negro y distribución de canastas por las JAP",
          correct: "Crisis Económica y Desabastecimiento",
          hint: "Se refiere directamente a la falta de bienes básicos y a la respuesta institucional frente a la escasez.",
          explain: "El acaparamiento y la especulación agravaron el desabastecimiento, ante lo cual operaron las JAP."
        },
        {
          statement: "Financiamiento de la CIA a prensa opositora y al Paro de Octubre de 1972",
          correct: "Polarización y Quiebre Político",
          hint: "Muestra el papel de la intervención de Estados Unidos en el conflicto político interno.",
          explain: "En el marco de la Guerra Fría, Estados Unidos financió actores opositores para desestabilizar al gobierno de Allende."
        },
        {
          statement: "Nacionalización total de la gran minería del cobre aprobada por unanimidad en 1971",
          correct: "Proyecto Económico y Social UP",
          hint: "Fue la estatización más emblemática del programa económico de la Unidad Popular.",
          explain: "Mediante reforma constitucional, Chile asumió el 100% de la propiedad de la gran minería del cobre."
        },
        {
          statement: "Incorporación de militares al gabinete en 1972 (general Carlos Prats en el Ministerio del Interior)",
          correct: "Polarización y Quiebre Político",
          hint: "Fue la medida política de emergencia tomada tras el Paro de Octubre para contener la crisis.",
          explain: "Allende buscó en los militares un respaldo institucional para restaurar el orden frente a la polarización."
        },
        {
          statement: "Paralización del transporte de alimentos durante el Paro de Octubre y Marcha de las Cacerolas por ollas vacías",
          correct: "Crisis Económica y Desabastecimiento",
          hint: "Conecta el bloqueo en la distribución de bienes con las protestas ciudadanas por la escasez.",
          explain: "La interrupción del transporte de carga agudizó la falta de productos esenciales en las ciudades."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 4: ANÁLISIS HISTÓRICO (TIPO PAES)
    // -------------------------------------------------------------------------
    {
      label: "Análisis Histórico",
      type: "quiz",
      intro: "Pon a prueba tu comprensión analítica sobre la Unidad Popular, las diferencias en la propiedad del cobre, la crisis de 1972–1973, la polarización y el sentido cultural del Poder Popular.",
      items: [
        {
          table: {
            headers: ["Proceso", "Presidente", "Propiedad estatal alcanzada"],
            rows: [
              ["Chilenización / Nac. Pactada (1965–69)", "Eduardo Frei Montalva", "51% accionario (sociedades mixtas pactadas)"],
              ["Nacionalización del Cobre (1971)", "Salvador Allende", "100% estatal (reforma constitucional unánime)"]
            ]
          },
          question: "¿Cuál fue la principal diferencia de propiedad entre la Chilenización del cobre (Frei) y la Nacionalización del cobre de 1971 (Allende)?",
          options: [
            "Con Frei el Estado adquirió de forma pactada el 51% formando sociedades mixtas con empresas estadounidenses; en 1971 el Estado asumió el 100% de la propiedad minera.",
            "Con Frei el Estado nacionalizó el 100% de las minas y con Allende se vendió el 49% a capitales extranjeros.",
            "Con Allende se rechazó la nacionalización en el Congreso, mientras con Frei se aprobó por unanimidad.",
            "Ambos gobiernos mantuvieron el 100% de la propiedad en manos de las compañías norteamericanas."
          ],
          correct: "Con Frei el Estado adquirió de forma pactada el 51% formando sociedades mixtas con empresas estadounidenses; en 1971 el Estado asumió el 100% de la propiedad minera.",
          hint: "Compara las cifras de la tercera columna en la tabla: 51% pactado vs. 100% estatal.",
          explain: "La Nacionalización de 1971 culminó el proceso iniciado con la Chilenización, pasando de sociedades mixtas al control estatal total."
        },
        {
          question: "¿Qué distinguía a la «vía chilena al socialismo» de Salvador Allende respecto de otras experiencias socialistas del siglo XX?",
          options: [
            "Proponía construir una sociedad socialista mediante la vía electoral, institucional y democrática, sin una revolución armada.",
            "Proponía eliminar toda participación de los trabajadores y privatizar las empresas estatales.",
            "Buscaba mantener la economía dependiente de Estados Unidos sin reformas estructurales.",
            "Rechazaba la existencia de pequeñas y medianas empresas privadas desde el primer día."
          ],
          correct: "Proponía construir una sociedad socialista mediante la vía electoral, institucional y democrática, sin una revolución armada.",
          hint: "Recuerda el lema del proyecto: avanzar al socialismo respetando la institucionalidad democrática.",
          explain: "Allende llegó al poder mediante elecciones democráticas y planteó una transición institucional organizada en tres áreas de propiedad."
        },
        {
          question: "Dentro del proyecto económico de la Unidad Popular, ¿qué abarcaba el Área de Propiedad Social?",
          options: [
            "Las grandes empresas estratégicas, la gran minería, la banca y los monopolios bajo propiedad y control estatal.",
            "Únicamente los pequeños almacenes de barrio y talleres familiares.",
            "Las empresas privadas extranjeras exentas de cualquier regulación del Estado.",
            "Solo las tierras agrícolas menores a 80 hectáreas de riego básico."
          ],
          correct: "Las grandes empresas estratégicas, la gran minería, la banca y los monopolios bajo propiedad y control estatal.",
          hint: "Distingue las tres áreas: Social (estatal estratégica), Mixta (Estado + privados) y Privada (pequeños y medianos).",
          explain: "El Área de Propiedad Social buscaba poner los sectores clave de la economía al servicio de la planificación estatal."
        },
        {
          question: "¿Qué combinación de factores explica la inflación y el desabastecimiento que afectaron a Chile entre 1972 y 1973?",
          options: [
            "Déficit fiscal y alta emisión monetaria, corte de créditos de EE.UU., acaparamiento/mercado negro y el Paro de Octubre de 1972.",
            "Un exceso de producción agrícola y la abundancia de créditos internacionales sin intereses.",
            "La congelación total de los sueldos y la eliminación de las compras estatales desde 1970.",
            "La ausencia de protestas sociales y la baja demanda de alimentos en las ciudades."
          ],
          correct: "Déficit fiscal y alta emisión monetaria, corte de créditos de EE.UU., acaparamiento/mercado negro y el Paro de Octubre de 1972.",
          hint: "La crisis tuvo causas múltiples: económicas internas, presiones financieras externas y boicot/paros internos.",
          explain: "Esos factores combinados llevaron la inflación al 260% en 1972 y generaron escasez severa de bienes de primera necesidad."
        },
        {
          question: "¿Cuál era la función principal de las Juntas de Abastecimiento y Precios (JAP) durante el gobierno de la Unidad Popular?",
          options: [
            "Enfrentar el desabastecimiento y el mercado negro controlando precios oficiales y repartiendo canastas de mercadería básica según necesidad.",
            "Organizar el Paro de Octubre junto al gremio de dueños de camiones.",
            "Privatizar los bancos y fijar el precio internacional del cobre en Nueva York.",
            "Reemplazar al Congreso Nacional en la aprobación de leyes constitucionales."
          ],
          correct: "Enfrentar el desabastecimiento y el mercado negro controlando precios oficiales y repartiendo canastas de mercadería básica según necesidad.",
          hint: "Fíjate en las palabras de la sigla: Abastecimiento (alimentos/mercadería) y Precios.",
          explain: "Las JAP funcionaban a nivel vecinal para asegurar que los productos básicos llegaran a las familias a precios oficiales."
        },
        {
          question: "¿Por qué Salvador Allende incorporó a representantes de las Fuerzas Armadas a su gabinete en 1972 (como el general Carlos Prats en Interior)?",
          options: [
            "Como estrategia para restituir el orden, destrabar el Paro de Octubre y neutralizar el clima de extrema polarización política.",
            "Porque las Fuerzas Armadas habían ganado las elecciones parlamentarias de 1972.",
            "Para iniciar un golpe de Estado contra la oposición en el Congreso Nacional.",
            "Porque la Constitución obligaba a que el Ministerio del Interior fuera siempre dirigido por un militar."
          ],
          correct: "Como estrategia para restituir el orden, destrabar el Paro de Octubre y neutralizar el clima de extrema polarización política.",
          hint: "Piensa qué buscaba el Presidente justo después de que el Paro de Octubre paralizara el país en un ambiente muy tenso.",
          explain: "El ingreso de militares constitucionalistas buscaba garantizar paz social y destrabar la parálisis económica y política."
        },
        {
          question: "¿Cómo se relacionan los temas de la «Canción del Poder Popular» (1970) con el proyecto político de la Unidad Popular?",
          options: [
            "Destacan que el cambio va más allá de elegir un presidente, llamando a hombres y mujeres del pueblo a organizarse, gobernar y construir un Chile soberano y distinto.",
            "Promueven que la ciudadanía se aleje de la política y deje todas las decisiones solo a expertos extranjeros.",
            "Defienden la mantención del latifundio y el control norteamericano sobre el cobre.",
            "Critican la participación de los trabajadores y pobladores en las decisiones del país."
          ],
          correct: "Destacan que el cambio va más allá de elegir un presidente, llamando a hombres y mujeres del pueblo a organizarse, gobernar y construir un Chile soberano y distinto.",
          hint: "Piensa en el concepto mismo de «Poder Popular»: protagonismo activo de la ciudadanía en la transformación del país.",
          explain: "La canción tradujo al lenguaje musical el objetivo de la UP de ampliar la participación popular, la igualdad y la soberanía nacional."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 5: TALLER DE ARGUMENTACIÓN HÍBRIDO (CLAVES 11 A 15)
    // -------------------------------------------------------------------------
    {
      label: "Taller de Argumentación",
      type: "guided_writing",
      intro: "Completa las últimas cinco claves de desarrollo de la unidad. Recuerda revisar la estrategia específica de cada pregunta, practicar por bloques y luego redactar con tus propias palabras para recibir retroalimentación del Tutor IA.",
      items: [
        {
          claveId: 11,
          shortLabel: "11. Cobre: Frei vs. Allende",
          question: "¿En qué se diferenciaron la chilenización del cobre durante Frei y la nacionalización del cobre de 1971? Considera los cambios en la propiedad de las empresas mineras.",
          strategy: {
            typeName: "Contraste Directo de Propiedad (51% vs. 100%)",
            whyThisStructure: "Cuando una pregunta pide diferenciar dos políticas económicas, lo más efectivo es usar una estructura espejo: explicar qué propiedad logró el Estado con Frei, usar un conector de contraste («En cambio...») y explicar el salto total de 1971 con Allende.",
            blueprintSteps: [
              {
                stepTitle: "Situación previa y Chilenización (Frei)",
                explanation: "Indica que las mineras eran estadounidenses y que Frei compró pactadamente el 51% (sociedades mixtas y creación de Codelco).",
                starter: "Durante el gobierno de Eduardo Frei, la chilenización del cobre consistió en..."
              },
              {
                stepTitle: "Contraste con la Nacionalización (1971)",
                explanation: "Muestra el salto al 100% de propiedad estatal aprobado por unanimidad en el Congreso Pleno bajo Allende.",
                starter: "En cambio, la nacionalización del cobre de 1971 impulsada por Salvador Allende..."
              },
              {
                stepTitle: "Síntesis de la diferencia de propiedad",
                explanation: "Cierra resumiendo el paso desde propiedad compartida/pactada hacia estatización absoluta.",
                starter: "Así, la diferencia principal en la propiedad fue que se pasó de..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Chilenización con Frei Montalva",
              prompt: "¿Qué bloque explica con precisión el cambio de propiedad durante Eduardo Frei?",
              options: [
                "Ante el control estadounidense de la gran minería, la chilenización (1965) y nacionalización pactada (1969) de Eduardo Frei permitió que el Estado comprara de forma negociada el 51% de las acciones de filiales como Chuquicamata y El Teniente, formando sociedades mixtas y creando Codelco.",
                "Durante Eduardo Frei se expropió el 100% de las minas sin acuerdos previos ni pago alguno.",
                "Durante Eduardo Frei se vendió el 51% de las minas estatales chilenas a inversionistas extranjeros."
              ],
              correct: "Ante el control estadounidense de la gran minería, la chilenización (1965) y nacionalización pactada (1969) de Eduardo Frei permitió que el Estado comprara de forma negociada el 51% de las acciones de filiales como Chuquicamata y El Teniente, formando sociedades mixtas y creando Codelco.",
              hint: "Busca la cifra clave de propiedad bajo Frei (51% pactado) y la formación de sociedades mixtas con Codelco.",
              explain: "Dejar claro el 51% pactado establece el punto de comparación exacto."
            },
            {
              partLabel: "Parte 2 • Nacionalización de 1971 con Allende",
              prompt: "¿Qué bloque establece correctamente el contraste con 1971?",
              options: [
                "En cambio, la nacionalización del cobre de 1971 bajo Salvador Allende fue una reforma constitucional aprobada por unanimidad en el Congreso Pleno que estatizó el 100% de la gran minería, pasando el recurso completamente a manos del Estado chileno.",
                "En cambio, en 1971 Salvador Allende devolvió las acciones a las empresas norteamericanas para evitar conflictos.",
                "En cambio, en 1971 se mantuvo exactamente el mismo 51% accionario sin cambiar la propiedad."
              ],
              correct: "En cambio, la nacionalización del cobre de 1971 bajo Salvador Allende fue una reforma constitucional aprobada por unanimidad en el Congreso Pleno que estatizó el 100% de la gran minería, pasando el recurso completamente a manos del Estado chileno.",
              hint: "Usa el contraste: 100% estatal + aprobación unánime en el Congreso Pleno en 1971.",
              explain: "El conector «En cambio...» marca claramente la diferencia frente al período anterior."
            },
            {
              partLabel: "Parte 3 • Cierre sintético sobre la propiedad",
              prompt: "¿Qué cierre sintetiza mejor la diferencia central en la propiedad de las empresas?",
              options: [
                "De este modo, la diferencia clave fue el paso de una propiedad mayoritaria compartida y pactada (51% estatal y 49% extranjero) hacia la propiedad estatal absoluta (100%) del llamado «sueldo de Chile».",
                "En conclusión, ambos procesos fueron idénticos y no alteraron la propiedad de las mineras.",
                "Por lo tanto, solo en 1965 las empresas dejaron de pertenecer a Estados Unidos en su totalidad."
              ],
              correct: "De este modo, la diferencia clave fue el paso de una propiedad mayoritaria compartida y pactada (51% estatal y 49% extranjero) hacia la propiedad estatal absoluta (100%) del llamado «sueldo de Chile».",
              hint: "Resume el cambio exacto de propiedad en una sola idea clara.",
              explain: "Cerrar con una síntesis comparativa asegura que no quede ninguna duda de que respondiste lo central."
            }
          ],
          aiRubric: [
            "Explica la chilenización / nacionalización pactada de Frei (compra negociada del 51% accionario de las filiales estadounidenses, sociedades mixtas y creación de Codelco).",
            "Explica la nacionalización del cobre de 1971 bajo Allende (estatización total del 100% de la gran minería mediante reforma constitucional aprobada por unanimidad en el Congreso).",
            "Destaca explícitamente la diferencia en la propiedad de las empresas mineras (propiedad compartida mayoritaria pactada vs. propiedad estatal total)."
          ],
          referenceSummary: "Chilenización (1965) y Nacionalización Pactada (1969) con Eduardo Frei: el Estado chileno compró de forma pactada el 51% de las acciones de las filiales estadounidenses (Chuquicamata, El Teniente, La Exótica, Andina), formando sociedades mixtas y creando Codelco. Nacionalización del cobre (1971) con Salvador Allende: reforma constitucional aprobada por unanimidad en el Congreso Pleno que estatizó el 100% de la gran minería del cobre («el sueldo de Chile»). Diferencia central de propiedad: se pasó de una mayoría accionaria compartida y pactada (51% Estado / 49% extranjero) a la propiedad estatal total (100%)."
        },
        {
          claveId: 12,
          shortLabel: "12. Vía chilena al socialismo",
          question: "¿Qué buscaba la «vía chilena al socialismo» de Salvador Allende? Explica las áreas de propiedad social, mixta y privada, y menciona una política social de su gobierno.",
          strategy: {
            typeName: "Objetivo Político + Esquema de 3 Áreas + Ejemplo Social",
            whyThisStructure: "Esta pregunta abarca tres planos distintos (político, económico y social). Si defines primero la meta general, luego explicas en orden las tres áreas de propiedad y cierras con una medida social concreta, tu texto quedará ordenado y completo.",
            blueprintSteps: [
              {
                stepTitle: "Qué buscaba la vía chilena al socialismo",
                explanation: "Define el objetivo: avanzar al socialismo por vía democrática e institucional para superar la dependencia económica y desigualdad.",
                starter: "La «vía chilena al socialismo» de Salvador Allende buscaba..."
              },
              {
                stepTitle: "Las tres áreas de propiedad",
                explanation: "Explica brevemente qué empresas abarcaba cada área: Social (estatal estratégica), Mixta (Estado + privados) y Privada (pequeñas/medianas).",
                starter: "En lo económico organizó tres áreas: el área social..., el área mixta... y el área privada..."
              },
              {
                stepTitle: "Una política social concreta",
                explanation: "Menciona un ejemplo real de las 40 medidas (ej. medio litro de leche diario, medicina gratuita, matrícula/útiles gratis o becas).",
                starter: "En el ámbito social, una política destacada de su gobierno fue..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Objetivo de la «vía chilena al socialismo»",
              prompt: "¿Qué inicio define mejor qué buscaba el proyecto de Salvador Allende?",
              options: [
                "La «vía chilena al socialismo» buscaba transformar a Chile hacia una sociedad socialista mediante la vía institucional y democrática, logrando independencia económica, control estatal de recursos clave y mayor justicia social.",
                "La «vía chilena al socialismo» buscaba imponer el socialismo mediante una guerra armada y cerrar el Congreso inmediatamente.",
                "La «vía chilena al socialismo» buscaba privatizar las empresas del Estado y reducir el gasto social."
              ],
              correct: "La «vía chilena al socialismo» buscaba transformar a Chile hacia una sociedad socialista mediante la vía institucional y democrática, logrando independencia económica, control estatal de recursos clave y mayor justicia social.",
              hint: "Identifica sus dos rasgos centrales: objetivo socialista + camino democrático e institucional.",
              explain: "Definir ambos rasgos explica por qué la experiencia chilena fue única en el mundo."
            },
            {
              partLabel: "Parte 2 • Las tres áreas de propiedad",
              prompt: "¿Qué bloque explica correctamente las áreas social, mixta y privada?",
              options: [
                "Su proyecto económico dividió la propiedad en tres áreas: el Área de Propiedad Social (grandes empresas estratégicas, minería, banca y monopolios en manos del Estado), el Área Mixta (asociación de capital estatal y privado) y el Área Privada (pequeñas y medianas empresas y comercios particulares).",
                "Las tres áreas eran la agricultura rural, el comercio internacional y el transporte marítimo.",
                "El proyecto eliminó el área privada y el área mixta para dejar solamente empresas estadounidenses."
              ],
              correct: "Su proyecto económico dividió la propiedad en tres áreas: el Área de Propiedad Social (grandes empresas estratégicas, minería, banca y monopolios en manos del Estado), el Área Mixta (asociación de capital estatal y privado) y el Área Privada (pequeñas y medianas empresas y comercios particulares).",
              hint: "Verifica que aparezcan definidas claramente las tres categorías: Social, Mixta y Privada.",
              explain: "Definir cada área con ejemplos concretos evita ambigüedades en la corrección."
            },
            {
              partLabel: "Parte 3 • Una política social concreta",
              prompt: "¿Qué cierre nombra una política social real del gobierno de la Unidad Popular?",
              options: [
                "Entre sus políticas sociales (primeras 40 medidas) destacó la entrega de medio litro de leche diaria a todos los niños de Chile, además de matrícula y útiles gratuitos en básica, medicina gratuita en hospitales y consultorios en poblaciones.",
                "Entre sus políticas sociales destacó la creación del Ministerio de la Vivienda en 1965 y la extensión de la Básica a 8 años.",
                "Entre sus políticas sociales destacó el replanteamiento de la CORFO para privatizar empresas."
              ],
              correct: "Entre sus políticas sociales (primeras 40 medidas) destacó la entrega de medio litro de leche diaria a todos los niños de Chile, además de matrícula y útiles gratuitos en básica, medicina gratuita en hospitales y consultorios en poblaciones.",
              hint: "Cuidado con no mezclar gobiernos: busca medidas propias de las 40 medidas de Allende.",
              explain: "El ejemplo del medio litro de leche diario o la salud gratuita en hospitales ilustra con precisión el enfoque social de la UP."
            }
          ],
          aiRubric: [
            "Explica qué buscaba la «vía chilena al socialismo» (transición al socialismo por vía democrática e institucional, buscando independencia económica y justicia/transformación social).",
            "Explica correctamente las tres áreas de propiedad: Social (empresas estratégicas/minería/banca estatales), Mixta (capital estatal y privado) y Privada (pequeñas y medianas empresas/comercios particulares).",
            "Menciona al menos una política social real del gobierno de Allende (ej. medio litro de leche diario para los niños, matrícula/útiles gratuitos en básica, desayunos/almuerzos escolares, medicina gratuita en hospitales, consultorios materno-infantiles, becas o ampliación de la previsión)."
          ],
          referenceSummary: "La «vía chilena al socialismo» de Salvador Allende (Unidad Popular) buscaba construir el socialismo a través de la vía democrática e institucional, superando la dependencia económica crónica y la desigualdad social mediante la industrialización y el control estatal. Proyecto económico (tres áreas): 1) Área de Propiedad Social: grandes empresas estratégicas, gran minería, banca y monopolios bajo control estatal; 2) Área Mixta: empresas con participación conjunta del Estado y privados; 3) Área Privada: pequeñas y medianas empresas y comercios en manos particulares. Políticas sociales (Primeras 40 medidas): medio litro de leche diaria para todos los niños, matrícula y útiles gratuitos en básica, desayuno/almuerzo escolar, consultorios materno-infantiles en poblaciones, medicina gratuita en hospitales, becas estudiantiles y previsión para trabajadores independientes y dueñas de casa."
        },
        {
          claveId: 13,
          shortLabel: "13. Inflación, escasez y JAP",
          question: "Explica dos factores que contribuyeron a la inflación y el desabastecimiento durante 1972-1973. ¿Qué función cumplían las Juntas de Abastecimiento y Precios (JAP)?",
          strategy: {
            typeName: "Multicausalidad Económica (2 Factores) ➔ Respuesta Estatal",
            whyThisStructure: "La crisis de 1972–1973 no tuvo una sola causa: combinó desequilibrios fiscales internos con boicot y presiones externas. Explicar dos factores distintos y luego definir la función práctica de las JAP muestra una comprensión equilibrada del proceso.",
            blueprintSteps: [
              {
                stepTitle: "Primer factor (económico/fiscal o externo)",
                explanation: "Explica el aumento del déficit fiscal y emisión monetaria (que disparó la inflación) o el corte de créditos desde Estados Unidos.",
                starter: "Un primer factor que contribuyó a la inflación y el desabastecimiento fue..."
              },
              {
                stepTitle: "Segundo factor (distribución/boicot)",
                explanation: "Explica el acaparamiento empresarial, el mercado negro y el Paro de Octubre de 1972 (camiones y gremios).",
                starter: "Un segundo factor clave fue..., lo que agravó la escasez porque..."
              },
              {
                stepTitle: "Función de las JAP",
                explanation: "Define su rol vecinal: fiscalizar precios oficiales y distribuir canastas de productos básicos según necesidad.",
                starter: "Para enfrentar esta crisis, las Juntas de Abastecimiento y Precios (JAP) cumplían la función de..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Primer factor de la crisis",
              prompt: "¿Qué bloque explica con claridad un factor económico o externo de la crisis de 1972–1973?",
              options: [
                "Un primer factor fue el fuerte aumento del déficit fiscal y de la emisión monetaria (por la expansión del gasto público, la mayor demanda y la caída de reservas), sumado al corte de créditos desde Estados Unidos, lo que disparó la inflación al 260% en 1972.",
                "Un primer factor fue la reducción total del gasto público y el exceso de dólares acumulados en el país.",
                "Un primer factor fue que los trabajadores dejaron de comprar alimentos básicos."
              ],
              correct: "Un primer factor fue el fuerte aumento del déficit fiscal y de la emisión monetaria (por la expansión del gasto público, la mayor demanda y la caída de reservas), sumado al corte de créditos desde Estados Unidos, lo que disparó la inflación al 260% en 1972.",
              hint: "Busca la opción que explique cómo el déficit fiscal, la emisión y la falta de créditos externos aceleraron la inflación.",
              explain: "Conectar expansión fiscal/emisión con el alza de precios muestra precisión económica."
            },
            {
              partLabel: "Parte 2 • Segundo factor (desabastecimiento)",
              prompt: "¿Qué bloque explica correctamente otro factor clave que agudizó el desabastecimiento?",
              options: [
                "En segundo lugar, influyeron el acaparamiento de productos, la especulación en el mercado negro y el Paro de Octubre de 1972 de los dueños de camiones y gremios, que paralizó la distribución de alimentos y bienes esenciales.",
                "En segundo lugar, influyó el Terremoto de Valdivia de 1960 y la reforma agraria de macetero.",
                "En segundo lugar, influyó la creación de Codelco durante el gobierno de Frei."
              ],
              correct: "En segundo lugar, influyeron el acaparamiento de productos, la especulación en el mercado negro y el Paro de Octubre de 1972 de los dueños de camiones y gremios, que paralizó la distribución de alimentos y bienes esenciales.",
              hint: "Identifica qué prácticas y paralizaciones de 1972 impidieron que los productos llegaran a los almacenes.",
              explain: "Sumar factores de distribución (acaparamiento, mercado negro y Paro de Octubre) completa la visión multicausal."
            },
            {
              partLabel: "Parte 3 • Función de las JAP",
              prompt: "¿Qué cierre explica con exactitud la función de las Juntas de Abastecimiento y Precios (JAP)?",
              options: [
                "Frente a esto, las JAP eran organizaciones vecinales que cumplían la función de enfrentar el desabastecimiento y el mercado negro, fiscalizando precios oficiales y repartiendo canastas de mercadería básica según las necesidades de las familias.",
                "Frente a esto, las JAP cumplían la función de organizar paros de transporte contra el gobierno.",
                "Frente a esto, las JAP se encargaban exclusivamente de expropiar minas de cobre en el norte."
              ],
              correct: "Frente a esto, las JAP eran organizaciones vecinales que cumplían la función de enfrentar el desabastecimiento y el mercado negro, fiscalizando precios oficiales y repartiendo canastas de mercadería básica según las necesidades de las familias.",
              hint: "Recuerda el propósito concreto de las JAP en los barrios: precios oficiales + canastas de productos básicos.",
              explain: "Así dejas claramente explicada tanto la crisis como la respuesta implementada desde el gobierno y los barrios."
            }
          ],
          aiRubric: [
            "Explica al menos dos factores distintos que contribuyeron a la inflación y el desabastecimiento en 1972–1973 (ej. déficit fiscal/expansión del gasto y emisión monetaria, agotamiento de reservas, corte de créditos de EE.UU., acaparamiento/mercado negro/boicot empresarial, o Paro de Octubre de 1972).",
            "Explica claramente la función de las Juntas de Abastecimiento y Precios (JAP): enfrentar el desabastecimiento y el mercado negro mediante el control/fiscalización de precios y la distribución de canastas de mercadería básica según necesidad.",
            "Conecta de forma clara las causas económicas y políticas con las consecuencias cotidianas (escasez, filas e inflación)."
          ],
          referenceSummary: "Factores de inflación y desabastecimiento (1972–1973): 1) Incremento del déficit fiscal (expansión del gasto público, caída de ingresos fiscales, agotamiento de reservas internacionales, alta demanda de bienes) y fuerte aumento de emisión monetaria/crediticia (inflación llega a 260% en 1972); 2) Corte de flujos de dinero y créditos por parte de EE.UU.; 3) Acaparamiento de bienes, mercado negro, especulación y boicot económico empresarial; 4) Paro de Octubre de 1972 (gremio de camiones y otros gremios) que paralizó la distribución de alimentos. Función de las JAP (Juntas de Abastecimiento y Precios): organizaciones populares/vecinales encargadas de enfrentar el desabastecimiento y el mercado negro, fiscalizando precios oficiales y repartiendo canastas de mercadería básica según la necesidad de las familias."
        },
        {
          claveId: 14,
          shortLabel: "14. Polarización política",
          question: "¿Qué fue la polarización política a comienzos de los años setenta? Relaciona los conflictos internos, la intervención de Estados Unidos y la incorporación de militares al gabinete en 1972.",
          strategy: {
            typeName: "Definición del Clima + 3 Dimensiones Conectadas",
            whyThisStructure: "Esta pregunta pide definir un proceso amplio («polarización política») y luego entrelazar tres piezas obligatorias: lo interno, lo externo (EE.UU.) y la salida institucional intentada en 1972 (militares al gabinete). Usar un hilo cronológico conecta las tres piezas sin que queden sueltas.",
            blueprintSteps: [
              {
                stepTitle: "Qué fue la polarización política",
                explanation: "Define la radicalización extrema y pérdida de diálogo donde los sectores pasaron de adversarios a «enemigos».",
                starter: "La polarización política a comienzos de los años setenta fue un proceso de..."
              },
              {
                stepTitle: "Conflictos internos + intervención de EE.UU.",
                explanation: "Relaciona la violencia de grupos extremos (Patria y Libertad, MIR, VOP), prensa hostil, choque Ejecutivo-Congreso y paros con el financiamiento de la CIA y el bloqueo económico de EE.UU.",
                starter: "Esto se expresó en graves conflictos internos como..., agravados por la intervención de Estados Unidos que..."
              },
              {
                stepTitle: "Militares al gabinete en 1972",
                explanation: "Explica por qué Allende incorporó a las Fuerzas Armadas (general Carlos Prats en Interior) tras el Paro de Octubre.",
                starter: "Ante este nivel de tensión tras el Paro de Octubre, en 1972 Salvador Allende incorporó militares al gabinete para..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Definición de polarización política",
              prompt: "¿Qué inicio define mejor qué fue la polarización política a comienzos de los 70?",
              options: [
                "La polarización política fue la radicalización extrema de la sociedad chilena y la pérdida del diálogo democrático, al punto de que oficialismo y oposición dejaron de verse como adversarios políticos para tratarse como «enemigos».",
                "La polarización política fue un acuerdo pacífico entre todos los partidos para gobernar juntos sin conflictos.",
                "La polarización política fue únicamente un problema de falta de transporte público en Santiago."
              ],
              correct: "La polarización política fue la radicalización extrema de la sociedad chilena y la pérdida del diálogo democrático, al punto de que oficialismo y oposición dejaron de verse como adversarios políticos para tratarse como «enemigos».",
              hint: "Busca la opción que describa la pérdida de consenso y la división hostil en dos polos enfrentados.",
              explain: "Explicar el paso de «oposición» a «enemigos» captura con exactitud el clima político de 1970–1973."
            },
            {
              partLabel: "Parte 2 • Conflictos internos e intervención de EE.UU.",
              prompt: "¿Qué bloque relaciona correctamente los conflictos internos con el papel de Estados Unidos?",
              options: [
                "Internamente se intensificaron el choque entre el Ejecutivo y el Congreso, la agresividad de la prensa, las marchas, el Paro de Octubre y la violencia de grupos extrapartidarios (Patria y Libertad, MIR y VOP); a esto se sumó la intervención de Estados Unidos, que cortó créditos y financió mediante la CIA a medios opositores y al paro gremial.",
                "No hubo violencia interna ni intervención extranjera, ya que Estados Unidos apoyó financieramente al gobierno de Allende.",
                "Los conflictos ocurrieron solo en el extranjero y no afectaron a los partidos ni a la prensa chilena."
              ],
              correct: "Internamente se intensificaron el choque entre el Ejecutivo y el Congreso, la agresividad de la prensa, las marchas, el Paro de Octubre y la violencia de grupos extrapartidarios (Patria y Libertad, MIR y VOP); a esto se sumó la intervención de Estados Unidos, que cortó créditos y financió mediante la CIA a medios opositores y al paro gremial.",
              hint: "Asegúrate de incluir tanto actores y conflictos internos como las acciones concretas de EE.UU. y la CIA.",
              explain: "Entrelazar ambos factores muestra cómo lo local y la Guerra Fría se retroalimentaron."
            },
            {
              partLabel: "Parte 3 • Incorporación de militares al gabinete en 1972",
              prompt: "¿Qué cierre relaciona adecuadamente el ingreso de militares al gabinete en 1972?",
              options: [
                "Para intentar frenar esta crisis y destrabar el Paro de Octubre, en 1972 Allende incorporó a representantes de las Fuerzas Armadas a ministerios clave —como el general Carlos Prats en Interior— con el objetivo de restituir el orden y neutralizar el clima polarizado.",
                "En 1972 los militares ingresaron al gabinete únicamente para organizar el Mundial de Fútbol.",
                "En 1972 Allende prohibió cualquier contacto entre el gobierno y las Fuerzas Armadas."
              ],
              correct: "Para intentar frenar esta crisis y destrabar el Paro de Octubre, en 1972 Allende incorporó a representantes de las Fuerzas Armadas a ministerios clave —como el general Carlos Prats en Interior— con el objetivo de restituir el orden y neutralizar el clima polarizado.",
              hint: "Conecta la incorporación de las FF.AA. (Carlos Prats) con el objetivo de devolver gobernabilidad tras octubre de 1972.",
              explain: "Así quedan vinculadas las tres exigencias de la pregunta en una narrativa lógica y rigurosa."
            }
          ],
          aiRubric: [
            "Define correctamente la polarización política de inicios de los 70 (radicalización ideológica, pérdida de diálogo/consenso y trato del adversario como enemigo).",
            "Relaciona conflictos internos concretos (ej. grupos extrapartidarios como Patria y Libertad, MIR o VOP; asesinato de Pérez Zujovic; tomas/sabotajes; prensa agresiva; choque Ejecutivo-Congreso o Paro de Octubre).",
            "Explica la intervención de Estados Unidos (corte de créditos y financiamiento encubierto de la CIA a prensa opositora como El Mercurio y al Paro de Octubre).",
            "Explica la incorporación de militares al gabinete en 1972 (estrategia de Allende tras el Paro de Octubre, con el general Carlos Prats en Interior, para restituir el orden y contener la polarización)."
          ],
          referenceSummary: "La polarización política de comienzos de los años 70 fue una profunda radicalización ideológica con pérdida de diálogo y consenso, donde los sectores dejaron de verse como oposición para tratarse como enemigos. Conflictos internos: violencia y enfrentamientos de grupos extrapartidarios (Patria y Libertad en extrema derecha; MIR y VOP en extrema izquierda —asesinato de Edmundo Pérez Zujovic—), tomas de fábricas y terrenos, sabotajes, prensa muy agresiva, Paro de Octubre de 1972 y choque entre el Ejecutivo y un Congreso opositor (CODE). Intervención de EE.UU.: corte de créditos internacionales y financiamiento de la CIA a prensa opositora (El Mercurio) y al Paro de Octubre. Militares al gabinete en 1972: tras el Paro de Octubre, Allende incorporó a las Fuerzas Armadas a ministerios clave (general Carlos Prats en el Ministerio del Interior) como estrategia para restituir el orden y neutralizar la polarización."
        },
        {
          claveId: 15,
          shortLabel: "15. Canción Poder Popular",
          question: "En la «Canción del Poder Popular», selecciona dos fragmentos que destaquen la participación del pueblo. Explica qué significan y cómo se relacionan con el proyecto de la Unidad Popular.",
          strategy: {
            typeName: "Análisis de Fuente Cultural (2 Pasajes ➔ Significado ➔ Proyecto UP)",
            whyThisStructure: "Para analizar una fuente artística en Historia no basta con copiar versos ni resumirla por encima: debes identificar dos ideas o breves fragmentos concretos (puedes tomarlos de tu copia de la letra), traducir qué significan con tus palabras y vincularlos con el programa real de la Unidad Popular.",
            blueprintSteps: [
              {
                stepTitle: "Primer pasaje o idea + significado",
                explanation: "Toma el pasaje sobre que no se trata solo de cambiar un presidente, sino de que el pueblo construya un Chile distinto, y explica su sentido.",
                starter: "Un primer aspecto destacado de la canción es la idea de que..., lo que significa que..."
              },
              {
                stepTitle: "Segundo pasaje o idea + significado",
                explanation: "Toma el llamado a hombres y mujeres a dirigir juntos los asuntos del país o la invitación inclusiva a ser gobierno, y explica qué refleja.",
                starter: "Un segundo pasaje relevante expresa..., mostrando que..."
              },
              {
                stepTitle: "Relación con el proyecto de la UP",
                explanation: "Conecta ambos mensajes con la ampliación democrática, el poder popular (cordones, juntas, sindicatos), la soberanía y la justicia social de la UP.",
                starter: "Ambos mensajes se relacionan directamente con el proyecto de la Unidad Popular porque..."
              }
            ]
          },
          blocks: [
            {
              partLabel: "Parte 1 • Primer pasaje de participación y su significado",
              prompt: "¿Qué bloque analiza mejor el mensaje del estribillo sobre el rol del pueblo?",
              options: [
                "Un primer elemento clave aparece en el estribillo, cuando plantea que la elección no busca simplemente reemplazar un presidente por otro, sino que el propio pueblo construya un país distinto; esto significa que la ciudadanía pasa a ser protagonista activa de las transformaciones sociales.",
                "Un primer elemento clave dice que el cambio depende únicamente del presidente y que la gente no debe participar.",
                "La canción trata únicamente sobre paisajes turísticos de Chile sin ningún contenido político."
              ],
              correct: "Un primer elemento clave aparece en el estribillo, cuando plantea que la elección no busca simplemente reemplazar un presidente por otro, sino que el propio pueblo construya un país distinto; esto significa que la ciudadanía pasa a ser protagonista activa de las transformaciones sociales.",
              hint: "Busca la opción que identifique la idea del estribillo y explique qué significa respecto al protagonismo popular.",
              explain: "Identificar la idea del pasaje y luego explicar su significado cumple la regla esencial del análisis de fuentes."
            },
            {
              partLabel: "Parte 2 • Segundo pasaje de participación y su significado",
              prompt: "¿Qué bloque analiza adecuadamente un segundo pasaje participativo de la canción?",
              options: [
                "Un segundo pasaje llama a hombres y mujeres juntos a trabajar codo a codo y tomar las riendas de los asuntos comunes, invitando con puertas abiertas a sumarse y ejercer el gobierno; esto significa inclusión, organización colectiva y superación de la exclusión histórica.",
                "Un segundo pasaje pide cerrar las organizaciones comunitarias y excluir a las mujeres de la política.",
                "Un segundo pasaje defiende la intervención económica estadounidense en las empresas chilenas."
              ],
              correct: "Un segundo pasaje llama a hombres y mujeres juntos a trabajar codo a codo y tomar las riendas de los asuntos comunes, invitando con puertas abiertas a sumarse y ejercer el gobierno; esto significa inclusión, organización colectiva y superación de la exclusión histórica.",
              hint: "Recuerda el llamado conjunto a hombres y mujeres y la idea de puertas abiertas para gobernar juntos.",
              explain: "Mencionar la inclusión de hombres y mujeres y la responsabilidad compartida muestra una lectura atenta de la obra."
            },
            {
              partLabel: "Parte 3 • Relación con el proyecto de la Unidad Popular",
              prompt: "¿Qué cierre conecta mejor la canción con el proyecto histórico de la Unidad Popular?",
              options: [
                "Ambos mensajes se vinculan directamente con el proyecto de la Unidad Popular, que promovía la ampliación de la participación política y popular (sindicatos, juntas de vecinos, consejos campesinos y cordones industriales), la dignidad social y la soberanía nacional frente a la dependencia externa.",
                "Ambos mensajes contradicen el proyecto de la Unidad Popular porque proponían reformas liberales de mercado.",
                "No tiene relación con la Unidad Popular, ya que fue escrita durante el gobierno de Jorge Alessandri."
              ],
              correct: "Ambos mensajes se vinculan directamente con el proyecto de la Unidad Popular, que promovía la ampliación de la participación política y popular (sindicatos, juntas de vecinos, consejos campesinos y cordones industriales), la dignidad social y la soberanía nacional frente a la dependencia externa.",
              hint: "Conecta la canción con conceptos reales de la UP: participación popular, autogestión, soberanía e igualdad.",
              explain: "Vincular una canción con procesos concretos (organizaciones populares, ampliación democrática y soberanía) logra el nivel esperado en 2° Medio."
            }
          ],
          aiRubric: [
            "Identifica dos fragmentos o pasajes claros de la «Canción del Poder Popular» que destaquen la participación del pueblo (puede citar breves versos si los tiene en su guía o parafrasear fielmente dos ideas: protagonismo colectivo de hombres y mujeres, pueblo construyendo un Chile distinto más allá de cambiar un presidente, invitación inclusiva a sumarse y ser gobierno, o defensa de la libertad y soberanía).",
            "Explica con sus palabras qué significa cada uno de esos dos pasajes en términos de participación y protagonismo ciudadano.",
            "Relaciona claramente ambos mensajes con el proyecto político, social o cultural de la Unidad Popular (poder popular, organización de trabajadores/campesinos/pobladores, ampliación democrática, soberanía nacional y superación de la desigualdad)."
          ],
          referenceSummary: "La «Canción del Poder Popular» (Luis Advis y Julio Rojas, interpretada por Inti-Illimani en el disco Canto al Programa de 1970) destaca la participación activa del pueblo en varios pasajes: 1) El llamado colectivo a levantar el país poniendo el esfuerzo en común y tomando las riendas de los asuntos públicos entre hombres y mujeres juntos; 2) El estribillo que plantea que no se trata solo de cambiar un presidente, sino de que el propio pueblo construya un Chile distinto; 3) La invitación abierta a integrarse a la Unidad Popular para ejercer el gobierno, afirmar la soberanía frente a la injerencia extranjera y vivir con libertad y dignidad. Se relaciona con el proyecto de la UP porque refleja la búsqueda de democratización amplia, el protagonismo de obreros, campesinos, mujeres y pobladores (sindicatos, juntas de vecinos, consejos campesinos, cordones industriales) y la independencia económica y política."
        }
      ]
    },

    // -------------------------------------------------------------------------
    // ETAPA 6: SIMULADOR DE PRUEBA FINAL (15 ÍTEMS • ESCALA CHILENA 1,0 A 7,0)
    // -------------------------------------------------------------------------
    {
      label: "Simulador Final (1,0–7,0)",
      type: "simulator",
      intro: "Llegaste al ensayo general de toda la unidad (1950–1973). Responderás 15 preguntas integradoras en orden aleatorio —una por cada clave histórica— y al terminar recibirás tu nota proyectada en escala chilena de 1,0 a 7,0 (exigencia 60%).",
      items: [
        {
          question: "¿Por qué la pobreza en Chile durante los años 50 se define como «multidimensional»?",
          options: [
            "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
            "Porque se medía exclusivamente según el salario industrial de Santiago.",
            "Porque afectaba solo a los propietarios agrícolas del norte grande.",
            "Porque desapareció apenas creció la población urbana."
          ],
          correct: "Porque combinaba bajos ingresos con carencias simultáneas en vivienda, salud, nutrición, educación y servicios básicos.",
          explain: "Multidimensional implica privaciones simultáneas en salud (mortalidad infantil), educación (analfabetismo) y vivienda (hacinamiento y saneamiento)."
        },
        {
          question: "¿Qué par reúne correctamente una causa y una consecuencia de la migración campo-ciudad a mediados del siglo XX?",
          options: [
            "Causa: estancamiento agrícola y atracción industrial urbana. Consecuencia: déficit habitacional, poblaciones callampa e insuficiencia de servicios.",
            "Causa: exceso de casas gratuitas en el centro. Consecuencia: desaparición de las zonas urbanas.",
            "Causa: prohibición de cultivar trigo. Consecuencia: superávit de agua potable y alcantarillado.",
            "Causa: cierre de todas las fábricas. Consecuencia: crecimiento acelerado de la población rural."
          ],
          correct: "Causa: estancamiento agrícola y atracción industrial urbana. Consecuencia: déficit habitacional, poblaciones callampa e insuficiencia de servicios.",
          explain: "La crisis rural y la búsqueda de empleo industrial impulsaron el éxodo, desbordando la infraestructura urbana."
        },
        {
          question: "Entre 1952 y 1970 la población urbana pasó de 60,2% a 75,1%. ¿Por qué este dato por sí solo NO prueba que mejoró la calidad de vida?",
          options: [
            "Porque solo indica localización geográfica y oculta la marginalidad urbana, el hacinamiento y la falta de servicios básicos.",
            "Porque demuestra que la mayoría de la población volvió a vivir en el campo.",
            "Porque las cifras censales solo cuentan a los trabajadores mineros.",
            "Porque vivir en ciudades impide acceder a cualquier servicio público."
          ],
          correct: "Porque solo indica localización geográfica y oculta la marginalidad urbana, el hacinamiento y la falta de servicios básicos.",
          explain: "La urbanización creció más rápido que la oferta de viviendas dignas, empleos estables y redes sanitarias."
        },
        {
          question: "¿Qué dificultad estructural impidió que el modelo ISI alcanzara plena independencia económica?",
          options: [
            "La necesidad de seguir importando tecnología y bienes de capital (maquinaria) desde Europa y Estados Unidos, junto a un mercado interno estrecho y estancamiento agrícola.",
            "La consolidación excesiva de la industria pesada nacional desde 1940.",
            "La eliminación completa de la inflación y el exceso de presupuesto fiscal.",
            "La falta total de industria liviana en América Latina."
          ],
          correct: "La necesidad de seguir importando tecnología y bienes de capital (maquinaria) desde Europa y Estados Unidos, junto a un mercado interno estrecho y estancamiento agrícola.",
          explain: "Sin industria pesada propia, Chile siguió dependiendo de maquinaria, tecnología y divisas extranjeras."
        },
        {
          question: "¿Qué ocurrió con la orientación económica liberal inicial de Jorge Alessandri hacia la segunda etapa de su gobierno?",
          options: [
            "Tras el Terremoto de Valdivia (1960) y la escasez de dólares, debió devaluar y revertir sus medidas liberalizadoras una a una.",
            "Eliminó por completo al Estado de la economía sin enfrentar crisis externa.",
            "Se transformó en un programa socialista de estatización bancaria.",
            "Mantuvo las reservas internacionales en alza constante hasta 1964."
          ],
          correct: "Tras el Terremoto de Valdivia (1960) y la escasez de dólares, debió devaluar y revertir sus medidas liberalizadoras una a una.",
          explain: "La caída de reservas a cifras negativas (-5,2 millones US$ en 1961) forzó a reponer controles de importación y devaluar."
        },
        {
          question: "¿Cómo evolucionó el alcance de la Reforma Agraria (administrada por la CORA) entre Alessandri, Frei y Allende?",
          options: [
            "Pasó de solo tierras mal explotadas con Alessandri («de macetero»), a predios mayores a 80 HRB con Frei (~3,5 mill. ha), hasta incluir incluso predios menores a 80 HRB y bien explotados con Allende (~5,5 mill. ha).",
            "Fue máxima con Alessandri y se redujo progresivamente con Frei y Allende.",
            "Solo existió durante el gobierno de Eduardo Frei y desapareció en 1970.",
            "Expropió únicamente terrenos urbanos sin intervenir los latifundios."
          ],
          correct: "Pasó de solo tierras mal explotadas con Alessandri («de macetero»), a predios mayores a 80 HRB con Frei (~3,5 mill. ha), hasta incluir incluso predios menores a 80 HRB y bien explotados con Allende (~5,5 mill. ha).",
          explain: "El proceso mostró una radicalización creciente sobre la estructura de tenencia de la tierra."
        },
        {
          question: "¿Qué relación tuvo la Alianza para el Progreso (John F. Kennedy) con la Guerra Fría en América Latina?",
          options: [
            "Buscó contener la expansión del comunismo tras la Revolución Cubana ofreciendo ayuda económica, técnica y promoviendo reformas moderadas como la Reforma Agraria.",
            "Buscó financiar guerrillas marxistas inspiradas en el gobierno de Cuba.",
            "Prohibió que los países latinoamericanos recibieran créditos de Estados Unidos.",
            "Fue un pacto económico firmado entre Chile y la Unión Soviética."
          ],
          correct: "Buscó contener la expansión del comunismo tras la Revolución Cubana ofreciendo ayuda económica, técnica y promoviendo reformas moderadas como la Reforma Agraria.",
          explain: "EE.UU. promovió reformas estructurales pacíficas para frenar revoluciones socialistas en el continente."
        },
        {
          question: "¿Por qué la organización política en «tres tercios» hizo necesaria la intervención del Congreso Pleno en la elección de 1970?",
          options: [
            "Porque al dividirse los votos entre Allende, Alessandri y Tomic nadie superó el 50%, y el Congreso Pleno debió elegir entre las dos primeras mayorías.",
            "Porque en 1970 se suspendió el voto ciudadano en todo el país.",
            "Porque Salvador Allende obtuvo más del 56% de los votos pero renunció.",
            "Porque solo compitieron dos candidatos que empataron exactamente."
          ],
          correct: "Porque al dividirse los votos entre Allende, Alessandri y Tomic nadie superó el 50%, y el Congreso Pleno debió elegir entre las dos primeras mayorías.",
          explain: "Allende ganó con mayoría relativa (~36,3%) y fue ratificado por el Congreso Pleno tras firmar el Estatuto de Garantías Constitucionales con la DC."
        },
        {
          question: "¿Qué combinación corresponde a formas reales de organización de jóvenes, campesinos y pobladores en los años 60?",
          options: [
            "Federaciones estudiantiles (jóvenes), sindicatos campesinos (campesinos) y juntas de vecinos o comités/tomas de terreno (pobladores).",
            "Empresas mineras (jóvenes), CORFO (campesinos) y Cámara de Comercio (pobladores).",
            "Ninguno de los tres grupos pudo crear organizaciones durante los años 60.",
            "Todos integraron únicamente el Frente Nacional formado en 1961."
          ],
          correct: "Federaciones estudiantiles (jóvenes), sindicatos campesinos (campesinos) y juntas de vecinos o comités/tomas de terreno (pobladores).",
          explain: "La década de 1960 se caracterizó por una masiva ampliación de la participación social organizada."
        },
        {
          question: "¿Qué elementos distinguieron la «Revolución en Libertad» de Eduardo Frei Montalva?",
          options: [
            "Reformas estructurales dentro de la democracia, Promoción Popular (juntas de vecinos y centros de madres), Reforma Educacional (8+4) y Ministerio de la Vivienda.",
            "Liberalización total de precios, reducción de la CORFO y fin de la enseñanza técnica.",
            "Estatización del 100% de la banca y creación de las JAP.",
            "Ruptura del sistema democrático y cierre de escuelas rurales."
          ],
          correct: "Reformas estructurales dentro de la democracia, Promoción Popular (juntas de vecinos y centros de madres), Reforma Educacional (8+4) y Ministerio de la Vivienda.",
          explain: "Frei buscó cambios profundos en democracia ampliando la participación barrial, la educación y la vivienda."
        },
        {
          question: "¿En qué se diferenció la propiedad del cobre entre la Chilenización de Frei y la Nacionalización de 1971?",
          options: [
            "Frei pactó la compra del 51% accionario (sociedades mixtas y Codelco), mientras en 1971 se estatizó el 100% por unanimidad en el Congreso.",
            "Frei estatizó el 100% y Allende redujo la participación estatal al 51%.",
            "En ambos casos las empresas estadounidenses conservaron la mayoría de las acciones.",
            "Solo en 1971 se permitió la venta de minas a capitales privados extranjeros."
          ],
          correct: "Frei pactó la compra del 51% accionario (sociedades mixtas y Codelco), mientras en 1971 se estatizó el 100% por unanimidad en el Congreso.",
          explain: "La reforma constitucional de 1971 traspasó la propiedad absoluta de la gran minería al Estado."
        },
        {
          question: "En el proyecto económico de la Unidad Popular, ¿qué correspondía a las áreas de propiedad social, mixta y privada?",
          options: [
            "Social: grandes empresas estratégicas estatales; Mixta: Estado y privados juntos; Privada: pequeñas y medianas empresas particulares.",
            "Social: colegios públicos; Mixta: universidades; Privada: bancos estatales.",
            "Social: empresas extranjeras; Mixta: fundos mayores a 80 HRB; Privada: Codelco.",
            "Las tres áreas eran de propiedad exclusivamente extranjera."
          ],
          correct: "Social: grandes empresas estratégicas estatales; Mixta: Estado y privados juntos; Privada: pequeñas y medianas empresas particulares.",
          explain: "Ese esquema buscaba estatizar sectores estratégicos sin eliminar de inmediato a pequeños y medianos empresarios."
        },
        {
          question: "¿Qué función cumplieron las Juntas de Abastecimiento y Precios (JAP) frente a la crisis de 1972–1973?",
          options: [
            "Combatir el desabastecimiento y el mercado negro fiscalizando precios oficiales y distribuyendo canastas de mercadería básica según necesidad.",
            "Organizar el Paro de Octubre para presionar la renuncia del Presidente.",
            "Negociar créditos internacionales con bancos de Estados Unidos.",
            "Administrar las expropiaciones de tierras agrícolas mayores a 80 HRB."
          ],
          correct: "Combatir el desabastecimiento y el mercado negro fiscalizando precios oficiales y distribuyendo canastas de mercadería básica según necesidad.",
          explain: "Las JAP funcionaron como red vecinal de distribución y control frente a la escasez y especulación."
        },
        {
          question: "¿Cómo se relacionan el Paro de Octubre de 1972, la intervención de EE.UU. y el ingreso de militares al gabinete ese año?",
          options: [
            "El paro gremial (con financiamiento de la CIA) paralizó el país en un clima polarizado, llevando a Allende a sumar militares (como Carlos Prats) a ministerios clave para restituir el orden.",
            "Estados Unidos financió al gabinete militar para fortalecer la Unidad Popular.",
            "Los militares ingresaron al gabinete en 1972 para apoyar el Paro de Octubre.",
            "No hubo relación entre el paro de camiones y los cambios de gabinete de 1972."
          ],
          correct: "El paro gremial (con financiamiento de la CIA) paralizó el país en un clima polarizado, llevando a Allende a sumar militares (como Carlos Prats) a ministerios clave para restituir el orden.",
          explain: "El ingreso de las FF.AA. al gabinete buscó destrabar la crisis institucional y contener la polarización."
        },
        {
          question: "¿Qué sentido histórico expresa la «Canción del Poder Popular» (1970) en relación con el proyecto de la Unidad Popular?",
          options: [
            "Representa el ideal de que el cambio social no se limita a elegir un presidente, sino que requiere la participación activa de hombres y mujeres del pueblo para construir un Chile soberano y distinto.",
            "Plantea que la música debe mantenerse completamente al margen de los procesos sociales.",
            "Respalda el retorno a la orientación económica liberal de 1958.",
            "Rechaza la participación de organizaciones populares y sindicatos en el gobierno."
          ],
          correct: "Representa el ideal de que el cambio social no se limita a elegir un presidente, sino que requiere la participación activa de hombres y mujeres del pueblo para construir un Chile soberano y distinto.",
          explain: "La Nueva Canción Chilena reflejó el protagonismo ciudadano y cultural impulsado por la Unidad Popular."
        }
      ]
    }
  ]
};