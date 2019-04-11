export interface Album {
    id: number;
    artist: string;
    album_name: string;
    genre: string;
    price: number;
    currency?: string;
    on_sale: boolean;
    year: number;
    release_date: string;
    recording_location: string;
    duration: string;
    url: string;
    tracks?: Track[];
}

export interface Track {
    id: number;
    track_number: number;
    title: string;
    length: string;
}
