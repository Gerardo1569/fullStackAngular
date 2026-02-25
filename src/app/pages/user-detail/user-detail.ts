import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  id: string| null=null;
  constructor(private route: ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
  }

}

