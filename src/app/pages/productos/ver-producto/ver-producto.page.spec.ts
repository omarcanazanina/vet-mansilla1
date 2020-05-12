import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerProductoPage } from './ver-producto.page';

describe('VerProductoPage', () => {
  let component: VerProductoPage;
  let fixture: ComponentFixture<VerProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
