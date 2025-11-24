import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserdialogComponent } from './edit-userdialog.component';

describe('EditUserdialogComponent', () => {
  let component: EditUserdialogComponent;
  let fixture: ComponentFixture<EditUserdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
