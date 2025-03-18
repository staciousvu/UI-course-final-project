import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPickCourseComponent } from './top-pick-course.component';

describe('TopPickCourseComponent', () => {
  let component: TopPickCourseComponent;
  let fixture: ComponentFixture<TopPickCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPickCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPickCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
