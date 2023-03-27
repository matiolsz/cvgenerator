import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadPdfComponent } from './read-pdf/read-pdf.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ManualGenerationComponent } from './manual-generation/manual-generation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'manual', component: ManualGenerationComponent},
  {path: '', component: MainPageComponent, pathMatch:'full'},
  {path: '**', component: MainPageComponent, pathMatch:'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReadPdfComponent,
    MainPageComponent,
    ManualGenerationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NgxExtendedPdfViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
