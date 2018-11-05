import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SettingsService, SidebardService, SharedService, UsuarioService,  LoginGuardGuard } from './service.index';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebardService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ],
  declarations: [
  ]
})
export class ServiceModule { }
