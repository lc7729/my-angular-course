import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumListComponent },
    { path: '**', component: NotfoundComponent, pathMatch: 'full' },
    { path: 'albums/:id', component: AlbumDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
