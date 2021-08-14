import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  lat :number;
  long :number;
   zoom : number;
  mapTypeId :string;

  constructor() {
     this.lat=5.967;
     this.long=-75.733 ;
     this.zoom=16;
     this.mapTypeId='hybrid';


  }

  ngOnInit(): void {
  }

}
