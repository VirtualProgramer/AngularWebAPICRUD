import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApicrudDetailComponent } from './web-apicrud-detail.component';

describe('WebApicrudDetailComponent', () => {
  let component: WebApicrudDetailComponent;
  let fixture: ComponentFixture<WebApicrudDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApicrudDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApicrudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
