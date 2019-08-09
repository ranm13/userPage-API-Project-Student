class APIManager {
    constructor() {
        this.data = {}    
    }

    //Random number generator
    getRandomInt = (max, min=0) => (Math.floor(Math.random() * max) + min)
    
    getData = () => this.data

    loadData(){

        //Random User Generator API
        $.get('https://randomuser.me/api/?nat=gb,us,au&results=7', (apiData) => {
            const results = apiData.results
            const data = this.data
            data.user = {picture: results[0].picture.large,
            firstName: results[0].name.first,
            lastName: results[0].name.last,
            city: results[0].location.city,
            state: results[0].location.state,
            friends: []
            }
            for(let i = 1; i < 7; i++){
                data.user.friends.push({firstName: results[i].name.first, 
                lastName: results[i].name.last})
            }
          })
        
        //Random Quote Generator API
        $.get('https://api.kanye.rest', (apiData) => this.data.quote = apiData.quote)
        
        //Pokemon API
        $.get(`https://pokeapi.co/api/v2/pokemon/${this.getRandomInt(251, 1)}/`, (apiData) => {
            let name = apiData.name
            this.data.pokemon = {name: name, pic: apiData.sprites.front_default}
        })

        //Bacon Ipsum API
        $.get('https://baconipsum.com/api/?type=all-meat&paras=1', (apiData) => this.data.aboutMeat = apiData[0])
    }
}        