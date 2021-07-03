import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotTableModule } from '@handsontable/angular';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
@NgModule({
	declarations: [AppComponent, MoviesComponent],
	imports: [BrowserModule, HotTableModule.forRoot(), HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
