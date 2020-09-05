import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() imageUrl;
  @Input() uploadedOn;
  @Input() likesCount;
  @Input() commentCount;
  @Input() type;
  
  constructor() { }

  ngOnInit() {
  }

}
