import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentsComponent } from './components/pages/moments/moments.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'moments/new', component: NewMomentComponent },
  { path: 'moments/:id', component: MomentsComponent },

  // router redirect 404 error
  // { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
