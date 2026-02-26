import { Component } from '@angular/core';
import { Servicios } from '../../core/servicios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  usuarios: any[]=[];
  error='';

  constructor (private srv: Servicios){
    
  }
  ngOnInit(){
    this.srv.listar().subscribe({
      next: u=>this.usuarios=u,
      error:_=> this.error='no se pudo cargar usuarios'
    });
  }

}
