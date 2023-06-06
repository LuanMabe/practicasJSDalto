/* Cofla ya vio las 12 materias y se decidio en cual se va a inscribir 
asi que en tres dias lo hara, el problema es que se rompio el sistemas de inscripciones.

CREAR SOLUCIONES:
 Crear una funcion para preguntarle a cofla en que materia se quiere inscribir.
 -Si ya hay 20 alumnos anotados en la materia, negarle la inscripcion.
 -Si hay menos de 20 alumnos, inscribir a cofla y añadrilo a la lista de personas.
*/

let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","cofla","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","maria"]
}

const inscribir = (alumno,materia) => {
    personas = materias[materia]; 
    if (personas.length >= 21) {
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas<br><br>`)
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias["quimica"]
            }   
        } else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias["quimica"]
            } 
        } else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias["quimica"]
            } 
        } else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            } 
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`)
    }
}
document.write(materias["fisica"] + "<br>");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");


document.write("<br>" + materias["fisica"])