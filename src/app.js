const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepoId(request, response, next){
  const { id } = request.params;

  if (!isUuid(id)){
    return response.status(400).json({message: 'Repository ID is not valid.'});
  }

  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return response.json(repository);
  
});

app.put("/repositories/:id", validateRepoId, (request, response) => {
  const { id } = request.params;
  const {title, url, techs} = request.body;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0){
    return response.status(400).json({message: 'Repository not found.'});
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repoIndex].likes
  }

  repositories[repoIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", validateRepoId, (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id );

  if (repoIndex < 0){
    return response.status(400).json({message: 'Repository not found.'})
  }

  repositories.splice(repoIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", validateRepoId, (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0){
    return response.status(400).json({message: 'Repository not found.'})
  }

  let repository = repositories[repoIndex];
  let likes = repository.likes;

  repository.likes = ++likes

  repositories[repoIndex] = repository;

  return response.json(repository);

});

module.exports = app;
