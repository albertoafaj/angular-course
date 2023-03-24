import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServices01Component } from './example-services01.component';

describe('ExampleServices01Component', () => {
  let component: ExampleServices01Component;
  let fixture: ComponentFixture<ExampleServices01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleServices01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleServices01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
