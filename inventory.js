


function append(){
    let data=JSON.parse(localStorage.getItem("product")) || [];
    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;

    data.forEach(function(el,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText=el.type;
        let p1= document.createElement("p");
        p1.innerText=el.desc;
        let p2=document.createElement("p");
        p2.innerText= el.price;

        let btn = document.createElement("button");
        btn.innerText="Remove";

        btn.addEventListener("click", function(){
            remove(index);
        });

        div.append(img, p, p1, p2, btn);
        all_products.append(div);

    });
    
}
append();
    
       function remove(index) {
        let data=JSON.parse(localStorage.getItem("product")) || [];

        let newData = data.filter(function(el,i){
            if(i === index) {
                let trash = JSON.parse(localStorage.getItem("product")) || [];
                trash.push(el);
                localStorage.setItem("trash", JSON.stringify(trash)); 

            }
            else{
                return i != index;
            }
            return i !== index;

        });
        localStorage.setItem("product", JSON.stringify(newData));
        append();
        

       }
    