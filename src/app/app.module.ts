import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadPdfComponent } from './read-pdf/read-pdf.component';
import { HttpClientModule } from '@angular/common/http';
import { ManualGenerationComponent } from './manual-generation/manual-generation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { HeaderComponent } from './header/header.component';
import { LinkedinCvGenerationComponent } from './linkedin-cv-generation/linkedin-cv-generation.component';
import { LinkedinResumeGenerationComponent } from './linkedin-resume-generation/linkedin-resume-generation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReadPdfComponent,
    ManualGenerationComponent,
    DragAndDropDirective,
    HeaderComponent,
    LinkedinCvGenerationComponent,
    LinkedinResumeGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [NgxExtendedPdfViewerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
