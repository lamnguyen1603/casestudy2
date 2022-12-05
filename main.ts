import {ManagementAlbum} from "./service/managementAlbum";
import {Song} from "./mode/song";
import {Album} from "./mode/album";
import {ManagementSong} from "./service/managementSong";

let readlineSync = require('readline-sync');
let favoriteAlbums = new ManagementAlbum();
let favoriteSong = new ManagementSong();

let song1 = new Song(1, "My Love", "Westlife", "Westlife", "2000");
let song2 = new Song(2, "Until you ", "Shayne Ward", "Shayne Ward", "23/12/2010");
let song3 = new Song(3, "I lay my love on you", "Westlife", "Westlife", "3/2001");
let song4 = new Song(4, "Cầu vồng khuyết", "Tuấn Hưng", "Minh Khang", "2008");
let album1 = new Album(1, "album1");
let tuanHung = new Album(2, "album2");
favoriteAlbums.add(album1);
favoriteAlbums.add(tuanHung)
favoriteSong.add(song1);
favoriteSong.add(song2);
favoriteSong.add(song3);
favoriteSong.add(song4);
album1.add(song1);
album1.add(song2);
tuanHung.add(song3);
tuanHung.add(song4)



function searchShow(){
    let menuSearch = `
    1.show 
    2.search by album name.
    3.search by song name
    0.Exit`
    let choice = -1;
    do {
        console.log(menuSearch)
        choice = +readlineSync.question("Enter choice  :")
        switch (choice) {
            case 1 :
                displayAll()
                break;
            case 2 :
                searchNameAlbum()
                break;
            case 3:
                searchNameSong()
                break;
            case 0:
                break;

        }
    }while (choice !==0)
}

function displayAll() {
    console.log("--Show Album--");
    console.log(favoriteAlbums.findAll()

    )
}

function menuAdd() {
    let addMenu = `
    1.Add Album
    2.Add Song
    0.Exit`
    let choice = -1;
    do {
        choice = +readlineSync.question("Enter choice  :")
        console.log(addMenu)
        switch (choice) {
            case 1:
                addAlbum()
                break;
            case 2 :
                addSong()
                break;
            case 0 :
                break;

        }
    } while (choice !== 0)
}


function addAlbum() {
    let id = +readlineSync.question("Enter id: ")
    if (id !== 0) {
        if (favoriteAlbums.findById(id) === -1) {
            let nameAlbum;
            do {
                console.log("---Album name cannot be empty---")
                nameAlbum = readlineSync.question("Name album: ")
            } while (nameAlbum === '')
            favoriteAlbums.add(new Album(id, nameAlbum))
            console.log("Create success")
        }
        console.log(favoriteAlbums.findById(id))
        if (favoriteAlbums.checkId(id)) {
            console.log("--ID already in use--")
            addAlbum()
        } else {
            addAlbum()
        }

    } else {
        addAlbum()
    }


}


function addSong() {
    console.log('----add new song to album----');
    let id = +readlineSync.question("Enter id: ");
    if (id !== 0) {
        if (favoriteAlbums.findById(id) === -1) {
            let nameSong;
            do {
                console.log("---Song name cannot be empty---")
                nameSong = readlineSync.question("Name song: ")
            } while (nameSong === '')
            let performingSinger = readlineSync.question("add performingSinger :");
            let creator = readlineSync.question("add creator :");
            let releaseDate = readlineSync("add releaseDate :");
            let song = new Song(id, nameSong, performingSinger, creator, releaseDate);
            favoriteSong.add(song);
            console.log("Create success")
        }
        console.log(favoriteSong.findById(id))
        if (favoriteSong.checkId(id)) {
            console.log("--ID already in use--")
            addSong()
        } else {
            addSong()
        }

    } else {
        addSong()
    }


}


function searchNameAlbum() {
    let searchAlbums = readlineSync("Enter the name of the album you want to find :");
    console.log(favoriteAlbums.searchAlbum(searchAlbums));
}

function searchNameSong() {
    let searchSong = readlineSync("Enter the name of the song you want to find :");
    console.log(favoriteSong.searchSong(searchSong));
}

function removeSong() {
    let RemoveAlbum = `
    Are you sure you want to delete?
    1.Yes
    0.No`
    let choice = -1;
    do {
        console.log(RemoveAlbum)
        choice = +readlineSync.question("Enter choice : ")
        switch (choice) {
            case 1 :
                songRemove()
                break;
            case 0:
                break;

        }
    } while (choice !== 0);

}


function removeAlbum() {
    let RemoveAlbum = `
    Are you sure you want to delete?
    1.Yes
    0.No`
    let choice = -1;
    do {
        console.log(RemoveAlbum)
        choice = +readlineSync.question("Enter choice : ")
        switch (choice) {
            case 1 :
                albumRemove()
                break;
            case 0:
                break;

        }
    } while (choice !== 0);

}


function albumRemove() {
    let check = +readlineSync.question("enter id album");
    favoriteAlbums.remove(check);

}

function songRemove() {
    let check = +readlineSync.question("enter id album");
    favoriteSong.remove(check);
}
function menuEdit() {
    let addMenu = `
    1.Edit album
    2.Edit song
    0.Exit`
    let choice = -1;
    do {
        choice = +readlineSync.question("Enter choice  :")
        console.log(addMenu)
        switch (choice) {
            case 1:
                renameAlbum()
                break;
            case 2 :
                renameSong()
                break;
            case 0 :
                break;

        }
    } while (choice !== 0)
}

function menu() {
    let menu = `
    1.Show album
    2.More albums and More songs
    3.Edit album name and edit song title
    4.Delete Album 
    5.Delete Song
    0.Exit`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question("Enter choice :")
        switch (choice) {
            case 1 :
                searchShow()
                break;
            case 2:
                menuAdd()
                break;
            case 3 :
                menuEdit()
                break;
            case 4:
                removeAlbum()
                break;
            case 5:
                removeSong()
                break;


        }
    } while (choice !== 0)
}
menu()

function renameAlbum() {
    let id = +readlineSync.question(` Enter ID Album :`)
    let idUpdate = favoriteAlbums.findById(id);
    if (idUpdate == -1) {
        console.log(` ---ID not Found---  `)
    } else {
        let id = +readlineSync.question(` Enter your ID : `);
        let name = readlineSync.question(' Enter your Name : ');

        favoriteAlbums.edit(id, new Album(id, name))
    }
}

function renameSong() {
    let id = +readlineSync.question(` Enter ID Album :`)
    let idUpdate = favoriteSong.findById(id);
    if (idUpdate == -1) {
        console.log(` ---ID not Found---  `)
    } else {
        let id = +readlineSync.question(` Enter your ID : `);
        let name = readlineSync.question(' Enter your Name : ');
        let performingSinger = readlineSync.question("add performingSinger :");
        let creator = readlineSync.question("add creator :");
        let releaseDate = readlineSync("add releaseDate :");

        favoriteSong.edit(id, new Song(id, name,performingSinger,creator,releaseDate))
    }
}

function showSongOnAlbum(id: number) {
    let arr: Album[] = favoriteAlbums.findAll();
    if (arr.length == 0) {
        console.log(`  ---This Album is Empty !! ----  `)
    } else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].id == id){
                console.log(arr[i].findAllSong())
            }
        }
    }
}
