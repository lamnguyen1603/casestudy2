import {Song} from "../mode/song";

export class ManagementSong {
    listSong: Song[] = [];

    add(song: Song): void {
        this.listSong.push(song)
    }
    findAll(){
        return this.listSong;
    }

    remove(id : number) {
        let index = this.findById(id);
        if(index === -1) {
            console.log("--not found---")
        }else {
            this.listSong.splice(index,1)
        }

    }
    findById(id : number) {
        for (let i = 0 ; i < this.listSong.length;i++) {
            if(this.listSong[i].id === id) {
                return i
            }
        }
        return -1;
    }
    checkId(id: number){
        for (const song of this.listSong) {
            if(id === song.id){
                return true;
            }
        }
        return false;
    }
    edit(id: number, t: Song) {
        let index = this.findById(id);
        this.listSong[index] = t
    }




    showAllSong() {
        let strSong =``;
        for (let i = 0; i < this.listSong.length; i++) {
            strSong += ` ${i + 1} Id:  ${this.listSong[i].id}. Name: ${this.listSong[i].nameSong} performingSinger : ${this.listSong[i].performingSinger}  creator:  ${this.listSong[i].creator}  releaseDate : ${this.listSong[i].releaseDate}\n`
        }
        return strSong;
    }



    searchSong(name: string) {
        return this.listSong.filter(element => element.nameSong.toLowerCase().includes(name.toLowerCase()))
    };
}