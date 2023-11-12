import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPisteComponent } from './list-piste.component';

describe('ListPisteComponent', () => {
  let component: ListPisteComponent;
  let fixture: ComponentFixture<ListPisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPisteComponent]
    });
    fixture = TestBed.createComponent(ListPisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
