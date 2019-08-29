import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApicrudDetailEditComponent } from './web-apicrud-detail-edit.component';

describe('WebApicrudDetailEditComponent', () => {
  let component: WebApicrudDetailEditComponent;
  let fixture: ComponentFixture<WebApicrudDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApicrudDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApicrudDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
