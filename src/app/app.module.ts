import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from "@angular/http";
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from "./guards/book-guard.service";
import { NewBookComponent } from './new-book/new-book.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  entryComponents: [
    NewBookComponent
    ],
   
  providers: [BookGuardService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
