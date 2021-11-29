
var detail = [
    {date: "Nov/30/2021", list: []},
    {date:" Oct/29/2021", list:[
        { name: 'Apple ', qty:'10 lbs', expiration: '11/28/2021', id: 0},
        { name: 'Corn Oil', qty:'5 lbs', expiration: '11/28/2021', id: 1 },
        { name: 'Peach', qty:'6 lbs',expiration: '11/28/2021', id: 2 },
        { name: 'Bacon', qty:'1 lbs', expiration: '12/06/2021', id: 3 },
        { name: 'Coke', qty:'1 L',expiration: '12/24/2021', id: 4 },
        { name: 'Noodle', qty:'5 lbs', expiration: '12/15/2021', id: 5 },
    ]},
    {date: "Oct/25/2021", list:[
        { name: 'Orange ', qty:'10 lbs', expiration: '11/28/2021', id: 0},
        { name: 'Red pepper', qty:'5 lbs', expiration: '11/28/2021', id: 1 },
        { name: 'Green pepper', qty:'6 lbs',expiration: '11/28/2021', id: 2 },
        { name: 'Beef', qty:'2 lbs', expiration: '12/06/2021', id: 3 },
    ]},
    {date:"Oct/23/2021", list:[
        { name: 'Apple Juice', qty:'10 lbs', expiration: '11/28/2021', id: 0},
        { name: 'Orange Juice', qty:'5 lbs', expiration: '11/28/2021', id: 1 },
        { name: 'Brocolli', qty:'6 lbs',expiration: '11/28/2021', id: 2 },
        { name: 'Rice', qty:'4 lbs', expiration: '12/06/2021', id: 3 },
        { name: 'Bottled water', qty:'10',expiration: '12/24/2021', id: 4 },
        { name: 'Soy sauce', qty:'20 Oz', expiration: '12/15/2021', id: 5 },
        { name: 'Rice', qty:'5 lbs',expiration: '12/24/2021', id: 6 },
        { name: 'Salmon', qty:'5 lbs', expiration: '12/15/2021', id: 7 },
    ]}
]

function renderInfo() {
    var id = parseInt(localStorage.getItem("detailId"))

    if (id == 0) {
        detail[id].list = JSON.parse(localStorage.getItem("purchased"))
    }
    var count = document.getElementById("item-count")
    var time = document.getElementById("created-time")
    var itemNumber = 0
    if (detail[id].list != null) {
        itemNumber = detail[id].list.length
    }
    count.innerHTML = `
        Total items: ${itemNumber}
    `
    time.innerHTML = `
        Created on: ${detail[id].date}
    `
}

function renderList() {
    var id = parseInt(localStorage.getItem("detailId"))

    var table = document.getElementById('detail-table')
    var data = detail[id].list
    for (var i = 0; i < data.length; i++){
        var ele = data[i];
        var row = table.insertRow(i+1);
        row.innerHTML = `
            <tr>
                <td>${ele.name}</td>
                <td>${ele.qty}</td>
            </tr>
        `
    }
}

function initBackBtn() {
    const back = document.getElementById("back")
    console.log(back)
    back.addEventListener('click', () => {
        window.history.back()
    })
}
function main() {
    initBackBtn()
    renderInfo()
    renderList()
}

document.addEventListener('DOMContentLoaded', main);