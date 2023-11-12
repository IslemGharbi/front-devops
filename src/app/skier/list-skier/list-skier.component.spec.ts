import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkierComponent } from './list-skier.component';

describe('ListSkierComponent', () => {
  let component: ListSkierComponent;
  let fixture: ComponentFixture<ListSkierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSkierComponent]
    });
    fixture = TestBed.createComponent(ListSkierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
