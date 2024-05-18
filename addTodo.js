document.querySelector("#todo").addEventListener("click", () => { 
  create(); // calling create func when btn click
});

const create = async () => {
  try {
    let userinput = document.querySelector("#title").value;

    let id = 0;

    let response = await fetch(`http://localhost:3000/todos`);
    let todos = await response.json();
     id = todos.length > 0 ? todos[todos.length - 1].id +1 :1; // to increment of the id number

    //what data should be going to store
    let obj = {
      id: id,
      title: userinput,
      completed: true,
    };
    // add data to the json
    let res = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    window.location.href = "index.html"; //redirect to the home page after adding data
  } catch (error) {
    console.log(error);
  }
};
