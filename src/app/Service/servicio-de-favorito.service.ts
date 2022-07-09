import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeFavoritoService {
  @Output() disparadorFavoritos: EventEmitter<any> = new EventEmitter();
  @Output() pokemonLista: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
