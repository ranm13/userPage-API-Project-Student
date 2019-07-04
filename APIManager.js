class APIManager {
    constructor() {
        this.data = {}    
    }

    getAjax = (url, func) => {
        $.ajax({
            method: "GET",
            url: url,
            success: func
          })
    }
    
    getRandomInt = (max, min=0) => (Math.floor(Math.random() * max) + min)
    
    getData = () => this.data

    loadData(){

        //Random User Generator API
        this.getAjax('https://randomuser.me/api/?nat=gb,us,au&results=7', (apiData) => {
            const results = apiData.results
            const data = this.data
            const upperFirst = this.upperCaseFirstLetter
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
        this.getAjax('https://api.kanye.rest', (apiData) => {
            this.data.quote = apiData.quote
          })
        
        //Pokemon API
        this.getAjax(`https://pokeapi.co/api/v2/pokemon/${this.getRandomInt(251, 1)}/`, (apiData) => {
            const data = this.data
            let name = apiData.name
            data.pokemon = {name: name, pic: apiData.sprites.front_default}
        })

        //Bacon Ipsum API
        this.getAjax('https://baconipsum.com/api/?type=all-meat&paras=1', (apiData) => {
            this.data.aboutMeat = apiData[0]
        })
    }
}        