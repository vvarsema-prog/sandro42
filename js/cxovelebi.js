//  let aboutanimals = [
//      "assets/img/cow1.jpg",
//      "assets/img/dog1.jpg",
//      "assets/img/donke.jpg",
//      "assets/img/lion1.jpg",
//  ];
let animal = [
    "assets/audio/caw.wav",
    "assets/audio/dog.wav",
    "assets/audio/saddonkey.wav",
    "assets/audio/lion.wav"
]

//  let cont = document.getElementById("aboutanimals");

//      for(i = 0; i < aboutanimals.length; i++){
//          let img = document.createElement("img");
//          img.src = aboutanimals[i];
//          img.width =200;
//          cont.appendChild(img);
//      }

let sheetid = "1mxfm6BRg0OgEOOIZf1buEA5EKnacWdewODTpzRimtAs";
let base = `https://docs.google.com/spreadsheets/d/${sheetid}/gviz/tq`
let sheetname = "sheet1";
let query = encodeURIComponent("select *");
let url = `${base}?sheet=${sheetname}&tq=${query}`;
document.addEventListener('DOMContentLoaded',init);
function init(){
    //console.log("ready");
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        console.log(rep);
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
        let rows = jsData.table.rows
        rows.forEach(row => {
            let animal = {
              
                image: row.c[2]?.v,
            }
            cxoveli(animal);
        });
    })
};
function cxoveli(animal){

    let article = document.createElement("article");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let section = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    img.width = 200;

    img.src = "assets/img/" + animal.image;

    // აუდიო
    let audio = new Audio("assets/audio/" + animal.sound);

    img.addEventListener("click", () => {
        audio.play();
    });

    div.appendChild(img);

    h2.textContent = animal.name;
    p.textContent = animal.about;

    section.appendChild(h2);
    section.appendChild(p);

    article.appendChild(div);
    article.appendChild(section);

    article.classList.add("flex");

    document.getElementById("cxoveli").appendChild(article);

}