let grid_visible = false;
let search_term = "";

function hide() {
    let grid = document.getElementById("gallery");
    grid.style.visibility = grid_visible ? "visible" : "hidden";
    grid_visible = !grid_visible;
}

function search() {
    search_term = document.getElementById("search").value;
    window.location.href = `https://www.google.com/search?q=${search_term.replace(' ', "+")}`;
}
//pushing test