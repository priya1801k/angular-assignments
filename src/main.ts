import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  // template: `
  //   <h1>Hello from {{name}}!</h1>
  //   <a target="_blank" href="https://angular.io/start">
  //     Learn more about Angular 
  //   </a>
  // `,
  // templateUrl:'./mainPage.html'
  // templateUrl:'./InputPage.html'
  templateUrl:'./assignment2.html'
})
export class App {
  

//directives:

  constructor(){
  }

  ngOnInit(){}

  //assignment2.html
  // username="";
  // btnEnable = false;

  // updateInput(){
  //   this.username="";
  // }

  // updateBtnStatus(){
  //   console.log("running");
  //   if(this.username===""){
  //     this.btnEnable = false;
  //   }else{
  //     this.btnEnable = true;
  //   }
  // }

  // constructor(){
  //   }
  
  //   ngOnInit(){}
  

  //000000000 InputPage.html
  // allowNewServer = false;
  // serverCreationStatus = "No server was created";
  // serverName = 'defaultVal';

  // constructor(){
  //   setTimeout(()=>{
  //     this.allowNewServer = true;
  //   },2000);
  // }

  // ngOnInit(){}

  // onCreateServer(){
  //   this.serverCreationStatus = 'Server was created!';
  // }

  // onUpdateServerName(event:any){
  //   // this.serverName=event.target.value;
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}

bootstrapApplication(App);
