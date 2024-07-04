const { createApp } = Vue

createApp({
    data(){
        return {
            a: 5,
            b: 10,
            c: 4,
            x: 50,
            y: 14,
            z: 8
        }
    },
    methods:{
        topla: function(){
            return this.a + this.b;
        },
        cikarma: function(){
            return this.x - this.a;
        },
        carpma: function(){
            return this.y * this.z;
        },
        bolme: function(){
            return this.x / this.c;
        }
    }
}).mount("#matematikselislemler");