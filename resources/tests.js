// tests-data.js
const TEST_DATA = {
  "subjects": [
    {
      "id": "lgm",
      "name": "LGM",
      "units": [
        {
          "id": "tema1",
          "name": "1 Questions from tema1",
          "tests": [
            {
              "id": "tema1-test",
              "title": "Tema 1 - Autoevaluación",
              "createdOn": "2026-01-12",
              "questions": [
                {
                  "id": "q1",
                  "text": "¿Cuál es la etiqueta correcta si queremos cerrar un elemento en un lenguaje de marcas?",
                  "answers": [
                    { "text": "<\\marca>", "correct": false },
                    { "text": "<|marca>", "correct": false },
                    { "text": "<marca/>", "correct": false },
                    { "text": "</marca>", "correct": true }
                  ]
                },
                {
                  "id": "q2",
                  "text": "¿En qué década se creó el lenguaje de marcas HTML?",
                  "answers": [
                    { "text": "En los años 80", "correct": false },
                    { "text": "En los años 70", "correct": false },
                    { "text": "En los años 90", "correct": true },
                    { "text": "Ninguna es correcta", "correct": false }
                  ]
                },
                {
                  "id": "q3",
                  "text": "¿Qué significan las siglas XHTML?",
                  "answers": [
                    { "text": "Extender Hypervisor Mark Language", "correct": false },
                    { "text": "Extra Hyperlink Mark Language", "correct": false },
                    { "text": "Extensible HyperText Markup Link", "correct": false },
                    { "text": "Extensible HyperText Markup Language", "correct": true }
                  ]
                },
                {
                  "id": "q4",
                  "text": "¿Cómo se pueden clasificar los lenguajes de marcas?",
                  "answers": [
                    { "text": "De presentación, análisis y descriptivo", "correct": false },
                    { "text": "De procedimiento, conversión y semántico", "correct": false },
                    { "text": "De presentación, procedimiento y descriptivo", "correct": true },
                    { "text": "Ninguna de las anteriores es correcta", "correct": false }
                  ]
                },
                {
                  "id": "q5",
                  "text": "¿Qué herramienta de edición está desarrollada por Microsoft?",
                  "answers": [
                    { "text": "Visual Studio Code", "correct": true },
                    { "text": "Notepad++", "correct": false },
                    { "text": "Sublime Text", "correct": false },
                    { "text": "Atom", "correct": false }
                  ]
                },
                {
                  "id": "q6",
                  "text": "¿De cuántas partes consta un documento XML?",
                  "answers": [
                    { "text": "3", "correct": false },
                    { "text": "2", "correct": true },
                    { "text": "4", "correct": false },
                    { "text": "1", "correct": false }
                  ]
                },
                {
                  "id": "q7",
                  "text": "¿Cómo se llama la primera parte de un documento XML?",
                  "answers": [
                    { "text": "Inicio", "correct": false },
                    { "text": "Índice", "correct": false },
                    { "text": "Prólogo", "correct": true },
                    { "text": "Cuerpo", "correct": false }
                  ]
                },
                {
                  "id": "q8",
                  "text": "¿Cómo se indican los comentarios en XML?",
                  "answers": [
                    { "text": "<!-- para su apertura y --> para su cierre", "correct": true },
                    { "text": "<-- para su apertura y --!> para su cierre", "correct": false },
                    { "text": "<!-- para su apertura y **> para su cierre", "correct": false },
                    { "text": "<!-- para su apertura y --!> para su cierre", "correct": false }
                  ]
                },
                {
                  "id": "q9",
                  "text": "Indica una norma básica para que un documento esté bien formado.",
                  "answers": [
                    { "text": "Sensibilidad a mayúsculas y minúsculas", "correct": false },
                    { "text": "Siempre debe existir un nodo raíz", "correct": false },
                    { "text": "En el prólogo se debe indicar versión y codificación", "correct": false },
                    { "text": "Todas son correctas", "correct": true }
                  ]
                },
                {
                  "id": "q10",
                  "text": "¿Qué atributo especial hay que usar cuando trabajamos con espacios de nombres?",
                  "answers": [
                    { "text": "xmlns", "correct": true },
                    { "text": "xnlms", "correct": false },
                    { "text": "xlsmt", "correct": false },
                    { "text": "xtlsm", "correct": false }
                  ]
                },
                {
                  "id": "q11",
                  "text": "Las marcas se suelen representar con diferentes caracteres, pero ¿cuáles son las más usuales?",
                  "answers": [
                    { "text": "{marca}", "correct": false },
                    { "text": "[marca]", "correct": false },
                    { "text": "<marca>", "correct": true },
                    { "text": "Ninguna de las anteriores", "correct": false }
                  ]
                },
                {
                  "id": "q12",
                  "text": "¿Con qué palabra reservada se indica el tipo de codificación y en qué parte en un documento XML?",
                  "answers": [
                    { "text": "Con la palabra reservada encoding y en el cuerpo", "correct": false },
                    { "text": "Con la palabra reservada encoding y en el prólogo", "correct": true },
                    { "text": "Con la palabra reservada code y en el prólogo", "correct": false },
                    { "text": "No se indica en XML", "correct": false }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

