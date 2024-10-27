import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebnirmaanLandingpageComponent } from './webnirmaan-landingpage/webnirmaan-landingpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [{ path: '', component: WebnirmaanLandingpageComponent },
{
  path: 'home-page', component: HomePageComponent, pathMatch: 'full'
},{path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
