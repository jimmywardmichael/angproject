import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
 @Input('img') postImg = ''
 @Output() imgSelected = new EventEmitter<string>()
  

constructor(){
  console.log('constructor() called', this.postImg)
}
ngOnInit(){
  console.log('ngOnInit() called' , this.postImg);
 }
 ngDoCheck(){
  console.log('ngDoCheck() called');
 }
 ngOnChanges(){
     console.log('ngOnChanges() called');   
 }
 ngAfterViewChecked(){
    console.log('AfterViewChecked() called');
    
 }
 ngAfterViewInit(){
    console.log('AfterviewInit() called' );
 }
 ngAfterContentInit(){
  console.log('AfterContentInit() called');
 }
 ngAfterContentChecked(){
  console.log('AfterContentChecked() called');
 }
}
  


