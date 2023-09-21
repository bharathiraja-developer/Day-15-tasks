let click = document.getElementById("submitClick");
click.addEventListener("click", demo);
function demo() {
  let food = document.getElementsByClassName("food");
  let dtd = document.createElement("td");
  let a = [];
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      a.push(food[i].value);
    }
  }
  if (a.length == 1) {
    window.alert("Choose atleast two foods");
  }
  let fName = document.getElementById("firstName");
  let lName = document.getElementById("lastName");
  let address = document.getElementById("address");
  let pincode = document.getElementById("pincode");
  let gender = document.getElementById("gender");
  let state = document.getElementById("state");
  let country = document.getElementById("country");
  if (a.length > 1) {
    let ftd = document.createElement("td");
    ftd.innerHTML = fName.value;
    document.getElementById("fNameId").appendChild(ftd);

    let ltd = document.createElement("td");
    ltd.innerHTML = lName.value;
    document.getElementById("lNameId").appendChild(ltd);

    let atd = document.createElement("td");
    atd.innerHTML = address.value;
    document.getElementById("addressId").appendChild(atd);

    let ptd = document.createElement("td");
    ptd.innerHTML = pincode.value;
    document.getElementById("pinId").appendChild(ptd);

    let gtd = document.createElement("td");
    gtd.innerHTML = gender.value;
    document.getElementById("genderId").appendChild(gtd);

    dtd.innerHTML = a;
    document.getElementById("foodId").appendChild(dtd);

    let std = document.createElement("td");
    std.innerHTML = state.value;
    document.getElementById("stateId").appendChild(std);

    let ctd = document.createElement("td");
    ctd.innerHTML = country.value;
    document.getElementById("countryId").appendChild(ctd);

    let reset = document.getElementsByClassName("reset");
    for (let i = 0; i < reset.length; i++) {
      reset[i].reset();
    }
  }
}
