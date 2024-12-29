// load-header.js
document.addEventListener("DOMContentLoaded", function () {
  var header = /*html*/`
    <header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ip-calculator.html">IP calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="clone-text.html">Clone text</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="csv-to-json.html">CSV to JSON</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `;
  document.getElementById("header").innerHTML = header;
});
