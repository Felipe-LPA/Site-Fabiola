import { FieldActionComponent } from './field-action/field-action.component';
import { TheLawyerComponent } from './the-lawyer/the-lawyer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'A-Advogada', component: TheLawyerComponent },
  { path: 'Area-de-atuacao', component: FieldActionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
