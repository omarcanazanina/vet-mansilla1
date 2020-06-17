import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialEmpPage } from './historial-emp.page';

describe('HistorialEmpPage', () => {
  let component: HistorialEmpPage;
  let fixture: ComponentFixture<HistorialEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
