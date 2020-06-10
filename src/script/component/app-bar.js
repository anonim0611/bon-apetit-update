import './jumbo-tron.js';
import './search-bar.js';
class AppBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML=`

        <style>
        
        
        * {
            margin: 0;
            padding: 5px;
            box-sizing: border-box;
            
        }
        
        nav{
            background-color : red;
            position: sticky;
            top: 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            
        }

        nav li{
            display: inline;
            list-style-type: none;
            margin-right: 5px;
            text-align: center;
            
        }

        nav a{
            font-size: 15px;
            font-weight: 400;
            text-decoration: none;
            color : black;
        }

        nav a:hover {
            font-size:18px;
            font-weight: 400;
            text-decoration: none;
            color: black;
        }

        nav ul{
            width: -moz-fit-content;
            width: -webkit-fit-content;
            width: fit-content;
            margin: auto;
        }

               

        </style>        
        
        <nav> 
        <ul>
        <li><a href="#jumbotron">Home</a></li>
        <li><a href="#search-container">Pencarian</a></li>
        </ul>
              
        </nav>
               
        `;
    
         
        
    }
}

customElements.define("app-bar", AppBar);