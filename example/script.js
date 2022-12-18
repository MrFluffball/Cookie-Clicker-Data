// draws the achievements in the correct order


let spriteSize = 48

// appends an <img> element to the specified element
// changes the margins in order to get only a section of the source image

function addSectionSprite(elm,row,col) {
    elm.style.overflow = "hidden"
    elm.style.width = "48px"
    elm.style.height = "48px"
    elm.innerHTML += "<img src='icons.png' style='margin-left:"+ -row*spriteSize +"px; margin-top:"+ -col*spriteSize +"px;'/>";
}

// taken from the game code (sorts by an object's "order")
function sortMap(a,b) {
    if (a.order > b.order) return 1;
    else if (a.order < b.order) return -1;
    else return 0;
}



// sort the achievements like how they're presented in game
let arr = Object.values(achievements)
arr.sort(sortMap)


// add to the screen
arr.forEach(i => {
    let icon = document.createElement('div')    

    addSectionSprite(icon, i.icon[0], i.icon[1])

    icon.style.float = "left"
    document.body.appendChild(icon)
})