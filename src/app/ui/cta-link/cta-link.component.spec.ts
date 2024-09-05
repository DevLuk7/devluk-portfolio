import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaLinkComponent } from './cta-link.component';

describe('CtaLinkComponent', () => {
  let component: CtaLinkComponent;
  let fixture: ComponentFixture<CtaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
