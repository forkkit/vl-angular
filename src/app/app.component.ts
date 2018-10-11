import { Component } from '@angular/core';
import { ViralLoopsService } from './viral-loops/services/viral-loops.service';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vl-angular';

  constructor(private _viralLoopsService: ViralLoopsService) {
    this._viralLoopsService.init(environment.viralLoops);
  }
}
