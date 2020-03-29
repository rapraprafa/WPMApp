import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  //retrieving contacts
  getLeaderBoards(){
    return this.http.get('http://localhost:3000/api/leaderboards')
    .pipe(map(item => Object.keys(item).map(i => item[i])));
  }
  
  //add contact method
  addLeaderBoard(newLeaderBoard){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/leaderboard', newLeaderBoard, {headers:headers})
    .pipe(map(res => res));
  }

  //delete contact method
  deleteLeaderBoards(id){
    return this.http.delete('http://localhost:3000/api/leaderboard/'+id)
    .pipe(map(res=>res));
  }

}
