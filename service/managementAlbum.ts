import {Album} from "../mode/album";

export class ManagementAlbum {
    listAlbum : Album[] = [];

    add(album : Album) {
        this.listAlbum.push(album);
    }

    edit(id: number, t: Album) {
        let index = this.findById(id);
        this.listAlbum[index] = t
    }


    remove(id : number) {
        let index = this.findById(id);
        if(index === -1) {
            console.log("--not found---")
        }else {
            this.listAlbum.splice(index,1)
        }

    }


    findById(id : number) {
        for (let i = 0 ; i < this.listAlbum.length;i++) {
            if(this.listAlbum[i].id === id) {
                return i
            }
        }
        return -1;
    }

    findAll()  {
        return this.listAlbum;
    }
    searchAlbum(name: string) {
        return this.listAlbum.filter(element => element.nameAlbum.toLowerCase().includes(name.toLowerCase()))
    };

    checkId(id: number){
        for (const album of this.listAlbum) {
            if(id === album.id){
                return true;
            }
        }
        return false;
    }

}