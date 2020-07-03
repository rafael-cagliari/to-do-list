const projects = [{name: "limpeza", tasks: [{"name": "lavar","description": "bem direitinho", "priority": 2, "due_date": "01/01/2021"
,"done": "no", "completed": "no", "deleted": "no"}]}];
let currentProject = 0;
let project_already_exists = 'no'
let task_already_exists = 'no'

const newProject = () =>{
    const name = document.getElementById('new_project').value;
    checkIfProjectExists(name);
    if(project_already_exists=='yes'){project_already_exists='no'; return};
    const tasks = [];
    const deleted = 'no';
    projects.push({ name, tasks, deleted });
    generateProjectTabs()
};

const newTask = () =>{
    name = document.getElementById('new_task').value;
    checkIfTaskExists(name);
    if(task_already_exists=='yes'){project_already_exists=='no'; return}
    description = document.getElementById('description').value;
    priority = document.querySelector('input[name=urgency]:checked').value;
    due_date = document.getElementById("due-date").value;
    done = 'no';
    completed = 'no';
    deleted = 'no';
    projects[currentProject].tasks.push({ name, description, priority, due_date, done, completed, deleted })
    refreshDOM();
}

const deleteProject= () => {   
    if(projects.length==0){return}
    let projects_div = document.querySelector('#projects');
    if(projects.length == 0){projects_div.remove(projects_div.firstElementChild); return};
    for(let i = 0; i < projects_div.children.length ; ++i){
        if(projects_div.children[i].id == projects[currentProject].name){
            projects_div.removeChild(projects_div.children[i]);
        }
    }
    projects.splice(currentProject, 1);
    refreshDOM()}
;

const deleteTask = () =>{
        for (let i = 0; i<projects[currentProject].tasks.length; ++i){
            if(projects[currentProject].tasks[i].deleted=='yes'){
                projects[currentProject].tasks.splice(i, 1);
            }
        }
        refreshDOM();
    }

const checkIfProjectExists = (proj_name) =>{
    for (let i=0; i<projects.length; ++i){
        if(projects[i].name == proj_name){
            project_already_exists = 'yes'; alert('A project with that name already exists')
        }
    }
}

const checkIfTaskExists = (task_name) =>{
    for (let i=0; i<projects[currentProject].tasks.length; ++i){
        if(projects[currentProject].tasks.name == task_name){
            task_already_exists = 'yes'; alert('A task with this name already exists within this project')
        }
}}
// ---------------------------------------DOM---------------------------------------------------
//since onclick needs an anonymous function it will have to perform 2 tasks
const generateProjectTabs = () =>{
    let projects_div = document.querySelector('#projects')
    projects_div.innerHTML = '';
    for (let i = 0; i<projects.length; ++i){
    let tab = document.createElement('button');
    tab.innerText = projects[i].name;
    tab.id = projects[i].name;
    tab.onclick = function(){
        for(let i=0; i<projects.length; i++){
            if(projects[i].name == tab.id){
                currentProject = i
            }
        }
    refreshDOM()
    }
    projects_div.appendChild(tab);
    refreshDOM()
    };
}

const generateRows = () =>{
    let table = document.querySelector('#tasks')
    if(projects[currentProject] == undefined){return}
    for(let i = 0; i<projects[currentProject].tasks.length; ++i){
       let row = table.insertRow();
       row.id = projects[currentProject].tasks[i].name;
       if(projects[currentProject].tasks[i].priority=="high"){row.style.color="red"};
       if(projects[currentProject].tasks[i].priority=="medium"){row.style.color="orange"};
       if(projects[currentProject].tasks[i].priority=="low"){row.style.color="green"};
       let name = row.insertCell(0);
       let dueDate = row.insertCell(1);
       let deleted = row.insertCell(2);
       let completed = row.insertCell(3);
       completed.innerHTML = "<input type='checkbox'></input>"
       name.innerText = projects[currentProject].tasks[i].name;
       dueDate.innerText = projects[currentProject].tasks[i].due_date;
       deleted.innerHTML = "<button>"+projects[currentProject].tasks[i].deleted+"</button>"
       deleted.onclick = function(){
           projects[currentProject].tasks[i].deleted='yes';
           deleteTask();
       }
    }
}

const refreshDOM = () =>{
    deleteRows();
    generateRows();
}

const deleteRows = () =>{
    let table = document.querySelector('#tasks');
    let rows_len = document.querySelectorAll('tr').length-1;
    for (i=rows_len; i>0; --i){
        table.deleteRow(i)
    }
}
generateProjectTabs();
/*
!!!!!!!!!!!!!!!!!!!!Pra quando for passar pro webpack!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window.newTask = newTask;
window.newProject = newProject;
window.deleteProject = deleteProject;
window.deleteTask = deleteTask;*/