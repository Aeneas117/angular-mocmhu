import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { GridModule } from '@syncfusion/ej2-angular-grids';

import { CircularGaugeAllModule } from '@syncfusion/ej2-angular-circulargauge';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ CircularGaugeAllModule, GridModule, ButtonModule, CheckBoxModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
