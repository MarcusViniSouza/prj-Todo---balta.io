import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public todos: any[] = [];
   public title: String= 'Minhas Tarefas';

   constructor() {
     this.todos.push('Estudar Angular');
     this.todos.push('Iniciar front-end com angular');
     this.todos.push('Estudar back-end com C#');
     this.todos.push('Iniciar back-end com C#');
   }
}

