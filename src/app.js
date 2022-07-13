const express = require("express");
const hbs     = require("hbs");
const path    = require("path");
const app     = express();
const port    = process.env.PORT || 3000 ;


const template_path = path.join(__dirname , "../templates/views");
const partial_path = path.join(__dirname , "../templates/partials");

app.set("view engines" , "hbs");
app.set("views" , template_path);
hbs.registerPartials(partial_path);

app.use(express.static(path.join(__dirname , "../public")))

app.get ("/" , (req , res) => {
    res.render("index.hbs")
})

app.get ("/about" , (req , res) => {
    res.render("about.hbs")
})

app.get ("/weather" , (req , res) => {
    res.render("weather.hbs")
})

app.get ("*" , (req , res) => {
    res.render("404error.hbs" , {
        errorMsg : "Oops! Page Not Found"
    })
})

app.listen(port , () => {
    console.log(`listening at port ${port}`)
})