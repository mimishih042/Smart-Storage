var list = [
    // todo: change expiration date
    { name: 'Red Apple', qty:'10 lbs', expiration: '11/28/2021', id: 0},
    { name: 'Banana', qty:'3 lbs', expiration: '11/28/2021', id: 1 },
    { name: 'Salmon', qty:'3 lbs',expiration: '11/28/2021', id: 2 },
    // { name: 'Pork', qty:'12 lbs', expiration: '12/06/2021', id: 3 },
    // { name: 'Chicken Thigh', qty:'20 lbs',expiration: '12/24/2021', id: 4 },
    // { name: 'Noodle', qty:'5 lbs', expiration: '12/15/2021', id: 5 },
    // { name: 'Lobster',qty:'10 lbs', expiration: '12/16/2021', id: 6 },
    // { name: 'Lamb', qty: '8 lbs', expiration: '01/15/2022', id: 7 },
    // { name: 'Green Tea Leaves', qty:'12 oz', expiration: '08/25/2022', id: 8 },
    // { name: 'Lemon', qty:'10' ,expiration: '01/14/2022', id: 9 },
    // { name: 'Milk', qty:'2', expiration: '12/11/2021', id: 10 },


];

function decideBtnColor() {
    var checked =  document.querySelectorAll('input[type="checkbox"]:checked')
    var items = []
    for (var j = 0; j < checked.length; j++) {
       var target = parseInt(checked[j].id)
       var ele = list.find(({id}) => id === target)
        items.push(ele)
    }
    console.log(items)
    localStorage.setItem("selected", JSON.stringify(items))    
}
function firstItemMinus() {
    var value = document.getElementById("item1").value
    if (value > 0) {
        document.getElementById("item1").value = value - 1
    }
}
function secondItemMinus() {
    var value = document.getElementById("item2").value
    if (value > 0) {
        document.getElementById("item2").value = value - 1
    }
}
function thirdItemMinus() {
    var value = document.getElementById("item3").value
    if (value > 0) {
        document.getElementById("item3").value = value - 1
    }
}

function firstItemPlus() {
    var value = parseInt(document.getElementById("item1").value) + 1
    document.getElementById("item1").value = value
}
function secondItemPlus() {
    var value = parseInt(document.getElementById("item2").value) + 1
    document.getElementById("item2").value = value
}
function thirdItemPlus() {
    var value = parseInt(document.getElementById("item3").value) + 1
    document.getElementById("item3").value = value
}


function renderList(data) {
    var table = document.getElementById('current-shopping-list')
    var indexes = ["first", "second", 'third']
    for (var i = 0; i < data.length; i++){
        var ele = data[i];
        var row = table.insertRow(i+1);
        var index = indexes[i];
        row.innerHTML = `
            <tr>
                <td>${ele.name}</td>
                <td>
                    <div class="mt-3">
                        <div class="input-counter">
                        <span class="minus-btn" onclick="${index}ItemMinus()">-</span>
                        <input id="item${index}" type="text" value=${ele.qty}>
                        <span class="plus-btn" onclick="${index}ItemPlus()">+</span>
                        </div>
                    </div>
                </td>
                <td><div class="selected-food-list-btn">
                    <input type="checkbox" id=${ele.id} onclick="decideBtnColor()"}/>
                    <label for=${ele.id}></label></div></td>
            </tr>
        `
        
    }
}

document.addEventListener('mouseup', function (e) {
    // var form1 = document.getElementById('changeDateForm1')
    // var form2 = document.getElementById('changeDateForm2')
    // var form3 = document.getElementById('changeDateForm3')
    // var selected1 = document.getElementById("date1")
    // var selected2 = document.getElementById("date2")
    // var selected3 = document.getElementById("date3")
    // if (!form1.contains(e.target)&&selected1.style.display === 'none'
    // &&form1.style.display === 'block') {
    //     var date1 = form1.newDateInput1.value
    //     selected1.innerHTML = date1
    //     selected1.style.display = 'block'
    //     form1.style.display = 'none'
    // }
    // if (!form2.contains(e.target)&&selected2.style.display === 'none'
    // &&form2.style.display === 'block') {
    //     var date2 = form2.newDateInput2.value
    //     selected2.innerHTML = date2
    //     selected2.style.display = 'block'
    //     form2.style.display = 'none'
    // }
    // if (!form3.contains(e.target)&&selected3.style.display === 'none'
    // &&form3.style.display === 'block') {
    //     var date3 = form3.newDateInput3.value
    //     selected3.innerHTML = date3
    //     selected3.style.display = 'block'
    //     form3.style.display = 'none'
    // }
})

function setTabLink() {
    const cur = document.getElementById("current");
    const history = document.getElementById("history");

    cur.addEventListener('click',() => {
        cur.className = "tablinks active";
        history.className = "tablinks ";

    })

    history.addEventListener('click', () => {
        history.className = "tablinks active";
        cur.className = "tablinks ";
        window.location.href = '../shoppingList/history.html'
    })
}

function main() {
    setTabLink();
    renderList(list);

}
document.addEventListener('DOMContentLoaded', main);
