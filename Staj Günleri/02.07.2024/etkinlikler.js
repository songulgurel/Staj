
const { createApp } = Vue

createApp({
    data(){
        return {
            yas: 19,
            x:0,
            y:0,
            isim: '',
            soyisim: '',
            a:0,
            b:0,
        }
    },
    methods: {
        ekle: function(){
            this.yas++;
        },
        cikar: function(){
            this.yas--;
        },
        ekle10: function(yil){
            this.yas+=yil;
        },
        cikar10: function(yil){
            this.yas-=yil;
        },
        tikla: function(){
            alert("Sayfamız geçici bir süreliğine hizmet vermemektedir.");
        },
        updateXY(event){
            console.log(event);
            
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        kullaniciAdi: function(){
            console.log("Kullanıcı adı girili.");
        },
        sifre: function(){
            console.log("Şifre girili.");
        }
       },
    computed: {
        yeniA: function(){
            console.log("A değeri kontrol edildi.");
            return this.a + this.yas;
        },
        yeniB: function(){
            console.log("B değeri kontrol edildi.");
            return this.b + this.yas;
        }
    }
}).mount("#etkinlik");
