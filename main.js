function getArea() {
   let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let area = Number(base) * Number(height) / 2; 

    document.getElementById("area").value=area;
}
