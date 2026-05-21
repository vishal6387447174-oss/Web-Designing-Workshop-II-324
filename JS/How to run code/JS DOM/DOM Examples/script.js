function toggleImage() {
  let img = document.getElementById('myImage');
  if (img.src.match("off")) {
    img.src = "https://share.google/7NxR0zDZ5oUv0iY3N";
  } else {
    img.src = "https://share.google/wC9ikd5a6EckcBW0e";
  }
}
