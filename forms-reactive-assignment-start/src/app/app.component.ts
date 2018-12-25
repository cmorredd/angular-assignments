import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormArray} from '@angular/forms';
import { Observable} from 'rxjs/Observable';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	projectForm: FormGroup;
	//forbiddenProjectnames=['Test'];
	projectStatusList=['Stable', 'Critical', 'Finished'];
	
  ngOnInit(){
		//this.projectForm= new FormGroup({
		//	'projectData': new FormGroup({
		//projectname:
		//new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),email: new FormControl(null)
		//	})
		//});

		this.projectForm= new FormGroup({
			'projectData': new FormGroup({
				'projectname': new FormControl(null,[Validators.required,CustomValidators.invalidProjectName.bind(this)]
				,CustomValidators.asyncInvalidProjectName),
				'email': new FormControl(null,[Validators.required,Validators.email]),
				'projectStatus': new FormControl('Critical')
			})
		});
	}

onSubmit(){
	console.log(this.projectForm.value);
	//this.projectForm.reset();
}

// forbiddenNames(control: FormControl) : { [s:string] : boolean} {
 // 	if(this.forbiddenProjectnames.indexOf(control.value)!==-1)
 // 	{
 // 		return {'nameIsForbidden': true};
 // 	}
 // 		return null;
 //  }

   forbiddenNamesAsync(control: FormControl) : Promise<any> | Observable<any>{
  	const promise=new Promise<any>(
  		(resolve,reject) => {
  			setTimeout(() => {
  				if(control.value==='Test'){
  					resolve({'nameIsForbidden':true});
  				}else{
  					resolve(null);
  				}
  			},1500);
  		}
  	);
  	return promise;
  }

}
