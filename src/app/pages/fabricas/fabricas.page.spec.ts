import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabricasPage } from './fabricas.page';

describe('FabricasPage', () => {
  let component: FabricasPage;
  let fixture: ComponentFixture<FabricasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabricasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
