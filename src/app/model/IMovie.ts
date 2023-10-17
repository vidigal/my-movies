export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: BigInt[];
    id: BigInt;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: Number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: BigInt;
}