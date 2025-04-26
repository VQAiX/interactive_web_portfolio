// Bölməni gizlətmək və göstərmək
function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.className == "hidden") {
      section.className = "";
    } else {
      section.className = "hidden";
    }
  }
  
  // Haqqımda bölməsinə yeni məlumat əlavə etmək
  function addAbout() {
    var input = document.getElementById("aboutInput");
    var list = document.getElementById("aboutList");
    list.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
  }
  
  // Bacarıqlar bölməsinə yeni bilik əlavə etmək
  function addSkill() {
    var category = document.getElementById("skillsCategory");
    var description = document.getElementById("skillsDescription");
    var table = document.getElementById("skillsTable").getElementsByTagName("tbody")[0];
    table.innerHTML += "<tr><td>" + category.value + "</td><td>" + description.value + "</td><td><button onclick='deleteRow(this)'>Sil</button></td></tr>";
    category.value = "";
    description.value = "";
  }
  
  // Bacarıqlar bölməsində sətri silmək
  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Əlaqə bölməsinə yeni əlaqə məlumatı əlavə etmək
  function addContact() {
    var input = document.getElementById("contactInput");
    var list = document.getElementById("contactList");
    list.innerHTML += "<p>" + input.value + "</p>";
    input.value = "";
  }  