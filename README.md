# TypeScript REST-API Template

This repository is a template project of a REST-API service with the web framework ``expressJS`` in ``TypeScript``. 
If you want a boilerplate for your REST-Service, you can use this repository as a starting point.

You can find an advanced example repository that uses this template under [node-typescript-example](https://github.com/SerQuicky/node-typescript-example).

## Project structure

I prefer to structure the application in ``model``, ``dao``, ``controller`` and ``routes``. Each entity has one class in each directory, 
the advantage of this structure is, that each class has one responsibility. Therefore it is easier to understand the functionality of each class and
to expand/add new endpoints.

* ``model`` *(Structure of an entity)*
* ``dao`` *(Data Access Object - communication with a database, in our case with a sqlite)*
* ``controller`` *(Retrieves the parameters of the api calls, basically connects routes/endpoints with the dao)*
* ``route`` *(Endpoints for an entity (get, add, update, etc.))*

Because of this, the project structure looks like this.

```
├── controller
│   ├── first_entity.controller.ts
│   ├── second_entity.controller.ts
│   └── ...
├── dao
│   ├── first_entity.dao.ts
│   ├── second_entity.dao.ts
│   └── ...
├── model
│   ├── first_entity.interface.ts
│   ├── second_entity.interface.ts
│   └── ...
├── route
│   ├── first_entity.routes.ts
│   ├── second_entity.routes.ts
│   └── ...
└── index.ts
