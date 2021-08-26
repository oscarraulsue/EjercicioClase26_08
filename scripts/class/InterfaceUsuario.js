
export default class InterfaceUsuario{

    url = 'http://localhost:4000/usuarios/';

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }

            divMostrarPerfil(user){
             
            let llenarTabla = document.getElementById('tabla')
            // llenarTabla.innerHTML = '';
            axios.get(this.url)
            .then(({data}) => {
                data.forEach(user => {
                    const {nombre,apellido,correo,id} = user;
    
                    llenarTabla.innerHTML += `<th scope="row">${nombre}</th>
                                              <td colspan="2" class="table-active">${apellido}</td>
                                                <td>${correo}</td>
                                                              `                    
                })               
            } )
        }
        
            //     
            // //     `
            // });
        
    // }
    
}