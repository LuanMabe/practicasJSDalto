/* Cofla ya vio las 12 materias y se decidio en cual se va a inscribir 
asi que en tres dias lo hara, el problema es que se rompio el sistemas de inscripciones.

CREAR SOLUCIONES:
 Crear una funcion para preguntarle a cofla en que materia se quiere inscribir.
 -Si ya hay 20 alumnos anotados en la materia, negarle la inscripcion.
 -Si hay menos de 20 alumnos, inscribir a cofla y añadrilo a la lista de alumnos.
*/

const materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","cofla","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","maria"]
}

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    personas.shift();
    alumnos = personas; 
    if (alumnos.length >= 2) {
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`)
    }
}

inscribir("pedrito","fisica");