import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];

    @Output()
    albumSelected: EventEmitter<Album> = new EventEmitter<Album>();

    constructor() {}

    ngOnInit(): void {
        this.albumsArray = ALBUMS;
    }

    parentFunctionHandler(album) {
        alert(
            'Album ' +
                album.album_name +
                ' was sent from the album card component'
        );

        this.albumSelected.emit(album);
    }
}
