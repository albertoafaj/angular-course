import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleServices02Component } from './example-services02.component';

describe('ExampleServices02Component', () => {
  let component: ExampleServices02Component;
  let fixture: ComponentFixture<ExampleServices02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleServices02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleServices02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
