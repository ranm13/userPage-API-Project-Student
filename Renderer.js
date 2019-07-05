class Renderer {
    
    handelbarFunc(templateId, objToTemplate, appendToPlace) {
        const source = $(templateId).html();
        const template = Handlebars.compile(source)
        const newHTML = template(objToTemplate);
        $(appendToPlace).append(newHTML);
    }

    _renderUsers(users) {
        $(".user-container").empty()
        this.handelbarFunc("#user-template", users, ".user-container" )
    }

    _renderFriends(users) { 
        $(".friends-container").empty()
        this.handelbarFunc("#user-friends-template", users, ".friends-container" )
    }

    _renderQuote(quoteInfo) {
        $(".quote-container").empty()
        this.handelbarFunc("#quote-template", quoteInfo, ".quote-container" )
    }

    _renderPokemon(pokemonInfo) { 
        $(".pokemon-container").empty()
        this.handelbarFunc("#pokemon-template", pokemonInfo, ".pokemon-container" )
    }

    _renderMeat(meatText) { 
        $(".meat-container").empty()
        this.handelbarFunc("#meat-template", meatText, ".meat-container" )
    }

    renderLoadedData(loadedData){
        $(".dropup-content").empty()
        this.handelbarFunc("#dropup-content-template", loadedData, ".dropup-content" )
    }

    render(data){
        this._renderUsers(data.user)
        this._renderFriends(data.user)
        this._renderQuote(data)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data)
    }
}