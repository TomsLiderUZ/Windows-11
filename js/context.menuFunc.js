function winRefrsh() {
  renderApps();
  console.clear();
}




function powerOnBottomMenuFucTimeAdd() {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  document.querySelector(".powerOnBottomMenuFucTime").innerHTML = `
      <div class="powerOnBottomMenuFucTimeItemRow">${hour}:${minute}</div>
      
      <div class="powerOnBottomMenuFucTimeItemRow">${day < 10 ? `0${day}` : day} / ${month < 10 ? `0${month}` : month} / ${year}</div>
    `;
}
setInterval(() => {
  powerOnBottomMenuFucTimeAdd();
});
