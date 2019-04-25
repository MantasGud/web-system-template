# Jeopardy Questions and Category search

## Description
   Get random questions from famous game named Jeopardy. Also you can search for categories in this website.     

## Entity definition
- [ ] Question
    - [ ] ID - integer
    - [ ] Answer - string
    - [ ] Question - string
    - [ ] Value - string
    - [ ] Airdate - string
    - [ ] Category_ID - integer
    - [ ] Game_id - integer
    
- [ ] Category
    - [ ] Category_ID - integer
    - [ ] Category_Title - string

## API definition
- Get Random Question http://jservice.io/api/random

- Get category offset from first one /api/categories?offset=:Offset

   • 404 Not found category
   
- Get Category by ID /api/category?id=:id

   • 404 Not found
   
- Get first Categories(from 1 to 100) /api/categories?count=:id

- 404 Page not found

- 500 Server error


## UI definition

https://wireframe.cc/2da23v
