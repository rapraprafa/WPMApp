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

  constructor(private leaderBoardService: LeaderboardService) { }

  sortNumber(a,b) {
    return a - b;
  }

  ngOnInit(): void {
    this.leaderBoardService.getLeaderBoards()
    .subscribe(leaderboards =>
      this.leaderboards=leaderboards)
  }
}
