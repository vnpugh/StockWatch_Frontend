import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWatchlistComponent } from './create-watchlist.component';

describe('CreateWatchlistComponent', () => {
  let component: CreateWatchlistComponent;
  let fixture: ComponentFixture<CreateWatchlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWatchlistComponent]
    });
    fixture = TestBed.createComponent(CreateWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
