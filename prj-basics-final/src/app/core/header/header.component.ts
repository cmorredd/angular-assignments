import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { HttpEvent } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Output() featureSelected=new EventEmitter<string>();

	constructor(private dataStorageService: DataStorageService
	,private authService: AuthService){}

	onSaveData(){
		this.dataStorageService.storeRecipes().subscribe(
			(response: HttpEvent<Object>)=>{
				console.log(response);
			}
		);
	}

	onFetchData(){
		console.log('fetch data called.');
		this.dataStorageService.getRecipes();
	}

	onLogout(){
		this.authService.logout();
	}

	isAuthenticated(){
		this.authService.isAuthenticated();
	}
	
}