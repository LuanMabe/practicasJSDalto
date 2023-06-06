class Celular {
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    prenderBotonEncendido () {
        if(this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if(this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFotos() {
        alert(`foto tomada en una resolucion de : ${this.resolucionDeCamara}`);
    }
    grabarVideos() {
        alert(`video grabado en ${this.resolucionDeCamara}`);
    }
    mobileInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso} </b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion De Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor (color,peso,tamaño,rdc,ram,rdce) {
        super (color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Estas usando el reconociemiento facial")
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolicion de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b>`
    }

}

//celular1 = new Celular("rojo","150gr","5'","fHD","2GB");
//celular2 = new Celular("negro","155gr","6'","HD","2GB");
//celular3 = new Celular("verde","160gr","5,4'","full HD","2GB");
//celular4 = new Celular("azul","150gr","3'","full HD","2GB");

//celular1.prenderBotonEncendido();
//celular1.tomarFotos();
//celular1.grabarVideos();
//celular1.reiniciar();
//celular1.prenderBotonEncendido();

celular1 = new CelularAltaGama("rojo","150gr","6'","4k","4GB","full HD");
celular2 = new CelularAltaGama("rojo","150gr","6'","4k","4GB","HD");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>

`);
