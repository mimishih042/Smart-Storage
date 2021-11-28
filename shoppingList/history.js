var purchased = JSON.parse(localStorage.getItem("purchased"))

function clearNovTable() {
    var table = document.getElementById('nov-history-shopping-list')
    var rows = table.rows;
    var i = rows.length-1;
    while (i>1) {
      rows[i].parentNode.removeChild(rows[i]);
      i--;
    }
}

function renderNovList(data) {
    var table = document.getElementById('nov-history-shopping-list')
    table.style.display = "";
    clearNovTable()
    var indexes = ["first", "second", 'third']
    for (var i = 0; i < data.length; i++){
        var ele = data[i];
        var row = table.insertRow(i+2);
        var index = indexes[i];
        row.innerHTML = `
            <tr>
                <td>${ele.name}</td>
                <td>${ele.qty}</td>
            </tr>
        `
    }
}

function hideOctList() {
  var x = document.getElementById("oct-history-shopping-list");
  x.style.display = "none";
}

function setTabLink() {
    const cur = document.getElementById("current");
    const history = document.getElementById("history");

    cur.addEventListener('click',() => {
        cur.className = "tablinks active";
        history.className = "tablinks ";
        window.location.href = '../shoppingList/current.html'

    })

    history.addEventListener('click', () => {
        history.className = "tablinks active";
        cur.className = "tablinks ";
    
    })
}

function showOctData() {
  var x = document.getElementById("oct-history-shopping-list");
  x.style.display = "";
  var y = document.getElementById("nov-history-shopping-list");
  y.style.display = "none";
  document.getElementById("month-btn").innerText="Oct";
  var dropdowns = document.getElementsByClassName("month-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function showNovList() {
  var x = document.getElementById("nov-history-shopping-list");
  x.style.display = "";
  var y = document.getElementById("oct-history-shopping-list");
  y.style.display = "none";
  document.getElementById("month-btn").innerText="Nov";
  var dropdowns = document.getElementsByClassName("month-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function yearDropdown() {
    document.getElementById("year-dropdown-list").classList.toggle("show");
}

function monthDropdown() {
    document.getElementById("month-dropdown-list").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!(event.target.matches('.drop-btn') || event.target.closest("div").matches('.month-dropdown') 
      || event.target.closest("div").matches('.year-table year-dropdown'))) {
      var dropdowns = document.getElementsByClassName("year-table year-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      dropdowns = document.getElementsByClassName("month-dropdown");
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}



function main() {
    setTabLink();
    hideOctList();    
    if (purchased != null) {
      renderNovList(purchased);
    }
}

document.addEventListener('DOMContentLoaded', main);
