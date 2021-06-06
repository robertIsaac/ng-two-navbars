import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForthComponent } from './forth.component';

describe('ForthComponent', () => {
  let component: ForthComponent;
  let fixture: ComponentFixture<ForthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForthComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
