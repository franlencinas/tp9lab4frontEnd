import { TablaComponent } from './components/abm/tabla/tabla.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dondeEstamos', component: DondeEstamosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'abm', component: TablaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
