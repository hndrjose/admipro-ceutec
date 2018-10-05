import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebardService, SharedService } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebardService,
    SharedService
  ],
  declarations: [
  ]
})
export class ServiceModule { }
