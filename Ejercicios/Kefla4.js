class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar() {
        if (this.instalada == false ) {
            this.instalada = true;
            alert("La aplicacion se ha instalado");
        }
    }
    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("La aplicacion se ha desisntalado");
        }
    }
    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("Abriendo Aplicacion");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("Cerrando Aplicacion");
        }
    }
    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;

    }
}


app1 = new App ("16.000","5 estrellas","7gb");
app2 = new App ("19.000","3.5 estrellas","2gb");
app3 = new App ("12.000","1 estrellas","500mb");
app4 = new App ("16.000","5 estrellas","7gb");
app5 = new App ("19.000","0 estrellas","4gb");
app6 = new App ("12.000","4 estrellas","500mb");
app7 = new App ("12.000","2 estrellas","500mb");

document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`);

//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();