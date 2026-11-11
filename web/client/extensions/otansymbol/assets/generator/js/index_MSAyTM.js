
// CONFIGURACIÓN Y CONSTANTES
const CONFIG = {
  BASE_SIDC: "130310000000000000000000000000",
  SIDC_LENGTH: 30,
  
  DEFAULT_FONT_SIZE: 21,
  HQ_POSITION: 7,
  ECHELON_POS: 8,
  SSC_POS: 4,
  ICON_START: 10,
  MOD1_START: 16,
  MOD2_START: 18,
  RENDER_DEBOUNCE_MS: 50
};

// Catálogo
const DATA = {
  afiliaciones: [
    { id: "0", nombre: "Pendiente" },
    { id: "1", nombre: "Desconocido" },
    { id: "2", nombre: "Asumido amigo" },
    { id: "3", nombre: "Amigo" },
    { id: "4", nombre: "Neutral" },
    { id: "5", nombre: "Sospechoso" },
    { id: "6", nombre: "Hostil" }
  ],

  escalones: [
    { nombre: "Desconocido", code: "00" },
    { nombre: "Individuo / Elemento", code: "27" },
    { nombre: "Equipo / Dotación", code: "11" },
    { nombre: "Escuadra", code: "12" },
    { nombre: "Pelotón / Destacamento", code: "13" },
    { nombre: "Sección", code: "14" },    
    { nombre: "Compañía / Batería / Escuadrón", code: "15" },
    { nombre: "Grupo", code: "17" },
    { nombre: "Batallón / Regimiento", code: "16" },
    { nombre: "Brigada (Ind./Div.)", code: "18" },
    { nombre: "División", code: "21" },
    { nombre: "Cuerpo de Ejército", code: "22" },
    { nombre: "Ejército de Operaciones", code: "23" },
    { nombre: "Grupo de Ejércitos", code: "24" },
    { nombre: "Teatro de Operaciones", code: "25" }    
  ],
    
  fuerzas: [
    {
      id: "ejercito",
      nombre: "Ejército",
      icono: "img/eje.png",
      tipos: [
        { codt: "10", id: "arma", nombre: "Arma"},
        { codt: "10", id: "servicio", nombre: "Servicio"},
        { codt: "15", id: "equipo", nombre: "Equipo"},
        { codt: "20", id: "instalaciones", nombre: "Instalaciones"},
        { codt: "40", id: "actividades", nombre: "Actividades"},
        { codt: "10", id: "otros", nombre: "Otros"}
      ]
    },
    {
      id: "fa",
      nombre: "Fuerza Aérea",
      icono: "img/fza_a.png",
      tipos: [
        { ssc: "10", id: "tierra", nombre: "Tierra"},
        { ssc: "01", id: "aire", nombre: "Aire"}
      ]
    },
    {
      id: "gn",
      nombre: "Guardia Nacional",
      icono: "img/gn.png",
      tipos: [
        { codt: "10", id: "normal", nombre: "Normal" },
        { codt: "20", id: "instalacion", nombre: "Instalación" }
      ]
    },
    {
      id: "armada",
      nombre: "Armada",
      icono: "img/armada.svg",
      tipos: [
        { codt: "10", id: "tierra", nombre: "Tierra" },
        { codt: "30", id: "agua", nombre: "Agua" }
      ]
    },
    {
      id: "otros",
      nombre: "Civiles y Otros",
      icono: "img/otros.svg",
      tipos: [
        { codt: "11", id: "civil", nombre: "Civil"},
        { codt: "10", id: "otros", nombre: "Otros"}
      ]
    }
  ],
  
  catalogo: {
    ejercito: {
      arma: {
        iconos: [
          {
            nombre: "Infantería",
            children: [
              
              { nombre: "Infantería", code: "121100" },
              { nombre: "Infantería de Marina", code: "310000" },
              { nombre: "Infantería Anfibia", code: "121101" },
              { nombre: "Infantería Mecanizada", code: "121102" },
              { nombre: "Infantería Motorizada", code: "121104" },
              { nombre: "Armas combinadas", code: "121000" },
              { nombre: "Vehículo de combate de Infantería", code: "121105" },
              { nombre: "Morteros", code: "130800" },
              { nombre: "Aerotropas", code: "165500" }
            ]
          },
          {
            nombre: "Caballería",
            children: [
              { nombre: "Caballería", code: "121300" },
              { nombre: "Caballería Motorizada", code: "121303" }
            ]
          },
          {
            nombre: "Ingenieros",
            children: [
              { nombre: "Ingenieros", code: "140700" },
              { nombre: "Ingenieros Mecanizados", code: "140701" },
              { nombre: "Ingenieros Motorizados", code: "140702" },
              { nombre: "Ingenieros de Reconocimiento", code: "140703" }
            ]
          },
          {
            nombre: "Artillería",
            children: [
              { nombre: "Artillería", code: "130300" },
              { nombre: "Artillería de Reconocimiento", code: "130303" },
              { nombre: "Artillería Motorizada", code: "320000" },

              { nombre: "Observador de Artillería", code: "130400" },
              { nombre: "Artillería de Defensa Antiaérea", code: "130100" },
              { nombre: "Topografía de Artillería", code: "130900" },
            ]
          },
          {
            nombre: "Arma Blindada",
            children: [
              { nombre: "Arma Blindada", code: "120500" },
              { nombre: "Blindada de Reconocimiento", code: "120501" },
              { nombre: "Blindada Anfibia", code: "120502" }
            ]
          }
        ],
        mod1: [
          { nombre: "", code: "00", cim1: "0"},
          { ssc:"10", nombre: "Asalto Áereo", code: "01", cim1: "0" },
          { nombre: "Adquisición de blancos", code: "67", cim1: "0" },
          { nombre: "Armas", code: "37", cim1: "1" },
          { nombre: "Ataque", code: "06", cim1: "1" },
          { nombre: "Biológica", code: "04", cim1: "0" },
          { nombre: "Blindada", code: "07", cim1: "1" },
          { nombre: "Búsqueda y Rescate", code: "28", cim1: "1" },
          { nombre: "Combate", code: "09", cim1: "0" },
          { nombre: "Constructores", code: "12", cim1: "0" },
          { nombre: "Cuartel General", code: "98", cim1: "0" },
          { nombre: "Descontaminación", code: "42", cim1: "1" },
          { nombre: "Detención", code: "16", cim1: "0" },
          { nombre: "Evacuación Médica", code: "75", cim1: "0" },
          { nombre: "Franco Tirador", code: "30", cim1: "1" },
          { nombre: "Humo", code: "60", cim1: "0" }, 
          { nombre: "Imágenes de Viceo", code: "70", cim1: "0" },
          { nombre: "Lanzacohetes", code: "59", cim1: "0" }, 
          { nombre: "Lanzacohetes múltiple", code: "41", cim1: "0" },
          { nombre: "Mando y Control", code: "22", cim1: "1" },
          { nombre: "Mantenimiento", code: "26", cim1: "1" },
          { nombre: "Meteorológico", code: "32", cim1: "0" },
          { nombre: "Naval", code: "46", cim1: "0" },
          { nombre: "Nuclear", code: "41", cim1: "1" },
          { nombre: "Puente", code: "09", cim1: "1" },
          { nombre: "Química", code: "38", cim1: "1" },
          { nombre: "Radar", code: "50", cim1: "0" }, 
          { nombre: "Radiológica", code: "40", cim1: "1" },         
          { nombre: "Seguridad", code: "54", cim1: "0" },
          { nombre: "Sensores", code: "55", cim1: "0" },
          { nombre: "Sistema Aéreo no Tripulado", code: "00", cim1: "1" },
          { nombre: "Utilidad", code: "11", cim1: "1" }, 

          { nombre: "Equipo / Dotación", code: "62", cim1: "1" },
          { nombre: "Escuadra", code: "61", cim1: "1" }, 
          { nombre: "Pelotón / Destacamento", code: "60", cim1: "1" },
          { nombre: "Sección", code: "58", cim1: "1" },
          { nombre: "Compañía/Bateía / Escuadrón", code: "57", cim1: "1" },
          { nombre: "Batallón / Regimiento", code: "63", cim1: "1" },
          { nombre: "Brigada (Ind. / Div.)", code: "19", cim1: "1" },
          { nombre: "Cuerpo de Ejército", code: "96", cim1: "0" },
          { nombre: "Ejército de Operaciones", code: "95", cim1: "0" },  
          { nombre: "Comando", code: "56", cim1: "1" },  
          { nombre: "Localización por Sonido", code: "70", cim1: "1" },   
          
          { nombre: "Remolcado", code: "72", cim1: "1" }, 
          { nombre: "Unidad de Vigilancia", code: "73", cim1: "1" }, 
          { nombre: "Reconocimiento y Vigilancia", code: "74", cim1: "1" }, 
          { nombre: " ", code: "01", cim1: "1" },
          { nombre: " ", code: "02", cim1: "1" },
          { nombre: " ", code: "03", cim1: "1" },
          { nombre: " ", code: "04", cim1: "1" },
          { nombre: " ", code: "05", cim1: "1" },        
          { nombre: " ", code: "08", cim1: "1" },          
          { nombre: " ", code: "10", cim1: "1" },          
          { nombre: " ", code: "12", cim1: "1" },
          { nombre: " ", code: "13", cim1: "1" },
          { nombre: " ", code: "14", cim1: "1" },
          { nombre: " ", code: "15", cim1: "1" },
          { nombre: " ", code: "16", cim1: "1" },
          { nombre: " ", code: "17", cim1: "1" },
          { nombre: " ", code: "18", cim1: "1" },          
          { nombre: " ", code: "20", cim1: "1" },
          { nombre: " ", code: "21", cim1: "1" },          
          { nombre: " ", code: "23", cim1: "1" },
          { nombre: " ", code: "24", cim1: "1" },
          { nombre: " ", code: "25", cim1: "1" },          
          { nombre: " ", code: "27", cim1: "1" },          
          { nombre: " ", code: "29", cim1: "1" },          
          { nombre: " ", code: "31", cim1: "1" },
          { nombre: " ", code: "32", cim1: "1" },
          { nombre: " ", code: "33", cim1: "1" },
          { nombre: " ", code: "34", cim1: "1" },
          { nombre: " ", code: "35", cim1: "1" },
          { nombre: " ", code: "36", cim1: "1" },         
          { nombre: " ", code: "39", cim1: "1" },
          { nombre: " ", code: "43", cim1: "1" },
          { nombre: " ", code: "44", cim1: "1" },
          { nombre: " ", code: "45", cim1: "1" },
          { nombre: " ", code: "46", cim1: "1" },
          { nombre: " ", code: "47", cim1: "1" },
          { nombre: " ", code: "48", cim1: "1" },
          { nombre: " ", code: "49", cim1: "1" },
          { nombre: " ", code: "50", cim1: "1" },
          { nombre: " ", code: "51", cim1: "1" },
          { nombre: " ", code: "52", cim1: "1" },
          { nombre: " ", code: "53", cim1: "1" },
          { nombre: " ", code: "54", cim1: "1" },
          { nombre: " ", code: "55", cim1: "1" },
          { nombre: " ", code: "59", cim1: "1" },      
          { nombre: " ", code: "64", cim1: "1" },
          { nombre: " ", code: "65", cim1: "1" },
          { nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2: [
          { nombre: "", code: "00", cim2: "0"},
          { nombre: "Abastecimiento", code: "62", cim2: "0" },
          { nombre: "Aerotransportado", code: "01", cim2: "0" },
          { nombre: "Asalto Aéreo", code: "59", cim2: "0" },

          { nombre: "Alcance Corto", code: "16", cim2: "1" },
          { nombre: "Alcance Medio", code: "15", cim2: "1" },
          { nombre: "Alcance Largo", code: "14", cim2: "1" },

          { nombre: "Altura Baja", code: "23", cim2: "0" },
          { nombre: "Altura Mediana", code: "25" },
          { nombre: "Altura Alta", code: "16", cim2: "0" },

          { nombre: "Ártico (Trineo)", code: "02", cim2: "0" },
          { nombre: "Anfibio", code: "60", cim2: "0" }, 
          { nombre: "Autoimpulsado / De Orugas", code: "04", cim2: "1" }, 
          { nombre: "De Reudas", code: "06", cim2: "1" },        
          { nombre: "Descontaminación", code: "09", cim2: "0" },
          { nombre: "Equipado con Bicicleta", code: "01", cim2: "1" },
          { nombre: "Esquí", code: "03", cim2: "1" },

          { nombre: "Liviano", code: "19", cim2: "0" },
          { nombre: "Mediano", code: "24", cim2: "0" },
          { nombre: "Pesado", code: "15", cim2: "0" },

          { nombre: "Ferrocarril", code: "02", cim2: "1" },
          { nombre: "Motorizado", code: "30", cim2: "1" },
          { nombre: "Motorizado todo Terreno", code: "31", cim2: "1" },
          { nombre: "Fluvial o Flotante", code: "40", cim2: "0" },
          { nombre: "Montaña", code: "27", cim2: "0" },
          { nombre: "Recuperación", code: "38", cim2: "0" },          
          { nombre: "Remolcado", code: "47", cim2: "0" }, 
          { nombre: "Localización de Blancos", code: "32", cim2: "1" }, 
          { nombre: "Táctico", code: "33", cim2: "1" },
          { nombre: "Estratégico", code: "34", cim2: "1" },       

          { nombre: " ", code: "00", cim2: "1" },
          { nombre: " ", code: "02", cim2: "1" },
          { nombre: " ", code: "03", cim2: "1" },
          { nombre: " ", code: "04", cim2: "1" },
          { nombre: " ", code: "05", cim2: "1" },
          { nombre: " ", code: "07", cim2: "1" },
          { nombre: " ", code: "08", cim2: "1" },
          { nombre: " ", code: "09", cim2: "1" },
          { nombre: " ", code: "10", cim2: "1" },
          { nombre: " ", code: "11", cim2: "1" },
          { nombre: " ", code: "12", cim2: "1" },
          { nombre: " ", code: "13", cim2: "1" },  
          { nombre: " ", code: "17", cim2: "1" },
          { nombre: " ", code: "18", cim2: "1" },
          { nombre: " ", code: "19", cim2: "1" },          
          { nombre: " ", code: "21", cim2: "1" },
          { nombre: " ", code: "22", cim2: "1" },
          { nombre: " ", code: "23", cim2: "1" },
          { nombre: " ", code: "24", cim2: "1" },          
          { nombre: " ", code: "25", cim2: "1" }        
        ]
      },
      servicio: {
        iconos: [
          { nombre: "", code: "000000" },
          {
            nombre: "Transmisiones",
            children: [
              { nombre: "Transmisiones", code: "111000" },
              { nombre: "Amplitud electrónico", code: "150400" }
            ]
          },  
          { nombre: "Sanidad", code: "161300" },
          { nombre: "Intendencia", code: "162900" },
          { nombre: "Policía Militar", code: "141200" },
          { nombre: "Transportes_mx", code: "250000" },
          { nombre: "Transportes", code: "163600" },
          { nombre: "Administración", code: "160100" },
        ],
        mod1: [
          { nombre: "", code: "00", cim1: "0"},
          { nombre: "U. Tác. Coms. Sats. Señales ", code: "01", cim1: "0" },
          { nombre: "Adquisición de blancos", code: "67", cim1: "0" },
          { nombre: "Armas", code: "37", cim1: "1" },
          { nombre: "Ataque", code: "06", cim1: "1" },
          { nombre: "Biológica", code: "04", cim1: "0" },
          { nombre: "Blindada", code: "07", cim1: "1" },
          { nombre: "Búsqueda y Rescate", code: "28", cim1: "1" },
          { nombre: "Combate", code: "09", cim1: "0" },
          { nombre: "Constructores", code: "12", cim1: "0" },
          { nombre: "Cuartel General", code: "98", cim1: "0" },
          { nombre: "Descontaminación", code: "42", cim1: "1" },
          { nombre: "Detención", code: "16", cim1: "0" },
          { nombre: "Evacuación Médica", code: "75", cim1: "0" },
          { nombre: "Franco Tirador", code: "30", cim1: "1" },
          { nombre: "Humo", code: "60", cim1: "0" }, 
          { nombre: "Imágenes de Viceo", code: "70", cim1: "0" },
          { nombre: "Lanzacohetes", code: "59", cim1: "0" }, 
          { nombre: "Lanzacohetes múltiple", code: "41", cim1: "0" },
          { nombre: "Mando y Control", code: "22", cim1: "1" },
          { nombre: "Mantenimiento", code: "26", cim1: "1" },
          { nombre: "Meteorológico", code: "32", cim1: "0" },
          { nombre: "Naval", code: "46", cim1: "0" },
          { nombre: "Nuclear", code: "41", cim1: "1" },
          { nombre: "Puente", code: "09", cim1: "1" },
          { nombre: "Química", code: "38", cim1: "1" },
          { nombre: "Radar", code: "50", cim1: "0" }, 
          { nombre: "Radiológica", code: "40", cim1: "1" },         
          { nombre: "Seguridad", code: "54", cim1: "0" },
          { nombre: "Sensores", code: "55", cim1: "0" },
          { nombre: "Sistema Aéreo no Tripulado", code: "00", cim1: "1" },
          { nombre: "Utilidad", code: "11", cim1: "1" }, 

          { nombre: "Equipo / Dotación", code: "62", cim1: "1" },
          { nombre: "Escuadra", code: "61", cim1: "1" }, 
          { nombre: "Pelotón / Destacamento", code: "60", cim1: "1" },
          { nombre: "Sección", code: "58", cim1: "1" },
          { nombre: "Compañía/Bateía / Escuadrón", code: "57", cim1: "1" },
          { nombre: "Batallón / Regimiento", code: "63", cim1: "1" },
          { nombre: "Brigada (Ind. / Div.)", code: "19", cim1: "1" },
          { nombre: "Cuerpo de Ejército", code: "96", cim1: "0" },
          { nombre: "Ejército de Operaciones", code: "95", cim1: "0" },  
          { nombre: "Comando", code: "56", cim1: "1" },  
          { nombre: "Área", code: "76", cim1: "1" },  
          { nombre: "Contingencia de Señales", code: "77", cim1: "1" },
          { nombre: "Red de Mando y Control", code: "78", cim1: "1" },
          { nombre: "Operación de Comando", code: "79", cim1: "1" },
          { nombre: "Red Logística", code: "80", cim1: "1" }, 
          { nombre: "Elemento de Suscriptor Múltiple", code: "81", cim1: "1" }, 
          { nombre: "Nodo de Centro", code: "82", cim1: "1" }, 
          { nombre: "Radio", code: "83", cim1: "1" }, 
          
          { nombre: " ", code: "01", cim1: "1" },
          { nombre: " ", code: "02", cim1: "1" },
          { nombre: " ", code: "03", cim1: "1" },
          { nombre: " ", code: "04", cim1: "1" },
          { nombre: " ", code: "05", cim1: "1" },        
          { nombre: " ", code: "08", cim1: "1" },          
          { nombre: " ", code: "10", cim1: "1" },          
          { nombre: " ", code: "12", cim1: "1" },
          { nombre: " ", code: "13", cim1: "1" },
          { nombre: " ", code: "14", cim1: "1" },
          { nombre: " ", code: "15", cim1: "1" },
          { nombre: " ", code: "16", cim1: "1" },
          { nombre: " ", code: "17", cim1: "1" },
          { nombre: " ", code: "18", cim1: "1" },          
          { nombre: " ", code: "20", cim1: "1" },
          { nombre: " ", code: "21", cim1: "1" },          
          { nombre: " ", code: "23", cim1: "1" },
          { nombre: " ", code: "24", cim1: "1" },
          { nombre: " ", code: "25", cim1: "1" },          
          { nombre: " ", code: "27", cim1: "1" },          
          { nombre: " ", code: "29", cim1: "1" },          
          { nombre: " ", code: "31", cim1: "1" },
          { nombre: " ", code: "32", cim1: "1" },
          { nombre: " ", code: "33", cim1: "1" },
          { nombre: " ", code: "34", cim1: "1" },
          { nombre: " ", code: "35", cim1: "1" },
          { nombre: " ", code: "36", cim1: "1" },         
          { nombre: " ", code: "39", cim1: "1" },
          { nombre: " ", code: "43", cim1: "1" },
          { nombre: " ", code: "44", cim1: "1" },
          { nombre: " ", code: "45", cim1: "1" },
          { nombre: " ", code: "46", cim1: "1" },
          { nombre: " ", code: "47", cim1: "1" },
          { nombre: " ", code: "48", cim1: "1" },
          { nombre: " ", code: "49", cim1: "1" },
          { nombre: " ", code: "50", cim1: "1" },
          { nombre: " ", code: "51", cim1: "1" },
          { nombre: " ", code: "52", cim1: "1" },
          { nombre: " ", code: "53", cim1: "1" },
          { nombre: " ", code: "54", cim1: "1" },
          { nombre: " ", code: "55", cim1: "1" },
          { nombre: " ", code: "59", cim1: "1" },      
          { nombre: " ", code: "64", cim1: "1" },
          { nombre: " ", code: "65", cim1: "1" },
          { nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2: [
          { nombre: "", code: "00", cim2: "0"},
          { nombre: "Abastecimiento", code: "62", cim2: "0" },
          { nombre: "Aerotransportado", code: "01", cim2: "0" },
          { nombre: "Asalto Aéreo", code: "59", cim2: "0" },

          { nombre: "Alcance Corto", code: "16", cim2: "1" },
          { nombre: "Alcance Medio", code: "15", cim2: "1" },
          { nombre: "Alcance Largo", code: "14", cim2: "1" },

          { nombre: "Altura Baja", code: "23", cim2: "0" },
          { nombre: "Altura Mediana", code: "25" },
          { nombre: "Altura Alta", code: "16", cim2: "0" },

          { nombre: "Ártico (Trineo)", code: "02", cim2: "0" },
          { nombre: "Anfibio", code: "60", cim2: "0" }, 
          { nombre: "Autoimpulsado / De Orugas", code: "04", cim2: "1" }, 
          { nombre: "De Reudas", code: "06", cim2: "1" },        
          { nombre: "Descontaminación", code: "09", cim2: "0" },
          { nombre: "Equipado con Bicicleta", code: "01", cim2: "1" },
          { nombre: "Esquí", code: "03", cim2: "1" },

          { nombre: "Liviano", code: "19", cim2: "0" },
          { nombre: "Mediano", code: "24", cim2: "0" },
          { nombre: "Pesado", code: "15", cim2: "0" },

          { nombre: "Ferrocarril", code: "02", cim2: "1" },
          { nombre: "Fluvial o Flotante", code: "40", cim2: "0" },
          { nombre: "Montaña", code: "27", cim2: "0" },
          { nombre: "Recuperación", code: "38", cim2: "0" },          
          { nombre: "Remolcado", code: "47", cim2: "0" },         

          { nombre: " ", code: "00", cim2: "1" },
          { nombre: " ", code: "02", cim2: "1" },
          { nombre: " ", code: "03", cim2: "1" },
          { nombre: " ", code: "04", cim2: "1" },
          { nombre: " ", code: "05", cim2: "1" },
          { nombre: " ", code: "07", cim2: "1" },
          { nombre: " ", code: "08", cim2: "1" },
          { nombre: " ", code: "09", cim2: "1" },
          { nombre: " ", code: "10", cim2: "1" },
          { nombre: " ", code: "11", cim2: "1" },
          { nombre: " ", code: "12", cim2: "1" },
          { nombre: " ", code: "13", cim2: "1" },  
          { nombre: " ", code: "17", cim2: "1" },
          { nombre: " ", code: "18", cim2: "1" },
          { nombre: " ", code: "19", cim2: "1" },          
          { nombre: " ", code: "21", cim2: "1" },
          { nombre: " ", code: "22", cim2: "1" },
          { nombre: " ", code: "23", cim2: "1" },
          { nombre: " ", code: "24", cim2: "1" },          
          { nombre: " ", code: "25", cim2: "1" }        
        ]
      },
      equipo: {
        iconos: [
          { ssc:"15", nombre: "", code: "000000" },
          { ssc:"15", nombre: "Arma sin Especificar", code: "240001" },
          { ssc:"15", nombre: "Rifle", code: "110100" },
          { ssc:"15", nombre: "Rifle Tiro a Tiro", code: "110101" },
          { ssc:"15", nombre: "Rifle Semiautomático", code: "110102" },
          { ssc:"15", nombre: "Rifle Automático", code: "110103" },
          { ssc:"15", nombre: "Lanza Llamas", code: "110400" },
          { ssc:"15", nombre: "Lanza Granadas", code: "110300" },
          { ssc:"15", nombre: "Lanza Granadas Ligero", code: "110301" },
          { ssc:"15", nombre: "Lanza Granadas Mediano", code: "110302" },
          { ssc:"15", nombre: "Lanza Granadas Pesado", code: "110303" },
          { ssc:"15", nombre: "Arma de Defensa Antiaérea", code: "110500" },
          { ssc:"15", nombre: "Arma de Defensa Antiaérea Ligero", code: "110501" },
          { ssc:"15", nombre: "Arma de Defensa Antiaérea Mediano", code: "110502" },
          { ssc:"15", nombre: "Arma de Defensa Antiaérea Pesado", code: "110503" },
          { ssc:"15", nombre: "Arma Antitanque", code: "110600"},
          { ssc:"15", nombre: "Arma Antitanque Ligera", code: "110601"},
          { ssc:"15", nombre: "Arma Antitanque Mediana", code: "110602"},
          { ssc:"15", nombre: "Arma Antitanque Pesada", code: "110603"},
          { ssc:"15", nombre: "Cañón sin Retroceso", code: "110800"},
          { ssc:"15", nombre: "Cañón sin Retroceso Ligero", code: "110801"},
          { ssc:"15", nombre: "Cañón sin Retroceso Mediano", code: "110802"},
          { ssc:"15", nombre: "Cañón sin Retroceso Pesado", code: "110803"},
          { ssc:"15", nombre: "Obús", code: "110900"},
          { ssc:"15", nombre: "Obús Ligero", code: "110901"},
          { ssc:"15", nombre: "Obús Mediano", code: "110902"},
          { ssc:"15", nombre: "Obús Pesado", code: "110903"},          
          { ssc:"15", nombre: "Ametralladora", code: "110200" },
          { ssc:"15", nombre: "Ametralladora Ligera", code: "110201" },
          { ssc:"15", nombre: "Ametralladora Mediana", code: "110202" },
          { ssc:"15", nombre: "Ametralladora Pesada", code: "110203" },
          { ssc:"15", nombre: "Lanzamisiles", code: "111000" },
          { ssc:"15", nombre: "Lanzamisiles Ligero", code: "111001" },
          { ssc:"15", nombre: "Lanzamisiles Mediano", code: "111002" },
          { ssc:"15", nombre: "Lanzamisiles Pesado", code: "111003" },
          { ssc:"15", nombre: "Mortero", code: "111400" },
          { ssc:"15", nombre: "Mortero Ligero", code: "111401" },
          { ssc:"15", nombre: "Mortero Mediano", code: "111402" },
          { ssc:"15", nombre: "Mortero Pesado", code: "111403" },
          { ssc:"15", nombre: "Arma No Letal", code: "111800" },
          { ssc:"15", nombre: 'Pistola Paralizante "Taser"', code: "111900" },
          { ssc:"15", nombre: "Cañon de Agua", code: "112000" },
          { ssc:"15", nombre: "Vehículo Blindado de Combate", code: "120101" },
          { ssc:"15", nombre: "Transporte Blindado de Personal", code: "120103" },
          { ssc:"15", nombre: "Vehículo protegido por Blindaje", code: "120105" },
          { ssc:"15", nombre: "Tanque", code: "120200" },
          { ssc:"15", nombre: "Vehículo de Utilidad", code: "140100" },
          { ssc:"15", nombre: "Puente", code: "130100" },
          { ssc:"15", nombre: "Puente Fijo", code: "130300" },
          { ssc:"15", nombre: "Aparato Removedor de Tierra", code: "130800" },
          { ssc:"15", nombre: "Levantaminas", code: "130900" },
          { ssc:"15", nombre: "Equipo QBRN", code: "200400" },
          { ssc:"15", nombre: "Generador", code: "200700" },
          { ssc:"15", nombre: "Operaciones de Apoyo de Información Militar", code: "201100" },
          { ssc:"15", nombre: "Radar", code: "220300" },
          { ssc:"15", nombre: "Sensor", code: "220100" },
          { ssc:"15", nombre: "Ferrocarril", code: "150100"}
        ],
        mod1 : [
          { ssc:"15", nombre: "", code: "00", cim1: "0"},
          { ssc:"15", nombre: "Adquisición de blancos", code: "67", cim1: "0" },
          { ssc:"15", nombre: "Armas", code: "37", cim1: "1" },
          { ssc:"15", nombre: "Ataque", code: "06", cim1: "1" },
          { ssc:"15", nombre: "Biológica", code: "04", cim1: "0" },
          { ssc:"15", nombre: "Blindada", code: "07", cim1: "1" },
          { ssc:"15", nombre: "Búsqueda y Rescate", code: "28", cim1: "1" },
          { ssc:"15", nombre: "Combate", code: "09", cim1: "0" },
          { ssc:"15", nombre: "Constructores", code: "12", cim1: "0" },
          { ssc:"15", nombre: "Cuartel General", code: "98", cim1: "0" },
          { ssc:"15", nombre: "Descontaminación", code: "42", cim1: "1" },
          { ssc:"15", nombre: "Detención", code: "16", cim1: "0" },
          { ssc:"15", nombre: "Evacuación Médica", code: "75", cim1: "0" },
          { ssc:"15", nombre: "Franco Tirador", code: "30", cim1: "1" },
          { ssc:"15", nombre: "Humo", code: "60", cim1: "0" }, 
          { ssc:"15", nombre: "Imágenes de Viceo", code: "70", cim1: "0" },
          { ssc:"15", nombre: "Lanzacohetes", code: "59", cim1: "0" }, 
          { ssc:"15", nombre: "Lanzacohetes múltiple", code: "41", cim1: "0" },
          { ssc:"15", nombre: "Mando y Control", code: "22", cim1: "1" },
          { ssc:"15", nombre: "Mantenimiento", code: "26", cim1: "1" },
          { ssc:"15", nombre: "Meteorológico", code: "32", cim1: "0" },
          { ssc:"15", nombre: "Naval", code: "46", cim1: "0" },
          { ssc:"15", nombre: "Nuclear", code: "41", cim1: "1" },
          { ssc:"15", nombre: "Puente", code: "09", cim1: "1" },
          { ssc:"15", nombre: "Química", code: "38", cim1: "1" },
          { ssc:"15", nombre: "Radar", code: "50", cim1: "0" }, 
          { ssc:"15", nombre: "Radiológica", code: "40", cim1: "1" },         
          { ssc:"15", nombre: "Seguridad", code: "54", cim1: "0" },
          { ssc:"15", nombre: "Sensores", code: "55", cim1: "0" },
          { ssc:"15", nombre: "Sistema Aéreo no Tripulado", code: "00", cim1: "1" },
          { ssc:"15", nombre: "Utilidad", code: "11", cim1: "1" }, 

          { ssc:"15", nombre: "Equipo / Dotación", code: "62", cim1: "1" },
          { ssc:"15", nombre: "Escuadra", code: "61", cim1: "1" }, 
          { ssc:"15", nombre: "Pelotón / Destacamento", code: "60", cim1: "1" },
          { ssc:"15", nombre: "Sección", code: "58", cim1: "1" },
          { ssc:"15", nombre: "Compañía/Bateía / Escuadrón", code: "57", cim1: "1" },
          { ssc:"15", nombre: "Batallón / Regimiento", code: "63", cim1: "1" },
          { ssc:"15", nombre: "Brigada (Ind. / Div.)", code: "19", cim1: "1" },
          { ssc:"15", nombre: "Cuerpo de Ejército", code: "96", cim1: "0" },
          { ssc:"15", nombre: "Ejército de Operaciones", code: "95", cim1: "0" },  
          { ssc:"15", nombre: "Comando", code: "56", cim1: "1" },     
          
          { ssc:"15", nombre: " ", code: "01", cim1: "1" },
          { ssc:"15", nombre: " ", code: "02", cim1: "1" },
          { ssc:"15", nombre: " ", code: "03", cim1: "1" },
          { ssc:"15", nombre: " ", code: "04", cim1: "1" },
          { ssc:"15", nombre: " ", code: "05", cim1: "1" },        
          { ssc:"15", nombre: " ", code: "08", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "10", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "12", cim1: "1" },
          { ssc:"15", nombre: " ", code: "13", cim1: "1" },
          { ssc:"15", nombre: " ", code: "14", cim1: "1" },
          { ssc:"15", nombre: " ", code: "15", cim1: "1" },
          { ssc:"15", nombre: " ", code: "16", cim1: "1" },
          { ssc:"15", nombre: " ", code: "17", cim1: "1" },
          { ssc:"15", nombre: " ", code: "18", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "20", cim1: "1" },
          { ssc:"15", nombre: " ", code: "21", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "23", cim1: "1" },
          { ssc:"15", nombre: " ", code: "24", cim1: "1" },
          { ssc:"15", nombre: " ", code: "25", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "27", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "29", cim1: "1" },          
          { ssc:"15", nombre: " ", code: "31", cim1: "1" },
          { ssc:"15", nombre: " ", code: "32", cim1: "1" },
          { ssc:"15", nombre: " ", code: "33", cim1: "1" },
          { ssc:"15", nombre: " ", code: "34", cim1: "1" },
          { ssc:"15", nombre: " ", code: "35", cim1: "1" },
          { ssc:"15", nombre: " ", code: "36", cim1: "1" },         
          { ssc:"15", nombre: " ", code: "39", cim1: "1" },
          { ssc:"15", nombre: " ", code: "43", cim1: "1" },
          { ssc:"15", nombre: " ", code: "44", cim1: "1" },
          { ssc:"15", nombre: " ", code: "45", cim1: "1" },
          { ssc:"15", nombre: " ", code: "46", cim1: "1" },
          { ssc:"15", nombre: " ", code: "47", cim1: "1" },
          { ssc:"15", nombre: " ", code: "48", cim1: "1" },
          { ssc:"15", nombre: " ", code: "49", cim1: "1" },
          { ssc:"15", nombre: " ", code: "50", cim1: "1" },
          { ssc:"15", nombre: " ", code: "51", cim1: "1" },
          { ssc:"15", nombre: " ", code: "52", cim1: "1" },
          { ssc:"15", nombre: " ", code: "53", cim1: "1" },
          { ssc:"15", nombre: " ", code: "54", cim1: "1" },
          { ssc:"15", nombre: " ", code: "55", cim1: "1" },
          { ssc:"15", nombre: " ", code: "59", cim1: "1" },      
          { ssc:"15", nombre: " ", code: "64", cim1: "1" },
          { ssc:"15", nombre: " ", code: "65", cim1: "1" },
          { ssc:"15", nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2 : [
          { ssc:"15", nombre: "", code: "00", cim2: "0"},
          { ssc:"15", nombre: "Abastecimiento", code: "62", cim2: "0" },
          { ssc:"15", nombre: "Aerotransportado", code: "01", cim2: "0" },
          { ssc:"15", nombre: "Asalto Aéreo", code: "59", cim2: "0" },
 
          { ssc:"15", nombre: "Alcance Corto", code: "16", cim2: "1" },
          { ssc:"15", nombre: "Alcance Medio", code: "15", cim2: "1" },
          { ssc:"15", nombre: "Alcance Largo", code: "14", cim2: "1" },
 
          { ssc:"15", nombre: "Altura Baja", code: "23", cim2: "0" },
          { ssc:"15", nombre: "Altura Mediana", code: "25" },
          { ssc:"15", nombre: "Altura Alta", code: "16", cim2: "0" },
 
          { ssc:"15", nombre: "Ártico (Trineo)", code: "02", cim2: "0" },
          { ssc:"15", nombre: "Anfibio", code: "60", cim2: "0" }, 
          { ssc:"15", nombre: "Autoimpulsado / De Orugas", code: "04", cim2: "1" }, 
          { ssc:"15", nombre: "De Reudas", code: "06", cim2: "1" },        
          { ssc:"15", nombre: "Descontaminación", code: "09", cim2: "0" },
          { ssc:"15", nombre: "Equipado con Bicicleta", code: "01", cim2: "1" },
          { ssc:"15", nombre: "Esquí", code: "03", cim2: "1" },
 
          { ssc:"15", nombre: "Liviano", code: "19", cim2: "0" },
          { ssc:"15", nombre: "Mediano", code: "24", cim2: "0" },
          { ssc:"15", nombre: "Pesado", code: "15", cim2: "0" },

          { ssc:"15", nombre: "Ferrocarril", code: "02", cim2: "1" },
          { ssc:"15", nombre: "Fluvial o Flotante", code: "40", cim2: "0" },
          { ssc:"15", nombre: "Montaña", code: "27", cim2: "0" },
          { ssc:"15", nombre: "Recuperación", code: "38", cim2: "0" },          
          { ssc:"15", nombre: "Remolcado", code: "47", cim2: "0" },         

          { ssc:"15", nombre: " ", code: "00", cim2: "1" },
          { ssc:"15", nombre: " ", code: "02", cim2: "1" },
          { ssc:"15", nombre: " ", code: "03", cim2: "1" },
          { ssc:"15", nombre: " ", code: "04", cim2: "1" },
          { ssc:"15", nombre: " ", code: "05", cim2: "1" },
          { ssc:"15", nombre: " ", code: "07", cim2: "1" },
          { ssc:"15", nombre: " ", code: "08", cim2: "1" },
          { ssc:"15", nombre: " ", code: "09", cim2: "1" },
          { ssc:"15", nombre: " ", code: "10", cim2: "1" },
          { ssc:"15", nombre: " ", code: "11", cim2: "1" },
          { ssc:"15", nombre: " ", code: "12", cim2: "1" },
          { ssc:"15", nombre: " ", code: "13", cim2: "1" },  
          { ssc:"15", nombre: " ", code: "17", cim2: "1" },
          { ssc:"15", nombre: " ", code: "18", cim2: "1" },
          { ssc:"15", nombre: " ", code: "19", cim2: "1" },          
          { ssc:"15", nombre: " ", code: "21", cim2: "1" },
          { ssc:"15", nombre: " ", code: "22", cim2: "1" },
          { ssc:"15", nombre: " ", code: "23", cim2: "1" },
          { ssc:"15", nombre: " ", code: "24", cim2: "1" },          
          { ssc:"15", nombre: " ", code: "25", cim2: "1" }        
        ],
      }, 

      otros: {
        iconos: [
          { nombre: "", code: "000000" },
          { nombre: "Abogado General de Justicia", code: "160800" },
          { nombre: "Administración de Servicios Funerarios", code: "161600" },
          { nombre: "Administración de Servicios de Personal", code: "162400" },
          { nombre: "Antenas de Transmisión de Radiodifusión", code: "110100" },
          { nombre: "Antenas de Transmisión de Radiodifusión (PSYOPS)", code: "110601" },
          { nombre: "Antitanques / Antiblindados", code: "120400" },
          { nombre: "Antitanque Motorizado", code: "120402" },
          { nombre: "Asuntos civiles", code: "110200" },
          { nombre: "Capellán", code: "163100" },
          { nombre: "Inteligencia Militar", code: "151000" },
          { nombre: "Contra-Inteligencia", code: "150200" },
          { nombre: "Centro Conjunto de Inteligencia Militar", code: "150900" },
          { nombre: "Defensa Antiaérea y Antimisiles", code: "130103" },
          { nombre: "Desactivación de Artefactos Explosivos", code: "140800" },
          { nombre: "Divisiónn de Investigación ", code: "140300" },
          { nombre: "Fuerzas Especiales", code: "121700" },
          { nombre: "Fuerza de Tarea Emergencia Valle de México", code: "240000" },
          { nombre: "Guerra Electrónica", code: "150500" },
          { nombre: "Análisis de Guerra Electrónica", code: "150501" },
          { nombre: "Intercepción de Guerra Electrónica", code: "150503" },  
          { nombre: "Radiogoniometría de Guerra Electrónica", code: "150502" },
          { nombre: "Mejora de maniobra", code: "140200" },
          { nombre: "Meteorológico (a)", code: "130600" }, 
          { nombre: "Misil", code: "130700" },
          { nombre: "Operaciones Psicológicas", code: "110600" },  
          { nombre: "Perforación", code: "140600" },
          { nombre: "Pertrechos", code: "162300" },
          { nombre: "Pirata", code: "280000" },
          { nombre: "Policía", code: "200700" },
          { nombre: "Protección Contra Incendios", code: "141000" },
          { nombre: "Químico, Biológico, Radiológico y Nuclear", code: "140100" },       
          { nombre: "Reconocimiento", code: "121300" },
          { nombre: "Reconocimiento y Vigilancia", code: "121301" },
          { nombre: "Seguridad", code: "141700" },
          { nombre: "Seguridad Motorizada", code: "141702" },
          { nombre: "Servicio de Apoyo de Combate", code: "160600" },
          { nombre: "Sostenimiento", code: "160000" },
          { nombre: "Sostenimiento", code: "230000" },
          { nombre: "Topografía", code: "142100" },
          { nombre: "Vigilancia", code: "121600" },
          { nombre: "Interferencia", code: "150800" }          
        ],
        mod1: [
          { nombre: "", code: "00", cim1: "0"},
          { nombre: "Adquisición de blancos", code: "67", cim1: "0" },
          { nombre: "Armas", code: "37", cim1: "1" },
          { nombre: "Ataque", code: "06", cim1: "1" },
          { nombre: "Biológica", code: "04", cim1: "0" },
          { nombre: "Blindada", code: "07", cim1: "1" },
          { nombre: "Búsqueda y Rescate", code: "28", cim1: "1" },
          { nombre: "Combate", code: "09", cim1: "0" },
          { nombre: "Constructores", code: "12", cim1: "0" },
          { nombre: "Cuartel General", code: "98", cim1: "0" },
          { nombre: "Descontaminación", code: "42", cim1: "1" },
          { nombre: "Detención", code: "16", cim1: "0" },
          { nombre: "Evacuación Médica", code: "75", cim1: "0" },
          { nombre: "Franco Tirador", code: "30", cim1: "1" },
          { nombre: "Humo", code: "60", cim1: "0" }, 
          { nombre: "Imágenes de Viceo", code: "70", cim1: "0" },
          { nombre: "Lanzacohetes", code: "59", cim1: "0" }, 
          { nombre: "Lanzacohetes múltiple", code: "41", cim1: "0" },
          { nombre: "Mando y Control", code: "22", cim1: "1" },
          { nombre: "Mantenimiento", code: "26", cim1: "1" },
          { nombre: "Meteorológico", code: "32", cim1: "0" },
          { nombre: "Naval", code: "46", cim1: "0" },
          { nombre: "Nuclear", code: "41", cim1: "1" },
          { nombre: "Puente", code: "09", cim1: "1" },
          { nombre: "Química", code: "38", cim1: "1" },
          { nombre: "Radar", code: "50", cim1: "0" }, 
          { nombre: "Radiológica", code: "40", cim1: "1" },         
          { nombre: "Seguridad", code: "54", cim1: "0" },
          { nombre: "Sensores", code: "55", cim1: "0" },
          { nombre: "Sistema Aéreo no Tripulado", code: "00", cim1: "1" },
          { nombre: "Utilidad", code: "11", cim1: "1" }, 
          { nombre: "SIGINT", code: "57", cim1: "0" }, 

          { nombre: "Equipo / Dotación", code: "62", cim1: "1" },
          { nombre: "Escuadra", code: "61", cim1: "1" }, 
          { nombre: "Pelotón / Destacamento", code: "60", cim1: "1" },
          { nombre: "Sección", code: "58", cim1: "1" },
          { nombre: "Compañía/Bateía / Escuadrón", code: "57", cim1: "1" },
          { nombre: "Batallón / Regimiento", code: "63", cim1: "1" },
          { nombre: "Brigada (Ind. / Div.)", code: "19", cim1: "1" },
          { nombre: "Cuerpo de Ejército", code: "96", cim1: "0" },
          { nombre: "Ejército de Operaciones", code: "95", cim1: "0" },  
          { nombre: "Comando", code: "56", cim1: "1" }, 
          { nombre: "Explotación Táctica", code: "75", cim1: "1" }, 
          { nombre: "Área", code: "76", cim1: "1" }, 
              
          
          { nombre: " ", code: "01", cim1: "1" },
          { nombre: " ", code: "02", cim1: "1" },
          { nombre: " ", code: "03", cim1: "1" },
          { nombre: " ", code: "04", cim1: "1" },
          { nombre: " ", code: "05", cim1: "1" },        
          { nombre: " ", code: "08", cim1: "1" },          
          { nombre: " ", code: "10", cim1: "1" },          
          { nombre: " ", code: "12", cim1: "1" },
          { nombre: " ", code: "13", cim1: "1" },
          { nombre: " ", code: "14", cim1: "1" },
          { nombre: " ", code: "15", cim1: "1" },
          { nombre: " ", code: "16", cim1: "1" },
          { nombre: " ", code: "17", cim1: "1" },
          { nombre: " ", code: "18", cim1: "1" },          
          { nombre: " ", code: "20", cim1: "1" },
          { nombre: " ", code: "21", cim1: "1" },          
          { nombre: " ", code: "23", cim1: "1" },
          { nombre: " ", code: "24", cim1: "1" },
          { nombre: " ", code: "25", cim1: "1" },          
          { nombre: " ", code: "27", cim1: "1" },          
          { nombre: " ", code: "29", cim1: "1" },          
          { nombre: " ", code: "31", cim1: "1" },
          { nombre: " ", code: "32", cim1: "1" },
          { nombre: " ", code: "33", cim1: "1" },
          { nombre: " ", code: "34", cim1: "1" },
          { nombre: " ", code: "35", cim1: "1" },
          { nombre: " ", code: "36", cim1: "1" },         
          { nombre: " ", code: "39", cim1: "1" },
          { nombre: " ", code: "43", cim1: "1" },
          { nombre: " ", code: "44", cim1: "1" },
          { nombre: " ", code: "45", cim1: "1" },
          { nombre: " ", code: "46", cim1: "1" },
          { nombre: " ", code: "47", cim1: "1" },
          { nombre: " ", code: "48", cim1: "1" },
          { nombre: " ", code: "49", cim1: "1" },
          { nombre: " ", code: "50", cim1: "1" },
          { nombre: " ", code: "51", cim1: "1" },
          { nombre: " ", code: "52", cim1: "1" },
          { nombre: " ", code: "53", cim1: "1" },
          { nombre: " ", code: "54", cim1: "1" },
          { nombre: " ", code: "55", cim1: "1" },
          { nombre: " ", code: "59", cim1: "1" },      
          { nombre: " ", code: "64", cim1: "1" },
          { nombre: " ", code: "65", cim1: "1" },
          { nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2: [
          { nombre: "", code: "00", cim2: "0"},
          { nombre: "Abastecimiento", code: "62", cim2: "0" },
          { nombre: "Aerotransportado", code: "01", cim2: "0" },
          { nombre: "Asalto Aéreo", code: "59", cim2: "0" },

          { nombre: "Alcance Corto", code: "16", cim2: "1" },
          { nombre: "Alcance Medio", code: "15", cim2: "1" },
          { nombre: "Alcance Largo", code: "14", cim2: "1" },

          { nombre: "Altura Baja", code: "23", cim2: "0" },
          { nombre: "Altura Mediana", code: "25" },
          { nombre: "Altura Alta", code: "16", cim2: "0" },

          { nombre: "Ártico (Trineo)", code: "02", cim2: "0" },
          { nombre: "Anfibio", code: "60", cim2: "0" }, 
          { nombre: "Autoimpulsado / De Orugas", code: "04", cim2: "1" }, 
          { nombre: "De Reudas", code: "06", cim2: "1" },        
          { nombre: "Descontaminación", code: "09", cim2: "0" },
          { nombre: "Equipado con Bicicleta", code: "01", cim2: "1" },
          { nombre: "Esquí", code: "03", cim2: "1" },

          { nombre: "Liviano", code: "19", cim2: "0" },
          { nombre: "Mediano", code: "24", cim2: "0" },
          { nombre: "Pesado", code: "15", cim2: "0" },

          { nombre: "Ferrocarril", code: "02", cim2: "1" },
          { nombre: "Fluvial o Flotante", code: "40", cim2: "0" },
          { nombre: "Montaña", code: "27", cim2: "0" },
          { nombre: "Recuperación", code: "38", cim2: "0" },          
          { nombre: "Remolcado", code: "47", cim2: "0" }, 
          { nombre: "Táctico", code: "33", cim2: "1" },
          { nombre: "Estratégico", code: "34", cim2: "1" },          

          { nombre: " ", code: "00", cim2: "1" },
          { nombre: " ", code: "02", cim2: "1" },
          { nombre: " ", code: "03", cim2: "1" },
          { nombre: " ", code: "04", cim2: "1" },
          { nombre: " ", code: "05", cim2: "1" },
          { nombre: " ", code: "07", cim2: "1" },
          { nombre: " ", code: "08", cim2: "1" },
          { nombre: " ", code: "09", cim2: "1" },
          { nombre: " ", code: "10", cim2: "1" },
          { nombre: " ", code: "11", cim2: "1" },
          { nombre: " ", code: "12", cim2: "1" },
          { nombre: " ", code: "13", cim2: "1" },  
          { nombre: " ", code: "17", cim2: "1" },
          { nombre: " ", code: "18", cim2: "1" },
          { nombre: " ", code: "19", cim2: "1" },          
          { nombre: " ", code: "21", cim2: "1" },
          { nombre: " ", code: "22", cim2: "1" },
          { nombre: " ", code: "23", cim2: "1" },
          { nombre: " ", code: "24", cim2: "1" },          
          { nombre: " ", code: "25", cim2: "1" }        
        ],
      },

      instalaciones: {
        iconos: [
          { nombre: "", code: "000000" },
          { nombre: "Departamento de Bomberos", code: "112201", ssc: "20", codt: "20"},
          { nombre: "Aeropuerto", code: "120803", ssc: "20", codt: "20"},
          { nombre: "Planta de Energía Eléctrica", code: "120501", ssc: "20", codt: "20"},
          { nombre: "Fosas Comunes", code: "111100", ssc: "20", codt: "20"},
          { nombre: "Mina", code: "111300", ssc: "20", codt: "20"},
          { nombre: "Base Naval", code: "121309", ssc: "20", codt: "20"},
          { nombre: "Puerto Marítimo", code: "200000", ssc: "20", codt: "20"},
          { nombre: "Ship Yard", code: "121310", ssc: "20", codt: "20"},
          { nombre: "Telecomunicaciones", code: "121202", ssc: "20", codt: "20"},
          { nombre: "Departamento de Policía", code: "112107", ssc: "20", codt: "20"},
          { ssc: "20", codt: "20", code: "120400", nombre: "Educacional"},
          { ssc: "20", codt: "20", code: "120401", nombre: "Universidad"},
          { ssc: "20", codt: "20", code: "120402", nombre: "Escuela"},
        ],
        mod1: [
          { nombre: "", code: "00", ssc: "20", cim1: "0"},
          { nombre: "Carbón", ssc: "20", code: "06", cim1: "0" },
          { nombre: "Geotérmico", ssc: "20", code: "07", cim1: "0" },
          { nombre: "Hidroeléctrica", ssc: "20", code: "08", cim1: "0" },
          { nombre: "Gas Natural", ssc: "20", code: "09", cim1: "0" },
          { nombre: "Petróleo", ssc: "20", code: "35", cim1: "1" },
          { nombre: "Armas", ssc: "20", code: "37", cim1: "1" },
          { nombre: "Ataque", ssc: "20", code: "06", cim1: "1" },
          { nombre: "Biológica", ssc: "20", code: "04", cim1: "0" },
          { nombre: "Blindada", ssc: "20", code: "07", cim1: "1" },
          { nombre: "Búsqueda y Rescate", ssc: "20", code: "28", cim1: "1" },
          { nombre: "Combate", ssc: "20", code: "09", cim1: "0" },
          { nombre: "Constructores", ssc: "20", code: "12", cim1: "0" },
          { nombre: "Cuartel General", ssc: "20", code: "98", cim1: "0" },
          { nombre: "Descontaminación", ssc: "20", code: "42", cim1: "1" },
          { nombre: "Detención", ssc: "20", code: "16", cim1: "0" },
          { nombre: "Evacuación Médica", ssc: "20", code: "75", cim1: "0" },
          { nombre: "Franco Tirador", ssc: "20", code: "30", cim1: "1" },
          { nombre: "Humo", ssc: "20", code: "60", cim1: "0" }, 
          { nombre: "Imágenes de Viceo", ssc: "20", code: "70", cim1: "0" },
          { nombre: "Lanzacohetes", ssc: "20", code: "59", cim1: "0" }, 
          { nombre: "Lanzacohetes múltiple", ssc: "20", code: "41", cim1: "0" },
          { nombre: "Mando y Control", ssc: "20", code: "22", cim1: "1" },
          { nombre: "Mantenimiento", ssc: "20", code: "26", cim1: "1" },
          { nombre: "Meteorológico", ssc: "20", code: "32", cim1: "0" },
          { nombre: "Naval", ssc: "20", code: "46", cim1: "0" },
          { nombre: "Nuclear", ssc: "20", code: "41", cim1: "1" },
          { nombre: "Puente", ssc: "20", code: "09", cim1: "1" },
          { nombre: "Química", ssc: "20", code: "38", cim1: "1" },
          { nombre: "Radar", ssc: "20", code: "50", cim1: "0" }, 
          { nombre: "Radiológica", ssc: "20", code: "40", cim1: "1" },         
          { nombre: "Seguridad", ssc: "20", code: "54", cim1: "0" },
          { nombre: "Sensores", ssc: "20", code: "55", cim1: "0" },
          { nombre: "Sistema Aéreo no Tripulado", ssc: "20", code: "00", cim1: "1" },
          { nombre: "Utilidad", ssc: "20", code: "11", cim1: "1" }, 
          { nombre: "Radio", ssc: "20", code: "99", cim1: "0" },
          { nombre: "Teléfono", ssc: "20", code: "12", cim1: "0" },
          { nombre: "Televisión", ssc: "20", code: "13", cim1: "0" },

          { nombre: "Equipo / Dotación", ssc: "20", code: "62", cim1: "1" },
          { nombre: "Escuadra", ssc: "20", code: "61", cim1: "1" }, 
          { nombre: "Pelotón / Destacamento", ssc: "20", code: "60", cim1: "1" },
          { nombre: "Sección", ssc: "20", code: "58", cim1: "1" },
          { nombre: "Compañía/Bateía / Escuadrón",ssc: "20",  code: "57", cim1: "1" },
          { nombre: "Batallón / Regimiento", ssc: "20", code: "63", cim1: "1" },
          { nombre: "Brigada (Ind. / Div.)", ssc: "20", code: "19", cim1: "1" },
          { nombre: "Cuerpo de Ejército", ssc: "20",  code: "96", cim1: "0" },
          { nombre: "Ejército de Operaciones", ssc: "20", code: "95", cim1: "0" },  
          { nombre: "Comando", code: "56", ssc: "20", cim1: "1" },     
          
          { nombre: " ", code: "01", cim1: "1" },
          { nombre: " ", code: "02", cim1: "1" },
          { nombre: " ", code: "03", cim1: "1" },
          { nombre: " ", code: "04", cim1: "1" },
          { nombre: " ", code: "05", cim1: "1" },        
          { nombre: " ", code: "08", cim1: "1" },          
          { nombre: " ", code: "10", cim1: "1" },          
          { nombre: " ", code: "12", cim1: "1" },
          { nombre: " ", code: "13", cim1: "1" },
          { nombre: " ", code: "14", cim1: "1" },
          { nombre: " ", code: "15", cim1: "1" },
          { nombre: " ", code: "16", cim1: "1" },
          { nombre: " ", code: "17", cim1: "1" },
          { nombre: " ", code: "18", cim1: "1" },          
          { nombre: " ", code: "20", cim1: "1" },
          { nombre: " ", code: "21", cim1: "1" },          
          { nombre: " ", code: "23", cim1: "1" },
          { nombre: " ", code: "24", cim1: "1" },
          { nombre: " ", code: "25", cim1: "1" },          
          { nombre: " ", code: "27", cim1: "1" },          
          { nombre: " ", code: "29", cim1: "1" },          
          { nombre: " ", code: "31", cim1: "1" },
          { nombre: " ", code: "32", cim1: "1" },
          { nombre: " ", code: "33", cim1: "1" },
          { nombre: " ", code: "34", cim1: "1" },
          
          { nombre: " ", code: "36", cim1: "1" },         
          { nombre: " ", code: "39", cim1: "1" },
          { nombre: " ", code: "43", cim1: "1" },
          { nombre: " ", code: "44", cim1: "1" },
          { nombre: " ", code: "45", cim1: "1" },
          { nombre: " ", code: "46", cim1: "1" },
          { nombre: " ", code: "47", cim1: "1" },
          { nombre: " ", code: "48", cim1: "1" },
          { nombre: " ", code: "49", cim1: "1" },
          { nombre: " ", code: "50", cim1: "1" },
          { nombre: " ", code: "51", cim1: "1" },
          { nombre: " ", code: "52", cim1: "1" },
          { nombre: " ", code: "53", cim1: "1" },
          { nombre: " ", code: "54", cim1: "1" },
          { nombre: " ", code: "55", cim1: "1" },
          { nombre: " ", code: "59", cim1: "1" },      
          { nombre: " ", code: "64", cim1: "1" },
          { nombre: " ", code: "65", cim1: "1" },
          { nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2: [
          { nombre: "", ssc: "20", code: "00", cim2: "0"},
          { nombre: "Producción", ssc: "20", code: "11", cim2: "0" },
          { nombre: "Reparación", ssc: "20", code: "12", cim2: "0" },
          { nombre: "Investigación", ssc: "20", code: "13", cim2: "0" },
          { nombre: "Servicio", ssc: "20", code: "14", cim2: "0" },
          { nombre: "Almacenamiento", ssc: "20", code: "15", cim2: "0" },
          { nombre: "Prueba", ssc: "20", code: "16", cim2: "0" },
          { nombre: "Abastecimiento", ssc: "20", code: "62", cim2: "0" },
          { nombre: "Aerotransportado", ssc: "20", code: "01", cim2: "0" },
          { nombre: "Asalto Aéreo", ssc: "20", code: "59", cim2: "0" },

          { nombre: "Alcance Corto", ssc: "20", code: "16", cim2: "1" },
          { nombre: "Alcance Medio", ssc: "20", code: "15", cim2: "1" },
          { nombre: "Alcance Largo", ssc: "20", code: "14", cim2: "1" },

          { nombre: "Altura Baja", ssc: "20", code: "23", cim2: "0" },
          { nombre: "Altura Mediana", ssc: "20", code: "25" },
          { nombre: "Altura Alta", ssc: "20", code: "16", cim2: "0" },

          { nombre: "Ártico (Trineo)", ssc: "20", code: "02", cim2: "0" },
          { nombre: "Anfibio", ssc: "20", code: "60", cim2: "0" }, 
          { nombre: "Autoimpulsado / De Orugas", ssc: "20", code: "04", cim2: "1" }, 
          { nombre: "De Reudas", code: "06", ssc: "20", cim2: "1" },        
          { nombre: "Descontaminación", ssc: "20", code: "09", cim2: "0" },
          { nombre: "Equipado con Bicicleta", ssc: "20", code: "01", cim2: "1" },
          { nombre: "Esquí", ssc: "20", code: "03", cim2: "1" },

          { nombre: "Liviano", ssc: "20", code: "19", cim2: "0" },
          { nombre: "Mediano", ssc: "20", code: "24", cim2: "0" },
          { nombre: "Pesado", ssc: "20", code: "15", cim2: "0" },

          { nombre: "Ferrocarril", ssc: "20", code: "02", cim2: "1" },
          { nombre: "Fluvial o Flotante", ssc: "20", code: "40", cim2: "0" },
          { nombre: "Montaña", ssc: "20", code: "27", cim2: "0" },
          { nombre: "Recuperación", ssc: "20", code: "38", cim2: "0" },          
          { nombre: "Remolcado", ssc: "20", code: "47", cim2: "0" },         

          { nombre: " ", code: "00", cim2: "1" },
          { nombre: " ", code: "02", cim2: "1" },
          { nombre: " ", code: "03", cim2: "1" },
          { nombre: " ", code: "04", cim2: "1" },
          { nombre: " ", code: "05", cim2: "1" },
          { nombre: " ", code: "07", cim2: "1" },
          { nombre: " ", code: "08", cim2: "1" },
          { nombre: " ", code: "09", cim2: "1" },
          { nombre: " ", code: "10", cim2: "1" },
          { nombre: " ", code: "11", cim2: "1" },
          { nombre: " ", code: "12", cim2: "1" },
          { nombre: " ", code: "13", cim2: "1" },  
          { nombre: " ", code: "17", cim2: "1" },
          { nombre: " ", code: "18", cim2: "1" },
          { nombre: " ", code: "19", cim2: "1" },          
          { nombre: " ", code: "21", cim2: "1" },
          { nombre: " ", code: "22", cim2: "1" },
          { nombre: " ", code: "23", cim2: "1" },
          { nombre: " ", code: "24", cim2: "1" },          
          { nombre: " ", code: "25", cim2: "1" }        
        ],
      },
      actividades: {
        iconos: [
          { nombre: "", ssc: "40", code: "000000" },
          { nombre: "Gubernamental", ssc: "40", code: "400000"},
          { nombre: "No Gubernamental", ssc: "40", code: "410000"},
          { nombre: "Arresto", ssc: "40", code: "110101"},
          { nombre: "Intento de Actividad Criminal", ssc: "40", code: "420000"},
          { nombre: "Intento de Actividad Criminal a Varios", ssc: "40", code: "430000"},
          { nombre: "Manifestaciones", ssc: "40", code: "120100"},
          { nombre: "Act. Relacionada con Drogas", ssc: "40", code: "110500"},
          { nombre: "Explosión", ssc: "40", code: "110600"},
          { nombre: "Extorsión", ssc: "40", code: "110106"},
          { nombre: "Grafiti", ssc: "40", code: "110107"},
          { nombre: "Víctima de Actividades Delictivas", ssc: "40", code: "110108"},
          { nombre: "Víctimas de Actividades Delictivas", ssc: "40", code: "440000"},
          { nombre: "Envenenamiento", ssc: "40", code: "110109"},
          { nombre: "Disturbio", ssc: "40", code: "110110"},
        
        ],
        mod1: [
          { nombre: "", ssc: "40", code: "00", cim1: "0"},
          { nombre: "Homicidio", ssc: "40", code: "06", cim1: "0" },
          { nombre: "Piratería", ssc: "40", code: "10", cim1: "0" },
          { nombre: "Armas", ssc: "40", code: "37", cim1: "1" },
          { nombre: "Ataque", ssc: "40", code: "06", cim1: "1" },
          { nombre: "Biológica", ssc: "40", code: "04", cim1: "0" },
          { nombre: "Blindada", ssc: "40", code: "07", cim1: "1" },
          { nombre: "Búsqueda y Rescate", ssc: "40", code: "28", cim1: "1" },
          { nombre: "Combate", ssc: "40", code: "09", cim1: "0" },
          { nombre: "Constructores", ssc: "40", code: "12", cim1: "0" },
          { nombre: "Cuartel General", ssc: "40", code: "98", cim1: "0" },
          { nombre: "Descontaminación", ssc: "40", code: "42", cim1: "1" },
          { nombre: "Detención", ssc: "40", code: "16", cim1: "0" },
          { nombre: "Evacuación Médica", ssc: "40", code: "75", cim1: "0" },
          { nombre: "Franco Tirador", ssc: "40", code: "30", cim1: "1" },
          { nombre: "Humo", ssc: "40", code: "60", cim1: "0" }, 
          { nombre: "Imágenes de Viceo", ssc: "40", code: "70", cim1: "0" },
          { nombre: "Lanzacohetes", ssc: "40", code: "59", cim1: "0" }, 
          { nombre: "Lanzacohetes múltiple", ssc: "40", code: "41", cim1: "0" },
          { nombre: "Mando y Control", ssc: "40", code: "22", cim1: "1" },
          { nombre: "Mantenimiento", ssc: "40", code: "26", cim1: "1" },
          { nombre: "Meteorológico", ssc: "40", code: "32", cim1: "0" },
          { nombre: "Naval", ssc: "40", code: "46", cim1: "0" },
          { nombre: "Nuclear", ssc: "40", code: "41", cim1: "1" },
          { nombre: "Puente", ssc: "40", code: "09", cim1: "1" },
          { nombre: "Química", ssc: "40", code: "38", cim1: "1" },
          { nombre: "Radar", ssc: "40", code: "50", cim1: "0" }, 
          { nombre: "Radiológica", ssc: "40", code: "40", cim1: "1" },         
          { nombre: "Seguridad", ssc: "40", code: "54", cim1: "0" },
          { nombre: "Sensores", ssc: "40", code: "55", cim1: "0" },
          { nombre: "Sistema Aéreo no Tripulado",ssc: "40", code: "00", cim1: "1" },
          { nombre: "Utilidad", ssc: "40", code: "11", cim1: "1" }, 

          { nombre: "Equipo / Dotación", ssc: "40", code: "62", cim1: "1" },
          { nombre: "Escuadra", ssc: "40", code: "61", cim1: "1" }, 
          { nombre: "Pelotón / Destacamento", ssc: "40", code: "60", cim1: "1" },
          { nombre: "Sección", ssc: "40", code: "58", cim1: "1" },
          { nombre: "Compañía/Bateía / Escuadrón", ssc: "40", code: "57", cim1: "1" },
          { nombre: "Batallón / Regimiento", ssc: "40", code: "63", cim1: "1" },
          { nombre: "Brigada (Ind. / Div.)", ssc: "40", code: "19", cim1: "1" },
          { nombre: "Cuerpo de Ejército",ssc: "40",  code: "96", cim1: "0" },
          { nombre: "Ejército de Operaciones", ssc: "40", code: "95", cim1: "0" },  
          { nombre: "Comando", ssc: "40", code: "56", cim1: "1" },     
          
          { nombre: " ", code: "01", cim1: "1" },
          { nombre: " ", code: "02", cim1: "1" },
          { nombre: " ", code: "03", cim1: "1" },
          { nombre: " ", code: "04", cim1: "1" },
          { nombre: " ", code: "05", cim1: "1" },        
          { nombre: " ", code: "08", cim1: "1" },          
          { nombre: " ", code: "10", cim1: "1" },          
          { nombre: " ", code: "12", cim1: "1" },
          { nombre: " ", code: "13", cim1: "1" },
          { nombre: "Secuestro", code: "14", cim1: "1" },
          { nombre: " ", code: "15", cim1: "1" },
          { nombre: " ", code: "16", cim1: "1" },
          { nombre: " ", code: "17", cim1: "1" },
          { nombre: " ", code: "18", cim1: "1" },          
          { nombre: " ", code: "20", cim1: "1" },
          { nombre: " ", code: "21", cim1: "1" },          
          { nombre: " ", code: "23", cim1: "1" },
          { nombre: " ", code: "24", cim1: "1" },
          { nombre: " ", code: "25", cim1: "1" },          
          { nombre: " ", code: "27", cim1: "1" },          
          { nombre: " ", code: "29", cim1: "1" },          
          { nombre: " ", code: "31", cim1: "1" },
          { nombre: " ", code: "32", cim1: "1" },
          { nombre: " ", code: "33", cim1: "1" },
          { nombre: " ", code: "34", cim1: "1" },
          { nombre: " ", code: "35", cim1: "1" },
          { nombre: " ", code: "36", cim1: "1" },         
          { nombre: " ", code: "39", cim1: "1" },
          { nombre: " ", code: "43", cim1: "1" },
          { nombre: " ", code: "44", cim1: "1" },
          { nombre: " ", code: "45", cim1: "1" },
          { nombre: "Asesinato", code: "46", cim1: "1" },
          { nombre: "Ejecución Injusta", code: "47", cim1: "1" },
          { nombre: "Secuestro de Persona", code: "48", cim1: "1" },
          { nombre: "Piratería", code: "49", cim1: "1" },
          { nombre: "Violación", code: "50", cim1: "1" },
          { nombre: " ", code: "51", cim1: "1" },
          { nombre: " ", code: "52", cim1: "1" },
          { nombre: " ", code: "53", cim1: "1" },
          { nombre: " ", code: "54", cim1: "1" },
          { nombre: " ", code: "55", cim1: "1" },
          { nombre: " ", code: "59", cim1: "1" },      
          { nombre: " ", code: "64", cim1: "1" },
          { nombre: " ", code: "65", cim1: "1" },
          { nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2: [
          { nombre: "", ssc: "40", code: "00", cim2: "0"},
          { nombre: "Abastecimiento", ssc: "40", code: "62", cim2: "0" },
          { nombre: "Aerotransportado", ssc: "40", code: "01", cim2: "0" },
          { nombre: "Asalto Aéreo", ssc: "40", code: "59", cim2: "0" },

          { nombre: "Alcance Corto", ssc: "40", code: "16", cim2: "1" },
          { nombre: "Alcance Medio", ssc: "40", code: "15", cim2: "1" },
          { nombre: "Alcance Largo", ssc: "40", code: "14", cim2: "1" },

          { nombre: "Altura Baja", ssc: "40", code: "23", cim2: "0" },
          { nombre: "Altura Mediana", ssc: "40", code: "25" },
          { nombre: "Altura Alta", ssc: "40", code: "16", cim2: "0" },

          { nombre: "Ártico (Trineo)", ssc: "40", code: "02", cim2: "0" },
          { nombre: "Anfibio", ssc: "40", code: "60", cim2: "0" }, 
          { nombre: "Autoimpulsado / De Orugas", ssc: "40", code: "04", cim2: "1" }, 
          { nombre: "De Reudas", ssc: "40", code: "06", cim2: "1" },        
          { nombre: "Descontaminación", ssc: "40", code: "09", cim2: "0" },
          { nombre: "Equipado con Bicicleta", ssc: "40", code: "01", cim2: "1" },
          { nombre: "Esquí", ssc: "40", code: "03", cim2: "1" },

          { nombre: "Liviano", ssc: "40", code: "19", cim2: "0" },
          { nombre: "Mediano", ssc: "40", code: "24", cim2: "0" },
          { nombre: "Pesado", ssc: "40", code: "15", cim2: "0" },

          { nombre: "Ferrocarril", ssc: "40", code: "02", cim2: "1" },
          { nombre: "Fluvial o Flotante", ssc: "40", code: "40", cim2: "0" },
          { nombre: "Montaña", ssc: "40", code: "27", cim2: "0" },
          { nombre: "Recuperación", ssc: "40",  code: "38", cim2: "0" },          
          { nombre: "Remolcado", ssc: "40", code: "47", cim2: "0" },         

          { nombre: " ", code: "00", cim2: "1" },
          { nombre: " ", code: "02", cim2: "1" },
          { nombre: " ", code: "03", cim2: "1" },
          { nombre: " ", code: "04", cim2: "1" },
          { nombre: " ", code: "05", cim2: "1" },
          { nombre: " ", code: "07", cim2: "1" },
          { nombre: " ", code: "08", cim2: "1" },
          { nombre: " ", code: "09", cim2: "1" },
          { nombre: " ", code: "10", cim2: "1" },
          { nombre: " ", code: "11", cim2: "1" },
          { nombre: " ", code: "12", cim2: "1" },
          { nombre: " ", code: "13", cim2: "1" },  
          { nombre: " ", code: "17", cim2: "1" },
          { nombre: " ", code: "18", cim2: "1" },
          { nombre: " ", code: "19", cim2: "1" },          
          { nombre: " ", code: "21", cim2: "1" },
          { nombre: " ", code: "22", cim2: "1" },
          { nombre: " ", code: "23", cim2: "1" },
          { nombre: " ", code: "24", cim2: "1" },          
          { nombre: " ", code: "25", cim2: "1" }        
        ],
      }


    },

    fa: {
      tierra: {
        iconos: [
          { nombre: "", code: "000000" },
          { nombre: "Aviación (Ala Rotativa)", code: "120600" },
          { nombre: "Reconocimiento Aéreo", code: "120601" },
          { nombre: "Aviación Compuesta", code: "120700" },
          { nombre: "Control", code: "151200" },
          { nombre: "Lanzador", code: "290000" },
          { nombre: "Recuperación", code: "300000" },
          { nombre: "Aéreo (Ala Fija)", code: "120800" }
        ],
        mod1 : [
          { ssc:"10", nombre: "", code: "00", cim1: "0"},
          { ssc:"10", nombre: "Adquisición de blancos", code: "67", cim1: "0" },
          { ssc:"10", nombre: "Armas", code: "37", cim1: "1" },
          { ssc:"10", nombre: "Ataque", code: "06", cim1: "1" },
          { ssc:"10", nombre: "Biológica", code: "04", cim1: "0" },
          { ssc:"10", nombre: "Blindada", code: "07", cim1: "1" },
          { ssc:"10", nombre: "Búsqueda y Rescate", code: "28", cim1: "1" },
          { ssc:"10", nombre: "Combate", code: "09", cim1: "0" },
          { ssc:"10", nombre: "Constructores", code: "12", cim1: "0" },
          { ssc:"10", nombre: "Cuartel General", code: "98", cim1: "0" },
          { ssc:"10", nombre: "Descontaminación", code: "42", cim1: "1" },
          { ssc:"10", nombre: "Detención", code: "16", cim1: "0" },
          { ssc:"10", nombre: "Evacuación Médica", code: "75", cim1: "0" },
          { ssc:"10", nombre: "Franco Tirador", code: "30", cim1: "1" },
          { ssc:"10", nombre: "Humo", code: "60", cim1: "0" }, 
          { ssc:"10", nombre: "Imágenes de Viceo", code: "70", cim1: "0" },
          { ssc:"10", nombre: "Lanzacohetes", code: "59", cim1: "0" }, 
          { ssc:"10", nombre: "Lanzacohetes múltiple", code: "41", cim1: "0" },
          { ssc:"10", nombre: "Mando y Control", code: "22", cim1: "1" },
          { ssc:"10", nombre: "Mantenimiento", code: "26", cim1: "1" },
          { ssc:"10", nombre: "Meteorológico", code: "32", cim1: "0" },
          { ssc:"10", nombre: "Naval", code: "46", cim1: "0" },
          { ssc:"10", nombre: "Nuclear", code: "41", cim1: "1" },
          { ssc:"10", nombre: "Puente", code: "09", cim1: "1" },
          { ssc:"10", nombre: "Química", code: "38", cim1: "1" },
          { ssc:"10", nombre: "Radar", code: "50", cim1: "0" }, 
          { ssc:"10", nombre: "Reconocimiento o Radiológica", code: "40", cim1: "1" },         
          { ssc:"10", nombre: "Seguridad", code: "54", cim1: "0" },
          { ssc:"10", nombre: "Sensores", code: "55", cim1: "0" },
          { ssc:"10", nombre: "Sistema Aéreo no Tripulado", code: "00", cim1: "1" },
          { ssc:"10", nombre: "Utilidad", code: "11", cim1: "1" }, 
          { ssc:"10", nombre: "Equipo / Dotación", code: "62", cim1: "1" },
          { ssc:"10", nombre: "Escuadra", code: "61", cim1: "1" }, 
          { ssc:"10", nombre: "Pelotón / Destacamento", code: "60", cim1: "1" },
          { ssc:"10", nombre: "Sección", code: "58", cim1: "1" },
          { ssc:"10", nombre: "Compañía/Bateía / Escuadrón", code: "57", cim1: "1" },
          { ssc:"10", nombre: "Batallón / Regimiento", code: "63", cim1: "1" },
          { ssc:"10", nombre: "Brigada (Ind. / Div.)", code: "19", cim1: "1" },
          { ssc:"10", nombre: "Cuerpo de Ejército", code: "96", cim1: "0" },
          { ssc:"10", nombre: "Ejército de Operaciones", code: "95", cim1: "0" },  
          { ssc:"10", nombre: "Comando", code: "56", cim1: "1" },       
          { ssc:"10", nombre: "Asalto Áereo", code: "01", cim1: "0" },
          { ssc:"10", nombre: " ", code: "02", cim1: "1" },
          { ssc:"10", nombre: " ", code: "03", cim1: "1" },
          { ssc:"10", nombre: " ", code: "04", cim1: "1" },
          { ssc:"10", nombre: " ", code: "05", cim1: "1" },        
          { ssc:"10", nombre: " ", code: "08", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "10", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "12", cim1: "1" },
          { ssc:"10", nombre: " ", code: "13", cim1: "1" },
          { ssc:"10", nombre: " ", code: "14", cim1: "1" },
          { ssc:"10", nombre: " ", code: "15", cim1: "1" },
          { ssc:"10", nombre: " ", code: "16", cim1: "1" },
          { ssc:"10", nombre: " ", code: "17", cim1: "1" },
          { ssc:"10", nombre: " ", code: "18", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "20", cim1: "1" },
          { ssc:"10", nombre: " ", code: "21", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "23", cim1: "1" },
          { ssc:"10", nombre: " ", code: "24", cim1: "1" },
          { ssc:"10", nombre: " ", code: "25", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "27", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "29", cim1: "1" },          
          { ssc:"10", nombre: " ", code: "31", cim1: "1" },
          { ssc:"10", nombre: " ", code: "32", cim1: "1" },
          { ssc:"10", nombre: " ", code: "33", cim1: "1" },
          { ssc:"10", nombre: " ", code: "34", cim1: "1" },
          { ssc:"10", nombre: " ", code: "35", cim1: "1" },
          { ssc:"10", nombre: " ", code: "36", cim1: "1" },         
          { ssc:"10", nombre: " ", code: "39", cim1: "1" },
          { ssc:"10", nombre: " ", code: "43", cim1: "1" },
          { ssc:"10", nombre: " ", code: "44", cim1: "1" },
          { ssc:"10", nombre: " ", code: "45", cim1: "1" },
          { ssc:"10", nombre: " ", code: "46", cim1: "1" },
          { ssc:"10", nombre: " ", code: "47", cim1: "1" },
          { ssc:"10", nombre: " ", code: "48", cim1: "1" },
          { ssc:"10", nombre: " ", code: "49", cim1: "1" },
          { ssc:"10", nombre: " ", code: "50", cim1: "1" },
          { ssc:"10", nombre: " ", code: "51", cim1: "1" },
          { ssc:"10", nombre: " ", code: "52", cim1: "1" },
          { ssc:"10", nombre: " ", code: "53", cim1: "1" },
          { ssc:"10", nombre: " ", code: "54", cim1: "1" },
          { ssc:"10", nombre: " ", code: "55", cim1: "1" },
          { ssc:"10", nombre: " ", code: "59", cim1: "1" },      
          { ssc:"10", nombre: " ", code: "64", cim1: "1" },
          { ssc:"10", nombre: " ", code: "65", cim1: "1" },
          { ssc:"10", nombre: " ", code: "66", cim1: "1" }   
        ],
        mod2 : [
          { ssc:"10", nombre: "", code: "00", cim2: "0"},
          { ssc:"10", nombre: "Abastecimiento", code: "62", cim2: "0" },
          { ssc:"10", nombre: "Aerotransportado", code: "01", cim2: "0" },
          { ssc:"10", nombre: "Asalto Aéreo", code: "59", cim2: "0" }, 
          { ssc:"10", nombre: "Alcance Corto", code: "16", cim2: "1" },
          { ssc:"10", nombre: "Alcance Medio", code: "15", cim2: "1" },
          { ssc:"10", nombre: "Alcance Largo", code: "14", cim2: "1" }, 
          { ssc:"10", nombre: "Altura Baja", code: "23", cim2: "0" },
          { ssc:"10", nombre: "Altura Mediana", code: "25" },
          { ssc:"10", nombre: "Altura Alta", code: "16", cim2: "0" }, 
          { ssc:"10", nombre: "Ártico (Trineo)", code: "02", cim2: "0" },
          { ssc:"10", nombre: "Anfibio", code: "60", cim2: "0" }, 
          { ssc:"10", nombre: "Autoimpulsado / De Orugas", code: "04", cim2: "1" }, 
          { ssc:"10", nombre: "De Reudas", code: "06", cim2: "1" },        
          { ssc:"10", nombre: "Descontaminación", code: "09", cim2: "0" },
          { ssc:"10", nombre: "Equipado con Bicicleta", code: "01", cim2: "1" },
          { ssc:"10", nombre: "Esquí", code: "03", cim2: "1" }, 
          { ssc:"10", nombre: "Liviano", code: "19", cim2: "0" },
          { ssc:"10", nombre: "Mediano", code: "24", cim2: "0" },
          { ssc:"10", nombre: "Pesado", code: "15", cim2: "0" },
          { ssc:"10", nombre: "Ferrocarril", code: "02", cim2: "1" },
          { ssc:"10", nombre: "Fluvial o Flotante", code: "40", cim2: "0" },
          { ssc:"10", nombre: "Montaña", code: "27", cim2: "0" },
          { ssc:"10", nombre: "Recuperación", code: "38", cim2: "0" },          
          { ssc:"10", nombre: "Remolcado", code: "47", cim2: "0" }, 
          { ssc:"10", nombre: " ", code: "00", cim2: "1" },
          { ssc:"10", nombre: " ", code: "02", cim2: "1" },
          { ssc:"10", nombre: " ", code: "03", cim2: "1" },
          { ssc:"10", nombre: " ", code: "04", cim2: "1" },
          { ssc:"10", nombre: " ", code: "05", cim2: "1" },
          { ssc:"10", nombre: " ", code: "07", cim2: "1" },
          { ssc:"10", nombre: " ", code: "08", cim2: "1" },
          { ssc:"10", nombre: " ", code: "09", cim2: "1" },
          { ssc:"10", nombre: " ", code: "10", cim2: "1" },
          { ssc:"10", nombre: " ", code: "11", cim2: "1" },
          { ssc:"10", nombre: " ", code: "12", cim2: "1" },
          { ssc:"10", nombre: " ", code: "13", cim2: "1" },  
          { ssc:"10", nombre: " ", code: "17", cim2: "1" },
          { ssc:"10", nombre: " ", code: "18", cim2: "1" },
          { ssc:"10", nombre: " ", code: "19", cim2: "1" },          
          { ssc:"10", nombre: " ", code: "21", cim2: "1" },
          { ssc:"10", nombre: " ", code: "22", cim2: "1" },
          { ssc:"10", nombre: " ", code: "23", cim2: "1" },
          { ssc:"10", nombre: " ", code: "24", cim2: "1" },          
          { ssc:"10", nombre: " ", code: "25", cim2: "1" }    
        ]
      },
      aire: {
        iconos: [
          { nombre: "", code: "000000" },
          { nombre: "Aviación (Ala Rotativa)", code: "120600" },
          { nombre: "Reconocimiento Aéreo", code: "120601" },
          { nombre: "Aviación Compuesta", code: "120700" },
          { nombre: "Aéreo (Ala Fija)", code: "120800" }
        ]
      }     
    },

    gn: {
      normal: {
        iconos: [
          { ssc:"10", nombre: "", code: "000000" },
          { ssc:"10", nombre: "Guardia Nacional", code: "220000"}
        ]
      },
      instalacion: {
        iconos: [
          { ssc:"10", nombre: "", code: "000000" },
          
        ]
      }     
    },

    armada: {
      tierra: {
        iconos: [
          { nombre: "", code: "000000"},
          { nombre: "Naval", code: "170100"}
        ]
      },
      agua: {
        iconos: [
          { nombre: "", code: "000000"}          
        ]
      }     
    },


    otros: {
      civil: {
        iconos: [
          { nombre: "", code: "000000", ssc: "11", codt: "11"},
          { nombre: "Individuo no especificado", code: "110300", ssc: "11", codt: "11"},
          { nombre: "Organización o Grupo", code: "110400", ssc: "11", codt: "11"},
          { nombre: "Víctima de Asesinato", code: "110500", ssc: "11", codt: "11"},
          { nombre: "Víctimas de Asesinato", code: "110600", ssc: "11", codt: "11"},
          { nombre: "Victima de Atentado", code: "110700", ssc: "11", codt: "11"},
          { nombre: "Victimas de Atentado", code: "200000", ssc: "11", codt: "11"}           

        ],
        mod1: [
          { ssc: "11", codt: "11", code: "00", nombre: ""},
          { ssc: "11", cim1: "1", code: "46", nombre: "Asesinato"},
          { ssc: "11", codt: "11", code: "10",  nombre: "Combatientes Extranjeros"},
          { ssc: "11", codt: "11", code: "16",  nombre: "Dispuestos"},
          { ssc: "11", cim1: "1", code: "47",  nombre: "Ejecutado"},
          { ssc: "11", codt: "11", nombre: "Líder", code: "13"},
          { ssc: "11", code: "03", codt: "11", nombre: "Muerte por Homicidio"},
          { ssc: "11", codt: "11", nombre: "Pandilla", code: "11"},
          { ssc: "11", code: "09", codt: "11", nombre: "Pers. Despls., Refugs. y Evacs."},
          { ssc: "11", cim1: "1", nombre: "Piratería", code: "49"}, 
          { ssc: "11", cim1: "1", nombre: "Raptado (a)", code: "48"},                 
          { ssc: "11", codt: "11", nombre: "Religioso", code: "17"},
          { ssc: "11", code: "14", cim1: "1", nombre: "Secuestrado (a)"},
          { ssc: "11", code: "19", codt: "11", nombre: "Terrorista"},
          { ssc: "11", code: "50", cim1: "1" , nombre: "Violación"}     

        ],
        mod2: [
          { nombre: "", code: "00", ssc: "11", codt: "11" },
          { nombre: "Lider", code: "01", ssc: "11", codt: "11" },
          { nombre: "Dispuestos", ssc: "11", code: "03", codt: "11"},
          { nombre: "Obligados", ssc: "11", code: "04", codt: "11"}
          
        ]
      },
      otros: {
        iconos: [
          { nombre: "", code: "000000" },
          { nombre: "Pirata", code: "280000", codt: "10"}
        ],
        mod1: [
          { nombre: "", code: "000000" },
          { nombre: "Biológico", code: "04" },
          { nombre: "Humo", code: "60" }
          
        ],
        mod2: [
          { nombre: "", code: "000000" },
          { nombre: "Liviano", code: "19" }
          
        ]
      }     
    }    
  }
};

// ============================================================
// ESTADO
// ============================================================

class AppState {
  constructor() {
    this.sidc = CONFIG.BASE_SIDC;

    this.fuerzaActual = null;
    this.tipoActual = null;
    this.afiliacionActual = "3"; // default amigo
    this.iconoActual = "000000";
    this.mod1Actual = "00";
    this.mod2Actual = "00";
    this.actActual = "00";
    this.instActual = "00";

    this.amplifiers = {
      w: "", v: "", z: "",
      f: "", g: "", m: "",
      h1: "", h2: "", aa: "",
      s: ""
    };

    this.formatOptions = {
      fontSize: CONFIG.DEFAULT_FONT_SIZE,
      bold: true
    };

    this.hq = false;

  }

  reset() {
    this.sidc = CONFIG.BASE_SIDC;

    this.fuerzaActual = null;
    this.tipoActual = null;

    this.iconoActual = "000000";
    this.mod1Actual = "00";
    this.mod2Actual = "00";

    this.amplifiers = {
      w: "", v: "", z: "",
      f: "", g: "", m: "",
      h1: "", h2: "", aa: "",
      s: ""
    };

    this.formatOptions = {
      fontSize: CONFIG.DEFAULT_FONT_SIZE,
      bold: true
    };

    this.hq = false;

    this.triggerRender();
  }


  getCleanPreviewBase() {
    const base = CONFIG.BASE_SIDC.split("");

    for (let i = CONFIG.ICON_START; i <= CONFIG.MOD2_START + 1; i++) {
      base[i] = "0";
    }

    return base;
  }



  getSidcArray() {
    return this.sidc.split("");
  }

  setSidcDigit(pos, digit) {
    const arr = this.getSidcArray();
    arr[pos] = digit;
    this.sidc = arr.join("");
    this.triggerRender();
  }

  setSidcTwo(pos, digits) {
    if (!digits || digits.length !== 2) return;
    const arr = this.getSidcArray();
    arr[pos] = digits[0];
    arr[pos + 1] = digits[1];
    this.sidc = arr.join("");
    this.triggerRender();
  }

  setIcon(code) {
    if (!code || code.length !== 6) return;
    const arr = this.getSidcArray();
    for (let i = 0; i < 6; i++) {
      arr[CONFIG.ICON_START + i] = code[i];
    }
    this.sidc = arr.join("");
    this.triggerRender();
  }

  setAmplifier(key, value) {
    this.amplifiers[key] = value || "";
    this.triggerRender();
  }

  setFormatOptions(options) {
    Object.assign(this.formatOptions, options);
    this.triggerRender();
  }

  setHq(value) {
    this.hq = value;
    this.setSidcDigit(CONFIG.HQ_POSITION, value ? "2" : "0");
  }

  triggerRender() {
    clearTimeout(this.renderDebounceTimer);
    this.renderDebounceTimer = setTimeout(render, CONFIG.RENDER_DEBOUNCE_MS);
  }

  getBaseForPreview() {
    const base = CONFIG.BASE_SIDC.split("");
    base[3] = this.sidc[3]; 
    return base;
  }
}

const appState = new AppState();
// ============================================================
// FUNCIONES AUXILIARES
// ============================================================


function render() {
    const container = document.getElementById("resultado");
    if (!container) return;

    const sidc = appState.sidc;

    // ✅ CORRECCIÓN: Validar que el SIDC sea válido
    if (!/^[0-9]{30}$/.test(sidc)) {
        container.innerHTML = "";
        return;
    }

    const amps = appState.amplifiers;

    const symbolOptions = {
        size: 180,
        frame: true,
        fontFamily: "Arial",
        infoSize: appState.formatOptions.fontSize
    };

    // Amplificadores
    if (amps.w) symbolOptions.dtg = amps.w;
    if (amps.v) symbolOptions.type = amps.v;
    if (amps.z) symbolOptions.speed = amps.z;
    if (amps.f) symbolOptions.reinforcedReduced = amps.f;
    if (amps.g) symbolOptions.staffComments = amps.g;
    if (amps.m) symbolOptions.combatEffectiveness = amps.m;
    if (amps.aa) symbolOptions.specialHeadquarters = amps.aa;
    if (amps.s && appState.hq) symbolOptions.headquartersElement = amps.s;
    if (amps.h1) symbolOptions.additionalInformation = amps.h1;
    if (amps.h2) symbolOptions.higherFormation = amps.h2;

    // Generar símbolo
    const symbol = new ms.Symbol(sidc, symbolOptions);
    container.innerHTML = symbol.asSVG();

    // Post-procesado de texto (tu código existente)
    const textos = container.querySelectorAll("text");
    const fontSize = appState.formatOptions.fontSize;
    // Offsets personalizados
    const offsets = {
        w: -10,
        z: -5,
        f: -30,
        g: -27,
        h1: -5,
        h2: -15
    };

    textos.forEach(t => {
        const yOriginal = parseFloat(t.getAttribute("y") || 0);
        const contenido = t.textContent;

        if (contenido == null || contenido === "") return;

        const esAmplificador =
            (amps.g && contenido === amps.g) ||
            (amps.f && contenido === amps.f) ||
            (amps.m && contenido === amps.m) ||
            (amps.w && contenido === amps.w) ||
            (amps.v && contenido === amps.v) ||
            (amps.z && contenido === amps.z) ||
            (amps.h1 && contenido.includes(amps.h1)) ||
            (amps.h2 && contenido.includes(amps.h2));

        if (!esAmplificador) return;

        let offset = 0;

        if (contenido === amps.g && amps.g !== "") {
            offset = offsets.g;
        } else if (contenido === amps.f && amps.f !== "") {
            offset = offsets.f;
        } else if (contenido === amps.h1 && amps.h1 !== "") {
            offset = amps.h2 ? (offsets.h1 || 0) - 10 : offsets.h1 || 0;
        } else if (contenido === amps.h2 && amps.h2 !== "") {
            offset = offsets.h2 || 0;
        }

        if (offset !== 0) {
            t.setAttribute("y", yOriginal + offset);
        }

        t.setAttribute("xml:space", "preserve");
        t.textContent = contenido.replace(/ /g, "\u00A0");
        t.setAttribute("font-size", fontSize);
        t.setAttribute("font-weight", "bold");
        t.style.fontWeight = "900";
        t.setAttribute("font-family", "Arial");
        t.setAttribute("fill", "black");

        const haloEnabled = document.getElementById("text-bg-toggle")?.checked;
        if (haloEnabled) {
            t.setAttribute("stroke", "white");
            t.setAttribute("stroke-width", "4");
            t.setAttribute("paint-order", "stroke");
            t.setAttribute("stroke-linejoin", "round");
        } else {
            t.removeAttribute("stroke");
            t.removeAttribute("stroke-width");
            t.removeAttribute("paint-order");
            t.removeAttribute("stroke-linejoin");
        }
    });
}

// ============================================================
// FUNCIÓN DE COMUNICACIÓN CON MAPSTORE2 (NUEVA)
// ============================================================

// ============================================================
// INICIALIZACIÓN PRINCIPAL (MODIFICADA)
// ============================================================

// ============================================================
// SELECTORES CUSTOM (UI)
// ============================================================

class CustomSelect {
  constructor(selectId, options, type, placeholder = "Seleccione...") {
    this.selectId = selectId;
    this.options = options;
    this.type = type;
    this.placeholder = placeholder;

    this.element = document.getElementById(selectId);
    if (!this.element) return;

    this.selectedDiv = this.element.querySelector(".ms-selected");
    this.optionsDiv = this.element.querySelector(".ms-options");
    this.overlay = this.element.querySelector(".ms-overlay");

    this.selectedValue = null; 

    this.init();
  }

  // ============================================================
  // INIT (solo una vez)
  // ============================================================
  init() {
    if (!this.selectedDiv || !this.optionsDiv) return;

    this.renderOptions();
    this.resetUI();
    this.attachEvents();
  }

  // ============================================================
  // NUEVO: actualizar opciones
  // ============================================================
  updateOptions(newOptions) {
    this.options = newOptions || [];
    this.selectedValue = null; 

    this.renderOptions();
    this.resetUI();
  }

  // ============================================================
  renderOptions() {
    this.optionsDiv.innerHTML = "";

    this.options.forEach((option, index) => {

      if (option.children) {

        const groupDiv = document.createElement("div");
        groupDiv.className = "ms-group";

        const header = document.createElement("div");
        header.className = "ms-group-header";
        header.textContent = option.nombre;

        const childrenContainer = document.createElement("div");
        childrenContainer.className = "ms-group-children";
        childrenContainer.style.display = "none";

        header.addEventListener("click", (e) => {
          e.stopPropagation(); 

          const isOpen = childrenContainer.style.display === "block";
          childrenContainer.style.display = isOpen ? "none" : "block";
        });

        option.children.forEach((child, i) => {
          const childDiv = this.createOptionElement(child, i);
          childrenContainer.appendChild(childDiv);
        });

        groupDiv.appendChild(header);
        groupDiv.appendChild(childrenContainer);

        this.optionsDiv.appendChild(groupDiv);

      } else {
        const optionDiv = this.createOptionElement(option, index);
        this.optionsDiv.appendChild(optionDiv);
      }
    });
  }

  // ============================================================
  resetUI() {
    this.selectedDiv.innerHTML =
      this.placeholder + '<span class="ms-arrow"></span>';

    this.selectedDiv.classList.add("placeholder");
    this.element.classList.remove("open");
  }

  // ============================================================
  createOptionElement(option, index) {
    const div = document.createElement("div");
    div.className = "ms-option";
    div.dataset.id = option.id || index;

    const preview = this.generatePreview(option);

    div.innerHTML = `
      <div class="ms-icon-box">${preview}</div>
      <span>${option.nombre}</span>
    `;

    div.addEventListener("click", (e) => {
      e.stopPropagation();
      this.selectOption(div, option);
    });

    return div;
  }

  // ============================================================
  generatePreview(option) {
    if (this.type === "fuerza" || this.type === "tipo") {
      return option.icono ? `<img src="${option.icono}" alt="">` : "";
    }

    const sidcPreview = this.getPreviewSidc(option);
    const sym = new ms.Symbol(sidcPreview, { size: 35, frame: true });
    return sym.asSVG();
  }

  getPreviewSidc(option) {
    const base = appState.getCleanPreviewBase();

    // AFILIACIÓN siempre aplicada
    base[3] = appState.afiliacionActual || "3";

    // =========================
    // ICONO
    // =========================
    if (this.type === "icono") {
      for (let i = 0; i < 6; i++) {
        base[CONFIG.ICON_START + i] = option.code[i];
      }

      if (option.ssc) {
        base[4] = option.ssc[0];
        base[5] = option.ssc[1];
      }
    }

    // =========================
    // MOD1
    // =========================
    else if (this.type === "mod1") {

      base[CONFIG.MOD1_START] = option.code[0];
      base[CONFIG.MOD1_START + 1] = option.code[1];

      if (option.cim1 !== undefined) {
        base[20] = option.cim1;
      } else {
        base[20] = "0";
      }

      if (option.ssc) {
        base[4] = option.ssc[0];
        base[5] = option.ssc[1];
      }
    }

    // =========================
    // MOD2
    // =========================
    else if (this.type === "mod2") {

      base[CONFIG.MOD2_START] = option.code[0];
      base[CONFIG.MOD2_START + 1] = option.code[1];

      if (option.cim2 !== undefined) {
        base[21] = option.cim2;
      } else {
        base[21] = "0";
      }

      if (option.ssc) {
        base[4] = option.ssc[0];
        base[5] = option.ssc[1];
      }
    }

    return base.join("");
  }

  // ============================================================
  selectOption(optionDiv, option) {
    this.optionsDiv
      .querySelectorAll(".ms-option")
      .forEach((o) => o.classList.remove("active"));

    optionDiv.classList.add("active");

    this.selectedDiv.innerHTML =
      option.nombre + '<span class="ms-arrow"></span>';

    this.selectedDiv.classList.remove("placeholder");
    this.element.classList.remove("open");

    this.selectedValue = option; 

    this.handleSelection(option);
  }

  // ============================================================
  handleSelection(option) {
    switch (this.type) {
    case "fuerza":

      appState.fuerzaActual = option.id;

      // limpiar tipo seleccionado
      appState.tipoActual = null;

      limpiarDependientes();

      // obtener tipos de la fuerza
      const tipos = option.tipos || [];

      // actualizar selector tipo
      selectors.tipo.updateOptions(tipos);

      // reset visual selector tipo
      selectors.tipo.selectedValue = null;
      selectors.tipo.resetUI();

      actualizarCatalogo();

      break;

      case "tipo":

        appState.tipoActual = option.id;

        // =====================================
        // SSC / CODT → posiciones 4 y 5
        // =====================================

        const ssc = option.ssc || option.codt || "00";

        appState.setSidcTwo(CONFIG.SSC_POS, ssc);

        limpiarDependientes();

        actualizarCatalogo();

        console.log("SIDC actual:", appState.sidc);
        break;

      case "icono":
        appState.iconoActual = option.code;
        appState.setIcon(option.code);
        break;

      case "mod1":

        appState.mod1Actual = option.code;

        // posiciones 16-17
        appState.setSidcTwo(CONFIG.MOD1_START, option.code);

        // posición 20 (extra)
        if (option.cim1 !== undefined) {
          appState.setSidcDigit(20, option.cim1);
        } else {
          // reset por defecto
          appState.setSidcDigit(20, "0");
        }

        console.log("SIDC actual:", appState.sidc);

        break;

      case "mod2":

        appState.mod2Actual = option.code;

        // posiciones 18-19
        appState.setSidcTwo(CONFIG.MOD2_START, option.code);

        // p1 (CIM2)
        if (option.cim2 !== undefined) {
          appState.setSidcDigit(21, option.cim2);
        } else {
          appState.setSidcDigit(21, "0");
        }

        console.log("SIDC actual:", appState.sidc);

        break;

      case "act":
        appState.actActual = option.code;
        appState.setSidcTwo(CONFIG.ACT_START, option.code);
        break;

      case "inst":
        appState.instActual = option.code;
        appState.setSidcTwo(CONFIG.INST_START, option.code);
        break;  
    }
  }

  // ============================================================
  attachEvents() {
    this.selectedDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      this.element.classList.toggle("open");
    });

    if (this.overlay) {
      this.overlay.addEventListener("click", () =>
        this.element.classList.remove("open")
      );
    }

    document.addEventListener("click", () =>
      this.element.classList.remove("open")
    );
  }

  // ============================================================
  refreshPreviews() {
    const items = this.optionsDiv.querySelectorAll(".ms-option");

    items.forEach((item, index) => {
      const option = this.options[index];
      if (!option) return;

      const preview = this.generatePreview(option);
      const iconBox = item.querySelector(".ms-icon-box");

      if (iconBox) iconBox.innerHTML = preview;
    });
  }
}

// ============================================================
// INICIALIZACIÓN DE UI
// ============================================================

function inicializarAfiliaciones() {
  const container = document.getElementById("afiliacionBotones");
  if (!container) return;
  
  DATA.afiliaciones.forEach(afiliacion => {
    let sidc = CONFIG.BASE_SIDC.split("");
    sidc[3] = afiliacion.id;
    const sym = new ms.Symbol(sidc.join(""), { size: 45 });
    
    const btn = document.createElement("button");
    btn.className = "boton-afiliacion";
    btn.dataset.id = afiliacion.id;
    btn.innerHTML = `
      <div class="icono">${sym.asSVG()}</div>
      <span class="texto">${afiliacion.nombre}</span>
    `;
    
    btn.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      appState.afiliacionActual = afiliacion.id;

      appState.setSidcDigit(3, afiliacion.id);
      refrescarTodosLosPreviews();
    });
    
    container.appendChild(btn);
  });
  
  const btnAmigo = container.querySelector('[data-id="3"]');
  if (btnAmigo) btnAmigo.classList.add("active");
}

function inicializarEchelonSelect() {
  const select = document.getElementById("echelonSelect");
  const selected = document.getElementById("echelonSelected");
  const items = document.getElementById("echelonOptions");
  
  if (!select || !selected || !items) return;
  
  items.innerHTML = "";
  selected.innerHTML = "Seleccione..." + '<span class="ms-arrow"></span>';
  selected.classList.add("placeholder");
  
  DATA.escalones.forEach(e => {
    let sidc = appState.sidc.split("");
    sidc[CONFIG.ECHELON_POS] = e.code[0];
    sidc[CONFIG.ECHELON_POS + 1] = e.code[1];
    
    const sym = new ms.Symbol(sidc.join(""), { size: 40, frame: false, icon: false, space: false });
    
    const temp = document.createElement("div");
    temp.innerHTML = sym.asSVG();
    
    temp.querySelectorAll("circle").forEach(c => {
      const fill = c.getAttribute("fill");
      const stroke = c.getAttribute("stroke");
      const esNegro = fill === "black" || stroke === "black" || 
                      fill === "#000" || stroke === "#000" ||
                      fill === "#000000" || stroke === "#000000";
      if (!esNegro) c.remove();
    });
    
    const div = document.createElement("div");
    div.className = "ms-option";
    div.innerHTML = `<div class="ms-icon-box">${temp.innerHTML}</div><span>${e.nombre}</span>`;
    
    div.addEventListener("click", () => {
      items.querySelectorAll(".ms-option").forEach(o => o.classList.remove("active"));
      div.classList.add("active");
      selected.innerHTML = e.nombre + '<span class="ms-arrow"></span>';
      selected.classList.remove("placeholder");
      appState.setSidcTwo(CONFIG.ECHELON_POS, e.code);
      select.classList.remove("open");
    });
    
    items.appendChild(div);
  });
  
  selected.addEventListener("click", e => {
    e.stopPropagation();
    select.classList.toggle("open");
  });
  
  document.addEventListener("click", () => select.classList.remove("open"));
}

function inicializarAmplificadores() {
  document.querySelectorAll("[data-amp]").forEach(input => {
    const key = input.dataset.amp;
    
    const updateAmplifier = () => {
      appState.setAmplifier(key, input.value);
    };
    
    input.addEventListener("input", updateAmplifier);

  });
}

function inicializarFormatControls() {
  const fontSelect = document.getElementById("fontSizeH");
  if (fontSelect) {
  
    fontSelect.addEventListener("change", (e) => {
      appState.setFormatOptions({ fontSize: parseInt(e.target.value) });
    });
  }
}

function inicializarHQ() {
  const hqCheckbox = document.getElementById("hq");
  if (hqCheckbox) {
    hqCheckbox.addEventListener("change", (e) => {
      appState.setHq(e.target.checked);
    });
  }
}

function inicializarACT() {
  const actCheckbox = document.getElementById("act");
  if (actCheckbox) {
    actCheckbox.addEventListener("change", (e) => {
      appState.setAct(e.target.checked);
    });
  }
}

function inicializarINST() {
  const instCheckbox = document.getElementById("inst");
  if (instCheckbox) {
    instCheckbox.addEventListener("change", (e) => {
      appState.setInst(e.target.checked);
    });
  }
}

function inicializarBotonesDescarga() {
  const downloadSvgBtn = document.getElementById("download-svg");
  const downloadPngBtn = document.getElementById("download-png");
  
  if (downloadSvgBtn) {
    downloadSvgBtn.addEventListener("click", () => {
      const resultado = document.getElementById("resultado");
      const svg = resultado?.querySelector("svg");
      if (svg) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `simbolo_${Date.now()}.svg`;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }
  
  if (downloadPngBtn) {
    downloadPngBtn.addEventListener("click", () => {
      const resultado = document.getElementById("resultado");
      const svg = resultado?.querySelector("svg");

      if (!svg) {
        alert("No hay símbolo para descargar");
        return;
      }

      const scale = 4;
      const padding = 40;

      const clone = svg.cloneNode(true);

      const bbox = svg.getBBox();

      const width = bbox.width + padding * 2;
      const height = bbox.height + padding * 2;

      clone.setAttribute("viewBox", `
        ${bbox.x - padding}
        ${bbox.y - padding}
        ${width}
        ${height}
      `);

      clone.setAttribute("width", width);
      clone.setAttribute("height", height);

      // namespace
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clone);

      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext("2d");

      const img = new Image();
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
      });

      const url = URL.createObjectURL(blob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        URL.revokeObjectURL(url);

        canvas.toBlob(blob => {
          const pngUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = pngUrl;
          a.download = `simbolo_${Date.now()}.png`;
          a.click();
          URL.revokeObjectURL(pngUrl);
        }, "image/png");
      };

      img.onerror = () => {
        console.error("Error cargando SVG");
        URL.revokeObjectURL(url);
      };

      img.src = url;
    });
  }
}

function inicializarBotonLimpiar() {
  const btnLimpiar = document.getElementById("btn-limpiar");
  
  const hqElement = document.getElementById("hq-element");
  if (hqElement) hqElement.value = "";

  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
    
      appState.reset();

      document.querySelectorAll("[data-amp]").forEach(input => input.value = "");

      const fontSelect = document.getElementById("fontSizeH");
      if (fontSelect) fontSelect.value = CONFIG.DEFAULT_FONT_SIZE;

      const hqCheckbox = document.getElementById("hq");
      if (hqCheckbox) hqCheckbox.checked = false;

      const actCheckbox = document.getElementById("act");
      if (actCheckbox) actCheckbox.checked = false;

      const instCheckbox = document.getElementById("inst");
      if (instCheckbox) instCheckbox.checked = false;

      Object.values(selectors).forEach(sel => {
        if (!sel) return;

        sel.selectedValue = null;
        sel.resetUI();

        if (["icono", "mod1", "mod2"].includes(sel.type)) {
          sel.updateOptions([]);
        }
      });

      const container = document.getElementById("afiliacionBotones");
      container?.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      container?.querySelector('[data-id="3"]')?.classList.add("active");

      render();
    });
  }
}

// ============================================================
// CATÁLOGO Y ACTUALIZACIÓN
// ============================================================

let selectors = {};

function actualizarCatalogo() {
  if (!appState.fuerzaActual || !appState.tipoActual) return;

  const data = DATA.catalogo[appState.fuerzaActual]?.[appState.tipoActual];
  if (!data) return;

  if (selectors.icono) {
    selectors.icono.updateOptions(data.iconos);
  } else {
    selectors.icono = new CustomSelect("iconoSelect", data.iconos, "icono");
  }

  if (selectors.mod1) {
    selectors.mod1.updateOptions(data.mod1);
  } else {
    selectors.mod1 = new CustomSelect("mod1Select", data.mod1, "mod1");
  }

  if (selectors.mod2) {
    selectors.mod2.updateOptions(data.mod2);
  } else {
    selectors.mod2 = new CustomSelect("mod2Select", data.mod2, "mod2");
  }
}

function refrescarTodosLosPreviews() {
  Object.values(selectors).forEach(selector => {
    if (selector && selector.refreshPreviews) {
      selector.refreshPreviews();
    }
  });
}

// ============================================================
// INICIALIZACIÓN PRINCIPAL
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar componentes UI
  inicializarAfiliaciones();
  inicializarEchelonSelect();
  inicializarAmplificadores();
  inicializarFormatControls();
  inicializarHQ();
  inicializarACT();
  inicializarINST();
  inicializarBotonesDescarga();
  inicializarBotonLimpiar();
  inicializarAL();
  inicializarMovilidad();
  inicializarHeadquartersElement();

  function inicializarHeadquartersElement() {

    const input = document.getElementById("hq-element");

    if (!input) return;

    input.addEventListener("input", (e) => {

      appState.setAmplifier("s", e.target.value);

    });
  }

  
  // Inicializar selectores de fuerza y tipo
  selectors.fuerza = new CustomSelect("fuerzaSelect", DATA.fuerzas, "fuerza", "Seleccione...");
  selectors.tipo = new CustomSelect("tipoSelect", [], "tipo", "Seleccione...");
  
  // Render inicial
  render();

  const haloToggle =
    document.getElementById("text-bg-toggle");

  if (haloToggle) {

    haloToggle.addEventListener("change", () => {
      render();
    });

  }
  
  console.log("Sistema inicializado correctamente");
});

function limpiarDependientes() {
  appState.iconoActual = "000000";
  appState.mod1Actual = "00";
  appState.mod2Actual = "00";

  appState.setIcon("000000");
  appState.setSidcTwo(CONFIG.MOD1_START, "00");
  appState.setSidcTwo(CONFIG.MOD2_START, "00");
};


function inicializarAL() {
  const alSelect = document.getElementById("amp-al");
  if (alSelect) {
    alSelect.addEventListener("change", (e) => {
      const valor = e.target.value;

      // Guardar como amplificador (si lo quieres seguir usando)
      appState.setAmplifier("al", valor);

      // Modificar SIDC en posición 6
      if (valor) {
        appState.setSidcDigit(6, valor);
      } else {
        // Si se limpia, volver a "0"
        appState.setSidcDigit(6, "0");
      }
    });
  }
}

function inicializarMovilidad() {
  const movilidadSelect = document.getElementById("amp-r");

  if (movilidadSelect) {

    movilidadSelect.addEventListener("change", (e) => {

      const valor = e.target.value;

      console.log("Movilidad seleccionada:", valor);

      // posiciones 8 y 9
      if (valor && valor.length === 2) {

        appState.setSidcTwo(CONFIG.ECHELON_POS, valor);

      } else {

        // reset
        appState.setSidcTwo(CONFIG.ECHELON_POS, "00");
      }

      console.log("SIDC actual:", appState.sidc);

    });

  }
}

// ============================================================
// INTEGRACIÓN CON MAPSTORE2 - COMUNICACIÓN
// ============================================================

function setupCommunicationWithParent() {
    // Crear botón de selección
    const selectButton = document.createElement('button');
    selectButton.textContent = "✅ Seleccionar este símbolo";
    selectButton.className = "btn-seleccionar-simbolo";
    selectButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;

    selectButton.onmouseover = () => {
        selectButton.style.transform = 'translateX(-50%) scale(1.05)';
        selectButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
    };

    selectButton.onmouseout = () => {
        selectButton.style.transform = 'translateX(-50%) scale(1)';
        selectButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    };

    selectButton.onclick = () => {
        const svgElement = document.querySelector('#resultado svg');
        if (!svgElement) {
            alert('No hay un símbolo generado para seleccionar');
            return;
        }

        try {
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(svgElement);

            // Enviar mensaje al padre (MapStore2)
            window.parent.postMessage({
                type: 'SYMBOL_SELECTED',  // Importante: coincide con lo que espera MarkerIconSelector
                svg: svgString,
                sidc: appState.sidc
            }, '*');

            // Feedback visual
            selectButton.textContent = "✅ ¡Símbolo seleccionado!";
            selectButton.style.background = "#2196F3";
            setTimeout(() => {
                selectButton.textContent = "✅ Seleccionar este símbolo";
                selectButton.style.background = "#4CAF50";
            }, 2000);

        } catch (error) {
            console.error('Error al serializar SVG:', error);
            alert('Error al seleccionar el símbolo. Revisa la consola para más detalles.');
        }
    };

    document.body.appendChild(selectButton);

    // También añadir un atajo con teclado (Ctrl+Enter)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            selectButton.click();
        }
    });
}

// ============================================================
// INICIALIZACIÓN PRINCIPAL (MODIFICADA)
// ============================================================

// ... (mantén todo tu código existente hasta aquí)

document.addEventListener("DOMContentLoaded", () => {
    // ... (todas tus funciones de inicialización existentes)

    // Agregar comunicación con el padre
    setupCommunicationWithParent();

    console.log("Sistema inicializado correctamente");
    console.log("Presiona Ctrl+Enter para seleccionar el símbolo actual");
});
