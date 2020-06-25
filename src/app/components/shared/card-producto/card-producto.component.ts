import { Router } from '@angular/router';
import { Instrumento } from './../../../model/Instrumento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() instrumentoAux: Instrumento;

  @Output() instrumentoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.instrumentoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public verInstrumento(id) {
    this.instrumentoSeleccionado.emit(id);
  }

}
