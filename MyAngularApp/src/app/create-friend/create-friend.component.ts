import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css'],
})
export class CreateFriendComponent {
  constructor(private http: HttpClient, public friendService: FriendService) {}

  onSubmit() {}
}
