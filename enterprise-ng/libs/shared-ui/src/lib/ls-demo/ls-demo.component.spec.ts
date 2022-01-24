import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsDemoComponent } from './ls-demo.component';

describe('LsDemoComponent', () => {
  let component: LsDemoComponent;
  let fixture: ComponentFixture<LsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
