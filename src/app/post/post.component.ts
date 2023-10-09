import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
 @Input('img') postImg = ''
 imgSelected = new EventEmitter<string>()
}
