import { Component, Input, OnInit, DoCheck, OnChanges, 
	SimpleChanges, AfterContentInit, AfterContentChecked,
	AfterViewChecked,AfterViewInit } from '@angular/core';

@Component({
	selector: 'child-comp',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit, DoCheck, OnChanges,
	AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
	@Input() name: string = "Batman";

	count: number = 1;

	constructor() { this.log('constructor'); }

	ngOnInit() { this.log('onInit'); }

	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) {
			let chng = changes[propName];
			let cur = JSON.stringify(chng.currentValue);
			let prev = JSON.stringify(chng.currentValue);
			this.log('${propName}: currentValue = ${cur}, previousValue = ${prev}');
		}
	} 

	ngDoCheck() { this.log('ngDoCheck'); }

	ngAfterViewInit() { this.log('ngAfterViewInit'); }
	ngAfterViewChecked() { this.log('ngAfterViewChecked'); }
	ngAfterContentInit() { this.log('ngAfterContentInit'); }
	ngAfterContentChecked() { this.log('ngAfterContentChecked'); }

	private log(msg: string) {
		console.log(this.count + ". " + msg);
		this.count++;
	}

	@Input() userName: string;

	_userAge: number;
	@Input()
	set userAge(age: number) {
		if (age < 0) this._userAge = 0;
		else if (age > 100) this._userAge = 100;
		else this._userAge = age;
	}
	get userAge() { return this._userAge; }
}