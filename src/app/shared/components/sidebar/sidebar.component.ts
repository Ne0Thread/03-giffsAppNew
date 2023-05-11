import { Component } from '@angular/core';
import { SearchBoxComponent } from 'src/app/gifs/components/search-box/search-box.component';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }
  searchTag(tag:string):void{
    this.gifsService.searchTag(tag);
  }

}
