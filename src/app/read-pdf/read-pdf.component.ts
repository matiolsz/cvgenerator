import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PdfServiceService } from '../services/pdf-service.service';
import { UserCV } from '../model/userCV.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.scss'],
  providers: [NgxExtendedPdfViewerModule]

})
export class ReadPdfComponent {
  faUpload = faUpload
  selectedFilePath: string = "";
  selectedFileB64: string = "";
  isFileImage = false;
  isFileDocument = false;
  file: any;
  // userCv!: UserCV;

  constructor(private pdfService: NgxExtendedPdfViewerService, private router: Router,
    private mypdfService: PdfServiceService) { }

  onFileSelected(event: any): void {
    if (event.target?.files[0]) {
      this.onFileUpload(event.target.files[0])
    }
  }

  onFileUpload(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      let path = event.target == null ? '' : event.target.result;
      this.selectedFilePath = path as string;
      this.selectedFileB64 = this.selectedFilePath.split(",")[1];
      if (this.selectedFilePath.includes("image")) {
        this.isFileImage = true;
        this.isFileDocument = false;
      } else {
        this.isFileImage = false;
        this.isFileDocument = true;
      }
    }

    if((this.router.url)==='/linkedin-cv'){
      console.log("cv - parsing");
      this.mypdfService.parseLinkedInCv(file)
      .subscribe(
          (cv:any) => {
            let userCv = <UserCV>JSON.parse(JSON.stringify(cv.body));
            console.log(userCv);
    });

    }
    // if((this.router.url)==='/linkedin-resume'){
    //   console.log("resume - parsing");
    //   this.mypdfService.parseLinkedInResume(file);
    // }
  }
  
}
