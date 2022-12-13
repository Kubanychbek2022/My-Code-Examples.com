window.addEventListener("load", loadCodes);

function loadCodes() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "code-samples.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = this.responseText;
      
      const innerCode = document.querySelector(".inner-code");
      const pre = document.createElement("pre");
      pre.classList.add("pre");

      pre.innerHTML = `
      <h4>${data}</h4>
      `;
      innerCode.appendChild(pre);
    }
  }
  xhr.send();
}


setTimeout(() => {
  
  document.querySelector(".window").remove();

}, 3000);