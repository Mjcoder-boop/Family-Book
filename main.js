var images = [
    "Dad.jpg",
    "Mom.jpg",
    "Me.jpg"
];

var names = [
"Manish Jain",
    "Nidhi Jain",
    "Manaansh Jain"
];

var i = 0;

function next(){
    document.getElementById("picture").src=images[i];
    document.getElementById("labelperson").innerHTML=names[i];
    i++;
}
