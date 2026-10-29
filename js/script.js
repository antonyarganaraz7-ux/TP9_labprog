var anio = 2026;
const equipoLocal = "España";
const grupoLocal = "H";
const paisLocal = "España";
const equipoVisitante = "Argentina";
const grupoVisitante = "J";
const paisVisitante = "Argentina";
const estadio = "MetLife Stadium";
const paisSede = "Estados Unidos";


let mensajeBienvenida = "¡Bienvenido al Mundial " + anio + "!\n" +
    "Partido destacado: la final entre " + equipoLocal + " (Grupo " + grupoLocal + ", " + paisLocal + ")" +
    " y " + equipoVisitante + " (Grupo " + grupoVisitante + ", " + paisVisitante + ").\n" +
    "Se jugó en el " + estadio + ", " + paisSede + ".";

alert(mensajeBienvenida);


function mostrarResultado(equipo, golesEquipo, rival, golesRival) {
    let mensaje = "";

    if (golesEquipo > golesRival) {
        mensaje = equipo + " ganó " + golesEquipo + " a " + golesRival + " contra " + rival + ". ¡Victoria!";
    } else if (golesEquipo < golesRival) {
        mensaje = equipo + " perdió " + golesEquipo + " a " + golesRival + " contra " + rival + ". Derrota.";
    } else {
        mensaje = equipo + " empató " + golesEquipo + " a " + golesRival + " contra " + rival + ".";
    }

    alert(mensaje);
}
