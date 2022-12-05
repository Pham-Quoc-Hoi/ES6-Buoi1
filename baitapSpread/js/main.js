function getEle(id) {
    return document.getElementById(id);
}

// spread Operator
let letter = "Hover Me!";
// console.log(letter);
let letterCvt = [...letter];
console.log(letterCvt);

renderHTML = () => {
    let content = "";
    letterCvt.forEach(function (data) {
        content += `
             <span>${data}</span>
        `
    });
    document.getElementsByClassName("heading")[0].innerHTML = content;
};

renderHTML();