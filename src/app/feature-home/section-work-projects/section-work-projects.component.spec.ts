import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionWorkProjectsComponent } from './section-work-projects.component';

describe('SectionWorkProjectsComponent', () => {
  let component: SectionWorkProjectsComponent;
  let fixture: ComponentFixture<SectionWorkProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWorkProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
