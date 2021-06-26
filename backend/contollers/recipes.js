
const Recipe = require('../models/recipeModel');
const { User} = require('../models/userModel');

const newestRecipes = async (_, res, next) => {
    try {
        const getNewestRecipes = await Recipe.find().sort({createdAt : -1}).limit(3).exec();
        res.status(200).send({
            error: false,
            getNewestRecipes
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
  await next;
}

const popularRecipes = async(_, res, next) => {
    try {
        const getTheMostPopularRecipes = await Recipe.find({}).sort({ rating: -1 }).limit(6).exec();

        res.status(200).send({
            error: false,
            getTheMostPopularRecipes
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
  await next;
}

const filterByCategory = async(req, res, next) => {
    try{
        const getRecipesByCategory =await Recipe.find({}).where('category').equals(req.query.category).exec();

        res.status(200).send({
            error: false,
            getRecipesByCategory
        });

    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
    await next;
};

const fetch = async (_, res, next) => {
    try {
        const recipes = await Recipe.find({});

        res.status(200).send({
            error: false,
            recipes
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
  await next;
};

const fetchOne = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById({ _id: req.params.id});

        res.status(200).send({
            error: false,
            recipe
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: 'Recipe Not Found'
        });
    }
  await next;
};

const create = async( req, res, next) => {
    try {
        const recipe = await Recipe.findOne({ title: req.body.title });
        if (recipe != null) {
            res.status(400).send({
                error: true,
                message: `Title ${req.body.title} is already taken.`
            });
        }

        const createdRecipe = await Recipe.create(req.body);
        res.status(200).send({
            error: false,
            message: 'New Recipe Created!',
            createdRecipe
          });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: "Error Creating Recipe",
            exception: err.message
        });
    }
    await next;
};

const update = async (req, res, next) => {
    try {
        await Recipe.findByIdAndUpdate({ _id: req.params.id}, req.body);
        res.status(200).send({
            error: false,
            message: 'Recipe is updated!'
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message:"Error Updating Recipe"
        });
    }
    await next;
};

const del = async (req, res, next) => {
    try {
        await Recipe.deleteOne({ _id: req.params.id })
        res.status(200).send({
            error: false,
            message: `Recipe is Removed!!`
        });
    }
    catch(err) {
        res.status(500).send({
            error: true,
            message:err.message
          })
    }
    await next;
}

const rate = async (req, res, next) => {
    try {
        const rateRecipe = await Recipe.findByIdAndUpdate({ _id: req.params.id}, {$inc: {rating:1}}, {new:true}).exec();
        res.status(200).send({
            error: false,
            message: 'Your Rate is Succesfully Submitted',
            rateRecipe
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: 'Could Not Rate'
        });
    }
  await next;
}

const fetchRecipesByUser = async(req, res, next) => {
    try {
        const userRecipes = await Recipe.find({'user': req.query['user']}).populate('user', {firstName: 1, lastName: 1}).exec();
        res.status(200).send({
            error: false,
            userRecipes
        });
    } catch(err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
    await next;
}


module.exports = {
    fetch,
    fetchOne,
    fetchRecipesByUser,
    create,
    update,
    del,
    newestRecipes,
    popularRecipes,
    filterByCategory,
    rate
};


