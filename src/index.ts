var mainTemplate = require("./views/main.hbs");

var context = {
	"name":"Ritesh Kumar",
	"occupation" : "Developer",
  "people": [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}

var templateScript = mainTemplate(context);

document.write(templateScript);