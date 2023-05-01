import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css'],
})
export class UpdateFriendComponent {
  friends: any;
  url: string;
  friendid: any;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/api/v1/friends/';
  }

  ngOnInit() {
    let response = this.http.get(this.url);
    response.subscribe((data) => (this.friends = data));
  }

  updatePost(value: any) {
    let response = this.http.put(this.url, value);
    response.subscribe((data) => (this.friendid = data));
    this.router.navigateByUrl('/friends');
  }
}
