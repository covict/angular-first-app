import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components 
import { 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
