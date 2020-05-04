$(document).ready(function(){
$('.btn').on('click', function(){
    let value = $('.task-input').val()

    if(!value){
        alert('Заполните все поля')
        return
    }

    const taskObj = {
        task: value
    }

    setItemToStorage(taskObj)
    renderData()

    $('.task-input').val('')
})

    const setItemToStorage = (taskObj) => {
        if(!localStorage.getItem('tasks-data')){
            localStorage.setItem('tasks-data', '[]')
        }

    const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'))

    storageTasksData.push(taskObj)

    localStorage.setItem('tasks-data', JSON.stringify(storageTasksData))
    }

    const renderData = ()=> {
        let data = JSON.parse(localStorage.getItem('tasks-data'))

        if(!data) return

        $('.task-list').html('')
        
        data.forEach(item => {
            $('.task-list').append(`<div class="task-line">
            ${item.task}
            <i class="fas fa-trash-alt"></i>
            </div>`)
        })
    }

    renderData()


    $('body').on('click', '.fas', function(){
        const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'))

        let index = $(this).parent().index()

        storageTasksData.splice(index,1)

        localStorage.setItem('tasks-data', JSON.stringify(storageTasksData))
        renderData()
    })
})