import css from "bootstrap/dist/css/bootstrap.min.css";
class MealItem extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>

        ${css}

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

               :host {
                   display: block;
                   margin-bottom: 18px;
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .card-image {
                   width: 100%;
                   max-height: 200px;
                   object-fit: cover;
                   object-position: center;
               }
              
                                   

               .card{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                padding : 20px;
                margin-top : 10px;  
            }
    
            .container-column{
                display: flex;
                max-width: 50%;
                margin: 0 auto;
                text-align: left;
                flex-direction: row;
                justify-content: center;
            }
            
            .container-row{
                display: flex;
            }
    
            .card-flex{
                padding : 20px;
                margin : 10px;  
            }

            .col-sm-3{
                font-weight: bold;
                margin-top: 5px;
            }

            .col-sm-9{
            text-align: justify;
            }

            
           </style>
           
           <div class="container-column">
           <div class="container-row card-flex">
                <div class="card">  
                    <div class="card-body">
                        <img class="card-image" src="${this._meal.strMealThumb}" alt="Fan Art">
                            <div >
                                <h2>${this._meal.strMeal}</h2>
                                <hr>
                                <dl class="row">                                    
                                        <dt class="col-sm-3">Area</dt>
                                        <dd class="col-sm-9">${this._meal.strArea}</dd>
                                   
                                        <dt class="col-sm-3">Instruction</dt>
                                        <dd class="col-sm-9">${this._meal.strInstructions}</dd>

                                        <dt class="col-sm-3">Receipt</dt>
                                        
                                        
                                        <div class="coll-sm-12">
                                        <dd>
                                            <a href="${this._meal.strYoutube}" class="btn btn-danger"> <i class="glyphicon glyphicon-play"></i> Receipt On Youtube</a>
                                        </dd>
                                        </div>
                                        
                                        
                                                             
                            </dl>  
                            </div>
                            </div>
                    </div>
                </div>
                </div>`;

    }

}

customElements.define("meal-item", MealItem);
