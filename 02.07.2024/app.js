const { createApp } = Vue

createApp({
    data(){
        return {
            name: "Songül",
            surname: "Gürel",
            okul: "İstanbul Gelişim Üniversitesi",
            bolum: "Bilgisayar Programcılığı", 
            age: 19,
            sinav: {
                gectimi: true,
                not: 65,
                harfnot: "CB",
                a:5,
                b: 8,
                website:"http://www.youtube.com"
            },
            diller: ["C", "C++", "C#", "Python", "JavaScript", "Java", "HTML", "CSS"]
        }
    },
    methods:{
        hesapla: function(isim, soyisim, gun_durum){
            return "Merhaba " + this.name +" "+ this.surname +" İyi " + gun_durum
        },
    }
   
}).mount("#ilk-uygulama");