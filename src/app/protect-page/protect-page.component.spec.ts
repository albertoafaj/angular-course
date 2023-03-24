import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectPageComponent } from './protect-page.component';

describe('ProtectPageComponent', () => {
  let component: ProtectPageComponent;
  let fixture: ComponentFixture<ProtectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
