export class Song {
    private _id! : number ;
    private _nameSong! : string;
    private _performingSinger! : string;
    private _creator! : string;
    private _releaseDate! : string;

    constructor(id: number, nameSong: string, performingSinger: string, creator: string, releaseDate: string) {
        this._id = id;
        this._nameSong = nameSong;
        this._performingSinger = performingSinger;
        this._creator = creator;
        this._releaseDate = releaseDate;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameSong(): string {
        return this._nameSong;
    }

    set nameSong(value: string) {
        this._nameSong = value;
    }

    get performingSinger(): string {
        return this._performingSinger;
    }

    set performingSinger(value: string) {
        this._performingSinger = value;
    }

    get creator(): string {
        return this._creator;
    }

    set creator(value: string) {
        this._creator = value;
    }

    get releaseDate(): string {
        return this._releaseDate;
    }

    set releaseDate(value: string) {
        this._releaseDate = value;
    }
}