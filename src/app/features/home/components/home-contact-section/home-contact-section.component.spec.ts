import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactSectionComponent } from './home-contact-section.component';

describe('HomeContactSectionComponent', () => {
  let component: HomeContactSectionComponent;
  let fixture: ComponentFixture<HomeContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContactSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
