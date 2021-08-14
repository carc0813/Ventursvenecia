import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule}  from '@agm/core';
//para el watsapp
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";



import { HeadComponent } from './shared/head/head.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
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
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    CarouselComponent,
    InicioComponent,
    PortafolioComponent,
    ProductosComponent,
    RegistrarseComponent,
    ContactenosComponent,
    Productos1Component,
    Productos2Component,
    Productos3Component,
    Productos4Component,
    Productos5Component,
    Productos6Component,
    Productos7Component,
    Productos8Component,
    Productos9Component,
    Productos10Component,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAmItIcJZgZYHECAMbOde9kWPOAApuM0Ks'
    }),
    NgxWhastappButtonModule,



  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
