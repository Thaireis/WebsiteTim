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

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response = this.http.get('http://localhost:8080/api/v1/friends/');
    response.subscribe((data) => (this.friends = data));
  }

  toUpdateFriend(id: number) {
    this.router.navigateByUrl('/friends/update/' + id);
  }
}
