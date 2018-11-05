import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIO } from '../../config/confi';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    // aqui el servicio se inicializa cada vez que se carga la pagina
    public http: HttpClient,
    public router: Router
  ) {
    console.log( 'El servicio Usuario esta listo' );
    this.cargarStorage();
   }

   estaLogeado() {
     return (this.token.length > 5) ? true : false;
   }

   cargarStorage() {
     if (localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
     } else {
       this.token = '';
       this.usuario = null;
     }
   }


   guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;

   }

   logout() {
     this.usuario = null;
     this.token = '';

     localStorage.removeItem('token');
     localStorage.removeItem('usuario');

     this.router.navigate(['/login']);
   }

   loginGoogle( idtoken: string ) {

    let url = 'http://localhost:3000/login/google';

    return this.http.post( url, { idtoken } )
         .map( (resp: any) => {

          this.guardarStorage( resp.id, resp.token, resp.usuario);
          return true;
         });
   }



   login( usuario: Usuario, recordar: boolean) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIO + '/login';
    return this.http.post( url, usuario)
         .map( (resp: any) => {
          //  localStorage.setItem('id', resp.id);
          //  localStorage.setItem('token', resp.token);
          //  localStorage.setItem('usuario', JSON.stringify(resp.usuario));

          this.guardarStorage( resp.id, resp.token, resp.usuario);
           return true;
         });
  }

   crearUsuario ( usuario: Usuario ) {

     let url = URL_SERVICIO + '/usuario';

    return this.http.post( url, usuario )
       .map( (resp: any) => {
         swal('Usuario Creado', usuario.email, 'success');
        return resp.usuario;
       });
   }
}
