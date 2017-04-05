import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import Recipe from '../models/recipe';

import bodyParser from 'body-parser';

const HOST = process.env.HOST;
const {PORT, DATABASE_URL} = require('./database');
mongoose.Promise = global.Promise;

const jsonParser = bodyParser.json();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(jsonParser);
app.use(express.static(process.env.CLIENT_PATH));

//fetch recipes from db
app.get('/api', (request, response) => {
  Recipe.find({})
  .then((recipes) => {
    return response.status(200).json(recipes);
  })
  .catch(err => {
    console.error(err);
    response.status(500).json({message: 'internal server error'})
  })
})

//post a recipes to db
app.post('/api', function(req, res) {

  let recipe = new Recipe()
      recipe.recipe = req.body.recipe
      recipe.save((err, recipe) => {
          if(err){
              res.send(err)
          }

      Recipe.find({}, (err, recipes) => {
          if(err){
              res.send(err)
          }
          res.json(recipes)
      })
  })
})

app.delete('/api/:id', (req, res) => {
  Recipe.findByIdAndRemove(
    {_id: req.params.id},
    function(error){
      if (error) {
        console.error(error);
        res.sendStatus(400);
      }
    res.sendStatus(204);
    }
  );
})

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
    return new Promise((resolve, reject) => {
      mongoose.connect(databaseUrl, err => {
          if (err) {
          return reject(err);
   }
   server = app.listen(port, () => {
       console.log(`Your app is listening on port ${port}. Your database is ${databaseUrl}.`);
       resolve();
       }).on('error', err => {
           mongoose.disconnect();
           reject(err);
       });
    });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app,
    runServer,
    closeServer
};
