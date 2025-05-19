import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAddComponent } from './truck-add.component';

describe('TruckAddComponent', () => {
  let component: TruckAddComponent;
  let fixture: ComponentFixture<TruckAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
