import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoWatchlistComponent } from './addto-watchlist.component';

describe('AddtoWatchlistComponent', () => {
  let component: AddtoWatchlistComponent;
  let fixture: ComponentFixture<AddtoWatchlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtoWatchlistComponent]
    });
    fixture = TestBed.createComponent(AddtoWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
