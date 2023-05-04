import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FriendComponent } from './friend/friend.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { DeleteFriendComponent } from './delete-friend/delete-friend.component';
import { FormsModule } from '@angular/forms';
import { UpdateFriendDetailComponent } from './update-friend-detail/update-friend-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'friends', component: FriendComponent },
  { path: 'friends/add', component: CreateFriendComponent },
  { path: 'friends/update', component: UpdateFriendComponent },
  { path: 'friends/update/:id', component: UpdateFriendDetailComponent },
  { path: 'friends/delete', component: DeleteFriendComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    CreateFriendComponent,
    UpdateFriendComponent,
    UpdateFriendDetailComponent,
    DeleteFriendComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
