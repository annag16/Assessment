const url ='products.json';

fetch("products.json")
.then(function(response){
   return response.json();
})

let products = JSON
let output ="";
for(let item of products){
    output += 
        <div class="products">
            <img src="" alt=""></img>
            <p class="name"></p>
            <p class="description"></p>
            <p class="price"></p>
                <span></span>
                <span>$dollar;</span>
        </div>
    ;
}

    document.querySelectorAll("products").innerHTML = output;