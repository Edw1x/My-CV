import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographySectionComponent } from './biography-section.component';

describe('BiographySectionComponent', () => {
  let component: BiographySectionComponent;
  let fixture: ComponentFixture<BiographySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
