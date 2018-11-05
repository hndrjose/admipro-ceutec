import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../service/service.index';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Usuario } from '../models/usuario.model';


declare function init_plugins();

// es una libreria ya importada dentro del index.html  https://apis.google.com/js/platform.js
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  recuerdame: boolean = false;
  // con esta declaracion me retornara con google la informacion con que voy a trabajar informacion del token, profile etc
  auth2: any;

  constructor(public router: Router, public usuariosServise: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleinit();

    // "||" sirve como para validar lo contrario que se esta realizando en primera instancia
    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleinit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '488268942600-obf75u430a8d6f575jv6p8ugjb4fvdbr.apps.googleusercontent.com',
        // solo de aqui se va a salir "esto esta en la documentacion de google"
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
         // codigo nativo de javascript donde busco el elemento html por el id del mismo
         this.attashSingnin( document.getElementById('btnGoogle') );
    });

  }

// adjuntara a un elemteto html un valor predefinido
  attashSingnin( element ) {

    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // consigo el profile del usuario que se logea
      // let profile = googleUser.getBasicProfile();

      // obtengo el token del usuario que se logea
      let idtoken = googleUser.getAuthResponse().id_token;

      this.usuariosServise.loginGoogle( idtoken )
                .subscribe( resp =>
                  // esta es una redireccion manual por parte manila javascript que funciona igual al navigate
                  window.location.href = '#/dashboard'
                 // this.router.navigate(['/dashboard']);
                );
      // console.log(idtoken);
    });
  }



ingresar( forma: NgForm) {

  if (forma.invalid) {
    return;
  }

  let usuario = new Usuario (null, forma.value.email, forma.value.password);

  this.usuariosServise.login(usuario, forma.value.recuerdame )
     .subscribe( resp => {
       this.router.navigate(['/dashboard']);
      // console.log(resp);
     });

  console.log(forma.valid);
  console.log(forma.value);

  // console.log('ingresando');
  // this.router.navigate( [ '/dashboard' ] );
}

}
