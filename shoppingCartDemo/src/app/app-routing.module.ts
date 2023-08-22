import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path:""  , component:HomeComponent,
  },
  {
    path:"list"  ,component:ProductListComponent,
  },
  {
    path:"about" , component:AboutUsComponent,
  },
  {
    path:"view/:productId" ,component:ViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
