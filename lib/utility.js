export function createAlert(alertObj) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "toast";
  alertDiv.innerText = alertObj.message;
  document.body.appendChild(alertDiv);

  requestAnimationFrame(() => alertDiv.classList.add("show"));

  //   setTimeout(() => {
  //     alertDiv.classList.remove("show");
  //     alertDiv.classList.add("hide");
  //     setTimeout(() => {
  //       document.body.removeChild(alertDiv);
  //     }, 500);
  //   }, 3000);
}
