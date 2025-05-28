import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaComponent } from './segunda.component';

describe('SegundaComponent', () => {
  let component: SegundaComponent;
  let fixture: ComponentFixture<SegundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
