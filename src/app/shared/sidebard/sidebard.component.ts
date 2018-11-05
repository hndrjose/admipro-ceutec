import { Component, OnInit } from '@angular/core';
import { SidebardService, UsuarioService } from '../../service/service.index';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styles: []
})
export class SidebardComponent implements OnInit {

  constructor( public _siderbar: SidebardService, public _usuarioServise: UsuarioService) { }

  ngOnInit() {
  }

}
