import { Instrumento } from './../../model/Instrumento';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  instrumentos: Instrumento[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllInstrumentos();
  }

  getAllInstrumentos() {
    this.dataService.getAll().subscribe(
      res => {
        this.instrumentos = res;
      }, error => {
        console.log(error.message);
      });
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle', id]);
  }

}
