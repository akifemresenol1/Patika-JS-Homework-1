let guest = prompt("Kullanıcı Adı Bilginizi giriniz :")
if (guest.length < 1) {
  alert("Kullanıcı bilginizi eksiksiz girdiniz tekrar deneyin!")
  window.location.reload()
} else {
  document.getElementById("myName").innerHTML = guest
}


function addZero(i) {
  if (i < 10) { i = "0" + i }
  return i;
}
function showTime() {
  const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  var date = new Date()
  let saat = addZero(date.getHours());
  let dakika = addZero(date.getMinutes());
  let saniye = addZero(date.getSeconds());
  let day = weekday[date.getDay()];
  let time = saat + ":" + dakika + ":" + saniye + " - " + day;
  document.getElementById("myClock").innerHTML = time;
}
setInterval(showTime, 1000); 