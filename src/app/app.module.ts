import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrinReverseComponent } from './strin-reverse/strin-reverse.component';

@NgModule({
  declarations: [
    AppComponent,
    StrinReverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// @NgModule({
//   imports: [
//     // ... other modules
    
//   ],
//   // ... other configurations
// })
// export class AppModule { }

