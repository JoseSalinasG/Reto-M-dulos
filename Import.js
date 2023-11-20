// Importar elementos
import {ValidacionDeEmail } from "./Exportar.js";
// Constantes de correos 
const correoValido = 'usuario@dominio.com';
const correoInvalido = 'correoInvalido.com';
const correoNuevo = 'nuevo@dominio.com';

const validador = new ValidacionDeEmail();
// Impresión del código
console.log(`El correo ${correoValido} es ${validador.validar(correoValido) ? 'válido' : 'inválido'}.`);
console.log(`El correo ${correoInvalido} es ${validador.validar(correoInvalido) ? 'válido' : 'no válido'}.`);
console.log(`El correo ${correoNuevo} es ${validador.validar(correoNuevo) ? 'válido' : 'inválido'}.`);

