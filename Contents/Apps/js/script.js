function renderApps() {
  document.querySelector(".powerOnTopApps").innerHTML = "";
  fetch("./Contents/Apps/config.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const cardHTML = `
                    <button class="bodyAppCardBg" title="${item.title}">
                        <img src="${location.href}/Contents/Apps/Contents/${item.name}/img/icon.png" alt="${item.name}" class="bodyAppCardImgIcon">
                        <p class="bodyAppCardNameText">${item.title}</p>
                    </button>
                `;
        document
          .querySelector(".powerOnTopApps")
          .insertAdjacentHTML("beforeend", cardHTML);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));


    document.querySelector(".appSetScripts").innerHTML = ""
    fetch("./Contents/Apps/config.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const scriptElement = document.createElement("script");
        scriptElement.src = `./Contents/Apps/Contents/${item.name}/app.js`;
        document.querySelector(".appSetScripts").appendChild(scriptElement);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
  



  document.querySelector(".powerOnBottomMenuAppContentGetappMenu").innerHTML =
    "";
  fetch("./Contents/Apps/side.config.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const cardSideHTML = `
                    <button class="powerOnBottomMenuAppContentWinMenuItem">
                        <img src="${location.href}/Contents/Apps/Contents/${item.name}/img/side-icon.png" alt="${item.name}" class="powerOnBottomMenuAppContentWinMenuItemIMgIcon">
                    </button>
                `;
        document
          .querySelector(".powerOnBottomMenuAppContentGetappMenu")
          .insertAdjacentHTML("beforeend", cardSideHTML);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));

}

renderApps();
