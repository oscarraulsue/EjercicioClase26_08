import Usuario from '../scripts/class/Usuario.js';
import InterfaceUsuario from '../scripts/class/InterfaceUsuario.js';

let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');

const usuario = new Usuario();
const interfaceUser = new InterfaceUsuario();

let nombre = document.getElementById('name').value;
let apellido = document.getElementById('lastName').value;
let correo = document.getElementById('email').value;
let id = document.getElementById('id').value;

formulario.addEventListener('submit', e => {
    e.preventDefault();
    guardar(nombre, apellido, correo);
})

btnCorreo.addEventListener('click', () => {
    let correo = document.getElementById('email').value;
    buscar(correo);
})

document.addEventListener('DOMContentLoaded', interfaceUser.divMostrarPerfil());

function guardar(nombre, apellido, correo) {
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.crearPerfil(usuario);
    interfaceUser.divMostrarPerfil(usuario);
}

function buscar(mail) {
    document.getElementById('email').readOnly = true;
    usuario.buscarPerfil(mail);
    let perfil = JSON.parse(localStorage.getItem('Buscado'));
    console.log(perfil)
    const { nombre, apellido, correo, id } = perfil;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;

}

btnEditar.addEventListener('click', () => {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;
    usuario.editarPerfil(usuario, id);
})

btnEliminar.addEventListener('click', () => {
     let id = document.getElementById('id').value;
    usuario.eliminarPerfil(id)
})