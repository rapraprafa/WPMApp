import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../leaderboard.service';
import { LeaderBoard } from '../leaderboard';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderboards: LeaderBoard[];

  constructor(private leaderBoardService: LeaderboardService) {
    this.onSort;
   }

  ngOnInit(): void {
    this.leaderBoardService.getLeaderBoards()
    .subscribe(leaderboards =>
      this.leaderboards=leaderboards)
      this.onSort;
  }

  sortNumber(a,b) {
    return b.wpm - a.wpm;
  }

  onSort(){
    this.leaderboards.sort(this.sortNumber);
  }


  
}
