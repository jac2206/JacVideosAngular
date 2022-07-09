import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacComponentComponent } from './jac-component.component';

describe('JacComponentComponent', () => {
  let component: JacComponentComponent;
  let fixture: ComponentFixture<JacComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
