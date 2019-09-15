import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { TitleRelDateComponent } from './title-rel-date/title-rel-date.component';
import { RateRunComponent } from './rate-run/rate-run.component';
import { ShortDescComponent } from './short-desc/short-desc.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieInfoComponent,
    TitleRelDateComponent,
    RateRunComponent,
    ShortDescComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
