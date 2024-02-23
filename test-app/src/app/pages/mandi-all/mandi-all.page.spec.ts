import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandiAllPage } from './mandi-all.page';

describe('MandiAllPage', () => {
  let component: MandiAllPage;
  let fixture: ComponentFixture<MandiAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MandiAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
