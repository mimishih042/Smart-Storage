var list = [
    // todo: change expiration date
    { name: 'Red Apple', qty:'10 lbs', expiration: '11/28/2021', id: 0},
    { name: 'Banana', qty:'3 lbs', expiration: '11/28/2021', id: 1 },
    { name: 'Salmon', qty:'3 lbs',expiration: '11/28/2021', id: 2 },
    { name: 'Pork', qty:'12 lbs', expiration: '12/06/2021', id: 3 },
    { name: 'Chicken Thigh', qty:'20 lbs',expiration: '12/24/2021', id: 4 },
    // { name: 'Noodle', qty:'5 lbs', expiration: '12/15/2021', id: 5 },
    // { name: 'Lobster',qty:'10 lbs', expiration: '12/16/2021', id: 6 },
    // { name: 'Lamb', qty: '8 lbs', expiration: '01/15/2022', id: 7 },
    // { name: 'Green Tea Leaves', qty:'12 oz', expiration: '08/25/2022', id: 8 },
    { name: 'Lemon', qty:'10' ,expiration: '01/14/2022', id: 9 },
    // { name: 'Milk', qty:'2', expiration: '12/11/2021', id: 10 },
];

var items = [];

function decideBtnColor() {
    var checked =  document.querySelectorAll('input[type="checkbox"]:checked')
    for (var j = 0; j < checked.length; j++) {
        var target = parseInt(checked[j].id)
        var ele = list.find(({id}) => id === target)
        
        items.push(ele)
        list.splice(list.indexOf(ele), 1)
    }
    localStorage.setItem("purchased", JSON.stringify(items));
}

function itemMinus(target) {
    console.log("minus " + target)
    var ele = list.find(({id}) => id === target)
    var value = parseInt(ele.qty)
    var unit = ele.qty.substr(ele.qty.indexOf(' ') + 1);

    //Ignore unit if none 
    if (unit == 10) {
        unit = ""
    }
    
    if (value > 0) {
        ele.qty = (value - 1) + " " + unit
        document.getElementById("item" + ele.id).value = value - 1
    }
}

function itemPlus(target) {
    console.log("plus " + target)

    var ele = list.find(({id}) => id === target)
    var value = parseInt(ele.qty)
    var unit = ele.qty.substr(ele.qty.indexOf(' ') + 1);

    //Ignore unit if none 
    if (unit == 10) {
        unit = ""
    }

    console.log(unit)
    ele.qty = (value + 1) + " " + unit
    document.getElementById("item" + ele.id).value = value + 1  
}

function clearTable() {
    var table = document.getElementById('current-shopping-list')
    var rows = table.rows;
    var i = rows.length;
    while (--i) {
      rows[i].parentNode.removeChild(rows[i]);
    }
}

function renderList(data) {
    var table = document.getElementById('current-shopping-list')
    clearTable()
    for (var i = 0; i < data.length; i++){
        const ele = data[i];
        var row = table.insertRow(i+1);
        console.log(row)
        row.innerHTML = `
            <tr>
                <td>${ele.name}</td>
                <td>
                    <div class="mt-3">
                        <div class="input-counter">
                        <span class="minus-btn" >-</span>
                        <input id="item${ele.id}" type="text" value=${ele.qty}>
                        <span class="plus-btn" >+</span>
                        </div>
                    </div>
                </td>
                <td><div class="purchased-container">
                        <div class="purchased-btn">
                         <input type="checkbox" id="${ele.id}" />
                            <label for="${ele.id}"></label>
                         </div>
                    </div>
                </td>
            </tr>
        `
        var minusBtn = row.getElementsByClassName('minus-btn')[0]
        var plusBtn = row.getElementsByClassName("plus-btn")[0]

        minusBtn.addEventListener('click', () => {itemMinus(ele.id)})
        plusBtn.addEventListener('click',()=>{ itemPlus(ele.id)})
    }
}

function setTabLink() {
    const cur = document.getElementById("current");
    const history = document.getElementById("history");

    cur.addEventListener('click',() => {
        cur.className = "tablinks active";
        history.className = "tablinks ";

    })

    history.addEventListener('click', () => {
        localStorage.setItem("currentList", JSON.stringify(list));

        history.className = "tablinks active";
        cur.className = "tablinks ";
        window.location.href = '../shoppingList/history.html'
    })
}

function addToPushased() {
    const addPurchased = document.getElementById("Add-to-Purchased");
    addPurchased.addEventListener('click',() => {
        decideBtnColor()
        let uncheckedItem = list.filter(x => !items.includes(x));
        renderList(uncheckedItem);
    }) 
}

function setList() {
    var current = localStorage.getItem("currentList")

    if (current) {
        list = JSON.parse(current)
    }
}

function main() {
    setTabLink();
    setList()
    renderList(list);
    addToPushased();
}
document.addEventListener('DOMContentLoaded', main);
