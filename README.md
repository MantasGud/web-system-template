# Jeopardy Questions and Category search

## Description
   Get random questions from famous game named Jeopardy. Also you can search for categories in this website.     

## Entity definition
- [ ] Question
    - [ ] ID - integer(max number(2147483647))
    - [ ] Answer - string(max length(10000))
    - [ ] Question - string(max length(10000))
    - [ ] Value - string(max length(10000))
    - [ ] Airdate - string(max length(10000))
    - [ ] Category_ID - integer(max number(2147483647))
    - [ ] Game_id - integer(max number(2147483647))
    
- [ ] Category
    - [ ] Category_ID - integer(max number(2147483647))
    - [ ] Category_Title - string(max length(10000))

## API definition
- Get Random Question http://jservice.io/api/random

- Get category offset from first one /api/categories?offset=:Offset

   • 404 Not found category
   
- Get Category by ID /api/category?id=:id

   • 404 Not found
   
- Get first Categories(from 1 to 100) /api/categories?count=:id

- Post invalid mark of Question /api/invalid?id=:id
   • 404 Question not found

- 404 Page not found

- 500 Server error


## UI definition

https://wireframe.cc/2da23v
