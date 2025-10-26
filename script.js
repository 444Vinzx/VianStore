function showQRIS(product) {
  document.getElementById("qrisTitle").innerText = "Pembayaran " + product;
  document.getElementById("qrisModal").style.display = "flex";
}
function closeQRIS() {
  document.getElementById("qrisModal").style.display = "none";
}
