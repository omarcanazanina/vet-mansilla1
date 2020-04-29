import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerFabricaPage } from './ver-fabrica.page';

describe('VerFabricaPage', () => {
  let component: VerFabricaPage;
  let fixture: ComponentFixture<VerFabricaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFabricaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerFabricaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
