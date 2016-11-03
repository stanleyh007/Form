import {Routes, RouterModule} from "@angular/router";
import {InternshipsComponent} from "./internships.component";
import {InternshipEntryComponent} from "./internship.component";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";
/**
 * Created by SSKeikoMK on 02-11-2016.
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent,
    children:
    [
      {path: ''},
      {path: 'a', component: AComponent},
      {path: 'b', component: BComponent}
    ]
  },
  {
    path: 'internship',
    component: InternshipEntryComponent
  },
  {
    path: 'internship/:id',
    component: InternshipEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AngularFormRoutingModule{}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);