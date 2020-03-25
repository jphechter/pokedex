import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListViewComponent } from './list-view/list-view.component';


const routes: Routes = [
  // { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '', component: OverviewComponent },
  { path: 'detail/:id', component: DetailViewComponent },
  { path: 'list', component: ListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
