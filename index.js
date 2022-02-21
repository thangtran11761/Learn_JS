function tong() {
    // lay gia tri tu input
    var a = document.getElementById("somot").value;
    var b = document.getElementById("sohai").value;

    // chuyen gia tri ve dang so
    a = parseFloat(a);
    b = parseFloat(b);
    //tinh tong
    var sum = a + b;

    // hien thi gia tri
    document.querySelector('#result').innerHTML = "ket qua phep tinh cong la: " + sum;
}

function hieu() {
    // lay gia tri tu input
    var a = document.getElementById("somot").value;
    var b = document.getElementById("sohai").value;

    // chuyen gia tri ve dang so
    a = parseFloat(a);
    b = parseFloat(b);
    //tinh tong
    var sum = a - b;

    // hien thi gia tri
    document.querySelector('#result').innerHTML = "ket qua phep tinh tru la: " + sum;
}

function tich() {
    // lay gia tri tu input
    var a = document.getElementById("somot").value;
    var b = document.getElementById("sohai").value;

    // chuyen gia tri ve dang so
    a = parseFloat(a);
    b = parseFloat(b);
    //tinh tong
    var sum = a * b;

    // hien thi gia tri
    if (a == String && b == String) {
        document.querySelector('#result').innerHTML = "Nhap sai, nhap lai";
    } else {
        document.querySelector('#result').innerHTML = "ket qua phep tinh nhan la: " + sum;
    }
}

function thuong() {
    // lay gia tri tu input
    var a = document.getElementById("somot").value;
    var b = document.getElementById("sohai").value;

    // chuyen gia tri ve dang so
    a = parseFloat(a);
    b = parseFloat(b);
    //tinh tong
    var sum = a / b;

    // hien thi gia tri
    document.querySelector('#result').innerHTML = "ket qua phep tinh chia la: " + sum;
}