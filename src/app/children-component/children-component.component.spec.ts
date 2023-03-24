import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenComponentComponent } from './children-component.component';

describe('ChildrenComponentComponent', () => {
  let component: ChildrenComponentComponent;
  let fixture: ComponentFixture<ChildrenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
