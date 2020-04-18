import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarDetallePage } from './agregar-detalle.page';

describe('AgregarDetallePage', () => {
  let component: AgregarDetallePage;
  let fixture: ComponentFixture<AgregarDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
