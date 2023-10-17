import { IMovie } from "./IMovie";

export interface IFavoriteRequest {
    page: BigInt;
    results: IMovie[];
    total_pages: BigInt;
    total_results: BigInt;
}