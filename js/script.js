console.log('Vue ok',Vue);

const { createApp } = Vue;

const app= createApp({
    name: 'MyCarousel',
    data(){
        return {
            destinations,
            currentIndex: 0
        }
    },

});

app.mount('#root'); 