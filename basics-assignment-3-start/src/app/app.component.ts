import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public buttonName: String ='Display Details';
	content: String ='I Love you Cherry';
	showContent: boolean =false;
	displayCounter: number =0;
	hiddenCounter: number =0;
	counter: number =0;
	dateMessage: String;
	contentArray=[];

	constructor(){
		setInterval(()=>{
			let currentDate=new Date();
			this.dateMessage=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
		},1000);
	}
	toggleDisplay(){
	  this.showContent=!this.showContent;
	  this.contentArray.push(this.contentArray.length+1);
	  if(this.showContent){
	  	this.displayCounter=this.displayCounter+1;
	  	this.buttonName='Hide Details';
	  }else{
	  	this.hiddenCounter=this.hiddenCounter+1;
	  	this.buttonName='Display Details';
	  }
	}
}

