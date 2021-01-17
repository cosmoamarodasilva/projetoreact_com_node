export function mostrar_eletros(produtos){

let elementos= document.getElementsByClassName("box_produtos");
console.log(elementos);
for(var i=0; i<elementos.length; i++){
    console.log(elementos[i].id);
    if (produtos==elementos[i].id)
        elementos[i].style="display:inline-block";
    else
        elementos[i].style="display:none";
}
}
export let mostrar_todos=()=>{
    let elementos= document.getElementsByClassName("box_produtos");
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        elementos[i].style="display:inline-block";    
}
}

export let destaque = (imagem)=>{
    console.log(destaque)
    if (imagem.width==450)
        imagem.width=400;
    else
    imagem.width=450;
}
