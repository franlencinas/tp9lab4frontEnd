import { TablaComponent } from './../tabla/tabla.component';
import { Instrumento } from './../../../model/Instrumento';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, Host, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataService: DataService, @Host() private tabla: TablaComponent) { }

  /* Permite comunicar componentes, crea una referencia hacia el evento (click) que se encuentra en el btnClose del html */
  @ViewChild('btnClose', { static: true }) btnClose: ElementRef;

  /* Recibe la persona que viene desde la tabla */
  @Input() instrumentoActual: Instrumento;
  @Input() instrumentos: Instrumento[];

  public isError = false;

  ngOnInit() {
  }

  onSaveInstrumento(formInstrumento: NgForm): void {
    console.log(formInstrumento.value);
    if (formInstrumento.invalid) {
      this.isError = true;
    } else {
      if (formInstrumento.value.id === 0) {
        // Nuevo libro
        this.add(formInstrumento.value);
      } else {
        // Actualización
        this.instrumentoActual = formInstrumento.value;
        this.update(this.instrumentoActual);
      }
      /* Cierra la ventana modal */
      this.btnClose.nativeElement.click();
    }
  }

  add(instrumento: Instrumento) {
    this.dataService.save(instrumento).subscribe(
      res => {
        this.instrumentos.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar instrumento');
      }
    );
  }

  update(instrumento: Instrumento) {
    this.dataService.update(instrumento.id, instrumento).subscribe(
      res => {
        alert('Instrumento actualizado con éxito!');
        this.tabla.instrumentos.filter(item => {
          if (item.id === instrumento.id) {
            const idex = this.tabla.instrumentos.indexOf(item);
            this.tabla.instrumentos.splice(idex, 1, res);
          }
        });
      },
      err => {
        alert('Ocurrió un error al actualizar instrumento');
      });
  }
  onClose(formPersona: NgForm): void {
    this.instrumentoActual = {
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
  }

  onCloseAlert() {
    this.isError = false;
  }
}
