const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
require('dotenv').config();
const url = process.env.url;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const foodSchema = new mongoose.Schema({
    food: String,
    name: String,
    price: Number,
    link: String
});
const Food = mongoose.model("Food", foodSchema);

const recipeSchema = new mongoose.Schema({
    tag: Number,
    recipeName: String,
    cuisineType: String,
    ingredients: [String],
    preparationSteps: String,
    photo: String,
});
const Recipe = mongoose.model("Recipe", recipeSchema);

let option = "pizza";


app.post("/", function (req, res) {
    option = req.body.food;
    Food.find({ food: option })
        .then(function (arr) {
            res.render("home", { arr: arr });
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send("Error fetching food data");
        });
});

app.get("/", function (req, res) {
    Food.find({ food: option })
        .then(function (arr) {
            res.render("home", { arr: arr });
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send("Error fetching food data");
        });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/slide", function (req, res) {
    let o = req.body.action;
    console.log(o);
    if (o === "Home") res.redirect("/");
    else res.redirect("/" + o);
});

app.get("/blog", (req, res) => {
    Recipe.find({})
        .then(recipes => {
            res.render("blog", { ele: recipes });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error fetching recipes");
        });
});

app.post("/reciepe", function (req, res) {
    const p = req.body.foodname;
    console.log("Food name:", p);
    res.redirect("/reciepe/" + p);
});

app.get("/reciepe/:tag", function (req, res) {
    const inp = Number(req.params.tag);
    console.log("Tag from request:", req.params.tag);
    console.log("Converted tag:", inp);

    if (!isNaN(inp)) {
        Recipe.findOne({ tag: inp })
            .then(function (ele) {
                if (ele) {
                    res.render("Showreciepe", { ele: ele });
                } else {
                    res.send("No recipe found with this tag.");
                }
            })
            .catch(function (err) {
                console.log(err);
                res.status(500).send("Server error.");
            });
    } 
    else {
        res.send("Invalid tag value; must be a number.");
    }
});

app.post("/share",function(req,res){
    res.redirect("/share");
})
app.get("/share",function(req,res){
res.render("share");
})
app.post("/share-recipe", (req, res) => {
    const { recipeName, cuisineType, ingredients, preparationSteps, photo } = req.body;

    const newRecipe = new Recipe({
        tag: Date.now(),  
        recipeName: recipeName,
        cuisineType: cuisineType,
        ingredients: ingredients.split(',').map(item => item.trim()),
        preparationSteps: preparationSteps,
        photo: photo
    });

    newRecipe.save()
        .then(() => {
            res.redirect("/blog");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error saving the recipe");
        });
});

app.get('/blogsearch', (req, res) => {
    const searchQuery = req.query.Search;

    Recipe.find({
        recipeName: { $regex: searchQuery, $options: 'i' } 
    })
    .then(recipes => {
        res.render('blog', { ele: recipes }); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Error searching recipes");
    });
});
app.listen(3000, function () {
    console.log("Running on port 3000 http://localhost:3000/");
});




