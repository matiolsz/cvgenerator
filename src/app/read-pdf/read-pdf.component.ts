import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { ManageFilesService } from '../services/manage-files.service';

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

  constructor(private manageFilesService: ManageFilesService) { }

  onFileSelected(event: any): void {
    if (event.target?.files[0]) {
      this.onFileUpload(event.target.files[0])
    }
  }

  onFileUpload(file: File) {
    // this.uploadPdfFile(file);
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

  uploadPdfFile(file: File) {
    this.manageFilesService.uploadPdfFile(file).subscribe({
      next: (data) => {
        console.log('Upload File ' + data);
      },
      error: (error) => {
        console.error('error', error.error);
      }
    });
  }
}
