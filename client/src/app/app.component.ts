import { Component, ViewChild } from '@angular/core';
import { HttpService } from './http.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})

export class AppComponent {

}

