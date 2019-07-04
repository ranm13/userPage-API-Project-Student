class Renderer {
    
    handelbarFunc(templateId, objToTemplate, appendToPlace) {
        const source = $(templateId).html();
        const template = Handlebars.compile(source)
        const newHTML = template(objToTemplate);
        $(appendToPlace).append(newHTML);
    }

    _renderUsers(users) {
        this.handelbarFunc("#user-template", users, ".user-container" )
    }

    _renderFriends(users) { 
        this.handelbarFunc("#user-friends-template", users, ".friends-container" )
    }

    _renderQuote(quoteInfo) {
        this.handelbarFunc("#quote-template", quoteInfo, ".quote-container" )
    }

    _renderPokemon(pokemonInfo) { 
        this.handelbarFunc("#pokemon-template", pokemonInfo, ".pokemon-container" )
    }

    _renderMeat(meatText) { 
        this.handelbarFunc("#meat-template", meatText, ".meat-container" )
    }

    render(data){
        this._renderUsers(data.user)
        this._renderFriends(data.user)
        this._renderQuote(data)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data)
    }
}