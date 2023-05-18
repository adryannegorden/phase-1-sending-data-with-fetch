function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    const body = JSON.stringify({ name: name, email: email });
  
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    const body = JSON.stringify({ name: name, email: email });
  
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => {
      const id = data.id; // Access the newly assigned ID from the response object
      const idElement = document.createElement("p");
      idElement.textContent = id;
      document.body.appendChild(idElement);
    })
    .catch(error => console.log(error));
  }

  function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    const body = JSON.stringify({ name: name, email: email });
  
    return fetch(url, {
      method: "POST",
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorMessage = error.message; // Access the error message
      const errorElement = document.createElement("p");
      errorElement.textContent = errorMessage;
      document.body.appendChild(errorElement);
    });
  }
  