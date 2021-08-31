# CarAPI

Bienvenue sur le CarAPI qui est un REST API fait à partir de la technologie Nodejs. Un serveur crée par le framework Express de Node afin d'accomplir les caractéristiques suivants :

- Créer , mettre à jour , supprimer ,  récupérer les voitures dans la base de données.
- Un utilisateur peut commenter une voiture ou plusieurs , même étant non-authentifier.
- Par contre un utilisateur non-authentifier n'a pas le privilège de récupérer les commentaires

## Les principaux technologies utilisées sont :

- Nodejs
- Express
- MongoDB
- Mongoose
- JsonWebToken
- Bcryptjs

## Pour démarrer cet API il faut suivre les étapes suivantes :

- Avoir Nodejs installé dans son machine
- Taper la commande suivante pour l'installation des dépendances tiers :

    ```jsx
    npm install
    ```

- Lancer le server :

```jsx
npm run dev
```

### Endpoints :

- Cars entity :

```jsx
GET localhost:8080/api/v1/car/retrieve
POST localhost:8080/api/v1/car/create
DELETE localhost:8080/api/v1/car/delete
PUT localhost:8080/api/v1/car/update
```

- Comments entity:

```jsx
GET localhost:8080/api/v1/comment/retrieveByCar
POST localhost:8080/api/v1/comment/create
DELETE localhost:8080/api/v1/comment/delete
PUT localhost:8080/api/v1/commnet/update
```

- Authentification entity :

```jsx
POST localhost:8080/api/v1/auth/login
POST localhost:8080/api/v1/comment/register
```

### Auteur :

author : @RAVELO MEVA SOAVINA 

website : [https://ravelomevasoavina.vercel.app](https://ravelomevasoavina.vercel.app)

Linkedin : [https://www.linkedin.com/in/meva-soavina-ravelo-8a455120a/](https://www.linkedin.com/in/meva-soavina-ravelo-8a455120a/)