import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Character } from 'src/app/core/models/characters.interface';
import { changeURL } from 'src/app/core/models/regex';
import { SharedModule } from 'src/app/shared.module';
import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      providers: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call goToDetails and send character', () => {
    const spy = spyOn(component['router'], 'navigate');
    const character: Character = {
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
    component.goToDetails(character);
    expect(spy).toHaveBeenCalledWith(['/character/' + character.name.replace(changeURL, "_")])    
  });

});
