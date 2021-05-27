Sequelize: 
    - Sequelize is a JS library that we'll use to manage our PostgreSQL databases
        - it's also an object relational mapper (ORM), meaning that it sends our data to our databases using JS object syntax
    - Sequelize is all about Models. Models are how we shape the data we'll be sending to our databases.
    - Our models are both the objects taht we'll interact with in our application as well as the primary tables that we'll create and manage in our databases

PG: 
    - The pg package allows us to write the dialect that sequelize needs to speak to our PostgreSQL databases

    DB Connection URI: database://user:passwrod@host:port/dbname

    