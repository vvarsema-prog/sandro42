let housekeeper = {
    name: "dali",
    exp: "30",
    favoriteroomlageba: ["48", "samzareulo"]
}

console.log(housekeeper.name+"s uyvars shemdegi otaxebis dalageba: "+housekeeper.favoriteroomlageba);

// let bellboy ={
//     name: "dali",
//     exp: "30",
//     favoriteroomlageba: ["48", "samzareulo"],
//     gamodzaxeba: function () {
//         alert("movedi")
//     }
// }
// let bellboy2 ={
//     name: "givi",
//     exp: "302",
//     favoriteroomlageba: ["484", "samzareuloi"]
// }
function Housekeeper (housekeepername,housekeeperexperance, housekeeperoom) {
    this.name = housekeepername;
    this.exp = housekeeperexperance;
    this.favoriteroomlageba = housekeeperoom;
}
let housekeeper2 = new Housekeeper("dali",302,30);
// console.log(housekeeper2);

document.addEventListener('keydown',function (e) {
    
})
