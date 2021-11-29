var purchased = JSON.parse(localStorage.getItem("purchased"))
var curMonth = "NOV"
var curPage = "-1"
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
    var j = document.getElementById("nov-pagni");
    j.style.display = "";
    var k = document.getElementById("oct-pagni");
    k.style.display = "none";
    var table = document.getElementById('nov-history-shopping-list')
    table.style.display = "";
    clearNovTable()
    for (var i = 0; i < 3; i++){
        var ele = data[i];
        var row = table.insertRow(i+2);
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
  var y = document.getElementById("oct-history-shopping-list-2");
  y.style.display = "none";
  document.getElementById("no-data").style.display = "none"

  document.getElementById("oct-pagni").style.display = "none"
  document.getElementById("nov-pagni").style.display = "none"
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
  var y = document.getElementById("nov-list");
  y.style.display = "none";
  document.getElementById("month-btn").innerText="Oct";
  document.getElementById("no-data").style.display = "none"

  var dropdowns = document.getElementsByClassName("month-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  var j = document.getElementById("oct-pagni");
  j.style.display = "";
  var k = document.getElementById("nov-pagni");
  k.style.display = "none";
  selectPage1();
  curMonth = "OCT"
}

function goToDetail(id) {
    localStorage.setItem("detailId", id)
    localStorage.setItem("curMonth", curMonth)
    localStorage.setItem("curPage", curPage)

    window.location.href = '../shoppingList/detail.html'
}

function showNoData(text) {
  document.getElementById("month-btn").innerText= text 
  document.getElementById("nov-list").style.display = "none"
  document.getElementById("oct-history-shopping-list").style.display = "none"
  document.getElementById("oct-history-shopping-list-2").style.display = "none"

  document.getElementById("no-data").style.display = ""

  var dropdowns = document.getElementsByClassName("month-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }

  document.getElementById("oct-pagni").style.display = "none"
  document.getElementById("nov-pagni").style.display = "none"

  curPage = "-1"
  curMonth = text
}

function showNovList() {
  var x = document.getElementById("nov-list");
  x.style.display = "";
  var y = document.getElementById("oct-history-shopping-list");
  y.style.display = "none";
  document.getElementById("no-data").style.display = "none"

  document.getElementById("month-btn").innerText="Nov";
  var dropdowns = document.getElementsByClassName("month-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
  var j = document.getElementById("nov-pagni");
  j.style.display = "";
  var k = document.getElementById("oct-pagni");
  k.style.display = "none";
  curPage = "-1"
  curMonth = "NOV"
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

function selectPage2() {
  var element = document.getElementById("pagiPage2");
  element.classList.add("active");
  var element2 = document.getElementById("pagiPage1");
  element2.classList.remove("active");
  var x = document.getElementById("oct-history-shopping-list-2");
  x.style.display = "";
  var y = document.getElementById("oct-history-shopping-list");
  y.style.display = "none";
  curPage = "2"
}

function selectPage1() {
  var element = document.getElementById("pagiPage1");
  element.classList.add("active");
  var element2 = document.getElementById("pagiPage2");
  element2.classList.remove("active");
  var x = document.getElementById("oct-history-shopping-list");
  x.style.display = "";
  var y = document.getElementById("oct-history-shopping-list-2");
  y.style.display = "none";
  curPage = "1"
}

function checkPrevState() {
  console.log("checking prev state")
   var m = localStorage.getItem("curMonth")
   var p = localStorage.getItem("curPage")
  
   if ( m && p) {
      if (m == "OCT") {
        showOctData()
        if (p == "2") {
          selectPage2()
        }
      } else if ( m == "NOV") {
        showNovList()
      } else {
        showNoData(m)
      }
    localStorage.removeItem("curMonth")
    localStorage.removeItem("curPage")
   }
}

function main() {
  console.log("in main")
    setTabLink();

    hideOctList();    
    if (purchased != null) {
      renderNovList(purchased);
    }
    checkPrevState()
}

document.addEventListener('DOMContentLoaded', main);
