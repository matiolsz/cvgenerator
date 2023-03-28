import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.scss'],
  providers: [NgxExtendedPdfViewerModule]

})
export class ReadPdfComponent {
  selectedFilePath: string = "";
  selectedFileB64: string = "";
  isFileImage = false;
  isFileDocument = false;
  file: any;

  constructor(private pdfService: NgxExtendedPdfViewerService) { }

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
  }
}
