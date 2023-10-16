import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
name = 'luis ramirez'
imgURL = 'http://picsum.photos/id/237/500/500'
currentDate = new Date(); 
cost = 2533000
tempature = 85.3
pizza = {
  toppings: ['pepporoni', 'bacon'],
  size: 'large'
}

getName() { 
  return this.name
 }

 changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
 }

 logImg(event: string){
  console.log(event);
  
 }
}
