export class ValidacionDeEmail {
    validar(correo) {
        const validacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validacion.test(correo);
    }
}


