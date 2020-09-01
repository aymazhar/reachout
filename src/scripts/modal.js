let modal = document.getElementById("privacyModal");

let modalLink = document.getElementById("modalLink");

let close = document.getElementsByClassName("close")[0];

modalLink.onclick = () => {
  modal.style.display = "block";
}

close.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal){
    modal.style.display = "none";
  }
}