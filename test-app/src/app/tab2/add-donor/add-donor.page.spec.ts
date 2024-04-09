import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDonorPage } from './add-donor.page';

describe('AddDonorPage', () => {
  let component: AddDonorPage;
  let fixture: ComponentFixture<AddDonorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddDonorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
