import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	subscriptions= ['Basic','Advanced','Pro'];
	selectedSubscription= 'Advanced';
	@ViewChild('signupForm') sgnForm: NgForm;
	submitted=false;
	user={
	 email:'',
	 subscription:''
	}

	onSubmit(){
	   this.submitted=true;
	   //console.log(sgnForm);
       this.user.email=this.sgnForm.value.email;
 	   this.user.subscription=this.sgnForm.value.subscription;
	}
}
