import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerDetallePage } from './ver-detalle.page';

describe('VerDetallePage', () => {
  let component: VerDetallePage;
  let fixture: ComponentFixture<VerDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
