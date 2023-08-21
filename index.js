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
let percobaan=0;
document.getElementById("submit3").onclick=function(){
    percobaan++;
    tebakan=document.getElementById("tebakan").value;
    if (tebakan==tepat) {
        document.getElementById("ketepatan").innerHTML="Selamat "+nama+" ! Tebakan anda "+tebakan+" Adalah Benar"
        document.getElementById("percobaan").innerHTML="Anda sudah melakukan "+percobaan+" kali percobaan";
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
        document.getElementById("p6").innerHTML='<a href="https://www.instagram.com/lcurents/" style="color: rgb(189, 0, 0);" target="_blank">Klik disini</a>'
    }
}

//ternary operation=shortcut untuk if/else
let kucing;
document.getElementById("submit5").onclick=function(){
    //kondisi?benar:salah
    kucing=document.getElementById("kucing").value;
    kucing=="Yes"?document.getElementById("p7").innerHTML="Kamu Suka Kucing":document.getElementById("p7").innerHTML="Kamu Tidak Suka Kucing"
}

//temperatur suhu
let suhu,tampil,Celcius,Fahrenheit,Kelvin;
document.getElementById("submit6").onclick=function(){
    Celcius=document.getElementById("Celcius");
    Fahrenheit=document.getElementById("Fahrenheit");
    Kelvin=document.getElementById("Kelvin");
    //harus di convert menjadi float
    //alasan:belum diketahui
    suhu = parseFloat(document.getElementById("temperatur").value);
    if(Celcius.checked){
        tampil=suhu.toLocaleString(undefined,{style:"unit",unit:"celsius"});
        document.getElementById("suhu").innerHTML=tampil;
    }else if(Fahrenheit.checked){
        tampil=suhu.toLocaleString(undefined,{style:"unit",unit:"fahrenheit"});
        document.getElementById("suhu").innerHTML=tampil;
    }  
}

//buah dengan menggunakan array
let buah=[];
let fruit;
//tambah buah
document.getElementById("addbuah").onclick=function(){
    //penampilan objek
    document.getElementById("namabuah").style.display="block"
    document.getElementById("add").style.display="block"
    document.getElementById("del").style.display="none"
    //untuk menambah dari index terakhir
    document.getElementById("push").onclick=function(){
        fruit=document.getElementById("buah").value;
        buah.push(fruit);
        tampil(buah);
    }
    //untuk menambah dari index 0
    document.getElementById("unshift").onclick=function(){
        fruit=document.getElementById("buah").value;
        buah.unshift(fruit);
        tampil(buah);
    }
    function tampil(buah) {
        document.getElementById("tampilbuah").innerHTML = buah.join(", ");
        return;
      }
}
//hapus buah
document.getElementById("delbuah").onclick=function(){
    //penampilan objek
    document.getElementById("namabuah").style.display="block"
    document.getElementById("del").style.display="block"
    document.getElementById("add").style.display="none"
    //untuk menambah dari index terakhir
    document.getElementById("shift").onclick=function(){
        fruit=document.getElementById("buah").value;
        buah.shift(fruit);
        tampil(buah);
    }
    //untuk menambah dari index 0
    document.getElementById("pop").onclick=function(){
        fruit=document.getElementById("buah").value;
        buah.pop(fruit);
        tampil(buah);
    }
    function tampil(buah) {
        document.getElementById("tampilbuah").innerHTML = buah.join(", ");
        return;
      }
}

