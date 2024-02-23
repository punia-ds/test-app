import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandiDetailsPage } from './mandi-details.page';

describe('MandiDetailsPage', () => {
  let component: MandiDetailsPage;
  let fixture: ComponentFixture<MandiDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MandiDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
