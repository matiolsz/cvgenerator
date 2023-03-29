import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinCvGenerationComponent } from './linkedin-cv-generation.component';

describe('LinkedinCvGenerationComponent', () => {
  let component: LinkedinCvGenerationComponent;
  let fixture: ComponentFixture<LinkedinCvGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinCvGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinCvGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
