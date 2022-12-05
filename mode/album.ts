import {Song} from "./song";
import {ManagementSong} from "../service/managementSong";

export class Album extends ManagementSong{
    private _id : number;
    private _nameAlbum : string;
    listSong: Song[] = [];

    constructor(id: number, nameAlbum: string) {
        super();
        this._id = id;
        this._nameAlbum = nameAlbum;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameAlbum(): string {
        return this._nameAlbum;
    }

    set nameAlbum(value: string) {
        this._nameAlbum = value;
    }
    findAllSong() {
        let strAlbum = ``
        for (let i = 0; i < this.listSong.length; i++) {
            strAlbum += ` ${i + 1} Id: , ${this.listSong[i].id}, Name: ${this.listSong[i].nameSong} ,performingSinger : ${this.listSong[i].performingSinger}  ,creator:  ${this.listSong[i].creator}  ,releaseDate : ${this.listSong[i].releaseDate}\n`
        }
        return strAlbum;
    }
}