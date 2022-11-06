function counter(){
   firstResult=0
for (i=1;i<2;i++){
   //console.log(firstResult,i)
   let elementOne = firstResult + '-' + i;
   document.getElementById("countertext").innerHTML= elementOne;
}
for(j=1;j<2;j++){
    //console.log(firstResult,j,i)
    let elementTwo = firstResult + '-'+j+'-'+i;
    document.getElementById("countertext2").innerHTML= elementTwo;
    for(k=3;k<4;k++){
//console.log(firstResult,j,i,k)
let elementThree = elementTwo +'-'+ k;
document.getElementById("countertext3").innerHTML= elementThree;
for(l=4;l<5;l++){
//console.log(firstResult,j,i,l,k)}
let elementFour = elementTwo +'-'+ k+'-'+l;
document.getElementById("countertext4").innerHTML= elementFour;

}
}

}

}
