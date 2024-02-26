document.addEventListener("DOMContentLoaded", function () {
  // Simulasi waktu loading
  setTimeout(function () {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000); // Ganti angka 3000 dengan waktu loading yang diinginkan (dalam milidetik)
});
