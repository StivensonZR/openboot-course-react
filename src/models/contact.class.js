
export class Contact {

    nombre = '';
    apellido = '';
    email = '';
    contectado = false;

    constructor(nombre, apellido, email, contectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contectado = contectado
    }
}