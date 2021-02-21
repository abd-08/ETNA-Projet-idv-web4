import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainIdeaComponent} from './body/main-idea/main-idea.component';
import {ProductsComponent} from './body/products/products.component';
import {ElementComponent} from './body/element/element.component';
import {AddelementComponent} from './body/addelement/addelement.component';
import {AddressComponent} from './body/address/address.component';
import {UserComponent} from './body/user/user.component';
import {GestionnaireUserComponent} from './body/gestionnaire-user/gestionnaire-user.component';
import {GestionnaireAddressComponent} from './body/gestionnaire-address/gestionnaire-address.component';
import {GestionnaireBookComponent} from './body/gestionnaire-book/gestionnaire-book.component';


const appRoutes: Routes = [
  {path: 'home', component: MainIdeaComponent},
  {path: 'user', component: UserComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'element', component: ElementComponent},
  {path: 'addelement', component: AddelementComponent},
  {path: 'gestionnaireUser', component: GestionnaireUserComponent},
  {path: 'gestionnaireBook', component: GestionnaireBookComponent},
  {path: 'gestionnaireAddress', component: GestionnaireAddressComponent},
  {path: 'address', component: AddressComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
