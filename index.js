//store the products array in localstorage as "products"


function Product(typ, descript, pric, img){
    this.type=typ;
    this.desc=descript;
    this.price=pric;
    this.image=img;
  }



function productAll(event){
 event.preventDefault();
 let form = document.getElementById("products");
 let type = form.type.value;
 let desc = form.desc.value;
 let price = form.price.value;
 let image = form.image.value;

 let p1 = new Product(type,desc,price,image);
 let data = JSON.parse(localStorage.getItem("product")) || [];

 data.push(p1);
 localStorage.setItem("product", JSON.stringify(data));
 console.log(p1)

}

