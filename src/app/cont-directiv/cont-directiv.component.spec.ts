import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContDirectivComponent } from './cont-directiv.component';

describe('ContDirectivComponent', () => {
  let component: ContDirectivComponent;
  let fixture: ComponentFixture<ContDirectivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContDirectivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContDirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
