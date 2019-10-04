function alignAsides () {
  var anchors = document.getElementsByClassName("aside");
  var asides = document.getElementsByTagName("aside");

  var length = Math.min(anchors.length, asides.length);

  for (var i = 0; i < length; i += 1) {
    var anchor = anchors[i];
    var aside = asides[i];

    var offset = window.scrollY + anchor.getBoundingClientRect().top;

    aside.style.top = offset + "px";
  }

  document.body.className = "asides-aligned";
}

window.document.addEventListener("DOMContentLoaded", alignAsides);
window.addEventListener("resize", alignAsides);
