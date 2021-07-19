import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteToggleComponent } from './quote-toggle.component';

describe('QuoteToggleComponent', () => {
  let component: QuoteToggleComponent;
  let fixture: ComponentFixture<QuoteToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[ QuoteToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
