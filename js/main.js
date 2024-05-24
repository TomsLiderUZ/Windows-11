




let isMenuVisible = false;

function powerOnRightClickMenuOpen(prop) {
  const menu = document.querySelector(".powerOnRightClickMenuBg");
  if (prop === true) {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.style.opacity = "1";
    }, 10);
    isMenuVisible = true;
  } else if (prop === false) {
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
    }, 100); 
    isMenuVisible = false;
  }
}

document.body.addEventListener("click", (event) => {
  const menu = document.querySelector(".powerOnRightClickMenuBg");
  if (isMenuVisible) {
    powerOnRightClickMenuOpen(false);
  }
});


document.querySelector(".powerOn").addEventListener("contextmenu", function (event) {
  event.preventDefault();
  const menu = document.querySelector(".powerOnRightClickMenuBg");
  const bodyWidth = document.body.clientWidth;
  const clickX = event.clientX;

  if (isMenuVisible) {
    powerOnRightClickMenuOpen(false);
  } else {
    menu.style.left = `${event.clientX}px`;
    menu.style.top = `${event.clientY}px`;
    powerOnRightClickMenuOpen(true);
  }
});

document.querySelector(".powerOnRightClickMenuBg").addEventListener("contextmenu", (event) => {
  event.preventDefault();
  powerOnRightClickMenuOpen(false);
});
