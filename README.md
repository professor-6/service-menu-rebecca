
# __CRUD API__

## Postgres Install(in Terminal MAC)
brew update
brew install postgresql

## Postgres Install(in Terminal LINUX)

## Postgres Commands(in Terminal)
  pg_ctl -D /usr/local/var/postgres/ start  : start database
  pg_ctl -D /usr/local/var/postgres/ stop   : stop database
  createdb test  : create database called test

## Data Simulation Generation & Database Load Script Commands
  npm run csv-load  : generates 10 million records to directory named TESTDATA and writes to database. CSV files are deleted once written to database.

## __Schema__:

__Cassandra && PostgreSQL Tables:__

| ID   | BREAKFAST| LUNCH| DINNER| BRUNCH | HAPPYHOUR|
|:----:|:--------:|:----:|:-----:|:------:|:--------:|


##__Restful Service API__:

| Request | Endpoint             | Description                            | request.body                                                                                                                                                                                                    |
|:-------:|:--------------------:|:--------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| GET     | /menu/:Id            | Fetch  menu(s) from database           |                                                                                                                                                                                                                 |
| POST    | /addMenu/:Id         | Add new menu to database and set entry | { "menu" : "Desserts" , "data": { "itemName": "dofy" , "itemDescription":"nfw wjw" , "Price":"$20"} }'                                                                                                          |
| PUT     | /updateMenu/:Id      |  updates meal record in database       | {  "index" : 3 ,  "menu" : "Breakfast"    ,  "data": {"itemName": "pizza" , "itemDescription": "house pzza with pepperoni,tomato, anchovies and cheese" , "itemPrice": "$9999999"   }   }                       |
| DELETE  | /menus/deleteMenu:Id | remove meal record from database       |  { "index":2 ,"menu" : "breakfast"}'                                                                                                                                                                            |

`NOTE:  All  entries in database store a collection`
`index key - location in array`
`menu key - column name`

