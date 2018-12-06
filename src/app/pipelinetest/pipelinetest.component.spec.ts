import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinetestComponent } from './pipelinetest.component';

describe('PipelinetestComponent', () => {
  let component: PipelinetestComponent;
  let fixture: ComponentFixture<PipelinetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelinetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
