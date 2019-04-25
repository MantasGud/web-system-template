function createNode(element)
{
    return document.createElement(element);
}

function append(parent,el)
{
    return parent.appendChild(el)
}

function categoriesList(){

    const ul = document.getElementById("categories");

    var url = 'http://jservice.io/api/categories?count=' + document.getElementById("numbercategories").value;

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){

            var categories = data;

            return categories.map(function(category){

                var li = createNode('li'),
                    span = createNode('span');

                //span.innerHTML=`${category.id} ${category.title}`;
                span.textContent=`${category.id} ${category.title}`;

                append(li,span);
                append(ul,li);
            })

        })

        .catch(function(error){

            alert(JSON.stringify(Error));
            console.log(JSON.stringify(Error));

        })

}

function categoryByID()
{
    var url = 'http://jservice.io/api/category?id=' + document.getElementById("CategoryIDInput").value;

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            var CatByID = data;

            var informacija = `${CatByID.id} ${CatByID.title}`;
            document.getElementById("CategoryID").textContent = informacija;

        })

        .catch(function(error){
            //alert(JSON.stringify(Error));
            console.log(JSON.stringify(Error));

        })

}

function categoryByOffset()
{
    var offsetas = document.getElementById("CategoryOffsetInput").value;
    offsetas = offsetas - 1;
    var url = 'http://jservice.io/api/categories?offset=' + offsetas;

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            var CatByID = data;

            return data.map(function(Question){

                var informacija = `${Question.id} ${Question.title}`;
                document.getElementById("CategoryOffset").textContent = informacija;

            })

        })

        .catch(function(error){
            //alert(JSON.stringify(Error));
            console.log(JSON.stringify(Error));

        })

}

function QuestionRefresh()
{
    var url = 'http://jservice.io/api/random';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){

            return data.map(function(Question){

                var informacija = `${Question.id}`;
                document.getElementById("IDQuestion").textContent = informacija;

                informacija = `${Question.value}`;
                document.getElementById("ValueQuestion").textContent = informacija;

                informacija = `${Question.question}`;
                document.getElementById("QuestionQuestion").textContent = informacija;

                informacija = `${Question.answer}`;
                document.getElementById("AnswerQuestion").textContent = informacija;

                informacija = `${Question.airdate}`;
                document.getElementById("AirDateQuestion").textContent = informacija;

                informacija = `${Question.category_id}`;
                document.getElementById("CategoryIDQuestion").textContent = informacija;

                informacija = `${Question.game_id}`;
                document.getElementById("GameIDQuestion").textContent = informacija;

            })

        })

        .catch(function(error){
            //alert(JSON.stringify(Error));
            console.log(JSON.stringify(Error));

        })

}

QuestionRefresh();

