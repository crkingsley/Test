const {
    app,
    startDatabase,
} = require('./app-common.js')

// endpoint to return top level api
// much like a switch statement
app.get('/', async (req, res) => {
    res.send({
        message: "You have reached the top level route of the recipe api"
    });
});

app.use('/recipes', require('./routes/recipeRoutes'))

startDatabase().then(async () => {
    // `then` start the web server after the database starts
    app.listen(3000, async () => {
        console.log('Web server has started on port 3000 http://localhost:3000');
    });
});
 