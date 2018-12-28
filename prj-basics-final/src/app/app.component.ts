import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	loadedFeature : string = 'recipe';	

	ngOnInit(){
		firebase.initializeApp({
 			apiKey: "AIzaSyBGD4hq9JwBo6EpmQmgXWkidCCHTnXTkBw",
    		authDomain: "ng-recipe-book-bf550.firebaseapp.com"
		});
	}
}
