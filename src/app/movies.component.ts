import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'movies',
	template: `
		<div *ngIf="isDataAvailable">
			<hot-table [settings]="settings" [hotId]="id"></hot-table>
		</div>
	`,
})
export class MoviesComponent implements OnInit {
	isDataAvailable: boolean = false;
	constructor(private http: HttpClient) {}
	ngOnInit(): void {
		this.http.get('http://localhost:8000/').subscribe((res) => {
			const movies = (res as { movies: Array<any> }).movies;
			const columns = Object.keys(movies[0]).sort();
			this.settings.colHeaders = columns;
			this.settings.data = movies;
			this.isDataAvailable = true;
		});
	}
	id = 'main';
	settings = {
		bindRowsWithHeaders: true,
		colHeaders: [] as Array<string>,
		data: [] as Array<Record<string, string>>,
		licenseKey: 'non-commercial-and-evaluation',
		manualColumnResize: true,
		manualColumnMove: true,
		persistentState: true,
		wordWrap: false,
	};
}
