$(document).ready(function () {
    $("#btnAddStudent").click(function () {
        function getStudentData() {
            let student = {
                Name: $("#Name").val(),
                gender: $("input[name='gender']:checked").val(),
                phone: $("#phone").val(),
                dept: $("input[name='dept']:checked").val()
            };
            return student;
        }
        function storeDataToLocalStorage() {
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        window.location.href="display.html"
    });
});