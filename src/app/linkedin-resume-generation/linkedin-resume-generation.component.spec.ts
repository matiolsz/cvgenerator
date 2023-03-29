import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinResumeGenerationComponent } from './linkedin-resume-generation.component';

describe('LinkedinResumeGenerationComponent', () => {
  let component: LinkedinResumeGenerationComponent;
  let fixture: ComponentFixture<LinkedinResumeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinResumeGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinResumeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
