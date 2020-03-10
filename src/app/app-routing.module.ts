import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  // { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '', component: OverviewComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: 'list', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
