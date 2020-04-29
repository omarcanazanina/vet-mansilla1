import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarDetallesPage } from './listar-detalles.page';

describe('ListarDetallesPage', () => {
  let component: ListarDetallesPage;
  let fixture: ComponentFixture<ListarDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
