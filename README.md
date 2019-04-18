

# __CRUD API__


##  __Schema__:



__Cassandra Keyspace:__

| rowKey            | Meal Category Super Column                              |
| :----------------:|:-------------------------------------------------------:|
| 0                 |  map <  category_id, map < meal_id, map < text,text> >  |
| 1                 |  map <  category_id, map < meal_id, map < text,text> >  |
| 10,000,000        |  map <  category_id, map < meal_id, map < text,text> >  |


Sub-Column-Map-tier-1 :
| Category ID               |    Category Menu        |
| :-------------:   |:-----------------------------:|
| 0                         |   map< meals_id, text>    |
| 1                         |   map< meals_id, text>    |
| 4 (max)                   |   map< meals_id, text>    |

Sub-Column-Map-tier-2 :
| Meal list                 |       Meal          |
| :-------------:   |:-----------------------------:|
| 0                         |   map< text, text>    |
| 1                         |   map< text, text>    |
| 10(max)                   |   map< text, text>    |

Sub-Column-Map-tier-3 (i.e. Item) :
|     MealKey        |        Value            |
| :-------------:   |:-----------------------------:|
|        Item                |   text    |
|       Description          |   text    |
|        Price               |   text    |

__PostgreSQL Schema:__
Meal_Category Table:
| ID | Category |
| :------: |:------:|

Meals Table:
| ID | Meal Collection (JSON Array ) | Catergory(referencing Meal_Category ID )|
| :--: |:--------------:|:-------------------:|







##  __Restful Service API__:
| Request | Endpoint | Description | request.body |
|:-------:|:-----------|:------------:|:--------------:|
| GET | /menu/:Id | Fetch single menu from database |  |
| POST | /menus/add-new-item/:id | Add record to database |  { menu : 'Breakfast',  Name: 'Salad', Data: 'Spinach, carrots, cherry tomato ', Price: '$100.00'}|
| PUT | /menus/upaadate-menu-item/:id |  updates record in database  | {menu : 'Breakfast',key: 'Salad', data: 'Spinach, carrots, cherry tomato' }|
| DELETE | /menus/remove-menu-item/:id | remove record from database | {menu: 'Breakfast', key: 'Salad'}


