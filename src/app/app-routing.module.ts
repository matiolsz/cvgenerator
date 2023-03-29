import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualGenerationComponent } from './manual-generation/manual-generation.component';
import { LinkedinCvGenerationComponent } from './linkedin-cv-generation/linkedin-cv-generation.component';
import { LinkedinResumeGenerationComponent } from './linkedin-resume-generation/linkedin-resume-generation.component';

const routes: Routes = [
  {path: 'manual', component: ManualGenerationComponent},
  {path: 'linkedin-cv', component: LinkedinCvGenerationComponent},
  {path: 'linkedin-resume', component: LinkedinResumeGenerationComponent},
  {path: '**', redirectTo: 'manual'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
