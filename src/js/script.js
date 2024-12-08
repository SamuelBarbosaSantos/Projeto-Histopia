let imagens=[
    'src/assets/fotopromo 1.png',
    'src/assets/fotopromo 1.png',
    'src/assets/fotopromo 1.png'
]

let index =0;
let time =3000;

function slideShow(){
    document.getElementById("image").src=imagens[index];
    index++;
    if(index == imagens.length){ index =0}
    setTimeout("slideShow()",time)
}

slideShow();