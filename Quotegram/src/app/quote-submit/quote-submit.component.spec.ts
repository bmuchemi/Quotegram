import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSubmitComponent } from './quote-submit.component';

describe('UploadFormComponent', () => {
  let component: QuoteSubmitComponent;
  let fixture: ComponentFixture<QuoteSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
