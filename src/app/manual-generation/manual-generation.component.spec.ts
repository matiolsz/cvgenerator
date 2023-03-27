import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualGenerationComponent } from './manual-generation.component';

describe('ManualGenerationComponent', () => {
  let component: ManualGenerationComponent;
  let fixture: ComponentFixture<ManualGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
