import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.html',
  styleUrl: './bindings.scss',
})
export class Bindings {

  valor=0;
  paso=1;
  inc (){
    this.valor+= this.paso;
  }

  dec(){
    this.valor-=this.paso;
  }


}
