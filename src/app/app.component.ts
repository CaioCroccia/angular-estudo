import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public temTarefas = 'Tem tarefas';


  
  getSemTarefas = () => {
    return 'Não tem tarefas';
  }

  constructor(){

  }
}
