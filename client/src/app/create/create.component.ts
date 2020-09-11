import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  fileToUpload: File = null;
  constructor(private httpService: HttpService){}
  @ViewChild('fileInput')
  fileInputVariable;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.preview(files)
  }
  imagePath;
  imgURL: any;

  uploadFileToActivity() {
    this.httpService.postFile(this.fileToUpload).subscribe(data => {
        this.clearFileInput()
      },
      error => {
        //console.log(error);
      });
  }

  clearFileInput(){
    this.fileInputVariable.nativeElement.value = "";
    this.fileToUpload = null
    this.imgURL = null
  }

  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
