import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionCertificatesComponent } from './section-certificates.component';

describe('SectionCertificatesComponent', () => {
  let component: SectionCertificatesComponent;
  let fixture: ComponentFixture<SectionCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCertificatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
