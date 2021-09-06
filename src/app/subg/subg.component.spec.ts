import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgComponent } from './subg.component';

describe('SubgComponent', () => {
  let component: SubgComponent;
  let fixture: ComponentFixture<SubgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
