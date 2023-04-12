import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCV } from '../model/userCV.model';

@Injectable({
  providedIn: 'root'
})
export class ManageFilesService {

  private backendUrl = 'http://localhost:8080/generate';
  private backendUrlPdf = 'http://localhost:8080/getpdf';
  private backendUrlParseCv = 'http://localhost:8080/parsecv';
  private resumeUrl = 'http://localhost:8080/cv/resume';

  constructor(private httpClient: HttpClient) { }

  uploadPdfFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/pdf',
      }
    };
    return this.httpClient.post<any>(this.resumeUrl, formData, httpOptions);
  }

  generate(userCv: UserCV): Observable<any> {
    const requestOptions : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      })
  };
  return this.httpClient.post(this.backendUrl, userCv, requestOptions);
}

  generatePdf(userCv: UserCV): Observable<any> {
    const requestOptions : any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/pdf"
      })
  };
  return this.httpClient.post(this.backendUrlPdf, userCv, requestOptions);
}

  parseLinkedInCv(file: File): Observable<HttpEvent<any>> {
    // wyslij pdf do springa, parsuj, otrzymaj obiekt usercv i wypelnij nim form
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.backendUrlParseCv}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }
}
