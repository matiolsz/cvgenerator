import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCV } from '../model/userCV.model';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  private backendUrl = 'http://localhost:8080/generate';
  private backendUrlPdf = 'http://localhost:8080/getpdf';

  constructor(private httpClient: HttpClient) { }

  generate(userCv: UserCV): Observable<any> {
    const requestOptions : any = {
      observe: "response",
      responseType: "blob",           
      headers: new HttpHeaders({
        "Accept": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      })
  };
  const request = new Request(requestOptions);
  return this.httpClient.post(this.backendUrl, userCv, requestOptions);
}
  //   return this.httpClient.post<UserCV>(this.backendUrl, userCv);
  // }

  generatePdf(userCv: UserCV): Observable<any> {
    const requestOptions : any = {
      observe: "response",
      responseType: "blob",           
      headers: new HttpHeaders({
        "Accept": "application/pdf"
      })
  };
  const request = new Request(requestOptions);
  return this.httpClient.post(this.backendUrlPdf, userCv, requestOptions);
}

}
