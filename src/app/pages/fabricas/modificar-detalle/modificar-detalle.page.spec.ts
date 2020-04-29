import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarDetallePage } from './modificar-detalle.page';

describe('ModificarDetallePage', () => {
  let component: ModificarDetallePage;
  let fixture: ComponentFixture<ModificarDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
