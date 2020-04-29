import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarLineasPage } from './listar-lineas.page';

describe('ListarLineasPage', () => {
  let component: ListarLineasPage;
  let fixture: ComponentFixture<ListarLineasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLineasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarLineasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
