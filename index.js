let container = document.querySelector("#container");

//appending to the dom with the help of forEach function ans creating the element
const displayData = (data) => {
  data.forEach((ele) => {
    // container.innerHTML = "";
    let box = document.createElement("div");

    let id = document.createElement("p");
    id.innerHTML = ele.id;
    // console.log(ele.id)

    let title = document.createElement("p");
    title.innerHTML = ele.title;

    let comp = document.createElement("p");
    comp.innerHTML = ele.completed;

    // delete functionality from json
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "DELETE";
    delBtn.addEventListener("click", async () => {
      try {
        let res = await fetch(`http://localhost:3000/todos/${ele.id}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
      console.log(res);
        getData()
      // window.location.href = "addTodo.html" // if we want to redirect to the addTodo page after delete, we can use this code
    }),

      //appending to the dom
      box.append(id, title, comp, delBtn);
      container.append(box);
  });
};

//fetching data from json server
const getData = async () => {
  let res = await fetch(`http://localhost:3000/todos`);
  console.log(res);

  let data = await res.json();
  // console.log(data)

  displayData(data);
};
getData();
