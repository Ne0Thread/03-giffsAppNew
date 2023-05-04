import { Component, ElementRef, ViewChild} from '@angular/core';
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
  constructor(){}

  searchTag(){
    const newTag =this.tagInput.nativeElement.value;

    console.log(newTag);
  }

}
