import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./view/pages/about-page/about-page.component";
import {ContactPageComponent} from "./view/pages/contact-page/contact-page.component";
import {GridPageComponent} from "./view/pages/grid-page/grid-page.component";
import {TablePageComponent} from "./view/pages/table-page/table-page.component";

const routes: Routes = [
  {path: '', component: AboutPageComponent, pathMatch: 'full'},
  {path: 'table', component: TablePageComponent},
  {path: 'grid', component: GridPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
