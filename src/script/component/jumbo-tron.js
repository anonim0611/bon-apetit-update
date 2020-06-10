class JumboTron extends HTMLElement{
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
        .jumbotron {
            font-size: 20px;
            padding: 20px;
            text-align: center;
            color: black;  
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background: url('/src/images/bgs.jpg') no-repeat center center;
            
        } 
        
        h1{
            color: white;
            font-size: 60px;
            text-align: center;
            font-family: Snell;
            font-weight: bold;
        }

        p{
            
            color : white;
            text-align: center;
        }

        hr{
            width : 80px;
        }

        </style>  
        
               
        <div class="jumbotron">
            <h1 class="display-4">Bon, Appetit !</h1>
            <hr>
            <p class="lead">Open Daily Monday To Sunday 08.00-16.00 AM</p>
            <p class="lead">Contact immediately (022) 78656899</p>
            
        </div>   
               
        `;
         
        
    }
}

customElements.define("jumbo-tron", JumboTron);