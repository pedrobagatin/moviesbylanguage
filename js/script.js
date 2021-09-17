var tableDiv = document.getElementById('displaytable')
var API_ENDPOINT = 'https://22pg25sw4l.execute-api.us-east-1.amazonaws.com/prod/movies_api';

function showMovies(language) {
    var tablewrap = document.getElementById('displaytable');
    var movietable = document.getElementById('movietable');
    var tbody = document.getElementById('tbody');
    
    fetchTodoList()
    function fetchTodoList(){
        var request = fetch(API_ENDPOINT+"?language=Portuguese",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            }
        }
        )
        .then(response => response.json())
        .then((data) => { 
            
            console.log(data.success); 
            data = data.success

            tbody.innerHTML = "";

            for (let i = 0; i < data.records.length; i++) {
                var row = tbody.insertRow(0)
                
                var rank = row.insertCell(0)
                var movie_cell = row.insertCell(1); //movie
                var genre_cell = row.insertCell(2); //genre
                var country_cell = row.insertCell(3); //country
                var rating_cell = row.insertCell(4); //rating

                rank.innerHTML = (data.records.length-i).toString()
                movie_cell.innerHTML = JSON.stringify(data.records[i][0].stringValue).slice(1,-1)
                genre_cell.innerHTML = JSON.stringify(data.records[i][1].stringValue).slice(1,-1)
                country_cell.innerHTML = JSON.stringify(data.records[i][2].stringValue).slice(1,-1)
                rating_cell.innerHTML = JSON.stringify(data.records[i][3].doubleValue)
            }
            
            tablewrap.classList.toggle('hidden')
            return data; 
        } )
        .catch(error => console.log('Error while fetching:', error));
    }
}

