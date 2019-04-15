import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OscpComponent} from './oscp/oscp.component';

const routes: Routes = [
  {
    path: '',
    component: OscpComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
