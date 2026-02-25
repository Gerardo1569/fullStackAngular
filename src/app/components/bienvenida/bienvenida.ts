import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,         
  imports: [CommonModule],  
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.scss'], 
})
export class Bienvenida {
  fechaActual: Date = new Date();
}

