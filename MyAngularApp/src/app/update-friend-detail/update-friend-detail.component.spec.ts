import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFriendDetailComponent } from './update-friend-detail.component';

describe('UpdateFriendDetailComponent', () => {
  let component: UpdateFriendDetailComponent;
  let fixture: ComponentFixture<UpdateFriendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFriendDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFriendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
