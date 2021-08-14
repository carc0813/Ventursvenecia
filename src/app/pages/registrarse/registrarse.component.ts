import { ContactoUsuario } from '../../Contacto.usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  public usuario:ContactoUsuario;

  constructor() {
     this.usuario=new ContactoUsuario('','','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Evento submit lanzado");
  }

}
