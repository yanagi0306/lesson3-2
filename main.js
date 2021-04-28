"use-strict"
{
  const todos = [];

  const listRiset = () => {
    const lists = document.querySelectorAll(`tr`)
    lists.forEach(function (list, i) {
      if (i > 0) {
        list.remove();
      }
    });
  }

  const addList = () => {
    for (let i = 0; i < todos.length; i++) {
      const tr = document.createElement(`tr`);
      document.querySelector(`table`).appendChild(tr);

      const id = document.createElement(`td`);
      id.textContent = i;
      tr.appendChild(id);

      const coment = document.createElement(`td`);
      coment.textContent = todos[i].task;
      tr.appendChild(coment);

      const workBtntd = document.createElement(`td`)
      const workBtn = document.createElement(`input`)
      workBtn.value = todos[i].status;
      workBtn.type = `button`;
      workBtn.classList.toggle(`btn`);
      workBtn.classList.toggle(`sta`);
      tr.appendChild(workBtntd);
      workBtntd.appendChild(workBtn);


      const delBtntd = document.createElement(`td`);
      const delBtn = document.createElement(`input`);
      delBtn.value = `削除`;
      delBtn.type = `button`;
      delBtn.classList.toggle(`btn`);
      delBtn.classList.toggle(`del`);
      tr.appendChild(delBtntd);
      delBtntd.appendChild(delBtn);
      delBtn.addEventListener(`click`, () => {
        todos.splice(i, 1);
        listRiset();
        addList();
      });
    }
  }
  
  document.getElementById(`add`).addEventListener(`click`, () => {
    const todo = {
      task: document.getElementById(`add-text`).value,
      status: `作業中`,
    }
    todos.push(todo);
    listRiset();
    addList();
    document.getElementById(`add-text`).value = ""
  });

}



