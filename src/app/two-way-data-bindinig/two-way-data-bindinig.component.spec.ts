import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindinigComponent } from './two-way-data-bindinig.component';

describe('TwoWayDataBindinigComponent', () => {
  let component: TwoWayDataBindinigComponent;
  let fixture: ComponentFixture<TwoWayDataBindinigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindinigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBindinigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
