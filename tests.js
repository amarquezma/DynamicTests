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
                  id: 1,
                  text: "El desarrollo sostenible es un concepto que surgió en los años…",
                  answers: [
                    { text: "40", correct: false },
                    { text: "70", correct: true },
                    { text: "30", correct: false },
                    { text: "90", correct: false },
                  ],
                },
                {
                  id: 2,
                  text: "El Club de Roma encargó a un grupo de expertos el llamado…",
                  answers: [
                    { text: "Informe Brundtland", correct: false },
                    {
                      text: "Informe sobre la interdependencia mundial",
                      correct: false,
                    },
                    { text: "Informe Meadows", correct: true },
                    {
                      text: "Informe de la Conferencia de Naciones Unidas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 3,
                  text: "¿Qué significa ONU?",
                  answers: [
                    { text: "Organización Nacional Unificada", correct: false },
                    {
                      text: "Organización de las Naciones Unidas",
                      correct: true,
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
                  id: 4,
                  text: "El concepto de desarrollo sostenible entendido como aquel que satisface las necesidades actuales sin comprometer las futuras se recogió en el…",
                  answers: [
                    { text: "Informe Brundtland", correct: true },
                    {
                      text: "Informe sobre la interdependencia mundial",
                      correct: false,
                    },
                    { text: "Informe Meadows", correct: false },
                    {
                      text: "Informe de la Conferencia de Naciones Unidas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 5,
                  text: "Los Objetivos del Milenio (ODM) eran un total de 8 y tuvieron validez hasta el año …",
                  answers: [
                    { text: "2020", correct: false },
                    { text: "2015", correct: true },
                    { text: "2000", correct: false },
                    { text: "2030", correct: false },
                  ],
                },
                {
                  id: 6,
                  text: "Los Objetivos de Desarrollo Sostenible (ODS) son un total de 17 y tienen validez hasta el año …",
                  answers: [
                    { text: "2020", correct: false },
                    { text: "2015", correct: false },
                    { text: "2000", correct: false },
                    { text: "2030", correct: true },
                  ],
                },
                {
                  id: 7,
                  text: "El órgano de las Naciones Unidas encargado de resolver disputas entre países es …",
                  answers: [
                    { text: "La Asamblea General", correct: false },
                    {
                      text: "La Corte Internacional de Justicia",
                      correct: true,
                    },
                    { text: "El Consejo de Seguridad", correct: false },
                    { text: "La Secretaría", correct: false },
                  ],
                },
                {
                  id: 8,
                  text: "El Global Compact, a través de los Diez Principios Universales, fue una iniciativa de la ONU enfocada a…",
                  answers: [
                    { text: "La colaboración ciudadana", correct: false },
                    { text: "La intermediación de los países", correct: false },
                    { text: "La colaboración empresarial", correct: true },
                    {
                      text: "Promover colaboraciones entre administraciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 9,
                  text: "El órgano de las Naciones Unidas encargado de mantener la paz y seguridad es …",
                  answers: [
                    { text: "La Asamblea General", correct: false },
                    {
                      text: "La Corte Internacional de Justicia",
                      correct: false,
                    },
                    { text: "El Consejo de Seguridad", correct: true },
                    { text: "La Secretaría", correct: false },
                  ],
                },
                {
                  id: 10,
                  text: "El primer paso de la sostenibilidad empresarial es …",
                  answers: [
                    { text: "ODS", correct: false },
                    { text: "ODM", correct: false },
                    { text: "Global Compact", correct: true },
                    { text: "Agenda 2030", correct: false },
                  ],
                },
                {
                  id: 11,
                  text: "Completa la frase: ODS 1 propone poner fin a la ________ en todas sus formas en todo el mundo",
                  answers: [
                    { text: "pobreza", correct: true },
                    { text: "educación de mala calidad", correct: false },
                    {
                      text: "desigualdad entre hombres y mujeres",
                      correct: false,
                    },
                    { text: "guerra", correct: false },
                  ],
                },
                {
                  id: 12,
                  text: "Según la rueda de las dimensiones de las 5 P´s, el ODS 3 estaría dentro de la dimensión…",
                  answers: [
                    { text: "Personas", correct: true },
                    { text: "Prosperidad", correct: false },
                    { text: "Planeta", correct: false },
                    { text: "Paz", correct: false },
                  ],
                },
                {
                  id: 13,
                  text: "Según la rueda de las dimensiones de las 5 P´s, el ODS 10 estaría dentro de la dimensión…",
                  answers: [
                    { text: "Personas", correct: false },
                    { text: "Prosperidad", correct: true },
                    { text: "Planeta", correct: false },
                    { text: "Paz", correct: false },
                  ],
                },
                {
                  id: 14,
                  text: "La meta relativa a “duplicar la productividad agrícola” se encuentra dentro del …",
                  answers: [
                    { text: "ODS2 Hambre cero", correct: true },
                    { text: "ODS1 Fin de la pobreza", correct: false },
                    { text: "ODS3 Salud y bienestar", correct: false },
                    {
                      text: "ODS15 Vida de ecosistemas terrestres",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 15,
                  text: "La meta relativa a “lograr el acceso universal a los servicios de saneamiento e higiene” se encuentra dentro del …",
                  answers: [
                    { text: "ODS2 Hambre cero", correct: false },
                    {
                      text: "ODS15 Vida de ecosistemas terrestres",
                      correct: false,
                    },
                    { text: "ODS3 Salud y bienestar", correct: false },
                    { text: "ODS6 Agua limpia y saneamiento", correct: true },
                  ],
                },
                {
                  id: 16,
                  text: "La meta “Asegurar que las niñas y niños terminen la enseñanza primaria y secundaria” pertenece a …",
                  answers: [
                    { text: "ODS5 Igualdad de género", correct: false },
                    { text: "ODS1 Fin de la pobreza", correct: false },
                    {
                      text: "ODS17 Alianzas para lograr los objetivos",
                      correct: false,
                    },
                    { text: "ODS4 Educación de calidad", correct: true },
                  ],
                },
                {
                  id: 17,
                  text: "La meta “Alcanzar una producción y consumo eficientes de recursos” pertenece a …",
                  answers: [
                    {
                      text: "ODS7 Energía asequible y no contaminante",
                      correct: false,
                    },
                    {
                      text: "ODS8 Trabajo decente y crecimiento económico",
                      correct: true,
                    },
                    {
                      text: "ODS9 Industria, innovación e infraestructura",
                      correct: false,
                    },
                    {
                      text: "ODS10 Reducción de las desigualdades",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 18,
                  text: "La meta “Minimizar las muertes debidas a desastres, incluyendo los debidos al agua” pertenece a …",
                  answers: [
                    { text: "ODS13 Acción por el clima", correct: false },
                    {
                      text: "ODS11 Ciudades y comunidades sostenibles",
                      correct: true,
                    },
                    { text: "ODS14 Vida submarina", correct: false },
                    {
                      text: "ODS15 Vida de ecosistemas terrestres",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 19,
                  text: "El ODS 13 relativo a cambio climático tiene entre sus metas …",
                  answers: [
                    {
                      text: "Mejorar la educación respecto de la mitigación del cambio climático",
                      correct: true,
                    },
                    {
                      text: "Fomentar la resiliencia de los pobres a los fenómenos relacionados con el clima",
                      correct: false,
                    },
                    {
                      text: "Asegurar la sostenibilidad de los sistemas de producción de alimentos y fortalecer la capacidad de adaptación al cambio climático",
                      correct: false,
                    },
                    {
                      text: "Reducir la generación de desechos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 20,
                  text: "La meta “Aumentar la investigación científica fomentando la innovación y aumentando el número de personas que trabajan en investigación y desarrollo” pertenece al …",
                  answers: [
                    { text: "ODS3 Salud y bienestar", correct: false },
                    {
                      text: "ODS7 Energía asequible y no contaminante",
                      correct: false,
                    },
                    {
                      text: "ODS9 Industria, innovación e infraestructuras",
                      correct: true,
                    },
                    {
                      text: "ODS10 Reducción de las desigualdades",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 21,
                  text: "A corto plazo, el primer riesgo identificado en el Informe de Riesgos Globales de 2024 fue…",
                  answers: [
                    {
                      text: "Falta de información y desinformación",
                      correct: true,
                    },
                    { text: "Eventos climáticos extremos", correct: false },
                    {
                      text: "Falta de oportunidades económicas",
                      correct: false,
                    },
                    { text: "Inflación", correct: false },
                  ],
                },
                {
                  id: 22,
                  text: "El paquete de medidas Objetivo 55 está dentro de …",
                  answers: [
                    { text: "La Agenda 2030", correct: false },
                    {
                      text: "Plan Nacional Integrado de Energía y Clima",
                      correct: false,
                    },
                    { text: "El Pacto Verde Europeo", correct: true },
                    { text: "Ley de Cambio Climático", correct: false },
                  ],
                },
                {
                  id: 23,
                  text: "A largo plazo, el primer riesgo identificado en el Informe de Riesgos Globales de 2022 fue …",
                  answers: [
                    { text: "Clima extremo", correct: false },
                    { text: "Fracaso de la acción climática", correct: true },
                    { text: "Pérdida de biodiversidad", correct: false },
                    { text: "Crisis de recursos naturales", correct: false },
                  ],
                },
                {
                  id: 24,
                  text: "Señala los elementos con los que las Naciones Unidas cuenta para hacer frente a los grandes retos …",
                  answers: [
                    {
                      text: "Panel de Científicos internacionales, Convenciones y Ley de Cambio Climático",
                      correct: false,
                    },
                    {
                      text: "Panel de Científicos internacionales y Agenda 2030",
                      correct: false,
                    },
                    {
                      text: "Plan Nacional Integrado de Energía y Clima, Convenciones y Conferencia de las Partes",
                      correct: false,
                    },
                    {
                      text: "Panel de Científicos internacionales, Convenciones y Conferencia de las Partes",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 25,
                  text: "La Ley de Cambio Climático y Transición Energética ha sido elaborada para dar cumplimiento al…",
                  answers: [
                    { text: "ODS8", correct: false },
                    { text: "ODS13", correct: true },
                    { text: "ODS4", correct: false },
                    { text: "ODS10", correct: false },
                  ],
                },
                {
                  id: 26,
                  text: "Cuando variables como el uso de recursos, la presión sobre el medio ambiente o el bienestar humano aumentan a menor ritmo que la actividad económica que los origina se llama …",
                  answers: [
                    { text: "Desvinculación absoluta", correct: false },
                    { text: "Regresión", correct: false },
                    { text: "Inversión", correct: false },
                    { text: "Desvinculación relativa", correct: true },
                  ],
                },
                {
                  id: 27,
                  text: "La Unión Europea pretende alcanzar la neutralidad climática para el año …",
                  answers: [
                    { text: "2100", correct: false },
                    { text: "2050", correct: true },
                    { text: "2030", correct: false },
                    { text: "2075", correct: false },
                  ],
                },
                {
                  id: 28,
                  text: "El Pacto Verde Europeo pretende ser el camino para la …",
                  answers: [
                    { text: "Colaboración ciudadana", correct: false },
                    { text: "Intermediación de los países", correct: false },
                    { text: "Transición ecológica", correct: true },
                    {
                      text: "Colaboración entre administraciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 29,
                  text: "A largo plazo, el primer riesgo identificado en el Informe de Riesgos Globales de 2024 fue …",
                  answers: [
                    { text: "Escasez de recursos naturales", correct: false },
                    { text: "Contaminación", correct: false },
                    { text: "Eventos climáticos extremos", correct: true },
                    { text: "Polarización social", correct: false },
                  ],
                },
                {
                  id: 30,
                  text: "La iniciativa “De campo a la mesa” está dentro de …",
                  answers: [
                    { text: "La Agenda 2030", correct: false },
                    {
                      text: "Plan Nacional Integrado de Energía y Clima",
                      correct: false,
                    },
                    { text: "El Pacto Verde Europeo", correct: true },
                    { text: "Ley de Cambio Climático", correct: false },
                  ],
                },
                {
                  id: 31,
                  text: "A las condiciones meteorológicas de un momento determinado se llama…",
                  answers: [
                    { text: "Tiempo meteorológico", correct: true },
                    { text: "Eventos climáticos extremos", correct: false },
                    { text: "Clima", correct: false },
                    { text: "Episodios climatológicos", correct: false },
                  ],
                },
                {
                  id: 32,
                  text: "A las condiciones climatológicas frecuentes de un lugar determinado se les llama…",
                  answers: [
                    { text: "Tiempo meteorológico", correct: false },
                    { text: "Eventos climáticos extremos", correct: false },
                    { text: "Clima", correct: true },
                    { text: "Episodios climatológicos", correct: false },
                  ],
                },
                {
                  id: 33,
                  text: "El IPCC es …",
                  answers: [
                    {
                      text: "Convención Marco de las Naciones Unidas sobre el Cambio Climático",
                      correct: false,
                    },
                    {
                      text: "Grupo Intergubernamental de Expertos sobre el Cambio Climático",
                      correct: true,
                    },
                    {
                      text: "Soluciones Basadas en la Naturaleza",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 34,
                  text: "Los cambios en el clima actualmente se están produciendo …",
                  answers: [
                    { text: "De manera más lenta", correct: false },
                    {
                      text: "No están produciéndose cambios en el clima",
                      correct: false,
                    },
                    {
                      text: "De forma similar a los históricos debidos a causas naturales",
                      correct: false,
                    },
                    {
                      text: "De manera muy rápida por la actividad humana",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 35,
                  text: "La CMNUCC es …",
                  answers: [
                    {
                      text: "Convención Marco de las Naciones Unidas sobre el Cambio Climático",
                      correct: true,
                    },
                    {
                      text: "Grupo Intergubernamental de Expertos sobre el Cambio Climático",
                      correct: false,
                    },
                    {
                      text: "Soluciones Basadas en la Naturaleza",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 36,
                  text: "En la COP 3 es donde se alcanzó…",
                  answers: [
                    { text: "El Acuerdo de París", correct: false },
                    { text: "La Cumbre de Doha", correct: false },
                    { text: "La Conferencia de Glasgow", correct: false },
                    { text: "El Protocolo de Kyoto", correct: true },
                  ],
                },
                {
                  id: 37,
                  text: "Las políticas enfocadas al cambio climático deben plantear estrategias de …",
                  answers: [
                    {
                      text: "Respuesta, disminución y mitigación",
                      correct: false,
                    },
                    { text: "Alarma, adaptación y mitigación", correct: false },
                    {
                      text: "Respuesta, adaptación y transformación",
                      correct: false,
                    },
                    {
                      text: "Respuesta, adaptación y mitigación",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 38,
                  text: "¿En cuánto se acordó limitar el incremento de la temperatura global en el Acuerdo de París…?",
                  answers: [
                    { text: "Por debajo de 1ºC", correct: false },
                    { text: "Por encima de 3ºC", correct: false },
                    {
                      text: "Por debajo de 2ºC y preferiblemente de 1,5ºC",
                      correct: true,
                    },
                    {
                      text: "Por debajo de 1,5ºC y preferiblemente de 2ºC",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 39,
                  text: "Para el Protocolo de Kyoto, el periodo comprendido entre 2013 y 2020 se trata del…",
                  answers: [
                    { text: "Tercer periodo", correct: false },
                    { text: "Primer periodo", correct: false },
                    { text: "Segundo periodo", correct: true },
                    { text: "Cuarto periodo", correct: false },
                  ],
                },
                {
                  id: 40,
                  text: "Las Contribuciones Determinadas a nivel nacional (NDC) fueron propuestas dentro del …",
                  answers: [
                    { text: "Protocolo de Kyoto", correct: false },
                    {
                      text: "Convención Marco de las Naciones Unidas sobre el Cambio Climático",
                      correct: false,
                    },
                    { text: "Acuerdo de París", correct: true },
                    { text: "COP 3", correct: false },
                  ],
                },
                {
                  id: 41,
                  text: "La diversidad biológica según la RAE es …",
                  answers: [
                    {
                      text: "Variedad de especies vegetales en su medio ambiente únicamente",
                      correct: false,
                    },
                    {
                      text: "Variabilidad de microorganismos en su medio ambiente",
                      correct: false,
                    },
                    {
                      text: "Variedad de especies animales en su medio ambiente únicamente",
                      correct: false,
                    },
                    {
                      text: "Variedad de especies animales y vegetales en su medio ambiente",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 42,
                  text: "La CIPF es …",
                  answers: [
                    {
                      text: "Convención Internacional de Protección Fitosanitaria",
                      correct: true,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: false,
                    },
                    {
                      text: "Comisión Ballenera Internacional",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 43,
                  text: "La CMS es …",
                  answers: [
                    {
                      text: "Convención Internacional de Protección Fitosanitaria",
                      correct: false,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: true,
                    },
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 44,
                  text: "El IPBES es …",
                  answers: [
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres",
                      correct: false,
                    },
                    {
                      text: "Convención Internacional de Protección Fitosanitaria",
                      correct: false,
                    },
                    {
                      text: "Soluciones Basadas en la Naturaleza",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 45,
                  text: "La TRFAA es …",
                  answers: [
                    {
                      text: "Tratado Internacional sobre los Recursos Fitogenéticos para la Alimentación y la Agricultura",
                      correct: true,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: false,
                    },
                    {
                      text: "Comisión Ballenera Internacional",
                      correct: false,
                    },
                    {
                      text: "Plataforma intergubernamental científico-normativa sobre biodiversidad y servicios ecosistémicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 46,
                  text: "El CDB trata aspectos tales como…",
                  answers: [
                    {
                      text: "Ecosistemas, clima, recursos genéticos y biotecnología",
                      correct: false,
                    },
                    {
                      text: "Especies, clima, recursos genéticos y biotecnología",
                      correct: false,
                    },
                    {
                      text: "Ecosistemas, clima, recursos genéticos y naturaleza",
                      correct: false,
                    },
                    {
                      text: "Ecosistemas, especies, recursos genéticos y biotecnología",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 47,
                  text: "La CITES es …",
                  answers: [
                    {
                      text: "Tratado Internacional sobre los Recursos Fitogenéticos para la Alimentación y la Agricultura",
                      correct: false,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: false,
                    },
                    {
                      text: "Comisión Ballenera Internacional",
                      correct: false,
                    },
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 48,
                  text: "La convención en la que los lugares definidos con un “Valor Universal Excepcional” deben ser conservados para las generaciones presentes y futuras es…",
                  answers: [
                    {
                      text: "Convención sobre la protección del Patrimonio Mundial, Cultural y Natural",
                      correct: true,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: false,
                    },
                    {
                      text: "Comisión Ballenera Internacional",
                      correct: false,
                    },
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 49,
                  text: "El Tratado Internacional de las Semillas se refiere a …",
                  answers: [
                    {
                      text: "Tratado Internacional sobre los Recursos Fitogenéticos para la Alimentación y la Agricultura",
                      correct: true,
                    },
                    {
                      text: "Convención sobre la Conservación de las Especies Migratorias de Animales Silvestres",
                      correct: false,
                    },
                    {
                      text: "Convención sobre la protección del Patrimonio Mundial, Cultural y Natural",
                      correct: false,
                    },
                    {
                      text: "Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 50,
                  text: "El número de humedales españoles dentro de la lista Ramsar es de …",
                  answers: [
                    { text: "Dos", correct: false },
                    { text: "Más de 2.000", correct: false },
                    { text: "Cerca de 80", correct: true },
                    { text: "Ninguno", correct: false },
                  ],
                },
                {
                  id: 51,
                  text: "La RAE define superpoblación como…",
                  answers: [
                    {
                      text: "Tendencia inmoderada a adquirir, gastar o consumir bienes, no siempre necesarios",
                      correct: false,
                    },
                    {
                      text: "Utilizar en exceso cualquier tipo de recurso",
                      correct: false,
                    },
                    {
                      text: "Exceso de individuos de una especie o de un conjunto de especies en un espacio determinado",
                      correct: true,
                    },
                    {
                      text: "Especialmente en ecología y economía, que se puede mantener durante largo tiempo sin agotar los recursos o causar grave daño al medio ambiente",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 52,
                  text: "Señala la opción correcta en cuanto a las estimaciones de las Naciones Unidas en relación a la población…",
                  answers: [
                    {
                      text: "Aumento de la población mundial de manera homogénea",
                      correct: false,
                    },
                    {
                      text: "Altas tasas de fertilidad en algunas partes del mundo",
                      correct: true,
                    },
                    {
                      text: "Alta esperanza de vida en países en vías de desarrollo",
                      correct: false,
                    },
                    {
                      text: "La población mundial está rejuveneciendo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 53,
                  text: "Señala la opción INCORRECTA, según las estimaciones de las Naciones Unidas…",
                  answers: [
                    {
                      text: "El aumento de la población mundial será de manera homogénea",
                      correct: true,
                    },
                    {
                      text: "El aumento de la población mundial será de manera heterogénea",
                      correct: false,
                    },
                    {
                      text: "La tasa de crecimiento varía de una región a otra dificultando un desarrollo sostenible",
                      correct: false,
                    },
                    {
                      text: "La tasa de crecimiento será heterogénea por regiones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 88,
                  text: "Señala la opción correcta en cuanto a las estimaciones de las Naciones Unidas en relación a la población…",
                  answers: [
                    {
                      text: "Aumento de la población mundial de manera homogénea",
                      correct: false,
                    },
                    {
                      text: "Bajas tasas de fertilidad en algunas partes del mundo",
                      correct: true,
                    },
                    {
                      text: "Alta esperanza de vida en países en vías de desarrollo",
                      correct: false,
                    },
                  ],
                },

                {
                  id: 54,
                  text: "Para alcanzar el desarrollo sostenible de la humanidad con la actual superpoblación serán necesarias medidas de …",
                  answers: [
                    { text: "Innovación verde", correct: true },
                    { text: "Innovación gris", correct: false },
                    { text: "Innovación azul", correct: false },
                    { text: "Innovación sostenible", correct: false },
                  ],
                },
                {
                  id: 55,
                  text: "Según el informe del WWF, España para afrontar su demanda de recursos naturales…",
                  answers: [
                    { text: "Se encuentra en equilibrio", correct: false },
                    { text: "Necesitaría 50 planetas", correct: false },
                    {
                      text: "Consume recursos naturales por debajo de otros países",
                      correct: false,
                    },
                    { text: "Necesitaría 2,8 planetas", correct: true },
                  ],
                },
                {
                  id: 89,
                  text: "Al día del calendario en el que la humanidad ha consumido el presupuesto de la naturaleza para ese año se llama…",
                  answers: [
                    { text: "Huella ecológica", correct: false },
                    { text: "Huella de Carbono", correct: false },
                    { text: "Huella Hídrica", correct: false },
                    { text: "Día de la Deuda Ecológica", correct: true },
                  ],
                },
                {
                  id: 90,
                  text: "El indicador que ayuda a gestionar y reducir emisiones para combatir el cambio climático se denomina…",
                  answers: [
                    { text: "Huella ecológica", correct: false },
                    { text: "Huella de Carbono", correct: true },
                    { text: "Huella Hídrica", correct: false },
                    { text: "Día de la Deuda Ecológica", correct: false },
                  ],
                },
                {
                  id: 91,
                  text: "El indicador que ayuda a comprender y gestionar el impacto del consumo humano en los recursos hídricos se denomina …",
                  answers: [
                    { text: "Huella ecológica", correct: false },
                    { text: "Huella de Carbono", correct: false },
                    { text: "Huella Hídrica", correct: true },
                    { text: "Día de la Deuda Ecológica", correct: false },
                  ],
                },
                {
                  id: 92,
                  text: "El indicador que mide el impacto del ser humano sobre los recursos naturales y los ecosistemas de la Tierra se denomina …",
                  answers: [
                    { text: "Huella ecológica", correct: true },
                    { text: "Huella de Carbono", correct: false },
                    { text: "Huella Hídrica", correct: false },
                    { text: "Día de la Deuda Ecológica", correct: false },
                  ],
                },

                {
                  id: 56,
                  text: "El principal gas de efecto invernadero debido a su influencia en las dinámicas atmosféricas es el…",
                  answers: [
                    { text: "Vapor de agua", correct: false },
                    { text: "Metano", correct: false },
                    { text: "Dióxido de carbono", correct: true },
                    { text: "Ozono", correct: false },
                  ],
                },
                {
                  id: 57,
                  text: "La actividad humana que genera más emisiones de CO2 es…",
                  answers: [
                    { text: "Erupciones volcánicas", correct: false },
                    { text: "Quema de combustibles fósiles", correct: true },
                    { text: "Respiración celular", correct: false },
                    { text: "Pantanos", correct: false },
                  ],
                },
                {
                  id: 93,
                  text: "El metano procede de…",
                  answers: [
                    { text: "Erupciones volcánicas", correct: false },
                    {
                      text: "Productos industriales y por vehículos alimentados de combustión fósil",
                      correct: false,
                    },
                    { text: "Respiración celular", correct: false },
                    {
                      text: "La digestión de rumiantes y la descomposición de residuos en vertederos principalmente",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 94,
                  text: "Señala cual NO es uno de los principales gases del efecto invernadero…",
                  answers: [
                    { text: "Ozono", correct: false },
                    { text: "Vapor de agua", correct: false },
                    { text: "Propano", correct: true },
                    { text: "Metano", correct: false },
                  ],
                },
                {
                  id: 95,
                  text: "Que son las siglas GEI",
                  answers: [
                    { text: "Gases de efecto invierno", correct: false },
                    { text: "Gases efectivos de invernaderos", correct: false },
                    { text: "Gases de efecto invernadero", correct: true },
                    { text: "Ganancias de efecto invernadero", correct: false },
                  ],
                },
                {
                  id: 96,
                  text: "Señala cuál de las siguientes actividades humanas NO es generadores de gases de efecto invernadero:",
                  answers: [
                    { text: "Uso de vehículos", correct: false },
                    {
                      text: "Agricultura y ganadería intensiva",
                      correct: false,
                    },
                    {
                      text: "Producción y utilización de aerosoles",
                      correct: false,
                    },
                    {
                      text: "Descomposición de residuos inorgánicos en vertederos",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 97,
                  text: "El cambio climático es…",
                  answers: [
                    {
                      text: "Una alteración de las condiciones climáticas, evidenciadas por cambios en los valores medios y en sus características, duradera en el tiempo.",
                      correct: true,
                    },
                    {
                      text: "Una alteración puntual de las condiciones climáticas.",
                      correct: false,
                    },
                    {
                      text: "El aumento de la temperatura en los meses estivales.",
                      correct: false,
                    },
                    {
                      text: "Una alteración de las condiciones climáticas, evidenciadas por cambios en los valores medianos y en su casuística, puntual en el tiempo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 98,
                  text: "Una actividad generadora de gases de efecto invernadero dentro del sector energía es…",
                  answers: [
                    { text: "Industria minera", correct: false },
                    { text: "Industria química", correct: false },
                    { text: "Industria metalúrgica", correct: false },
                    { text: "Transporte qV", correct: true },
                  ],
                },
                {
                  id: 99,
                  text: "Una actividad generadora de gases de efecto invernadero dentro del sector industria es …",
                  answers: [
                    {
                      text: "Transporte (aviación, marítimo, ferroviario, carretera)",
                      correct: false,
                    },
                    {
                      text: "Sectores residencial, comercial y primario",
                      correct: false,
                    },
                    { text: "Productos químicos", correct: true },
                    { text: "Vertederos", correct: false },
                  ],
                },
                {
                  id: 100,
                  text: "Una actividad generadora de gases de efecto invernadero dentro del sector residuos es …",
                  answers: [
                    { text: "Productos químicos", correct: false },
                    { text: "Industria metalúrgica", correct: false },
                    { text: "Lodos de depuración", correct: true },
                    { text: "Gestión del estiércol", correct: false },
                  ],
                },

                {
                  id: 58,
                  text: "Los términos que tiene en cuenta la expresión de la Identidad de Kaya son…",
                  answers: [
                    {
                      text: "Emisiones globales de GEI, Población mundial, PIB, Intensidad energética e Intensidad de emisión",
                      correct: false,
                    },
                    {
                      text: "Emisiones globales de CO2, Dato de actividad, PIB, Intensidad energética e Intensidad de emisión",
                      correct: false,
                    },
                    {
                      text: "Emisiones globales de GEI, Población mundial, PIB, Factor de emisión e Intensidad de emisión",
                      correct: false,
                    },
                    {
                      text: "Emisiones globales de CO2, Población mundial, PIB, Intensidad energética e Intensidad de emisión",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 59,
                  text: "Los términos que tiene en cuenta la expresión de la Huella de Carbono son…",
                  answers: [
                    {
                      text: "Dato de actividad e Intensidad energética",
                      correct: false,
                    },
                    {
                      text: "Dato de actividad y Factor de emisión",
                      correct: true,
                    },
                    {
                      text: "Emisiones globales e Intensidad de emisión",
                      correct: false,
                    },
                    {
                      text: "Emisiones globales y Factor de emisión",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 60,
                  text: "La Huella de carbono que estima las emisiones de GEI asociadas con la construcción de una carretera, un edificio o una planta de energía renovable es…",
                  answers: [
                    { text: "Corporativa", correct: false },
                    { text: "De servicio", correct: false },
                    { text: "De industria", correct: false },
                    { text: "De proyecto", correct: true },
                  ],
                },
                {
                  id: 61,
                  text: "La Huella de carbono que estima las emisiones de GEI a lo largo del ciclo de vida del producto es…",
                  answers: [
                    { text: "Corporativa", correct: false },
                    { text: "De servicio", correct: true },
                    { text: "De industria", correct: false },
                    { text: "De proyecto", correct: false },
                  ],
                },
                {
                  id: 62,
                  text: "Según el protocolo del GHG el alcance que se refiere a emisiones indirectas es…",
                  answers: [
                    { text: "Alcance 2", correct: true },
                    { text: "Alcance 0", correct: false },
                    { text: "Alcance 1", correct: false },
                    { text: "Alcance 3", correct: false },
                  ],
                },
                {
                  id: 63,
                  text: "La Huella de carbono que estima las emisiones de GEI directa e indirecta de un individuo es…",
                  answers: [
                    { text: "Corporativa", correct: false },
                    { text: "Personal", correct: true },
                    { text: "De industria", correct: false },
                    { text: "De territorio", correct: false },
                  ],
                },
                {
                  id: 64,
                  text: "La Huella de carbono que estima las emisiones de GEI de un sector productivo es…",
                  answers: [
                    { text: "Corporativa", correct: false },
                    { text: "De servicio", correct: false },
                    { text: "De industria", correct: true },
                    { text: "De proyecto", correct: false },
                  ],
                },
                {
                  id: 65,
                  text: "En el cálculo de la huella de carbono, debemos valorar las actividades que mayor huella provocan en lo que denominamos …",
                  answers: [
                    { text: "Oportunidades de reducción", correct: true },
                    { text: "Mitigación", correct: false },
                    { text: "Minimización de emisiones", correct: false },
                    { text: "Mayor huella generada", correct: false },
                  ],
                },
                {
                  id: 66,
                  text: "La Huella de carbono que estima las emisiones de GEI de una zona concreta es…",
                  answers: [
                    { text: "Corporativa", correct: false },
                    { text: "De servicio", correct: false },
                    { text: "De territorio", correct: true },
                    { text: "De proyecto", correct: false },
                  ],
                },
                {
                  id: 67,
                  text: "La Huella de carbono que estima las emisiones de GEI relativas al transporte de mercancías por barco es…",
                  answers: [
                    { text: "De industria", correct: false },
                    { text: "De servicio", correct: false },
                    { text: "De transporte", correct: true },
                    { text: "De proyecto", correct: false },
                  ],
                },
                {
                  id: 68,
                  text: "La descarbonización de la economía es…",
                  answers: [
                    {
                      text: "El aumento de emisiones de carbono y otros GEI debidos al hombre",
                      correct: false,
                    },
                    {
                      text: "La reducción del uso de tecnologías limpias",
                      correct: false,
                    },
                    {
                      text: "El aumento del uso de combustibles fósiles",
                      correct: false,
                    },
                    {
                      text: "La reducción de emisiones de carbono y otros GEI asociados a las actividades humanas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 69,
                  text: "Para alcanzar el Net Zero se deben reducir las emisiones de GEI…",
                  answers: [
                    {
                      text: "En la energía, el transporte y la agricultura únicamente",
                      correct: false,
                    },
                    {
                      text: "En la energía, el transporte, la agricultura y la industria",
                      correct: true,
                    },
                    {
                      text: "En la energía, la agricultura y la industria únicamente",
                      correct: false,
                    },
                    {
                      text: "En la industria, el transporte y la agricultura únicamente",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 70,
                  text: "Mediante la eficiencia energética se pretende…",
                  answers: [
                    {
                      text: "Aumentar el consumo de energía sin comprometer la calidad, prestaciones, productividad, seguridad, confort y protección del medio ambiente",
                      correct: false,
                    },
                    {
                      text: "Reducir el consumo de energía a pesar de disminuir la calidad, prestaciones, productividad, seguridad, confort y protección del medio ambiente",
                      correct: false,
                    },
                    {
                      text: "Aumentar el consumo de energía asegurando la protección del medio ambiente",
                      correct: false,
                    },
                    {
                      text: "Optimizar el consumo de energía sin comprometer la calidad, prestaciones, productividad, seguridad, confort y protección del medio ambiente",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 71,
                  text: "La energía que convierte la energía cinética del aire en electricidad es…",
                  answers: [
                    { text: "Energía termoeléctrica", correct: false },
                    { text: "Energía solar fotovoltaica", correct: false },
                    { text: "Energía eólica", correct: true },
                    { text: "Energía hidráulica", correct: false },
                  ],
                },
                {
                  id: 72,
                  text: "La energía que emplea el movimiento del agua para generar electricidad es…",
                  answers: [
                    { text: "Energía termoeléctrica", correct: false },
                    { text: "Combustibles renovables", correct: false },
                    { text: "Energía eólica", correct: false },
                    { text: "Energía hidráulica", correct: true },
                  ],
                },
                {
                  id: 73,
                  text: "Para alcanzar el Net Zero se requiere únicamente…",
                  answers: [
                    { text: "Invertir en energías renovables", correct: false },
                    {
                      text: "Reducir las emisiones y aumentar la absorción de carbono",
                      correct: true,
                    },
                    {
                      text: "Invertir en técnicas de absorción de carbono",
                      correct: false,
                    },
                    { text: "Limitar las actividades humanas", correct: false },
                  ],
                },
                {
                  id: 74,
                  text: "La energía limpia que aprovecha la capacidad de ciertos materiales, como el silicio, para generar electricidad cuando son expuestos a la radiación solar es …",
                  answers: [
                    { text: "Energía termoeléctrica", correct: false },
                    { text: "Combustibles renovables", correct: false },
                    { text: "Energía solar fotovoltaica", correct: true },
                    { text: "Energía hidráulica", correct: false },
                  ],
                },
                {
                  id: 75,
                  text: "La energía limpia que concentra la radiación solar en espejos de gran tamaño para generar calor, que luego se convierte en electricidad mediante ciclos termodinámicos convencionales …",
                  answers: [
                    { text: "Energía termoeléctrica", correct: true },
                    { text: "Combustibles renovables", correct: false },
                    { text: "Energía solar fotovoltaica", correct: false },
                    { text: "Energía hidráulica", correct: false },
                  ],
                },
                {
                  id: 76,
                  text: "El biometano y biogás son energías limpias de tipo…",
                  answers: [
                    { text: "Energía termoeléctrica", correct: false },
                    { text: "Combustibles renovables", correct: true },
                    { text: "Energía solar fotovoltaica", correct: false },
                    { text: "Energía hidráulica", correct: false },
                  ],
                },
                {
                  id: 77,
                  text: "Los humedales almacenan carbono siendo …",
                  answers: [
                    {
                      text: "Tecnologías de captura de dióxido de carbono",
                      correct: false,
                    },
                    {
                      text: "Tecnologías de Emisiones Negativas",
                      correct: false,
                    },
                    { text: "Sumideros naturales de carbono", correct: true },
                    { text: "Carbono azul", correct: false },
                  ],
                },
                {
                  id: 78,
                  text: "La economía circular se basa en…",
                  answers: [
                    {
                      text: "Reducir, reformar, reciclar y regenerar",
                      correct: false,
                    },
                    {
                      text: "Reducir, reutilizar, recomponer y regenerar",
                      correct: false,
                    },
                    {
                      text: "Reducir, reutilizar, reciclar y remediar",
                      correct: false,
                    },
                    {
                      text: "Reducir, reutilizar, reciclar y regenerar",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 79,
                  text: "La economía circular implica…",
                  answers: [
                    {
                      text: "Maximizar la generación de residuos y minimizar la utilización de recursos",
                      correct: false,
                    },
                    {
                      text: "Minimizar la generación de residuos y minimizar la utilización de recursos",
                      correct: true,
                    },
                    {
                      text: "Minimizar la generación de residuos y maximizar la utilización de recursos",
                      correct: false,
                    },
                    {
                      text: "Maximizar la generación de residuos y maximizar la utilización de recursos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 80,
                  text: "El modelo económico convencional es de tipo…",
                  answers: [
                    { text: "Circular", correct: false },
                    { text: "Exponencial", correct: false },
                    { text: "Parabólico", correct: false },
                    { text: "Lineal", correct: true },
                  ],
                },
                {
                  id: 81,
                  text: "La obsolescencia programada es típica de…",
                  answers: [
                    { text: "La economía circular", correct: false },
                    { text: "El modelo de economía lineal", correct: true },
                    { text: "El modelo pre-industrial", correct: false },
                    { text: "Actualmente no se emplea", correct: false },
                  ],
                },
                {
                  id: 82,
                  text: "La economía circular aporta beneficios…",
                  answers: [
                    {
                      text: "Económicos, ambientales y sociales",
                      correct: true,
                    },
                    {
                      text: "Económicos, ambientales y técnicos",
                      correct: false,
                    },
                    {
                      text: "Técnicos, ambientales y sociales",
                      correct: false,
                    },
                    {
                      text: "Económicos, ambientales y demográficos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 83,
                  text: "La economía circular aporta beneficios en todos los Objetivos de Desarrollo Sostenible, pero en lo que se refiera a la reducción, reciclado y reutilización corresponde al ODS…",
                  answers: [
                    { text: "ODS1", correct: false },
                    { text: "ODS12", correct: true },
                    { text: "ODS10", correct: false },
                    { text: "ODS11", correct: false },
                  ],
                },
                {
                  id: 84,
                  text: "Mantener los productos y materiales en uso durante más tiempo y fomentar la recuperación y reciclaje de recursos al final de su vida útil sobre todo contribuye a…",
                  answers: [
                    {
                      text: "Reducción de la extracción de recursos",
                      correct: false,
                    },
                    { text: "Conservación de ecosistemas", correct: false },
                    { text: "Minimización de residuos", correct: true },
                    { text: "Promoción de la sostenibilidad", correct: false },
                  ],
                },
                {
                  id: 85,
                  text: "Promover la reutilización, el reciclaje y la regeneración de materiales sobre todo contribuye a …",
                  answers: [
                    {
                      text: "Reducción de la extracción de recursos",
                      correct: true,
                    },
                    { text: "Conservación de ecosistemas", correct: false },
                    { text: "Minimización de residuos", correct: false },
                    { text: "Promoción de la sostenibilidad", correct: false },
                  ],
                },
                {
                  id: 86,
                  text: "El Plan de Acción de la Economía circular de la Unión Europea se enfoca particularmente en industrias intensivas como…",
                  answers: [
                    {
                      text: "Energía, plásticos, textiles y construcción",
                      correct: false,
                    },
                    {
                      text: "Tecnologías de la información y comunicación, plásticos, textiles y construcción",
                      correct: true,
                    },
                    {
                      text: "Tecnologías de la información y comunicación, agricultura, textiles y construcción",
                      correct: false,
                    },
                    {
                      text: "Industria química, plásticos, textiles y agricultura",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 87,
                  text: "Los sectores que presentan un alto potencial de crecimiento a corto y medio plazo son…",
                  answers: [
                    { text: "Residuos, moda y alimentación", correct: false },
                    {
                      text: "Plásticos, moda y fabricación industrial",
                      correct: false,
                    },
                    { text: "Plásticos, moda y alimentación", correct: true },
                    { text: "Papel, moda y alimentación", correct: false },
                  ],
                },
                {
                  id: 1,
                  text: "La meta temporal fijada para el cumplimiento de los Objetivos de Desarrollo del Milenio (ODM) fue el año:",
                  answers: [
                    { text: "2005", correct: false },
                    { text: "2010", correct: false },
                    { text: "2015", correct: true },
                    { text: "2020", correct: false },
                  ],
                },
                {
                  id: 2,
                  text: "El Pacto Mundial o Global Compact es una iniciativa promovida por la ONU en favor de la sostenibilidad:",
                  answers: [
                    { text: "Ambiental", correct: false },
                    { text: "Social", correct: false },
                    { text: "Corporativa", correct: true },
                    { text: "Gubernamental", correct: false },
                  ],
                },
                {
                  id: 3,
                  text: "Los Objetivos de Desarrollo Sostenible (ODS) están planteados para ser alcanzados antes del año:",
                  answers: [
                    { text: "2025", correct: false },
                    { text: "2030", correct: true },
                    { text: "2040", correct: false },
                    { text: "2050", correct: false },
                  ],
                },
                {
                  id: 4,
                  text: "El Objetivo de Desarrollo Sostenible 15 incluye detener la pérdida de:",
                  answers: [
                    { text: "Recursos hídricos", correct: false },
                    { text: "Biodiversidad", correct: true },
                    { text: "Energía fósil", correct: false },
                    { text: "Capacidad agrícola", correct: false },
                  ],
                },
                {
                  id: 5,
                  text: "El Foro Económico Mundial emite anualmente un informe que señala los __________ emergentes para la sociedad:",
                  answers: [
                    { text: "Conflictos", correct: false },
                    { text: "Indicadores", correct: false },
                    { text: "Riesgos", correct: true },
                    { text: "Beneficios", correct: false },
                  ],
                },
                {
                  id: 6,
                  text: "El Pacto Verde Europeo pretende alcanzar la __________ climática para el año 2050:",
                  answers: [
                    { text: "Estabilidad", correct: false },
                    { text: "Neutralidad", correct: true },
                    { text: "Reducción", correct: false },
                    { text: "Compensación", correct: false },
                  ],
                },
                {
                  id: 7,
                  text: "Actualmente, los cambios en el clima se están produciendo de manera:",
                  answers: [
                    { text: "Muy lenta", correct: false },
                    { text: "Muy rápida", correct: true },
                    { text: "Imperceptible", correct: false },
                    { text: "Inexistente", correct: false },
                  ],
                },
                {
                  id: 8,
                  text: "Las decisiones propuestas en la CMNUCC deben ser discutidas y aprobadas por todas las:",
                  answers: [
                    { text: "Organizaciones", correct: false },
                    { text: "Partes", correct: true },
                    { text: "Empresas", correct: false },
                    { text: "Delegaciones científicas", correct: false },
                  ],
                },
                {
                  id: 9,
                  text: "El Convenio sobre la Diversidad Biológica (CDB) trata aspectos como ecosistemas, especies y:",
                  answers: [
                    { text: "Infraestructuras", correct: false },
                    { text: "Recursos genéticos", correct: true },
                    { text: "Mercados financieros", correct: false },
                    { text: "Sistemas energéticos", correct: false },
                  ],
                },
                {
                  id: 10,
                  text: "La tasa de crecimiento y la tasa de fertilidad entre regiones son:",
                  answers: [
                    { text: "Heterogéneas", correct: true },
                    { text: "Homogéneas", correct: false },

                    { text: "Constantes", correct: false },
                    { text: "Nulas", correct: false },
                  ],
                },
                {
                  id: 11,
                  text: "El principal gas de efecto invernadero por su influencia en las dinámicas atmosféricas es el dióxido de:",
                  answers: [
                    { text: "Nitrógeno", correct: false },
                    { text: "Azufre", correct: false },

                    { text: "Metano", correct: false },
                    { text: "Carbono", correct: true },
                  ],
                },
                {
                  id: 12,
                  text: "Las tierras forestales no aportan CO2 a la atmósfera, sino que actúan como:",
                  answers: [
                    { text: "Sumideros de carbono", correct: true },
                    { text: "Fuentes de carbono", correct: false },

                    { text: "Emisores netos", correct: false },
                    { text: "Reservas energéticas", correct: false },
                  ],
                },
                {
                  id: 13,
                  text: "Uno de los objetivos de la identidad de Kaya es mejorar la eficiencia de __________ en la producción de energía:",
                  answers: [
                    { text: "Agua", correct: false },

                    { text: "Trabajo", correct: false },
                    { text: "Capital", correct: false },
                    { text: "Carbono", correct: true },
                  ],
                },
                {
                  id: 14,
                  text: "La cantidad de carbono anual emitida por una organización se denomina huella de carbono:",
                  answers: [
                    { text: "Corporativa", correct: true },
                    { text: "Personal", correct: false },

                    { text: "Territorial", correct: false },
                    { text: "Sectorial", correct: false },
                  ],
                },
                {
                  id: 15,
                  text: "Entre las medidas para alcanzar el Net Zero se encuentra reducir emisiones desde la __________ hasta el transporte:",
                  answers: [
                    { text: "Industria", correct: false },

                    { text: "Educación", correct: false },
                    { text: "Construcción", correct: false },
                    { text: "Energía", correct: true },
                  ],
                },
                {
                  id: 16,
                  text: "La energía renovable se obtiene a partir de fuentes naturales que son:",
                  answers: [
                    { text: "Inagotables", correct: true },
                    { text: "Limitadas", correct: false },
                    { text: "Contaminantes", correct: false },

                    { text: "Artificiales", correct: false },
                  ],
                },
                {
                  id: 17,
                  text: "Para frenar la pérdida de biodiversidad es necesario modificar los métodos de producción, uso y:",
                  answers: [
                    { text: "Distribución", correct: false },

                    { text: "Exportación", correct: false },
                    { text: "Almacenamiento", correct: false },
                    { text: "Consumo", correct: true },
                  ],
                },
                {
                  id: 18,
                  text: "El diagrama de __________ incluye dos ciclos principales: el ciclo técnico y el ciclo biológico:",
                  answers: [
                    { text: "Mariposa", correct: true },
                    { text: "Flujo", correct: false },
                    { text: "Cadena de valor", correct: false },
                    { text: "Economía lineal", correct: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "programacion",
      name: "programacion",
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
                  id: 1,
                  text: "La informática ________",
                  answers: [
                    {
                      text: "Permite el procesamiento automático de los datos",
                      correct: true,
                    },
                    {
                      text: "Puede trabajar sin datos de entrada",
                      correct: false,
                    },
                    {
                      text: "Tienes sus orígenes en las teorías de la información",
                      correct: false,
                    },
                    {
                      text: "Tiene sus orígenes en las válvulas de vacío",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Un lenguaje de programación puede ser ________",
                  answers: [
                    { text: "De alto nivel", correct: false },
                    { text: "De bajo nivel", correct: false },
                    { text: "De nivel intermedio", correct: false },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 3,
                  text: "Una máquina de procesamiento dispone de ________",
                  answers: [
                    { text: "Entrada", correct: false },
                    { text: "Unidad de procesamiento", correct: false },
                    { text: "Salida", correct: false },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 4,
                  text: "El lenguaje máquina ________",
                  answers: [
                    { text: "Es de alto nivel", correct: false },
                    { text: "Es independiente del hardware", correct: false },
                    { text: "Es de bajo nivel", correct: true },
                    { text: "Es de nivel intermedio", correct: false },
                  ],
                },
                {
                  id: 5,
                  text: "El software ________",
                  answers: [
                    {
                      text: "Representa a los elementos lógicos del sistema",
                      correct: false,
                    },
                    {
                      text: "Incluye a los programas informáticos",
                      correct: false,
                    },
                    {
                      text: "Necesita de una unidad de procesamiento para poder ejecutarse",
                      correct: false,
                    },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 6,
                  text: "El lenguaje ensamblador ________",
                  answers: [
                    { text: "Se considera de alto nivel", correct: false },
                    {
                      text: "Es más complicado de comprender que el lenguaje máquina",
                      correct: false,
                    },
                    { text: "No depende del hardware", correct: false },
                    {
                      text: "Requiere ser traducido a lenguaje máquina",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 7,
                  text: "Un lenguaje de alto nivel ________",
                  answers: [
                    {
                      text: "Introduce mayor nivel de complejidad al programador",
                      correct: false,
                    },
                    {
                      text: "Es ejecutable directamente por el procesador",
                      correct: false,
                    },
                    { text: "Se asemeja al lenguaje humano", correct: true },
                    { text: "Se asemeja al lenguaje máquina", correct: false },
                  ],
                },
                {
                  id: 8,
                  text: "Los lenguajes pueden ser ________",
                  answers: [
                    { text: "Compilados", correct: false },
                    { text: "Interpretados", correct: false },
                    { text: "Compilados e interpretados", correct: false },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 9,
                  text: "Un algoritmo ________",
                  answers: [
                    { text: "Tiene que ser ambiguo", correct: false },
                    {
                      text: "Puede ser definido sin entrar en detalles",
                      correct: false,
                    },
                    { text: "Tiene que ser determinista", correct: true },
                    {
                      text: "Puede genera resultados diferentes tras diferentes ejecuciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 10,
                  text: "¿Qué características debe tener un algoritmo?",
                  answers: [
                    { text: "Debe ser infinito.", correct: false },
                    {
                      text: "No debe depender del lenguaje de programación.",
                      correct: true,
                    },
                    { text: "Debe ser indeterminado.", correct: false },
                    {
                      text: "No dará los mismos resultados siempre bajo las mismas entradas.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 11,
                  text: "¿Cuál de las siguientes declaraciones de variables no es correcta?:",
                  answers: [
                    { text: "int numero = 9.3;", correct: true },
                    {
                      text: "String palabra = “Ha llovido en la calle”;",
                      correct: false,
                    },
                    { text: "char letra = ‘9’;", correct: false },
                    { text: "String palabra2 = “perro”;", correct: false },
                  ],
                },
                {
                  id: 12,
                  text: "¿Cuál de los siguientes identificadores puedo utilizar para nombrar una variable?:",
                  answers: [
                    { text: "transient", correct: false },
                    { text: "1numero", correct: false },
                    { text: "edad_persona", correct: true },
                    { text: "while", correct: false },
                  ],
                },
                {
                  id: 13,
                  text: "Para leer una variable por teclado necesito una variable de tipo:",
                  answers: [
                    { text: "String", correct: false },
                    { text: "Scanner", correct: true },
                    { text: "int", correct: false },
                    { text: "boolean", correct: false },
                  ],
                },
                {
                  id: 14,
                  text: "Los castings:",
                  answers: [
                    {
                      text: "Pueden hacerse entre cualquier tipo de dato.",
                      correct: false,
                    },
                    {
                      text: "Entre un int y un char puedo hacer uno, ya que en un char puedo guardar ‘2’.",
                      correct: false,
                    },
                    {
                      text: "Pueden hacerse entre tipos de datos compatibles, pero nos arriesgamos a perder información.",
                      correct: true,
                    },
                    {
                      text: "Están totalmente prohibidos, ya que solo se pueden realizar operaciones entre datos del mismo tipo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 15,
                  text: "La palabra reservada final:",
                  answers: [
                    {
                      text: "Se utiliza para hacer constantes a las variables, pero solo se puede utilizar en datos de tipo numérico.",
                      correct: false,
                    },
                    {
                      text: "Se utiliza para hacer constantes a las variables, pudiendo utilizarla en cualquier tipo de dato y pudiendo cambiar su valor una única vez.",
                      correct: false,
                    },
                    {
                      text: "Se utiliza para hacer constantes a las variables y debe colocarse después del tipo de la variable.",
                      correct: false,
                    },
                    {
                      text: "Se utiliza para hacer constantes a las variables, pudiendo utilizarla en cualquier tipo de dato y debiendo colocarla antes del tipo de la variable.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 16,
                  text: "La expresión dato1 *= dato2 es equivalente a:",
                  answers: [
                    { text: "dato1 = dato1 * dato2", correct: true },
                    { text: "dato2 = dato1 * dato2", correct: false },
                    { text: "dato1 = dato1 + dato2", correct: false },
                    { text: "dato2 = dato1 + dato2", correct: false },
                  ],
                },
                {
                  id: 17,
                  text: "El operador lógico AND:",
                  answers: [
                    {
                      text: "Devolverá verdadero solo si los dos datos son verdaderos.",
                      correct: true,
                    },
                    {
                      text: "No siempre devuelve falso si el segundo dato es falso.",
                      correct: false,
                    },
                    { text: "Devuelve siempre verdadero.", correct: false },
                    {
                      text: "Devuelve lo contrario que devolvería el operador OR.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 18,
                  text: "El operador lógico OR:",
                  answers: [
                    {
                      text: "Devolverá lo contrario que devolvería en el mismo caso el operador AND.",
                      correct: false,
                    },
                    {
                      text: "Devolverá verdadero siempre que el primer dato sea falso.",
                      correct: false,
                    },
                    {
                      text: "Devolverá siempre falso, tengan el valor que tengan las variables.",
                      correct: false,
                    },
                    {
                      text: "Devolverá siempre verdadero si uno de los datos es verdadero.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 19,
                  text: "¿Cuál de los siguientes no es un operador relacional?",
                  answers: [
                    { text: ">", correct: false },
                    { text: ">>", correct: true },
                    { text: "<", correct: false },
                    { text: "<=", correct: false },
                  ],
                },
                {
                  id: 20,
                  text: "¿Cuál de los siguientes no es un tipo de dato válido para representar un dato entero en Java?",
                  answers: [
                    { text: "int", correct: false },
                    { text: "long", correct: false },
                    { text: "short", correct: false },
                    { text: "bit", correct: true },
                  ],
                },
                {
                  id: 21,
                  text: "La instrucción break es mejor utilizarla en la sentencia:",
                  answers: [
                    { text: "if-else", correct: false },
                    { text: "switch", correct: true },
                    { text: "while", correct: false },
                    { text: "for", correct: false },
                  ],
                },
                {
                  id: 22,
                  text: "Podemos utilizar varias condiciones unidas con AND y OR en:",
                  answers: [
                    {
                      text: "Solo en los if que no tengan else y en todos los bucles.",
                      correct: false,
                    },
                    { text: "Solamente en el bucle while.", correct: false },
                    {
                      text: "Tanto en los if-else como en todos los bucles.",
                      correct: true,
                    },
                    {
                      text: "Tanto en los if-else, swtich, como en todos los bucles.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 23,
                  text: "Indica la afirmación correcta:",
                  answers: [
                    {
                      text: "Para poder crear un bloque de código, es indispensable delimitarlo entre llaves, haciendo que funcione como si se tratase de una única instrucción.",
                      correct: false,
                    },
                    {
                      text: "Para finalizar en Java cualquier instrucción tenemos que poner punto y coma.",
                      correct: false,
                    },
                    {
                      text: "Podemos hacer con un bucle for lo mismo que con un bucle do-while.",
                      correct: false,
                    },
                    {
                      text: "Todas las afirmaciones son correctas.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 24,
                  text: "Sobre el bucle for:",
                  answers: [
                    {
                      text: "Se utilizará cuando sepamos el número de iteraciones que vamos a realizar.",
                      correct: true,
                    },
                    {
                      text: "Se utilizará cuando no sepamos el número de iteraciones que vamos a utilizar.",
                      correct: false,
                    },
                    {
                      text: "Es obligatorio declarar la variable contador en la cabecera del for.",
                      correct: false,
                    },
                    {
                      text: "Todas las afirmaciones son correctas.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 25,
                  text: "Sobre la sentencia switch:",
                  answers: [
                    {
                      text: "En Java es obligatorio poner el caso default.",
                      correct: false,
                    },
                    {
                      text: "Podremos utilizar condiciones múltiples en su cabecera.",
                      correct: false,
                    },
                    {
                      text: "Es equivalente a una serie de if-else anidados pero solo con la condición == en todas sus condiciones.",
                      correct: true,
                    },
                    {
                      text: "Hace exactamente el mismo trabajo que la instrucción if-else.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 26,
                  text: "Los delimitadores de bloque en Java son:",
                  answers: [
                    { text: "Llaves ( { } ).", correct: true },
                    { text: "Tabulaciones.", correct: false },
                    { text: "Guiones ( - ).", correct: false },
                    { text: "Punto y coma ( ; ).", correct: false },
                  ],
                },
                {
                  id: 27,
                  text: "Sobre la instrucción if:",
                  answers: [
                    {
                      text: "Todos los if tienen que tener obligatoriamente un else y todos los else tienen que tener obligatoriamente un if.",
                      correct: false,
                    },
                    {
                      text: "Puede haber if sin else, pero los else tienen que tener obligatoriamente un if.",
                      correct: true,
                    },
                    {
                      text: "Un if puede tener más de un else.",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las afirmaciones es correctas.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 28,
                  text: "Sobre la instrucción while:",
                  answers: [
                    {
                      text: "Es equivalente a la instrucción switch.",
                      correct: false,
                    },
                    {
                      text: "No puede contener condiciones múltiples, para eso deberemos usar obligatoriamente la instrucción do-while.",
                      correct: false,
                    },
                    {
                      text: "Es el único caso en Java donde los delimitadores de su bloque son tabuladores.",
                      correct: false,
                    },
                    {
                      text: "Puede ejecutarse 0 o muchas veces.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 29,
                  text: "¿Cuál de los siguientes operadores no puede usarse en la condición de una instrucción condicional o repetitiva?",
                  answers: [
                    { text: "=", correct: true },
                    { text: "!=", correct: false },
                    { text: "<=", correct: false },
                    { text: ">=", correct: false },
                  ],
                },
                {
                  id: 30,
                  text: "El operador lógico OR:",
                  answers: [
                    {
                      text: "Devolverá verdadero solo si todas las condiciones implicadas son verdaderas.",
                      correct: false,
                    },
                    {
                      text: "Devolverá falso solo si una de las condiciones implicadas es falsa",
                      correct: false,
                    },
                    {
                      text: "Devolverá verdadero si al menos una de las condiciones implicadas es verdadera.",
                      correct: true,
                    },
                    {
                      text: "Devolverá falso si al menos una de las condiciones implicadas es falsa.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 31,
                  text: "La programación modular ________",
                  answers: [
                    { text: "Está en desuso", correct: false },
                    { text: "Mejora la reutilización", correct: true },
                    { text: "Es poco recomendable", correct: false },
                    {
                      text: "Es incompatible con los lenguajes de programación modernos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 32,
                  text: "Señala la opción correcta:",
                  answers: [
                    {
                      text: "Un subprograma es lo mismo que una función",
                      correct: false,
                    },
                    {
                      text: "Un procedimiento es lo mismo que una función",
                      correct: false,
                    },
                    {
                      text: "La función devuelve siempre un valor",
                      correct: true,
                    },
                    {
                      text: "Los procedimientos siempre devuelven un valor",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 33,
                  text: "Un procedimiento ________",
                  answers: [
                    {
                      text: "Puede tener únicamente un parámetro de entrada",
                      correct: false,
                    },
                    {
                      text: "Puede tener muchos parámetros de entrada",
                      correct: true,
                    },
                    { text: "Carece de parámetros de salida", correct: false },
                    {
                      text: "Solo puede tener un parámetro de salida",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 34,
                  text: "Una variable local (declarada dentro de una función) puede usarse",
                  answers: [
                    { text: "En cualquier lugar del código", correct: false },
                    {
                      text: "Solo en la función donde se ha declarado",
                      correct: true,
                    },
                    { text: "Solo dentro del main", correct: false },
                    { text: "Ninguna opción es correcta", correct: false },
                  ],
                },
                {
                  id: 35,
                  text: "La visibilidad de las variables ________",
                  answers: [
                    {
                      text: "También se aplica con la programación modular",
                      correct: true,
                    },
                    {
                      text: "Deja de tener sentido con la utilización de procedimientos",
                      correct: false,
                    },
                    { text: "Es igual en todas las funciones", correct: false },
                    {
                      text: "Ninguna de las demás son correctas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 36,
                  text: "Señala la opción correcta:",
                  answers: [
                    {
                      text: "Las variables locales son declaradas dentro de un método, constructor o bloque, y tienen un alcance limitado a ese bloque.",
                      correct: true,
                    },
                    {
                      text: "Las variables globales son declaradas dentro de un método, constructor o bloque, y tienen un alcance limitado a ese bloque.",
                      correct: false,
                    },
                    {
                      text: "Las variables locales son accesibles desde cualquier punto del programa y se pueden usar desde cualquier módulo o subprograma, ya que son declaradas desde el programa principal.",
                      correct: false,
                    },
                    {
                      text: "Las variables globales sólo existen en un ámbito determinado del programa, por ejemplo en un subprograma o en un bloque de sentencias.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 37,
                  text: "Las variables globales ________",
                  answers: [
                    {
                      text: "Solo son accedidas por las funciones",
                      correct: false,
                    },
                    {
                      text: "Solo son accedidas por los procedimientos",
                      correct: false,
                    },
                    { text: "Son altamente recomendables", correct: false },
                    { text: "Dificultan el diseño del código", correct: true },
                  ],
                },
                {
                  id: 38,
                  text: "Las funciones ________",
                  answers: [
                    {
                      text: "Se pueden utilizar como parte de expresiones",
                      correct: true,
                    },
                    { text: "Carecen de salida de datos", correct: false },
                    {
                      text: "Son menos potentes que los procedimientos",
                      correct: false,
                    },
                    { text: "Solo reciben parámetros enteros", correct: false },
                  ],
                },
                {
                  id: 39,
                  text: "¿Qué tipo de paso de parámetros se utiliza en Java cuando se pasa un objeto como argumento a un método?",
                  answers: [
                    { text: "Por valor", correct: false },
                    { text: "Por referencia", correct: true },
                    { text: "Por copia", correct: false },
                    { text: "Por asignación", correct: false },
                  ],
                },
                {
                  id: 40,
                  text: "Los procedimientos ________",
                  answers: [
                    {
                      text: "Carecen de sentencias en su interior",
                      correct: false,
                    },
                    { text: "Solo pueden declarar variables", correct: false },
                    { text: "Permiten reutilizar código", correct: true },
                    {
                      text: "Están limitados por los lenguajes de programación",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 41,
                  text: "La recursividad ________",
                  answers: [
                    {
                      text: "Es aquella cuyo nombre permite la sobrecarga y además realiza alguna comprobación mediante if",
                      correct: false,
                    },
                    {
                      text: "Es aquella que se invoca desde dentro de su propio bloque de instrucciones",
                      correct: true,
                    },
                    {
                      text: "Es aquella cuyo bloque de instrucciones utiliza alguna sentencia if (lo que llamamos caso base)",
                      correct: false,
                    },
                    {
                      text: "Es aquella que genera un bucle infinito",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 42,
                  text: "En la recursividad, el caso base ________",
                  answers: [
                    {
                      text: "Permite continuar con el proceso recursivo",
                      correct: false,
                    },
                    { text: "Es opcional", correct: false },
                    { text: "Siempre es único", correct: false },
                    {
                      text: "Permite parar el proceso recursivo",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 43,
                  text: "El proceso de recursión ________",
                  answers: [
                    { text: "Siempre posee un único nivel", correct: false },
                    {
                      text: "Permite parar el flujo de ejecución",
                      correct: false,
                    },
                    { text: "Puede incluir diferentes niveles", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 44,
                  text: "Al utilizar la recursividad ________",
                  answers: [
                    {
                      text: "Siempre se produce un bucle infinito",
                      correct: false,
                    },
                    { text: "Se puede omitir el caso base", correct: false },
                    {
                      text: "Siempre se mejora el rendimiento",
                      correct: false,
                    },
                    {
                      text: "Se puede producir un desbordamiento de pila",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 45,
                  text: "Las soluciones recursivas ________",
                  answers: [
                    {
                      text: "Suelen utilizar estructuras iterativas",
                      correct: false,
                    },
                    { text: "Suelen ser más elegantes", correct: true },
                    {
                      text: "Siempre son más sencillas que las iterativas",
                      correct: false,
                    },
                    { text: "Nunca producen errores", correct: false },
                  ],
                },
                {
                  id: 46,
                  text: "Desde el punto de vista de la eficiencia ________",
                  answers: [
                    {
                      text: "Las soluciones recursivas pueden ser muy ineficientes",
                      correct: true,
                    },
                    {
                      text: "Las soluciones recursivas siempre son más eficientes que las iterativas",
                      correct: false,
                    },
                    {
                      text: "Las soluciones recursivas carecen de este criterio",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 47,
                  text: "Para el desarrollo de soluciones recursivas ________",
                  answers: [
                    {
                      text: "Se pueden realizar independientemente del lenguaje de programación",
                      correct: false,
                    },
                    {
                      text: "Cada lenguaje de programación puede requerir unas características determinadas",
                      correct: true,
                    },
                    {
                      text: "Solo es necesario detectar el caso base",
                      correct: false,
                    },
                    {
                      text: "Solo es necesario detectar el caso general",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 48,
                  text: "El cálculo del factorial ________",
                  answers: [
                    {
                      text: "Es una función siempre iterativa",
                      correct: false,
                    },
                    {
                      text: "Es una función siempre recursiva",
                      correct: false,
                    },
                    {
                      text: "Es una función que solo puede calcularse con recursividad",
                      correct: false,
                    },
                    {
                      text: "Es una función que se puede resolver con recursividad de una forma más sencilla",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 49,
                  text: "El desbordamiento de pila ________",
                  answers: [
                    {
                      text: "Es un error típico de las soluciones recursivas",
                      correct: true,
                    },
                    {
                      text: "Es un error típico de las soluciones iterativas",
                      correct: false,
                    },
                    {
                      text: "Están relacionadas con el caso de recursión",
                      correct: false,
                    },
                    {
                      text: "Es independiente del tipo de recursión",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 50,
                  text: "La recursividad ________",
                  answers: [
                    {
                      text: "Es incompatible con la iteración",
                      correct: false,
                    },
                    {
                      text: "Solo se puede utilizar con funciones",
                      correct: false,
                    },
                    {
                      text: "Se puede utilizar con funciones y procedimientos",
                      correct: true,
                    },
                    {
                      text: "Solo se puede utilizar con procedimientos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 51,
                  text: "¿Cuál de las siguientes declaraciones nos permitirá almacenar más de 50 números reales?",
                  answers: [
                    { text: "int[] array = new int[52];", correct: false },
                    { text: "int[] array = new int[50];", correct: false },
                    { text: "double[] array = new int[51];", correct: false },
                    { text: "double[] array = new double[54];", correct: true },
                  ],
                },
                {
                  id: 52,
                  text: "¿Qué orden de eficiencia tiene la búsqueda lineal?",
                  answers: [
                    { text: "O(n)", correct: true },
                    { text: "O(n²)", correct: false },
                    { text: "O(1)", correct: false },
                    { text: "O(n * log n)", correct: false },
                  ],
                },
                {
                  id: 53,
                  text: "¿Cuál es el máximo de dimensiones con las que podemos crear un array multidimensional?",
                  answers: [
                    { text: "2", correct: false },
                    { text: "5", correct: false },
                    { text: "10", correct: false },
                    { text: "Las que necesitemos.", correct: true },
                  ],
                },
                {
                  id: 54,
                  text: "¿Cuántos bucles for necesito para recorrer una matriz?",
                  answers: [
                    {
                      text: "Solo 1, ya que una matriz es como un array.",
                      correct: false,
                    },
                    {
                      text: "Necesitaremos 2, uno para recorrer las filas y otro para recorrer las columnas, en ese orden.",
                      correct: true,
                    },
                    {
                      text: "Necesitaremos 2, uno para recorrer las columnas y otro para recorrer las filas, en ese orden.",
                      correct: false,
                    },
                    {
                      text: "Necesitaremos 3, uno para recorrer las filas, otro para recorrer las columnas y otro para operar con los elementos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 55,
                  text: "¿Qué orden de eficiencia tiene la búsqueda binaria?",
                  answers: [
                    { text: "O(n)", correct: false },
                    { text: "O(n²)", correct: false },
                    { text: "O(1)", correct: false },
                    { text: "O(log n)", correct: true },
                  ],
                },
                {
                  id: 56,
                  text: "¿De qué tipo de datos se pueden declarar matrices?",
                  answers: [
                    {
                      text: "Solo de datos de tipo numérico, enteros y reales, no tiene sentido declarar una matriz de otro tipo de datos.",
                      correct: false,
                    },
                    {
                      text: "Solo de datos de tipo primitivo.",
                      correct: false,
                    },
                    {
                      text: "De cualquier tipo de dato, tanto primitivos como objetos.",
                      correct: true,
                    },
                    { text: "Solo de objetos.", correct: false },
                  ],
                },
                {
                  id: 57,
                  text: "¿Qué orden de eficiencia tiene la ordenación por el método de la burbuja?",
                  answers: [
                    { text: "O(n)", correct: false },
                    { text: "O(n²)", correct: true },
                    { text: "O(1)", correct: false },
                    { text: "O(n * log n)", correct: false },
                  ],
                },
                {
                  id: 58,
                  text: "¿Qué operador se utiliza para acceder a un elemento de una posición concreta en un array?",
                  answers: [
                    { text: "[ ]", correct: true },
                    { text: "( )", correct: false },
                    { text: "{ }", correct: false },
                    { text: "“ ”", correct: false },
                  ],
                },
                {
                  id: 59,
                  text: "¿Qué función devuelve el tamaño de un String?",
                  answers: [
                    { text: "size()", correct: false },
                    { text: "long()", correct: false },
                    { text: "length()", correct: true },
                    { text: "lenght()", correct: false },
                  ],
                },
                {
                  id: 60,
                  text: "¿Cómo puedo saber si dos String son iguales?",
                  answers: [
                    { text: "Con la función equals.", correct: true },
                    { text: "Utilizando el operador ==.", correct: false },
                    { text: "A y b son correctas.", correct: false },
                    { text: "A y b son incorrectas.", correct: false },
                  ],
                },
                {
                  id: 61,
                  text: "POO significa:",
                  answers: [
                    { text: "Programación De Objetos.", correct: false },
                    {
                      text: "Programación de Distintos Objetos.",
                      correct: false,
                    },
                    { text: "Programando Diferentes Objetos.", correct: false },
                    { text: "Programación Dirigida a Objetos.", correct: true },
                  ],
                },
                {
                  id: 62,
                  text: "En la programación dirigida a objetos el programa está compuesto por:",
                  answers: [
                    { text: "Objetos.", correct: true },
                    { text: "Variables primitivas.", correct: false },
                    { text: "Objetos primitivos.", correct: false },
                    { text: "Variables constantes.", correct: false },
                  ],
                },
                {
                  id: 63,
                  text: "¿Cuántos atributos podemos definir en una clase?",
                  answers: [
                    {
                      text: "Todos los que necesitemos, independientemente del tipo de ellos.",
                      correct: true,
                    },
                    { text: "Solo 3 por tipo.", correct: false },
                    {
                      text: "Todos los que necesitemos, pero no podrán ser otros objetos.",
                      correct: false,
                    },
                    {
                      text: "Podremos definir todos los que queramos de tipos primitivos, pero solo 3 podrán ser de otros objetos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 64,
                  text: "Una clase se compone de:",
                  answers: [
                    { text: "Atributos y métodos.", correct: true },
                    { text: "Atributos constantes y métodos.", correct: false },
                    { text: "Atributos y objetos.", correct: false },
                    { text: "Bucles y métodos.", correct: false },
                  ],
                },
                {
                  id: 65,
                  text: "¿La relación cuyo predicado es: “tiene-un” o “parte-de” es del tipo?",
                  answers: [
                    { text: "Herencia", correct: false },
                    { text: "Dependencia", correct: false },
                    { text: "Generalización", correct: false },
                    { text: "Asociación", correct: true },
                  ],
                },
                {
                  id: 66,
                  text: "¿Para qué utilizamos Doxygen?",
                  answers: [
                    {
                      text: "Para colorear el código de nuestro programa y poder entenderlo mejor.",
                      correct: false,
                    },
                    {
                      text: "Es el encargado de compilar nuestros programas.",
                      correct: false,
                    },
                    {
                      text: "Es el encargado de mostrar en qué línea está los errores cuando estos ocurren.",
                      correct: false,
                    },
                    { text: "Para documentar nuestro código.", correct: true },
                  ],
                },
                {
                  id: 67,
                  text: "La programación dirigida a objetos mejora:",
                  answers: [
                    {
                      text: "La programación orientada a eventos.",
                      correct: false,
                    },
                    { text: "La programación estructural.", correct: false },
                    { text: "La programación estructurada.", correct: true },
                    {
                      text: "La técnica de divide y vencerás.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 68,
                  text: "¿Cuál es la diferencia entre variable y objeto?",
                  answers: [
                    { text: "Son exactamente lo mismo.", correct: false },
                    {
                      text: "Las variables instancian una clase y los objetos son de tipo primitivo.",
                      correct: false,
                    },
                    {
                      text: "Las variables son de tipo primitivo y los objetos instancian una clase.",
                      correct: true,
                    },
                    {
                      text: "Las variables siempre han de ser constantes y los objetos pueden ser tanto de tipo primitivo como instanciar una clase.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 69,
                  text: "¿Cómo debemos nombrar una clase?",
                  answers: [
                    {
                      text: "Todos los elementos que vayamos a usar, dando igual cuáles sean, se deben nombrar en minúscula obligatoriamente.",
                      correct: false,
                    },
                    {
                      text: "Deben empezar por un número obligatoriamente.",
                      correct: false,
                    },
                    {
                      text: "Se nombran igual que las variables, pero, como norma no obligatoria, deberían de empezar por una letra mayúscula.",
                      correct: true,
                    },
                    {
                      text: "Con todas las letras en mayúscula.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 70,
                  text: "¿En cuantos tipos podemos clasificar las relaciones entre clases?",
                  answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                    { text: "4", correct: true },
                  ],
                },
                {
                  id: 71,
                  text: "¿Cuántos parámetros puede tener una función?",
                  answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                    { text: "Todos los que necesitemos.", correct: true },
                  ],
                },
                {
                  id: 72,
                  text: "¿Cuántos valores puede devolver una función?",
                  answers: [
                    { text: "0", correct: false },
                    { text: "1", correct: true },
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                  ],
                },
                {
                  id: 73,
                  text: "¿Cuál de las siguientes etiquetas no pertenece a Doxygen en Java?",
                  answers: [
                    { text: "see", correct: false },
                    { text: "return", correct: false },
                    { text: "struct", correct: true },
                    { text: "param", correct: false },
                  ],
                },
                {
                  id: 74,
                  text: "¿Dónde se tienen que almacenar los programas para poder ejecutarse?",
                  answers: [
                    {
                      text: "En ningún sitio, los programas simplemente se ejecutan.",
                      correct: false,
                    },
                    { text: "En el disco duro.", correct: false },
                    { text: "En memoria RAM.", correct: true },
                    {
                      text: "En la tarjeta gráfica para que se puedan mostrar por pantalla.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 75,
                  text: "Según la notación CamelCase, ¿cómo se han de nombrar los métodos?",
                  answers: [
                    { text: "Todo en minúscula.", correct: false },
                    { text: "Todo en mayúscula.", correct: false },
                    {
                      text: "La primera letra en mayúscula y las demás en minúscula de todas las palabras.",
                      correct: false,
                    },
                    {
                      text: "La primera palabra en minúscula y las demás con la primera letra en mayúscula y las demás en minúscula.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 76,
                  text: "¿Cómo gestiona Java el paso por valor y por referencia?",
                  answers: [
                    { text: "Siempre utiliza paso por valor.", correct: false },
                    {
                      text: "Con las variables utiliza paso por valor y con los objetos paso por referencia.",
                      correct: true,
                    },
                    {
                      text: "Con las variables utiliza paso por referencia y con los objetos paso por valor.",
                      correct: false,
                    },
                    {
                      text: "Siempre utiliza paso por referencia.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 77,
                  text: "Cuando estamos haciendo un método, ¿podemos llamar a otro método dentro de él?",
                  answers: [
                    {
                      text: "Si, pero solo cuando se trata de funciones, ya que al devolver un valor nos permiten llamar a otro método.",
                      correct: false,
                    },
                    {
                      text: "Si, podemos llamar a todos los métodos que necesitemos en la realización de otro método.",
                      correct: true,
                    },
                    { text: "No.", correct: false },
                    {
                      text: "Si, pero solo cuando estamos haciendo el método toString de una clase.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 78,
                  text: "En Doxygen @param sirve para:",
                  answers: [
                    {
                      text: "Documentar el autor de una clase.",
                      correct: false,
                    },
                    {
                      text: "Documentar un parámetro de un método.",
                      correct: true,
                    },
                    {
                      text: "Documentar el dato que devuelve un método.",
                      correct: false,
                    },
                    { text: "Documentar qué hace un método.", correct: false },
                  ],
                },
                {
                  id: 79,
                  text: "¿Qué se guarda en la zona de memoria de un objeto?",
                  answers: [
                    { text: "Las variables y el código.", correct: true },
                    {
                      text: "Las variables, el código y las llamadas.",
                      correct: false,
                    },
                    {
                      text: "Las variables, las llamadas, el código y los datos globales.",
                      correct: false,
                    },
                    {
                      text: "Las variables, el código y los datos globales.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 80,
                  text: "Indica la frase incorrecta:",
                  answers: [
                    {
                      text: "Al programar, organizamos el código en torno a objetos, que son representaciones de cosas del mundo real",
                      correct: false,
                    },
                    {
                      text: "Los cambios efectuados a un objeto afectan a las funciones definidas en la clase.",
                      correct: true,
                    },
                    {
                      text: "Java es un lenguaje multiplataforma.",
                      correct: false,
                    },
                    {
                      text: "Los datos junto a las funciones son parte interna de los objetos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 81,
                  text: "Los objetos se comunican entre si mediante:",
                  answers: [
                    { text: "Mensajes.", correct: true },
                    { text: "Señales de humo.", correct: false },
                    { text: "Código binario.", correct: false },
                    {
                      text: "Mensajes cifrados en hexadecimal.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 82,
                  text: "Para mostrar la información de un objeto por pantalla:",
                  answers: [
                    {
                      text: "Puedo utilizar los métodos get o escribir su método toString para mostrarlo directamente.",
                      correct: true,
                    },
                    {
                      text: "Si no se escribe el método toString no se puede mostrar la información del objeto.",
                      correct: false,
                    },
                    {
                      text: "Solo se podrá mostrar su información mediante los métodos get.",
                      correct: false,
                    },
                    {
                      text: "No se puede mostrar la información de un objeto por pantalla.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 83,
                  text: "Desde un método estático puedo llamar:",
                  answers: [
                    { text: "A un método de un objeto.", correct: false },
                    { text: "A otros métodos estáticos.", correct: true },
                    {
                      text: "Los métodos estáticos no permiten llamar a otros métodos.",
                      correct: false,
                    },
                    {
                      text: "Tanto a otros métodos estáticos como a métodos de objetos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 84,
                  text: "¿Cuál es el método que permite modificar el valor de un atributo de una clase?",
                  answers: [
                    { text: "Método set.", correct: true },
                    { text: "Método get.", correct: false },
                    { text: "Constructor con parámetros.", correct: false },
                    { text: "Método toString.", correct: false },
                  ],
                },
                {
                  id: 85,
                  text: "El constructor de copia:",
                  answers: [
                    {
                      text: "Permite inicializar las variables de un objeto a un valor por defecto.",
                      correct: false,
                    },
                    {
                      text: "Permite inicializar las variables de un objeto a un valor pasado por parámetro.",
                      correct: false,
                    },
                    {
                      text: "Permite inicializar las variables de un objeto al mismo valor que las de otro objeto de su mismo tipo.",
                      correct: true,
                    },
                    {
                      text: "Es un híbrido entre el constructor por defecto y el constructor de copia.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 86,
                  text: "¿Si defino en una clase dos constructores con parámetros, puedo definir además un constructor de copia?",
                  answers: [
                    { text: "Si, no hay problema.", correct: true },
                    {
                      text: "No, ya que no se pueden definir más de un constructor con parámetros.",
                      correct: false,
                    },
                    {
                      text: "Si, siempre y cuando se defina también el constructor por defecto.",
                      correct: false,
                    },
                    {
                      text: "Si, siempre y cuando el constructor de copia no se llame igual que los constructores con parámetros.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 87,
                  text: "Los paquetes sirven para:",
                  answers: [
                    {
                      text: "Ordenar nuestro código en “carpetas” que contengan clases con la misma funcionalidad.",
                      correct: true,
                    },
                    {
                      text: "Su única funcionalidad es la de almacenar imágenes.",
                      correct: false,
                    },
                    {
                      text: "Los paquetes no suelen utilizarse, ya que contribuyen a que él código resultante sea mucho más complejo.",
                      correct: false,
                    },
                    {
                      text: "Una clase solo podrá heredar de otra siempre que estén en el mismo paquete.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 88,
                  text: "Para crear una biblioteca en NetBeans:",
                  answers: [
                    {
                      text: "Hay que instalarle el plugin MasterOfLibraries.",
                      correct: false,
                    },
                    {
                      text: "Cada vez que compilemos nuestro proyecto, si NetBeans detecta que hay un paquete, creará automáticamente una biblioteca con las clases de dicho paquete.",
                      correct: false,
                    },
                    {
                      text: "Las bibliotecas no se pueden crean en NetBeans, necesitamos hacerlo en consola mediante comandos.",
                      correct: false,
                    },
                    {
                      text: "Hay que crear un nuevo proyecto del tipo Java Class Library.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 89,
                  text: "¿Cuál de los siguientes no es un pilar de la programación dirigida a objetos?",
                  answers: [
                    { text: "Herencia.", correct: false },
                    { text: "Encapsulación.", correct: false },
                    { text: "Ámbito de visibilidad.", correct: true },
                    { text: "Polimorfismo.", correct: false },
                  ],
                },
                {
                  id: 90,
                  text: "Los métodos get y set:",
                  answers: [
                    {
                      text: "Son obligatorios en todas las clases que hagamos.",
                      correct: false,
                    },
                    {
                      text: "No son obligatorios, pero son recomendables si queremos poder acceder y modificar el valor de los atributos de nuestros objetos.",
                      correct: true,
                    },
                    {
                      text: "Hay que hacerlos solo cuando hacemos el constructor con parámetros.",
                      correct: false,
                    },
                    {
                      text: "Los métodos get son obligatorios, pero son los métodos set no.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 91,
                  text: "La herencia permite:",
                  answers: [
                    {
                      text: "Reutilizar código creando nuevas clases a partir de otras existentes.",
                      correct: true,
                    },
                    {
                      text: "Eliminar completamente el código de la clase padre.",
                      correct: false,
                    },
                    { text: "Evitar el uso de métodos.", correct: false },
                    {
                      text: "Crear únicamente objetos estáticos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 92,
                  text: "En Java, la palabra clave utilizada para heredar de otra clase es:",
                  answers: [
                    { text: "implements", correct: false },
                    { text: "inherits", correct: false },
                    { text: "extends", correct: true },
                    { text: "super", correct: false },
                  ],
                },
                {
                  id: 93,
                  text: "Una subclase:",
                  answers: [
                    {
                      text: "No puede acceder a ningún atributo de la superclase.",
                      correct: false,
                    },
                    {
                      text: "Puede heredar atributos y métodos de la superclase.",
                      correct: true,
                    },
                    {
                      text: "Debe redefinir todos los métodos obligatoriamente.",
                      correct: false,
                    },
                    { text: "No puede añadir nuevos métodos.", correct: false },
                  ],
                },
                {
                  id: 94,
                  text: "El polimorfismo permite:",
                  answers: [
                    {
                      text: "Que un objeto tenga varios constructores.",
                      correct: false,
                    },
                    {
                      text: "Que diferentes objetos respondan de distinta forma al mismo método.",
                      correct: true,
                    },
                    {
                      text: "Que una clase tenga muchos atributos.",
                      correct: false,
                    },
                    { text: "Evitar la herencia.", correct: false },
                  ],
                },
                {
                  id: 95,
                  text: "¿Qué palabra clave se utiliza para acceder a la clase padre?",
                  answers: [
                    { text: "this", correct: false },
                    { text: "extends", correct: false },
                    { text: "parent", correct: false },
                    { text: "super", correct: true },
                  ],
                },
                {
                  id: 96,
                  text: "La sobrecarga de métodos (overloading) ocurre cuando:",
                  answers: [
                    {
                      text: "Dos métodos tienen el mismo nombre y distintos parámetros.",
                      correct: true,
                    },
                    {
                      text: "Dos métodos tienen distinto nombre y mismo código.",
                      correct: false,
                    },
                    {
                      text: "Un método se ejecuta más de una vez.",
                      correct: false,
                    },
                    { text: "Un método es privado.", correct: false },
                  ],
                },
                {
                  id: 97,
                  text: "La sobrescritura de métodos (overriding) requiere:",
                  answers: [
                    {
                      text: "Mismo nombre y mismos parámetros que el método de la superclase.",
                      correct: true,
                    },
                    {
                      text: "Distinto nombre y distintos parámetros.",
                      correct: false,
                    },
                    { text: "Que el método sea estático.", correct: false },
                    { text: "Que el método sea privado.", correct: false },
                  ],
                },
                {
                  id: 98,
                  text: "Si un método se declara como final:",
                  answers: [
                    {
                      text: "Puede ser sobrescrito por las subclases.",
                      correct: false,
                    },
                    { text: "No puede ser sobrescrito.", correct: true },
                    { text: "Debe ser estático.", correct: false },
                    { text: "Debe ser público.", correct: false },
                  ],
                },
                {
                  id: 99,
                  text: "Una clase abstracta:",
                  answers: [
                    { text: "No puede tener métodos.", correct: false },
                    {
                      text: "No puede instanciarse directamente.",
                      correct: true,
                    },
                    {
                      text: "Debe contener solo métodos abstractos.",
                      correct: false,
                    },
                    { text: "Es lo mismo que una interfaz.", correct: false },
                  ],
                },
                {
                  id: 100,
                  text: "Un método abstracto:",
                  answers: [
                    {
                      text: "Tiene implementación obligatoria.",
                      correct: false,
                    },
                    {
                      text: "No tiene implementación y debe definirse en la subclase.",
                      correct: true,
                    },
                    { text: "Debe ser privado.", correct: false },
                    { text: "Debe ser estático.", correct: false },
                  ],
                },
                {
                  id: 101,
                  text: "Una interfaz en Java:",
                  answers: [
                    {
                      text: "Puede contener únicamente atributos privados.",
                      correct: false,
                    },
                    {
                      text: "Define un conjunto de métodos que una clase debe implementar.",
                      correct: true,
                    },
                    { text: "Es igual que una clase normal.", correct: false },
                    { text: "No puede contener métodos.", correct: false },
                  ],
                },
                {
                  id: 102,
                  text: "Para implementar una interfaz se utiliza la palabra clave:",
                  answers: [
                    { text: "extends", correct: false },
                    { text: "inherits", correct: false },
                    { text: "implements", correct: true },
                    { text: "super", correct: false },
                  ],
                },
                {
                  id: 103,
                  text: "Java permite herencia múltiple de:",
                  answers: [
                    { text: "Clases.", correct: false },
                    { text: "Interfaces.", correct: true },
                    { text: "Clases abstractas únicamente.", correct: false },
                    { text: "Constructores.", correct: false },
                  ],
                },
                {
                  id: 104,
                  text: "El encapsulamiento consiste en:",
                  answers: [
                    {
                      text: "Hacer todos los atributos públicos.",
                      correct: false,
                    },
                    {
                      text: "Proteger los datos restringiendo el acceso directo mediante modificadores y métodos.",
                      correct: true,
                    },
                    {
                      text: "Eliminar los métodos de una clase.",
                      correct: false,
                    },
                    {
                      text: "Permitir acceso global a todo el programa.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 105,
                  text: "¿Qué modificador de acceso impide el acceso desde otras clases?",
                  answers: [
                    { text: "public", correct: false },
                    { text: "protected", correct: false },
                    { text: "private", correct: true },
                    { text: "static", correct: false },
                  ],
                },

                {
                  id: 251,
                  text: "Al hablar de hardware y software, ¿cuál de ellos ha tenido tradicionalmente más importancia?",
                  answers: [
                    { text: "El software.", correct: false },
                    {
                      text: "Ambos han tenido siempre la misma importancia.",
                      correct: false,
                    },
                    { text: "Hardware.", correct: true },
                  ],
                },
                {
                  id: 252,
                  text: "Los lenguajes de programación de alto nivel ___________.",
                  answers: [
                    {
                      text: "Son menos potentes que el lenguaje ensamblador.",
                      correct: false,
                    },
                    {
                      text: "Son dependientes de la plataforma y el microprocesador.",
                      correct: false,
                    },
                    {
                      text: "Son muy cercanos al lenguaje humano.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 253,
                  text: "¿Cuál de las siguientes afirmaciones es correcta?",
                  answers: [
                    {
                      text: "La finitud garantiza que un algoritmo nunca termine.",
                      correct: false,
                    },
                    {
                      text: "Es recomendable que los algoritmos generen resultados diferentes para las mismas entradas.",
                      correct: false,
                    },
                    {
                      text: "Es obligatorio garantizar el determinismo de los algoritmos.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 254,
                  text: "La fase de análisis y diseño ______________.",
                  answers: [
                    {
                      text: "Permite facilitar el desarrollo del software.",
                      correct: true,
                    },
                    {
                      text: "No es relevante en el desarrollo del software.",
                      correct: false,
                    },
                    {
                      text: "No puede ser modificada en ningún momento durante el desarrollo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 255,
                  text: "A la hora de elegir el nombre para una variable:",
                  answers: [
                    {
                      text: "Se podrá repetir el nombre de las variables.",
                      correct: false,
                    },
                    { text: "Puede empezar por un número.", correct: false },
                    {
                      text: "Se debe elegir un nombre significativo.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 256,
                  text: "Indica cuál de las siguientes declaraciones de variables es correcta:",
                  answers: [
                    { text: "double int nota", correct: false },
                    { text: "char una_letra = ‘t’", correct: true },
                    { text: "int edad de persona", correct: false },
                  ],
                },
                {
                  id: 257,
                  text: "Las constantes ________.",
                  answers: [
                    {
                      text: "Pueden cambiar su valor en cualquier momento.",
                      correct: false,
                    },
                    { text: "Nunca pueden cambiar su valor.", correct: false },
                    {
                      text: "Solo está permitido asignar valor una vez después de su declaración.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 258,
                  text: "¿Cuál de las siguientes afirmaciones sobre los comentarios de código es incorrecta?",
                  answers: [
                    {
                      text: "Existen tres tipos de comentarios de código, de una línea, de dos líneas y multilínea.",
                      correct: false,
                    },
                    {
                      text: "En los comentarios de código podemos escribir lo que queramos a modo de aclaración, siempre que usemos el comentario multilínea, ya que nos ofrece más líneas.",
                      correct: false,
                    },
                    {
                      text: "En los comentarios de código podemos escribir lo que queramos a modo de aclaración, ya que lo primero que hará el compilador será obviarlos.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 259,
                  text: "En la programación estructurada:",
                  answers: [
                    {
                      text: "Se obtienen varios bloques de programa, los cuales pueden ser difíciles de mantener si crece el programa.",
                      correct: false,
                    },
                    {
                      text: "Disminuye la productividad del programador.",
                      correct: false,
                    },
                    {
                      text: "Un programa podrá ser desarrollado por partes fácilmente ensamblables.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 260,
                  text: "¿Cuándo se ejecutará el siguiente código? \nScanner teclado_int = new Scanner(System.in);\nint numero;\nSystem.out.println(“Introduce un número: “);\nnumero = teclado_int.nextInt();\nif(numero % 5 == 0) {\nSystem.out.println(“Bloque ejecutado”);\n}",
                  answers: [
                    { text: "No se ejecuta nunca.", correct: false },
                    {
                      text: "Se ejecutará cuando el número introducido sea múltiplo de 5.",
                      correct: true,
                    },
                    {
                      text: "Se ejecutará cuando el número introducido sea par.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 261,
                  text: "¿Hasta cuándo se estará ejecutando el siguiente bucle while? \nScanner teclado = new Scanner(System.in); \nint numero = 20;\nwhile(numero % 3 == 0) {\nSystem.out.println(“Introduce un numero”);\nnumero = teclado_int.nextInt();\n}",
                  answers: [
                    { text: "No se ejecutará nunca.", correct: true },
                    {
                      text: "Se ejecutará siempre y cuando introduzcamos el número 3.",
                      correct: false,
                    },
                    {
                      text: "Se estará ejecutando mientras que introduzcamos números múltiplos de 3.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 262,
                  text: "¿Cuáles son los componentes de la cabecera de un bucle for?",
                  answers: [
                    {
                      text: "Incremento del contador, condición de parada, creación del contador.",
                      correct: false,
                    },
                    {
                      text: "Condición de parada e incremento del contador.",
                      correct: false,
                    },
                    {
                      text: "Creación de contador, condición de parada, incremento del contador.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 263,
                  text: "El diseño modular_________.",
                  answers: [
                    {
                      text: "Surge de manera previa a la programación estructurada.",
                      correct: false,
                    },
                    {
                      text: "Es una práctica poco recomendada.",
                      correct: false,
                    },
                    {
                      text: "Permite crear fragmentos de código con una funcionalidad acotada.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 264,
                  text: "Las funciones___________.",
                  answers: [
                    {
                      text: "Son más lentas que los procedimientos.",
                      correct: false,
                    },
                    {
                      text: "Carecen de un ámbito de visibilidad propia.",
                      correct: false,
                    },
                    {
                      text: "Deben devolver siempre un resultado.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 265,
                  text: "¿Qué tipo de paso de parámetros se utiliza para el tipo int?",
                  answers: [
                    { text: "Por valor.", correct: true },
                    { text: "Por referencia.", correct: false },
                    { text: "Por copia.", correct: false },
                  ],
                },
                {
                  id: 266,
                  text: "La forma de distinguir entre dos funciones sobrecargadas es ___________.",
                  answers: [
                    { text: "Mediante su nombre.", correct: false },
                    { text: "Mediante el tipo devuelto.", correct: false },
                    { text: "Mediante su lista de parámetros.", correct: true },
                  ],
                },
                {
                  id: 267,
                  text: "¿Cuál de las siguientes afirmaciones es correcta?",
                  answers: [
                    {
                      text: "La utilización de la recursividad es más segura que las soluciones iterativas.",
                      correct: false,
                    },
                    {
                      text: "La recursividad siempre finaliza su flujo de ejecución.",
                      correct: false,
                    },
                    {
                      text: "La recursividad puede acabar con los recursos de la máquina.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 268,
                  text: "¿Cuál de las siguientes afirmaciones es correcta?",
                  answers: [
                    {
                      text: "La recursividad siempre requiere de la utilización de funciones.",
                      correct: false,
                    },
                    {
                      text: "La implementación de la serie de Fibonacci es más compleja empleando recursividad.",
                      correct: false,
                    },
                    {
                      text: "La serie de Fibonacci requiere dos llamadas recursivas.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 269,
                  text: "¿Cuál de las siguientes afirmaciones es correcta?",
                  answers: [
                    {
                      text: "La recursividad múltiple aumenta el valor de los parámetros de entrada.",
                      correct: false,
                    },
                    {
                      text: "La recursividad indirecta puede ser complicada de detectar.",
                      correct: true,
                    },
                    {
                      text: "La recursividad directa realiza múltiples llamadas recursivas.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 270,
                  text: "¿Cuál es el propósito del uso del driver en la implementación de un método recursivo?",
                  answers: [
                    {
                      text: "Evitar el uso de recursión y convertir la solución en iterativa.",
                      correct: false,
                    },
                    {
                      text: "Inicializar parámetros y manejar casos especiales antes de llamar al método recursivo real.",
                      correct: true,
                    },
                    {
                      text: "Garantizar que el método recursivo se ejecute en un orden específico.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 271,
                  text: "Para poder declarar una variable de tipo array, es necesario indicar al menos los siguientes parámetros:",
                  answers: [
                    {
                      text: "Nombre de la variable, longitud y valores.",
                      correct: false,
                    },
                    {
                      text: "Nombre de la variable y tipo de dato.",
                      correct: false,
                    },
                    {
                      text: "Nombre de la variable, tipo de dato y longitud.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 272,
                  text: "El método de inserción tiene una complejidad de _______.",
                  answers: [
                    { text: "O(log n).", correct: false },
                    { text: "O(n).", correct: true },
                    { text: "O(n²).", correct: false },
                  ],
                },
                {
                  id: 273,
                  text: "¿Qué realiza este código?\nint[][] matriz = int[3][4];",
                  answers: [
                    {
                      text: "Este código crea una matriz de 3 filas y 4 columnas.",
                      correct: false,
                    },
                    {
                      text: "Este código crea una matriz de 4 filas y 3 columnas.",
                      correct: false,
                    },
                    { text: "Este código no funciona.", correct: true },
                  ],
                },
                {
                  id: 274,
                  text: "¿Qué método se encarga de comparar dos cadenas?",
                  answers: [
                    { text: "length().", correct: false },
                    { text: "compareTo().", correct: false },
                    { text: "equals().", correct: true },
                  ],
                },
                {
                  id: 275,
                  text: "¿Qué principio proporciona a un objeto la posibilidad de tener diferentes comportamientos que están asociados a diferentes objetos?",
                  answers: [
                    { text: "Abstracción", correct: false },
                    { text: "Encapsulación", correct: false },
                    { text: "Polimorfismo", correct: true },
                  ],
                },
                {
                  id: 276,
                  text: "¿Qué tipo específico de método es empleado para asignar valores a los datos de un objeto?",
                  answers: [
                    { text: "Modificador", correct: false },
                    { text: "Observador", correct: false },
                    { text: "Constructor", correct: true },
                  ],
                },
                {
                  id: 277,
                  text: "La relación entre el modelo T-Roc y Coche es de __________.",
                  answers: [
                    { text: "Dependencia", correct: false },
                    { text: "Asociación", correct: false },
                    { text: "Generalización", correct: true },
                  ],
                },
                {
                  id: 278,
                  text: "La relación de _________ forma parte de la relación de asociación.",
                  answers: [
                    { text: "Descomposición", correct: false },
                    { text: "Herencia", correct: false },
                    { text: "Agregación", correct: true },
                  ],
                },
                {
                  id: 279,
                  text: "¿Qué propiedad nos va a permitir distinguir un objeto de otro del mismo tipo?",
                  answers: [
                    { text: "El comportamiento.", correct: false },
                    { text: "El estado.", correct: false },
                    { text: "La identidad.", correct: true },
                  ],
                },
                {
                  id: 280,
                  text: "La zona de memoria donde se van a almacenar las variables globales del programa:",
                  answers: [
                    { text: "Área de código.", correct: false },
                    { text: "Área de datos reservada.", correct: false },
                    { text: "Área de datos estática.", correct: true },
                  ],
                },
                {
                  id: 281,
                  text: "Al emplear una variable ______ sobre una variable _________ se produce la ocultación de variables.",
                  answers: [
                    { text: "Clase – Local.", correct: true },
                    { text: "Local – Ámbito.", correct: false },
                    { text: "Local – Clase.", correct: false },
                  ],
                },
                {
                  id: 282,
                  text: "¿Qué afirmación es correcta con respecto al paso de parámetros?",
                  answers: [
                    {
                      text: "Los parámetros de tipo primitivo se pasan por referencia.",
                      correct: false,
                    },
                    {
                      text: "Los parámetros de tipo objeto se pasan por valor.",
                      correct: false,
                    },
                    {
                      text: "Los parámetros de tipo objeto se pasan por valor de referencia.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 283,
                  text: "¿Cuántas veces se ejecutan los bloques estáticos?",
                  answers: [
                    { text: "2", correct: false },
                    { text: "1", correct: true },
                  ],
                },
                {
                  id: 284,
                  text: "Cuando ambas clases pertenecen a paquetes distintos se dice que son:",
                  answers: [
                    { text: "Vecinas.", correct: false },
                    { text: "Diferentes.", correct: false },
                    { text: "Externas.", correct: true },
                  ],
                },
                {
                  id: 285,
                  text: "¿Cuántas bibliotecas podemos importar en nuestro proyecto?",
                  answers: [
                    {
                      text: "Tantas bibliotecas como necesitemos mientras sean externas.",
                      correct: false,
                    },
                    {
                      text: "Tantas bibliotecas como necesitemos mientras sean propias.",
                      correct: false,
                    },
                    {
                      text: "Tantas bibliotecas, propias o externas, como necesitemos.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 286,
                  text: "¿Qué extensión tienen las bibliotecas en Java?",
                  answers: [
                    { text: ".blio", correct: false },
                    { text: ".java", correct: false },
                    { text: ".jar", correct: true },
                  ],
                },
                {
                  id: 287,
                  text: "¿Cuál de las siguientes afirmaciones es correcta con relación a la herencia en programación orientada a objetos?",
                  answers: [
                    {
                      text: "La clase hija puede acceder directamente a los atributos privados de la clase padre.",
                      correct: false,
                    },
                    {
                      text: "La herencia permite crear clases que se apoyan en otras, reduciendo la complejidad y recodificación.",
                      correct: true,
                    },
                    {
                      text: "Cuando una clase hereda de otra, los métodos heredados deben ser reimplementados en la clase hija.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 288,
                  text: "¿Se puede acceder a un atributo con visibilidad protected sin heredar de la clase que lo contiene?",
                  answers: [
                    {
                      text: "No, protected actúa como private si no se hereda.",
                      correct: false,
                    },
                    {
                      text: "Sí, protected actúa como public siempre.",
                      correct: false,
                    },
                    {
                      text: "Sí, siempre que se esté en el mismo paquete que la clase que contiene la variable protected.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 289,
                  text: "¿Cuáles son los métodos que podemos sobrescribir en una clase?",
                  answers: [
                    { text: "Todos.", correct: false },
                    {
                      text: "Solo los métodos que no sean ni constructores ni observadores ni modificadores.",
                      correct: false,
                    },
                    { text: "Todos salvo los constructores.", correct: true },
                  ],
                },
                {
                  id: 290,
                  text: "¿Qué efecto tiene final en una clase?",
                  answers: [
                    {
                      text: "De esa clase tendrá que heredar, mínimo, otra clase de forma obligatoria.",
                      correct: false,
                    },
                    {
                      text: "Final solo se puede utilizar con variables y métodos, no con clases.",
                      correct: false,
                    },
                    {
                      text: "Hará que de esa clase no se pueda heredar.",
                      correct: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "digitalizacion",
      name: "digitalizacion",
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
                  id: 1,
                  text: "¿Qué invento fue vital para la Primera Revolución Industrial?",
                  answers: [
                    { text: "La electricidad", correct: false },
                    { text: "La máquina de vapor", correct: true },
                    { text: "Los primeros ordenadores", correct: false },
                    { text: "Las herramientas manuales", correct: false },
                  ],
                },
                {
                  id: 2,
                  text: "¿Qué descubrimiento fue vital para la Segunda Revolución Industrial?",
                  answers: [
                    { text: "La electricidad", correct: true },
                    { text: "La máquina de vapor", correct: false },
                    { text: "Los primeros ordenadores", correct: false },
                    { text: "Las herramientas manuales", correct: false },
                  ],
                },
                {
                  id: 3,
                  text: "¿En qué revolución industrial se empieza a tener una economía más interconectada y orientada a los servicios?",
                  answers: [
                    { text: "Primera Revolución Industrial", correct: false },
                    { text: "Segunda Revolución Industrial", correct: false },
                    { text: "Tercera Revolución Industrial", correct: true },
                    { text: "Cuarta Revolución Industrial", correct: false },
                  ],
                },
                {
                  id: 4,
                  text: "¿En qué revolución industrial apareció la producción en cadena?",
                  answers: [
                    { text: "Primera Revolución Industrial", correct: false },
                    { text: "Segunda Revolución Industrial", correct: true },
                    { text: "Tercera Revolución Industrial", correct: false },
                    { text: "Cuarta Revolución Industrial", correct: false },
                  ],
                },
                {
                  id: 5,
                  text: "¿En qué revolución industrial se trabaja con big data?",
                  answers: [
                    { text: "Primera Revolución Industrial", correct: false },
                    { text: "Segunda Revolución Industrial", correct: false },
                    { text: "Tercera Revolución Industrial", correct: false },
                    { text: "Cuarta Revolución Industrial", correct: true },
                  ],
                },
                {
                  id: 6,
                  text: "¿Qué significan las siglas THD?",
                  answers: [
                    {
                      text: "Tecnologías Habilitadoras Digitales",
                      correct: true,
                    },
                    {
                      text: "Técnicas Habilitadoras Digitales",
                      correct: false,
                    },
                    {
                      text: "Técnicas Humanizadoras Digitales",
                      correct: false,
                    },
                    {
                      text: "Tecnologías Humanizadoras Digitales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 7,
                  text: "Los sistemas ciberfísicos",
                  answers: [
                    { text: "Son sistemas integrados físicos", correct: false },
                    {
                      text: "Son sistemas integrados virtuales",
                      correct: false,
                    },
                    {
                      text: "Son sistemas integrados que combinan componentes físicos y virtuales",
                      correct: true,
                    },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: 8,
                  text: "¿Qué es la interoperabilidad?",
                  answers: [
                    {
                      text: "La capacidad de tener distintas opciones para elegir",
                      correct: false,
                    },
                    {
                      text: "La protección de la privacidad de la información",
                      correct: false,
                    },
                    {
                      text: "La integración de sistemas de diferentes proveedores y tecnologías",
                      correct: true,
                    },
                    {
                      text: "La capacidad de poder responder a ataques cibernéticos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 9,
                  text: "¿Cuál no es una característica de las THD?",
                  answers: [
                    { text: "Poca variabilidad", correct: true },
                    { text: "Fuerte inversión de capital", correct: false },
                    { text: "Ciclo de innovaciones ágiles", correct: false },
                    {
                      text: "Alto nivel de investigación y desarrollo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 10,
                  text: "¿Qué característica distintiva permite identificar tendencias, patrones y oportunidades?",
                  answers: [
                    { text: "Automatización", correct: false },
                    { text: "Personalización", correct: false },
                    { text: "Analítica avanzada", correct: true },
                    { text: "Conectividad", correct: false },
                  ],
                },
                {
                  id: 11,
                  text: "¿Quién tiene como objetivo principal garantizar la operación segura y eficiente de los sistemas físicos y la producción de bienes y servicios?",
                  answers: [
                    { text: "IT", correct: false },
                    { text: "OT", correct: true },
                  ],
                },
                {
                  id: 12,
                  text: "¿Cuál es una tecnología habilitadora digital del IT?",
                  answers: [
                    { text: "Sistema SCADA", correct: false },
                    { text: "Sistema de control industrial", correct: false },
                    { text: "Cloud computing", correct: true },
                    { text: "Internet de las cosas", correct: false },
                  ],
                },
                {
                  id: 13,
                  text: "¿Cuál es una característica de la evolución de la estructura organizativa en la era digital?",
                  answers: [
                    {
                      text: "Jerarquías rígidas y silos departamentales",
                      correct: false,
                    },
                    {
                      text: "Flexibilidad, agilidad y colaboración",
                      correct: true,
                    },
                    {
                      text: "Estancamiento y resistencia al cambio",
                      correct: false,
                    },
                    { text: "Centralización y burocracia", correct: false },
                  ],
                },
                {
                  id: 14,
                  text: "¿Qué tecnología digital se utiliza para mejorar la eficiencia en la logística empresarial?",
                  answers: [
                    {
                      text: "Redes sociales y correo electrónico",
                      correct: false,
                    },
                    {
                      text: "Fabricación inteligente y Internet de las cosas",
                      correct: false,
                    },
                    {
                      text: "Sistemas de gestión de almacenes basados en la nube",
                      correct: true,
                    },
                    {
                      text: "Procesadores de texto y hojas de cálculo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 15,
                  text: "¿Cómo contribuye la digitalización al departamento de recursos humanos?",
                  answers: [
                    {
                      text: "Incrementando la burocracia en la gestión del talento",
                      correct: false,
                    },
                    {
                      text: "Utilizando análisis predictivo para la selección y retención de empleados",
                      correct: true,
                    },
                    {
                      text: "Reduciendo la necesidad de formación continua",
                      correct: false,
                    },
                    {
                      text: "Eliminando la necesidad de plataformas digitales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 16,
                  text: "¿Cuál es el objetivo principal de las Tecnologías de la Información (IT)?",
                  answers: [
                    {
                      text: "Controlar procesos físicos y operativos en entornos industriales",
                      correct: false,
                    },
                    {
                      text: "Gestionar y manipular datos para facilitar la toma de decisiones",
                      correct: true,
                    },
                    {
                      text: "Garantizar la operación segura y eficiente de los sistemas físicos",
                      correct: false,
                    },
                    {
                      text: "Mejorar la eficiencia operativa y proporcionar información útil para la organización",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 17,
                  text: "¿Cuál es una característica de las Tecnologías Operativas (OT)?",
                  answers: [
                    {
                      text: "Utiliza sistemas y aplicaciones de software para procesar y almacenar datos",
                      correct: false,
                    },
                    {
                      text: "Se enfoca en la eficiencia, la productividad y la toma de decisiones basada en datos",
                      correct: false,
                    },
                    {
                      text: "Utiliza dispositivos físicos como sensores y controladores para monitorear y controlar sistemas",
                      correct: true,
                    },
                    {
                      text: "Utiliza redes de comunicación para transmitir datos entre dispositivos y usuarios",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 18,
                  text: "¿Cuál es uno de los beneficios de la integración entre IT y OT en la digitalización empresarial?",
                  answers: [
                    {
                      text: "Aumento de la burocracia y rigidez en los procesos de producción",
                      correct: false,
                    },
                    {
                      text: "Reducción de la flexibilidad y eficiencia en la cadena de valor",
                      correct: false,
                    },
                    {
                      text: "Mejora de la calidad del producto y la seguridad operativa",
                      correct: true,
                    },
                    {
                      text: "Disminución de la colaboración entre equipos de trabajo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 19,
                  text: "¿Qué tecnología habilitadora digital en el entorno IT facilita el almacenamiento escalable de datos y la ejecución de aplicaciones en servidores remotos?",
                  answers: [
                    { text: "Big Data y analítica", correct: false },
                    { text: "Seguridad cibernética", correct: false },
                    { text: "Cloud computing", correct: true },
                    {
                      text: "Inteligencia Artificial (IA) y Machine Learning",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 20,
                  text: "¿Qué función desempeña la Inteligencia Artificial (IA) y el Machine Learning en el entorno IT?",
                  answers: [
                    {
                      text: "Proteger los sistemas, redes y datos de amenazas cibernéticas",
                      correct: false,
                    },
                    {
                      text: "Facilitar la recopilación, almacenamiento y análisis de grandes volúmenes de datos",
                      correct: false,
                    },
                    {
                      text: "Automatizar tareas repetitivas y realizar análisis predictivo",
                      correct: true,
                    },
                    {
                      text: "Identificar patrones, tendencias y oportunidades de negocio",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 21,
                  text: "¿Qué implica el cambio organizativo y cultural durante la transformación digital de una empresa?",
                  answers: [
                    {
                      text: "Mantener una cultura estática y resistente al cambio",
                      correct: false,
                    },
                    {
                      text: "Fomentar una cultura de innovación, colaboración y adaptabilidad",
                      correct: true,
                    },
                    {
                      text: "Eliminar la necesidad de capacitación de los empleados",
                      correct: false,
                    },
                    {
                      text: "Limitar la adopción de nuevas tecnologías",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 22,
                  text: "¿Cuál es una acción importante en la etapa de formación y capacitación durante la transformación digital de una empresa?",
                  answers: [
                    {
                      text: "Reducción del presupuesto destinado a la formación",
                      correct: false,
                    },
                    {
                      text: "Proporcionar formación y capacitación en competencias digitales",
                      correct: true,
                    },
                    {
                      text: "Excluir a ciertos empleados de la formación",
                      correct: false,
                    },
                    {
                      text: "Ignorar el progreso y los ajustes necesarios",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 23,
                  text: "¿Cuál es una de las características más destacadas del 5G en comparación con las redes 4G?",
                  answers: [
                    { text: "Mayor latencia", correct: false },
                    { text: "Menor velocidad de conexión", correct: false },
                    { text: "Mayor capacidad de conexión", correct: true },
                    { text: "Menor ancho de banda", correct: false },
                  ],
                },
                {
                  id: 24,
                  text: "¿Qué beneficio ofrece el uso extensivo de la virtualización de redes en el 5G?",
                  answers: [
                    { text: "Mayor latencia", correct: false },
                    {
                      text: "Menor flexibilidad en la gestión de recursos de red",
                      correct: false,
                    },
                    {
                      text: "Mayor eficiencia en la gestión de recursos de red",
                      correct: true,
                    },
                    { text: "Menor velocidad de conexión", correct: false },
                  ],
                },
                {
                  id: 25,
                  text: "¿Qué modelo de servicio en la computación en la nube proporciona un entorno completo de desarrollo y ejecución para aplicaciones, incluyendo herramientas de desarrollo, bases de datos y servicios de despliegue?",
                  answers: [
                    {
                      text: "Infraestructura como Servicio (IaaS)",
                      correct: false,
                    },
                    { text: "Plataforma como Servicio (PaaS)", correct: true },
                    { text: "Software como Servicio (SaaS)", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 26,
                  text: "¿Cuál es uno de los beneficios principales de la computación en la nube que permite a las organizaciones adaptarse rápidamente a las demandas cambiantes del mercado, experimentar con nuevas ideas y proyectos, y aprovechar tecnologías emergentes sin grandes inversiones en infraestructura?",
                  answers: [
                    {
                      text: "Mayor complejidad en la gestión de recursos informáticos",
                      correct: false,
                    },
                    { text: "Reducción de la seguridad", correct: false },
                    { text: "Escalabilidad y flexibilidad", correct: true },
                    {
                      text: "Menor disponibilidad de recursos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 27,
                  text: '¿Cuál de las siguientes características NO es una de las "3V" asociadas con el Big Data?',
                  answers: [
                    { text: "Volumen", correct: false },
                    { text: "Variedad", correct: false },
                    { text: "Validez", correct: true },
                    { text: "Velocidad", correct: false },
                  ],
                },
                {
                  id: 28,
                  text: "¿Qué tecnologías de procesamiento distribuido se utilizan para el procesamiento eficiente de grandes conjuntos de datos en el contexto del Big Data?",
                  answers: [
                    { text: "Hadoop y Apache Spark", correct: true },
                    { text: "Bases de datos relacionales", correct: false },
                    {
                      text: "Sistemas de almacenamiento en la nube",
                      correct: false,
                    },
                    { text: "NoSQL", correct: false },
                  ],
                },
                {
                  id: 29,
                  text: "¿Cuál de las siguientes capas del IoT se encarga de garantizar la disponibilidad, la seguridad y la eficiencia en la transmisión de datos a través de la red?",
                  answers: [
                    { text: "Conectividad", correct: false },
                    { text: "Capa de red", correct: true },
                    { text: "Plataforma de gestión", correct: false },
                    { text: "Aplicaciones y servicios", correct: false },
                  ],
                },
                {
                  id: 30,
                  text: "¿Cuál de las siguientes amenazas se encuentra principalmente en entornos OT?",
                  answers: [
                    { text: "Ataques de phishing", correct: false },
                    {
                      text: "Ataques de denegación de servicio (DDoS)",
                      correct: false,
                    },
                    {
                      text: "Ataques a Sistemas de Control Industrial (ICS)",
                      correct: true,
                    },
                    { text: "Ingeniería social", correct: false },
                  ],
                },
                {
                  id: 31,
                  text: "¿Cuál de las siguientes amenazas se encuentra principalmente en entornos IT?",
                  answers: [
                    {
                      text: "Ataques a Sistemas de Control Industrial (ICS)",
                      correct: false,
                    },
                    {
                      text: "Manipulación de datos y procesos",
                      correct: false,
                    },
                    { text: "Malware", correct: true },
                    {
                      text: "Ataques de ransomware industrial",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 32,
                  text: "¿Cuál es una similitud entre la Tecnología de Libro Mayor Distribuido (DLT) y la tecnología Blockchain?",
                  answers: [
                    {
                      text: "Utilizan una cadena inmutable de bloques enlazados para almacenar información",
                      correct: true,
                    },
                    {
                      text: "Están diseñadas para operar en entornos centralizados",
                      correct: false,
                    },
                    {
                      text: "No proporcionan un registro transparente y auditable de las transacciones",
                      correct: false,
                    },
                    {
                      text: "No ofrecen un alto nivel de seguridad mediante criptografía avanzada",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 33,
                  text: "¿Cuál de los siguientes no es uno de los pilares fundamentales de la Inteligencia Artificial (IA)?",
                  answers: [
                    { text: "Lógica y razonamiento", correct: false },
                    { text: "Representación del conocimiento", correct: false },
                    { text: "Cálculo y matemáticas avanzadas", correct: true },
                    { text: "Percepción", correct: false },
                  ],
                },
                {
                  id: 34,
                  text: "¿Qué técnica de aprendizaje implica entrenar a un modelo con ejemplos etiquetados?",
                  answers: [
                    { text: "Aprendizaje supervisado", correct: true },
                    { text: "Aprendizaje no supervisado", correct: false },
                    { text: "Aprendizaje por refuerzo", correct: false },
                    { text: "Aprendizaje semi-supervisado", correct: false },
                  ],
                },
                {
                  id: 35,
                  text: "¿Cuál de las siguientes tecnologías de Realidad Inmersiva permite a los usuarios sumergirse completamente en entornos digitales generados por computadora?",
                  answers: [
                    { text: "Realidad Aumentada (AR)", correct: false },
                    { text: "Realidad Virtual (VR)", correct: true },
                    { text: "Realidad Mixta (MR)", correct: false },
                    { text: "Realidad Híbrida (HR)", correct: false },
                  ],
                },
                {
                  id: 36,
                  text: "¿Qué tecnología de Realidad Inmersiva combina elementos del mundo real con elementos virtuales, superponiendo información digital en el entorno físico del usuario?",
                  answers: [
                    { text: "Realidad Aumentada (AR)", correct: true },
                    { text: "Realidad Virtual (VR)", correct: false },
                    { text: "Realidad Mixta (MR)", correct: false },
                    { text: "Realidad Híbrida (HR)", correct: false },
                  ],
                },
                {
                  id: 37,
                  text: "¿Cuál de las siguientes afirmaciones es verdadera acerca de los cobots?",
                  answers: [
                    {
                      text: "Los cobots están diseñados para trabajar de forma autónoma sin interacción con humanos",
                      correct: false,
                    },
                    {
                      text: "Los cobots son robots industriales tradicionales confinados a jaulas de seguridad",
                      correct: false,
                    },
                    {
                      text: "Los cobots están equipados con sensores avanzados y sistemas de seguridad para detectar la presencia de humanos y evitar colisiones o accidentes",
                      correct: true,
                    },
                    {
                      text: "Los cobots no pueden ser reubicados ni reconfigurados",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 38,
                  text: "¿Qué aspecto hace que los robots de Cobótica sean fáciles de programar y reconfigurar, permitiendo a los usuarios enseñarles nuevas tareas sin necesidad de conocimientos especializados en programación?",
                  answers: [
                    { text: "Colaboración", correct: false },
                    { text: "Flexibilidad", correct: false },
                    { text: "Programación intuitiva", correct: true },
                    { text: "Eficiencia", correct: false },
                  ],
                },
                {
                  id: 39,
                  text: "¿Qué permiten los gemelos digitales?",
                  answers: [
                    {
                      text: "Ejecutar simulaciones en el entorno virtual",
                      correct: false,
                    },
                    { text: "Prever fallos antes que ocurran", correct: false },
                    {
                      text: "Rastrear la historia de un producto",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: 40,
                  text: "¿Cuál de los siguientes procesos de impresión 3D utiliza un láser ultravioleta para solidificar resina líquida capa por capa?",
                  answers: [
                    {
                      text: "Fusión e deposición de material (FDM)",
                      correct: false,
                    },
                    { text: "Estereolitografía (SLA)", correct: true },
                    {
                      text: "Sinterización selectiva por láser (SLS)",
                      correct: false,
                    },
                    {
                      text: "Impresión 3D a chorro de tinta (Inkjet 3D)",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 41,
                  text: "¿Qué tipo de material se utiliza comúnmente en el proceso de Sinterización Selectiva por Láser (SLS) en la impresión 3D?",
                  answers: [
                    { text: "Resina líquida", correct: false },
                    { text: "Poliamida o metal en polvo", correct: true },
                    {
                      text: "Material líquido que se solidifica mediante luz UV",
                      correct: false,
                    },
                    {
                      text: "Filamento de plástico que se derrite y se extruye capa por capa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 42,
                  text: "¿Qué aspecto es fundamental en el enfoque Building Information Modeling (BIM) para representar digitalmente todos los aspectos físicos y funcionales de un proyecto de construcción?",
                  answers: [
                    { text: "Base de datos centralizada", correct: false },
                    { text: "Información interoperable", correct: false },
                    { text: "Modelado 3D", correct: true },
                    { text: "Análisis y simulación", correct: false },
                  ],
                },
                {
                  id: 43,
                  text: "¿Cuál no es un paso del análisis de datos en el deporte?",
                  answers: [
                    { text: "Recopilación de datos", correct: false },
                    { text: "Procesamiento de datos", correct: false },
                    { text: "Eliminación de datos", correct: true },
                    { text: "Análisis de insight", correct: false },
                  ],
                },
                {
                  id: 44,
                  text: "¿Qué función desempeñan los sistemas de automatización en la gestión de proyectos de construcción?",
                  answers: [
                    { text: "Generar horarios detallados", correct: false },
                    {
                      text: "Monitorear el progreso en tiempo real",
                      correct: false,
                    },
                    {
                      text: "Almacenar y distribuir documentos",
                      correct: false,
                    },
                    { text: "Todas las anteriores", correct: true },
                  ],
                },
                {
                  id: 45,
                  text: "¿Qué significa MDT?",
                  answers: [
                    { text: "Modelo Digital Temporal", correct: false },
                    { text: "Modelo Digital de Terreno", correct: true },
                    { text: "Muestreo Digital Temporal", correct: false },
                    { text: "Muestreo Digital de Terreno", correct: false },
                  ],
                },
                {
                  id: 46,
                  text: "¿Qué tecnología de Realidad Inmersiva combina elementos del mundo real con elementos virtuales, superponiendo información digital en el entorno físico del usuario?",
                  answers: [
                    { text: "Realidad Aumentada (AR)", correct: true },
                    { text: "Realidad Virtual (VR)", correct: false },
                    { text: "Realidad Mixta (MR)", correct: false },
                    { text: "Realidad Híbrida (HR)", correct: false },
                  ],
                },
                {
                  id: 47,
                  text: "¿Cuál es una función clave de las plataformas de comercio electrónico en el contexto del marketing digital?",
                  answers: [
                    {
                      text: "Analizar datos demográficos, geográficos y de comportamiento del consumidor",
                      correct: false,
                    },
                    {
                      text: "Ofrecer catálogos de productos, carritos de compra y opciones de pago seguras",
                      correct: true,
                    },
                    {
                      text: "Optimizar motores de búsqueda y crear contenido relevante",
                      correct: false,
                    },
                    {
                      text: "Segmentar el mercado objetivo en segmentos más pequeños y específicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 48,
                  text: "¿Mediante qué THD podemos segmentar el mercado en marketing?",
                  answers: [
                    { text: "Gemelos digitales", correct: false },
                    { text: "Inteligencia artificial", correct: false },
                    { text: "Big data", correct: true },
                    { text: "BIM", correct: false },
                  ],
                },
                {
                  id: 49,
                  text: "¿Qué hace el MFA?",
                  answers: [
                    {
                      text: "Monitorean y bloquean actividades sospechosas en la red",
                      correct: false,
                    },
                    {
                      text: "Protege la confidencialidad de los datos mediante algoritmos matemáticos",
                      correct: false,
                    },
                    {
                      text: "Asegura que solo usuarios autorizados puedan acceder a sistemas y aplicaciones",
                      correct: true,
                    },
                    {
                      text: "Detecta patrones anómalos en el uso de sistemas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 50,
                  text: "¿Qué hace el UBA?",
                  answers: [
                    {
                      text: "Monitorean y bloquean actividades sospechosas en la red",
                      correct: false,
                    },
                    {
                      text: "Protege la confidencialidad de los datos mediante algoritmos matemáticos",
                      correct: false,
                    },
                    {
                      text: "Asegura que solo usuarios autorizados puedan acceder a sistemas y aplicaciones",
                      correct: false,
                    },
                    {
                      text: "Detecta patrones anómalos en el uso de sistemas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 51,
                  text: "¿En qué aplicación tiene grandes posibilidades el blockchain en el sector de la sanidad?",
                  answers: [
                    { text: "Consultas virtuales", correct: false },
                    { text: "Gestión de datos médicos", correct: true },
                    { text: "Monitoreo de signos vitales", correct: false },
                    { text: "Detectar anomalías", correct: false },
                  ],
                },
                {
                  id: 52,
                  text: "¿Qué es el crowdfunding?",
                  answers: [
                    {
                      text: "Una app de capacitación de empleo",
                      correct: false,
                    },
                    {
                      text: "Una plataforma de gestión de voluntariado",
                      correct: false,
                    },
                    {
                      text: "Una plataforma para recaudar fondos",
                      correct: true,
                    },
                    { text: "Una app con recursos educativos", correct: false },
                  ],
                },
                {
                  id: 53,
                  text: "¿Cuál es la definición formal de Cloud Computing según el Instituto Nacional de Estándares y Tecnologías (NIST)?",
                  answers: [
                    {
                      text: "Un modelo que permite el acceso a redes adecuadas, desde cualquier lugar y bajo demanda, a un conjunto compartido de recursos informáticos",
                      correct: true,
                    },
                    {
                      text: "Un modelo que permite el acceso a redes inadecuadas, desde cualquier lugar y bajo demanda, a un conjunto compartido de recursos informáticos",
                      correct: false,
                    },
                    {
                      text: "Un modelo que restringe el acceso a redes adecuadas, desde cualquier lugar y bajo demanda, a un conjunto compartido de recursos informáticos",
                      correct: false,
                    },
                    {
                      text: "Un modelo que permite el acceso a redes adecuadas, desde cualquier lugar y bajo demanda, a recursos informáticos exclusivos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 54,
                  text: "¿Qué tipo de servicio de Cloud Computing proporciona una plataforma de desarrollo completa y herramientas para desarrollar, probar y desplegar aplicaciones web y móviles?",
                  answers: [
                    {
                      text: "Infraestructura como servicio (IaaS)",
                      correct: false,
                    },
                    { text: "Plataforma como servicio (PaaS)", correct: true },
                    { text: "Software como servicio (SaaS)", correct: false },
                    { text: "Red como servicio (RaaS)", correct: false },
                  ],
                },
                {
                  id: 55,
                  text: "¿Qué característica principal define a la tecnología de Cloud Computing?",
                  answers: [
                    {
                      text: "La accesibilidad para el usuario desde cualquier lugar y en cualquier momento",
                      correct: true,
                    },
                    {
                      text: "La restricción de acceso a datos y recursos",
                      correct: false,
                    },
                    {
                      text: "La necesidad de interacción constante con el proveedor de servicios",
                      correct: false,
                    },
                    {
                      text: "La complejidad de su gestión y mantenimiento",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 56,
                  text: "¿Cómo se llama a las nubes compartidas por varias organizaciones?",
                  answers: [
                    { text: "Públicas", correct: false },
                    { text: "Privadas", correct: false },
                    { text: "Híbridas", correct: false },
                    { text: "Comunitaria", correct: true },
                  ],
                },
                {
                  id: 57,
                  text: "¿Cuál es la característica principal de las nubes privadas?",
                  answers: [
                    {
                      text: "Ofrecen una escalabilidad y una flexibilidad excepcionales",
                      correct: false,
                    },
                    {
                      text: "Están ubicadas en el centro de datos de la organización",
                      correct: false,
                    },
                    {
                      text: "Ofrecen un mayor control sobre la seguridad y el cumplimiento normativo",
                      correct: true,
                    },
                    {
                      text: "Permiten compartir los costos de la infraestructura de nube entre varias organizaciones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 58,
                  text: "¿Qué significa el modelo de pago por uso en la infraestructura como servicio (IaaS)?",
                  answers: [
                    {
                      text: "Se paga una tarifa fija independientemente del uso",
                      correct: false,
                    },
                    {
                      text: "Se paga por los recursos utilizados solo cuando se supera un límite predeterminado",
                      correct: false,
                    },
                    {
                      text: "Se paga solo por los recursos que se utilizan",
                      correct: true,
                    },
                    {
                      text: "No hay costos asociados con el uso de recursos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 59,
                  text: "¿Qué ventaja ofrece la infraestructura como servicio (IaaS) en términos de escalabilidad?",
                  answers: [
                    {
                      text: "Se pueden reducir los retrasos en el aprovisionamiento",
                      correct: false,
                    },
                    {
                      text: "Puede adaptarse a picos de demanda inesperados de forma casi inmediata",
                      correct: true,
                    },
                    {
                      text: "Ofrece redundancia y tolerancia a fallos integrados",
                      correct: false,
                    },
                    {
                      text: "Minimiza la latencia y aumenta el rendimiento colocando aplicaciones en regiones cercanas a los usuarios finales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 60,
                  text: "¿Qué tipo de interfaz proporciona la plataforma como servicio (PaaS) para que los desarrolladores trabajen en proyectos desde cualquier ubicación y colaboren sin restricciones con otros miembros del equipo?",
                  answers: [
                    {
                      text: "Interfaz gráfica de usuario (GUI)",
                      correct: false,
                    },
                    {
                      text: "Interfaz de línea de comandos (CLI)",
                      correct: false,
                    },
                    { text: "Interfaz de API", correct: false },
                    { text: "Todas las anteriores", correct: true },
                  ],
                },
                {
                  id: 61,
                  text: "¿Qué característica define al modelo de software como servicio (SaaS)?",
                  answers: [
                    {
                      text: "Los usuarios deben preocuparse por el mantenimiento del servicio",
                      correct: false,
                    },
                    {
                      text: "Los usuarios pueden acceder a las aplicaciones a través de un navegador de Internet",
                      correct: true,
                    },
                    {
                      text: "Los clientes gestionan las aplicaciones y bases de datos",
                      correct: false,
                    },
                    {
                      text: "Los datos de los usuarios se mezclan con los datos de otros clientes",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 62,
                  text: "¿Cómo se clasifica el mercado del software como servicio según su forma de explotación?",
                  answers: [
                    { text: "Por la complejidad del producto", correct: false },
                    {
                      text: "Por el número de clientes atendidos",
                      correct: false,
                    },
                    {
                      text: "Por el tipo de relación con el proveedor y el nivel de servicio requerido",
                      correct: true,
                    },
                    {
                      text: "Por la cantidad de características ofrecidas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 63,
                  text: "¿Cuál es la principal ventaja de la arquitectura de Edge Computing en comparación con un centro de datos centralizado?",
                  answers: [
                    { text: "Mayor coste de mantenimiento", correct: false },
                    { text: "Incremento de la latencia", correct: false },
                    {
                      text: "Reducción de la latencia y optimización del ancho de banda",
                      correct: true,
                    },
                    { text: "Dependencia total de la nube", correct: false },
                  ],
                },
                {
                  id: 64,
                  text: "¿Qué tipos de dispositivos se consideran parte del 'borde' (edge) en Edge Computing?",
                  answers: [
                    { text: "Centros de datos centralizados", correct: false },
                    {
                      text: "Routers, gateways, dispositivos IoT, estaciones base de telecomunicaciones",
                      correct: true,
                    },
                    { text: "Solo dispositivos IoT", correct: false },
                    { text: "Solo servidores en la nube", correct: false },
                  ],
                },
                {
                  id: 65,
                  text: "¿Cómo se complementan el edge y la nube en la arquitectura de Edge Computing?",
                  answers: [
                    {
                      text: "El edge realiza tareas de análisis masivo de datos y la nube tareas de baja latencia",
                      correct: false,
                    },
                    {
                      text: "El edge funciona de manera aislada sin necesidad de la nube",
                      correct: false,
                    },
                    {
                      text: "El edge maneja tareas que requieren baja latencia y procesamiento en tiempo real, mientras que la nube se encarga de análisis masivos de datos y almacenamiento a gran escala",
                      correct: true,
                    },
                    {
                      text: "La nube solo se utiliza para actualizaciones y mantenimiento del edge",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 66,
                  text: "¿Qué es Fog Computing?",
                  answers: [
                    {
                      text: "Un tipo de computación que se realiza exclusivamente en la núcleo de la red",
                      correct: false,
                    },
                    {
                      text: "Una arquitectura de red que extiende las capacidades de la computación en la nube al borde de la red",
                      correct: true,
                    },
                    {
                      text: "Un enfoque que utiliza exclusivamente dispositivos IoT para procesar datos",
                      correct: false,
                    },
                    {
                      text: "Una técnica para reducir la latencia en centros de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 67,
                  text: "¿Cuál de las siguientes es una característica principal de Fog Computing?",
                  answers: [
                    {
                      text: "Aumento de la latencia en el procesamiento de datos",
                      correct: false,
                    },
                    {
                      text: "Centralización exclusiva del procesamiento en la nube",
                      correct: false,
                    },
                    {
                      text: "Preprocesamiento de datos para reducir la cantidad de datos transmitidos a la nube",
                      correct: true,
                    },
                    {
                      text: "Exclusiva compatibilidad con dispositivos móviles",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 68,
                  text: "¿Por qué es importante la reducción de latencia en Fog Computing?",
                  answers: [
                    {
                      text: "Para aumentar los costos de ancho de banda",
                      correct: false,
                    },
                    {
                      text: "Para mejorar aplicaciones en tiempo real como la conducción autónoma y la telemedicina",
                      correct: true,
                    },
                    {
                      text: "Para garantizar que todos los datos se procesen en un solo nodo",
                      correct: false,
                    },
                    {
                      text: "Para evitar la heterogeneidad de dispositivos y protocolos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 69,
                  text: "¿Qué distingue principalmente a Mist Computing de Fog Computing?",
                  answers: [
                    {
                      text: "Se enfoca en la capa intermedia de nodos distribuidos",
                      correct: false,
                    },
                    {
                      text: "Se ocupa del procesamiento en dispositivos extremadamente cercanos al punto de generación de datos",
                      correct: true,
                    },
                    {
                      text: "Se centra exclusivamente en el procesamiento en la nube",
                      correct: false,
                    },
                    {
                      text: "Utiliza recursos ilimitados para el procesamiento de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 70,
                  text: "¿Cuál es una característica clave de los dispositivos utilizados en Mist Computing?",
                  answers: [
                    {
                      text: "Capacidad de procesamiento y almacenamiento ilimitados",
                      correct: false,
                    },
                    {
                      text: "Alta latencia en el procesamiento de datos",
                      correct: false,
                    },
                    {
                      text: "Recursos limitados y capacidad para realizar tareas específicas y ligeras",
                      correct: true,
                    },
                    {
                      text: "Exclusivo enfoque en análisis masivos de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 71,
                  text: "¿Qué implica la reducción de CapEx al adoptar la computación en la nube?",
                  answers: [
                    {
                      text: "Transformar los gastos de capital en gastos operativos",
                      correct: true,
                    },
                    {
                      text: "Incrementar la necesidad de inversiones iniciales en hardware y software",
                      correct: false,
                    },
                    {
                      text: "Incrementar los costos de mantenimiento y gestión",
                      correct: false,
                    },
                    {
                      text: "Aumentar la complejidad de la infraestructura de TI",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 72,
                  text: "¿Cómo contribuye Mist Computing a la eficiencia de la red en un sistema distribuido?",
                  answers: [
                    {
                      text: "Aumentando la carga de trabajo en la capa de fog y en la nube",
                      correct: false,
                    },
                    {
                      text: "Procesando datos masivos en centros de datos centralizados",
                      correct: false,
                    },
                    {
                      text: "Realizando tareas simples directamente en los dispositivos, reduciendo la carga en fog y cloud",
                      correct: true,
                    },
                    {
                      text: "Enfocándose únicamente en el almacenamiento a largo plazo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 73,
                  text: "¿Qué procesos incluye la inteligencia artificial?",
                  answers: [
                    {
                      text: "Solo el aprendizaje y el razonamiento",
                      correct: false,
                    },
                    {
                      text: "La adquisición de información y la toma de decisiones",
                      correct: false,
                    },
                    {
                      text: "El aprendizaje, el razonamiento y la autocorrección",
                      correct: true,
                    },
                    {
                      text: "Solo la percepción visual y el reconocimiento del habla",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 74,
                  text: "¿Cuál de los siguientes es un objetivo principal de la IA?",
                  answers: [
                    { text: "Crear emociones humanas", correct: false },
                    {
                      text: "Aumentar la eficiencia y reducir errores humanos",
                      correct: true,
                    },
                    {
                      text: "Controlar todos los procesos industriales",
                      correct: false,
                    },
                    {
                      text: "Sustituir completamente a los médicos en diagnósticos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 75,
                  text: "¿En qué año se acuñó el término 'inteligencia artificial'?",
                  answers: [
                    { text: "1950", correct: false },
                    { text: "1956", correct: true },
                    { text: "1960", correct: false },
                    { text: "1970", correct: false },
                  ],
                },
                {
                  id: 76,
                  text: "¿Qué evento significativo ocurrió en 1997 relacionado con la inteligencia artificial?",
                  answers: [
                    {
                      text: "La publicación del artículo 'Computing Machinery and Intelligence'",
                      correct: false,
                    },
                    {
                      text: "La invención de LISP por John McCarthy",
                      correct: false,
                    },
                    {
                      text: "La victoria de Deep Blue contra Garry Kasparov",
                      correct: true,
                    },
                    {
                      text: "La victoria de AlphaGo contra el campeón mundial de Go",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 77,
                  text: "¿Cuál es la principal característica de los sistemas expertos en la primera generación de IA?",
                  answers: [
                    {
                      text: "Utilización de grandes volúmenes de datos para aprendizaje",
                      correct: false,
                    },
                    {
                      text: "Emulación de la toma de decisiones de un experto humano en un dominio específico",
                      correct: true,
                    },
                    {
                      text: "Uso de redes neuronales profundas",
                      correct: false,
                    },
                    {
                      text: "Aplicación en motores de recomendación",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 78,
                  text: "¿Qué elemento de los sistemas expertos utiliza las reglas de la base de conocimientos para deducir nueva información?",
                  answers: [
                    { text: "Algoritmo de regresión", correct: false },
                    { text: "Motor de inferencia", correct: true },
                    { text: "Interfaz de usuario", correct: false },
                    { text: "Máquina de vectores de soporte", correct: false },
                  ],
                },
                {
                  id: 79,
                  text: "¿Cuál es la unidad básica de las redes neuronales que realiza tareas de clasificación binaria?",
                  answers: [
                    { text: "Red neuronal profunda", correct: false },
                    { text: "Red convolucional (CNN)", correct: false },
                    { text: "Perceptrón", correct: true },
                    { text: "Red recurrente (RNN)", correct: false },
                  ],
                },
                {
                  id: 80,
                  text: "¿Qué tipo de red neuronal se utiliza principalmente para el procesamiento de secuencias?",
                  answers: [
                    { text: "Red neuronal profunda", correct: false },
                    { text: "Red convolucional (CNN)", correct: false },
                    { text: "Perceptrón", correct: false },
                    { text: "Red recurrente (RNN)", correct: true },
                  ],
                },
                {
                  id: 81,
                  text: "¿Cuál de las siguientes características es propia de la IA débil?",
                  answers: [
                    {
                      text: "Capacidad para transferir conocimiento entre dominios",
                      correct: false,
                    },
                    {
                      text: "Consciencia y comprensión profunda",
                      correct: false,
                    },
                    {
                      text: "Especialización en tareas específicas",
                      correct: true,
                    },
                    {
                      text: "Autonomía en la toma de decisiones",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 82,
                  text: "¿Qué ejemplo es una aplicación de IA débil?",
                  answers: [
                    {
                      text: "Un sistema capaz de entender y aplicar conocimientos humanos",
                      correct: false,
                    },
                    {
                      text: "Un asistente virtual como Siri o Alexa",
                      correct: true,
                    },
                    {
                      text: "Un sistema que puede aprender de experiencias sin intervención humana",
                      correct: false,
                    },
                    {
                      text: "Una inteligencia artificial con autoconciencia",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 83,
                  text: "¿Cuál es una de las razones por las que los datos son cruciales para el desarrollo y el funcionamiento de los sistemas de IA?",
                  answers: [
                    {
                      text: "Para reducir la complejidad de los algoritmos",
                      correct: false,
                    },
                    {
                      text: "Para entrenar, validar y probar los modelos de IA",
                      correct: true,
                    },
                    {
                      text: "Para reemplazar los algoritmos de IA",
                      correct: false,
                    },
                    {
                      text: "Para minimizar el uso de hardware en los sistemas de IA",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 84,
                  text: "¿Qué tipo de datos están organizados en formatos fijos como bases de datos relacionales?",
                  answers: [
                    { text: "Datos no estructurados", correct: false },
                    { text: "Datos semiestructurados", correct: false },
                    { text: "Datos estructurados", correct: true },
                    { text: "Datos de sensores", correct: false },
                  ],
                },
                {
                  id: 85,
                  text: "¿Qué se debe hacer con los datos antes de que puedan ser utilizados para entrenar modelos de IA?",
                  answers: [
                    {
                      text: "Guardarlos en una base de datos NoSQL",
                      correct: false,
                    },
                    {
                      text: "Anonimizarlos y pseudonimizarlos",
                      correct: false,
                    },
                    {
                      text: "Procesarlos y limpiarlos para eliminar inconsistencias",
                      correct: true,
                    },
                    {
                      text: "Cifrarlos en tránsito y en reposo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 86,
                  text: "¿Qué técnica se utiliza para proteger la identidad de los individuos en los conjuntos de datos reemplazando los datos identificativos con pseudónimos?",
                  answers: [
                    { text: "Cifrado", correct: false },
                    { text: "Regulaciones y cumplimiento", correct: false },
                    { text: "Anonimización", correct: false },
                    { text: "Pseudonimización", correct: true },
                  ],
                },
                {
                  id: 87,
                  text: "¿Cuál de las siguientes técnicas de procesamiento de datos implica reemplazar datos perdidos con estimaciones basadas en otros datos?",
                  answers: [
                    { text: "Normalización", correct: false },
                    { text: "Imputación de valores faltantes", correct: true },
                    {
                      text: "Análisis de Componentes Principales (PCA)",
                      correct: false,
                    },
                    { text: "Codificación", correct: false },
                  ],
                },
                {
                  id: 88,
                  text: "¿Qué técnica de transformación de datos ajusta los valores de datos para que sigan una escala común?",
                  answers: [
                    { text: "Estandarización", correct: false },
                    { text: "Normalización", correct: true },
                    { text: "Codificación one-hot", correct: false },
                    { text: "Análisis de correlación", correct: false },
                  ],
                },
                {
                  id: 89,
                  text: "¿Cuál de las siguientes técnicas de reducción de dimensionalidad transforma los datos a un nuevo espacio de menor dimensión que captura la mayor variabilidad posible?",
                  answers: [
                    { text: "Codificación", correct: false },
                    { text: "Eliminación de duplicados", correct: false },
                    {
                      text: "Análisis de Componentes Principales (PCA)",
                      correct: true,
                    },
                    { text: "Agrupación y agregación", correct: false },
                  ],
                },
                {
                  id: 90,
                  text: "¿Cuál de los siguientes no es un paso en la limpieza de datos?",
                  answers: [
                    { text: "Imputación de valores faltantes", correct: false },
                    { text: "Eliminación de duplicados", correct: false },
                    { text: "Codificación", correct: true },
                    { text: "Corrección de errores", correct: false },
                  ],
                },
                {
                  id: 91,
                  text: "¿Cuál es el objetivo principal de la minería de datos?",
                  answers: [
                    {
                      text: "Almacenar grandes conjuntos de datos",
                      correct: false,
                    },
                    {
                      text: "Descubrir patrones, correlaciones y tendencias significativas en grandes conjuntos de datos",
                      correct: true,
                    },
                    { text: "Generar informes financieros", correct: false },
                    {
                      text: "Realizar copias de seguridad de datos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 92,
                  text: "¿Qué se entiende por 'instancias' en el contexto de la minería de datos?",
                  answers: [
                    {
                      text: "Atributos o variables en un conjunto de datos",
                      correct: false,
                    },
                    {
                      text: "Regularidades o tendencias en los datos",
                      correct: false,
                    },
                    { text: "Algoritmos de machine learning", correct: false },
                    {
                      text: "Casos individuales o registros en un conjunto de datos",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 93,
                  text: "¿Cuál de las siguientes afirmaciones NO es correcta sobre cómo la IA se entrelaza con otras tecnologías?",
                  answers: [
                    {
                      text: "La IA y el IoT permiten una gestión más inteligente de activos y procesos mediante sensores y análisis de datos",
                      correct: false,
                    },
                    {
                      text: "La IA incrementa la seguridad y confianza en blockchain al detectar patrones anómalos o fraudes",
                      correct: false,
                    },
                    {
                      text: "La IA limita el almacenamiento de datos en Cloud Computing debido a su gran tamaño",
                      correct: true,
                    },
                    {
                      text: "La IA mejora las experiencias de AR y VR al adaptarse a las preferencias del usuario",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 94,
                  text: "¿Cuál es la principal responsabilidad de los especialistas en ética de la IA según el texto?",
                  answers: [
                    {
                      text: "Diseñar y construir sistemas inteligentes",
                      correct: false,
                    },
                    {
                      text: "Abordar temas como el sesgo algorítmico, la privacidad de datos y el impacto social de la automatización",
                      correct: true,
                    },
                    {
                      text: "Interpretar grandes volúmenes de datos para extraer insights valiosos",
                      correct: false,
                    },
                    {
                      text: "Optimizar la interacción entre humanos y sistemas de IA",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 95,
                  text: "¿Cuál de los siguientes profesionales está a la vanguardia del desarrollo de la IA, trabajando en el diseño, construcción y mantenimiento de sistemas inteligentes?",
                  answers: [
                    { text: "Científicos de datos", correct: false },
                    { text: "Especialistas en ética de la IA", correct: false },
                    { text: "Analistas de negocios en IA", correct: false },
                    {
                      text: "Especialistas en IA y Machine Learning",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 96,
                  text: "¿Cuál de las siguientes aplicaciones utiliza IA para procesar el lenguaje natural, comprender comandos de voz y realizar tareas específicas, como buscar información en la web o controlar dispositivos IoT en el hogar?",
                  answers: [
                    { text: "Reconocimiento de Música", correct: false },
                    { text: "Asistentes Virtuales", correct: true },
                    { text: "Análisis de Datos", correct: false },
                    { text: "Reconocimiento de Imágenes", correct: false },
                  ],
                },
                {
                  id: 97,
                  text: "¿Cuál de las siguientes opciones describe una aplicación de la IA en el reconocimiento de imágenes según el texto?",
                  answers: [
                    {
                      text: "Diagnósticos médicos basados en radiografías o resonancias magnéticas",
                      correct: true,
                    },
                    {
                      text: "Análisis de sentimientos en redes sociales",
                      correct: false,
                    },
                    {
                      text: "Transcripción médica en el sector de salud",
                      correct: false,
                    },
                    { text: "Respuestas automatizadas", correct: false },
                  ],
                },
                {
                  id: 98,
                  text: "¿Qué significa NPL?",
                  answers: [
                    {
                      text: "Procesamiento de logística natural",
                      correct: false,
                    },
                    {
                      text: "Procesamiento del lenguaje natural",
                      correct: true,
                    },
                    {
                      text: "Procesamiento de logística nativa",
                      correct: false,
                    },
                    {
                      text: "Procesamiento de lenguaje natural",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 99,
                  text: "Señala qué sentencia es incorrecta de las siguientes, referida a la IA en el sector de la salud.",
                  answers: [
                    {
                      text: "La IA ayuda a los investigadores a descubrir nuevas asociaciones genéticas y biomarcadores",
                      correct: false,
                    },
                    {
                      text: "La IA puede predecir la susceptibilidad de un individuo a ciertas enfermedades y recomendar tratamientos personalizados basados en su perfil genético",
                      correct: false,
                    },
                    {
                      text: "La IA puede detectar anomalías en las imágenes radiológicas pero aun no puede detectar tumores",
                      correct: true,
                    },
                    {
                      text: "La IA puede crear simulaciones detalladas de procedimientos quirúrgicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 100,
                  text: "Señala qué sentencia es incorrecta de las siguientes, referida a la IA en el sector de la educación",
                  answers: [
                    {
                      text: "La IA puede ajustar el contenido y el ritmo del aprendizaje según el desempeño y las preferencias del estudiante",
                      correct: false,
                    },
                    {
                      text: "La IA puede proporcionar retroalimentación inmediata y detallada sobre las tareas",
                      correct: false,
                    },
                    {
                      text: "La IA aun no permite gestionar admisión de estudiantes, revisar solicitudes y verificar documentos",
                      correct: true,
                    },
                    {
                      text: "La IA puede proporcionar herramientas de traducción que ayudan a estudiantes que hablen diferentes idiomas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 101,
                  text: "¿Qué puede hacer la IA en el sector financiero?",
                  answers: [
                    {
                      text: "Analizar los perfiles de crédito de los solicitantes de préstamos, evaluando su solvencia mediante el análisis de datos históricos, transacciones y comportamientos financieros",
                      correct: false,
                    },
                    {
                      text: "Los algoritmos de IA pueden identificar patrones de actividad sospechosa en tiempo real, ayudando a prevenir fraudes financieros",
                      correct: false,
                    },
                    {
                      text: "Automatizar tareas administrativas repetitivas, como la gestión de cuentas, el cumplimiento normativo y la conciliación de cuentas",
                      correct: false,
                    },
                    { text: "Todas son correctas", correct: true },
                  ],
                },
                {
                  id: 102,
                  text: "Señala qué sentencia es incorrecta de las siguientes, referida a la IA en el sector del comercio y marketing",
                  answers: [
                    {
                      text: "Los sistemas de IA analizan el comportamiento y las preferencias de los usuarios",
                      correct: false,
                    },
                    {
                      text: "La IA puede gestionar y optimizar campañas de publicidad programática en tiempo real",
                      correct: false,
                    },
                    {
                      text: "Los algoritmos de IA pueden ajustar los precios en tiempo real basándose en factores como la demanda, la competencia, la disponibilidad de stock y el comportamiento del cliente",
                      correct: false,
                    },
                    {
                      text: "La IA no permite analizar como varia el precio afectando a la demanda de productos",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 269,
                  text: "¿Cuál está considerada como una capa intermedia?",
                  answers: [
                    { text: "Cloud", correct: false },
                    { text: "Fog", correct: true },
                    { text: "Edge", correct: false },
                    { text: "Mist", correct: false },
                  ],
                },
                {
                  id: 270,
                  text: "¿Qué se considera la reducción del CapEX?",
                  answers: [
                    { text: "Un costo directo", correct: false },
                    { text: "Un costo indirecto", correct: false },
                    { text: "Un beneficio", correct: true },
                    { text: "Un impacto en la seguridad", correct: false },
                  ],
                },
                {
                  id: 271,
                  text: "¿En qué años se desarrollaron los primeros sistemas de juegos y demostraciones de teoremas automatizados?",
                  answers: [
                    { text: "Años 50", correct: false },
                    { text: "Años 60 y 70", correct: true },
                    { text: "Años 80", correct: false },
                    { text: "Años 90", correct: false },
                  ],
                },
                {
                  id: 272,
                  text: "¿En qué generación surge el perceptrón?",
                  answers: [
                    { text: "En la primera", correct: false },
                    { text: "En la segunda", correct: false },
                    { text: "En la tercera", correct: true },
                    { text: "En la cuarta", correct: false },
                  ],
                },
                {
                  id: 273,
                  text: "¿Cómo se llaman los datos que no tienen un formato predefinido?",
                  answers: [
                    { text: "Estructurados", correct: false },
                    { text: "No estructurados", correct: true },
                    { text: "Semiestructurados", correct: false },
                    { text: "Relacionales", correct: false },
                  ],
                },
                {
                  id: 274,
                  text: "¿Cuál de las siguientes opciones no es un paso en la limpieza de datos?",
                  answers: [
                    {
                      text: "Imputación de valores faltantes",
                      correct: false,
                    },
                    { text: "Eliminación de duplicados", correct: false },
                    { text: "Codificación", correct: true },
                    { text: "Corrección de errores", correct: false },
                  ],
                },
                {
                  id: 275,
                  text: "¿Qué significa NPL?",
                  answers: [
                    {
                      text: "Procesamiento de logística natural",
                      correct: false,
                    },
                    {
                      text: "Procesamiento del lenguaje natural",
                      correct: true,
                    },
                    {
                      text: "Procesamiento de logística nativa",
                      correct: false,
                    },
                    {
                      text: "Procesamiento de lenguaje natural",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 276,
                  text: "¿Cómo se llama a las nubes compartidas por varias organizaciones?",
                  answers: [
                    { text: "Híbridas", correct: false },
                    { text: "Comunitarias", correct: true },
                    { text: "Públicas", correct: false },
                    { text: "Privadas", correct: false },
                  ],
                },
                {
                  id: 277,
                  text: "La IA puede mejorar la accesibilidad y la inclusión en la educación.",
                  answers: [
                    { text: "Verdadero", correct: true },
                    { text: "Falso", correct: false },
                  ],
                },
                {
                  id: 278,
                  text: "¿En qué nivel tiene la gestión de más recursos el proveedor?",
                  answers: [
                    { text: "IaaS", correct: false },
                    { text: "PaaS", correct: false },
                    { text: "SaaS", correct: true },
                    { text: "Edge", correct: false },
                  ],
                },
                {
                  id: 279,
                  text: "¿Qué significa MDT?",
                  answers: [
                    { text: "Modelo digital temporal", correct: false },
                    { text: "Modelo digital de terreno", correct: true },
                    { text: "Muestreo digital temporal", correct: false },
                    { text: "Muestreo digital de terreno", correct: false },
                  ],
                },
                {
                  id: 280,
                  text: "¿Qué hace la MFA?",
                  answers: [
                    {
                      text: "Monitorea y bloquea actividades sospechosas en la red",
                      correct: false,
                    },
                    {
                      text: "Protege la confidencialidad de los datos mediante algoritmos matemáticos",
                      correct: false,
                    },
                    {
                      text: "Asegura que solo usuarios autorizados puedan acceder a sistemas y aplicaciones",
                      correct: true,
                    },
                    {
                      text: "Detecta patrones anómalos en el uso de sistemas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 281,
                  text: "¿En qué realidad inmersiva te sumerges completamente?",
                  answers: [
                    { text: "AR", correct: false },
                    { text: "VR", correct: true },
                    { text: "MR", correct: false },
                    { text: "XR", correct: false },
                  ],
                },
                {
                  id: 282,
                  text: "¿Qué tipo de impresión 3D utiliza un láser para fusionar polvos de material capa por capa?",
                  answers: [
                    { text: "SLA", correct: false },
                    { text: "FDM", correct: false },
                    { text: "SLS", correct: true },
                    { text: "Inkjet3D", correct: false },
                  ],
                },
                {
                  id: 283,
                  text: "¿Qué modelo ofrece un entorno de desarrollo y ejecución completo para aplicaciones?",
                  answers: [
                    { text: "IaaS", correct: false },
                    { text: "PaaS", correct: true },
                    { text: "SaaS", correct: false },
                    { text: "On-Premise", correct: false },
                  ],
                },
                {
                  id: 284,
                  text: "¿Cuál no es una de las 3 V de big data?",
                  answers: [
                    { text: "Volumen", correct: false },
                    { text: "Variedad", correct: false },
                    { text: "Visión", correct: true },
                    { text: "Velocidad", correct: false },
                  ],
                },
                {
                  id: 285,
                  text: "¿En qué revolución apareció la producción en cadena?",
                  answers: [
                    {
                      text: "Primera Revolución Industrial",
                      correct: false,
                    },
                    {
                      text: "Segunda Revolución Industrial",
                      correct: true,
                    },
                    {
                      text: "Tercera Revolución Industrial",
                      correct: false,
                    },
                    {
                      text: "Cuarta Revolución Industrial",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 286,
                  text: "¿Qué característica distintiva permite identificar tendencias, patrones y oportunidades?",
                  answers: [
                    { text: "Automatización", correct: false },
                    { text: "Personalización", correct: false },
                    { text: "Analítica avanzada", correct: true },
                    { text: "Conectividad", correct: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fol",
      name: "fol",
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
                  id: 1,
                  text: "La aplicación de las capacidades físicas e intelectuales de una persona hacia un fin previamente fijado se conoce como…",
                  answers: [
                    { text: "Cultura preventiva", correct: false },
                    { text: "Salud", correct: false },
                    { text: "Trabajo", correct: true },
                    { text: "Salud laboral", correct: false },
                  ],
                },
                {
                  id: 2,
                  text: "Un estado completo de bienestar físico, psíquico y social, no meramente la ausencia de enfermedad se conoce como…",
                  answers: [
                    { text: "Cultura preventiva", correct: false },
                    { text: "Salud", correct: true },
                    { text: "Trabajo", correct: false },
                    { text: "Salud laboral", correct: false },
                  ],
                },
                {
                  id: 3,
                  text: "Según las disciplinas estudiadas en la práctica de la salud laboral, ¿cuál se encarga de evitar que los trabajadores enfermen a consecuencia de su actividad laboral?",
                  answers: [
                    { text: "Seguridad laboral", correct: false },
                    { text: "Higiene industrial", correct: true },
                    { text: "Medicina del trabajo", correct: false },
                    { text: "Ergonomía", correct: false },
                  ],
                },
                {
                  id: 4,
                  text: "¿En qué grupo de factores causantes de riesgos laborales debemos incluir a los virus, hongos y bacterias?",
                  answers: [
                    { text: "Equipos de trabajo", correct: false },
                    { text: "Lugar de trabajo", correct: false },
                    { text: "Agentes químicos", correct: false },
                    { text: "Agentes biológicos", correct: true },
                  ],
                },
                {
                  id: 5,
                  text: "En relación a los riesgos laborales, las condiciones psicosociales son aquellas…",
                  answers: [
                    {
                      text: "Relacionadas con las condiciones fisiológicas",
                      correct: false,
                    },
                    {
                      text: "Relacionadas con el bienestar mental",
                      correct: true,
                    },
                    {
                      text: "Relacionadas con la calidad ambiental",
                      correct: false,
                    },
                    {
                      text: "Relacionadas con la salvaguarda del trabajador",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 6,
                  text: "¿En qué artículo de la Ley de Prevención de Riesgos Laborales se indica que los trabajadores tienen derecho a una protección eficaz?",
                  answers: [
                    { text: "Artículo 40", correct: false },
                    { text: "Artículo 4", correct: false },
                    { text: "Artículo 19", correct: false },
                    { text: "Artículo 14", correct: true },
                  ],
                },
                {
                  id: 7,
                  text: "Señale cuál de los siguientes derechos NO es un derecho de los trabajadores en materia de salud laboral:",
                  answers: [
                    {
                      text: "Derecho a recibir información en materia de prevención de riesgos laborales",
                      correct: false,
                    },
                    {
                      text: "Derecho a que haya ascensores en todas las plantas",
                      correct: true,
                    },
                    {
                      text: "Derecho a vigilar regularmente su estado de salud",
                      correct: false,
                    },
                    {
                      text: "Derecho de disponer de equipos de protección individual",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 8,
                  text: "¿Cuál de las siguientes no es una obligación del empresario en situaciones de riesgo grave e inminente?",
                  answers: [
                    {
                      text: "Informar lo antes posible a todos los trabajadores",
                      correct: false,
                    },
                    {
                      text: "Facilitar la formación de los trabajadores",
                      correct: true,
                    },
                    {
                      text: "Adoptar medidas y dar instrucciones oportunas",
                      correct: false,
                    },
                    {
                      text: "Disponer de lo necesario para evitar una situación de peligro",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 9,
                  text: "En el caso de que un trabajador no cumpla con sus obligaciones y se origine un accidente o enfermedad laboral sin lesiones, ¿qué tipo de responsabilidad tendrá dicho trabajador?",
                  answers: [
                    { text: "Responsabilidad civil", correct: true },
                    { text: "Responsabilidad penal", correct: false },
                    { text: "Responsabilidad disciplinaria", correct: false },
                    { text: "Responsabilidad accidental", correct: false },
                  ],
                },
                {
                  id: 10,
                  text: "¿Cuál de los siguientes no es un elemento que deba incluir el plan de prevención de riesgos laborales?",
                  answers: [
                    { text: "La estructura organizativa", correct: false },
                    { text: "La política de prevención", correct: false },
                    { text: "Los salarios de los trabajadores", correct: true },
                    { text: "Los datos de la empresa", correct: false },
                  ],
                },
                {
                  id: 11,
                  text: "¿Cuál de las siguientes no es una situación en la que deba volver a realizarse una evaluación de riesgos tras la inicial?",
                  answers: [
                    {
                      text: "Introducción de nuevas tecnologías",
                      correct: false,
                    },
                    { text: "Cambio del dueño de la empresa", correct: true },
                    {
                      text: "Cambios en las condiciones de trabajo",
                      correct: false,
                    },
                    {
                      text: "Nuevos trabajos con componentes químicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 12,
                  text: "En la etapa de estimación del riesgo laboral, según la severidad del daño, ¿Qué clasificación corresponde a los cortes, irritaciones o dolores de cabeza?",
                  answers: [
                    { text: "Dañinos", correct: false },
                    { text: "Extremadamente dañinos", correct: false },
                    { text: "Moderados", correct: false },
                    { text: "Ligeramente dañinos", correct: true },
                  ],
                },
                {
                  id: 13,
                  text: "¿A qué riesgo laboral se asocian los factores de riesgo tales como mala distribución, falta de orden, limpieza y mantenimiento?",
                  answers: [
                    { text: "Lugar de trabajo", correct: true },
                    { text: "Utilización de equipo", correct: false },
                    { text: "Trabajo con máquinas", correct: false },
                    { text: "Riesgo eléctrico", correct: false },
                  ],
                },
                {
                  id: 14,
                  text: "¿Qué tipos de daños se pueden producir generalmente por un mal uso de las maquinas o herramientas?",
                  answers: [
                    { text: "Caídas a distinto nivel", correct: false },
                    { text: "Estrés social", correct: false },
                    { text: "Fatiga", correct: false },
                    { text: "Cortes o aplastamientos", correct: true },
                  ],
                },
                {
                  id: 15,
                  text: "¿Qué medidas de prevención específicas podemos adoptar frente a los riesgos de incendio?",
                  answers: [
                    { text: "Revisiones del nivel de ruido", correct: false },
                    { text: "Reducir la jornada laboral", correct: false },
                    {
                      text: "Mantener alejados los combustibles del calor",
                      correct: true,
                    },
                    {
                      text: "Vía de circulación de materiales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 16,
                  text: "¿Qué puede ocasionar un contacto eléctrico de 30 a 80 mA?",
                  answers: [
                    { text: "Cosquilleo", correct: false },
                    { text: "Tetanización muscular", correct: true },
                    { text: "Quemaduras superficiales", correct: false },
                    { text: "Contracción muscular", correct: false },
                  ],
                },
                {
                  id: 17,
                  text: "¿Cuál de los siguientes no es uno de los riesgos físicos estudiados?",
                  answers: [
                    { text: "Ruido", correct: false },
                    { text: "Temperatura", correct: false },
                    { text: "Radiaciones", correct: false },
                    { text: "Explosiones", correct: true },
                  ],
                },
                {
                  id: 18,
                  text: "Riesgo que relaciona con transferencia de material genético y reproducción de microorganismos:",
                  answers: [
                    { text: "Riesgo eléctrico", correct: false },
                    { text: "Riesgo ergonómico", correct: false },
                    { text: "Riesgo biológico", correct: true },
                    { text: "Riesgo químico", correct: false },
                  ],
                },
                {
                  id: 19,
                  text: "¿Con qué nombre se conocen los actos de violencia psicológica extrema, sistemática y prolongada sobre un trabajador en su lugar de trabajo?",
                  answers: [
                    { text: "Burnout", correct: false },
                    { text: "Estrés laboral", correct: false },
                    { text: "Mobbing", correct: true },
                    { text: "Ergonomía", correct: false },
                  ],
                },
                {
                  id: 20,
                  text: "La lesión corporal que el trabajador sufre con ocasión o consecuencia del trabajo por cuenta ajena se conoce como:",
                  answers: [
                    { text: "Accidente de trabajo", correct: true },
                    { text: "Causa de trabajo", correct: false },
                    { text: "Enfermedad profesional", correct: false },
                    { text: "Accidente ocasional", correct: false },
                  ],
                },
                {
                  id: 21,
                  text: "¿Cuál de los siguientes no se considera un accidente de trabajo?",
                  answers: [
                    {
                      text: "El accidente al ejercitar funciones de carácter sindical",
                      correct: false,
                    },
                    {
                      text: "Enfermedad no profesionales pero contraídas en el trabajo",
                      correct: false,
                    },
                    {
                      text: "Agravamiento de enfermedades como consecuencia del trabajo",
                      correct: false,
                    },
                    {
                      text: "Accidentes ocasionados por mala fe del trabajador",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 22,
                  text: "¿Cuál de las siguientes no es un requisito exigido para estimar un accidente in itinere?",
                  answers: [
                    {
                      text: "Que se produzca el trayecto habitual del trabajo al domicilio",
                      correct: false,
                    },
                    {
                      text: "Que se produzca dentro del tiempo normal del trayecto",
                      correct: false,
                    },
                    {
                      text: "Que el trabajador se encuentre solo en su vehículo",
                      correct: true,
                    },
                    {
                      text: "Que el medio de transporte elegido sea el habitual",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 23,
                  text: "¿Cuál de las siguientes afirmaciones no es correcta?",
                  answers: [
                    {
                      text: "La enfermedad profesional suele tener tratamiento médico",
                      correct: false,
                    },
                    {
                      text: "La enfermedad profesional se produce de manera súbita",
                      correct: true,
                    },
                    {
                      text: "El inicio de la enfermedad profesional suele ser lento y solapado",
                      correct: false,
                    },
                    {
                      text: "Las enfermedades profesionales se incluyen en un listado",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 24,
                  text: "En relación con los costes de los accidentes laborales, el coste psicológico y el dolor físico ¿a qué parte está asociado?",
                  answers: [
                    { text: "Para la empresa", correct: false },
                    { text: "Para las familias", correct: false },
                    { text: "Para el trabajador", correct: true },
                    { text: "Para la sociedad", correct: false },
                  ],
                },
                {
                  id: 25,
                  text: "En relación con las medidas de prevención de riesgos, ¿cuál de ellas se fundamenta en la curación y rehabilitación de una enfermedad?",
                  answers: [
                    { text: "La seguridad en el trabajo", correct: false },
                    { text: "La medicina del trabajo", correct: true },
                    { text: "La higiene industrial", correct: false },
                    {
                      text: "Las técnicas basadas en ergonomía",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 26,
                  text: "¿Cuál de los siguientes es una medida de protección colectiva?",
                  answers: [
                    { text: "Una mascarilla", correct: false },
                    { text: "Unas manoplas", correct: false },
                    {
                      text: "Zapatos con suela antideslizante",
                      correct: false,
                    },
                    {
                      text: "Mejorar la barandilla de una escalera",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 27,
                  text: "Señale la respuesta CORRECTA sobre los EPI:",
                  answers: [
                    {
                      text: "Los EPI son equipos de protección colectivos",
                      correct: false,
                    },
                    {
                      text: "Los EPI son equipos de protección individuales",
                      correct: true,
                    },
                    {
                      text: "Los EPI son equipos de prevención colectivos",
                      correct: false,
                    },
                    {
                      text: "Los EPI son equipos de prevención individuales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 28,
                  text: "¿Cuál de las siguientes no es una norma relativa al uso de EPI?",
                  answers: [
                    {
                      text: "El trabajador debe recibir información sobre su uso",
                      correct: false,
                    },
                    {
                      text: "Se deben seguir las instrucciones del fabricante",
                      correct: false,
                    },
                    {
                      text: "Deben estar homologados y marcados como CE",
                      correct: false,
                    },
                    {
                      text: "Deben prestarse a los compañeros siempre que sea necesario",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 29,
                  text: "¿Qué principio o criterio general de la Vigilancia de la Salud hace mención a la intimidad, igualdad y no discriminación?",
                  answers: [
                    { text: "Garantizada y gratuita", correct: false },
                    { text: "Voluntaria", correct: false },
                    { text: "Ética", correct: true },
                    { text: "Documentada", correct: false },
                  ],
                },
                {
                  id: 30,
                  text: "Señale la respuesta CORRECTA, respecto al plan de autoprotección:",
                  answers: [
                    {
                      text: "Se encuentra incluido dentro del plan de emergencias",
                      correct: false,
                    },
                    {
                      text: "Es un documento más específico que el plan de emergencias",
                      correct: false,
                    },
                    {
                      text: "Es un documento más general que el plan de emergencias",
                      correct: true,
                    },
                    { text: "Es voluntario para las empresas", correct: false },
                  ],
                },
                {
                  id: 31,
                  text: "Señala la afirmación correcta en relación a las emergencias parciales:",
                  answers: [
                    {
                      text: "Afectan a zonas muy amplias de la empresa",
                      correct: true,
                    },
                    {
                      text: "Intervienen equipos de primera intervención",
                      correct: false,
                    },
                    {
                      text: "Afectan a zonas muy concretas de la empresa",
                      correct: false,
                    },
                    { text: "Suelen requerir una evacuación", correct: false },
                  ],
                },
                {
                  id: 32,
                  text: "La actuación que consiste en dar el aviso de emergencia o la señal de evacuación al personal de la empresa y se transmite por medios técnicos o humanos se conoce como:",
                  answers: [
                    { text: "Mecanismos de alarma", correct: true },
                    { text: "Mecanismos de respuesta", correct: false },
                    { text: "Primeras ayudas", correct: false },
                    { text: "Procedimientos de evacuación", correct: false },
                  ],
                },
                {
                  id: 33,
                  text: "En el contexto de los primeros auxilios, el método PAS consiste en:",
                  answers: [
                    { text: "Proteger, Animar, Socorrer", correct: false },
                    { text: "Proteger, Avisar, Socorrer", correct: true },
                    { text: "Proponer, Animar, Socorrer", correct: false },
                    { text: "Proteger, Avisar, Silenciar", correct: false },
                  ],
                },
                {
                  id: 34,
                  text: "La reanimación respiratoria se realiza cuando el accidentado:",
                  answers: [
                    {
                      text: "Está consciente, respira y tiene pulso",
                      correct: false,
                    },
                    {
                      text: "Está inconsciente, no respira, pero tiene pulso",
                      correct: true,
                    },
                    {
                      text: "Está inconsciente, no respira y no tiene pulso",
                      correct: false,
                    },
                    {
                      text: "Está inconsciente, respira y tiene pulso",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 35,
                  text: "La primera fase de las técnicas de soporte vital básico es:",
                  answers: [
                    { text: "Comprobación de la consciencia", correct: true },
                    {
                      text: "Apertura de las vías respiratorias",
                      correct: false,
                    },
                    { text: "Realizar un masaje cardiaco", correct: false },
                    { text: "Chequear la respiración", correct: false },
                  ],
                },
                {
                  id: 36,
                  text: "Según las técnicas de soporte vital básico, cuando el accidentado respira:",
                  answers: [
                    {
                      text: "Debemos iniciar el masaje cardiaco",
                      correct: false,
                    },
                    { text: "Debemos colocarle boca abajo", correct: false },
                    { text: "Debemos usar un desfibrilador", correct: false },
                    {
                      text: "Hay que colocarlo en posición PLS",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 37,
                  text: "La maniobra de Heimlich se lleva a cabo en casos de...",
                  answers: [
                    { text: "Atragantamiento", correct: true },
                    { text: "Fractura o esguince", correct: false },
                    { text: "Hemorragia", correct: false },
                    { text: "Quemadura", correct: false },
                  ],
                },
                {
                  id: 38,
                  text: "El protocolo de actuación en el caso de quemaduras indica que lo primero que hay que hacer es:",
                  answers: [
                    { text: "Eliminar el agente que la causa", correct: true },
                    {
                      text: "Cubrir al accidentado con una manta",
                      correct: false,
                    },
                    {
                      text: "Echar abundante agua sobre la quemadura",
                      correct: false,
                    },
                    {
                      text: "Tumbar al accidentado con los pies en alto",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 39,
                  text: "Además de disponer de un botiquín, deberán contar con local de primeros auxilios:",
                  answers: [
                    {
                      text: "Las empresas con más de 10 trabajadores",
                      correct: false,
                    },
                    {
                      text: "Las empresas con más de 50 trabajadores",
                      correct: true,
                    },
                    {
                      text: "Las empresas con más de 25 trabajadores",
                      correct: false,
                    },
                    { text: "Cualquier empresa", correct: false },
                  ],
                },
                {
                  id: 40,
                  text: "La falta de correspondencia entre las competencias ofrecidas por la población activa y demandadas por los oferentes de empleo ocasiona:",
                  answers: [
                    { text: "Equilibrio laboral", correct: false },
                    { text: "Desempleo no estructural", correct: false },
                    { text: "Desempleo estructural", correct: true },
                    { text: "Pleno empleo", correct: false },
                  ],
                },
                {
                  id: 41,
                  text: "Es una característica de la evolución del mercado de trabajo actual en España:",
                  answers: [
                    { text: "Reducción de la temporalidad", correct: true },
                    {
                      text: "Reducción de los contratos fijos discontinuos",
                      correct: false,
                    },
                    { text: "Reducción de la precariedad", correct: false },
                    {
                      text: "Reducción del número de personas ocupadas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 42,
                  text: "Un ejemplo de área de actividad con gran potencial es:",
                  answers: [
                    { text: "Edición e imprenta", correct: false },
                    { text: "Las energías renovables", correct: true },
                    { text: "La minería", correct: false },
                    { text: "Atención al público presencial", correct: false },
                  ],
                },
                {
                  id: 43,
                  text: "Las actividades agrícolas pertenecen al sector (productivo):",
                  answers: [
                    { text: "Primario", correct: true },
                    { text: "Secundario", correct: false },
                    { text: "Terciario", correct: false },
                    { text: "Cuaternario", correct: false },
                  ],
                },
                {
                  id: 44,
                  text: "El trabajo de un abogado del Estado pertenece al sector(productivo):",
                  answers: [
                    { text: "Privado", correct: false },
                    { text: "Público", correct: true },
                    { text: "Primario", correct: false },
                    { text: "Secundario", correct: false },
                  ],
                },
                {
                  id: 45,
                  text: "Una física que trabaja en un laboratorio pertenece al sector profesional:",
                  answers: [
                    { text: "Ciencia e investigación", correct: true },
                    { text: "Deporte", correct: false },
                    { text: "Tecnológico", correct: false },
                    { text: "Administración", correct: false },
                  ],
                },
                {
                  id: 46,
                  text: "La prospectiva de un título de grado superior proporciona información sobre:",
                  answers: [
                    {
                      text: "Los puestos de trabajo afines a la titulación por cuenta ajena",
                      correct: false,
                    },
                    {
                      text: "Los puestos de trabajo afines a la titulación por cuenta propia",
                      correct: false,
                    },
                    {
                      text: "Tendencias del mercado laboral para la titulación",
                      correct: true,
                    },
                    {
                      text: "Las profesiones reguladas asociadas al título",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 47,
                  text: "¿Cuál de los siguientes no se considera un método activo de búsqueda de empleo?",
                  answers: [
                    { text: "Enviar una autocandidatura", correct: false },
                    { text: "Estudiar las ofertas de trabajo", correct: false },
                    { text: "Revisar diariamente Instagram", correct: true },
                    {
                      text: "Estar en contacto con una oficina de empleo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 48,
                  text: "Para la Encuesta de Población Activa, un estudiante que no busca trabajo es considerado:",
                  answers: [
                    { text: "Activo ocupado", correct: false },
                    { text: "Activo desempleado", correct: false },
                    { text: "Inactivo", correct: true },
                    { text: "Parado", correct: false },
                  ],
                },
                {
                  id: 49,
                  text: "El principal objetivo de la Red EURAXESS es:",
                  answers: [
                    {
                      text: "Proporcionar acceso a un listado de organizaciones sin ánimo de lucro acreditadas",
                      correct: false,
                    },
                    {
                      text: "Proporcionar información sobre vacantes y apoyo a investigadores profesionales",
                      correct: true,
                    },
                    {
                      text: "Proporcionar información sobre vacantes y apoyo a ciudadanos europeos para cualquier tipo de trabajo",
                      correct: false,
                    },
                    {
                      text: "Facilitar el acceso a micro financiación a emprendedores con dificultades financieras",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 50,
                  text: "Identifica la jornada laboral que no es legal:",
                  answers: [
                    {
                      text: "María trabaja de 23:00 a 7:00 de martes a jueves",
                      correct: false,
                    },
                    {
                      text: "Mercedes trabaja de 10:00 a 15:00 de lunes a viernes",
                      correct: false,
                    },
                    {
                      text: "Juan trabaja a turnos y trabaja todo el mes de junio de noches",
                      correct: true,
                    },
                    {
                      text: "Pedro trabaja de 8:00 a 15:00 de lunes a viernes con veinte minutos de descanso al día",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 51,
                  text: "El descanso mínimo entre jornadas es de:",
                  answers: [
                    { text: "12 horas en horario normal", correct: true },
                    { text: "12 horas en horario de turnos", correct: false },
                    { text: "9 horas en horario normal", correct: false },
                    { text: "9 horas en horario de turnos", correct: false },
                  ],
                },
                {
                  id: 52,
                  text: "¿Cuál de estos trabajadores puede realizar horas complementarias?",
                  answers: [
                    {
                      text: "Un trabajador con un contrato a tiempo parcial de 9 horas semanales",
                      correct: false,
                    },
                    {
                      text: "Un trabajador con un contrato a tiempo parcial de 15 horas semanales",
                      correct: true,
                    },
                    {
                      text: "Un trabajador a jornada completa",
                      correct: false,
                    },
                    {
                      text: "Un trabajador cuya jornada laboral es de 1 hora diaria",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 53,
                  text: "¿Cuál de estos trabajadores puede hacer horas extraordinarias?",
                  answers: [
                    { text: "Un trabajador en ERTE", correct: false },
                    {
                      text: "Un trabajador con un contrato indefinido a tiempo completo",
                      correct: true,
                    },
                    {
                      text: "Un trabajador con un contrato a media jornada",
                      correct: false,
                    },
                    {
                      text: "Un trabajador con un contrato formativo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 54,
                  text: "El empresario debe notificar al trabajador las fechas de sus vacaciones con una anticipación de:",
                  answers: [
                    { text: "15 días", correct: false },
                    { text: "2 meses", correct: true },
                    { text: "6 meses", correct: false },
                    { text: "El 1 de enero de cada año", correct: false },
                  ],
                },
                {
                  id: 55,
                  text: "La duración mínima de vacaciones anuales de un trabajador es de:",
                  answers: [
                    { text: "30 días naturales", correct: true },
                    { text: "15 días naturales", correct: false },
                    { text: "30 días hábiles", correct: false },
                    { text: "15 días hábiles", correct: false },
                  ],
                },
                {
                  id: 56,
                  text: "La duración del permiso retribuido por cuidado del lactante es de:",
                  answers: [
                    { text: "Media hora diaria", correct: false },
                    { text: "30 horas al mes", correct: false },
                    { text: "1 hora diaria", correct: true },
                    {
                      text: "La ley no contempla permisos retribuidos por esta causa",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 57,
                  text: "La protección jurídica de la Ley de Familias se refiere a:",
                  answers: [
                    {
                      text: "La regulación de las nuevas situaciones familiares",
                      correct: true,
                    },
                    {
                      text: "Las ayudas económicas para familias con menores de tres años",
                      correct: false,
                    },
                    {
                      text: "Las medidas de apoyo para el uso de las TICs",
                      correct: false,
                    },
                    {
                      text: "Las medidas de apoyo al ocio de las familias",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 58,
                  text: "La característica de “colectividad”, en la elaboración de un Plan de Igualdad, se refiere a que:",
                  answers: [
                    { text: "Es secuencial y admite cambios", correct: false },
                    { text: "No es indefinido", correct: false },
                    {
                      text: "Comprende todas las áreas de la empresa a nivel horizontal",
                      correct: false,
                    },
                    {
                      text: "Afecta positivamente a todos los trabajadores de la empresa",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 59,
                  text: "Para ser considerado teletrabajo, el trabajo realizado a distancia debe comprender, al menos:",
                  answers: [
                    { text: "El 50% de la jornada", correct: false },
                    {
                      text: "El 30% de la jornada en un período de referencia de 3 meses",
                      correct: true,
                    },
                    {
                      text: "El 100% de la jornada, ya que es un trabajo a distancia",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las respuestas es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 60,
                  text: "Señale cuáles son los requisitos de una relación laboral:",
                  answers: [
                    {
                      text: "Trabajo personal, voluntario, retribuido, independiente y por cuenta ajena",
                      correct: false,
                    },
                    {
                      text: "Trabajo personal, voluntario, retribuido, dependiente y por cuenta propia",
                      correct: false,
                    },
                    {
                      text: "Trabajo personal, voluntario, retribuido, dependiente y por cuenta ajena",
                      correct: true,
                    },
                    {
                      text: "Trabajo personal, forzoso, retribuido, dependiente y por cuenta ajena",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 61,
                  text: "Identifique cuál de las siguientes actividades es una relación laboral especial:",
                  answers: [
                    {
                      text: "Un hombre que presta servicios de limpieza en un hogar (retribuidos)",
                      correct: true,
                    },
                    {
                      text: "La profesora de una universidad privada",
                      correct: false,
                    },
                    {
                      text: "Un consultor de banca que cobra sólo a comisión",
                      correct: false,
                    },
                    {
                      text: "Un fontanero que trabaja por cuenta propia",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 62,
                  text: "¿Cuál de las siguientes fuentes del derecho laboral es prioritaria?",
                  answers: [
                    { text: "El convenio colectivo", correct: false },
                    { text: "Las leyes", correct: true },
                    { text: "El contrato de trabajo", correct: false },
                    { text: "Los usos y costumbres", correct: false },
                  ],
                },
                {
                  id: 63,
                  text: "El principio de jerarquía normativa implica:",
                  answers: [
                    {
                      text: "En caso de duda, la razón se le da al trabajador",
                      correct: false,
                    },
                    {
                      text: "Las normas superiores están por encima de las inferiores, y las inferiores no pueden contradecirlas",
                      correct: true,
                    },
                    {
                      text: "Ante dos normas del mismo rango, se aplicará la más beneficiosa para el trabajador",
                      correct: false,
                    },
                    {
                      text: "Las normas superiores marcan mínimos que las inferiores sólo pueden mejorar",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 64,
                  text: "El derecho al descanso del trabajador:",
                  answers: [
                    { text: "Es un derecho colectivo", correct: false },
                    { text: "Es un derecho individual", correct: true },
                    { text: "Es una obligación colectiva", correct: false },
                    { text: "Es una obligación individual", correct: false },
                  ],
                },
                {
                  id: 65,
                  text: "El hecho de que un convenio colectivo sea aplicable al sector de oficinas y despachos es un ámbito de aplicación de tipo:",
                  answers: [
                    { text: "Funcional", correct: true },
                    { text: "Territorial", correct: false },
                    { text: "Temporal", correct: false },
                    { text: "Personal", correct: false },
                  ],
                },
                {
                  id: 66,
                  text: "Según la última actualización de los convenios colectivos:",
                  answers: [
                    {
                      text: "Las empresas no pueden modificar el horario laboral",
                      correct: false,
                    },
                    {
                      text: "Las empresas pueden modificar el salario base, pero no los complementos salariales",
                      correct: false,
                    },
                    {
                      text: "El convenio se prorroga automáticamente si no hay nuevo acuerdo",
                      correct: true,
                    },
                    {
                      text: "Las empresas no pueden modificar los trabajos a turnos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 67,
                  text: "La Inspección de Trabajo y Seguridad Social es:",
                  answers: [
                    {
                      text: "Una institución pública de carácter estatal",
                      correct: true,
                    },
                    {
                      text: "Una institución pública de carácter local",
                      correct: false,
                    },
                    {
                      text: "Una empresa de alcance internacional",
                      correct: false,
                    },
                    {
                      text: "Una PYME que vela por el cumplimiento de las normas laborales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 68,
                  text: "Los derechos y obligaciones asociadas a una relación laboral están contemplados, en España en:",
                  answers: [
                    {
                      text: "La Constitución Española y en los reglamentos regionales",
                      correct: false,
                    },
                    {
                      text: "La Constitución Española y en los Tratados internacionales",
                      correct: false,
                    },
                    {
                      text: "Los Tratados internacionales y el Estatuto de los Trabajadores",
                      correct: false,
                    },
                    {
                      text: "La Constitución Española y el Estatuto de los Trabajadores",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 69,
                  text: "El Tribunal Laboral es:",
                  answers: [
                    {
                      text: "Un tribunal mercantil con jurisdicción especial",
                      correct: false,
                    },
                    {
                      text: "Un tribunal civil con jurisdicción especial",
                      correct: true,
                    },
                    { text: "Un tribunal penal", correct: false },
                    { text: "Un tribunal europeo", correct: false },
                  ],
                },
                {
                  id: 70,
                  text: "La falta de correspondencia entre las competencias ofrecidas por la población activa y demandadas por los oferentes de empleo ocasiona:",
                  answers: [
                    { text: "Equilibrio laboral", correct: false },
                    { text: "Desempleo no estructural", correct: false },
                    { text: "Desempleo estructural", correct: true },
                    { text: "Pleno empleo", correct: false },
                  ],
                },
                {
                  id: 71,
                  text: "Es una característica de la evolución del mercado de trabajo actual en España:",
                  answers: [
                    { text: "Reducción de la temporalidad", correct: true },
                    {
                      text: "Reducción de los contratos fijos discontinuos",
                      correct: false,
                    },
                    { text: "Reducción de la precariedad", correct: false },
                    {
                      text: "Reducción del número de personas ocupadas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 72,
                  text: "Un ejemplo de área de actividad con gran potencial es:",
                  answers: [
                    { text: "Edición e imprenta", correct: false },
                    { text: "Las energías renovables", correct: true },
                    { text: "La minería", correct: false },
                    { text: "Atención al público presencial", correct: false },
                  ],
                },
                {
                  id: 73,
                  text: "Las actividades agrícolas pertenecen al sector (productivo):",
                  answers: [
                    { text: "Primario", correct: true },
                    { text: "Secundario", correct: false },
                    { text: "Terciario", correct: false },
                    { text: "Cuaternario", correct: false },
                  ],
                },
                {
                  id: 74,
                  text: "El trabajo de un abogado del Estado pertenece al sector(productivo):",
                  answers: [
                    { text: "Privado", correct: false },
                    { text: "Público", correct: true },
                    { text: "Primario", correct: false },
                    { text: "Secundario", correct: false },
                  ],
                },
                {
                  id: 75,
                  text: "Una física que trabaja en un laboratorio pertenece al sector profesional:",
                  answers: [
                    { text: "Ciencia e investigación", correct: true },
                    { text: "Deporte", correct: false },
                    { text: "Tecnológico", correct: false },
                    { text: "Administración", correct: false },
                  ],
                },
                {
                  id: 76,
                  text: "La prospectiva de un título de grado superior proporciona información sobre:",
                  answers: [
                    {
                      text: "Los puestos de trabajo afines a la titulación por cuenta ajena",
                      correct: false,
                    },
                    {
                      text: "Los puestos de trabajo afines a la titulación por cuenta propia",
                      correct: false,
                    },
                    {
                      text: "Tendencias del mercado laboral para la titulación",
                      correct: true,
                    },
                    {
                      text: "Las profesiones reguladas asociadas al título",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 77,
                  text: "¿Cuál de los siguientes no se considera un método activo de búsqueda de empleo?",
                  answers: [
                    { text: "Enviar una autocandidatura", correct: false },
                    { text: "Estudiar las ofertas de trabajo", correct: false },
                    { text: "Revisar diariamente Instagram", correct: true },
                    {
                      text: "Estar en contacto con una oficina de empleo",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 78,
                  text: "Para la Encuesta de Población Activa, un estudiante que no busca trabajo es considerado:",
                  answers: [
                    { text: "Activo ocupado", correct: false },
                    { text: "Activo desempleado", correct: false },
                    { text: "Inactivo", correct: true },
                    { text: "Parado", correct: false },
                  ],
                },
                {
                  id: 79,
                  text: "El principal objetivo de la Red EURAXESS es:",
                  answers: [
                    {
                      text: "Proporcionar acceso a un listado de organizaciones sin ánimo de lucro acreditadas",
                      correct: false,
                    },
                    {
                      text: "Proporcionar información sobre vacantes y apoyo a investigadores profesionales",
                      correct: true,
                    },
                    {
                      text: "Proporcionar información sobre vacantes y apoyo a ciudadanos europeos para cualquier tipo de trabajo",
                      correct: false,
                    },
                    {
                      text: "Facilitar el acceso a micro financiación a emprendedores con dificultades financieras",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 80,
                  text: "Señale la respuesta CORRECTA, respecto al plan de autoprotección:",
                  answers: [
                    {
                      text: "Se encuentra incluido dentro del plan de emergencias",
                      correct: false,
                    },
                    {
                      text: "Es un documento más específico que el plan de emergencias",
                      correct: false,
                    },
                    {
                      text: "Es un documento más general que el plan de emergencias",
                      correct: true,
                    },
                    { text: "Es voluntario para las empresas", correct: false },
                  ],
                },
                {
                  id: 81,
                  text: "Señala la afirmación correcta en relación a las emergencias parciales:",
                  answers: [
                    {
                      text: "Afectan a zonas muy amplias de la empresa",
                      correct: true,
                    },
                    {
                      text: "Intervienen equipos de primera intervención",
                      correct: false,
                    },
                    {
                      text: "Afectan a zonas muy concretas de la empresa",
                      correct: false,
                    },
                    { text: "Suelen requerir una evacuación", correct: false },
                  ],
                },
                {
                  id: 82,
                  text: "La actuación que consiste en dar el aviso de emergencia o la señal de evacuación al personal de la empresa y se transmite por medios técnicos o humanos se conoce como:",
                  answers: [
                    { text: "Mecanismos de alarma", correct: true },
                    { text: "Mecanismos de respuesta", correct: false },
                    { text: "Primeras ayudas", correct: false },
                    { text: "Procedimientos de evacuación", correct: false },
                  ],
                },
                {
                  id: 83,
                  text: "En el contexto de los primeros auxilios, el método PAS consiste en:",
                  answers: [
                    { text: "Proteger, Animar, Socorrer", correct: false },
                    { text: "Proteger, Avisar, Socorrer", correct: true },
                    { text: "Proponer, Animar, Socorrer", correct: false },
                    { text: "Proteger, Avisar, Silenciar", correct: false },
                  ],
                },
                {
                  id: 84,
                  text: "La reanimación respiratoria se realiza cuando el accidentado:",
                  answers: [
                    {
                      text: "Está consciente, respira y tiene pulso",
                      correct: false,
                    },
                    {
                      text: "Está inconsciente, no respira, pero tiene pulso",
                      correct: true,
                    },
                    {
                      text: "Está inconsciente, no respira y no tiene pulso",
                      correct: false,
                    },
                    {
                      text: "Está inconsciente, respira y tiene pulso",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 85,
                  text: "La primera fase de las técnicas de soporte vital básico es:",
                  answers: [
                    { text: "Comprobación de la consciencia", correct: true },
                    {
                      text: "Apertura de las vías respiratorias",
                      correct: false,
                    },
                    { text: "Realizar un masaje cardiaco", correct: false },
                    { text: "Chequear la respiración", correct: false },
                  ],
                },
                {
                  id: 86,
                  text: "Según las técnicas de soporte vital básico, cuando el accidentado respira:",
                  answers: [
                    {
                      text: "Debemos iniciar el masaje cardiaco",
                      correct: false,
                    },
                    { text: "Debemos colocarle boca abajo", correct: false },
                    { text: "Debemos usar un desfibrilador", correct: false },
                    {
                      text: "Hay que colocarlo en posición  PLS",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 87,
                  text: "La maniobra de Heimlich se lleva a cabo en casos de:",
                  answers: [
                    { text: "Atragantamiento", correct: true },
                    { text: "Fractura o esguince", correct: false },
                    { text: "Hemorragia", correct: false },
                    { text: "Quemadura", correct: false },
                  ],
                },
                {
                  id: 88,
                  text: "El protocolo de actuación en el caso de quemaduras indica que lo primero que hay que hacer es:",
                  answers: [
                    { text: "Eliminar el agente que la causa", correct: true },
                    {
                      text: "Cubrir al accidentado con una manta",
                      correct: false,
                    },
                    {
                      text: "Echar abundante agua sobre la quemadura",
                      correct: false,
                    },
                    {
                      text: "Tumbar al accidentado con los pies en alto",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 89,
                  text: "Además de disponer de un botiquín, deberán contar con local de primeros auxilios:",
                  answers: [
                    {
                      text: "Las empresas con más de 10 trabajadores",
                      correct: false,
                    },
                    {
                      text: "Las empresas con más de 50 trabajadores",
                      correct: true,
                    },
                    {
                      text: "Las empresas con más de 25 trabajadores",
                      correct: false,
                    },
                    { text: "Cualquier empresa", correct: false },
                  ],
                },
                {
                  id: 90,
                  text: "La lesión corporal que el trabajador sufre con ocasión o consecuencia del trabajo por cuenta ajena se conoce como:",
                  answers: [
                    { text: "Accidente de trabajo", correct: true },
                    { text: "Causa de trabajo", correct: false },
                    { text: "Enfermedad profesional", correct: false },
                    { text: "Accidente ocasional", correct: false },
                  ],
                },
                {
                  id: 91,
                  text: "¿Cuál de los siguientes no se considera un accidente de trabajo?",
                  answers: [
                    {
                      text: "El accidente al ejercitar funciones de carácter sindical",
                      correct: false,
                    },
                    {
                      text: "Enfermedad no profesionales pero contraídas en el trabajo",
                      correct: false,
                    },
                    {
                      text: "Agravamiento de enfermedades como consecuencia del trabajo",
                      correct: false,
                    },
                    {
                      text: "Accidentes ocasionados por mala fe del trabajador",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 92,
                  text: "¿Cuál de las siguientes no es un requisito exigido para estimar un accidente in itinere?",
                  answers: [
                    {
                      text: "Que se produzca el trayecto habitual del trabajo al domicilio",
                      correct: false,
                    },
                    {
                      text: "Que se produzca dentro del tiempo normal del trayecto",
                      correct: false,
                    },
                    {
                      text: "Que el trabajador se encuentre solo en su vehículo",
                      correct: true,
                    },
                    {
                      text: "Que el medio de transporte elegido sea el habitual",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 93,
                  text: "¿Cuál de las siguientes afirmaciones no es correcta?",
                  answers: [
                    {
                      text: "La enfermedad profesional suele tener tratamiento médico",
                      correct: false,
                    },
                    {
                      text: "La enfermedad profesional se produce de manera súbita",
                      correct: true,
                    },
                    {
                      text: "El inicio de la enfermedad profesional suele ser lento y solapado",
                      correct: false,
                    },
                    {
                      text: "Las enfermedades profesionales se incluyen en un listado",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 94,
                  text: "En relación con los costes de los accidentes laborales, el coste psicológico y el dolor físico ¿a qué parte está asociado?",
                  answers: [
                    { text: "Para la empresa", correct: false },
                    { text: "Para las familias", correct: false },
                    { text: "Para el trabajador", correct: true },
                    { text: "Para la sociedad", correct: false },
                  ],
                },
                {
                  id: 95,
                  text: "En relación con las medidas de prevención de riesgos, ¿cuál de ellas se fundamenta en la curación y rehabilitación de una enfermedad?",
                  answers: [
                    { text: "La seguridad en el trabajo", correct: false },
                    { text: "La medicina del trabajo", correct: true },
                    { text: "La higiene industrial", correct: false },
                    {
                      text: "Las técnicas basadas en ergonomía",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 96,
                  text: "¿Cuál de los siguientes es una medida de protección colectiva?",
                  answers: [
                    { text: "Una mascarilla", correct: false },
                    { text: "Unas manoplas", correct: false },
                    {
                      text: "Zapatos con suela antideslizante",
                      correct: false,
                    },
                    {
                      text: "Mejorar la barandilla de una escalera",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 97,
                  text: "Señale la respuesta CORRECTA sobre los EPI:",
                  answers: [
                    {
                      text: "Los EPI son equipos de protección colectivos",
                      correct: false,
                    },
                    {
                      text: "Los EPI son equipos de protección individuales",
                      correct: true,
                    },
                    {
                      text: "Los EPI son equipos de prevención colectivos",
                      correct: false,
                    },
                    {
                      text: "Los EPI son equipos de prevención individuales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 98,
                  text: "¿Cuál de las siguientes no es una norma relativa al uso de EPI?",
                  answers: [
                    {
                      text: "El trabajador debe recibir información sobre su uso",
                      correct: false,
                    },
                    {
                      text: "Se deben seguir las instrucciones del fabricante",
                      correct: false,
                    },
                    {
                      text: "Deben estar homologados y marcados como CE",
                      correct: false,
                    },
                    {
                      text: "Deben prestarse a los compañeros siempre que sea necesario",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 99,
                  text: "¿Qué principio o criterio general de la Vigilancia de la Salud hace mención a la intimidad, igualdad y no discriminación?",
                  answers: [
                    { text: "Garantizada y gratuita", correct: false },
                    { text: "Voluntaria", correct: false },
                    { text: "Ética", correct: true },
                    { text: "Documentada", correct: false },
                  ],
                },
                {
                  id: 100,
                  text: "¿Cuál de los siguientes no es un elemento que deba incluir el plan de prevención de riesgos laborales?",
                  answers: [
                    { text: "La estructura organizativa", correct: false },
                    { text: "La política de prevención", correct: false },
                    { text: "Los salarios de los trabajadores", correct: true },
                    { text: "Los datos de la empresa", correct: false },
                  ],
                },
                {
                  id: 101,
                  text: "¿Cuál de las siguientes no es una situación en la que deba volver a realizarse una evaluación de riesgos tras la inicial?",
                  answers: [
                    {
                      text: "Introducción de nuevas tecnologías",
                      correct: false,
                    },
                    { text: "Cambio del dueño de la empresa", correct: true },
                    {
                      text: "Cambios en las condiciones de trabajo",
                      correct: false,
                    },
                    {
                      text: "Nuevos trabajos con componentes químicos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 102,
                  text: "En la etapa de estimación del riesgo laboral, según la severidad del daño, ¿Qué clasificación corresponde a los cortes, irritaciones o dolores de cabeza?",
                  answers: [
                    { text: "Dañinos", correct: false },
                    { text: "Extremadamente dañinos", correct: false },
                    { text: "Moderados", correct: false },
                    { text: "Ligeramente dañinos", correct: true },
                  ],
                },
                {
                  id: 103,
                  text: "¿A qué riesgo laboral se asocian los factores de riesgo tales como mala distribución, falta de orden, limpieza y mantenimiento?",
                  answers: [
                    { text: "Lugar de trabajo", correct: true },
                    { text: "Utilización de equipo", correct: false },
                    { text: "Trabajo con máquinas", correct: false },
                    { text: "Riesgo eléctrico", correct: false },
                  ],
                },
                {
                  id: 104,
                  text: "¿Qué tipos de daños se pueden producir generalmente por un mal uso de las maquinas o herramientas?",
                  answers: [
                    { text: "Caídas a distinto nivel", correct: false },
                    { text: "Estrés social", correct: false },
                    { text: "Fatiga", correct: false },
                    { text: "Cortes o aplastamientos", correct: true },
                  ],
                },
                {
                  id: 105,
                  text: "¿Qué medidas de prevención específicas podemos adoptar frente a los riesgos de incendio?",
                  answers: [
                    { text: "Revisiones del nivel de ruido", correct: false },
                    { text: "Reducir la jornada laboral", correct: false },
                    {
                      text: "Mantener alejados los combustibles del calor",
                      correct: true,
                    },
                    {
                      text: "Vía de circulación de materiales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 106,
                  text: "¿Qué puede ocasionar un contacto eléctrico de 30 a 80 mA?",
                  answers: [
                    { text: "Cosquilleo", correct: false },
                    { text: "Tetanización muscular", correct: true },
                    { text: "Quemaduras superficiales", correct: false },
                    { text: "Contracción muscular", correct: false },
                  ],
                },
                {
                  id: 107,
                  text: "¿Cuál de los siguientes no es uno de los riesgos físicos estudiados?",
                  answers: [
                    { text: "Ruido", correct: false },
                    { text: "Temperatura", correct: false },
                    { text: "Radiaciones", correct: false },
                    { text: "Explosiones", correct: true },
                  ],
                },
                {
                  id: 108,
                  text: "Riesgo que relaciona con transferencia de material genético y reproducción de microorganismos:",
                  answers: [
                    { text: "Riesgo eléctrico", correct: false },
                    { text: "Riesgo ergonómico", correct: false },
                    { text: "Riesgo biológico", correct: true },
                    { text: "Riesgo químico", correct: false },
                  ],
                },
                {
                  id: 109,
                  text: "¿Con qué nombre se conocen los actos de violencia psicológica extrema, sistemática y prolongada sobre un trabajador en su lugar de trabajo?",
                  answers: [
                    { text: "Burnout", correct: false },
                    { text: "Estrés laboral", correct: false },
                    { text: "Mobbing", correct: true },
                    { text: "Ergonomía", correct: false },
                  ],
                },
                {
                  id: 110,
                  text: "La aplicación de las capacidades físicas e intelectuales de una persona hacia un fin previamente fijado se conoce como…",
                  answers: [
                    { text: "Cultura preventiva", correct: false },
                    { text: "Salud", correct: false },
                    { text: "Trabajo", correct: true },
                    { text: "Salud laboral", correct: false },
                  ],
                },
                {
                  id: 111,
                  text: "Un estado completo de bienestar físico, psíquico y social, no meramente la ausencia de enfermedad se conoce como…",
                  answers: [
                    { text: "Cultura preventiva", correct: false },
                    { text: "Salud", correct: true },
                    { text: "Trabajo", correct: false },
                    { text: "Salud laboral", correct: false },
                  ],
                },
                {
                  id: 112,
                  text: "Según las disciplinas estudiadas en la práctica de la salud laboral, ¿cuál se encarga de evitar que los trabajadores enfermen a consecuencia de su actividad laboral?",
                  answers: [
                    { text: "Seguridad laboral", correct: false },
                    { text: "Higiene industrial", correct: true },
                    { text: "Medicina del trabajo", correct: false },
                    { text: "Ergonomía", correct: false },
                  ],
                },
                {
                  id: 113,
                  text: "¿En qué grupo de factores causantes de riesgos laborales debemos incluir a los virus, hongos y bacterias?",
                  answers: [
                    { text: "Equipos de trabajo", correct: false },
                    { text: "Lugar de trabajo", correct: false },
                    { text: "Agentes químicos", correct: false },
                    { text: "Agentes biológicos", correct: true },
                  ],
                },
                {
                  id: 114,
                  text: "En relación a los riesgos laborales, las condiciones psicosociales son aquellas…",
                  answers: [
                    {
                      text: "Relacionadas con las condiciones fisiológicas",
                      correct: false,
                    },
                    {
                      text: "Relacionadas con el bienestar mental",
                      correct: true,
                    },
                    {
                      text: "Relacionadas con la calidad ambiental",
                      correct: false,
                    },
                    {
                      text: "Relacionadas con la salvaguarda del trabajador",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 115,
                  text: "¿En qué artículo de la Ley de Prevención de Riesgos Laborales se indica que los trabajadores tienen derecho a una protección eficaz?",
                  answers: [
                    { text: "Artículo 40", correct: false },
                    { text: "Artículo 4", correct: false },
                    { text: "Artículo 19", correct: false },
                    { text: "Artículo 14", correct: true },
                  ],
                },
                {
                  id: 116,
                  text: "Señale cuál de los siguientes derechos NO es un derecho de los trabajadores en materia de salud laboral:",
                  answers: [
                    {
                      text: "Derecho a recibir información en materia de prevención de riesgos laborales",
                      correct: false,
                    },
                    {
                      text: "Derecho a que haya ascensores en todas las plantas.",
                      correct: true,
                    },
                    {
                      text: "Derecho a vigilar regularmente su estado de salud",
                      correct: false,
                    },
                    {
                      text: "Derecho de disponer de equipos de protección individual",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 117,
                  text: "¿Cuál de las siguientes no es una obligación del empresario en situaciones de riesgo grave e inminente?",
                  answers: [
                    {
                      text: "Informar lo antes posible a todos los trabajadores",
                      correct: false,
                    },
                    {
                      text: "Facilitar la formación de los trabajadores",
                      correct: true,
                    },
                    {
                      text: "Adoptar medidas y dar instrucciones oportunas",
                      correct: false,
                    },
                    {
                      text: "Disponer de lo necesario para evitar una situación de peligro",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 118,
                  text: "En el caso de que un trabajador no cumpla con sus obligaciones y se origine un accidente o enfermedad laboral sin lesiones, ¿qué tipo de responsabilidad tendrá dicho trabajador?",
                  answers: [
                    { text: "Responsabilidad civil", correct: true },
                    { text: "Responsabilidad penal", correct: false },
                    { text: "Responsabilidad disciplinaria", correct: false },
                    { text: "Responsabilidad accidental", correct: false },
                  ],
                },
                {
                  id: 119,
                  text: "¿Qué modelo de prevención debe instaurar una empresa con 300 trabajadores que desarrolla una actividad peligrosa?",
                  answers: [
                    { text: "Personal", correct: false },
                    { text: "Servicio de prevención externo", correct: false },
                    { text: "Servicio de prevención propio", correct: true },
                    { text: "Delegada", correct: false },
                  ],
                },
                {
                  id: 120,
                  text: "Identifica cuál de las siguientes es una característica de las aptitudes.",
                  answers: [
                    { text: "Pueden ser innatas o aprendidas.", correct: true },
                    { text: "Tienen un componente emocional.", correct: false },
                    { text: "Son dinámicas.", correct: false },
                  ],
                },
                {
                  id: 121,
                  text: "¿Qué tipo de currículum se centra en habilidades y competencias y es una buena opción si no se tiene mucha experiencia laboral?",
                  answers: [
                    { text: "Mixto.", correct: false },
                    { text: "Organizacional.", correct: false },
                    { text: "Funcional.", correct: true },
                  ],
                },
                {
                  id: 122,
                  text: "El descanso mínimo en jornadas de más de 6 horas continuadas, en menores de edad, es de:",
                  answers: [
                    { text: "30 minutos.", correct: true },
                    { text: "15 minutos.", correct: false },
                    { text: "9 minutos.", correct: false },
                  ],
                },
                {
                  id: 123,
                  text: "El permiso retribuido por matrimonio es de:",
                  answers: [
                    { text: "15 días.", correct: true },
                    { text: "7 días.", correct: false },
                    {
                      text: "El matrimonio no es una causa de permiso retribuido.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 124,
                  text: "De entre las siguientes fuentes del derecho laboral: la Constitución española, un contrato laboral y un tratado internacional, tiene prioridad:",
                  answers: [
                    { text: "La Constitución española.", correct: true },
                    { text: "El contrato laboral.", correct: false },
                    { text: "El tratado internacional.", correct: false },
                  ],
                },
                {
                  id: 125,
                  text: "Un derecho laboral individual del trabajador es:",
                  answers: [
                    {
                      text: "El derecho a formación profesional.",
                      correct: true,
                    },
                    { text: "El derecho a huelga.", correct: false },
                    {
                      text: "El derecho a tener representación en la empresa.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 126,
                  text: "Los elementos esenciales de un contrato de trabajo son:",
                  answers: [
                    {
                      text: "El consentimiento, el objeto y la causa.",
                      correct: true,
                    },
                    {
                      text: "El consentimiento, el sujeto y la causa.",
                      correct: false,
                    },
                    {
                      text: "El consentimiento, el sujeto y la excusa.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 127,
                  text: "Un contrato a tiempo parcial puede realizarse:",
                  answers: [
                    { text: "De forma indefinida o temporal.", correct: true },
                    { text: "Solo a jornada continua.", correct: false },
                    { text: "De forma verbal.", correct: false },
                  ],
                },
                {
                  id: 128,
                  text: "Una ventaja de trabajar en el sector privado respecto del sector público es:",
                  answers: [
                    {
                      text: "No hace falta preparar una oposición.",
                      correct: true,
                    },
                    { text: "Los sueldos son más bajos.", correct: false },
                    {
                      text: "La rigidez a la hora de cambiar de trabajo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 129,
                  text: "En una ficha de trabajo, la descripción detallada de las responsabilidades a asumir por el trabajador se encuentra en:",
                  answers: [
                    {
                      text: "La sección ‘Descripción del puesto de trabajo’.",
                      correct: true,
                    },
                    { text: "La sección ‘Encabezado’.", correct: false },
                    {
                      text: "La sección ‘Información adicional’.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 130,
                  text: "El mercado laboral está en equilibrio cuando:",
                  answers: [
                    {
                      text: "Coinciden la oferta y la demanda laboral.",
                      correct: true,
                    },
                    {
                      text: "La oferta laboral supera a la demanda laboral.",
                      correct: false,
                    },
                    {
                      text: "La demanda laboral supera a la oferta laboral.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 131,
                  text: "Un empleo de administrador de big data en una empresa tecnológica pertenece al sector productivo:",
                  answers: [
                    { text: "Cuaternario.", correct: true },
                    { text: "Terciario.", correct: false },
                    { text: "Primario.", correct: false },
                  ],
                },
                {
                  id: 132,
                  text: "Con relación a los tipos de emergencia, ¿quién interviene cuando se detecta un conato de emergencia?",
                  answers: [
                    { text: "Equipos de primera intervención.", correct: true },
                    {
                      text: "Equipos de segunda intervención.",
                      correct: false,
                    },
                    {
                      text: "Todos los medios humanos y materiales disponibles.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 133,
                  text: "Según el protocolo de soporte vital básico, cuando el accidentado está consciente y responde, hay que:",
                  answers: [
                    {
                      text: "Tranquilizar a la persona accidentada y dejarla en la misma posición, si no hay peligro.",
                      correct: true,
                    },
                    {
                      text: "Zarandear a la persona accidentada por los hombros.",
                      correct: false,
                    },
                    {
                      text: "Colocar a la persona accidentada en PLS.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 134,
                  text: "Según las causas estudiadas para los accidentes de trabajo, la organización del sistema de trabajo sería:",
                  answers: [
                    { text: "Una causa humana.", correct: false },
                    { text: "Una causa técnica.", correct: true },
                    { text: "Una causa legal.", correct: false },
                  ],
                },
                {
                  id: 135,
                  text: "Indica cuál de las siguientes se considera una medida de protección individual de riesgos laborales.",
                  answers: [
                    {
                      text: "Usar un casco de protección en una obra.",
                      correct: true,
                    },
                    {
                      text: "Cambiar una maquinaria contaminante por una más limpia.",
                      correct: false,
                    },
                    {
                      text: "Usar aspiradores de polvo en el lugar de trabajo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 136,
                  text: "La primera etapa en la gestión de la prevención de una empresa es:",
                  answers: [
                    {
                      text: "Elaborar un plan de prevención de riesgos laborales.",
                      correct: true,
                    },
                    { text: "Evaluar los riesgos laborales.", correct: false },
                    {
                      text: "Ejecutar las actividades preventivas.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 137,
                  text: "La extinción de un incendio con agua es una medida de:",
                  answers: [
                    { text: "Enfriamiento", correct: true },
                    { text: "Sofocación", correct: false },
                    { text: "Dilución", correct: false },
                  ],
                },
                {
                  id: 138,
                  text: "Una jornada laboral excesiva y con turnos nocturnos se entiende como un riesgo laboral de tipo:",
                  answers: [
                    {
                      text: "Riesgo por la organización del trabajo.",
                      correct: true,
                    },
                    { text: "Riesgo ergonómico.", correct: false },
                    {
                      text: "Riesgo del contenido del trabajo.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 139,
                  text: "La mala iluminación es un factor de riesgo laboral asociado a:",
                  answers: [
                    { text: "Un agente físico.", correct: true },
                    {
                      text: "La carga psicológica del trabajo.",
                      correct: false,
                    },
                    { text: "Las características personales.", correct: false },
                  ],
                },
                {
                  id: 140,
                  text: "Identifique cuál no es un derecho del trabajador en materia de prevención de riesgos laborales.",
                  answers: [
                    {
                      text: "Usar adecuadamente las máquinas con las que desarrolle su actividad.",
                      correct: true,
                    },
                    {
                      text: "Derecho a recibir formación teórica y práctica sobre prevención de riesgos laborales.",
                      correct: false,
                    },
                    {
                      text: "Derecho a la vigilancia regular de su estado de salud.",
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
    {
      id: "ed",
      name: "Entornos de desarrollo",
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
                  id: 141,
                  text: "Un programa informático…",
                  answers: [
                    {
                      text: "Siempre se realiza con lenguajes de bajo nivel",
                      correct: false,
                    },
                    {
                      text: "No puede utilizar instrucciones lógicas",
                      correct: false,
                    },
                    {
                      text: "Se puede considerar como una receta para resolver un problema determinado",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 142,
                  text: "Un algoritmo…",
                  answers: [
                    {
                      text: "Es lo mismo que un programa informático",
                      correct: false,
                    },
                    {
                      text: "No se utiliza en soluciones informáticas",
                      correct: false,
                    },
                    {
                      text: "Únicamente es un término matemático",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 143,
                  text: "Para ejecutar un programa informático…",
                  answers: [
                    {
                      text: "Es necesario disponer de un código que pueda entender el procesador",
                      correct: true,
                    },
                    {
                      text: "Se puede ejecutar un lenguaje de alto nivel",
                      correct: false,
                    },
                    {
                      text: "Es necesario escribirlo en lenguaje de bajo nivel",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 144,
                  text: "Para que un programa informático pueda ser ejecutado…",
                  answers: [
                    {
                      text: "Es necesario que esté almacenado en el disco duro",
                      correct: false,
                    },
                    { text: "Debe ser cargado en memoria ROM", correct: false },
                    { text: "Debe ser cargado en la ALU", correct: false },
                    {
                      text: "Debe ser cargado en la memoria RAM",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 145,
                  text: "La arquitectura típica de un computador…",
                  answers: [
                    {
                      text: "Requiere de memoria RAM, registros, ALU, unidad de control y sistema de E/S.",
                      correct: true,
                    },
                    { text: "Requiere únicamente de la CPU", correct: false },
                    {
                      text: "Requiere únicamente de los registros",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 146,
                  text: "El nivel de abstracción de un lenguaje de programación…",
                  answers: [
                    { text: "No se suele utilizar", correct: false },
                    {
                      text: "Suele indicar lo cercano que está al lenguaje humano",
                      correct: true,
                    },
                    {
                      text: "Se suele relacionar con el rendimiento del lenguaje",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 147,
                  text: "Los lenguajes de programación de alto nivel…",
                  answers: [
                    {
                      text: "Tienen un nivel de atracción bajo",
                      correct: false,
                    },
                    {
                      text: "Pueden ser ejecutado directamente en la CPU",
                      correct: false,
                    },
                    {
                      text: "Se trata de lenguajes declarativos",
                      correct: false,
                    },
                    {
                      text: "Tienen un alto nivel de abstracción",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 148,
                  text: "El paradigma de programación declarativo…",
                  answers: [
                    { text: "No existe", correct: false },
                    {
                      text: "Se utiliza más que lenguajes de alto nivel",
                      correct: false,
                    },
                    {
                      text: "Es más utilizado que el paradigma imperativo",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 149,
                  text: "La programación funcional…",
                  answers: [
                    {
                      text: "Pertenece al paradigma declarativo",
                      correct: true,
                    },
                    {
                      text: "Pertenece al paradigma imperativo",
                      correct: false,
                    },
                    { text: "No se utiliza en la actualidad", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 150,
                  text: "La programación orientada a objetos…",
                  answers: [
                    {
                      text: "Pertenece al paradigma declarativo",
                      correct: false,
                    },
                    {
                      text: "Pertenece al paradigma procedimental",
                      correct: false,
                    },
                    {
                      text: "Se engloba dentro del paradigma imperativo",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 151,
                  text: "La ingeniería del software…",
                  answers: [
                    {
                      text: "No es necesaria en el desarrollo de un proyecto software",
                      correct: false,
                    },
                    {
                      text: "Permite guiar el proceso de desarrollo más fácilmente",
                      correct: true,
                    },
                    {
                      text: "Sigue el modelo de la arquitectura tradicional",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 152,
                  text: "La toma de requisitos…",
                  answers: [
                    {
                      text: "No forma parte de la ingeniería del software",
                      correct: false,
                    },
                    {
                      text: "Es la etapa menos importante en un desarrollo",
                      correct: false,
                    },
                    {
                      text: "Es sumamente importante para ahorrar costes económicos innecesarios",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 153,
                  text: "La fase de análisis en el desarrollo software…",
                  answers: [
                    {
                      text: "Debe realizarse después de la toma de requisitos",
                      correct: true,
                    },
                    {
                      text: "Se realiza después de la etapa de diseño",
                      correct: false,
                    },
                    { text: "Es altamente prescindible", correct: false },
                    {
                      text: "Se realiza después de la etapa de documentación",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 154,
                  text: "La fase de implementación en el desarrollo software...",
                  answers: [
                    {
                      text: "Debe ser la primera en realizarse",
                      correct: false,
                    },
                    {
                      text: "Se realiza justo después de la toma de requisitos",
                      correct: false,
                    },
                    {
                      text: "Se realiza después de la etapa de diseño",
                      correct: true,
                    },
                    {
                      text: "Puede comenzar en cualquier momento",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 155,
                  text: "Las metodologías de desarrollo software…",
                  answers: [
                    {
                      text: "Pueden tener diferentes enfoques que pueden afectar al resultado final",
                      correct: true,
                    },
                    { text: "Es mejor no utilizar ninguna", correct: false },
                    {
                      text: "Suelen requerir mayores costes económicos",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 156,
                  text: "El modelo de desarrollo en cascada…",
                  answers: [
                    {
                      text: "Es el más utilizado en la actualidad",
                      correct: false,
                    },
                    {
                      text: "Requiere más tiempo para sacar un producto final",
                      correct: true,
                    },
                    {
                      text: "Es más rápido que el modelo en espiral",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 157,
                  text: "El modelo de desarrollo en espiral…",
                  answers: [
                    {
                      text: "El más utilizado que las metodologías ágiles",
                      correct: false,
                    },
                    {
                      text: "Es menos eficiente que el modelo de desarrollo en cascada",
                      correct: false,
                    },
                    {
                      text: "Completa una funcionalidad en cada ciclo de la espiral",
                      correct: true,
                    },
                    { text: "No existe dicha metodología", correct: false },
                  ],
                },
                {
                  id: 158,
                  text: "La programación extrema…",
                  answers: [
                    {
                      text: "Es más lenta que el modelo de desarrollo en cascada",
                      correct: false,
                    },
                    {
                      text: "Es más lenta que el modelo de desarrollo en espiral",
                      correct: false,
                    },
                    { text: "No se utiliza hoy en día", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 159,
                  text: "El analista de sistemas…",
                  answers: [
                    {
                      text: "Es el encargado de realizar la codificación del software",
                      correct: false,
                    },
                    {
                      text: "Se puede prescindir en desarrollo software",
                      correct: false,
                    },
                    {
                      text: "Es el encargado de realizar el estudio del sistema",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 160,
                  text: "UML..",
                  answers: [
                    {
                      text: "Es un tipo de rol en el desarrollo software",
                      correct: false,
                    },
                    { text: "No se utiliza en la actualidad", correct: false },
                    { text: "Es un lenguaje de modelado", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                // Compilación, código interpretado y depuración
                {
                  id: 161,
                  text: "El proceso de compilación…",
                  answers: [
                    {
                      text: "Transforma código ensamblador a código intermedio",
                      correct: false,
                    },
                    {
                      text: "Traduce código ensamblador a código de alto nivel",
                      correct: false,
                    },
                    { text: "Necesita muchos recursos", correct: false },
                    {
                      text: "Traduce código de alto nivel a código ensamblador",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 162,
                  text: "Un código interpretado…",
                  answers: [
                    {
                      text: "Es más eficiente que un código compilado",
                      correct: false,
                    },
                    {
                      text: "No es compatible con un código compilado",
                      correct: false,
                    },
                    {
                      text: "Suele ser menos eficiente que un código compilado",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 163,
                  text: "Un lenguaje de programación de alto nivel…",
                  answers: [
                    { text: "Se parece al lenguaje humano", correct: true },
                    { text: "Depende de la CPU utilizada", correct: false },
                    {
                      text: "Depende de una máquina en concreto",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 164,
                  text: "Una vez que un código fuente compila…",
                  answers: [
                    {
                      text: "No es necesario realizar comprobaciones en su ejecución",
                      correct: false,
                    },
                    {
                      text: "No es posible que posea errores lógicos",
                      correct: false,
                    },
                    { text: "Es necesario probar su ejecución", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 165,
                  text: "El depurador de código...",
                  answers: [
                    {
                      text: "Se puede utilizar en soluciones compiladas e interpretadas",
                      correct: true,
                    },
                    {
                      text: "Solo es compatible con soluciones compiladas",
                      correct: false,
                    },
                    {
                      text: "No permite detectar errores lógicos",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 166,
                  text: "Las soluciones interpretadas…",
                  answers: [
                    {
                      text: "Suelen estar vinculadas a soluciones de tiempo real",
                      correct: false,
                    },
                    {
                      text: "Se suelen vincular con la inteligencia artificial",
                      correct: true,
                    },
                    {
                      text: "No tienen utilidad en la actualidad",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 167,
                  text: "En el proceso de compilación…",
                  answers: [
                    {
                      text: "Las dependencias se solucionan con las comprobaciones léxicas",
                      correct: false,
                    },
                    {
                      text: "La dependencia se solucionan con las comprobaciones sintácticas",
                      correct: false,
                    },
                    {
                      text: "Requiere la utilización de un enlazador para resolver las dependencias",
                      correct: true,
                    },
                    {
                      text: "No es posible resolver las dependencias",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 168,
                  text: "Las comprobaciones léxicas en el proceso de compilación…",
                  answers: [
                    {
                      text: "Hace referencia en el orden de los elementos",
                      correct: false,
                    },
                    {
                      text: "No existe estas comprobaciones en soluciones compiladas",
                      correct: false,
                    },
                    { text: "Dependerá de la CPU utilizada", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 169,
                  text: "Cuando nuestro programa posee un fallo…",
                  answers: [
                    {
                      text: "Suele ser más costoso solucionarlo que encontrarlo",
                      correct: false,
                    },
                    {
                      text: "Es necesario recompilar, pues de esta forma se arreglan los problemas lógicos",
                      correct: false,
                    },
                    {
                      text: "Suele ser más complicado encontrarlo que solucionarlo",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 170,
                  text: "La reutilización de código…",
                  answers: [
                    {
                      text: "No es una buena práctica en la actualidad",
                      correct: false,
                    },
                    {
                      text: "Solo es posible en soluciones interpretadas",
                      correct: false,
                    },
                    {
                      text: "Nos permite desarrollar un software de una manera más veloz",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },

                // IDE y entornos de desarrollo
                {
                  id: 171,
                  text: "Un entorno de desarrollo integrado…",
                  answers: [
                    { text: "No es capaz de editar el código", correct: false },
                    {
                      text: "No es capaz de realizar la compilación",
                      correct: false,
                    },
                    { text: "Ofrece herramienta de depuración", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 172,
                  text: "Un IDE…",
                  answers: [
                    {
                      text: "Es una herramienta destinada al público en general",
                      correct: false,
                    },
                    {
                      text: "Es una herramienta orientada a desarrolladores",
                      correct: true,
                    },
                    {
                      text: "Es una herramienta orientada a diseñadores",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 173,
                  text: "Los IDEs…",
                  answers: [
                    {
                      text: "Integran múltiples funcionalidades",
                      correct: true,
                    },
                    { text: "Siempre han existido", correct: false },
                    {
                      text: "No se recomienda su utilización en entornos profesionales",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 174,
                  text: "Una característica necesaria en los entornos de desarrollo es…",
                  answers: [
                    {
                      text: "Que sea rígido y no permita la personalización",
                      correct: false,
                    },
                    {
                      text: "Que sea un entorno cerrado y no permita la actualización",
                      correct: false,
                    },
                    {
                      text: "Que permite ampliarse mediante plugins",
                      correct: true,
                    },
                    {
                      text: "Que no tenga conexión a Internet",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 175,
                  text: "A la hora de elegir un entorno desarrollo…",
                  answers: [
                    {
                      text: "Hay que considerar diferentes dimensiones para realizar la elección correcta",
                      correct: true,
                    },
                    {
                      text: "Es mejor utilizar el IDE con más lenguajes",
                      correct: false,
                    },
                    { text: "Es mejor elegir el IDE más caro", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 176,
                  text: "El editor de texto en un entorno desarrollo...",
                  answers: [
                    {
                      text: "Es un elemento que no hay que tener en cuenta",
                      correct: false,
                    },
                    { text: "Es sumamente importante", correct: true },
                    {
                      text: "No debe permitir la personalización",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 177,
                  text: "La utilización de plugins en los entornos de desarrollo...",
                  answers: [
                    { text: "No es recomendado", correct: false },
                    {
                      text: "Pone en riesgo la calidad del software desarrollado",
                      correct: false,
                    },
                    {
                      text: "Permite personalizar y extender el entorno",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 178,
                  text: "Para que un IDE sea efectivo debe…",
                  answers: [
                    { text: "No tener acceso a Internet", correct: false },
                    {
                      text: "Incluir al editor de forma externa",
                      correct: false,
                    },
                    {
                      text: "Utilizar línea de comandos únicamente",
                      correct: false,
                    },
                    { text: "Disponer de interfaz gráfica", correct: true },
                  ],
                },
                {
                  id: 179,
                  text: "El editor de texto de un entorno de desarrollo…",
                  answers: [
                    {
                      text: "No tiene ninguna característica especial",
                      correct: false,
                    },
                    {
                      text: "Requiere muchos recursos hardware",
                      correct: false,
                    },
                    { text: "Suele ser un editor inteligente", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 180,
                  text: "Al utilizar un IDE en el desarrollo…",
                  answers: [
                    {
                      text: "Es necesario disponer de herramientas externas para compilar",
                      correct: false,
                    },
                    {
                      text: "Los errores sintácticos aparecen durante la compilación",
                      correct: false,
                    },
                    {
                      text: "El programador puede ver los errores mientras teclea",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                // IDE y entornos de desarrollo avanzados
                {
                  id: 181,
                  text: "La utilización de un IDE puede estar marcado por…",
                  answers: [
                    {
                      text: "El soporte del sistema operativo",
                      correct: false,
                    },
                    { text: "La capacidad de actualización", correct: false },
                    { text: "La existencia de plugins", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 182,
                  text: "La capacidad de documentación de IDE…",
                  answers: [
                    {
                      text: "No es relevante pues solo se utiliza para desarrollar",
                      correct: false,
                    },
                    {
                      text: "No está contemplada en este tipo de herramientas",
                      correct: false,
                    },
                    {
                      text: "Es una característica a tener en cuenta, pues el código tiene que estar documentado",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 183,
                  text: "Cuando realizamos la instalación de un IDE...",
                  answers: [
                    {
                      text: "Es recomendable realizar una fase de personalización",
                      correct: true,
                    },
                    {
                      text: "No es posible realizar ningún tipo de personalización",
                      correct: false,
                    },
                    {
                      text: "No se puede instalar ningún módulo adicional",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 184,
                  text: "El IDE Eclipse…",
                  answers: [
                    { text: "Está desarrollado en C#", correct: false },
                    {
                      text: "No permite la instalación de plugins",
                      correct: false,
                    },
                    { text: "Está desarrollado en Java", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 185,
                  text: "En referencia Visual Studio Code",
                  answers: [
                    { text: "Es un IDE", correct: false },
                    {
                      text: "Es un editor de texto con funciones avanzadas",
                      correct: true,
                    },
                    { text: "No permite instalar plugins", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 186,
                  text: "A la hora de instalar un IDE",
                  answers: [
                    {
                      text: "Hay que instalarlo independientemente de las características de la máquina",
                      correct: false,
                    },
                    {
                      text: "Tenemos que tener en cuenta los requisitos hardware que requiere el IDE",
                      correct: true,
                    },
                    {
                      text: "Tenemos que elegir el que sea más ligero",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 187,
                  text: "Cuando instalamos un entorno de desarrollo…",
                  answers: [
                    {
                      text: "Hay que tener en cuenta los requisitos necesarios",
                      correct: false,
                    },
                    {
                      text: "Tenemos consultar si existe documentación del mismo",
                      correct: false,
                    },
                    {
                      text: "Es importante observar la frecuencia de actualización",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 188,
                  text: "Las herramientas CASE…",
                  answers: [
                    { text: "No pueden generar código", correct: false },
                    { text: "Genera un código de alta calidad", correct: true },
                    {
                      text: "Ayudan únicamente en la fase de implementación",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 189,
                  text: "En referencia a las herramientas CASE y los entornos de desarrollo…",
                  answers: [
                    { text: "Normalmente van por separado", correct: false },
                    {
                      text: "Las herramientas se pueden añadir a los entornos de desarrollo",
                      correct: true,
                    },
                    {
                      text: "Siempre hay que utilizar una herramienta CASE",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 190,
                  text: "Cuando instalamos un entorno de desarrollo…",
                  answers: [
                    {
                      text: "Debemos instalar los plugins necesarios para nuestra empresa",
                      correct: false,
                    },
                    {
                      text: "Es necesario realizar una etapa de configuración previa",
                      correct: false,
                    },
                    {
                      text: "Hay que asegurarse que está actualizado",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },

                // UML y metodologías orientadas a objetos
                {
                  id: 191,
                  text: "El lenguaje UML…",
                  answers: [
                    { text: "No es estándar", correct: false },
                    {
                      text: "Está centrado en el modelado orientado objetos",
                      correct: true,
                    },
                    { text: "No es seguro", correct: false },
                    { text: "Ninguna es correcta", correct: false },
                  ],
                },
                {
                  id: 192,
                  text: "Las metodologías orientadas a objetos…",
                  answers: [
                    { text: "No se utilizan en la actualidad", correct: false },
                    { text: "Son poco eficientes", correct: false },
                    {
                      text: "No disponen de lenguaje de modelado",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 193,
                  text: "En relación a OMT…",
                  answers: [
                    {
                      text: "Es una de las primeras metodologías orientadas a objetos",
                      correct: true,
                    },
                    {
                      text: "Es posterior al proceso unificado",
                      correct: false,
                    },
                    { text: "Utiliza UML", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 194,
                  text: "Una de las características de UML…",
                  answers: [
                    {
                      text: "No posee un gran conjunto de diagramas",
                      correct: false,
                    },
                    {
                      text: "No se puede utilizar en ningún entorno de desarrollo",
                      correct: false,
                    },
                    {
                      text: "Cada tipo de diagrama se centra en un punto de vista del software",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 195,
                  text: "A la hora de crear el modelado de un sistema informático…",
                  answers: [
                    {
                      text: "Es recomendable utilizar herramientas ofimáticas",
                      correct: false,
                    },
                    {
                      text: "Hay que realizar el modelado a mano",
                      correct: false,
                    },
                    {
                      text: "Es recomendable utilizar herramientas de modelado",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 196,
                  text: "El diagrama de clases…",
                  answers: [
                    {
                      text: "Es el diagrama menos importante en UML",
                      correct: false,
                    },
                    {
                      text: "Se representa junto con el diagrama de casos de uso",
                      correct: false,
                    },
                    {
                      text: "Es un tipo especial de diagrama de secuencia",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 197,
                  text: "En relación con UML…",
                  answers: [
                    { text: "Solo tiene una versión", correct: false },
                    {
                      text: "Ha ido evolucionando a lo largo del tiempo",
                      correct: true,
                    },
                    { text: "Es poco potente", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 198,
                  text: "El diagrama de casos de uso…",
                  answers: [
                    { text: "No está contemplado en UML", correct: false },
                    {
                      text: "Permite determinar el comportamiento del sistema de el punto de vista del usuario",
                      correct: true,
                    },
                    {
                      text: "Permite representar interacciones de manera dinámica",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 199,
                  text: "La metodología de proceso de objetos…",
                  answers: [
                    {
                      text: "Es la metodología más utilizada en la actualidad",
                      correct: false,
                    },
                    { text: "Utiliza el proceso unificado", correct: false },
                    { text: "Es posterior a OMT", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 200,
                  text: "¿Con qué herramienta no podremos elaborar diagramas?",
                  answers: [
                    { text: "Rationalic Roses", correct: true },
                    { text: "StarUML", correct: false },
                    { text: "Papyrus UML", correct: false },
                    {
                      text: "Con todas las anteriores se pueden elaborar diagramas",
                      correct: false,
                    },
                  ],
                },
                // Diagramas de clases
                {
                  id: 201,
                  text: "El diagrama de clases…",
                  answers: [
                    { text: "No pertenece a UML", correct: false },
                    {
                      text: "Permite establecer las relaciones entre las clases",
                      correct: true,
                    },
                    { text: "Muestra un flujo de ejecución", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 202,
                  text: "La ingeniería inversa…",
                  answers: [
                    {
                      text: "No es posible con los lenguajes actuales",
                      correct: false,
                    },
                    {
                      text: "Solo funciona con el lenguaje ensamblador",
                      correct: false,
                    },
                    {
                      text: "Permite obtener el código fuente a partir de un código máquina.",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 203,
                  text: "Un diagrama de clases...",
                  answers: [
                    {
                      text: "Solo muestra el nombre de la clases",
                      correct: false,
                    },
                    {
                      text: "No posee información de los atributos",
                      correct: false,
                    },
                    {
                      text: "Muestra información de las clases, los métodos y los atributos.",
                      correct: true,
                    },
                    {
                      text: "No establece información sobre los métodos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 204,
                  text: "La encapsulación en una clase…",
                  answers: [
                    {
                      text: "No es necesario en la orientación objetos",
                      correct: false,
                    },
                    { text: "Es una mala práctica", correct: false },
                    {
                      text: "Es una característica de la orientación objetos",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 205,
                  text: "La visibilidad de una clase…",
                  answers: [
                    {
                      text: "Puede afectar a la clase, los atributos y los métodos.",
                      correct: false,
                    },
                    {
                      text: "Indica el ámbito de lo que puede ser visible en los métodos de una clase",
                      correct: false,
                    },
                    { text: "Puede tener diferentes niveles", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 206,
                  text: "A la hora de utilizar una clase…",
                  answers: [
                    { text: "Debemos crear un objeto", correct: false },
                    {
                      text: "Los métodos visibles son los protegidos y los públicos",
                      correct: false,
                    },
                    {
                      text: "Normalmente se utiliza la palabra reservada new",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 207,
                  text: "La relación de asociación…",
                  answers: [
                    {
                      text: "No es posible un diagrama de clases",
                      correct: false,
                    },
                    {
                      text: "No se representa en un diagrama de clases",
                      correct: false,
                    },
                    {
                      text: "Es la relación más sencilla en el diagrama de clases",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 208,
                  text: "En referencia a la cardinalidad…",
                  answers: [
                    {
                      text: "No se contempla en un diagrama de clase",
                      correct: false,
                    },
                    {
                      text: "Indica el número de veces que puede relacionarse una clase con otras",
                      correct: false,
                    },
                    {
                      text: "Indica el número de veces que puede relacionarse una instancia de una clase con instancias de otras.",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 209,
                  text: "La ingeniería inversa…",
                  answers: [
                    {
                      text: "Permite obtener el código fuente a partir de un código máquina.",
                      correct: false,
                    },
                    {
                      text: "Puede generar un diagrama de clases a partir de un código fuente",
                      correct: false,
                    },
                    {
                      text: "Puede ser mitigada con medidas de protección sobre el código",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 210,
                  text: "Para la creación de diagramas de clases…",
                  answers: [
                    {
                      text: "Es mejor utilizar herramientas de propósito general",
                      correct: false,
                    },
                    {
                      text: "No existen herramientas para soportar este tipo de diagramas",
                      correct: false,
                    },
                    {
                      text: "Existen herramientas específicamente para ello",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },

                // Diagramas de comportamiento
                {
                  id: 211,
                  text: "Los diagramas de comportamiento…",
                  answers: [
                    { text: "No están soportados en UML", correct: false },
                    {
                      text: "Permiten mostrar el flujo de ejecución de una aplicación",
                      correct: true,
                    },
                    { text: "Son poco seguros", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 212,
                  text: "Un diagrama de secuencia…",
                  answers: [
                    {
                      text: "Muestra el aspecto de las clases",
                      correct: false,
                    },
                    {
                      text: "Es el mejor diagrama de comportamiento",
                      correct: false,
                    },
                    {
                      text: "Es un tipo de diagrama de comportamiento",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 213,
                  text: "Un diagrama de casos de uso…",
                  answers: [
                    {
                      text: "Permite mostrar la interacción de las clases",
                      correct: false,
                    },
                    {
                      text: "Se centra en mostrar el flujo de ejecución",
                      correct: false,
                    },
                    {
                      text: "Permite representar la funcionalidad del sistema",
                      correct: true,
                    },
                    {
                      text: "Muestra los detalles de cada clase",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 214,
                  text: "Un diagrama de actividad…",
                  answers: [
                    {
                      text: "Es un tipo especial de diagrama de casos de uso",
                      correct: false,
                    },
                    { text: "No está contemplado en UML", correct: false },
                    {
                      text: "Es una especialización de los diagramas de estado",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 215,
                  text: "Un diagrama de comportamiento…",
                  answers: [
                    {
                      text: "Puede mostrar qué sucede al lanzarse un evento",
                      correct: true,
                    },
                    {
                      text: "Solo muestra el flujo de ejecución al recibir una señal",
                      correct: false,
                    },
                    { text: "Solo puede ser emergente", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 216,
                  text: "Un diagrama de comportamiento emergente…",
                  answers: [
                    {
                      text: "Es aquel que tienen lugar en la ejecución sin la interacción de objetos",
                      correct: false,
                    },
                    {
                      text: "Es aquel que tiene lugar por la interacción de objetos",
                      correct: true,
                    },
                    { text: "No existe esta clasificación", correct: false },
                    {
                      text: "Es más potente que un diagrama de interacción",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 217,
                  text: "Un diagrama de comportamiento de ejecución…",
                  answers: [
                    {
                      text: "Siempre ha estado contemplado en UML",
                      correct: false,
                    },
                    { text: "Surge en la versión 1.x de UML", correct: false },
                    { text: "Surge en la versión 2.4.1 de UML", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 218,
                  text: "Para generar diagramas de comportamiento…",
                  answers: [
                    {
                      text: "Solo se pueden utilizar herramientas ofimáticas",
                      correct: false,
                    },
                    {
                      text: "Es necesario realizarlo una vez esté diseñado el sistema e implementado",
                      correct: false,
                    },
                    {
                      text: "Es necesario disponer del código fuente",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 219,
                  text: "En relación con los diagramas de comportamiento, ¿cuál de las siguientes afirmaciones es cierta?",
                  answers: [
                    {
                      text: "El diagrama de actividad no es un tipo de diagrama de comportamiento.",
                      correct: false,
                    },
                    {
                      text: "Solo existen dos tipos de diagramas de comportamiento: el diagrama de casos de uso y el de estados.",
                      correct: false,
                    },
                    {
                      text: "No son muy útiles para representar el flujo del sistema.",
                      correct: false,
                    },
                    { text: "Todas son incorrectas", correct: true },
                  ],
                },
                {
                  id: 220,
                  text: "Un diagrama de estados…",
                  answers: [
                    {
                      text: "Es un tipo especial de diagrama de casos de uso",
                      correct: false,
                    },
                    {
                      text: "Es un tipo especial de diagrama de secuencia",
                      correct: false,
                    },
                    {
                      text: "Permite indicar los diferentes estados por los que pasa el software",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                // Diagramas de casos de uso
                {
                  id: 221,
                  text: "Un diagrama de casos de uso…",
                  answers: [
                    {
                      text: "Permite indicar la relación entre las clases del sistema",
                      correct: false,
                    },
                    {
                      text: "Nos sirve para entender los detalles de implementación",
                      correct: false,
                    },
                    {
                      text: "Permite visualizar rápidamente la funcionalidad del sistema",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 222,
                  text: "Las relaciones para los casos de uso pueden ser…",
                  answers: [
                    { text: "De inclusión", correct: false },
                    { text: "De extensión", correct: false },
                    { text: "De generalización", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 223,
                  text: "El límite de un sistema…",
                  answers: [
                    {
                      text: "Es un tipo de relación en los diagramas de caso de uso",
                      correct: true,
                    },
                    { text: "No existe en UML", correct: false },
                    {
                      text: "No es necesario indicarlo si tenemos documentación",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 224,
                  text: "La documentación de un caso de uso…",
                  answers: [
                    { text: "Es opcional", correct: false },
                    {
                      text: "No es necesario pues todo queda registrado en el caso de uso",
                      correct: false,
                    },
                    {
                      text: "Nos permite tener más información que el diagrama",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 225,
                  text: "En un diagrama de casos de uso existe…",
                  answers: [
                    { text: "Actores", correct: false },
                    { text: "Casos de uso", correct: false },
                    { text: "Relaciones", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 226,
                  text: "Gracias a los diagramas de casos de uso…",
                  answers: [
                    { text: "Tenemos sistemas monolíticos", correct: false },
                    {
                      text: "Podemos tener sistemas más modulares",
                      correct: true,
                    },
                    { text: "Se dificulta la implementación", correct: false },
                    {
                      text: "No se capturan los requisitos funcionales",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 227,
                  text: "Los requisitos no funcionales…",
                  answers: [
                    {
                      text: "No son necesarios en el diseño software",
                      correct: false,
                    },
                    {
                      text: "No se pueden capturar en el diagrama de caso de uso",
                      correct: false,
                    },
                    {
                      text: "Requieren de la documentación para ser capturados",
                      correct: false,
                    },
                    { text: "La B y C son correctas", correct: true },
                  ],
                },
                {
                  id: 228,
                  text: "Los requisitos funcionales…",
                  answers: [
                    {
                      text: "Se centran en definir la calidad del sistema",
                      correct: false,
                    },
                    {
                      text: "Se centran en aspectos temporales",
                      correct: false,
                    },
                    {
                      text: "No pueden relacionarse con actores",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 229,
                  text: "A la hora de documentar un caso de uso…",
                  answers: [
                    {
                      text: "Es necesario indicar el estado anterior a la ejecución",
                      correct: false,
                    },
                    {
                      text: "Es necesario indicar el estado posterior de la ejecución",
                      correct: false,
                    },
                    {
                      text: "Hay que indicar una descripción del caso de uso",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 230,
                  text: "Los requisitos no funcionales…",
                  answers: [
                    {
                      text: "Pueden afectar a la calidad del sistema.",
                      correct: false,
                    },
                    {
                      text: "No quedan reflejados en los diagramas.",
                      correct: false,
                    },
                    {
                      text: "Normalmente son requisitos obligatorios",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },

                // Diagramas de secuencia e interacción
                {
                  id: 231,
                  text: "Los diagramas de secuencia…",
                  answers: [
                    { text: "Se utilizan en los casos de uso", correct: false },
                    {
                      text: "Permiten indicar el intercambio de mensajes asíncrono",
                      correct: true,
                    },
                    {
                      text: "Son menos potentes que los diagramas de colaboración",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 232,
                  text: "Los diagramas de colaboración…",
                  answers: [
                    {
                      text: "Son un tipo especial de diagrama de interacción",
                      correct: false,
                    },
                    {
                      text: "No requieren una representación lineal de los objetos",
                      correct: false,
                    },
                    {
                      text: "No están ampliamente soportados por las herramientas de modelado",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 233,
                  text: "Los diagramas de interacción…",
                  answers: [
                    {
                      text: "Permiten observar el intercambio de mensajes en un sistema",
                      correct: true,
                    },
                    {
                      text: "Ofrecen una vista estática del sistema",
                      correct: false,
                    },
                    { text: "No están soportados en UML", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 234,
                  text: "Los diagramas de secuencia…",
                  answers: [
                    {
                      text: "Permiten mostrar el intercambio de mensajes de forma síncrona",
                      correct: false,
                    },
                    {
                      text: "Permiten mostrar el intercambio de mensajes de forma asíncrona",
                      correct: false,
                    },
                    { text: "Están soportados por UML", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 235,
                  text: "Las líneas de vida…",
                  answers: [
                    {
                      text: "Se relacionan con los diagramas de secuencia",
                      correct: true,
                    },
                    {
                      text: "Se relacionan con los diagramas de interacción",
                      correct: false,
                    },
                    {
                      text: "Se relacionan con los diagramas de casos de uso",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 236,
                  text: "Los diagramas de colaboración…",
                  answers: [
                    {
                      text: "Son adecuados para todo tipo de documentación",
                      correct: false,
                    },
                    {
                      text: "Se utilizan especialmente en equipos con metodologías ágiles",
                      correct: true,
                    },
                    {
                      text: "Permiten establecer la línea de vida de una manera clara",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 237,
                  text: "Los diagramas de secuencia…",
                  answers: [
                    {
                      text: "Representan el intercambio de mensajes sin una forma establecida",
                      correct: false,
                    },
                    {
                      text: "Permiten aprovechar mejor el espacio a la hora de crear el diagrama",
                      correct: false,
                    },
                    {
                      text: "Se utilizan siempre en metodologías ágiles",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 238,
                  text: "En los diagramas de interacción…",
                  answers: [
                    {
                      text: "Es posible establecer condiciones",
                      correct: false,
                    },
                    {
                      text: "Se pueden establecer mensaje síncronos y asíncronos",
                      correct: false,
                    },
                    {
                      text: "Se pueden adaptar a diferentes metodologías",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 239,
                  text: "El modelado dinámico…",
                  answers: [
                    {
                      text: "Se puede realizar mediante la creación de diagramas de casos de uso",
                      correct: false,
                    },
                    {
                      text: "Se puede realizar mediante la creación de diagramas de clase",
                      correct: false,
                    },
                    {
                      text: "Se introduce con la creación de diagramas de interacción",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 240,
                  text: "En un diagrama de interacción una llamada síncrona se representa…",
                  answers: [
                    {
                      text: "Con una flecha discontinua con la punta rellena",
                      correct: false,
                    },
                    {
                      text: "Con una flecha continua con la punta vacía",
                      correct: false,
                    },
                    {
                      text: "Con una flecha continua con la punta rellena",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 241,
                  text: "¿Qué diferencia existe entre una clase y un objeto?",
                  answers: [
                    {
                      text: "Una clase define la estructura que debe tener un objeto que puede ser instanciado.",
                      correct: true,
                    },
                    {
                      text: "Una clase es exactamente lo mismo que un objeto.",
                      correct: false,
                    },
                    {
                      text: "La clase es la extensión del objeto.",
                      correct: false,
                    },
                    {
                      text: "El objeto define la estructura y la clase el comportamiento.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 242,
                  text: "¿Cómo podemos indicar el número de veces que se puede relacionar una clase con otra dentro de un diagrama de clases?",
                  answers: [
                    {
                      text: "No es posible indicar esta información en un diagrama de clases.",
                      correct: false,
                    },
                    {
                      text: "A través del número máximo de ocurrencias.",
                      correct: false,
                    },
                    {
                      text: "Es posible realizarlo a través de la cardinalidad de las clases que contempla UML.",
                      correct: true,
                    },
                    {
                      text: "Utilizando el concepto de encapsulación.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 243,
                  text: "En relación con los diagramas de comportamiento, ¿cuál de las siguientes afirmaciones es cierta?",
                  answers: [
                    {
                      text: "Podemos distinguir diferentes tipos de diagramas de comportamiento, entre los que destaca caso de usos, actividad, etc.",
                      correct: true,
                    },
                    {
                      text: "Solo existe un diagrama de comportamiento, el diagrama de casos de uso.",
                      correct: false,
                    },
                    {
                      text: "No son útiles para representar el flujo del sistema.",
                      correct: false,
                    },
                    {
                      text: "No están contemplados en el estándar de UML.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 244,
                  text: "¿Cómo podemos crear los diagramas de comportamiento?",
                  answers: [
                    {
                      text: "A través de herramientas de ofimática.",
                      correct: false,
                    },
                    { text: "Mediante herramientas CASE", correct: true },
                    {
                      text: "Con herramientas de ingeniería inversa.",
                      correct: false,
                    },
                    {
                      text: "Mediante la utilización del compilador.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 245,
                  text: "¿Qué tipos de relaciones existen entre los casos de uso?",
                  answers: [
                    {
                      text: "Solo existe un tipo de relación, asociación.",
                      correct: false,
                    },
                    {
                      text: "Existen, al menos, cuatro tipos de relaciones para poder crear los casos de uso.",
                      correct: true,
                    },
                    {
                      text: "Únicamente relación de extensión.",
                      correct: false,
                    },
                    {
                      text: "No existe este concepto en los diagramas de casos de uso.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 246,
                  text: "¿Qué es necesario realizar en la toma de requisitos?",
                  answers: [
                    {
                      text: "Únicamente, crear el diagrama de caso de usos.",
                      correct: false,
                    },
                    { text: "Únicamente, la documentación.", correct: false },
                    {
                      text: "Solo los requisitos funcionales.",
                      correct: false,
                    },
                    {
                      text: "Crear el diagrama de casos de uso y una documentación que describa cada uno de ellos.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 247,
                  text: "¿Qué tipos de diagramas de interacción existen?",
                  answers: [
                    {
                      text: "Solo existe un diagrama de interacción, el de comunicación",
                      correct: false,
                    },
                    {
                      text: "Los diagramas de interacción se dividen en dos: diagramas de secuencia y diagramas de colaboración",
                      correct: true,
                    },
                    {
                      text: "Solo existe un diagrama de interacción, el de secuencia",
                      correct: false,
                    },
                    {
                      text: "Los diagramas de interacción están formados por los diagramas de clase y casos de uso.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 248,
                  text: "¿Qué son las líneas de vida?",
                  answers: [
                    {
                      text: "Son las líneas que aparecen en los diagramas de colaboración.",
                      correct: false,
                    },
                    {
                      text: "Se utilizan en los diagramas de caso de uso únicamente.",
                      correct: false,
                    },
                    {
                      text: "Se utilizan en los diagramas de secuencia o colaboración indistintamente.",
                      correct: false,
                    },
                    {
                      text: "Son las líneas que aparecen en los diagramas de interacción para indicar cuando un objeto entra o sale de ejecución.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 249,
                  text: "¿Qué permite realizar UML?",
                  answers: [
                    {
                      text: "Crear el modelo de un sistema con una metodología no orientada objetos, pero estándar.",
                      correct: false,
                    },
                    {
                      text: "Desarrollar el modelo de un sistema orientado objetos bajo un conjunto de reglas que sean estándar.",
                      correct: true,
                    },
                    {
                      text: "Crear el código fuente para una solución determinada",
                      correct: false,
                    },
                    {
                      text: "Crear la documentación del sistema.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 250,
                  text: "¿Cuál de las siguientes afirmaciones es cierta con respecto a UML?",
                  answers: [
                    {
                      text: "Es una metodología de desarrollo software estándar",
                      correct: false,
                    },
                    {
                      text: "Es un lenguaje de modelado software estándar que posee diferentes tipos de herramientas para facilitar el desarrollo.",
                      correct: true,
                    },
                    {
                      text: "Es un lenguaje de modelado no estándar",
                      correct: false,
                    },
                    { text: "Solo posee una versión", correct: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sistemas",
      name: "sistemas informaticos",
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
                  id: 103,
                  text: "¿Qué es una dirección IPv4?",
                  answers: [
                    {
                      text: "Dirección de la interfaz de red para la capa 2, o nivel de enlace",
                      correct: false,
                    },
                    {
                      text: "Dirección que se utiliza para enviar datos a todos los equipos",
                      correct: false,
                    },
                    {
                      text: "Son secuencias de 48 bits en binario",
                      correct: false,
                    },
                    {
                      text: "Identifican a cada equipo conectado a la red en la capa 3, y permiten su comunicación con el resto de equipos.",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 104,
                  text: "¿Qué es la dirección de broadcast?",
                  answers: [
                    {
                      text: "Dirección de la interfaz de red para la capa 2, o nivel de enlace",
                      correct: false,
                    },
                    {
                      text: "Dirección que se utiliza para enviar datos a todos los equipos",
                      correct: true,
                    },
                    {
                      text: "Son secuencias de 48 bits en binario",
                      correct: false,
                    },
                    {
                      text: "Identifican a cada equipo conectado a la red en la capa 3, y permiten su comunicación con el resto de equipos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 105,
                  text: "El sistema binario:",
                  answers: [
                    {
                      text: "Utiliza dos cifras para la codificación: 0 y 1",
                      correct: false,
                    },
                    {
                      text: "Se trata del sistema más utilizando por los ordenadores.",
                      correct: false,
                    },
                    {
                      text: "Es un sistema en base 2, este valor de base se indica en subíndice.",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 106,
                  text: "El número binario 101010 corresponde al número decimal:",
                  answers: [
                    { text: "42", correct: true },
                    { text: "24", correct: false },
                    { text: "40", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 107,
                  text: "La diferencia en IP pública e IP privada es:",
                  answers: [
                    {
                      text: "La IP pública son las direcciones IP que se utilizan para acceder a internet e identificar toda la red local desde el exterior.",
                      correct: true,
                    },
                    {
                      text: "La IP pública es la dirección que identifica de manera unívoca a un dispositivo conectado a la red privada.",
                      correct: false,
                    },
                    {
                      text: "La IP pública permite conectar equipos dentro de una infraestructura de red privada.",
                      correct: false,
                    },
                    {
                      text: "La IP privada la proporciona el ISP e identifica toda la red local desde el exterior.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 108,
                  text: "¿Qué clase de direcciones se utilizan para multicast y uso experimental?",
                  answers: [
                    { text: "Clase A", correct: false },
                    { text: "Clase B", correct: false },
                    { text: "Clase C", correct: false },
                    { text: "Clase D y Clase E", correct: true },
                  ],
                },
                {
                  id: 109,
                  text: "¿Qué indican los primeros bits de la dirección IP?",
                  answers: [
                    { text: "El número de equipos y hosts", correct: false },
                    { text: "Identificador de red", correct: true },
                    { text: "La dirección de la red", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 110,
                  text: "¿Qué es la dirección MAC?",
                  answers: [
                    {
                      text: "Dirección de la interfaz de red para la capa 2, o nivel de enlace",
                      correct: true,
                    },
                    {
                      text: "Dirección que se utiliza para enviar datos a todos los equipos",
                      correct: false,
                    },
                    {
                      text: "Son secuencias de 32 bits en binario",
                      correct: false,
                    },
                    {
                      text: "Identifican a cada equipo conectado a la red en la capa 3, y permiten su comunicación con el resto de equipos.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 111,
                  text: "¿Qué tipo de dirección es la 00:1c:e2:5b:32:98?",
                  answers: [
                    { text: "Postal", correct: false },
                    { text: "Dirección IP", correct: false },
                    { text: "Dirección MAC", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 112,
                  text: "¿Qué afirmación es cierta respecto a las direcciones IPv6?",
                  answers: [
                    {
                      text: "Las direcciones IPv6 están formadas por 128bits",
                      correct: true,
                    },
                    {
                      text: "Se representan en código decimal",
                      correct: false,
                    },
                    {
                      text: "Se representan en código binario",
                      correct: false,
                    },
                    {
                      text: "Las direcciones IPv6 están formadas por 148bits",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 113,
                  text: "Un switch es…",
                  answers: [
                    { text: "Un servicio de red", correct: false },
                    {
                      text: "Un dispositivo de transmisión intermedio",
                      correct: true,
                    },
                    { text: "Tipo de cable UTP", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 114,
                  text: "La fibra óptica…",
                  answers: [
                    { text: "Está compuesta por cobre", correct: false },
                    { text: "Utiliza el conector RJ45", correct: false },
                    {
                      text: "Está compuesta por plástico o vidrio",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 115,
                  text: "La comunicación en la que se pueden enviar y recibir en ambas direcciones, pero no simultáneamente se conoce como:",
                  answers: [
                    { text: "Simplex", correct: false },
                    { text: "Half duplex", correct: true },
                    { text: "Full duplex", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 116,
                  text: "¿Qué topología utiliza una única pieza de red troncal?",
                  answers: [
                    { text: "Bus", correct: true },
                    { text: "Anillo", correct: false },
                    { text: "Estrella", correct: false },
                    { text: "Malla", correct: false },
                  ],
                },
                {
                  id: 117,
                  text: "La topología en la que cada host conecta con el siguiente, y el ultimo con el primero se conoce como…",
                  answers: [
                    { text: "Topología bus", correct: false },
                    { text: "Topología en anillo", correct: true },
                    { text: "Topología en estrella extendida", correct: false },
                    { text: "Topología circular", correct: false },
                  ],
                },
                {
                  id: 118,
                  text: "La red en la que los dispositivos se comunican de forma inalámbrica es conocida como…",
                  answers: [
                    { text: "WLAN", correct: true },
                    { text: "WAN", correct: false },
                    { text: "MAN", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 119,
                  text: "¿Qué topología conecta a todos los equipos entre sí directamente?",
                  answers: [
                    { text: "Bus", correct: false },
                    { text: "Anillo", correct: false },
                    { text: "Estrella", correct: false },
                    { text: "Malla", correct: true },
                  ],
                },
                {
                  id: 120,
                  text: "En la topología estrella de una red…",
                  answers: [
                    {
                      text: "Todos los hosts están conectados entre si",
                      correct: false,
                    },
                    {
                      text: "cada host con el siguiente, y el ultimo con el primero",
                      correct: false,
                    },
                    {
                      text: "Todos los hosts conectan a un mismo punto central",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 121,
                  text: "El conector RJ45 se utiliza…",
                  answers: [
                    { text: "En cables UTP y STP", correct: true },
                    { text: "Únicamente para cables UTP", correct: false },
                    { text: "Únicamente para cables STP", correct: false },
                    { text: "En cables coaxiales", correct: false },
                  ],
                },
                {
                  id: 122,
                  text: "Las redes dedicadas a la conexión de servidores, servicios de almacenamiento o recuperación son conocidas como…",
                  answers: [
                    { text: "SAN", correct: true },
                    { text: "WAN", correct: false },
                    { text: "MAN", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 123,
                  text: "Las tablas de particiones MBR…",
                  answers: [
                    { text: "Admiten discos de hasta 4TB", correct: false },
                    {
                      text: "Permiten un máximo de 4 particiones",
                      correct: true,
                    },
                    { text: "Permiten hasta 128 particiones", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 124,
                  text: "Para instalar dos sistemas operativos en un mismo ordenador se necesita como mínimo…",
                  answers: [
                    { text: "Dos gestores de arranque", correct: false },
                    { text: "Dos discos", correct: false },
                    { text: "Dos particiones", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 125,
                  text: "Grub es el gestor de arranque:",
                  answers: [
                    { text: "Windows", correct: false },
                    { text: "De algunas distribuciones Linux", correct: true },
                    { text: "Mac OS", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 126,
                  text: "Cuando se instalan diferentes versiones de Windows en un ordenador…",
                  answers: [
                    {
                      text: "Es indiferente el orden de instalación",
                      correct: false,
                    },
                    {
                      text: "Se instala primero la versión más reciente",
                      correct: false,
                    },
                    {
                      text: "Se instala primero la versión más antigua",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 127,
                  text: "Cuando se instala Windows en un ordenador Mac, los controladores…",
                  answers: [
                    {
                      text: "Seguramente no se puedan instalar al tratarse de otro sistema operativo",
                      correct: false,
                    },
                    {
                      text: "Se instalan automáticamente a través de la herramienta Apple Software Update",
                      correct: true,
                    },
                    {
                      text: "Se tienen que instalar desde la partición de Mac OS",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 128,
                  text: "NTFS es el formato del sistema archivos de…",
                  answers: [
                    { text: "Linux", correct: false },
                    { text: "Windows", correct: true },
                    { text: "Mac OS", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 129,
                  text: "La herramienta Bootcamp…",
                  answers: [
                    {
                      text: "Permite instalar Windows en un ordenador Mac",
                      correct: true,
                    },
                    {
                      text: "Permite instalar Linux en un ordenador con Windows",
                      correct: false,
                    },
                    {
                      text: "Está integrada en los sistemas Windows",
                      correct: false,
                    },
                    {
                      text: "Está orientada a entornos educativos",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 130,
                  text: "El formato de GPT de particiones…",
                  answers: [
                    {
                      text: "Admite un máximo de 4 particiones",
                      correct: false,
                    },
                    { text: "Admite discos de hasta 2TB", correct: false },
                    { text: "Permite hasta 128 particiones", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 131,
                  text: "El comando para reparar el gestor de arranque en Windows 10 es…",
                  answers: [
                    { text: "Bootrec /fixboot", correct: false },
                    { text: "Bootrec /fixmbr", correct: false },
                    { text: "Bootrec /rebuildbcd", correct: false },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 132,
                  text: "¿Cuál de las siguientes afirmaciones es correcta sobre la automatización en la gestión de discos?",
                  answers: [
                    {
                      text: "Los scripts de shell en Linux no pueden realizar tareas de mantenimiento del sistema de archivos.",
                      correct: false,
                    },
                    {
                      text: "Los AppleScripts en macOS solo se utilizan para la limpieza de discos y no para copias de seguridad.",
                      correct: false,
                    },
                    {
                      text: "Los archivos batch en Windows son ejemplos de herramientas de automatización que pueden programarse para realizar tareas rutinarias.",
                      correct: true,
                    },
                    {
                      text: "La automatización en la gestión de discos solo es posible en sistemas operativos Linux.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 133,
                  text: "¿Qué comando se utiliza para crear un nuevo usuario en Linux?",
                  answers: [
                    { text: "usermod", correct: false },
                    { text: "adduser", correct: true },
                    { text: "groupadd", correct: false },
                    { text: "userdel", correct: false },
                  ],
                },
                {
                  id: 134,
                  text: "¿Cuál es el comando para cambiar la contraseña de un usuario en Linux?",
                  answers: [
                    { text: "passwd", correct: true },
                    { text: "usermod", correct: false },
                    { text: "chgrp", correct: false },
                    { text: "chmod", correct: false },
                  ],
                },
                {
                  id: 135,
                  text: "¿Qué grupo predeterminado permite a los usuarios ejecutar comandos con permisos de superusuario utilizando el comando sudo?",
                  answers: [
                    { text: "wheel", correct: false },
                    { text: "users", correct: false },
                    { text: "daemon", correct: false },
                    { text: "sudo", correct: true },
                  ],
                },
                {
                  id: 136,
                  text: "¿Qué herramienta se utiliza para optimizar el consumo de energía en portátiles Linux?",
                  answers: [
                    { text: "rsnapshot", correct: false },
                    { text: "rsync", correct: false },
                    { text: "Deja Dup", correct: false },
                    { text: "TLP", correct: true },
                  ],
                },
                {
                  id: 137,
                  text: "¿Qué comando se utiliza para actualizar la lista de paquetes en una distribución basada en Debian?",
                  answers: [
                    { text: "dnf update", correct: false },
                    { text: "zypper refresh", correct: false },
                    { text: "apt-get update", correct: true },
                    { text: "yum update", correct: false },
                  ],
                },
                {
                  id: 138,
                  text: "¿Qué herramienta de auditoría en Linux permite buscar y analizar los registros de auditoría generados por auditd?",
                  answers: [
                    { text: "aureport", correct: false },
                    { text: "ausearch", correct: true },
                    { text: "systemd timers", correct: false },
                    { text: "cron", correct: false },
                  ],
                },
                {
                  id: 139,
                  text: "¿Cuál es el comando utilizado para eliminar un grupo en Linux?",
                  answers: [
                    { text: "groupdel", correct: true },
                    { text: "groupadd", correct: false },
                    { text: "usermod", correct: false },
                    { text: "userdel", correct: false },
                  ],
                },
                {
                  id: 140,
                  text: "¿Qué herramienta se utiliza para la sincronización bidireccional de archivos y directorios en Linux?",
                  answers: [
                    { text: "rsnapshot", correct: false },
                    { text: "Deja Dup", correct: false },
                    { text: "rsync", correct: false },
                    { text: "Unison", correct: true },
                  ],
                },
                {
                  id: 141,
                  text: "¿Cuál de las siguientes herramientas permite la gestión gráfica de particiones en Linux?",
                  answers: [
                    { text: "fdisk", correct: false },
                    { text: "GParted", correct: true },
                    { text: "lsblk", correct: false },
                    { text: "eCryptfs", correct: false },
                  ],
                },
                {
                  id: 142,
                  text: '¿Qué herramienta de automatización utiliza archivos de configuración YAML llamados "playbooks" para definir tareas?',
                  answers: [
                    { text: "Puppet", correct: false },
                    { text: "Ansible", correct: true },
                    { text: "cron", correct: false },
                    { text: "systemd timers", correct: false },
                  ],
                },
                {
                  id: 143,
                  text: "El componente que interpreta y procesa todas las instrucciones e información del sistema informático es…",
                  answers: [
                    { text: "La placa base", correct: false },
                    { text: "La CPU", correct: true },
                    { text: "La BIOS", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 144,
                  text: "Las memorias RAM",
                  answers: [
                    {
                      text: "Son utilizadas normalmente para almacenar el sistema operativo",
                      correct: false,
                    },
                    {
                      text: "Son capaces de transmitir a 600 GB/s",
                      correct: false,
                    },
                    {
                      text: "Almacena información para momentos determinados, perdiéndose la información si se reinicia o apaga el ordenador",
                      correct: true,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 145,
                  text: "Los conectores SATA se utilizan para:",
                  answers: [
                    { text: "Conectar módulos de memoria RAM", correct: false },
                    {
                      text: "Conectar dispositivos de almacenamiento",
                      correct: true,
                    },
                    {
                      text: "Conectar tarjetas gráficas adiccionales",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 146,
                  text: "La arquitectura utilizada por los ordenadores modernos es…",
                  answers: [
                    { text: "Harvard", correct: false },
                    { text: "La máquina de Turing", correct: false },
                    { text: "Von Neumann.", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 147,
                  text: "La placa base de un ordenador…",
                  answers: [
                    { text: "Almacena el sistema operativo", correct: false },
                    {
                      text: "También se conoce como motherboard",
                      correct: true,
                    },
                    {
                      text: "Almacena información e instrucciones.",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 148,
                  text: "Un micrófono es…",
                  answers: [
                    { text: "Un dispositivo de entrada", correct: true },
                    { text: "Un dispositivo de salida", correct: false },
                    { text: "Un dispositivo de E/S.", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 149,
                  text: "ATX es…",
                  answers: [
                    {
                      text: "La interfaz para conectar SSD con la placa.",
                      correct: false,
                    },
                    {
                      text: "El modelo de placa base más habitual",
                      correct: true,
                    },
                    {
                      text: "Memoria flash que contiene un pequeño sistema de arranque",
                      correct: false,
                    },
                    { text: "Un tipo de ranura de expansión", correct: false },
                  ],
                },
                {
                  id: 150,
                  text: "La normativa sobre prevención de riesgos está recogida y constituida en…",
                  answers: [
                    {
                      text: "Ley 31/1995 de 8 de noviembre, de Riesgos informáticos",
                      correct: false,
                    },
                    {
                      text: "Ley 30/2015 de 8 de noviembre, de Prevención de Riesgos Laborales",
                      correct: false,
                    },
                    {
                      text: "Ley 31/1995 de 8 de noviembre, de Prevención de Riesgos Laborales",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 151,
                  text: "SSD es…",
                  answers: [
                    {
                      text: "Un dispositivo de almacenamiento más rápido que un disco duro",
                      correct: true,
                    },
                    {
                      text: "Un dispositivo de almacenamiento más lento que un disco duro",
                      correct: false,
                    },
                    {
                      text: "Un dispositivo de almacenamiento más rápido que un disco duro, pero con menor fiabilidad",
                      correct: false,
                    },
                    {
                      text: "Los criterios elevados de seguridad.",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 152,
                  text: "Cuando se produce un accidente laboral, hay que…",
                  answers: [
                    {
                      text: "Se debe socorrer al accidentando, y posteriormente avisar a los servicios sanitarios",
                      correct: false,
                    },
                    {
                      text: "Actuar siempre siguiendo el sistema de emergencia SAP (Socorrer, avisar y proteger).",
                      correct: false,
                    },
                    {
                      text: "Actuar siempre siguiendo el sistema de emergencia PAS (Proteger, avisar y socorrer).",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 153,
                  text: "¿Qué tipo de software permite a los usuarios realizar tareas específicas o cumplir objetivos determinados?",
                  answers: [
                    { text: "Software de sistema", correct: false },
                    { text: "Software de aplicación", correct: true },
                    { text: "Software de programación", correct: false },
                    { text: "Firmware", correct: false },
                  ],
                },
                {
                  id: 154,
                  text: "¿Cuál es la extensión común para archivos de instalación en Windows?",
                  answers: [
                    { text: ".dmg", correct: false },
                    { text: ".deb", correct: false },
                    { text: ".exe", correct: true },
                    { text: ".tar.gz", correct: false },
                  ],
                },
                {
                  id: 155,
                  text: "¿Qué herramienta se utiliza para administrar actualizaciones automáticas en entornos corporativos de Windows?",
                  answers: [
                    { text: "VirtualBox", correct: false },
                    { text: "WSUS", correct: true },
                    { text: "Notepad++", correct: false },
                    { text: "FileZilla", correct: false },
                  ],
                },
                {
                  id: 156,
                  text: "¿Qué licencia permite modificar y redistribuir libremente el software?",
                  answers: [
                    { text: "Licencia propietaria", correct: false },
                    { text: "Freeware", correct: false },
                    { text: "Shareware", correct: false },
                    { text: "Licencia Libre", correct: true },
                  ],
                },
                {
                  id: 157,
                  text: "¿Cuál de las siguientes NO es una extensión de un archivo de instalación en Linux?",
                  answers: [
                    { text: ".msi", correct: true },
                    { text: ".deb", correct: false },
                    { text: ".rpm", correct: false },
                    { text: ".sh", correct: false },
                  ],
                },
                {
                  id: 158,
                  text: "¿Cuál de las siguientes es una herramienta de compresión y descompresión de archivos?",
                  answers: [
                    { text: "LibreOffice", correct: false },
                    { text: "7-Zip", correct: true },
                    { text: "Thunderbird", correct: false },
                    { text: "Eclipse", correct: false },
                  ],
                },
                {
                  id: 159,
                  text: "¿Cuál de los siguientes NO es un paquete de instalación desatendida?",
                  answers: [
                    { text: "Paquetes .msi", correct: false },
                    { text: "Paquetes .mst", correct: false },
                    { text: "Paquetes .rpm", correct: true },
                    { text: "Paquetes .msp", correct: false },
                  ],
                },
                {
                  id: 160,
                  text: "¿Qué herramienta se puede utilizar para la administración remota en sistemas Linux?",
                  answers: [
                    { text: "SSH", correct: true },
                    { text: "RDP", correct: false },
                    { text: "FTP", correct: false },
                    { text: "SCP", correct: false },
                  ],
                },
                {
                  id: 161,
                  text: "¿Cuál de las siguientes es una herramienta ofimática gratuita y de código abierto?",
                  answers: [
                    { text: "Microsoft Office", correct: false },
                    { text: "Adobe Acrobat", correct: false },
                    { text: "LibreOffice", correct: true },
                    { text: "Google Drive", correct: false },
                  ],
                },
                {
                  id: 162,
                  text: "¿Qué tipo de archivo se utiliza para realizar instalaciones desatendidas en Windows?",
                  answers: [
                    { text: ".rpm", correct: false },
                    { text: ".msi", correct: true },
                    { text: ".app", correct: false },
                    { text: ".sh", correct: false },
                  ],
                },
                {
                  id: 163,
                  text: "Una licencia retail…",
                  answers: [
                    { text: "Es un tipo de licencia libre", correct: false },
                    {
                      text: "Se distribuye asociada a un equipo",
                      correct: false,
                    },
                    { text: "Se entrega con un serial", correct: true },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 164,
                  text: "Los sistemas operativos ejecutables…",
                  answers: [
                    { text: "Son gratuitos", correct: false },
                    { text: "No pueden trabajar en red", correct: false },
                    {
                      text: "Se ejecutan a través de un dispositivo de almacenamiento externo",
                      correct: true,
                    },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 165,
                  text: "El sistema que se fundamenta en el uso de un programa llamado monitor es:",
                  answers: [
                    { text: "El sistema distribuido", correct: false },
                    { text: "El sistema por lotes", correct: true },
                    { text: "El sistema programado", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 166,
                  text: "Las licencias de software libre…",
                  answers: [
                    {
                      text: "Son aquellas que van unidas exclusivamente a un equipo",
                      correct: false,
                    },
                    { text: "Son siempre gratuitas", correct: false },
                    {
                      text: "Son gratuitas o tienen un precio de coste muy bajo, normalmente solo el coste de la distribución.",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 167,
                  text: "Por la forma de ofrecer los servicios tenemos sistemas…",
                  answers: [
                    { text: "Uniprocesador o multiprocesador", correct: false },
                    { text: "Centralizado o distribuido", correct: true },
                    { text: "Instalable o ejecutable", correct: false },
                    { text: "Monotarea o multitarea", correct: false },
                  ],
                },
                {
                  id: 168,
                  text: "La herramienta en la que se pueden ver las tareas en ejecución en Windows es conocida como…",
                  answers: [
                    { text: "Administrador de tareas", correct: true },
                    { text: "Administrador de procesos", correct: false },
                    {
                      text: "Administrador de software en ejecución",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 169,
                  text: "Una máquina virtual…",
                  answers: [
                    {
                      text: "Es el funcionamiento y estructura de los primeros sistemas operativos",
                      correct: false,
                    },
                    {
                      text: "Emula un sistema operativo que está instalado en otro ordenador",
                      correct: true,
                    },
                    {
                      text: "No puede tener conexión a Internet",
                      correct: false,
                    },
                    {
                      text: "Se utiliza para compartir ficheros",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 170,
                  text: "La estructura que divide el sistema operativo en capas jerárquicas de forma concéntrica es…",
                  answers: [
                    { text: "La estructura monolítica", correct: false },
                    { text: "La estructura jerárquica", correct: false },
                    { text: "La estructura en anillos", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 171,
                  text: "Hyper-V",
                  answers: [
                    {
                      text: "En un software para instalar máquinas virtuales",
                      correct: true,
                    },
                    {
                      text: "Es un sistema operativo-cliente servidor",
                      correct: false,
                    },
                    {
                      text: "Es un sistema operativo de 64 bits",
                      correct: false,
                    },
                    {
                      text: "Es un sistema operativo de 32 bits",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 172,
                  text: "Símbolo del sistema es…",
                  answers: [
                    { text: "La línea de comandos en Windows", correct: true },
                    { text: "La línea de comandos en Mac OS", correct: false },
                    { text: "La línea de comandos en Linux", correct: false },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 173,
                  text: "¿Cuál de las siguientes soluciones no es un sistema propietario?",
                  answers: [
                    { text: "VMware", correct: false },
                    { text: "Hyper-V", correct: false },
                    { text: "VirtualBox", correct: true },
                    { text: "Citrix", correct: false },
                  ],
                },
                {
                  id: 174,
                  text: "¿Qué tipo de virtualización se usa en entornos empresariales grandes?",
                  answers: [
                    {
                      text: "Virtualización por hardware de servidor",
                      correct: true,
                    },
                    { text: "Virtualización gráfica", correct: false },
                    {
                      text: "Virtualización por sistema operativo",
                      correct: false,
                    },
                    { text: "Virtualización de aplicaciones", correct: false },
                  ],
                },
                {
                  id: 175,
                  text: "¿Qué tipo de virtualización conecta un usuario de forma remota a un entorno corporativo?",
                  answers: [
                    { text: "Virtualización de servidor", correct: false },
                    { text: "Virtualización de escritorio", correct: true },
                    {
                      text: "Virtualización de sistema operativo",
                      correct: false,
                    },
                    {
                      text: "Virtualización de almacenamiento",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 176,
                  text: "¿Qué tipo de virtualización se usa desde un ordenador principal y sobre un sistema operativo real?",
                  answers: [
                    { text: "Virtualización de servidor", correct: false },
                    { text: "Virtualización de escritorio", correct: false },
                    {
                      text: "Virtualización de sistema operativo",
                      correct: true,
                    },
                    {
                      text: "Virtualización de almacenamiento",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 177,
                  text: "El disponer de servidores virtualizados frente a servidores físicos, no supone una ventaja en:",
                  answers: [
                    { text: "Reducción de costes de espacio", correct: false },
                    {
                      text: "Posibilidad de crecimiento más flexible",
                      correct: false,
                    },
                    {
                      text: "Centralización de tareas de mantenimiento",
                      correct: false,
                    },
                    {
                      text: "Ahorro en adquisición de licencias de Sistemas Operativos",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 178,
                  text: "¿Cuál de las siguientes herramientas de sistemas libres de virtualización tiene una licencia GNU/GPL y es de Oracle?",
                  answers: [
                    { text: "QEMU", correct: false },
                    { text: "KVM", correct: false },
                    { text: "VirtualBox", correct: true },
                    { text: "OpenVz", correct: false },
                  ],
                },
                {
                  id: 179,
                  text: "Para habilitar Hyper-V en Windows 10, ¿de qué modo se puede realizar?",
                  answers: [
                    { text: "Con un comando en la powerShell", correct: false },
                    { text: "Con un comando mediante CMD", correct: false },
                    {
                      text: "En la configuración de programas y características",
                      correct: false,
                    },
                    {
                      text: "Todas las anteriores son correctas",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 180,
                  text: "¿Qué comando comprueba los requisitos de Hyper-V en la consola?",
                  answers: [
                    { text: "netinfo", correct: false },
                    { text: "ipconfig /all", correct: false },
                    { text: "properties", correct: false },
                    { text: "systeminfo.exe", correct: true },
                  ],
                },
                {
                  id: 181,
                  text: "Para la creación rápida de una máquina virtual con Hyper-V se llama",
                  answers: [
                    { text: "Hyper-V Quick create", correct: true },
                    { text: "Rapid Hyper-V", correct: false },
                    { text: "Direct Hyper-V", correct: false },
                    { text: "Clúster Hyper-v", correct: false },
                  ],
                },
                {
                  id: 182,
                  text: "Los puntos de control de Hyper-V…",
                  answers: [
                    {
                      text: "Amplían el hardware a una máquina virtual",
                      correct: false,
                    },
                    {
                      text: "Guardan el estado de una maquina virtual en un momento concreto",
                      correct: true,
                    },
                    {
                      text: "Se utilizan para duplicar máquinas virtuales",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 183,
                  text: "Después de instalar Mac OS en un ordenador Apple…",
                  answers: [
                    {
                      text: "Hay que instalar los controladores de los dispositivos integrados en el ordenador",
                      correct: false,
                    },
                    {
                      text: "No hay que instalar los controladores de los dispositivos integrados en el ordenador",
                      correct: true,
                    },
                    {
                      text: "Hay que abrir la herramienta Boot Camp para actualizar los controladores",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 184,
                  text: "Los sistemas operativos Windows 10 requieren como mínimo…",
                  answers: [
                    {
                      text: "2 GB de memoria RAM para sistemas de 32 bits",
                      correct: false,
                    },
                    {
                      text: "4 GB de memoria RAM para sistemas de 64 bits",
                      correct: false,
                    },
                    {
                      text: "1 GB de memoria RAM para sistemas de 32 bits",
                      correct: true,
                    },
                    {
                      text: "Todas las respuestas son correctas",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 185,
                  text: "Los controladores de los componentes de hardware en Windows 10…",
                  answers: [
                    {
                      text: "Se obtienen a través de la herramienta ADK",
                      correct: false,
                    },
                    {
                      text: "Es recomendado descargarlos previamente a la instalación del sistema",
                      correct: true,
                    },
                    {
                      text: "Se instalan siempre todos automáticamente en Windows 10",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 186,
                  text: "Pulsando las teclas Comando + R al arranque del ordenador…",
                  answers: [
                    { text: "Se accede a la herramienta PXE", correct: false },
                    {
                      text: "Se accede a la BIOS en todos los ordenadores",
                      correct: false,
                    },
                    {
                      text: "Se accede a la utilidad de Mac OS para reinstalar el sistema",
                      correct: true,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 187,
                  text: "Para modificar la secuencia de arranque de un ordenador hay que acceder a la BIOS pulsando la tecla…",
                  answers: [
                    { text: "Comando + R", correct: false },
                    {
                      text: "Depende del fabricante de la placa",
                      correct: true,
                    },
                    { text: "F10", correct: false },
                    { text: "F12", correct: false },
                  ],
                },
                {
                  id: 188,
                  text: "La herramienta PXE…",
                  answers: [
                    {
                      text: "Permite desplegar imágenes para instalaciones de sistemas operativos a través de la red",
                      correct: true,
                    },
                    {
                      text: "Despliega imágenes exclusivamente para ordenadores Apple",
                      correct: false,
                    },
                    {
                      text: "Es una herramienta para descargar Windows 10 y copiarlo a un dispositivo externo",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 189,
                  text: "La opción que hay que seleccionar en Sysprep cuando se prepara una imagen para ordenadores con distinto hardware es…",
                  answers: [
                    { text: "SCCM", correct: false },
                    { text: "Generalizar", correct: true },
                    { text: "OOBE", correct: false },
                    {
                      text: "Se utiliza para compartir ficheros",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 190,
                  text: "Las BIOS actuales, como es UEFI…",
                  answers: [
                    {
                      text: "No permiten la instalación de nuevos sistemas operativos",
                      correct: false,
                    },
                    {
                      text: "Solo permiten instalar sistemas operativos de 64 bits",
                      correct: false,
                    },
                    { text: "Incorporan la opción Secure Boot", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 191,
                  text: "Los sistemas operativos Mac OS…",
                  answers: [
                    {
                      text: "Solo se pueden instalar en ordenador Apple",
                      correct: true,
                    },
                    {
                      text: "Solo están disponibles en 32 bits",
                      correct: false,
                    },
                    {
                      text: "Se instalan a través de la herramienta ADK",
                      correct: false,
                    },
                    {
                      text: "Se instalan a través de la herramienta Media Creation",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 192,
                  text: "La versión LTSC de Windows 10…",
                  answers: [
                    {
                      text: "Es similar a la Enterprise, pero con algunas características no incorporadas para mejorar el rendimiento",
                      correct: true,
                    },
                    {
                      text: "Es la versión de Windows 10 dirigida a estudiantes",
                      correct: false,
                    },
                    {
                      text: "Es una versión de prueba de Windows 10",
                      correct: false,
                    },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 193,
                  text: "La mayoría de controladores de dispositivos en las distribuciones Linux…",
                  answers: [
                    { text: "Los debe instalar el usuario", correct: false },
                    {
                      text: "Son detectados e instalados de manera predeterminada y como genéricos",
                      correct: true,
                    },
                    {
                      text: "Son facilitados por su fabricante",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 194,
                  text: "El software Clonezilla",
                  answers: [
                    {
                      text: "Es un software para administrar los controladores del sistema",
                      correct: false,
                    },
                    {
                      text: "Es un software libre para clonar sistemas",
                      correct: true,
                    },
                    {
                      text: "Es un software propietario para clonar sistemas",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 195,
                  text: "El último sistema de archivos de las distribuciones Linux es:",
                  answers: [
                    { text: "Ext3", correct: false },
                    { text: "NTFS", correct: false },
                    { text: "Ext5", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: true,
                    },
                  ],
                },
                {
                  id: 196,
                  text: "Cuál de los siguientes software NO permite realizar imágenes del sistema…",
                  answers: [
                    { text: "Clonezilla", correct: false },
                    { text: "Redo Backup and Recovery", correct: false },
                    { text: "Hardinfo", correct: true },
                    { text: "Easeus", correct: false },
                  ],
                },
                {
                  id: 197,
                  text: "El comando para actualizar el sistema en distribuciones Linux es…",
                  answers: [
                    { text: "sudo apt-update", correct: false },
                    { text: "sudo apt-get update", correct: true },
                    { text: "sudo apt-get install", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 198,
                  text: "El comando hostname…",
                  answers: [
                    { text: "Muestra el nombre del ordenador", correct: true },
                    {
                      text: "Muestra la versión de Ubuntu instalada",
                      correct: false,
                    },
                    {
                      text: "Muestra toda la configuración del sistema",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 199,
                  text: "Los controladores privativos…",
                  answers: [
                    {
                      text: "Son instalados de manera predeterminada y genérica",
                      correct: false,
                    },
                    {
                      text: "Son aquellos que debe facilitar el propio fabricante",
                      correct: true,
                    },
                    {
                      text: "Son aquellos instalados a través de la línea de comandos",
                      correct: false,
                    },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 200,
                  text: "Ubuntu recomienda para un rendimiento óptimo un mínimo de…",
                  answers: [
                    { text: "2 GB de memoria RAM", correct: false },
                    { text: "4 GB de memoria RAM", correct: true },
                    { text: "8 GB de memoria RAM", correct: false },
                    {
                      text: "Ninguna de las anteriores es correcta",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 201,
                  text: "¿Cuál de estas distribuciones de Linux está orientada a la creación de contenido multimedia?",
                  answers: [
                    { text: "Linux Mint", correct: false },
                    { text: "Ubuntu Studio", correct: true },
                    { text: "Lubuntu", correct: false },
                    { text: "Edubuntu", correct: false },
                  ],
                },
                {
                  id: 202,
                  text: "El último sistema de archivos de las distribuciones Linux es…",
                  answers: [
                    { text: "Ext2", correct: false },
                    { text: "Ext3", correct: false },
                    { text: "Ext4", correct: true },
                    { text: "Ninguna de las anteriores", correct: false },
                  ],
                },
                {
                  id: 203,
                  text: "¿Cuál de los siguientes comandos se utiliza para crear un nuevo grupo en Linux?",
                  answers: [
                    { text: "useradd", correct: false },
                    { text: "usermod", correct: false },
                    { text: "groupadd", correct: true },
                  ],
                },
                {
                  id: 204,
                  text: "¿Cuál de las siguientes herramientas se utiliza para optimizar el rendimiento de la batería en un portátil Linux?",
                  answers: [
                    { text: "GParted", correct: false },
                    { text: "Rsync", correct: false },
                    { text: "Powertop", correct: true },
                  ],
                },
                {
                  id: 205,
                  text: "¿Cuál de las siguientes herramientas se utiliza para crear imágenes instantáneas del sistema de archivos en Linux?",
                  answers: [
                    { text: "Deja Dup", correct: false },
                    { text: "apt-get", correct: false },
                    { text: "Rsnapshot", correct: true },
                  ],
                },
                {
                  id: 206,
                  text: "¿Cuál de los siguientes ficheros se utiliza en Windows modernos para almacenar la configuración de arranque?",
                  answers: [
                    { text: "/etc/fstab", correct: false },
                    { text: "boot.ini", correct: false },
                    { text: "BCD (Boot Configuration Data)", correct: true },
                  ],
                },
                {
                  id: 207,
                  text: "Para instalar Ubuntu se requieren, como mínimo, de espacio en disco:",
                  answers: [
                    { text: "15 GB", correct: false },
                    { text: "25 GB", correct: false },
                    { text: "9 GB", correct: true },
                  ],
                },
                {
                  id: 208,
                  text: "En Mac OS se incluye la utilidad para crear particiones llamada:",
                  answers: [
                    { text: "Launchpad", correct: false },
                    { text: "Boot Camp", correct: false },
                    { text: "Utilidad de Discos", correct: true },
                  ],
                },
                {
                  id: 209,
                  text: "¿Qué elemento define el origen de la información en una comunicación?",
                  answers: [
                    { text: "El emisor", correct: false },
                    { text: "El destino", correct: false },
                    { text: "La fuente", correct: true },
                  ],
                },
                {
                  id: 210,
                  text: "Según su extensión, ¿qué tipo de red es Internet?",
                  answers: [
                    { text: "WAN", correct: true },
                    { text: "LAN", correct: false },
                    { text: "MAN", correct: false },
                  ],
                },
                {
                  id: 211,
                  text: "El protocolo encargado de la transferencia de archivos es ______.",
                  answers: [
                    { text: "FTP", correct: true },
                    { text: "HTTP", correct: false },
                    { text: "DHCP", correct: false },
                  ],
                },
                {
                  id: 212,
                  text: "Las direcciones ______ se definen para identificar un grupo de interfaces.",
                  answers: [
                    { text: "Unicast", correct: false },
                    { text: "Anycast", correct: false },
                    { text: "Multicast", correct: true },
                  ],
                },
                {
                  id: 213,
                  text: "Indica la dirección IPv4 válida:",
                  answers: [
                    { text: "200.210.0.1", correct: true },
                    { text: "10.281.0.0", correct: false },
                    { text: "198.200.129.", correct: false },
                  ],
                },
                {
                  id: 214,
                  text: "¿Qué número en binario representa a 67 en decimal?",
                  answers: [
                    { text: "1001001", correct: false },
                    { text: "1011011", correct: false },
                    { text: "1000011", correct: true },
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
