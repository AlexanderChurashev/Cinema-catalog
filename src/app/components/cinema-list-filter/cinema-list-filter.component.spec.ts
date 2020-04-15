import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemaListFilterComponent } from './cinema-list-filter.component';

describe('CinemaListFilterComponent', () => {
  let component: CinemaListFilterComponent;
  let fixture: ComponentFixture<CinemaListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
