import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarProductoPage } from './modificar-producto.page';

describe('ModificarProductoPage', () => {
  let component: ModificarProductoPage;
  let fixture: ComponentFixture<ModificarProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
