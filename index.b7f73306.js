var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){n+=+t.innerHTML.split(",").join("")});var c=n/t.length;e.textContent="".concat(n.toLocaleString("en-US")),o.textContent="".concat(c.toLocaleString("en-US"));
//# sourceMappingURL=index.b7f73306.js.map
