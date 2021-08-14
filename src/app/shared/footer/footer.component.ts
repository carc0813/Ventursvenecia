import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  //variables para el whatsapp
  public phone = '[+57 3218678400]';
  public title = '[hola,estoy interesado en recibir información de venturs]';



  ngOnInit(): void {
  }

}
