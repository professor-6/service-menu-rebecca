
# __CRUD API__

## __Schema__:

__Cassandra && PostgreSQL Tables:__
| ID   | BREAKFAST| LUNCH| DINNER| BRUNCH | HAPPYHOUR|
|:----:|:--------:|:----:|:-----:|:------:|:--------:|


##__Restful Service API__:
| Request | Endpoint | Description | request.body |
|:-------:|:-----------|:------------:|:--------------:|
| GET | /menu/:Id | Fetch single menu from database |  |
| POST | /menus/add-new-item/:id | Add record to database |  { menu : 'Breakfast',  Name: 'Salad', Data: 'Spinach, carrots, cherry tomato ', Price: '$100.00'}|
| PUT | /menus/upaadate-menu-item/:id |  updates record in database  | {menu : 'Breakfast',key: 'Salad', data: 'Spinach, carrots, cherry tomato' }|
| DELETE | /menus/remove-menu-item/:id | remove record from database | {menu: 'Breakfast', key: 'Salad'}


