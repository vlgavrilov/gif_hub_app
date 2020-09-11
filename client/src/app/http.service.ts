import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient ){ }
  postFile(fileToUpload: File) {
    const endpoint = `${environment.HOST}/gif`;
    const formData: FormData = new FormData();
    formData.append('files', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData )
  }
}
