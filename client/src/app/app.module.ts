import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WpmtestComponent } from './wpmtest/wpmtest.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WpmtestComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
