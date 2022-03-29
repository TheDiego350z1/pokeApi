import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  termino: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

}
