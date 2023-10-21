/* 
a) Termino el primer semestre y cofla no sabe si aprobara o no las materias, para lograrlo nesecitara:
Contar con al menos el 90% de asistencia.
El promedio por materia debe ser de almenos 7/10.
Debe tener al menos del 75% de los trabajos practicos entregados.

    - Solicitar los datos y decirles si aprueba o no.
    - Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
    - Todo esto estructurado como tabla.
*/
const materias = {
    fisica: [90,6,3,"fisica"],
    matematicas: [84,4,2,"matematicas"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"],
}

const aprobo = ()=> {
    for (materia in materias) {
         let asistencias = materias[materia][0];
         if (asistencias >= 90) {
            console.log(materias[materia][3]);
            console.log("%c     probado","color:green");
         } else {
            console.log(materias[materia][3]);
            console.log("%c     Desaprobado","color:red");
         }

    }
}

aprobo  ();