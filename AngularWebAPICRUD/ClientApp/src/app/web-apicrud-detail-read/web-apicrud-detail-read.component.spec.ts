import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApicrudDetailReadComponent } from './web-apicrud-detail-read.component';

describe('WebApicrudDetailReadComponent', () => {
  let component: WebApicrudDetailReadComponent;
  let fixture: ComponentFixture<WebApicrudDetailReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApicrudDetailReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApicrudDetailReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
