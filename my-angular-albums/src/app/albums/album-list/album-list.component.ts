import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albums: Album[];
    //albums: Observable<Album[]>;

    @Output()
    albumSelected: EventEmitter<Album> = new EventEmitter<Album>();

    constructor(private albumService: AlbumService) {}

    getAlbums() {
        //this.albums = this.albumService.getAlbums();
        this.albumService.getAlbums().subscribe(
            (albums: Album[]) => {
                this.albums = albums;
            },
            error => console.log('Error: ', error)
        );
    }

    ngOnInit(): void {
        //this.albums = ALBUMS;
        this.getAlbums();
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
