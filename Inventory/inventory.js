// Retrieve the products list from localStorage, or initialize an empty array if not found
let products = JSON.parse(localStorage.getItem("products")) || [];

let message = document.getElementById("message")
const addorremoveList = () => {
    let inplist = document.getElementById("inplist").value;
    if (inplist == "") {
        message.innerHTML = "Enter add products"
        message.style.color = "red"
    }
    else {
        let inpString = inplist.split(" ");
        console.log(inpString);
        let validate = inpString[0].toLowerCase();
        if (validate == 'add') {
            addItem(inpString[1]);
        } else if (validate == 'remove') {
            removeItem(inpString[1]);
        } else if (validate == 'getitems') {
            getItem();
        }
        document.getElementById("inplist").value = ""
    }
}

document.getElementById("inpbtn").addEventListener("click", addorremoveList);

const addItem = (name) => {
    if (!products.includes(name)) {
        products.push(name);
        message.innerHTML = "Product added successfully"
        message.style.color = "darkgreen"
    } else {
        alert('Product already exists');
    }
    localStorage.setItem("products", JSON.stringify(products));
}

const removeItem = (name) => {
    const index = products.indexOf(name);
    if (index !== -1) {
        products.splice(index, 1);
        message.innerHTML = "Product removed successfully"
        message.style.color = "Orange"
    } else {
        alert("Product does not exist");
    }
    localStorage.setItem("products", JSON.stringify(products));
}

const getItem = () => {
    const ul = document.getElementById("li_id");
    ul.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        ul.appendChild(li);
    });
}
