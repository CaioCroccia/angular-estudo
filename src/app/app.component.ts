import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public temTarefas = 'Tem tarefas';
  CountdonwDate = new Date("01-01-2023").getTime();

  

  getSemTarefas = () => {
    return 'Não tem tarefas';
  }

  starTimer(durantion, display){
    
    var timer = durantion, minutes, second

    setInterval(() => {
      minutes = parseInt( timer / 60, 10)
    }, 1000);
  }



  constructor(){

  }
  
 

}
