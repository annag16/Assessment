const url ='products.json';

function getProducts(){
    const products = {
        "product":[
        {
            "image":"images\tumbler1.png",
            "name":"Tumbler1",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "100"
        },
        {
            "image":"images\tumbler2.png",
            "name":"Tumbler2",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "120"
        },
        {
            "image":"images\tumbler3.png",
            "name":"Tumbler3",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "150"
        },
        {
            "image":"images\tumbler4.png",
            "name":"Tumbler4",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "200"
        },
        {
            "image":"images\tumbler5.png",
            "name":"Tumbler5",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "250"
        },
        {
            "image":"images\tumbler6.png",
            "name":"Tumbler6",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "280"
        },
        {
            "image":"images\tumbler7.png",
            "name":"Tumbler7",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "300"
        },
        {
            "image":"images\tumbler8.pngg",
            "name":"Tumbler8",
            "description": "Lorem Ipsum is simply dummy text",
            "price": "310"
        },
        
        ]
    }

    let itemsContainer = document.getElementById('productssContainer');
    let cart = document.getElementById('modal-content');
    for(let i=0; i<Object.values(products)[0].length; i++){
        let img = document.createElement('img');
        let imgString = Object.values(products)[0][i].image;
        img.src = imgString;

        let modalDiv = document.createElement('div');
        modalDiv.className = 'items';
        let div = document.createElement('div');
        div.className = 'items';

        let name = document.createElement('h4');
        name.className = 'name';
        let modalName = document.createElement('h4');
        modalName.className = 'name';
        let name_text = document.createTextNode(Object.values(products)[0][i].name);
        name.append(name_text);
        let name_text_modal = document.createTextNode(Object.values(products)[0][i].name);
        modalName.append(name_text_modal);

        let description = document.createElement('p');
        description.className = 'description';
        let modalDescription = document.createElement('p');
        modalDescription.className = 'description';
        let description_text = document.createTextNode(Object.values(products)[0][i].description);
        description.append(description_text);
        let description_text_modal = document.createTextNode(Object.values(products)[0][i].description);
        modalDescription.append(description_text_modal);

        let price = document.createElement('p');
        price.className = 'price';
        let modalPrice = document.createElement('p');
        modalPrice.className = 'price';
        let price_text = document.createTextNode(Object.values(products)[0][i].price);
        price.append(price_text);
        let price_text_modal = document.createTextNode(Object.values(products)[0][i].price);
        modalPrice.append(price_text_modal);
    
        let button = document.createElement('button');
        button.innerHTML = "Add to cart";
        button.value = i;
        button.className = "addToCartButton";
        button.onclick = function() {
            modalDiv.appendChild(modalName);
            modalDiv.appendChild(modalDescription);
            modalDiv.appendChild(modalPrice);
            cart.appendChild(modalDiv);
        };
        
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(button);
        itemsContainer.appendChild(div);
        

    }
}
 