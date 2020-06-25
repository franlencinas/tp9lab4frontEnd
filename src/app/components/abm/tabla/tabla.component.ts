import { DataService } from 'src/app/services/data.service';
import { Instrumento } from './../../../model/Instrumento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public instrumentos: Instrumento[];
  public instrumentoActual: Instrumento = {
    id: 0,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: 0,
    costoEnvio: '',
    cantidadVendida: 0,
    descripcion: ''
  };

  public paginaActual = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllInstrumentos();
  }

  getAllInstrumentos(): void {
    this.dataService.getAll().subscribe(data => {
      this.instrumentos = data;
    });
  }

  delete(instrumento: Instrumento): void {
    const opcion = confirm('¿Está seguro que desea eliminar este registro?');
    if (opcion === true) {
      this.dataService.delete(instrumento.id).subscribe(data => {
        alert('El registro fue eliminado');
        const indexOfInstrumento = this.instrumentos.indexOf(instrumento);
        console.log(indexOfInstrumento);
        this.instrumentos.splice(indexOfInstrumento, 1);
      });
    }
  }

  onPreUpdate(instrumento: Instrumento): void {
    this.instrumentoActual = Object.assign({}, instrumento);
  }

}
