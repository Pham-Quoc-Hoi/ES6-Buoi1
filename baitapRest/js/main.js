function getEle(id) {
    return document.getElementById(id);
}

const tong = (a, b, c, d = 0) => {
    const total = a + b + c + d;
    // console.log(index);
    return total;
}

const diemlop1 = () => {
    let diemToan = getEle("inpToan").value * 1;
    let diemLy = getEle("inpLy").value * 1;
    let diemHoa = getEle("inpHoa").value * 1;

    var diemTrungBinh1 = parseFloat(tong(diemToan, diemLy, diemHoa) / 3);
    getEle("tbKhoi1").innerHTML = diemTrungBinh1;
}

const diemlop2 = () => {
    let diemVan = getEle("inpVan").value * 1;
    let diemSu = getEle("inpSu").value * 1;
    let diemDia = getEle("inpDia").value * 1;
    let diemAnh = getEle("inpEnglish").value * 1;

    var diemTrungBinh2 = parseFloat(tong(diemVan, diemSu, diemDia, diemAnh) / 4);
    getEle("tbKhoi2").innerHTML = diemTrungBinh2;
}