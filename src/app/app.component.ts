import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
	name: string = 'Hero';
	age: number = 24;

	constructor() { this.log('constructor'); }

	ngOnInit() { this.log('onInit'); }

	ngOnDestroy() { this.log('onDestroy'); }

	private log(msg: string) { 
		console.log(msg);
	}
}