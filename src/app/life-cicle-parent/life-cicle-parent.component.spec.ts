import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleParentComponent } from './life-cicle-parent.component';

describe('LifeCicleParentComponent', () => {
  let component: LifeCicleParentComponent;
  let fixture: ComponentFixture<LifeCicleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCicleParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCicleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
