import { Instrumento } from './../../model/Instrumento';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosEncontrados: Instrumento[] = [];
  terminoBuscado: string;

  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.terminoBuscado = data.termino;
      this.getAllFiltered(data.termino);
    });
  }

  getAllFiltered(filter: string) {
    this.dataService.search(filter).subscribe(
      res => {
        this.instrumentosEncontrados = res;
      }, error => {
        console.log(error.message);
      });
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle/' + id]);
  }

}
