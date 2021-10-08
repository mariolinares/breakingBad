import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [ MatCardModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.character = {
      name: 'demo',
      char_id: 1,
      birthday: '2020-12-12',
      occupation: ['profesor'],
      img: 'http://google.es',
      status: 'dead',
      nickname: 'MarioLinares',
      appearance: [1,2,4],
      portrayed: 'Mario Linares',
      category: 'breaking bad',
      better_call_saul_appearance: [1,2]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call doAction and emit event', () => {
    let spy = spyOn(component.characterEmit, 'emit');
    component.doAction(component.character)
    expect(spy).toHaveBeenCalled()
  });
});
