import { Component } from '@angular/core';
import { HttpService } from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent {
  fileToUpload: File = null;
  constructor(private httpService: HttpService){}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.httpService.postFile(this.fileToUpload).subscribe(data => {},
        error => {
      console.log(error);
    });
  }
}
