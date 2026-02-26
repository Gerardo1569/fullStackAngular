import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../components/usuarios/usuarios';



@Component({
  selector: 'app-user-detail',
  imports: [Usuarios],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  id: string| null=null;
  constructor(private route: ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
  }

}

