import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrinReverseComponent } from './strin-reverse.component';

describe('StrinReverseComponent', () => {
  let component: StrinReverseComponent;
  let fixture: ComponentFixture<StrinReverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrinReverseComponent]
    });
    fixture = TestBed.createComponent(StrinReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
