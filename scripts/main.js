// Navbar toggler
let menuElem = document.getElementById('navigation');
let titleElem = document.querySelector('.menu-toggler');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
}




// Short Recipes filter

const inp = document.getElementsByClassName('inp1');
let shortRecipeList = document.getElementsByClassName('short_recipe');

function func(elm) {
  for (let i = 0; i < shortRecipeList.length; i++) {
    if (shortRecipeList[i].classList.contains(elm.id) && elm.checked) {
      shortRecipeList[i].style.display = "flex";
    } else
      shortRecipeList[i].style.display = "none";
  }
}
func(inp[0]);
for (var i = 0; i < inp.length; i++) {
  inp[i].onchange = function () {
    func(this)
  };
}