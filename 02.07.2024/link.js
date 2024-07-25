const { createApp } = Vue

createApp({
    data(){
        return {
            eposta:"gureelsongul@gmail.com",
            website: "http://gokhunyayla.com",
            websiteTag: '<a href="https://webtangular.com">tag eklenerek hazırlanmış website</a>'
        }
    },
    methods:{

    }
}).mount("#link");