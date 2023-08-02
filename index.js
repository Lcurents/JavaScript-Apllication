//dasar dari naikturun angka
let angka=0;
document.getElementById("angka").innerHTML=angka;

//angkarandom
let tebakan,tepat;
tepat=Math.round(Math.random()*100);

//identitas
let nama,umur,pend,sems;
nama="anda";
document.getElementById("submit1").onclick=function(){
    nama=document.getElementById("nama").value;
    umur=document.getElementById("umur").value;
    pend=document.getElementById("pendidikan").value;
    sems=document.getElementById("semester").value;
    let check=Boolean(pend)&&Boolean(sems);
    sems=Number(sems);
    sems+=1;
    document.getElementById("p1").innerHTML = "Hallo "+ nama;
    document.getElementById("p2").innerHTML = "Umurmu masih "+ umur;
    document.getElementById("p3").innerHTML = "Pendidikan terakhir "+ pend;
    document.getElementById("p4").innerHTML = "Selamat sekarang "+nama+" masuk ke Semester "+ sems;
    document.getElementById("p5").innerHTML = "Data "+check;
}

//pythagoras
let a,b,c;
document.getElementById("submit2").onclick=function(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("hasil").innerHTML = "Hasilnya adalah :"+c;
}

//incrase+decrase
document.getElementById("kurang").onclick=function(){
    angka-=1;
    document.getElementById("angka").innerHTML=angka;
}
document.getElementById("reset").onclick=function(){
    angka=0;
    document.getElementById("angka").innerHTML=angka;
}
document.getElementById("tambah").onclick=function(){
    angka+=1;
    document.getElementById("angka").innerHTML=angka;
}

//tebakangka
document.getElementById("submit3").onclick=function(){
    tebakan=document.getElementById("tebakan").value;
    if (tebakan==tepat) {
        document.getElementById("ketepatan").innerHTML="Selamat "+nama+" ! Tebakan anda "+tebakan+" Adalah Benar"
    }else if(tebakan>tepat){
        document.getElementById("ketepatan").innerHTML="Tebakan anda "+tebakan+" Terlalu Besar"
    }else{
        document.getElementById("ketepatan").innerHTML="Tebakan anda "+tebakan+" Terlalu Kecil"
    }
}

//CheckboxIG
document.getElementById("submit4").onclick=function(){
    if(checkbox.checked){
        document.getElementById("p6").innerHTML= "Terima Kasih"
    }else{
        document.getElementById("p6").innerHTML="Okeeh :D"
    }
}