import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAPICRUDComponent } from './web-apicrud.component';

describe('WebAPICRUDComponent', () => {
  let component: WebAPICRUDComponent;
  let fixture: ComponentFixture<WebAPICRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAPICRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAPICRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
