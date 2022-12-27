"use strict";
// Ẩn thông tin cá nhân
const info = document.getElementById("info");
const form = document.getElementById("form");
const email = document.getElementById("email");
const buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const text = email.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    console.log("email");
    info.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Email không hợp lệ!!!");
  }
  return true;
});
// Ẩn thông tin nghề nghiệp
function myFunction(e) {
  var target = e.target;
  console.log(e.target);
  var jobInfo =
    target.id == "button1"
      ? target.parentElement.parentElement.nextElementSibling
      : target.parentElement.nextElementSibling;
  var btnViewMore = e.target;

  if (window.getComputedStyle(jobInfo).display === "none") {
    jobInfo.style.display = "block";
    btnViewMore.innerHTML = "View Less";
  } else {
    jobInfo.style.display = "none";
    btnViewMore.innerHTML = "View More";
  }
}
