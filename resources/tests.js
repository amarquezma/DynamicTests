// tests-data.js
const TEST_DATA = {
  subjects: [
    {
      id: "lgm",
      name: "LGM",
      units: [
        {
          id: "tema1",
          name: "1 Questions from tema1",
          tests: [
            {
              id: "tema1-test",
              title: "Tema 1 - Autoevaluación",
              createdOn: "2026-01-12",
              questions: [
                {
                  id: "q1",
                  text: "¿Cuál es la etiqueta correcta si queremos cerrar un elemento en un lenguaje de marcas?",
                  answers: [
                    { text: "<\\marca>", correct: false },
                    { text: "<|marca>", correct: false },
                    { text: "<marca/>", correct: false },
                    { text: "</marca>", correct: true },
                  ],
                },
                {
                  id: "q2",
                  text: "¿En qué década se creó el lenguaje de marcas HTML?",
                  answers: [
                    { text: "En los años 80", correct: false },
                    { text: "En los años 70", correct: false },
                    { text: "En los años 90", correct: true },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q3",
                  text: "¿Qué significan las siglas XHTML?",
                  answers: [
                    {
                      text: "Extender Hypervisor Mark Language",
                      correct: false,
                    },
                    {
                      text: "Extra Hyperlink Mark Language",
                      correct: false,
                    },
                    {
                      text: "Extensible HyperText Markup Link",
                      correct: false,
                    },
                    {
                      text: "Extensible HyperText Markup Language",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q4",
                  text: "¿Cómo se pueden clasificar los lenguajes de marcas?",
                  answers: [
                    {
                      text: "De presentación, análisis y descriptivo",
                      correct: false,
                    },
                    {
                      text: "De procedimiento, conversión y semántico",
                      correct: false,
                    },
                    {
                      text: "De presentación, procedimiento y descriptivo",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q5",
                  text: "¿Qué herramienta de edición está desarrollada por Microsoft?",
                  answers: [
                    { text: "Visual Studio Code", correct: true },
                    { text: "Notepad++", correct: false },
                    { text: "Sublime Text", correct: false },
                    { text: "Atom", correct: false },
                  ],
                },
                {
                  id: "q6",
                  text: "¿De cuántas partes consta un documento XML?",
                  answers: [
                    { text: "3", correct: false },
                    { text: "2", correct: true },
                    { text: "4", correct: false },
                    { text: "1", correct: false },
                  ],
                },
                {
                  id: "q7",
                  text: "¿Cómo se llama la primera parte de un documento XML?",
                  answers: [
                    { text: "Inicio", correct: false },
                    { text: "Índice", correct: false },
                    { text: "Prólogo", correct: true },
                    { text: "Cuerpo", correct: false },
                  ],
                },
                {
                  id: "q8",
                  text: "¿Cómo se indican los comentarios en XML?",
                  answers: [
                    {
                      text: "<!-- para su apertura y --> para su cierre",
                      correct: true,
                    },
                    {
                      text: "<-- para su apertura y --!> para su cierre",
                      correct: false,
                    },
                    {
                      text: "<!-- para su apertura y **> para su cierre",
                      correct: false,
                    },
                    {
                      text: "<!-- para su apertura y --!> para su cierre",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q9",
                  text: "Indica una norma básica para que un documento esté bien formado.",
                  answers: [
                    {
                      text: "Sensibilidad a mayúsculas y minúsculas",
                      correct: false,
                    },
                    {
                      text: "Siempre debe existir un nodo raíz",
                      correct: false,
                    },
                    {
                      text: "En el prólogo se debe indicar versión y codificación",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q10",
                  text: "¿Qué atributo especial hay que usar cuando trabajamos con espacios de nombres?",
                  answers: [
                    { text: "xmlns", correct: true },
                    { text: "xnlms", correct: false },
                    { text: "xlsmt", correct: false },
                    { text: "xtlsm", correct: false },
                  ],
                },
                {
                  id: "q11",
                  text: "Las marcas se suelen representar con diferentes caracteres, pero ¿cuáles son las más usuales?",
                  answers: [
                    { text: "{marca}", correct: false },
                    { text: "[marca]", correct: false },
                    { text: "<marca>", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q12",
                  text: "¿Con qué palabra reservada se indica el tipo de codificación y en qué parte en un documento XML?",
                  answers: [
                    {
                      text: "Con la palabra reservada encoding y en el cuerpo",
                      correct: false,
                    },
                    {
                      text: "Con la palabra reservada encoding y en el prólogo",
                      correct: true,
                    },
                    {
                      text: "Con la palabra reservada code y en el prólogo",
                      correct: false,
                    },
                    { text: "No se indica en XML", correct: false },
                  ],
                },

                {
                  id: "q1",
                  text: "¿Cómo se llama el modelo en el que un usuario solicita un documento web y algún servicio de internet se lo suministra?",
                  answers: [
                    { text: "Modelo cliente – nucleo", correct: false },
                    { text: "Modelo servidor – cliente", correct: false },
                    { text: "Modelo cliente – servidor", correct: true },
                    { text: "Modelo servidor – servidor", correct: false },
                  ],
                },
                {
                  id: "q2",
                  text: "¿Qué lenguaje permite indistintamente utilizar mayúsculas y minúsculas en las etiquetas del documento web?",
                  answers: [
                    { text: "HTML", correct: true },
                    { text: "XML", correct: false },
                    { text: "XHTML", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q3",
                  text: "¿Para qué se utiliza la etiqueta href?",
                  answers: [
                    {
                      text: "Para indicar cual es el índice del sitio web",
                      correct: false,
                    },
                    {
                      text: "Para referenciar el final del documento HTML",
                      correct: false,
                    },
                    {
                      text: "Para indicar el título del documento",
                      correct: false,
                    },
                    {
                      text: "Indica la dirección web para un enlace",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q4",
                  text: "¿Un elemento HTML es más que una etiqueta?",
                  answers: [
                    { text: "No", correct: false },
                    { text: "Sí", correct: true },
                    {
                      text: "Depende del tipo de etiqueta",
                      correct: false,
                    },
                    {
                      text: "Depende del número de atributos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q5",
                  text: "Los elementos en línea…",
                  answers: [
                    {
                      text: "Ocupan el espacio hasta el final de la línea",
                      correct: false,
                    },
                    {
                      text: "Siempre van a comenzar una línea",
                      correct: false,
                    },
                    {
                      text: "Sólo ocupan el espacio necesario según su contenido",
                      correct: true,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q6",
                  text: "¿Cuál fue la primera versión de HTML que permitió incluir tablas?",
                  answers: [
                    { text: "HTML 3.2", correct: true },
                    { text: "HTML 2.0", correct: false },
                    { text: "HTML 4.01", correct: false },
                    { text: "HTML 5", correct: false },
                  ],
                },
                {
                  id: "q7",
                  text: "¿En qué año se publicó HTML5?",
                  answers: [
                    { text: "2017", correct: false },
                    { text: "2013", correct: false },
                    { text: "2015", correct: false },
                    { text: "2014", correct: true },
                  ],
                },
                {
                  id: "q8",
                  text: "¿Qué opción en el navegador nos permite visualizar el código de una página web?",
                  answers: [
                    {
                      text: "Botón izquierdo y ver código fuente de la página",
                      correct: false,
                    },
                    {
                      text: "Botón derecho y ver código fuente de la página",
                      correct: true,
                    },
                    {
                      text: "Botón derecho y ver diseño de la página",
                      correct: false,
                    },
                    {
                      text: "Botón izquierdo y ver diseño de la página",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q9",
                  text: "Indica alguna característica de XHTML",
                  answers: [
                    {
                      text: "Las etiquetas se tienen que cerrar en el mismo orden",
                      correct: false,
                    },
                    {
                      text: "Las etiquetas y atributos deben ir en minúsculas",
                      correct: false,
                    },
                    {
                      text: "Los valores de atributos deben ir entre comillas",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q10",
                  text: "¿Para qué se utiliza la extensión de Chrome Colorzilla?",
                  answers: [
                    {
                      text: "Conocer el número de colores de una web",
                      correct: false,
                    },
                    {
                      text: "Saber el color de un elemento de la web",
                      correct: true,
                    },
                    {
                      text: "Cambiar el tema del navegador",
                      correct: false,
                    },
                    { text: "Elegir una paleta de colores", correct: false },
                  ],
                },
                {
                  id: "q11",
                  text: "¿Con qué etiqueta identificamos el tipo de documento HTML?",
                  answers: [
                    { text: "DOCTYPE", correct: true },
                    { text: "TYPEDOC", correct: false },
                    { text: "DOCHTML", correct: false },
                    { text: "DOC", correct: false },
                  ],
                },
                {
                  id: "q12",
                  text: "¿Dónde hay que indicar el título (<title>) del documento?",
                  answers: [
                    { text: "En el body", correct: false },
                    { text: "En la etiqueta DOCTYPE", correct: false },
                    {
                      text: "Justo después de la etiqueta HTML",
                      correct: false,
                    },
                    { text: "Dentro de la cabecera", correct: true },
                  ],
                },
                {
                  id: "q13",
                  text: "¿Qué versión de HTML 4.01 no permite etiquetas obsoletas?",
                  answers: [
                    { text: "Estricto", correct: true },
                    { text: "Transicional", correct: false },
                    { text: "Frameset", correct: false },
                    { text: "Todas lo permiten", correct: false },
                  ],
                },
                {
                  id: "q14",
                  text: "¿Con qué etiqueta puedo escribir CSS en línea?",
                  answers: [
                    { text: "<script>", correct: false },
                    { text: "<style>", correct: true },
                    { text: "<link>", correct: false },
                    { text: "<meta>", correct: false },
                  ],
                },
                {
                  id: "q15",
                  text: "¿Cuál es el juego de caracteres por defecto de HTML5?",
                  answers: [
                    { text: "ISO-8859-1", correct: false },
                    { text: "ANSI", correct: false },
                    { text: "ASCII", correct: false },
                    { text: "UTF-8", correct: true },
                  ],
                },
                {
                  id: "q16",
                  text: "¿Qué etiqueta nos permite incluir una línea horizontal?",
                  answers: [
                    { text: "<br>", correct: false },
                    { text: "<rh>", correct: false },
                    { text: "<hr>", correct: true },
                    { text: "<p>", correct: false },
                  ],
                },
                {
                  id: "q17",
                  text: "¿Qué etiqueta debo utilizar para escribir un texto que mantenga espacios y tabuladores?",
                  answers: [
                    { text: "<p>", correct: false },
                    { text: "<hr>", correct: false },
                    { text: "<div>", correct: false },
                    { text: "<pre>", correct: true },
                  ],
                },
                {
                  id: "q18",
                  text: "¿Qué etiqueta me permite agrupar otros elementos HTML y se le suele llamar capas?",
                  answers: [
                    { text: "<div>", correct: true },
                    { text: "<hr>", correct: false },
                    { text: "<pre>", correct: false },
                    { text: "<blockquote>", correct: false },
                  ],
                },
                {
                  id: "q19",
                  text: "¿Qué etiqueta muestra el texto con márgenes a derecha e izquierda?",
                  answers: [
                    { text: "<div>", correct: false },
                    { text: "<hr>", correct: false },
                    { text: "<pre>", correct: false },
                    { text: "<blockquote>", correct: true },
                  ],
                },
                {
                  id: "q20",
                  text: "¿Cuál se visualizará más grande?",
                  answers: [
                    { text: "<h4>", correct: false },
                    { text: "<h2>", correct: false },
                    { text: "<h1>", correct: true },
                    { text: "<h3>", correct: false },
                  ],
                },

                {
                  id: "q21",
                  text: "¿Qué etiqueta nos permite insertar saltos de línea?",
                  answers: [
                    { text: "<hr>", correct: false },
                    { text: "<br>", correct: true },
                    { text: "<rb>", correct: false },
                    { text: "<rh>", correct: false },
                  ],
                },
                {
                  id: "q22",
                  text: "¿Qué etiqueta nos permite tachar un contenido?",
                  answers: [
                    { text: "<i>", correct: false },
                    { text: "<sup>", correct: false },
                    { text: "<s>", correct: true },
                    { text: "<em>", correct: false },
                  ],
                },
                {
                  id: "q23",
                  text: "¿Qué etiqueta nos permite resaltar un texto normalmente en amarillo?",
                  answers: [
                    { text: "<strong>", correct: false },
                    { text: "<mark>", correct: true },
                    { text: "<s>", correct: false },
                    { text: "<em>", correct: false },
                  ],
                },
                {
                  id: "q24",
                  text: "¿En qué atributo de la etiqueta <a> se indica el destino del enlace?",
                  answers: [
                    { text: "target", correct: false },
                    { text: "src", correct: false },
                    { text: "href", correct: true },
                    { text: "uri", correct: false },
                  ],
                },
                {
                  id: "q25",
                  text: "¿Con qué carácter se indica una referencia de un enlace en la propia página web?",
                  answers: [
                    { text: "$", correct: false },
                    { text: "%", correct: false },
                    { text: "&", correct: false },
                    { text: "#", correct: true },
                  ],
                },
                {
                  id: "q26",
                  text: "¿Qué valor del atributo target me permite abrir un enlace en la propia pestaña?",
                  answers: [
                    { text: "_self", correct: true },
                    { text: "_new", correct: false },
                    { text: "_blank", correct: false },
                    { text: "_up", correct: false },
                  ],
                },
                {
                  id: "q27",
                  text: "Las listas ordenadas se crean con la etiqueta",
                  answers: [
                    { text: "<ul>", correct: false },
                    { text: "<ol>", correct: true },
                    { text: "<dl>", correct: false },
                    { text: "<lo>", correct: false },
                  ],
                },
                {
                  id: "q28",
                  text: "Las listas de definición se crean con la etiqueta",
                  answers: [
                    { text: "<ul>", correct: false },
                    { text: "<ol>", correct: false },
                    { text: "<dl>", correct: true },
                    { text: "<lo>", correct: false },
                  ],
                },
                {
                  id: "q29",
                  text: "¿Con qué etiqueta se indican los elementos de una lista?",
                  answers: [
                    { text: "<ul>", correct: false },
                    { text: "<la>", correct: false },
                    { text: "<li>", correct: true },
                    { text: "<ol>", correct: false },
                  ],
                },
                {
                  id: "q30",
                  text: "¿Qué nos permite la etiqueta <iframe>?",
                  answers: [
                    { text: "Destacar el texto incluido", correct: false },
                    { text: "Crear listas", correct: false },
                    {
                      text: "Incluir contenido externo mediante una URL",
                      correct: true,
                    },
                    { text: "No existe esa etiqueta", correct: false },
                  ],
                },
                {
                  id: "q31",
                  text: "¿Qué etiqueta utilizamos para crear celdas de cabecera en una tabla?",
                  answers: [
                    { text: "<tr>", correct: false },
                    { text: "<td>", correct: false },
                    { text: "<th>", correct: true },
                    { text: "<thead>", correct: false },
                  ],
                },
                {
                  id: "q32",
                  text: "¿Dónde se pueden utilizar las celdas de cabecera en una tabla?",
                  answers: [
                    { text: "En la cabecera", correct: false },
                    { text: "En el pie", correct: false },
                    { text: "En el cuerpo", correct: false },
                    { text: "En cualquier parte", correct: true },
                  ],
                },
                {
                  id: "q33",
                  text: "¿Qué atributo utilizamos para unir celdas horizontalmente?",
                  answers: [
                    { text: "rowspan", correct: false },
                    { text: "colspan", correct: true },
                    { text: "row", correct: false },
                    { text: "colgroup", correct: false },
                  ],
                },
                {
                  id: "q34",
                  text: "¿Qué atributo utilizamos para unir celdas verticalmente?",
                  answers: [
                    { text: "rowspan", correct: true },
                    { text: "colspan", correct: false },
                    { text: "row", correct: false },
                    { text: "colgroup", correct: false },
                  ],
                },
                {
                  id: "q35",
                  text: "¿Qué atributo indica la página web de destino del formulario?",
                  answers: [
                    { text: "method", correct: false },
                    { text: "url", correct: false },
                    { text: "action", correct: true },
                    { text: "destiny", correct: false },
                  ],
                },
                {
                  id: "q36",
                  text: "¿Qué atributo controla el tamaño visual del control?",
                  answers: [
                    { text: "length", correct: false },
                    { text: "maxlength", correct: false },
                    { text: "minlength", correct: false },
                    { text: "size", correct: true },
                  ],
                },
                {
                  id: "q37",
                  text: "¿Qué atributo deshabilita un control del formulario?",
                  answers: [
                    { text: "readonly", correct: false },
                    { text: "null", correct: false },
                    { text: "disabled", correct: true },
                    { text: "read", correct: false },
                  ],
                },
                {
                  id: "q38",
                  text: "¿Qué tipo de botón envía el formulario?",
                  answers: [
                    { text: 'type="send"', correct: false },
                    { text: 'type="submit"', correct: true },
                    { text: 'type="reset"', correct: false },
                    { text: 'type="button"', correct: false },
                  ],
                },
                {
                  id: "q39",
                  text: "¿Qué atributo marca una casilla por defecto?",
                  answers: [
                    { text: "check", correct: false },
                    { text: "checking", correct: false },
                    { text: "uncheck", correct: false },
                    { text: "checked", correct: true },
                  ],
                },
                {
                  id: "q40",
                  text: "¿Qué atributo indica la opción seleccionada por defecto?",
                  answers: [
                    { text: "set", correct: false },
                    { text: "selected", correct: true },
                    { text: "first", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q41",
                  text: "¿Qué características incluye HTML5?",
                  answers: [
                    { text: "Etiquetas multimedia", correct: false },
                    { text: "Semántica", correct: false },
                    { text: "Gráficos 2D/3D", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q42",
                  text: "¿Cuál es el tipo de documento de HTML5?",
                  answers: [
                    { text: "<! TYPE html>", correct: false },
                    { text: "<! TYPEDOC html>", correct: false },
                    { text: "<!DOCTYPE html>", correct: true },
                    { text: '<! DOCTYPE vers="html5">', correct: false },
                  ],
                },
                {
                  id: "q43",
                  text: "¿Qué etiqueta indica contenido auxiliar?",
                  answers: [
                    { text: "header", correct: false },
                    { text: "main", correct: false },
                    { text: "footer", correct: false },
                    { text: "aside", correct: true },
                  ],
                },
                {
                  id: "q44",
                  text: "¿Qué etiqueta define la zona de navegación?",
                  answers: [
                    { text: "navegation", correct: false },
                    { text: "main", correct: false },
                    { text: "nav", correct: true },
                    { text: "aside", correct: false },
                  ],
                },
                {
                  id: "q45",
                  text: "¿Dónde se incluyen las etiquetas semánticas?",
                  answers: [
                    { text: "head", correct: false },
                    { text: "meta", correct: false },
                    { text: "foot", correct: false },
                    { text: "body", correct: true },
                  ],
                },
                {
                  id: "q46",
                  text: "¿Qué atributo muestra texto de ayuda?",
                  answers: [
                    { text: "pattern", correct: false },
                    { text: "placeholder", correct: true },
                    { text: "autocomplete", correct: false },
                    { text: "meter", correct: false },
                  ],
                },
                {
                  id: "q47",
                  text: "¿Qué input muestra un control deslizante?",
                  answers: [
                    { text: "meter", correct: false },
                    { text: "progress", correct: false },
                    { text: "range", correct: true },
                    { text: "step", correct: false },
                  ],
                },
                {
                  id: "q48",
                  text: "El formato Ogg es de…",
                  answers: [
                    { text: "Audio", correct: false },
                    { text: "Vídeo", correct: false },
                    { text: "Audio/Vídeo", correct: true },
                    { text: "No existe", correct: false },
                  ],
                },
                {
                  id: "q49",
                  text: "¿Qué aporta <figure> a <img>?",
                  answers: [
                    { text: "Permite añadir descripción", correct: true },
                    { text: "Indicar tamaño", correct: false },
                    { text: "Solo jpg", correct: false },
                    { text: "Ninguna", correct: false },
                  ],
                },
                {
                  id: "q50",
                  text: "¿Qué atributo hace visible <details> al cargar?",
                  answers: [
                    { text: "free", correct: false },
                    { text: "noclose", correct: false },
                    { text: "open", correct: true },
                    { text: "opened", correct: false },
                  ],
                },

                {
                  id: "q51",
                  text: "¿Qué significan las siglas CSS?",
                  answers: [
                    { text: "Cascading Style Sheets", correct: true },
                    { text: "Cascading Sheets Style", correct: false },
                    { text: "Clear Style Sheets", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q52",
                  text: "¿Qué etiqueta hay que utilizar para incluir CSS en el propio documento HTML?",
                  answers: [
                    { text: "<link>", correct: false },
                    { text: "<sheets>", correct: false },
                    { text: "<style>", correct: true },
                    { text: "<src>", correct: false },
                  ],
                },
                {
                  id: "q53",
                  text: "En la siguiente regla a {b:c} ¿Qué letra identifica la propiedad?",
                  answers: [
                    { text: "a", correct: false },
                    { text: "b", correct: true },
                    { text: "c", correct: false },
                    {
                      text: "La propiedad no forma parte de la regla CSS",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q54",
                  text: "Cuando queremos aplicar más de un estilo a un elemento se deben de separar con…",
                  answers: [
                    { text: "Dos puntos", correct: false },
                    { text: "Coma", correct: false },
                    { text: "Punto y coma", correct: true },
                    { text: "Punto", correct: false },
                  ],
                },
                {
                  id: "q55",
                  text: "El selector de clase se identifica con",
                  answers: [
                    { text: "Punto", correct: true },
                    { text: "Coma", correct: false },
                    { text: "Punto y coma", correct: false },
                    { text: "Almohadilla", correct: false },
                  ],
                },
                {
                  id: "q56",
                  text: "El selector de identificador se identifica con",
                  answers: [
                    { text: "Punto", correct: false },
                    { text: "Coma", correct: false },
                    { text: "Punto y coma", correct: false },
                    { text: "Almohadilla", correct: true },
                  ],
                },
                {
                  id: "q57",
                  text: "¿Cómo se activa el inspector de la página en el navegador Mozilla?",
                  answers: [
                    { text: "Con F11", correct: false },
                    { text: "Con F10", correct: false },
                    { text: "Con F12", correct: true },
                    { text: "Con F7", correct: false },
                  ],
                },
                {
                  id: "q58",
                  text: "Indica que unidad es relativa",
                  answers: [
                    { text: "em", correct: false },
                    { text: "rem", correct: false },
                    { text: "vw", correct: false },
                    { text: "Todas son relativas", correct: true },
                  ],
                },
                {
                  id: "q59",
                  text: "¿Qué unidad se relaciona con el tamaño de la fuente raiz?",
                  answers: [
                    { text: "rem", correct: true },
                    { text: "em", correct: false },
                    { text: "px", correct: false },
                    { text: "pt", correct: false },
                  ],
                },
                {
                  id: "q60",
                  text: "¿Qué color en formato RGB representa el blanco?",
                  answers: [
                    { text: "(0,0,0)", correct: false },
                    { text: "(255,155,0)", correct: false },
                    { text: "(255,255,255)", correct: true },
                    { text: "(255,255,0)", correct: false },
                  ],
                },
                {
                  id: "q61",
                  text: "¿Qué valor nos permite quitar el subrayado de un texto?",
                  answers: [
                    { text: "none", correct: true },
                    { text: "null", correct: false },
                    { text: "underline", correct: false },
                    { text: "overline", correct: false },
                  ],
                },
                {
                  id: "q62",
                  text: "¿Qué es una fuente segura?",
                  answers: [
                    {
                      text: "Una fuente con estilo negrita",
                      correct: false,
                    },
                    { text: "Una fuente con tamaño fijo", correct: false },
                    {
                      text: "Una fuente que tenemos seguro en el sistema",
                      correct: true,
                    },
                    { text: "Una fuente sin virus", correct: false },
                  ],
                },
                {
                  id: "q63",
                  text: "::first-line, ¿es un pseudo-elemento o una pseudo-clase?",
                  answers: [
                    { text: "Pseudo-elemento", correct: true },
                    { text: "Pseudo-clase", correct: false },
                    { text: "Puede ser las dos cosas", correct: false },
                    { text: "La sintaxis no es correcta", correct: false },
                  ],
                },
                {
                  id: "q64",
                  text: "¿Con qué pseudo-clase controlamos cuando el cursor pasa por encima del elemento?",
                  answers: [
                    { text: "active", correct: false },
                    { text: "focus", correct: false },
                    { text: "hover", correct: true },
                    { text: "link", correct: false },
                  ],
                },
                {
                  id: "q65",
                  text: "¿Qué propiedad nos permite incluir contenido antes o después de un elemento HTML?",
                  answers: [
                    { text: "content", correct: true },
                    { text: "caption", correct: false },
                    { text: "adjunt", correct: false },
                    { text: "property", correct: false },
                  ],
                },
                {
                  id: "q66",
                  text: "Si tengo una imagen de fondo y un color de fondo, ¿qué se mostrará?",
                  answers: [
                    { text: "El color de fondo", correct: false },
                    { text: "La imagen de fondo", correct: false },
                    { text: "Depende del tipo de imagen", correct: true },
                    {
                      text: "Depende del tamaño de la caja",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q67",
                  text: "¿Cómo se puede indicar que la imagen de fondo permanezca fija?",
                  answers: [
                    { text: "background-fixed", correct: false },
                    { text: "background-full", correct: false },
                    { text: "background-attachment", correct: true },
                    { text: "background-position", correct: false },
                  ],
                },
                {
                  id: "q68",
                  text: "¿Qué se indica con el valor max-width?",
                  answers: [
                    {
                      text: "El tamaño de la caja cuando se amplía la ventana",
                      correct: false,
                    },
                    {
                      text: "El tamaño del contenedor padre",
                      correct: false,
                    },
                    { text: "El tamaño fijo de la caja", correct: false },
                    {
                      text: "El tamaño máximo que puede tener una caja",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q69",
                  text: "¿Qué propiedad nos permite indicar cómo se va a calcular el ancho y el alto de una caja?",
                  answers: [
                    { text: "box-sizing", correct: true },
                    { text: "box-size", correct: false },
                    { text: "box-width", correct: false },
                    { text: "box-height", correct: false },
                  ],
                },
                {
                  id: "q70",
                  text: "¿Qué propiedad oculta el elemento HTML y no sigue ocupando espacio?",
                  answers: [
                    { text: "visibility:hidden", correct: false },
                    { text: "display:hidden", correct: false },
                    { text: "visibility:none", correct: false },
                    { text: "display:none", correct: true },
                  ],
                },
                {
                  id: "q71",
                  text: "¿Cómo se comporta la propiedad position con el valor relative?",
                  answers: [
                    { text: "Es el orden por defecto", correct: false },
                    {
                      text: "Se puede desplazar el elemento respecto a la posición del contenedor padre",
                      correct: false,
                    },
                    {
                      text: "Se puede desplazar el elemento respecto a su posición estática",
                      correct: true,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q72",
                  text: "¿Qué valor de z-index le debo indicar a la capa 3 para que esté por debajo de la capa 2 que tiene z-index 3?",
                  answers: [
                    { text: "0", correct: false },
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q73",
                  text: "¿Qué propiedad hay que usar para indicar que ya no se quieren que los elementos HTML floten?",
                  answers: [
                    { text: "clear", correct: true },
                    { text: "quit", correct: false },
                    { text: "none", correct: false },
                    { text: "null", correct: false },
                  ],
                },
                {
                  id: "q74",
                  text: "¿Cuál es la versión reducida para indicar bordes redondeados en CSS3?",
                  answers: [
                    { text: "radius-border", correct: false },
                    { text: "border-radius", correct: true },
                    { text: "border-all", correct: false },
                    { text: "border-radius-all", correct: false },
                  ],
                },
                {
                  id: "q75",
                  text: "El radio de desenfoque se aplica a la propiedad…",
                  answers: [
                    { text: "box-weight", correct: false },
                    { text: "border-radius", correct: false },
                    { text: "box-shadow", correct: true },
                    { text: "color", correct: false },
                  ],
                },
                {
                  id: "q76",
                  text: "El rango de opacidad se indica con números entre",
                  answers: [
                    { text: "1 a 10", correct: false },
                    { text: "0 a 10", correct: false },
                    { text: "0 a 1", correct: true },
                    { text: "1 a 2", correct: false },
                  ],
                },
                {
                  id: "q77",
                  text: "Indica un parámetro a indicar cuando usamos radial-gradient",
                  answers: [
                    { text: "Figura a mostrar", correct: false },
                    { text: "Tamaño", correct: false },
                    { text: "Posición", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q78",
                  text: "¿Cuál es la propiedad para indicar dónde se encuentra la fuente que quiero usar en la página web?",
                  answers: [
                    { text: "src", correct: true },
                    { text: "url", correct: false },
                    { text: "origin", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q79",
                  text: "¿Qué propiedad indica el número de columnas en las multicolumnas?",
                  answers: [
                    { text: "column-num", correct: false },
                    { text: "column-count", correct: true },
                    { text: "column-number", correct: false },
                    { text: "column-gap", correct: false },
                  ],
                },
                {
                  id: "q80",
                  text: "¿Qué se indica con la transformación scale(x,y)?",
                  answers: [
                    {
                      text: "Escala y veces el ancho y x veces el alto",
                      correct: false,
                    },
                    {
                      text: "Escala x veces el ancho e y veces el alto",
                      correct: true,
                    },
                    {
                      text: "Escala x veces el borde e y veces el margen",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q81",
                  text: "Indica una característica de XML.",
                  answers: [
                    { text: "Es sensible a mayúsculas", correct: false },
                    {
                      text: "Describe el significado de los datos que contiene",
                      correct: false,
                    },
                    { text: "Es sensible a minúsculas", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q82",
                  text: "¿De qué partes consta la estructura de un documento XML?",
                  answers: [
                    {
                      text: "Prólogo, introducción y cuerpo",
                      correct: false,
                    },
                    { text: "Prólogo y cuerpo", correct: true },
                    { text: "Prólogo y declaración", correct: false },
                    { text: "Declaración y cuerpo", correct: false },
                  ],
                },
                {
                  id: "q83",
                  text: "Indica la afirmación correcta.",
                  answers: [
                    {
                      text: "Es mejor utilizar atributos que nuevos elementos",
                      correct: false,
                    },
                    {
                      text: "Sólo se puede indicar un atributo por elemento",
                      correct: false,
                    },
                    {
                      text: "No se debe abusar de los atributos",
                      correct: true,
                    },
                    {
                      text: "Los valores de los atributos no van entre comillas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q84",
                  text: "Las instrucciones de procesamiento en un documento XML están delimitadas por",
                  answers: [
                    { text: "</ y />", correct: false },
                    { text: "<? y /?>", correct: false },
                    { text: "<¿ y /¿>", correct: false },
                    { text: "<? y ?>", correct: true },
                  ],
                },
                {
                  id: "q85",
                  text: "Indica una forma de validar un documento XML.",
                  answers: [
                    { text: "DTT", correct: false },
                    { text: "XTD", correct: false },
                    { text: "XMT", correct: false },
                    { text: "DTD", correct: true },
                  ],
                },
                {
                  id: "q86",
                  text: "Cuando el documento DTD es público…",
                  answers: [
                    {
                      text: "Hay que indicarlo con SYSTEM",
                      correct: false,
                    },
                    {
                      text: "Hay que indicarlo con public",
                      correct: false,
                    },
                    {
                      text: "Hay que indicarlo con public e indicar su FPI",
                      correct: true,
                    },
                    {
                      text: "Hay que indicarlo con public e indicar su DTD",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q87",
                  text: "¿De qué tipo es el DTD “<!DOCTYPE elemento raiz SYSTEM URL>”?",
                  answers: [
                    { text: "Interno", correct: false },
                    { text: "Interno y público", correct: false },
                    { text: "Externo y público", correct: false },
                    { text: "Externo y privado", correct: true },
                  ],
                },
                {
                  id: "q88",
                  text: "Cuando la cardinalidad en un elemento se indica con el carácter *:",
                  answers: [
                    {
                      text: "El elemento aparece 0 ó 1 vez",
                      correct: false,
                    },
                    {
                      text: "El elemento aparece 0 a N veces",
                      correct: true,
                    },
                    {
                      text: "El elemento aparece 1 a N veces",
                      correct: false,
                    },
                    { text: "El elemento sólo 1 vez", correct: false },
                  ],
                },
                {
                  id: "q89",
                  text: "Cuando la cardinalidad en un elemento se indica con el carácter +:",
                  answers: [
                    {
                      text: "El elemento aparece 0 ó 1 vez",
                      correct: false,
                    },
                    {
                      text: "El elemento aparece 0 a N veces",
                      correct: false,
                    },
                    {
                      text: "El elemento aparece 1 a N veces",
                      correct: true,
                    },
                    { text: "El elemento sólo 1 vez", correct: false },
                  ],
                },
                {
                  id: "q90",
                  text: "¿Cómo se representan los atributos en DTD?",
                  answers: [
                    { text: "<ATTLIST>", correct: false },
                    { text: "<!ATTLIST>", correct: true },
                    { text: "<LISTATT>", correct: false },
                    { text: "<ATTRIB>", correct: false },
                  ],
                },
                {
                  id: "q91",
                  text: "Las marcas se suelen representar con diferentes caracteres, pero ¿cuáles son las más usuales?",
                  answers: [
                    { text: "{marca}", correct: false },
                    { text: "[marca]", correct: false },
                    { text: "<marca>", correct: true },
                  ],
                },
                {
                  id: "q92",
                  text: "¿Con qué palabra reservada se indica el tipo de codificación y en qué parte en un documento XML?",
                  answers: [
                    {
                      text: "Con la palabra reservada encoding y en el cuerpo",
                      correct: false,
                    },
                    {
                      text: "Con la palabra reservada encoding y en el prólogo",
                      correct: true,
                    },
                    {
                      text: "Con la palabra reservada code y en el prólogo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q93",
                  text: "¿Para qué se utiliza el atributo alt en las imágenes que pueda incluir en mi página web?",
                  answers: [
                    {
                      text: "Para decir donde se encuentra la imagen",
                      correct: false,
                    },
                    {
                      text: "Para indicar el tamaño de la imagen",
                      correct: false,
                    },
                    {
                      text: "Para asociar un texto a la imagen y mostrarlo si hay problemas de visualización",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q94",
                  text: 'En el siguiente código HTML, ¿qué textos indican el valor del atributo y del contenido? <a href="www.google.com">Pulsa este enlace</a>',
                  answers: [
                    {
                      text: "El valor del contenido es «www.google.com» y el valor del atributo es «Pulsa este enlace».",
                      correct: false,
                    },
                    {
                      text: "El valor del atributo es «www.google.com» y el contenido «Pulsa este enlace».",
                      correct: true,
                    },
                    {
                      text: "El valor del contenido es «href» y el valor del atributo es «Pulsa este enlace».",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q95",
                  text: "¿Para qué se utiliza la etiqueta link dentro de las etiquetas <head></head>?",
                  answers: [
                    {
                      text: "Para indicar el tipo de caracteres usado en el documento",
                      correct: false,
                    },
                    {
                      text: "Para hacer referencia a un fichero externo de estilos CSS",
                      correct: true,
                    },
                    {
                      text: "Para indicar las palabras clave del documento",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q96",
                  text: "¿Qué etiqueta nos permite agrupar otros elementos HTML en un grupo superior?",
                  answers: [
                    { text: "<div>", correct: true },
                    { text: "<p>", correct: false },
                    { text: "<hr>", correct: false },
                  ],
                },
                {
                  id: "q97",
                  text: "La etiqueta <___________> permite incluir un texto ‘largo’ que a su vez puede contener varios párrafos o incluso otras etiquetas",
                  answers: [{ text: "Blockquote", correct: true }],
                },
                {
                  id: "q98",
                  text: "¿Qué etiqueta nos permite indicar que algo es importante y tiene significado semántico?",
                  answers: [
                    { text: "<b>", correct: false },
                    { text: "<strong>", correct: true },
                    { text: "<i>", correct: false },
                  ],
                },
                {
                  id: "q99",
                  text: "¿Qué valor del atributo target nos permite abrir un enlace en una pestaña nueva?",
                  answers: [
                    { text: "_self", correct: false },
                    { text: "_new", correct: false },
                    { text: "_blank", correct: true },
                  ],
                },
                {
                  id: "q100",
                  text: "¿Qué etiqueta se usa para crear listas ordenadas?",
                  answers: [
                    { text: "<ol>", correct: true },
                    { text: "<ul>", correct: false },
                    { text: "<dl>", correct: false },
                  ],
                },
                {
                  id: "q101",
                  text: "¿Cuál es la etiqueta para crear filas en las tablas?",
                  answers: [
                    { text: "<th>", correct: false },
                    { text: "<tr>", correct: true },
                    { text: "<td>", correct: false },
                  ],
                },
                {
                  id: "q102",
                  text: "¿Con qué método se envían los datos introducidos en el formulario en la propia URL que se muestra en el navegador?",
                  answers: [
                    { text: "get", correct: true },
                    { text: "post", correct: false },
                    {
                      text: "En ambos métodos se envía en la url",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q103",
                  text: "¿Qué etiqueta hay que incluir en una lista despegable para indicar los elementos a listar?",
                  answers: [
                    { text: "<list>", correct: false },
                    { text: "<select>", correct: false },
                    { text: "<option>", correct: true },
                  ],
                },
                {
                  id: "q104",
                  text: "¿Dónde puede estar incluida la etiqueta <nav>?",
                  answers: [
                    { text: "En el <header>", correct: false },
                    { text: "En el <footer>", correct: false },
                    { text: "Las dos son correctas", correct: true },
                  ],
                },
                {
                  id: "q105",
                  text: "¿Qué controlamos con el atributo step?",
                  answers: [
                    {
                      text: "El valor máximo de un valor numérico",
                      correct: false,
                    },
                    { text: "El rango permitido", correct: false },
                    {
                      text: "El incremento de un valor numérico",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q106",
                  text: "Indica un formato de vídeo válido.",
                  answers: [
                    { text: "MP4", correct: false },
                    { text: "WEBM", correct: false },
                    { text: "Las dos son correctas", correct: true },
                  ],
                },
                {
                  id: "q107",
                  text: "¿Cuál es el método más adecuado para la inclusión de reglas CSS?",
                  answers: [
                    { text: "En el propio elemento HTML", correct: false },
                    { text: "En un fichero externo", correct: true },
                    {
                      text: "En el propio documento HTML entre las etiquetas <style></style>",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q108",
                  text: "¿Cuándo se indica la selección a>b, qué elementos se seleccionan?",
                  answers: [
                    {
                      text: "Solo los elementos <b> que sean hijos directos de <a>",
                      correct: true,
                    },
                    {
                      text: "Todos los elementos <b> que sean hijos de <a>",
                      correct: false,
                    },
                    {
                      text: "Los elementos <b> que sean hermanos de los elementos <a>",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q109",
                  text: "¿Qué color en formato RGB corresponde al verde puro?",
                  answers: [
                    { text: "RGB(255,255,0)", correct: false },
                    { text: "RGB(255,0,0)", correct: false },
                    { text: "RGB(0,255,0)", correct: true },
                  ],
                },
                {
                  id: "q110",
                  text: "¿Qué propiedad nos permite cambiar el color de fondo del texto?",
                  answers: [
                    { text: "color", correct: false },
                    { text: "background-color", correct: true },
                    { text: "font-color", correct: false },
                  ],
                },
                {
                  id: "q111",
                  text: "¿Qué significa empty-cells?",
                  answers: [
                    {
                      text: "Se indica la unión o no de los bordes",
                      correct: false,
                    },
                    { text: "Alineación vertical", correct: false },
                    {
                      text: "Si las celdas están vacías no se muestra el borde",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q112",
                  text: "¿Qué propiedad oculta el elemento HTML, pero sigue ocupando espacio?",
                  answers: [
                    { text: "display:none", correct: false },
                    { text: "visibility:hidden", correct: true },
                    { text: "visibility:none", correct: false },
                  ],
                },
                {
                  id: "q113",
                  text: "¿Qué valor de z-index le debo indicar a la capa 3 para que esté por encima de la capa 2, la cual tiene z-index 1?",
                  answers: [
                    { text: "0", correct: false },
                    { text: "-1", correct: false },
                    { text: "2", correct: true },
                  ],
                },
                {
                  id: "q114",
                  text: "¿Qué regla hay que seguir para poder usar una fuente externa de Google Fonts previa descarga de la fuente?",
                  answers: [
                    {
                      text: "Con un enlace de descarga usando link",
                      correct: false,
                    },
                    { text: "Con @font-face", correct: true },
                    {
                      text: "Con el uso de @font-face en el enlace de descarga",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q115",
                  text: "¿Qué propiedad indica el espacio entre columnas en las multicolumnas?",
                  answers: [
                    { text: "column-space", correct: false },
                    { text: "column-width", correct: false },
                    { text: "column-gap", correct: true },
                  ],
                },
                {
                  id: "q116",
                  text: '¿Qué indicamos cuando se incluye el atributo standalone="yes" en la declaración XML?',
                  answers: [
                    {
                      text: "Las reglas de validación están incluidas en el propio fichero XML",
                      correct: true,
                    },
                    {
                      text: "Las reglas de validación no están incluidas en el propio fichero",
                      correct: false,
                    },
                    {
                      text: "Ese atributo no se incluye en la declaración XML",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q117",
                  text: "Indica la respuesta correcta.",
                  answers: [
                    {
                      text: "Un documento bien formado es válido",
                      correct: false,
                    },
                    {
                      text: "Un documento bien formado es lo mismo que un documento válido",
                      correct: false,
                    },
                    {
                      text: "Un documento válido está bien formado",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q118",
                  text: "¿Qué valor indica que el atributo es opcional?",
                  answers: [
                    { text: "#IMPLIED", correct: true },
                    { text: "#OPTIONAL", correct: false },
                    { text: "#FIXED", correct: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "bd",
      name: "BD",
      units: [
        {
          id: "tema1",
          name: "1 Questions from tema1",
          tests: [
            {
              id: "tema1-test",
              title: "Tema 1 - Autoevaluación",
              createdOn: "2026-01-12",
              questions: [
                {
                  id: "q119",
                  text: "¿Qué tipo de archivo es un fichero que tiene extensión .exe?",
                  answers: [
                    {
                      text: "Ninguna respuesta es correcta",
                      correct: false,
                    },
                    { text: "Plano", correct: false },
                    { text: "De texto", correct: false },
                    { text: "Binario", correct: true },
                  ],
                },
                {
                  id: "q120",
                  text: "Un fichero que contiene coordenadas de poblaciones, ¿en qué categoría podría ubicarse?",
                  answers: [
                    { text: "Fichero de constantes", correct: true },
                    { text: "Fichero de maniobra", correct: false },
                    { text: "Fichero histórico", correct: false },
                    { text: "Fichero maestro", correct: false },
                  ],
                },
                {
                  id: "q121",
                  text: "Los ficheros que para acceder a un determinado registro requieren recorrer todos los datos previos son",
                  answers: [
                    { text: "Acceso directo", correct: false },
                    { text: "Indexados", correct: false },
                    { text: "Secuenciales", correct: true },
                    {
                      text: "No se corresponde con un fichero",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q122",
                  text: "Si clasificamos los ficheros según su uso, estos pueden ser",
                  answers: [
                    { text: "Permanentes y temporales", correct: true },
                    {
                      text: "De acceso directo e indexados",
                      correct: false,
                    },
                    {
                      text: "Ficheros secuenciales e indexados",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q123",
                  text: "Un fichero con extensión .java, ¿qué tipo de fichero es?",
                  answers: [
                    { text: "Ejecutable", correct: false },
                    { text: "Plano", correct: true },
                    { text: "Binario", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q124",
                  text: "Los ficheros que tienen los datos estructurados con una longitud fija son:",
                  answers: [
                    { text: "De acceso directo", correct: true },
                    { text: "Indexado", correct: false },
                    { text: "Secuencial", correct: false },
                    { text: "No existen ficheros así", correct: false },
                  ],
                },
                {
                  id: "q125",
                  text: "La diferencia entre los discos duros magnéticos o de estado sólido es:",
                  answers: [
                    {
                      text: "Los magnéticos tienen menor capacidad",
                      correct: false,
                    },
                    {
                      text: "Los SSD son más eficientes, pero más caros",
                      correct: true,
                    },
                    {
                      text: "Los magnéticos se utilizan para aplicaciones que requieren mayor velocidad",
                      correct: false,
                    },
                    { text: "Los SSD son menos fiables", correct: false },
                  ],
                },
                {
                  id: "q126",
                  text: "Una SAN se caracteriza por",
                  answers: [
                    {
                      text: "Ser un dispositivo centralizado",
                      correct: false,
                    },
                    {
                      text: "Ser una red de almacenamiento dedicada",
                      correct: true,
                    },
                    {
                      text: "Ser más sencilla de mantener que un NAS",
                      correct: false,
                    },
                    { text: "Ser menos potente que un NAS", correct: false },
                  ],
                },
                {
                  id: "q127",
                  text: "Sobre la tecnología de almacenamiento RAID, podemos afirmar que",
                  answers: [
                    { text: "RAID 0 tiene redundancia", correct: false },
                    {
                      text: "RAID 0 se combina típicamente con un nivel que aporte redundancia",
                      correct: true,
                    },
                    {
                      text: "RAID 0 proporciona tolerancia a fallos",
                      correct: false,
                    },
                    {
                      text: "RAID 0 aporta un rendimiento muy mejorable",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q128",
                  text: "En comparación con las bases de datos, los ficheros se caracterizan por",
                  answers: [
                    {
                      text: "Ofrecer una seguridad más robusta que las bases de datos",
                      correct: false,
                    },
                    {
                      text: "Ser más costosos que las bases de datos",
                      correct: false,
                    },
                    {
                      text: "Permitir consultar los datos de manera más rápida y eficiente que las bases de datos",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son falsas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q129",
                  text: "La fragmentación horizontal se caracteriza por",
                  answers: [
                    {
                      text: "Aplicarse directamente sobre los registros o filas",
                      correct: false,
                    },
                    {
                      text: "Ser más simple de realizar que la vertical",
                      correct: false,
                    },
                    {
                      text: "Tener una ejecución menos compleja que la vertical",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q130",
                  text: "Los objetivos de la distribución de datos son",
                  answers: [
                    {
                      text: "Flexibilidad, balanceo de carga, escalabilidad y tolerancia a fallos",
                      correct: false,
                    },
                    {
                      text: "Escalabilidad, localidad, tolerancia a fallos y balanceo de carga",
                      correct: true,
                    },
                    {
                      text: "Balanceo de carga, replicación, localidad y tolerancia a fallos",
                      correct: false,
                    },
                    {
                      text: "Replicación, flexibilidad, localidad y balanceo de carga",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q131",
                  text: "Las bases de datos NoSQL están diseñadas para",
                  answers: [
                    {
                      text: "Manejar datos con una estructura claramente definida",
                      correct: false,
                    },
                    { text: "Manejar datos distribuidos", correct: false },
                    { text: "Manejar datos centralizados", correct: false },
                    {
                      text: "Manejar datos no estructurados",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q132",
                  text: "Los aspectos básicos del diseño de una base de datos distribuida son",
                  answers: [
                    {
                      text: "Fragmentar, replicar y distribuir",
                      correct: true,
                    },
                    {
                      text: "Asignar, distribuir, referenciar y replicar",
                      correct: false,
                    },
                    {
                      text: "Fragmentar, asignar y replicar",
                      correct: false,
                    },
                    {
                      text: "Asignar, implementar, distribuir y fragmentar",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q133",
                  text: "Una de las estrategias de recuperación para las bases de datos distribuidas es",
                  answers: [
                    {
                      text: "La estructuración de los datos",
                      correct: false,
                    },
                    { text: "La replicación geográfica", correct: true },
                    { text: "La concurrencia", correct: false },
                    { text: "El cifrado de datos", correct: false },
                  ],
                },
                {
                  id: "q134",
                  text: "¿Qué elementos integran una base de datos?",
                  answers: [
                    { text: "Entidades Tablas y campos", correct: false },
                    { text: "Ordenadores y servidores", correct: false },
                    {
                      text: "Entidades, Tablas, campos y registros",
                      correct: true,
                    },
                    { text: "Archivos de diversos tipos", correct: false },
                  ],
                },
                {
                  id: "q135",
                  text: "Los enfoques para definir la arquitectura de una base de datos distribuida son",
                  answers: [
                    {
                      text: "Basado en niveles, basado en funciones y basado en datos",
                      correct: false,
                    },
                    {
                      text: "Basado en componentes, basado en funciones y basado en nodos",
                      correct: false,
                    },
                    {
                      text: "Basado en funciones, basado en componentes y basado en datos",
                      correct: true,
                    },
                    {
                      text: "Basado en componentes, basado en nodos y basado en niveles",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q136",
                  text: "El modelo de base de datos",
                  answers: [
                    {
                      text: "Es un software usado para administrar bases de datos",
                      correct: false,
                    },
                    {
                      text: "Describe cómo se almacena la información y cómo se interrelaciona",
                      correct: true,
                    },
                    {
                      text: "Es un conjunto de datos almacenados en un disco duro",
                      correct: false,
                    },
                    {
                      text: "Define un conjunto de herramientas para el análisis de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q137",
                  text: "Entre los inconvenientes de las bases de datos distribuidas se encuentran",
                  answers: [
                    { text: "Poca interoperabilidad", correct: false },
                    {
                      text: "Mayor complejidad en la implementación",
                      correct: true,
                    },
                    { text: "Mayor fragmentación", correct: false },
                    { text: "Todas las anteriores", correct: false },
                  ],
                },
                {
                  id: "q138",
                  text: "¿Qué tipo de bases de datos existen en función de dónde se ubiquen los datos?",
                  answers: [
                    { text: "Jerárquicas y en red", correct: false },
                    { text: "Centralizadas y distribuidas", correct: true },
                    {
                      text: "Jerárquicas, relacionales y orientadas a objetos",
                      correct: false,
                    },
                    {
                      text: "No existe esa clasificación en las bases de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q139",
                  text: "Entre los perfiles de los usuarios de un SGBD se encuentran",
                  answers: [
                    {
                      text: "DBA, Analistas, programadores y usuarios finales",
                      correct: true,
                    },
                    {
                      text: "Administradores, programadores y usuarios expertos",
                      correct: false,
                    },
                    {
                      text: "Un SGBD no debe tener usuarios",
                      correct: false,
                    },
                    {
                      text: "Analista, programador y diseñador gráfico",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q140",
                  text: "En un SGBD, el nivel físico se caracteriza por",
                  answers: [
                    {
                      text: "Mostrar cómo se almacenan los datos",
                      correct: true,
                    },
                    {
                      text: "Definir la estructura de los datos",
                      correct: false,
                    },
                    {
                      text: "Describir las relaciones que hay entre los datos",
                      correct: false,
                    },
                    {
                      text: "Representar la visión que el usuario tiene de los datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q141",
                  text: "Con la independencia físico-lógica se consigue",
                  answers: [
                    {
                      text: "Cambiar la lógica de la base de datos",
                      correct: false,
                    },
                    {
                      text: "Modificar los usuarios independientemente de su situación",
                      correct: false,
                    },
                    {
                      text: "Representar los datos según lo que necesite cada usuario",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q142",
                  text: "Entre las funciones y objetivos de un SGBD se encuentra la de",
                  answers: [
                    {
                      text: "Consultar, almacenar y manipular datos",
                      correct: false,
                    },
                    {
                      text: "Garantizar la integridad de los datos",
                      correct: false,
                    },
                    {
                      text: "Posibilitar la migración del sistema a otras máquinas",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q143",
                  text: "Algunas ventajas de utilizar SGBD frente a los ficheros clásicos son",
                  answers: [
                    {
                      text: "Seguridad mejorada y baja concurrencia",
                      correct: false,
                    },
                    {
                      text: "Baja concurrencia y acceso más sencillo a los datos",
                      correct: false,
                    },
                    {
                      text: "Seguridad mejorada y acceso más sencillo a los datos",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q144",
                  text: "En un SGBD, los diccionarios de datos contienen",
                  answers: [
                    {
                      text: "Información sobre las herramientas que facilitan la administración",
                      correct: false,
                    },
                    {
                      text: "El significado de las instrucciones que se le pueden dar al sistema",
                      correct: false,
                    },
                    {
                      text: "Metadatos, es decir, información sobre los datos y su estructura",
                      correct: true,
                    },
                    {
                      text: "Definiciones sobre los lenguajes de programación a utilizar",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q145",
                  text: "Según su tamaño, los SGBD se pueden clasificar en",
                  answers: [
                    {
                      text: "Jerárquicos, relacionales, en red",
                      correct: false,
                    },
                    {
                      text: "Ligeros y de alto rendimiento",
                      correct: true,
                    },
                    {
                      text: "SGBD monocapa, bicapa y multicapa",
                      correct: false,
                    },
                    { text: "Centralizados o distribuidos", correct: false },
                  ],
                },
                {
                  id: "q146",
                  text: "Entre los componentes de un SGBD está",
                  answers: [
                    { text: "Diccionario de datos", correct: false },
                    {
                      text: "Herramientas de la base de datos",
                      correct: false,
                    },
                    { text: "Entorno gráfico", correct: false },
                    { text: "Todas las anteriores", correct: true },
                  ],
                },
                {
                  id: "q147",
                  text: "El lenguaje DCL permite",
                  answers: [
                    {
                      text: "Definir la estructura de la base de datos",
                      correct: false,
                    },
                    {
                      text: "Controlar los permisos de acceso a los datos almacenados",
                      correct: true,
                    },
                    {
                      text: "Gestionar las transacciones para asegurar operaciones seguras",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: false },
                  ],
                },
                {
                  id: "q148",
                  text: "Una correcta gestión de las bases de datos distribuidas debe garantizar",
                  answers: [
                    {
                      text: "Transparencia a nivel de red",
                      correct: false,
                    },
                    {
                      text: "Transparencia de fragmentación",
                      correct: false,
                    },
                    {
                      text: "Transparencia de replicación",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q149",
                  text: "El modelo entidad-relación es",
                  answers: [
                    {
                      text: "Un programa que puede contener entidades, atributos y relaciones",
                      correct: false,
                    },
                    {
                      text: "Un sistema relacional característico de las bases de datos",
                      correct: false,
                    },
                    {
                      text: "Una herramienta utilizada para crear esquemas conceptuales de bases de datos",
                      correct: true,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q150",
                  text: "La simbología en el modelo entidad–relación se basa en el uso de",
                  answers: [
                    { text: "Cuadrados y elipses", correct: false },
                    {
                      text: "Rectángulos, rombos, elipses y líneas",
                      correct: true,
                    },
                    {
                      text: "Rectángulos, rombos y elipses",
                      correct: false,
                    },
                    { text: "Cuadrados, círculos y líneas", correct: false },
                  ],
                },
                {
                  id: "q151",
                  text: "La fase de diseño físico de la base de datos es",
                  answers: [
                    {
                      text: "Donde se selecciona el tipo de base de datos a usar",
                      correct: false,
                    },
                    { text: "Donde se selecciona el SGBD", correct: false },
                    {
                      text: "Donde se elabora el esquema conceptual",
                      correct: false,
                    },
                    {
                      text: "Donde se implementa la base de datos en el SGBD",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q152",
                  text: 'Un "tipo de entidad" es',
                  answers: [
                    {
                      text: "Un conjunto de entidades que comparten las mismas propiedades o atributos",
                      correct: true,
                    },
                    {
                      text: "Un conjunto de entidades de diferentes tipos, sin importar sus atributos",
                      correct: false,
                    },
                    {
                      text: "Un conjunto de entidades con distintas propiedades",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q153",
                  text: "Las relaciones reflexivas",
                  answers: [
                    {
                      text: "Vinculan n entidades entre sí",
                      correct: false,
                    },
                    {
                      text: "Relacionan dos ocurrencias de la misma entidad",
                      correct: true,
                    },
                    {
                      text: "Asocian dos entidades entre sí",
                      correct: false,
                    },
                    {
                      text: "Relacionan las mismas entidades",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q154",
                  text: "Los modelos lógicos se dividen en",
                  answers: [
                    { text: "Conceptuales y globales", correct: false },
                    {
                      text: "Conceptuales y convencionales",
                      correct: true,
                    },
                    {
                      text: "Externos, Globales e Internos",
                      correct: false,
                    },
                    { text: "Externos y convencionales", correct: false },
                  ],
                },
                {
                  id: "q155",
                  text: "¿Cuál de los siguientes casos es una entidad?",
                  answers: [
                    { text: "El color azul de un coche", correct: false },
                    {
                      text: "Un cliente con id_cliente nº 10",
                      correct: true,
                    },
                    {
                      text: "La población en la que reside un cliente",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: false },
                  ],
                },
                {
                  id: "q156",
                  text: "Las entidades fuertes se caracterizan por",
                  answers: [
                    {
                      text: "Representarse por un rectángulo con doble línea",
                      correct: false,
                    },
                    {
                      text: "Depender de la existencia de otras entidades",
                      correct: false,
                    },
                    {
                      text: "No depender de la existencia de otras entidades",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q157",
                  text: "Para una entidad PROFESORES, posibles ejemplos de atributos serían",
                  answers: [
                    {
                      text: "Esta entidad no puede contener atributos",
                      correct: false,
                    },
                    {
                      text: "Nombre, apellido, DNI, asignaturas",
                      correct: true,
                    },
                    {
                      text: "Colegio, clases, asignaturas, centro educativo",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q158",
                  text: "Los atributos obligatorios en una entidad",
                  answers: [
                    { text: "Pueden ser un campo vacío", correct: false },
                    {
                      text: "Deben tener un valor definido",
                      correct: true,
                    },
                    {
                      text: "Pueden estar definidos o no, según el caso",
                      correct: false,
                    },
                    {
                      text: "No suelen utilizarse habitualmente",
                      correct: false,
                    },
                  ],
                },

                {
                  id: "q159",
                  text: "El modelo Entidad – Relación Extendido se emplea para",
                  answers: [
                    {
                      text: "Representar una base de datos básica",
                      correct: false,
                    },
                    {
                      text: "Representar gráficamente una base de datos relacional extendida",
                      correct: false,
                    },
                    {
                      text: "Resolver problemas que requieren una representación o modelado más complejos",
                      correct: true,
                    },
                    {
                      text: "Resolver problemas más básicos que el Entidad-Relación",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q160",
                  text: "En una restricción de exclusividad",
                  answers: [
                    {
                      text: "Cada ocurrencia de la entidad solo puede vincularse a una de las relaciones",
                      correct: true,
                    },
                    {
                      text: "La participación en una relación obliga automáticamente a la participación en otra",
                      correct: false,
                    },
                    {
                      text: "Se representa por una línea discontinua terminada en una flecha",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q161",
                  text: "Una restricción de exclusión",
                  answers: [
                    {
                      text: "Se representa mediante una línea discontinua terminada en flecha",
                      correct: false,
                    },
                    {
                      text: "Se emplea cuando una entidad está implicada en dos o más relaciones",
                      correct: false,
                    },
                    {
                      text: "Se representa uniendo ambas relaciones mediante una línea discontinua",
                      correct: true,
                    },
                    {
                      text: "Ocurre cuando dos ocurrencias sólo pueden usar una relación para vincularse",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q162",
                  text: "Una restricción de inclusión",
                  answers: [
                    {
                      text: "Se representa por una línea discontinua",
                      correct: false,
                    },
                    {
                      text: "Se representa con una flecha discontinua",
                      correct: true,
                    },
                    {
                      text: "Ocurre cuando dos ocurrencias sólo pueden usar una relación para vincularse",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q163",
                  text: "Las jerarquías se fundamentan en los conceptos de",
                  answers: [
                    {
                      text: "Generalización y especialización",
                      correct: false,
                    },
                    { text: "Generalización y herencia", correct: false },
                    {
                      text: "Especialización y jerarquías",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: true },
                  ],
                },
                {
                  id: "q164",
                  text: "Una relación de generalización",
                  answers: [
                    {
                      text: "Se representa con un triángulo",
                      correct: true,
                    },
                    { text: "Se representa con un rombo", correct: false },
                    {
                      text: "Se representa con un arco junto a un triángulo",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q165",
                  text: "Los tipos de especialización son",
                  answers: [
                    { text: "Exclusiva e inclusiva", correct: false },
                    { text: "Superclase y subclase", correct: false },
                    {
                      text: "Exclusiva, inclusiva, total y parcial",
                      correct: true,
                    },
                    { text: "De exclusión y de inclusión", correct: false },
                  ],
                },
                {
                  id: "q166",
                  text: "La técnica de agregación",
                  answers: [
                    {
                      text: "No es una extensión del modelo Entidad-Relación Extendido",
                      correct: false,
                    },
                    {
                      text: "Facilita la modelación de relaciones entre entidades",
                      correct: false,
                    },
                    {
                      text: "Facilita la modelación de relaciones entre relaciones",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q167",
                  text: "Un tipo de agregación es",
                  answers: [
                    { text: "Compuesto / Composición", correct: false },
                    { text: "Parcial", correct: false },
                    { text: "Miembro / Colección", correct: true },
                    { text: "Colección / Componente", correct: false },
                  ],
                },
                {
                  id: "q168",
                  text: "La especialización total se representa con",
                  answers: [
                    { text: "Un arco junto al triángulo", correct: false },
                    {
                      text: "Un triángulo, sin símbolos adicionales",
                      correct: false,
                    },
                    {
                      text: "Un círculo encima del triángulo",
                      correct: true,
                    },
                    { text: "Una flecha discontinua", correct: false },
                  ],
                },
                {
                  id: "q169",
                  text: "Un diagrama E/R debe cumplir las siguientes propiedades (entre otras)",
                  answers: [
                    {
                      text: "Contenido, consistencia y sencillez",
                      correct: false,
                    },
                    { text: "Escalabilidad e integridad", correct: false },
                    {
                      text: "Corrección, dinamismo y legibilidad",
                      correct: false,
                    },
                    { text: "Escalabilidad y corrección", correct: true },
                  ],
                },
                {
                  id: "q170",
                  text: "En el modelo relacional, cada tabla se puede considerar como un/una:",
                  answers: [
                    { text: "Atributo", correct: false },
                    { text: "Clave primaria", correct: false },
                    { text: "Relación", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q171",
                  text: "En el modelo relacional, los atributos se corresponden con:",
                  answers: [
                    { text: "Columnas", correct: true },
                    { text: "Tablas", correct: false },
                    { text: "Claves primarias", correct: false },
                    { text: "Filas", correct: false },
                  ],
                },
                {
                  id: "q172",
                  text: "El grado de una tabla especifica",
                  answers: [
                    {
                      text: "Su tamaño, pero no la cantidad de columnas",
                      correct: false,
                    },
                    {
                      text: "Las columnas, pero no el número de tuplas",
                      correct: false,
                    },
                    {
                      text: "Su tamaño y la cantidad de columnas",
                      correct: true,
                    },
                    {
                      text: "Su tamaño y el número de tuplas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q173",
                  text: "El número de filas que la tabla puede contener se llama",
                  answers: [
                    { text: "Cardinalidad", correct: true },
                    { text: "Tupla", correct: false },
                    { text: "Grado", correct: false },
                    { text: "Campo", correct: false },
                  ],
                },
                {
                  id: "q174",
                  text: "El dominio de valores",
                  answers: [
                    {
                      text: "Define los valores que se pueden utilizar en cada atributo",
                      correct: true,
                    },
                    {
                      text: "No se debe definir en el proceso de diseño",
                      correct: false,
                    },
                    {
                      text: "Define los valores que se pueden utilizar en cada entidad",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q175",
                  text: "La clave primaria es",
                  answers: [
                    {
                      text: "La seleccionada entre las claves candidatas como identificador de la tupla",
                      correct: true,
                    },
                    {
                      text: "Un atributo que distingue de manera única una tupla",
                      correct: false,
                    },
                    {
                      text: "Un atributo de una tupla cuyo valor está relacionado con un atributo de otra tupla",
                      correct: false,
                    },
                    {
                      text: "La empleada para establecer relaciones entre tablas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q176",
                  text: "Like y between son operadores",
                  answers: [
                    { text: "De comparación", correct: false },
                    { text: "Lógicos", correct: true },
                    { text: "De similitud", correct: false },
                    { text: "De inserción", correct: false },
                  ],
                },
                {
                  id: "q177",
                  text: "La integridad de entidad establece que",
                  answers: [
                    {
                      text: "Todas las tablas de una base de datos relacional deben tener una clave primaria",
                      correct: false,
                    },
                    {
                      text: "El valor de la clave primaria para cada una de las tuplas no puede ser nulo",
                      correct: false,
                    },
                    {
                      text: "Cada valor de la clave primaria debe ser distinto",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q178",
                  text: "Algunas de las reglas para mantener la integridad referencial son:",
                  answers: [
                    { text: "SET NULL y Actualización", correct: false },
                    {
                      text: "RESTRICT e Inserción en cascada",
                      correct: false,
                    },
                    {
                      text: "Eliminación en cascada y UPDATE",
                      correct: false,
                    },
                    {
                      text: "Actualización en cascada y SET NULL",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q179",
                  text: "Para transformar un diagrama del modelo E/R al modelo relacional, debemos seguir una serie de pasos como",
                  answers: [
                    {
                      text: "La transformación de entidades, de relaciones y la normalización de todas ellas",
                      correct: true,
                    },
                    {
                      text: "Añadir el identificador correspondiente de la entidad fuerte y de la entidad débil asociada",
                      correct: false,
                    },
                    {
                      text: "La transformación de tablas, entidades, claves y la normalización de todas ellas",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q180",
                  text: "Para transformar las entidades débiles al modelo relacional es necesario",
                  answers: [
                    {
                      text: "Añadir un campo con el identificador de la entidad fuerte asociada",
                      correct: true,
                    },
                    {
                      text: "Añadir un identificador cualquiera",
                      correct: false,
                    },
                    {
                      text: "Crear una tabla asociada a cada atributo de la entidad débil",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q181",
                  text: "Para transformar las relaciones 1:1 al modelo relacional",
                  answers: [
                    { text: "Existe una sola forma", correct: false },
                    { text: "Existen varias formas", correct: true },
                    { text: "Se debe crear una tabla", correct: false },
                    {
                      text: "Sería necesario únicamente añadir el identificador de la entidad fuerte",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q182",
                  text: "Las generalizaciones y especializaciones pueden transformarse al modelo relacional",
                  answers: [
                    { text: "En dos pasos", correct: false },
                    {
                      text: "En caso de que la especialización sea exclusiva, no se podrá transformar",
                      correct: false,
                    },
                    { text: "En cuatro pasos", correct: false },
                    { text: "A través de cuatro vías", correct: true },
                  ],
                },
                {
                  id: "q183",
                  text: "Para cumplir la tercera forma normal",
                  answers: [
                    {
                      text: "Se debe cumplir también la forma de Boyce - Codd",
                      correct: false,
                    },
                    {
                      text: "No pueden existir atributos que dependan de los atributos que no son clave",
                      correct: true,
                    },
                    {
                      text: "No es necesario haber cumplido antes la primera forma normal",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q184",
                  text: "Para cumplir la forma normal de Boyce – Codd",
                  answers: [
                    {
                      text: "Se debe cumplir FN3 y, además, que todo atributo que no forme parte de una clave candidata dependa de una clave candidata",
                      correct: true,
                    },
                    {
                      text: "Se debe cumplir FN3 y, además, que todo atributo que forme parte de una clave candidata dependa de una clave primaria",
                      correct: false,
                    },
                    {
                      text: "Se debe cumplir FN3 y, además, que todo atributo compuesto sea clave candidata",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q185",
                  text: "¿La transformación de qué relaciones consiste en la creación de una tabla donde se almacenarán las claves primarias de las entidades relacionadas?",
                  answers: [
                    { text: "1:N", correct: false },
                    { text: "0,0423611111111111", correct: false },
                    { text: "N:1", correct: false },
                    { text: "N:M", correct: true },
                  ],
                },
                {
                  id: "q186",
                  text: "El proceso de diseño de una base de datos debe respetar una serie de estándares conocidos como",
                  answers: [
                    { text: "Normalización", correct: true },
                    { text: "Dependencias funcionales", correct: false },
                    { text: "Estandarización", correct: false },
                    { text: "Estándares de diseño", correct: false },
                  ],
                },
                {
                  id: "q187",
                  text: "El procedimiento de normalización está formado por varias etapas secuenciales, llamadas",
                  answers: [
                    { text: "Etapas clave", correct: false },
                    { text: "Formas normales", correct: true },
                    { text: "Formas secuenciales", correct: false },
                    { text: "Formas clave", correct: false },
                  ],
                },
                {
                  id: "q188",
                  text: "Una dependencia funcional describe cómo un conjunto de atributos en una tabla",
                  answers: [
                    {
                      text: "Determina de manera única a otro conjunto de atributos dentro de la misma tabla",
                      correct: true,
                    },
                    {
                      text: "Define las claves externas de otra tabla de la que dependen funcionalmente",
                      correct: false,
                    },
                    {
                      text: "Describe las operaciones permitidas en la tabla",
                      correct: false,
                    },
                    {
                      text: "Indica la relación entre diferentes tablas de la base de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q189",
                  text: "Mediante el comando DROP podemos",
                  answers: [
                    { text: "Modificar una tabla", correct: false },
                    { text: "Eliminar una tabla", correct: true },
                    {
                      text: "Eliminar el contenido de una tabla",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q190",
                  text: "El lenguaje DML",
                  answers: [
                    { text: "Permite manipular los datos", correct: true },
                    {
                      text: "Permite controlar los permisos de acceso a los datos",
                      correct: false,
                    },
                    {
                      text: "Permite manejar los roles y privilegios de los usuarios",
                      correct: false,
                    },
                    {
                      text: "Permite controlar el ciclo de vida de las transacciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q191",
                  text: "El lenguaje DDL",
                  answers: [
                    {
                      text: "Permite la creación, modificación y eliminación de elementos de la base de datos",
                      correct: true,
                    },
                    {
                      text: "Permite gestionar los permisos de los usuarios",
                      correct: false,
                    },
                    {
                      text: "Permite dar roles y privilegios a usuarios",
                      correct: false,
                    },
                    {
                      text: "Permite controlar los permisos de acceso a los datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q192",
                  text: "La restricción NOT NULL",
                  answers: [
                    {
                      text: "Garantiza que una columna no tenga valores NOT NULL",
                      correct: false,
                    },
                    {
                      text: "Se indica que el campo por defecto es NULL",
                      correct: false,
                    },
                    {
                      text: "Garantiza que el campo siempre debe tener un valor",
                      correct: true,
                    },
                    { text: "Esa restricción no existe", correct: false },
                  ],
                },
                {
                  id: "q193",
                  text: "¿Cuál sería el objetivo de esta instrucción? ALTER TABLE ALMACEN MODIFY (Coste NUMBER (5) CHECK (Coste BETWEEN 1 AND 10000));",
                  answers: [
                    {
                      text: "Modifica el campo Coste para que tenga un valor aleatorio entre 1 y 10.000",
                      correct: false,
                    },
                    {
                      text: "Modifica la tabla ALMACEN para que tenga un campo Coste igual a 5",
                      correct: false,
                    },
                    {
                      text: "Modifica la tabla ALMACEN para que el campo Coste tenga un valor entre 1 y 10.000",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q194",
                  text: "¿Qué conseguiremos ejecutando esta instrucción?: CREATE TABLE ALUMNOS (Nombre VARCHAR2 (50) PRIMARY KEY, Edad DEFAULT 15);",
                  answers: [
                    {
                      text: "Modifica la tabla ALUMNOS y se crea la columna Nombre y Edad",
                      correct: false,
                    },
                    {
                      text: "Sobre la tabla ALUMNOS ya creada se fija Nombre como clave primaria",
                      correct: false,
                    },
                    {
                      text: "Se crea la tabla ALUMNOS con clave primaria Nombre y campo Edad por defecto 15",
                      correct: true,
                    },
                    { text: "La instrucción es incorrecta", correct: false },
                  ],
                },
                {
                  id: "q195",
                  text: "La restricción UNIQUE",
                  answers: [
                    {
                      text: "Define un valor por defecto para un campo",
                      correct: false,
                    },
                    {
                      text: "Garantiza que todos los valores en los campos de una columna sean únicos",
                      correct: true,
                    },
                    {
                      text: "Implica que existan dos filas con valores idénticos",
                      correct: false,
                    },
                    {
                      text: "Impone condiciones que los valores de una columna específica deben seguir",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q196",
                  text: "Para establecer reglas que limitan el uso de ciertos datos se utilizan",
                  answers: [
                    { text: "Cláusulas", correct: false },
                    { text: "Restricciones", correct: true },
                    {
                      text: "No es posible limitar esto en una base de datos",
                      correct: false,
                    },
                    { text: "Operadores", correct: false },
                  ],
                },
                {
                  id: "q197",
                  text: "La restricción DEFAULT",
                  answers: [
                    {
                      text: "Prohíbe los valores duplicados",
                      correct: false,
                    },
                    {
                      text: "Prohíbe que un campo pueda valer NULL",
                      correct: false,
                    },
                    {
                      text: "Define un valor por defecto para un campo",
                      correct: true,
                    },
                    {
                      text: "Impone condiciones por defecto que deben cumplir los campos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q198",
                  text: "El lenguaje SQL",
                  answers: [
                    { text: "Es un lenguaje declarativo", correct: false },
                    {
                      text: "Soporta todas las funcionalidades necesarias para gestionar una base de datos",
                      correct: false,
                    },
                    {
                      text: "Es combinable con otros lenguajes como PHP, Java o Python",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q199",
                  text: "Los comandos SQL que forman parte del lenguaje DML son",
                  answers: [
                    { text: "‘SELECT’, ‘FROM’ y ‘WHERE’", correct: false },
                    {
                      text: "‘SELECT’, ‘FROM’, INSERT y DELETE",
                      correct: false,
                    },
                    {
                      text: "‘SELECT’, ‘INSERT’, ‘UPDATE’ y ‘DELETE’",
                      correct: true,
                    },
                    {
                      text: "‘SELECT’, ‘FROM’ y ‘ORDER BY’, entre otros",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q200",
                  text: "Toda consulta ‘SELECT’",
                  answers: [
                    {
                      text: "Debe tener una cláusula ‘FROM’ y una ‘WHERE’",
                      correct: false,
                    },
                    {
                      text: "Es un comando de los lenguajes DDL y DML",
                      correct: false,
                    },
                    {
                      text: "Tiene que ejecutar operaciones aritméticas",
                      correct: false,
                    },
                    {
                      text: "Debe tener una cláusula ‘FROM’",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q201",
                  text: "Mediante la sentencia SELECT * FROM biblioteca ORDER BY nombre;",
                  answers: [
                    {
                      text: "Se obtienen los datos de la biblioteca agrupados por nombre",
                      correct: false,
                    },
                    {
                      text: "Se obtienen todos los datos de la biblioteca ordenados por nombre",
                      correct: true,
                    },
                    {
                      text: "Se obtienen los nombres de los datos de la biblioteca ordenados",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q202",
                  text: "Mediante la consulta: SELECT id_producto, nombre_producto FROM productos ORDER BY id_producto;",
                  answers: [
                    {
                      text: "Se seleccionan todos los datos de la tabla productos",
                      correct: false,
                    },
                    {
                      text: "Se seleccionan datos sobre el id_producto y el nombre_producto",
                      correct: false,
                    },
                    {
                      text: "Se seleccionan el id_producto y el nombre_producto de la tabla productos y se ordenan por id_producto",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q203",
                  text: "Para indicar que el orden de una consulta se realizará de forma ascendente, se utiliza la cláusula ORDER BY acompañada de",
                  answers: [
                    { text: "ASC", correct: true },
                    { text: "DESC", correct: false },
                    { text: "ASCENDENTE", correct: false },
                    { text: "UP", correct: false },
                  ],
                },
                {
                  id: "q204",
                  text: "Las funciones de agregado",
                  answers: [
                    {
                      text: "Permiten realizar cálculos ordenados",
                      correct: false,
                    },
                    {
                      text: "Permiten realizar cálculos por grupos",
                      correct: true,
                    },
                    {
                      text: "Deben ir acompañados de un criterio de ordenación",
                      correct: false,
                    },
                    {
                      text: "Sólo admiten datos de tipo fecha",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q205",
                  text: "La función que proporciona el número total de registros de un campo es",
                  answers: [
                    { text: "AVG", correct: false },
                    { text: "COUNT", correct: true },
                    { text: "MAX", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q206",
                  text: "Mediante la sentencia: SELECT nombre, e-mail FROM alumnos WHERE nota > media;",
                  answers: [
                    {
                      text: "Se seleccionan todos los datos de los alumnos con nota superior a la media",
                      correct: false,
                    },
                    {
                      text: "Se selecciona el nombre y el e-mail de los alumnos con una nota superior a la media",
                      correct: true,
                    },
                    {
                      text: "Se seleccionan los datos de los alumnos con mayor nota",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q207",
                  text: "Mediante la sentencia: SELECT DISTINCT nombre FROM empleados;",
                  answers: [
                    {
                      text: "Se seleccionan los empleados cuyo nombre no esté duplicado",
                      correct: false,
                    },
                    {
                      text: "Se obtienen los nombres de los empleados, evitando duplicar nombres",
                      correct: true,
                    },
                    {
                      text: "Se obtienen los nombres distintos a los de los empleados",
                      correct: false,
                    },
                    {
                      text: "Se obtienen nombres de distintos empleados, incluidos los duplicados",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q208",
                  text: "En la sentencia: SELECT curso, aula, curso || ‘-‘ || aula “Nombre Clase” FROM alumnos; si ‘curso’=‘3º’ y ‘aula’=‘C’, el valor de “Nombre Clase” sería",
                  answers: [
                    { text: "3º C", correct: false },
                    { text: "Curso 3ºC", correct: false },
                    { text: "3º-C", correct: true },
                    { text: "Curso3º-AulaC", correct: false },
                  ],
                },

                {
                  id: "q209",
                  text: "Una característica importante de los operadores es",
                  answers: [
                    {
                      text: "Que pueden combinarse y utilizarse según las necesidades del usuario",
                      correct: true,
                    },
                    {
                      text: "Que se deben usar en solitario para facilitar su lectura",
                      correct: false,
                    },
                    {
                      text: "Que solo se pueden usar en el comando SELECT",
                      correct: false,
                    },
                    {
                      text: "Que solo se pueden usar en la cláusula WHERE",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q210",
                  text: "En la sentencia: “SELECT idproducto, nombre || fabricante FROM almacen WHERE precio > 100 and precio < 200;” se está utilizando un operador",
                  answers: [
                    { text: "De concatenación", correct: false },
                    { text: "Lógico", correct: false },
                    { text: "De comparación", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q211",
                  text: "¿Cuál de las siguientes funciones se corresponde con una función numérica?",
                  answers: [
                    { text: "FLOOR", correct: false },
                    { text: "CEIL", correct: false },
                    { text: "TRUNC", correct: false },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: "q212",
                  text: "La expresión CASE",
                  answers: [
                    {
                      text: "Permite convertir un tipo de dato en otro",
                      correct: false,
                    },
                    {
                      text: "Permite evaluar un conjunto de condiciones",
                      correct: true,
                    },
                    {
                      text: "Permite gestionar celdas con valores NULL",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: "q213",
                  text: "Los operadores IN, LIKE, < o > son operadores",
                  answers: [
                    { text: "Lógicos", correct: false },
                    { text: "De concatenación", correct: false },
                    { text: "Aritméticos", correct: false },
                    { text: "De comparación", correct: true },
                  ],
                },
                {
                  id: "q214",
                  text: "En la sentencia: SELECT id_empleado, nombre, apellidos FROM empleados WHERE sueldo < 2000 AND sueldo > 900; se quiere",
                  answers: [
                    {
                      text: "Seleccionar información de empleados cuyo sueldo sea mayor que 900",
                      correct: false,
                    },
                    {
                      text: "Seleccionar información de empleados cuyo sueldo esté entre 900 y 2000",
                      correct: true,
                    },
                    {
                      text: "Seleccionar información de empleados cuyo sueldo sea mayor de 2900",
                      correct: false,
                    },
                    {
                      text: "Seleccionar toda la información de empleados",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q215",
                  text: "La función ROUND",
                  answers: [
                    { text: "Redondea un número decimal", correct: true },
                    { text: "Calcula el resto de dividir", correct: false },
                    {
                      text: "Elevar un número a un exponente",
                      correct: false,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: "q216",
                  text: "La función que muestra la fecha y hora actuales es",
                  answers: [
                    { text: "SYSTIMESTAMP", correct: false },
                    { text: "SYSDATE", correct: true },
                    { text: "DATE", correct: false },
                    { text: "SYSTIME", correct: false },
                  ],
                },
                {
                  id: "q217",
                  text: "La función CAST",
                  answers: [
                    {
                      text: "Convierte una fecha a un dato tipo carácter",
                      correct: false,
                    },
                    {
                      text: "Convierte un dato tipo carácter a un dato tipo fecha",
                      correct: false,
                    },
                    {
                      text: "Convierte una expresión en un tipo de datos específico",
                      correct: true,
                    },
                    { text: "Convierte un texto en número", correct: false },
                  ],
                },
                {
                  id: "q218",
                  text: "Las funciones analíticas también se llaman",
                  answers: [
                    { text: "Funciones de gestión", correct: false },
                    { text: "Funciones de conversión", correct: false },
                    { text: "Funciones de marco", correct: false },
                    { text: "Funciones de ventana", correct: true },
                  ],
                },
                {
                  id: "q219",
                  text: "Marca cuál de las siguientes afirmaciones sería correcta:",
                  answers: [
                    {
                      text: "Para acceder a un dato en un fichero indexado, es necesario recorrer todos los datos anteriores",
                      correct: false,
                    },
                    {
                      text: "El correcto tratamiento, almacenamiento y gestión de la información es una labor esencial en cualquier organización o empresa",
                      correct: true,
                    },
                    {
                      text: "La unidad mínima de información es el byte",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q220",
                  text: "Un fichero de Word (.docx) no se puede denominar como fichero binario, ya que es un fichero de texto o plano:",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q221",
                  text: "En el diseño de un sistema de almacenamiento de la información, siempre se debe primar la capacidad y el rendimiento del mismo y, en un segundo plano, su fiabilidad y grado de recuperabilidad:",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q222",
                  text: "Las bases de datos objeto-relacionales se caracterizan principalmente por:",
                  answers: [
                    {
                      text: "Permitir a los usuarios explorar los datos desde diferentes ángulos y niveles de detalle",
                      correct: false,
                    },
                    {
                      text: "Mejorar las relacionales añadiendo ventajas de las orientadas a objetos",
                      correct: true,
                    },
                    {
                      text: "Manejar grandes volúmenes de datos no estructurados",
                      correct: false,
                    },
                    {
                      text: "Tener una jerarquía en forma de árbol, formada por nodos relacionados entre sí como padre-hijo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q223",
                  text: "¿En qué esquema de la arquitectura de referencia de una base de datos distribuida se indica cómo se distribuyen los fragmentos?",
                  answers: [
                    {
                      text: "En el esquema de fragmentación",
                      correct: false,
                    },
                    { text: "En el esquema heterogéneo", correct: false },
                    { text: "En el esquema global", correct: false },
                    { text: "En el esquema de asignación", correct: true },
                  ],
                },
                {
                  id: "q224",
                  text: "Respecto a la fragmentación híbrida, podemos decir:",
                  answers: [
                    {
                      text: "Puede ser HV (se aplica primero horizontal sobre los datos y luego vertical sobre los fragmentos)",
                      correct: false,
                    },
                    {
                      text: "Puede ser VH (se aplica primero vertical sobre los datos y luego horizontal sobre los fragmentos)",
                      correct: false,
                    },
                    {
                      text: "Puede aplicarse de forma directa",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q225",
                  text: "En un SGBD, el nivel conceptual o lógico se caracteriza por:",
                  answers: [
                    {
                      text: "Representar la visión que el usuario tiene del sistema",
                      correct: false,
                    },
                    {
                      text: "Mostrar cómo se almacenan los datos",
                      correct: false,
                    },
                    {
                      text: "Centrarse en la estructura de los datos y las relaciones que hay entre ellos",
                      correct: true,
                    },
                    {
                      text: "Depender del hardware y software utilizados",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q226",
                  text: "En un SGBD Bicapa, tanto el cliente como el SGBD y la base de datos se encuentran en el mismo equipo.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q227",
                  text: "Oracle y Firebird son SGBD relacionales comerciales.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q228",
                  text: "En el proceso de diseño de una base de datos, durante la fase de diseño lógico:",
                  answers: [
                    {
                      text: "Se selecciona el SGBD y se implementa la base de datos",
                      correct: false,
                    },
                    {
                      text: "Se selecciona el SGBD y el tipo de base de datos",
                      correct: true,
                    },
                    {
                      text: "Se elabora el esquema conceptual",
                      correct: false,
                    },
                    {
                      text: "Se elige la arquitectura hardware que se usará",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q229",
                  text: "El modelo entidad-relación es adaptable a cualquier ámbito que se quiera representar.",
                  answers: [
                    { text: "Verdadero", correct: true },
                    { text: "Falso", correct: false },
                  ],
                },
                {
                  id: "q230",
                  text: "En un diagrama entidad-relación, pueden existir relaciones duplicadas entre las mismas entidades.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q231",
                  text: "Tomando el ejemplo de un empleado que, para trabajar como arquitecto de software, debe haber realizado al menos cuatro cursos, esto se representaría en el modelo entidad-relación extendido como una:",
                  answers: [
                    { text: "Restricción de exclusión", correct: false },
                    { text: "Restricción de exclusividad", correct: false },
                    { text: "Restricción de inclusividad", correct: true },
                    {
                      text: "Este ejemplo no se podría representar en el modelo entidad-relación extendido",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q232",
                  text: "En la especialización exclusiva, es obligatorio que cada ocurrencia de la superclase pertenezca a una de las especializaciones. Se representa con un círculo encima del triángulo.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q233",
                  text: "Mediante el modelo entidad-relación extendido queremos representar los diferentes perfiles de empleados que forman el equipo de desarrollo de una empresa tecnológica: programador backend, programador frontend y team leader. Para ello, podemos usar una agregación del tipo miembro/colección.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q234",
                  text: "¿Qué propiedades debe tener un diagrama entidad-relación?",
                  answers: [
                    {
                      text: "Sencillez, corrección, contenido, legibilidad y escalabilidad",
                      correct: true,
                    },
                    {
                      text: "Corrección, contenido, legibilidad y escalabilidad",
                      correct: false,
                    },
                    {
                      text: "Sencillez, legibilidad y escalabilidad",
                      correct: false,
                    },
                    {
                      text: "Contenido, corrección, contenido e integridad",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q235",
                  text: "El dominio de valores define los valores que se pueden utilizar en cada atributo.",
                  answers: [
                    { text: "Verdadero", correct: true },
                    { text: "Falso", correct: false },
                  ],
                },
                {
                  id: "q236",
                  text: "La clave foránea se emplea para establecer relaciones entre tablas.",
                  answers: [
                    { text: "Verdadero", correct: true },
                    { text: "Falso", correct: false },
                  ],
                },
                {
                  id: "q237",
                  text: "En la transformación al modelo relacional de relaciones 1 a N (1:N) a partir del modelo entidad-relación, es necesario generar una tabla para representar la relación entre entidades.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q238",
                  text: "La siguiente tabla no cumple la segunda forma normal: VENTAS (VentaID, ClienteID, NombreCliente, Importe)",
                  answers: [
                    { text: "Verdadero", correct: true },
                    { text: "Falso", correct: false },
                  ],
                },
                {
                  id: "q239",
                  text: "Según la forma normal Boyce-Codd:",
                  answers: [
                    {
                      text: "Solo un atributo puede ser clave candidata",
                      correct: false,
                    },
                    {
                      text: "Todo atributo que no forme parte de una clave candidata debe depender de una clave candidata",
                      correct: true,
                    },
                  ],
                },
                {
                  id: "q240",
                  text: "Las cláusulas más utilizadas en SQL son:",
                  answers: [
                    {
                      text: "CREATE, ALTER, DROP, SELECT, INSERT, GRANT",
                      correct: false,
                    },
                    {
                      text: "FROM, WHERE, GROUP BY, HAVING, ORDER BY",
                      correct: true,
                    },
                    {
                      text: "AVG, COUNT, SUM, MAX, MIN, SYSDATE",
                      correct: false,
                    },
                    { text: "AND, OR, +, -, *, /", correct: false },
                  ],
                },
                {
                  id: "q241",
                  text: "La instrucción utilizada para modificar una base de datos es ‘DROP DATABASE’.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q242",
                  text: "La restricción ‘PRIMARY KEY’:",
                  answers: [
                    {
                      text: "Define una clave foránea en una tabla",
                      correct: false,
                    },
                    {
                      text: "Identifica cada registro de la tabla de manera única",
                      correct: true,
                    },
                    {
                      text: "Define un valor por defecto para un campo",
                      correct: false,
                    },
                    {
                      text: "Se emplea para imponer condiciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q243",
                  text: "Entre otras cuestiones, el comando SELECT se puede utilizar para:",
                  answers: [
                    {
                      text: "Extraer datos específicos de ciertas columnas dentro de una misma tabla",
                      correct: false,
                    },
                    {
                      text: "Recuperar filas de una tabla basándose en diversos criterios o filtros de selección",
                      correct: false,
                    },
                    {
                      text: "Agrupar los datos obtenidos según los criterios deseados",
                      correct: false,
                    },
                    { text: "Todas las anteriores", correct: true },
                  ],
                },
                {
                  id: "q244",
                  text: "Para restringir o filtrar la obtención de datos a las filas que nos interesan, empleamos:",
                  answers: [
                    { text: "La cláusula WHERE", correct: true },
                    { text: "La cláusula ORDER BY", correct: false },
                    { text: "La cláusula FROM", correct: false },
                    { text: "La cláusula FILTER BY", correct: false },
                  ],
                },
                {
                  id: "q245",
                  text: "La cláusula HAVING y la cláusula WHERE no pueden usarse en una misma sentencia.",
                  answers: [
                    { text: "Verdadero", correct: false },
                    { text: "Falso", correct: true },
                  ],
                },
                {
                  id: "q246",
                  text: "Los diferentes tipos de operadores son:",
                  answers: [
                    {
                      text: "Comparación, concatenación, operacionales y descriptivos",
                      correct: false,
                    },
                    {
                      text: "Concatenación, operacionales, aritméticos y físicos",
                      correct: false,
                    },
                    {
                      text: "Comparación, aritméticos, concatenación y lógicos",
                      correct: true,
                    },
                    {
                      text: "Lógicos, comparación, concatenación y secuenciales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q247",
                  text: "¿Cuál sería el resultado de aplicar la siguiente expresión? SUBSTR('3239372272928272',5,3) FROM DUAL;",
                  answers: [
                    { text: "32393", correct: false },
                    { text: "28272", correct: false },
                    { text: "37227", correct: false },
                    { text: "372", correct: true },
                  ],
                },
                {
                  id: "q248",
                  text: "La tabla ______ es una tabla con una sola columna y una fila, y se utiliza para realizar pruebas.",
                  answers: [
                    { text: "Default", correct: false },
                    { text: "Dual", correct: true },
                    { text: "Unique", correct: false },
                    { text: "Test", correct: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sostenibilidad",
      name: "sostenibilidad",
      units: [
        {
          id: "tema1",
          name: "1 Questions from tema1",
          tests: [
            {
              id: "tema1-test",
              title: "Tema 1 - Autoevaluación",
              createdOn: "2026-01-12",
              questions: [
                {
                  id: "q1",
                  text: "¿En qué década surgió el concepto de desarrollo sostenible?",
                  answers: [
                    {
                      text: "Años 70",
                      correct: true,
                    },
                    {
                      text: "Años 40",
                      correct: false,
                    },
                    {
                      text: "Años 30",
                      correct: false,
                    },
                    {
                      text: "Años 90",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q2",
                  text: "¿Qué informe fue encargado por el Club de Roma?",
                  answers: [
                    {
                      text: "Informe Meadows",
                      correct: true,
                    },
                    {
                      text: "Informe Brundtland",
                      correct: false,
                    },
                    {
                      text: "Informe IPCC",
                      correct: false,
                    },
                    {
                      text: "Informe ONU",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q3",
                  text: "¿Qué significan las siglas ONU?",
                  answers: [
                    {
                      text: "Organización de las Naciones Unidas",
                      correct: true,
                    },
                    {
                      text: "Organización Nacional Unificada",
                      correct: false,
                    },
                    {
                      text: "Organigrama de las Naciones Unidas",
                      correct: false,
                    },
                    {
                      text: "Organización de las Naciones Unificadas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q4",
                  text: "¿Dónde se definió el desarrollo sostenible como satisfacer las necesidades actuales sin comprometer las futuras?",
                  answers: [
                    {
                      text: "Informe Brundtland",
                      correct: true,
                    },
                    {
                      text: "Informe Meadows",
                      correct: false,
                    },
                    {
                      text: "Informe Río",
                      correct: false,
                    },
                    {
                      text: "Informe IPCC",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q5",
                  text: "¿Hasta qué año estuvieron vigentes los Objetivos de Desarrollo del Milenio (ODM)?",
                  answers: [
                    {
                      text: "2015",
                      correct: true,
                    },
                    {
                      text: "2000",
                      correct: false,
                    },
                    {
                      text: "2020",
                      correct: false,
                    },
                    {
                      text: "2030",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q6",
                  text: "¿Hasta qué año tienen vigencia los Objetivos de Desarrollo Sostenible (ODS)?",
                  answers: [
                    {
                      text: "2030",
                      correct: true,
                    },
                    {
                      text: "2015",
                      correct: false,
                    },
                    {
                      text: "2020",
                      correct: false,
                    },
                    {
                      text: "2050",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q7",
                  text: "¿Qué órgano de la ONU resuelve disputas entre países?",
                  answers: [
                    {
                      text: "Corte Internacional de Justicia",
                      correct: true,
                    },
                    {
                      text: "Asamblea General",
                      correct: false,
                    },
                    {
                      text: "Consejo de Seguridad",
                      correct: false,
                    },
                    {
                      text: "Secretaría",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q8",
                  text: "¿El Global Compact es una iniciativa enfocada principalmente a…?",
                  answers: [
                    {
                      text: "La colaboración empresarial",
                      correct: true,
                    },
                    {
                      text: "La colaboración ciudadana",
                      correct: false,
                    },
                    {
                      text: "La intermediación entre países",
                      correct: false,
                    },
                    {
                      text: "La colaboración administrativa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q9",
                  text: "¿Qué órgano de la ONU mantiene la paz y seguridad internacionales?",
                  answers: [
                    {
                      text: "Consejo de Seguridad",
                      correct: true,
                    },
                    {
                      text: "Asamblea General",
                      correct: false,
                    },
                    {
                      text: "Corte Internacional de Justicia",
                      correct: false,
                    },
                    {
                      text: "Secretaría",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q10",
                  text: "¿Cuál es el primer paso de la sostenibilidad empresarial?",
                  answers: [
                    {
                      text: "Global Compact",
                      correct: true,
                    },
                    {
                      text: "ODS",
                      correct: false,
                    },
                    {
                      text: "ODM",
                      correct: false,
                    },
                    {
                      text: "Agenda 2030",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q11",
                  text: "ODS 1 propone poner fin a la…",
                  answers: [
                    {
                      text: "Pobreza",
                      correct: true,
                    },
                    {
                      text: "Educación de mala calidad",
                      correct: false,
                    },
                    {
                      text: "Desigualdad de género",
                      correct: false,
                    },
                    {
                      text: "Guerra",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q12",
                  text: "¿A qué dimensión de las 5P pertenece el ODS 3?",
                  answers: [
                    {
                      text: "Personas",
                      correct: true,
                    },
                    {
                      text: "Prosperidad",
                      correct: false,
                    },
                    {
                      text: "Planeta",
                      correct: false,
                    },
                    {
                      text: "Paz",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q13",
                  text: "¿A qué dimensión de las 5P pertenece el ODS 10?",
                  answers: [
                    {
                      text: "Prosperidad",
                      correct: true,
                    },
                    {
                      text: "Personas",
                      correct: false,
                    },
                    {
                      text: "Planeta",
                      correct: false,
                    },
                    {
                      text: "Paz",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q14",
                  text: "¿En qué ODS se incluye la meta de duplicar la productividad agrícola?",
                  answers: [
                    {
                      text: "ODS 2 Hambre cero",
                      correct: true,
                    },
                    {
                      text: "ODS 1",
                      correct: false,
                    },
                    {
                      text: "ODS 3",
                      correct: false,
                    },
                    {
                      text: "ODS 15",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q15",
                  text: "¿En qué ODS se encuentra la meta de acceso universal al saneamiento e higiene?",
                  answers: [
                    {
                      text: "ODS 6 Agua limpia y saneamiento",
                      correct: true,
                    },
                    {
                      text: "ODS 2",
                      correct: false,
                    },
                    {
                      text: "ODS 3",
                      correct: false,
                    },
                    {
                      text: "ODS 15",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q16",
                  text: "¿A qué ODS pertenece asegurar la educación primaria y secundaria?",
                  answers: [
                    {
                      text: "ODS 4 Educación de calidad",
                      correct: true,
                    },
                    {
                      text: "ODS 1",
                      correct: false,
                    },
                    {
                      text: "ODS 5",
                      correct: false,
                    },
                    {
                      text: "ODS 17",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q17",
                  text: "¿La producción y consumo eficientes de recursos pertenece a…?",
                  answers: [
                    {
                      text: "ODS 8 Trabajo decente y crecimiento económico",
                      correct: true,
                    },
                    {
                      text: "ODS 7",
                      correct: false,
                    },
                    {
                      text: "ODS 9",
                      correct: false,
                    },
                    {
                      text: "ODS 10",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q18",
                  text: "¿Minimizar muertes por desastres naturales pertenece a…?",
                  answers: [
                    {
                      text: "ODS 11 Ciudades y comunidades sostenibles",
                      correct: true,
                    },
                    {
                      text: "ODS 13",
                      correct: false,
                    },
                    {
                      text: "ODS 14",
                      correct: false,
                    },
                    {
                      text: "ODS 15",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q19",
                  text: "¿Qué meta pertenece al ODS 13 Acción por el clima?",
                  answers: [
                    {
                      text: "Mejorar la educación respecto a la mitigación del cambio climático",
                      correct: true,
                    },
                    {
                      text: "Reducir desechos",
                      correct: false,
                    },
                    {
                      text: "Producción alimentaria sostenible",
                      correct: false,
                    },
                    {
                      text: "Reducción de pobreza",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q20",
                  text: "¿Fomentar la investigación científica e innovación pertenece a…?",
                  answers: [
                    {
                      text: "ODS 9 Industria, innovación e infraestructuras",
                      correct: true,
                    },
                    {
                      text: "ODS 3",
                      correct: false,
                    },
                    {
                      text: "ODS 7",
                      correct: false,
                    },
                    {
                      text: "ODS 10",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q21",
                  text: "A corto plazo, el principal riesgo global identificado en 2024 fue…",
                  answers: [
                    {
                      text: "Falta de información y desinformación",
                      correct: true,
                    },
                    {
                      text: "Eventos climáticos extremos",
                      correct: false,
                    },
                    {
                      text: "Inflación",
                      correct: false,
                    },
                    {
                      text: "Falta de oportunidades económicas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q22",
                  text: "El paquete Objetivo 55 se enmarca dentro de…",
                  answers: [
                    {
                      text: "El Pacto Verde Europeo",
                      correct: true,
                    },
                    {
                      text: "Agenda 2030",
                      correct: false,
                    },
                    {
                      text: "PNIEC",
                      correct: false,
                    },
                    {
                      text: "Ley de Cambio Climático",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q23",
                  text: "A largo plazo, el principal riesgo global identificado en 2022 fue…",
                  answers: [
                    {
                      text: "Fracaso de la acción climática",
                      correct: true,
                    },
                    {
                      text: "Clima extremo",
                      correct: false,
                    },
                    {
                      text: "Pérdida de biodiversidad",
                      correct: false,
                    },
                    {
                      text: "Crisis de recursos naturales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q24",
                  text: "¿Con qué elementos cuenta la ONU para afrontar los grandes retos globales?",
                  answers: [
                    {
                      text: "Paneles científicos, convenciones y Conferencia de las Partes",
                      correct: true,
                    },
                    {
                      text: "Planes nacionales",
                      correct: false,
                    },
                    {
                      text: "Leyes climáticas",
                      correct: false,
                    },
                    {
                      text: "Estrategias regionales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q25",
                  text: "La Ley de Cambio Climático y Transición Energética da cumplimiento al…",
                  answers: [
                    {
                      text: "ODS 13",
                      correct: true,
                    },
                    {
                      text: "ODS 4",
                      correct: false,
                    },
                    {
                      text: "ODS 8",
                      correct: false,
                    },
                    {
                      text: "ODS 10",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q26",
                  text: "Cuando las presiones ambientales crecen más lento que la economía se denomina…",
                  answers: [
                    {
                      text: "Desvinculación relativa",
                      correct: true,
                    },
                    {
                      text: "Desvinculación absoluta",
                      correct: false,
                    },
                    {
                      text: "Regresión",
                      correct: false,
                    },
                    {
                      text: "Inversión",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q27",
                  text: "¿En qué año pretende la UE alcanzar la neutralidad climática?",
                  answers: [
                    {
                      text: "2050",
                      correct: true,
                    },
                    {
                      text: "2030",
                      correct: false,
                    },
                    {
                      text: "2075",
                      correct: false,
                    },
                    {
                      text: "2100",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q28",
                  text: "El Pacto Verde Europeo es el camino hacia la…",
                  answers: [
                    {
                      text: "Transición ecológica",
                      correct: true,
                    },
                    {
                      text: "Colaboración ciudadana",
                      correct: false,
                    },
                    {
                      text: "Intermediación política",
                      correct: false,
                    },
                    {
                      text: "Gestión administrativa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q29",
                  text: "A largo plazo, el principal riesgo global identificado en 2024 fue…",
                  answers: [
                    {
                      text: "Eventos climáticos extremos",
                      correct: true,
                    },
                    {
                      text: "Escasez de recursos",
                      correct: false,
                    },
                    {
                      text: "Contaminación",
                      correct: false,
                    },
                    {
                      text: "Polarización social",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q30",
                  text: "La iniciativa 'De la granja a la mesa' pertenece a…",
                  answers: [
                    {
                      text: "El Pacto Verde Europeo",
                      correct: true,
                    },
                    {
                      text: "Agenda 2030",
                      correct: false,
                    },
                    {
                      text: "PNIEC",
                      correct: false,
                    },
                    {
                      text: "Ley Climática",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q31",
                  text: "Las condiciones meteorológicas de un momento concreto se llaman…",
                  answers: [
                    {
                      text: "Tiempo meteorológico",
                      correct: true,
                    },
                    {
                      text: "Clima",
                      correct: false,
                    },
                    {
                      text: "Eventos extremos",
                      correct: false,
                    },
                    {
                      text: "Episodios climáticos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q32",
                  text: "Las condiciones climatológicas frecuentes de un lugar se llaman…",
                  answers: [
                    {
                      text: "Clima",
                      correct: true,
                    },
                    {
                      text: "Tiempo",
                      correct: false,
                    },
                    {
                      text: "Eventos extremos",
                      correct: false,
                    },
                    {
                      text: "Episodios",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q33",
                  text: "¿Qué es el IPCC?",
                  answers: [
                    {
                      text: "Grupo Intergubernamental de Expertos sobre el Cambio Climático",
                      correct: true,
                    },
                    {
                      text: "CMNUCC",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q34",
                  text: "Los cambios actuales del clima se producen…",
                  answers: [
                    {
                      text: "Muy rápidamente por la actividad humana",
                      correct: true,
                    },
                    {
                      text: "De forma lenta",
                      correct: false,
                    },
                    {
                      text: "No existen cambios",
                      correct: false,
                    },
                    {
                      text: "De forma natural",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q35",
                  text: "¿Qué es la CMNUCC?",
                  answers: [
                    {
                      text: "Convención Marco de las Naciones Unidas sobre el Cambio Climático",
                      correct: true,
                    },
                    {
                      text: "IPCC",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q36",
                  text: "¿Qué acuerdo se alcanzó en la COP 3?",
                  answers: [
                    {
                      text: "Protocolo de Kyoto",
                      correct: true,
                    },
                    {
                      text: "Acuerdo de París",
                      correct: false,
                    },
                    {
                      text: "Cumbre de Doha",
                      correct: false,
                    },
                    {
                      text: "Conferencia de Glasgow",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q37",
                  text: "Las políticas climáticas deben plantear estrategias de…",
                  answers: [
                    {
                      text: "Respuesta, adaptación y mitigación",
                      correct: true,
                    },
                    {
                      text: "Alarma",
                      correct: false,
                    },
                    {
                      text: "Transformación",
                      correct: false,
                    },
                    {
                      text: "Inversión",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q38",
                  text: "El Acuerdo de París limita el aumento de temperatura a…",
                  answers: [
                    {
                      text: "Por debajo de 2ºC y preferiblemente 1,5ºC",
                      correct: true,
                    },
                    {
                      text: "1ºC",
                      correct: false,
                    },
                    {
                      text: "3ºC",
                      correct: false,
                    },
                    {
                      text: "2,5ºC",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q39",
                  text: "El periodo 2013-2020 del Protocolo de Kyoto corresponde al…",
                  answers: [
                    {
                      text: "Segundo periodo",
                      correct: true,
                    },
                    {
                      text: "Primer",
                      correct: false,
                    },
                    {
                      text: "Tercero",
                      correct: false,
                    },
                    {
                      text: "Cuarto",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q40",
                  text: "Las NDC se establecieron en el…",
                  answers: [
                    {
                      text: "Acuerdo de París",
                      correct: true,
                    },
                    {
                      text: "Protocolo de Kyoto",
                      correct: false,
                    },
                    {
                      text: "CMNUCC",
                      correct: false,
                    },
                    {
                      text: "COP 3",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q41",
                  text: "La biodiversidad según la RAE es…",
                  answers: [
                    {
                      text: "Variedad de especies animales y vegetales en su medio ambiente",
                      correct: true,
                    },
                    {
                      text: "Solo animales",
                      correct: false,
                    },
                    {
                      text: "Solo plantas",
                      correct: false,
                    },
                    {
                      text: "Solo microorganismos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q42",
                  text: "¿Qué es la CIPF?",
                  answers: [
                    {
                      text: "Convención Internacional de Protección Fitosanitaria",
                      correct: true,
                    },
                    {
                      text: "CMS",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q43",
                  text: "¿Qué es la CMS?",
                  answers: [
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias",
                      correct: true,
                    },
                    {
                      text: "CIPF",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q44",
                  text: "¿Qué es el IPBES?",
                  answers: [
                    {
                      text: "Plataforma intergubernamental sobre biodiversidad y servicios ecosistémicos",
                      correct: true,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                    {
                      text: "CMS",
                      correct: false,
                    },
                    {
                      text: "CIPF",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q45",
                  text: "¿Qué es la TRFAA?",
                  answers: [
                    {
                      text: "Tratado Internacional sobre los Recursos Fitogenéticos",
                      correct: true,
                    },
                    {
                      text: "CMS",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q46",
                  text: "El CDB trata sobre…",
                  answers: [
                    {
                      text: "Ecosistemas, especies, recursos genéticos y biotecnología",
                      correct: true,
                    },
                    {
                      text: "Clima",
                      correct: false,
                    },
                    {
                      text: "Economía",
                      correct: false,
                    },
                    {
                      text: "Energía",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q47",
                  text: "¿Qué es la CITES?",
                  answers: [
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas",
                      correct: true,
                    },
                    {
                      text: "CMS",
                      correct: false,
                    },
                    {
                      text: "CIPF",
                      correct: false,
                    },
                    {
                      text: "IPBES",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q48",
                  text: "¿Qué convención protege lugares con Valor Universal Excepcional?",
                  answers: [
                    {
                      text: "Convención del Patrimonio Mundial",
                      correct: true,
                    },
                    {
                      text: "CMS",
                      correct: false,
                    },
                    {
                      text: "CITES",
                      correct: false,
                    },
                    {
                      text: "CDB",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q49",
                  text: "El Tratado Internacional de las Semillas se refiere a…",
                  answers: [
                    {
                      text: "Recursos fitogenéticos",
                      correct: true,
                    },
                    {
                      text: "Migración animal",
                      correct: false,
                    },
                    {
                      text: "Patrimonio cultural",
                      correct: false,
                    },
                    {
                      text: "Comercio de especies",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q50",
                  text: "Número aproximado de humedales Ramsar en España…",
                  answers: [
                    {
                      text: "Cerca de 80",
                      correct: true,
                    },
                    {
                      text: "2",
                      correct: false,
                    },
                    {
                      text: "2000",
                      correct: false,
                    },
                    {
                      text: "Ninguno",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q51",
                  text: "La RAE define superpoblación como…",
                  answers: [
                    {
                      text: "Exceso de individuos en un espacio determinado",
                      correct: true,
                    },
                    {
                      text: "Consumo excesivo",
                      correct: false,
                    },
                    {
                      text: "Uso de recursos",
                      correct: false,
                    },
                    {
                      text: "Sostenibilidad",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q52",
                  text: "Según la ONU, la población mundial presenta…",
                  answers: [
                    {
                      text: "Altas tasas de fertilidad en algunas regiones",
                      correct: true,
                    },
                    {
                      text: "Crecimiento homogéneo",
                      correct: false,
                    },
                    {
                      text: "Rejuvenecimiento",
                      correct: false,
                    },
                    {
                      text: "Baja fertilidad global",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q53",
                  text: "Según la ONU, ¿qué afirmación es incorrecta?",
                  answers: [
                    {
                      text: "El crecimiento será homogéneo",
                      correct: true,
                    },
                    {
                      text: "Crecimiento heterogéneo",
                      correct: false,
                    },
                    {
                      text: "Variación regional",
                      correct: false,
                    },
                    {
                      text: "Impacto en sostenibilidad",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q54",
                  text: "Otro factor clave en la evolución poblacional es…",
                  answers: [
                    {
                      text: "Migración",
                      correct: true,
                    },
                    {
                      text: "Homogeneidad",
                      correct: false,
                    },
                    {
                      text: "Estabilidad",
                      correct: false,
                    },
                    {
                      text: "Neutralidad",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q55",
                  text: "Para lograr desarrollo sostenible con superpoblación se necesita…",
                  answers: [
                    {
                      text: "Innovación verde",
                      correct: true,
                    },
                    {
                      text: "Innovación azul",
                      correct: false,
                    },
                    {
                      text: "Innovación gris",
                      correct: false,
                    },
                    {
                      text: "Innovación pasiva",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q56",
                  text: "Según WWF, España necesitaría…",
                  answers: [
                    {
                      text: "2,8 planetas",
                      correct: true,
                    },
                    {
                      text: "1 planeta",
                      correct: false,
                    },
                    {
                      text: "50 planetas",
                      correct: false,
                    },
                    {
                      text: "Equilibrio",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q57",
                  text: "El día en que se agota el presupuesto natural se llama…",
                  answers: [
                    {
                      text: "Día de la Deuda Ecológica",
                      correct: true,
                    },
                    {
                      text: "Huella de carbono",
                      correct: false,
                    },
                    {
                      text: "Huella hídrica",
                      correct: false,
                    },
                    {
                      text: "Huella ecológica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q58",
                  text: "Indicador para gestionar emisiones climáticas…",
                  answers: [
                    {
                      text: "Huella de Carbono",
                      correct: true,
                    },
                    {
                      text: "Huella hídrica",
                      correct: false,
                    },
                    {
                      text: "Huella ecológica",
                      correct: false,
                    },
                    {
                      text: "Deuda ecológica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q59",
                  text: "Indicador del impacto en recursos hídricos…",
                  answers: [
                    {
                      text: "Huella Hídrica",
                      correct: true,
                    },
                    {
                      text: "Huella ecológica",
                      correct: false,
                    },
                    {
                      text: "Huella de carbono",
                      correct: false,
                    },
                    {
                      text: "Deuda ecológica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q60",
                  text: "Indicador del impacto humano en ecosistemas…",
                  answers: [
                    {
                      text: "Huella ecológica",
                      correct: true,
                    },
                    {
                      text: "Huella hídrica",
                      correct: false,
                    },
                    {
                      text: "Huella de carbono",
                      correct: false,
                    },
                    {
                      text: "Deuda ecológica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q61",
                  text: "Principal gas de efecto invernadero atmosférico…",
                  answers: [
                    {
                      text: "Dióxido de carbono",
                      correct: true,
                    },
                    {
                      text: "Metano",
                      correct: false,
                    },
                    {
                      text: "Ozono",
                      correct: false,
                    },
                    {
                      text: "Vapor de agua",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q62",
                  text: "Mayor fuente humana de CO2…",
                  answers: [
                    {
                      text: "Quema de combustibles fósiles",
                      correct: true,
                    },
                    {
                      text: "Volcanes",
                      correct: false,
                    },
                    {
                      text: "Respiración",
                      correct: false,
                    },
                    {
                      text: "Pantanos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q63",
                  text: "Principal origen del metano…",
                  answers: [
                    {
                      text: "Digestión de rumiantes y vertederos",
                      correct: true,
                    },
                    {
                      text: "Volcanes",
                      correct: false,
                    },
                    {
                      text: "Respiración",
                      correct: false,
                    },
                    {
                      text: "Industria química",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q64",
                  text: "¿Cuál NO es un GEI principal?",
                  answers: [
                    {
                      text: "Propano",
                      correct: true,
                    },
                    {
                      text: "Metano",
                      correct: false,
                    },
                    {
                      text: "Ozono",
                      correct: false,
                    },
                    {
                      text: "Vapor de agua",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q65",
                  text: "GEI significa…",
                  answers: [
                    {
                      text: "Gases de efecto invernadero",
                      correct: true,
                    },
                    {
                      text: "Gases efectivos",
                      correct: false,
                    },
                    {
                      text: "Ganancias térmicas",
                      correct: false,
                    },
                    {
                      text: "Gases industriales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q66",
                  text: "Actividad NO generadora de GEI…",
                  answers: [
                    {
                      text: "Residuos inorgánicos en vertederos",
                      correct: true,
                    },
                    {
                      text: "Transporte",
                      correct: false,
                    },
                    {
                      text: "Agricultura",
                      correct: false,
                    },
                    {
                      text: "Aerosoles",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q67",
                  text: "El cambio climático es…",
                  answers: [
                    {
                      text: "Una alteración duradera del clima",
                      correct: true,
                    },
                    {
                      text: "Alteración puntual",
                      correct: false,
                    },
                    {
                      text: "Calor estival",
                      correct: false,
                    },
                    {
                      text: "Evento aislado",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q68",
                  text: "Actividad GEI del sector energía…",
                  answers: [
                    {
                      text: "Transporte",
                      correct: true,
                    },
                    {
                      text: "Industria química",
                      correct: false,
                    },
                    {
                      text: "Metalurgia",
                      correct: false,
                    },
                    {
                      text: "Vertederos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q69",
                  text: "Actividad GEI del sector industrial…",
                  answers: [
                    {
                      text: "Productos químicos",
                      correct: true,
                    },
                    {
                      text: "Transporte",
                      correct: false,
                    },
                    {
                      text: "Residencial",
                      correct: false,
                    },
                    {
                      text: "Vertederos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q70",
                  text: "Actividad GEI del sector residuos…",
                  answers: [
                    {
                      text: "Lodos de depuración",
                      correct: true,
                    },
                    {
                      text: "Metalurgia",
                      correct: false,
                    },
                    {
                      text: "Química",
                      correct: false,
                    },
                    {
                      text: "Transporte",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q71",
                  text: "La identidad de Kaya incluye…",
                  answers: [
                    {
                      text: "CO2, población, PIB, intensidad energética y de emisiones",
                      correct: true,
                    },
                    {
                      text: "GEI",
                      correct: false,
                    },
                    {
                      text: "Factores sociales",
                      correct: false,
                    },
                    {
                      text: "Consumo hídrico",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q72",
                  text: "La huella de carbono se calcula con…",
                  answers: [
                    {
                      text: "Dato de actividad y factor de emisión",
                      correct: true,
                    },
                    {
                      text: "PIB",
                      correct: false,
                    },
                    {
                      text: "Intensidad energética",
                      correct: false,
                    },
                    {
                      text: "Población",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q73",
                  text: "Huella asociada a infraestructuras…",
                  answers: [
                    {
                      text: "Huella de proyecto",
                      correct: true,
                    },
                    {
                      text: "Corporativa",
                      correct: false,
                    },
                    {
                      text: "Servicio",
                      correct: false,
                    },
                    {
                      text: "Industria",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q74",
                  text: "Huella a lo largo del ciclo de vida…",
                  answers: [
                    {
                      text: "Huella de servicio",
                      correct: true,
                    },
                    {
                      text: "Proyecto",
                      correct: false,
                    },
                    {
                      text: "Industria",
                      correct: false,
                    },
                    {
                      text: "Territorio",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q75",
                  text: "Emisiones indirectas según GHG Protocol…",
                  answers: [
                    {
                      text: "Alcance 2",
                      correct: true,
                    },
                    {
                      text: "Alcance 1",
                      correct: false,
                    },
                    {
                      text: "Alcance 3",
                      correct: false,
                    },
                    {
                      text: "Alcance 0",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q76",
                  text: "Huella de un individuo…",
                  answers: [
                    {
                      text: "Huella personal",
                      correct: true,
                    },
                    {
                      text: "Corporativa",
                      correct: false,
                    },
                    {
                      text: "Industrial",
                      correct: false,
                    },
                    {
                      text: "Territorial",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q77",
                  text: "Huella de un sector productivo…",
                  answers: [
                    {
                      text: "Huella de industria",
                      correct: true,
                    },
                    {
                      text: "Proyecto",
                      correct: false,
                    },
                    {
                      text: "Servicio",
                      correct: false,
                    },
                    {
                      text: "Personal",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q78",
                  text: "Actividades prioritarias de reducción…",
                  answers: [
                    {
                      text: "Oportunidades de reducción",
                      correct: true,
                    },
                    {
                      text: "Mitigación",
                      correct: false,
                    },
                    {
                      text: "Minimización",
                      correct: false,
                    },
                    {
                      text: "Huella mayor",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q79",
                  text: "Huella de una zona concreta…",
                  answers: [
                    {
                      text: "Huella de territorio",
                      correct: true,
                    },
                    {
                      text: "Servicio",
                      correct: false,
                    },
                    {
                      text: "Proyecto",
                      correct: false,
                    },
                    {
                      text: "Industria",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q80",
                  text: "Huella del transporte marítimo…",
                  answers: [
                    {
                      text: "Huella de transporte",
                      correct: true,
                    },
                    {
                      text: "Servicio",
                      correct: false,
                    },
                    {
                      text: "Industria",
                      correct: false,
                    },
                    {
                      text: "Proyecto",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q81",
                  text: "La descarbonización es…",
                  answers: [
                    {
                      text: "Reducción de emisiones de GEI",
                      correct: true,
                    },
                    {
                      text: "Aumento de emisiones",
                      correct: false,
                    },
                    {
                      text: "Uso fósil",
                      correct: false,
                    },
                    {
                      text: "Reducción renovables",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q82",
                  text: "Net Zero requiere reducir emisiones en…",
                  answers: [
                    {
                      text: "Energía, transporte, agricultura e industria",
                      correct: true,
                    },
                    {
                      text: "Solo energía",
                      correct: false,
                    },
                    {
                      text: "Solo transporte",
                      correct: false,
                    },
                    {
                      text: "Solo industria",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q83",
                  text: "La eficiencia energética busca…",
                  answers: [
                    {
                      text: "Optimizar el consumo sin perder calidad",
                      correct: true,
                    },
                    {
                      text: "Aumentar consumo",
                      correct: false,
                    },
                    {
                      text: "Reducir calidad",
                      correct: false,
                    },
                    {
                      text: "Eliminar energía",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q84",
                  text: "Energía del viento…",
                  answers: [
                    {
                      text: "Energía eólica",
                      correct: true,
                    },
                    {
                      text: "Solar",
                      correct: false,
                    },
                    {
                      text: "Hidráulica",
                      correct: false,
                    },
                    {
                      text: "Termoeléctrica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q85",
                  text: "Energía del agua…",
                  answers: [
                    {
                      text: "Energía hidráulica",
                      correct: true,
                    },
                    {
                      text: "Eólica",
                      correct: false,
                    },
                    {
                      text: "Solar",
                      correct: false,
                    },
                    {
                      text: "Termoeléctrica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q86",
                  text: "Para lograr Net Zero se requiere…",
                  answers: [
                    {
                      text: "Reducir emisiones y aumentar absorción",
                      correct: true,
                    },
                    {
                      text: "Solo renovables",
                      correct: false,
                    },
                    {
                      text: "Solo absorción",
                      correct: false,
                    },
                    {
                      text: "Limitar actividad",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q87",
                  text: "Energía basada en silicio…",
                  answers: [
                    {
                      text: "Solar fotovoltaica",
                      correct: true,
                    },
                    {
                      text: "Termoeléctrica",
                      correct: false,
                    },
                    {
                      text: "Hidráulica",
                      correct: false,
                    },
                    {
                      text: "Biomasa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q88",
                  text: "Energía solar por concentración…",
                  answers: [
                    {
                      text: "Termoeléctrica",
                      correct: true,
                    },
                    {
                      text: "Fotovoltaica",
                      correct: false,
                    },
                    {
                      text: "Hidráulica",
                      correct: false,
                    },
                    {
                      text: "Biomasa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q89",
                  text: "Biogás y biometano son…",
                  answers: [
                    {
                      text: "Combustibles renovables",
                      correct: true,
                    },
                    {
                      text: "Solar",
                      correct: false,
                    },
                    {
                      text: "Hidráulica",
                      correct: false,
                    },
                    {
                      text: "Termoeléctrica",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q90",
                  text: "Los humedales actúan como…",
                  answers: [
                    {
                      text: "Sumideros naturales de carbono",
                      correct: true,
                    },
                    {
                      text: "Tecnologías CCS",
                      correct: false,
                    },
                    {
                      text: "Emisiones negativas",
                      correct: false,
                    },
                    {
                      text: "Carbono gris",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q91",
                  text: "La economía circular se basa en…",
                  answers: [
                    {
                      text: "Reducir, reutilizar, reciclar y regenerar",
                      correct: true,
                    },
                    {
                      text: "Reducir y desechar",
                      correct: false,
                    },
                    {
                      text: "Consumir más",
                      correct: false,
                    },
                    {
                      text: "Producción lineal",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q92",
                  text: "La economía circular implica…",
                  answers: [
                    {
                      text: "Minimizar residuos y recursos",
                      correct: true,
                    },
                    {
                      text: "Maximizar residuos",
                      correct: false,
                    },
                    {
                      text: "Consumir más",
                      correct: false,
                    },
                    {
                      text: "Usar más recursos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q93",
                  text: "El modelo económico convencional es…",
                  answers: [
                    {
                      text: "Lineal",
                      correct: true,
                    },
                    {
                      text: "Circular",
                      correct: false,
                    },
                    {
                      text: "Parabólico",
                      correct: false,
                    },
                    {
                      text: "Exponencial",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q94",
                  text: "La obsolescencia programada es propia de…",
                  answers: [
                    {
                      text: "Economía lineal",
                      correct: true,
                    },
                    {
                      text: "Circular",
                      correct: false,
                    },
                    {
                      text: "Preindustrial",
                      correct: false,
                    },
                    {
                      text: "Sostenible",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q95",
                  text: "La economía circular aporta beneficios…",
                  answers: [
                    {
                      text: "Económicos, ambientales y sociales",
                      correct: true,
                    },
                    {
                      text: "Solo económicos",
                      correct: false,
                    },
                    {
                      text: "Solo ambientales",
                      correct: false,
                    },
                    {
                      text: "Tecnológicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q96",
                  text: "ODS vinculado a reducción y reciclaje…",
                  answers: [
                    {
                      text: "ODS 12",
                      correct: true,
                    },
                    {
                      text: "ODS 1",
                      correct: false,
                    },
                    {
                      text: "ODS 10",
                      correct: false,
                    },
                    {
                      text: "ODS 11",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q97",
                  text: "Mantener productos en uso reduce…",
                  answers: [
                    {
                      text: "Residuos",
                      correct: true,
                    },
                    {
                      text: "Ecosistemas",
                      correct: false,
                    },
                    {
                      text: "Producción",
                      correct: false,
                    },
                    {
                      text: "Consumo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q98",
                  text: "Reutilizar y reciclar reduce…",
                  answers: [
                    {
                      text: "Extracción de recursos",
                      correct: true,
                    },
                    {
                      text: "Residuos",
                      correct: false,
                    },
                    {
                      text: "Energía",
                      correct: false,
                    },
                    {
                      text: "Producción",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q99",
                  text: "Plan de acción UE se centra en…",
                  answers: [
                    {
                      text: "TIC, plásticos, textiles y construcción",
                      correct: true,
                    },
                    {
                      text: "Agricultura",
                      correct: false,
                    },
                    {
                      text: "Química",
                      correct: false,
                    },
                    {
                      text: "Energía",
                      correct: false,
                    },
                  ],
                },
                {
                  id: "q100",
                  text: "Sectores con mayor crecimiento circular…",
                  answers: [
                    {
                      text: "Plásticos, moda y alimentación",
                      correct: true,
                    },
                    {
                      text: "Papel",
                      correct: false,
                    },
                    {
                      text: "Residuos",
                      correct: false,
                    },
                    {
                      text: "Energía",
                      correct: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
