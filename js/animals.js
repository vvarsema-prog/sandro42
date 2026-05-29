let sheetid = "1mxfm6BRg0OgEOOIZf1buEA5EKnacWdewODTpzRimtAs";
let base = `https://docs.google.com/spreadsheets/d/${sheetid}/gviz/tq`
let sheetname = "sheet1";
let query = encodeURIComponent("select *");
let url = `${base}?sheet=${sheetname}&tq${query}`;
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
                name: row.c[0]?.v,
                about: row.c[1]?.v,
                image: row.c[2]?.v,
            }
            createanimal(animal);
        });
    })
};
//jsData.table.rows.array.forEach(element => {
    
//});
function createanimal (animal){
let article = document.createElement("article");
    let div = document.createElement("div");
    let img= document.createElement("img");
    let section = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    
    
    img.setAttribute("src","assets/img/"+animal.image,);
    div.appendChild(img);

    h2.textContent = animal.name;
    p.textContent = animal.about;

    section.appendChild(h2);
    section.appendChild(p);

    article.appendChild(div);
    article.appendChild(section);

    article.classList = "flex"
   

    document.getElementById("aboutanmls").appendChild(article);
}




let article;
// for(i = 0; i < aboutanl.length; i++){
//     console.log(
//         aboutanl[i].name,
//         aboutanl[i].about,
//         aboutanl[i].image,
//     );
    






