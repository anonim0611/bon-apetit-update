class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();

    }

    set clickEvent(event) {
        this._clickEvent = event();
        this.render();

    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

   

    
    

    render(){
        this.shadowDOM.innerHTML=
        `
        <style> 
        .search-container {
            max-width: 100%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: transparent;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 1px solid grey;
            font-weight: bold;
            background-color: white;
            border-radius: 20px;
        }
        
        .search-container > input:focus {
            outline: 0;
            border: 2px solid black;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: white;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: cornflowerblue;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: center;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        
        </style>
        
        <div id="search-container" class="search-container">
            <input class="form-control-plaintext" placeholder="Search Meals" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);