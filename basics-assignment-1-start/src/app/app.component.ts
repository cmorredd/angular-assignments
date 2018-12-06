import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   messageType : String = '';

  showMessage( msgId: number){
     switch(msgId){
       case 1:
              this.messageType='success';
              break;
        case 2: 
              this.messageType='danger';
              break;
        case 3: 
              this.messageType='warning';
              break;
        case 4:
              this.messageType='info';
              break;
        default:
              this.messageType='';
     }
  }
}
