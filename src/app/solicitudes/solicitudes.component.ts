import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  lado: any;
  cardMensaje: boolean = false;
  panelOpenState = false;
  lista: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  prueba() {
    console.log(this.lado);
    if (this.lado != undefined) {
      this.cardMensaje = true
    }


  }

  prueba2(){
    this.lista = true;
  }

}


