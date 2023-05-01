import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent implements OnInit {
  friends: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response = this.http.get('http://localhost:8080/api/v1/friends');
    response.subscribe((data) => (this.friends = data));
  }
}
