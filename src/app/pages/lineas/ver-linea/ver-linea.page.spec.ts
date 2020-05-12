import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerLineaPage } from './ver-linea.page';

describe('VerLineaPage', () => {
  let component: VerLineaPage;
  let fixture: ComponentFixture<VerLineaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerLineaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerLineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
