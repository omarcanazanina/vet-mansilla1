import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaEmpPage } from './mapa-emp.page';

describe('MapaEmpPage', () => {
  let component: MapaEmpPage;
  let fixture: ComponentFixture<MapaEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
