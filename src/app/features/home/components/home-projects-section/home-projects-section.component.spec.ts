import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectsSectionComponent } from './home-projects-section.component';

describe('HomeProjectsSectionComponent', () => {
  let component: HomeProjectsSectionComponent;
  let fixture: ComponentFixture<HomeProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProjectsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
