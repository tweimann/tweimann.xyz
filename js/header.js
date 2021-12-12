const path = window.location.pathname;
var formattedPath = path.replace('/', ' / ').replace('.html', '');

document.write('\
\
<header>\
    <a class="header-text" href="index.html"> tweimann' + formattedPath + '</a>\
</header>'
);