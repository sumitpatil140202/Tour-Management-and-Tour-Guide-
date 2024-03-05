$(document).ready(function () {
  // getData();

  $("#btnAddTourist").click(function () {
    //collect tourist data from booking form
    function getToursitData() {
      let date = new Date($("#datetime").val());
      day = date.getDate();
      month = date.getMonth() + 1; //jan - 0, feb-1, ...dec-11
      year = date.getFullYear();
      let datetime = [day, month, year].join("/"); //28/01/2022

      let tourist = {
        name: $('#name').val(),
        email: $('#email').val(),
        datetime: datetime,
        select1: $('#select1').val(),
        SelectPerson: $('#SelectPerson').val(),
        CategoriesSelect: $('#CategoriesSelect').val(),
        message: $('#message').val(),

      };
      $("#touristForm")[0].reset();
      return tourist;
    }
    //store tourist data to localStorage
    function storeDataToLocalStorage() {
      if (!localStorage.getItem("tourist")) {
        localStorage.setItem("tourist", JSON.stringify(getToursitData()));
      } else {
        localStorage.removeItem("tourist");
        localStorage.setItem("tourist", JSON.stringify(getToursitData()));
      }
    }
    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
      //sendData();
      window.location.href="display-data.html"
  });
});