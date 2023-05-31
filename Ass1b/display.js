$(document).ready(function () {
    getData();
});
function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#Name").text(studentObj.Name);
    $("#gender").text(studentObj.gender);
    $("#phone").text(studentObj.phone);
    $("#dept").text(studentObj.dept);
}