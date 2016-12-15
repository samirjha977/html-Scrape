
  var htmlContent = require('./content.js')();
  //console.log(htmlContent);
  function htmlScape(html) {

    var reg =/<\/div>/g;

    var match = html.match(reg);
    if (match == null) {
      return 0;
    } else {
      return match.length;
    }
  }

  function htmlElement(html) {
    var reg =/<\/\w+>/g;
    var match = html.match(reg);
    if (match == null) {
      return 0;
    } else {
      return match.length;
    }
  }

  function htmlNew(html) {
    var reg =/new\syork/gi;
    var match = html.match(reg);
    if (match == null) {
      return 0;
    } else {
      return match.length;
    }
  }

  function test() {
    return htmlScape("<div>sdhshsdsdksdksdksd<div>") === 0;
  }

  console.log(test());

  // console.log(htmlScape(htmlContent));
  // console.log(htmlElement(htmlContent));
  // console.log(htmlNew(htmlContent));
