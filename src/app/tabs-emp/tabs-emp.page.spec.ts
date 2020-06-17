import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsEmpPage } from './tabs-emp.page';

describe('TabsEmpPage', () => {
  let component: TabsEmpPage;
  let fixture: ComponentFixture<TabsEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
