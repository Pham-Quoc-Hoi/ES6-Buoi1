const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
function getEle(id) {
    return document.getElementById(id);
}

let changeColor = (color) => {

    // Thêm màu cho ngôi nhà
    let house = document.getElementById('house');
    let res = "house ";
    house.className = res + `${color}`;
    // house.className = `house ${color}`;

    /**
    // thêm active cho button
    let colorAct = document.getElementById(`color-button ${color}`);
    // thêm class bằng className
    colorAct.className += "active";
     */
}

let renderHTML = () => {
    var content = "";
    colorList.forEach(function (item, index) {
        var act = "";
        if (index === 0) {
            act = " active";
        }
        content += `
       <button class="color-button ${item}${act}" onclick="changeColor('${item}')"></button>
        `;
    });
    onclick = "editUser('${user.id}')"
    getEle("colorContainer").innerHTML = content;
}
renderHTML();

