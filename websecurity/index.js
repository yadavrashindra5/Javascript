fetch('http://localhost:8082/user')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



    fetch('http://localhost:8082/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "userName": "tejas",
        "password": "tejas123",
        "userEmail": "tejas@gmail.com"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));