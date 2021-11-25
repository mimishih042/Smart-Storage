var list = [
    { name: 'Red Apple', qty:'10 lbs', expiration: '12/06/2021', id: 'checkbox1' },
    { name: 'Banana', qty:'3 lbs', expiration: '12/15/2021', id: 'checkbox2' },
    { name: 'Salmon', qty:'3 lbs',expiration: '12/08/2021', id: 'checkbox3' },
    { name: 'Pork', qty:'12 lbs', expiration: '12/06/2021', id: 'checkbox4' },
    { name: 'Chicken Thigh', qty:'20 lbs',expiration: '12/24/2021', id: 'checkbox5' },
    { name: 'Noodle', qty:'5 lbs', expiration: '12/15/2021', id: 'checkbox6' },
    { name: 'Lobster',qty:'10 lbs', expiration: '12/16/2021', id: 'checkbox7' },
    { name: 'Lamb', qty: '8 lbs', expiration: '01/15/2022', id: 'checkbox8' },
    { name: 'Green Tea Leaves', qty:'12 oz', expiration: '08/25/2022', id: 'checkbox9' },
    { name: 'Lemon', qty:'10' ,expiration: '01/14/2022', id: 'checkbox10' },
    { name: 'Milk', qty:'2', expiration: '12/11/2021', id: 'checkbox11' },


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
            window.location.replace('../recommend/recommend.html')

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
    const sorted = sortByExpiration(list)
    renderList(sorted)
}

document.addEventListener('DOMContentLoaded', main);
