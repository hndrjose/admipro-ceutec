import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




@NgModule({
    declarations: [
        HeaderComponent,
        SidebardComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SidebardComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ]
})

export class ShareModule { }
