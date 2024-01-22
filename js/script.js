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
    methods: {
        goToThePrev() {
            const firstIndex = this.destinations.length -1;
            if(this.currentIndex === 0) this.currentIndex = firstIndex;
            else this.currentIndex--;
        },
        goToTheNext(){
            const lastIndex = this.destinations.length -1;
            if(this.currentIndex === lastIndex) this.currentIndex = 0;
            else this.currentIndex++;
        }
    }
});

app.mount('#root'); 