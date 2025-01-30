if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express');

// const LodgingController = require('./controllers/LodgingController');
// const PubLodgingController = require('./controllers/PubLodgingController');
// const TypeController = require('./controllers/TypeController');
const UserController = require('./controllers/UserController');

// const authentication = require('./middlewares/authentication');
// const guardAdmin = require('./middlewares/guardAdmin');
// const errorHandler = require('./middlewares/errorHandler');

const app = express()
const PORT = process.env.PORT || 3000

// ! Body-parser middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage()
});

// app.use('/', router)
app.get('/', (req, res) => {
    res.status(200).json({
        message: "IT WORKS!"
    });
})

// ! Users endpoints
app.post('/register', UserController.register)
app.post('/login', UserController.login)

// ! Authentication middleware
// app.use(authentication);

// ! Recipes endpoints
app.post('/recipes', LodgingController.addLodging)
app.get('/recipes', LodgingController.getAllLodging)
app.get('/recipes/:id', LodgingController.getLodgingById)
app.put('/recipes/:id', guardAdmin, LodgingController.updateLodgingById)
app.delete('/recipes/:id', guardAdmin, LodgingController.deleteLodgingById)
app.patch('/recipes/:id/cover-url', guardAdmin, upload.single("file"), LodgingController.updateLodgingCoverById)

// ! Categories endpoints
app.post('/types', TypeController.addType)
app.get('/types', TypeController.getAllTypes)
app.put('/types/:id', guardAdmin, TypeController.updateTypeById)

// ! Public lodging endpoints
app.get('/pub/recipes', PubLodgingController.getAllLodging)
app.get('/pub/recipes/:id', PubLodgingController.getLodgingById)

// ! Error Handler middleware should be the last middleware
// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server currently listening on https://localhost:${PORT}`)
})