
# __CRUD API__


## Data Simulation Generation & Database Load Script Commands
  npm run csv-load  : generates 10 million records to directory named TESTDATA
  npm run postgres-load : copies csv data to postgres
## __Schema__:

__Cassandra && PostgreSQL Tables:__
| ID   | BREAKFAST| LUNCH| DINNER| BRUNCH | HAPPYHOUR|
|:----:|:--------:|:----:|:-----:|:------:|:--------:|


##__Restful Service API__:
| Request | Endpoint             | Description                            | request.body                                                                                                                                                                                                    |
|:-------:|:--------------------:|:--------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| GET     | /menu/:Id            | Fetch  menu(s) from database           |                                                                                                                                                                                                                 |
| POST    | /addMenu/:Id         | Add new menu to database and set entry | { "menu" : "Desserts" , "data": { "itemName": "dofy" , "itemDescription":"nfw wjw" , "Price":"$20"} }'                                                                                                          |
| PUT     | /updateMenu/:Id      |  updates meal record in database       | {  "index" : 3 ,  "menu" : "Breakfast"    ,  "data": {"itemName": "pizza" , "itemDescription": "house pzza with pepperoni,tomato, anchovies and cheese" , "itemPrice": "$9999999"   }   }'                      |
| DELETE  | /menus/deleteMenu:Id | remove meal record from database       |  { "index":2 ,"menu" : "breakfast"}' |

`NOTE:  All  entries in database store a collection`
`index key - location in array`
`menu key - column name`

