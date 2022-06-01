import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo';
  usersInput: string = '';
  list: any = [];

  addTodo() {
    this.list.push(this.usersInput);
    this.usersInput = '';
  }

  removeItems(i: number) {
    console.log(i);
    console.log(this.list);
    this.list.splice(i, 1);
    console.log(this.list);

    // this.list = this.list.filter((ele,index) => i !== index);
  }

  //splice-in particular index ,delete 1 item
}
