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

function main() {
    initBackBtn()
    renderSelected()
}

document.addEventListener('DOMContentLoaded', main);