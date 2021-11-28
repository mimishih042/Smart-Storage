var list = [
    // todo: change expiration date
    { name: 'Red Apple (lbs)', qty:'10', expiration: '12/02/2021', id: 0},
    { name: 'Banana (lbs)', qty:'3', expiration: '12/02/2021', id: 1 },
    { name: 'Salmon (lbs)', qty:'3',expiration: '12/02/2021', id: 2 },
    { name: 'Pork (lbs)', qty:'12', expiration: '12/06/2021', id: 3 },
    { name: 'Chicken Thigh (lbs)', qty:'20',expiration: '12/24/2021', id: 4 },
    { name: 'Noodle (lbs)', qty:'5', expiration: '12/15/2021', id: 5 },
    { name: 'Lobster (lbs)',qty:'10', expiration: '12/16/2021', id: 6 },
    { name: 'Lamb (lbs)', qty: '8', expiration: '01/15/2022', id: 7 },
    { name: 'Green Tea Leaves (oz)', qty:'12 oz', expiration: '08/25/2022', id: 8 },
    { name: 'Lemon', qty:'10' ,expiration: '01/14/2022', id: 9 },
    { name: 'Milk', qty:'2', expiration: '12/11/2021', id: 10 },
    { name: 'Mandarin', qty:'2', expiration: '12/20/2021', id: 11 },
    { name: 'Cherry', qty:'2', expiration: '12/22/2021', id: 12 },
    { name: 'Pomegranate', qty:'1', expiration: '01/30/2022', id: 13 }
];

function decideBtnColor() {
    var selected =  document.querySelectorAll('input[type="checkbox"]:checked').length
     if (selected != 0) {
       document.getElementById("recipe-btn").className = "default-btn"
     } else {
       document.getElementById("recipe-btn").className = "disabled-btn"
     }
      
}

function addNewItem(list, item) {

}

function addBtnListenr() {
    const btn = document.getElementById('recipe-btn')
    btn.addEventListener('click', (e) => {
        if (e.target.className === 'disabled-btn') {
            return
        } else {
            var checked =  document.querySelectorAll('input[type="checkbox"]:checked')
            var items = []
            for (var j = 0; j < checked.length; j++) {
               var target = parseInt(checked[j].id)
               var ele = list.find(({id}) => id === target)
                items.push(ele)
            }
            localStorage.setItem("selected", JSON.stringify(items))
            window.location.href = './recommend/recommend.html'

        }
    });
}

function sortByExpiration(data) {
    return data.sort(function(a,b) {
        const d1 = new Date(a.expiration);
        const d2 = new Date(b.expiration);

        if ( (d1-d2) != 0) {
            return d1-d2
        } else {
            return a.name.localeCompare(b.name);
        }
    })
}

function renderList(data) {
    var table = document.getElementById('inventory-list')

    for (var i = 0; i < data.length; i++){
        var ele = data[i];
        var row = table.insertRow(i+1);
        row.innerHTML = `
            <tr>
                <td>${ele.name}</td>
                <td>${ele.qty}</td>
                <td>${ele.expiration}</td>
                <td><div class="purchased-btn">
                    <input type="checkbox" id=${ele.id} onclick="decideBtnColor()"}/>
                    <label for=${ele.id}></label></div></td>
            </tr>
        `
        
    }
}

function main() {
    addBtnListenr()
    sortByExpiration(list)
    renderList(list)
}
document.addEventListener('DOMContentLoaded', main);
window.addEventListener("load", decideBtnColor);
