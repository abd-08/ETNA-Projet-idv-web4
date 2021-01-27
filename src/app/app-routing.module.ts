import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainIdeaComponent} from './body/main-idea/main-idea.component';
import {ProductsComponent} from './body/products/products.component';

const appRoutes: Routes = [
  {path: 'home', component: MainIdeaComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
