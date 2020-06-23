const projects = [];
let currentProject = 0;

const newProject = (name) =>{
    const tasks = [];
    const deleted = 'no';
    projects.push({ name, tasks, deleted });
    generateProjectTabs()
};

const newTask = (name, description) =>{
    priority = 2;
    due_date = "01/01/2021";
    done = 'no';
    completed = 'no';
    deleted = 'no';
    projects[currentProject].tasks.push({ name, description, priority, due_date, done, completed, deleted })
    refreshDOM();
}

const deleteProject= () => {    
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
       let name = row.insertCell(0);
       let dueDate = row.insertCell(1);
       let deleted = row.insertCell(2);
       let priority = row.insertCell(3);
       name.innerText = projects[currentProject].tasks[i].name;
       dueDate.innerText = projects[currentProject].tasks[i].due_date;
       deleted.innerHTML = "<button>"+projects[currentProject].tasks[i].deleted+"</button>"
       deleted.onclick = function(){
           projects[currentProject].tasks[i].deleted='yes';
           deleteTask();
       }
       priority.innerText = projects[currentProject].tasks[i].priority;
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

newProject('limpeza');
newProject('jogar')
newTask('limpar','ok');
newTask('varrer', 'usa vassoura');

generateProjectTabs();