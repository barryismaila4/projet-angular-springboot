import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPostComponent } from './school-post.component';

describe('SchoolPostComponent', () => {
  let component: SchoolPostComponent;
  let fixture: ComponentFixture<SchoolPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
