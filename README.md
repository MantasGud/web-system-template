# Jeopardy Questionnaire

## Description
    Website for Jeopardy Tv show Questionnaire.

## Entity definition
- [ ] Question
    - [ ] ID
    - [ ] Answer
    - [ ] Question
    - [ ] Value
    - [ ] Airdate
    - [ ] Category_ID
    - [ ] Game_id
    
- [ ] Category
    - [ ] Category_ID
    - [ ] Category_Title

## API definition
- Get Random Question http://jservice.io/api/random

- Get category offset from first one /api/categories?offset=:Offset

   • 404 Not found category
   
- Get Category by ID /api/category?id=:id

   • 404 Not found
   
- Get 50 first Categories /api/categories?count=50

- 404 Page not found

- 500 Server error


## UI definition
- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
