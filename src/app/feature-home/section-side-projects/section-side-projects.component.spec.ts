import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionSideProjectsComponent } from './section-side-projects.component';

describe('SectionSideProjectsComponent', () => {
  let component: SectionSideProjectsComponent;
  let fixture: ComponentFixture<SectionSideProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSideProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSideProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
