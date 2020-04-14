import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarProductosPage } from './listar-productos.page';

describe('ListarProductosPage', () => {
  let component: ListarProductosPage;
  let fixture: ComponentFixture<ListarProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
