import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiosPage } from './radios.page';

describe('RadiosPage', () => {
  let component: RadiosPage;
  let fixture: ComponentFixture<RadiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RadiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
