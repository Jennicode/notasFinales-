/**
 * Solicitud nombre y carrera
 */
var nombre = prompt("Ingrese Nombre del Alumno", "Jennifer Perez");
var carrera = prompt("Ingrese Nombre de la Carrera", "Desarrollador Full Stack");
/**
 * RAMO 1
 */
var nombreRamo1 = prompt("Ingrese nombre del primer ramo", "HTML");
var nota1PrimerRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo1 + "]", "4"))
var nota2PrimerRamo = parseInt(prompt("Ingrese nota 2 [" + nombreRamo1 + "]", "4"))
var nota3PrimerRamo = parseInt(prompt("Ingrese nota 3 [" + nombreRamo1 + "]", "4"))
    /**
     * RAMO 2
     */
var nombreRamo2 = prompt("Ingrese nombre del segundo ramo", "CSS");
var nota1SegundoRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo2 + "]", "4"))
var nota2SegundoRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo2 + "]", "4"))
var nota3SegundoRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo2 + "]", "4"))

/**
 * RAMO 3
 */
var nombreRamo3 = prompt("Ingrese nombre del tercer ramo", "JavaScript")
var nota1TercerRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo3 + "]", "4"))
var nota2TercerRamo = parseInt(prompt("Ingrese nota 1 [" + nombreRamo3 + "]", "4"))
    // PROMEDIO MINIMO PARA APROBAR Y CANTIDAD DE NOTAS PARA CALCULAR
var promedioMínimo = 4
var cantidadNotas = 3
    // CALCULO NOTA NECESARIA
var nota3TercerRamo = (promedioMínimo * cantidadNotas) - (nota1TercerRamo + nota2TercerRamo)

document.write('<div class="container">')
document.write('<div class="row align-items-center">')
document.write('<div class="col-9">')
document.write('<h1>Notas Finales</h1>')
document.write('</div>')
document.write('<div class="col justify-content-end">')
document.write('<img src="assets/img/logo.png" height="200px" alt="logo">')
document.write('</div>')
document.write('</div>')
document.write('<div class="row align-items-center" style="font-size: 150%;">')
document.write('<div class="d-flex flex-column">')
document.write('<div class="d-flex flex-row">')
document.write('<label class="font-weight-bold">Alumno: </label>')
document.write('<label>&nbsp;&nbsp;' + nombre + '</label>')
document.write('</div>')
document.write('<div class="d-flex flex-row">')
document.write('<label class="font-weight-bold">Carrera: </label>')
document.write('<label>&nbsp;&nbsp;' + carrera + '</label>')
document.write('</div>')
document.write('</div>')
document.write('</div>')
document.write('<div class="row my-3">')
document.write('<table class="table">')
document.write('<thead class="table-dark">')
document.write('<tr>')
document.write('<th>Ramo</th>')
document.write('<th>Nota 1</th>')
document.write('<th>Nota 2</th>')
document.write('<th>Nota 3</th>')
document.write('<th>Promedio</th>')
document.write('</tr>')
document.write('</thead>')
document.write('<tbody>')
document.write('<tr>')
document.write('<th>' + nombreRamo1 + '</th>')
document.write('<th>' + nota1PrimerRamo + '</th>')
document.write('<th>' + nota2PrimerRamo + '</th>')
document.write('<th>' + nota3PrimerRamo + '</th>')
document.write('<th>' + ((nota1PrimerRamo + nota2PrimerRamo + nota3PrimerRamo) / 3).toFixed(2) + '</th>')
document.write('</tr>')
document.write('<tr>')
document.write('<th>' + nombreRamo2 + '</th>')
document.write('<th>' + nota1SegundoRamo + '</th>')
document.write('<th>' + nota2SegundoRamo + '</th>')
document.write('<th>' + nota3SegundoRamo + '</th>')
document.write('<th>' + ((nota1SegundoRamo + nota2SegundoRamo + nota3SegundoRamo) / 3).toFixed(2) + '</th>')
document.write('</tr>')
document.write('<tr>')
document.write('<th>' + nombreRamo3 + '</th>')
document.write('<th>' + nota1TercerRamo + '</th>')
document.write('<th>' + nota2TercerRamo + '</th>')
document.write('<th>-</th>')
document.write('<th>-</th>')
document.write('</tr>')
document.write('</tbody>')
document.write('</table>')
document.write('</div>')
document.write('<label class="font-italic">Para aprobar el ramo JavaScript con nota ' + promedioMínimo + ', necesitas obtener un ' + nota3TercerRamo.toFixed(2) + ' en la nota 3</label>')
document.write('</div>')