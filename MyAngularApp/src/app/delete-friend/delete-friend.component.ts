import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-friend',
  templateUrl: './delete-friend.component.html',
  styleUrls: ['./delete-friend.component.css'],
})
export class DeleteFriendComponent {
  friends: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let response = this.http.get('http://localhost:8080/api/v1/friends');
    response.subscribe((data) => (this.friends = data));
  }

  deleteFriend(id: number) {
    let request = this.http.delete(
      'http://localhost:8080/api/v1/friends/' + id
    );
    request.subscribe((data) => (this.friends = data));
    this.router.navigateByUrl('/home');
  }
}
