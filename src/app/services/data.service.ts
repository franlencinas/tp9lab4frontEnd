import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instrumento } from './../model/Instrumento';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  path = 'http://localhost:9000/api/v1/instrumentos/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(this.path + 'all');
  }

  getAllPaged(page: number, size: number): Observable<object> {
    return this.http.get(this.path + 'allPaged', {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    });
  }

  getOne(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(this.path + id);
  }

  save(data: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>(this.path, data);
  }

  update(id: number, data: Instrumento): Observable<Instrumento> {
    return this.http.put<Instrumento>(this.path + id, data);
  }

  delete(id: number) {
    return this.http.delete(this.path + id);
  }

  uploadFile(file: FormData) {
    return this.http.post(this.path + 'images', file, { responseType: 'text' });
  }

  search(filter): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(this.path + 'buscar', {
      params: new HttpParams()
        .set('filter', filter)
    });
  }
}
