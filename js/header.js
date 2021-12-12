const path = window.location.pathname;
var formattedPath = path.replace('/', ' / ').substring(0, path.lastIndexOf(".html") + 2).replace('index', 'home');
if (formattedPath = '') {var formattedPath = ' / home'};

document.write('\
\
<header>\
    <a class="header-text" href="index.html">tweimann' + formattedPath + '</a>\
</header>'
);