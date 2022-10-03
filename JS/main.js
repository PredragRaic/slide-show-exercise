
const images = ["../IMG/1.jpg","../IMG/2.jpg","../IMG/3.jpg","../IMG/4.jpg", "../IMG/5.jpg"];
let i = 0;

function AutoChangeImage(){
    let img = (i < 5) ? i : i % 5;
    document.querySelector('.jo').src=images[img];
    i++;
    // var d;
    // for(d=0;d<5;d++){
    // //delay
    // }

    

        setTimeout(function(){
            AutoChangeImage();
        }, 1000);
    
    
}

window.onload=function(){
        AutoChangeImage();
    };