$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("tourist");
  let touristObj = JSON.parse(localStorageData);
  console.log(touristObj);
  $('#names').text(touristObj.name);
  $('#emails').text(touristObj.email);
  $('#datetimes').text(touristObj.datetime);
  $('#select1s').text(touristObj.select1);
  $('#SelectPersons').text(touristObj.SelectPerson);
  $('#CategoriesSelects').text(touristObj.CategoriesSelect);
  $('#messages').text(touristObj.message);
}
