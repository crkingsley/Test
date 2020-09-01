
const router = require('express').Router();
const { deleteRecipe, updateRecipe, createRecipe, getRecipes } = require('../database/recipes');

router.get('/', async (apiRequest, apiResponse) => {
    apiResponse.send(await getRecipes());
});


// we name our parameters apiRequest and apiResponse here but
// there is no strong reason these variables could not be named `req` and `res` or `request` and `response`
// the reason for this naming is so we are thinking about "api" tonight
router.post('/', async (apiRequest, apiResponse) => {
    const newRecipe = apiRequest.body;
    await createRecipe(newRecipe);
    apiResponse.send({
        message: 'New recipe created.',
        allRecipes: await getRecipes(),
        thanks: true
    });
});

// endpoint to delete a recipes
router.delete('/:recipeId', async (apiRequest, apiResponse) => {
    await deleteRecipe(apiRequest.params.recipeId);
    apiResponse.send({ message: 'Recipe deleted.' });
});

// endpoint to update a recipes
router.put('/:id', async (apiRequest, apiResponse) => {
    const updatedRecipe = apiRequest.body;
    console.log({ updatedRecipe })
    await updateRecipe(apiRequest.params.id, updatedRecipe);
    apiResponse.send({ message: 'Recipe updated.' });
});

module.exports = router;



