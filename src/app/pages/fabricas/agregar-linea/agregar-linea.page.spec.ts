import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarLineaPage } from './agregar-linea.page';

describe('AgregarLineaPage', () => {
  let component: AgregarLineaPage;
  let fixture: ComponentFixture<AgregarLineaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarLineaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarLineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
