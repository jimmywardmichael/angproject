import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
name = 'Luis'
imgURL = 'http://picsum.photos/id/237/500/500'

getName() { 
  return this.name
 }
}
