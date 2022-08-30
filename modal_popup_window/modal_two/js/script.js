"use strict";

const CLASS_LIST = {
  MODAL: "modal",
  MODAL_ACTIVE: "modal--active",
  MODAL_HAS_SCROLL: "modal--has-scroll",
  MODAL_DIALOG_BODY: "modal__dialog-body",
  TRIGGER_OPEN: "js-modal-open",
  TRIGGER_CLOSE: "js-modal-close",
};

document.addEventListener("click", (event) => {
  //open
  if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
    console.log("open");
    event.preventDefault();

    const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
    const modalId = target.getAttribute("href").replace("#", "");
    const modal = document.getElementById(modalId);

    modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }
  //close
  if (
    event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
    event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
  ) {
    console.log("close");
    event.preventDefault();
  }
});
