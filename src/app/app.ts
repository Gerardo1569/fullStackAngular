import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Bienvenida } from './components/bienvenida/bienvenida';
import { Bindings } from './components/bindings/bindings';
import { Tareas } from './components/tareas/tareas';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, RouterLinkActive,Bienvenida, Bindings, FormsModule, Tareas],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tema2-app');
}
