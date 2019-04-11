import { Component, OnInit } from '@angular/core';
import { Album } from './albums/album.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'my-angular-albums';
    albumsArray: Album[];
    titleCounter = 1;
    numbers: number[];
    selectedAlbum: string;

    parentFunctionHandler(album) {
        this.selectedAlbum = `Album selected: ${album.id}, ${album.album_name}`;
    }
}
