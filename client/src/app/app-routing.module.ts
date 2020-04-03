import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WpmtestComponent } from './wpmtest/wpmtest.component'; 


const routes: Routes = [
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'clone', component:  WpmtestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
