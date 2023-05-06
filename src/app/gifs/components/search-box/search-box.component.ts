import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';
@Component({
  selector: 'gifs-search-box',
  template:`
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtTagInput>

  `
})

export class SearchBoxComponent{
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  // el signo ! es para especificar a typescrip que siempre va a recibir el elemento, pues si no se coloca este va a sacar error por que puede ser null.
  constructor(private gifsService:GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

  }

}
