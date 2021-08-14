
//importacion modulos del router de angular
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ModuleWithProviders }  from '@angular/core';

//importar Componentes
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Productos1Component } from './pages/productos1/productos1.component';
import { Productos2Component } from './pages/productos2/productos2.component';
import { Productos3Component } from './pages/productos3/productos3.component';
import { Productos4Component } from './pages/productos4/productos4.component';
import { Productos5Component } from './pages/productos5/productos5.component';
import { Productos6Component } from './pages/productos6/productos6.component';
import { Productos7Component } from './pages/productos7/productos7.component';
import { Productos8Component } from './pages/productos8/productos8.component';
import { Productos9Component } from './pages/productos9/productos9.component';
import { Productos10Component } from './pages/productos10/productos10.component';


import { RegistrarseComponent } from './pages/registrarse/registrarse.component';

import {LoginComponent } from './pages/login/login.component';
//Array de Rutas
const routes: Routes = [
    {path:'inicio',component:InicioComponent},
    {path:'portafolio',component:PortafolioComponent},
    {path:'contactenos',component:ContactenosComponent},
    {path:'productos',component:ProductosComponent},
    {path:'productos1',component:Productos1Component},
    {path:'productos2',component:Productos2Component},
    {path:'productos3',component:Productos3Component},
    {path:'productos4',component:Productos4Component},
    {path:'productos5',component:Productos5Component},
    {path:'productos6',component:Productos6Component},
    {path:'productos7',component:Productos7Component},
    {path:'productos8',component:Productos8Component},
    {path:'productos9',component:Productos9Component},
    {path:'productos10',component:Productos10Component},
    {path:'registrarse',component:RegistrarseComponent},
    {path:'login',component:LoginComponent},
    {path:'**',pathMatch:'full',redirectTo:'inicio'}
    //{path: '**', component:InicioComponent},
  ];

//Exportar el Modulo del Router
//export const appRoutingProviders:any[]=[];
//export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
