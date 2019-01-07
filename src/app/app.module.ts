import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { StackedBarChartComponent } from './stacked_bar_chart/stacked-bar-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        StackedBarChartComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
