import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';



const pagesRouter: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'promesas', component: PromesasComponent  },
            { path: 'graficodona', component: GraficoDonaComponent },
            { path: 'accountsetting', component: AccountSettingComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRouter );
