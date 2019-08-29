import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApicrudAddComponent } from './web-apicrud-add.component';

describe('WebApicrudAddComponent', () => {
  let component: WebApicrudAddComponent;
  let fixture: ComponentFixture<WebApicrudAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApicrudAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApicrudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
