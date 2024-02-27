import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonorsPage } from './donors.page';

describe('DonorsPage', () => {
  let component: DonorsPage;
  let fixture: ComponentFixture<DonorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
