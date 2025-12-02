import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistJOOComponent } from './playlist-joo.component';

describe('PlaylistJOOComponent', () => {
  let component: PlaylistJOOComponent;
  let fixture: ComponentFixture<PlaylistJOOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistJOOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistJOOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
