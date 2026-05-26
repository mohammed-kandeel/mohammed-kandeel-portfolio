import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkillsSectionComponent } from './home-skills-section.component';

describe('HomeSkillsSectionComponent', () => {
  let component: HomeSkillsSectionComponent;
  let fixture: ComponentFixture<HomeSkillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkillsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkillsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
