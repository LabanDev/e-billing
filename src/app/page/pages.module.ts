import { NgModule } from "@angular/core";
//Rutas
import { PAGES_ROUTES } from './pages.routes';
//Módulos
import { SharedModule } from '../shared/shared.module';

//Componentes
import { PagesComponent } from './pages.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboarComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports:[
        DashboarComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}