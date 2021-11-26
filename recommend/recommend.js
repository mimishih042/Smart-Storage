function initBackBtn() {
    const back = document.getElementById("back")
    console.log(back)
    back.addEventListener('click', () => {
        window.history.back()
    })
}

function renderSelected() {
    var selected = JSON.parse(localStorage.getItem("selected"))
    var name = []
    var p = document.getElementById("selected_list")
   
    for (var j = 0; j < selected.length; j++) {
        name.push('#' + selected[j].name)
    }
    
    p.innerHTML=`${name.join(', ')}`
}

function getSoonExpiredElems() {
    var soonToExpireElems = []
    var selected = JSON.parse(localStorage.getItem("selected"))
    for (var i = 0; i < selected.length; i++) {
        var expiration = selected[i].expiration;
        var splitedExp = expiration.split("/")
        var datesToExpire = (new Date(splitedExp[2] + '/' + splitedExp[0] + '/' + splitedExp[1]) - new Date()) / (1000*3600*24) 
        if (datesToExpire < 3) {
            soonToExpireElems.push(selected[i].name)
        }
    }
    return soonToExpireElems
}

function getSelectedElems() {
    var selectedElems = []
    var selected = JSON.parse(localStorage.getItem("selected"))
    for (var i = 0; i < selected.length; i++) {
        selectedElems.push(selected[i].name)
    }
    return selectedElems
}

function renderRecommendTable() {
    var soonExpiredElems = getSoonExpiredElems()
    console.log(soonExpiredElems)
    var selectedElems = getSelectedElems();
    console.log(selectedElems)
    // set default ingredient
    var ingredients = ["Cucumber", "Spanish", "Corn Oil"]
    for (var i = 0; i < selectedElems.length; i++) {
        if (soonExpiredElems.includes(selectedElems[i])) {
            console.log("xxx")
            ingredients[i] = selectedElems[i] + (" (expires in 3 days)")
        } else ingredients[i] = selectedElems[i]
    }

    var table = document.getElementById('recommend-table');

    table.innerHTML = `
    <tr>
        <td><img src="../assets/Rectangle-14.png" class="recipe-img"></td>
        <td>Meatball Spaghetti<br>
            Ingredients: ${ingredients[0]}, meatballs, spaghetti</td>
        <td>></td>
    </tr>
    <tr>
        <td><img src="../assets/Rectangle-15.png" class="recipe-img"></td>
        <td>Creamed Spinach<br>
            Ingredients: ${ingredients[1]}, butter, milk, sour cream</td>
        <td>></td>
    </tr>
    <tr>
        <td><img src="../assets/Rectangle-16.png" class="recipe-img"></td>
        <td>Banana Ice Cream<br>
            Ingredients: ${ingredients[2]}, milk, ice, vanilla ice cream</td>
        <td>></td>
    </tr>
    `
}

function main() {
    initBackBtn()
    renderSelected()
    renderRecommendTable()
}

document.addEventListener('DOMContentLoaded', main);