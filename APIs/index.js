
var resultArray = []
window.onload = function() {
    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(dataFromApi => {
        console.log(dataFromApi);

        const selectApi = document.getElementById("selectApi");
        const categoryForm = document.getElementById("categoryForm");
        const jokeDisplay = document.getElementById("jokeDisplay");

        dataFromApi.forEach(category => {
            let option = document.createElement("option");
            option.innerHTML = category;
            option.value = category;
            selectApi.appendChild(option);
        });

       
        selectApi.onchange = function() {
            fetch(`https://api.chucknorris.io/jokes/random?category=${selectApi.value}`)
            .then(response => response.json())
            .then(jokeData => {
                let formObject = {
                    category: selectApi.value,
                    joke: jokeData.value,
                    id : jokeData.id,
                    created: jokeData.created_at,
                    updated: jokeData.updated_at

                };
                resultArray.push(formObject);
                

                document.getElementById("value").value = jokeData.value;
                document.getElementById("id").value = jokeData.id;
                document.getElementById("created").value = jokeData.created_at;
                document.getElementById("updated").value = jokeData.updated_at;
            })
        };
        

    })
    .catch(error => console.error(error));
};


datafield = [];
var tableBody = document.getElementById("tableBody");
var table = document.getElementById("categoryTable");




    fetch("https://swapi.dev/api/people")
    .then(response => response.json())
    .then(data => {
            var  characters = data.results;
             characters.forEach(character => {
                //create row
                let row = document.createElement('tr')


            //crete TD
                let Td0 =document.createElement("td")
                let Td1 =document.createElement("td")
                let Td2 =document.createElement("td")
                let Td3 =document.createElement("td")
                let Td4 =document.createElement("td")
                let Td5 =document.createElement("td")

                Td0.innerHTML = character.name
                Td1.innerHTML = character.height
                Td2.innerHTML = character.mass
                Td3.innerHTML = character.hair_color
                Td4.innerHTML = character.skin_color
                let actionBtn = document.createElement("button");
               //actionBtn.classList.add(btnAction);
                actionBtn.innerHTML = "View";
                actionBtn.type = "button";
                Td5.appendChild(actionBtn);
                Td5.addEventListener("click", function(e){
                    action(character);
                }
            );


                row.appendChild(Td0);
                row.appendChild(Td1);
                row.appendChild(Td2);
                row.appendChild(Td3);
                row.appendChild(Td4);
                row.appendChild(Td5);




                tableBody.appendChild(row);
                
                
                

            });
        })

        function action(character){
             form = document.getElementById("dataForm");
            

            //form.innerHTML = ''; // Clear existing form fields

             
                document.getElementById("name").value = character.name;
                document.getElementById("mass").value = character.mass;
                document.getElementById("skin").value = character.skin_color;
                document.getElementById("birth").value = character.birth_year;
                document.getElementById("height").value = character.height;
                document.getElementById("hair").value = character.hair_color;
                document.getElementById("eye") .value = character.eye_color;
                document.getElementById("gender").value = character.gender;




           
        
        
            form.style.display = 'block';
        
        }
