// Code.gs
// Proyecto de fórmulas inteligentes en Google Sheets
// Síguenos para más tips y scripts en TikTok: @TodoEsCodigo 💡📊

/**
 * Creates a custom menu in the Google Sheet :)
 */

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Formulas #TodoEsCodigo')
      .addItem('Abrir Buscador de Fórmulas', 'showFormulaModal')
      .addToUi();
}

/**
 * Displays the modal dialog for formula search.
 */
function showFormulaModal() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('ModalContent')
      .setWidth(600)
      .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Buscador de Fórmulas');
}

/**
 * Our simple database of basic formulas.
 * In a real application, this could come from a sheet or external source.
 */
function getFormulas() {
  return [
    {name: "SUMA", description: "Suma un rango de celdas. Palabras clave: suma, total, añadir.", example: "=SUMA(A1:A10)"},
    {name: "PROMEDIO", description: "Calcula el promedio de un rango de celdas. Palabras clave: media, promedio, valor medio.", example: "=PROMEDIO(B1:B10)"},
    {name: "CONTAR", description: "Cuenta el número de celdas que contienen números en un rango. Palabras clave: contar, números, cantidad.", example: "=CONTAR(C:C)"},
    {name: "CONTARA", description: "Cuenta el número de celdas no vacías en un rango. Palabras clave: contar, no vacías, texto, números.", example: "=CONTARA(D:D)"},
    {name: "MAX", description: "Devuelve el valor máximo de un conjunto de datos. Palabras clave: máximo, mayor, tope.", example: "=MAX(E1:E10)"},
    {name: "MIN", description: "Devuelve el valor mínimo de un conjunto de datos. Palabras clave: mínimo, menor, fondo.", example: "=MIN(F1:F10)"},
    {name: "SI", description: "Realiza una prueba lógica y devuelve un valor si es VERDADERO y otro si es FALSO. Palabras clave: condición, lógica, si, entonces.", example: "=SI(G1>50, \"Alto\", \"Bajo\")"},
    {name: "SUMAR.SI", description: "Suma celdas que cumplen un criterio determinado. Palabras clave: suma condicional, si, criterio.", example: "=SUMAR.SI(H1:H10, \">100\", I1:I10)"},
    {name: "CONTAR.SI", description: "Cuenta las celdas de un rango que cumplen un criterio. Palabras clave: contar condicional, si, criterio.", example: "=CONTAR.SI(J1:J10, \"Texto\")"},
    {name: "PROMEDIO.SI", description: "Calcula el promedio de las celdas que cumplen un criterio. Palabras clave: promedio condicional, si, criterio.", example: "=PROMEDIO.SI(K1:K10, \"Producto A\", L1:L10)"},
    {name: "CONCATENAR", description: "Une dos o más cadenas de texto en una sola. Palabras clave: unir, texto, cadena.", example: "=CONCATENAR(M1, \" \", N1)"},
    {name: "IZQUIERDA", description: "Devuelve el número especificado de caracteres desde el principio de una cadena de texto. Palabras clave: extraer texto, izquierda, inicio.", example: "=IZQUIERDA(O1, 5)"},
    {name: "DERECHA", description: "Devuelve el número especificado de caracteres desde el final de una cadena de texto. Palabras clave: extraer texto, derecha, final.", example: "=DERECHA(P1, 3)"},
    {name: "EXTRAE", description: "Extrae un número específico de caracteres de una cadena de texto, comenzando en la posición que especifiques. Palabras clave: extraer texto, medio, parte.", example: "=EXTRAE(Q1, 3, 4)"},
    {name: "FECHA", description: "Devuelve el número de serie de una fecha concreta. Palabras clave: fecha, año, mes, día.", example: "=FECHA(2025, 7, 12)"},
    {name: "HOY", description: "Devuelve la fecha actual. Palabras clave: fecha actual, hoy.", example: "=HOY()"},
    {name: "AHORA", description: "Devuelve la fecha y hora actuales. Palabras clave: fecha y hora actual, ahora.", example: "=AHORA()"},
    {name: "REDONDEAR", description: "Redondea un número a un número específico de decimales. Palabras clave: redondear, decimales.", example: "=REDONDEAR(R1, 2)"},
    {name: "ENTERO", description: "Redondea un número hacia abajo al entero más próximo. Palabras clave: entero, truncar.", example: "=ENTERO(S1)"},
    {name: "BUSCARV", description: "Busca un valor en la primera columna de un rango y devuelve un valor en la misma fila desde una columna especificada. Palabras clave: buscar, tabla, referencia, vertical.", example: "=BUSCARV(T1, U1:V10, 2, FALSO)"}
  ];
}
