import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importamos RouterModule

@NgModule({
  declarations: [
    AppComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    RouterModule,  // Añadimos RouterModule al array de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ReactiveFormsModule } from '@angular/forms';




