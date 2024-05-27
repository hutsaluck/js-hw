const visitTable = document.getElementById('visit_table')
let visitItems = sessionStorage.getItem('visit_data')


if(visitItems){
    let countItem = 0
    visitItems = JSON.parse(visitItems)
    
    for(const visitItem of visitItems){
        visitTable.querySelector(`tbody`).innerHTML +=`<tr>
                    <td>${++countItem}</td>
                    <td>${visitItem}</td>
                </tr>`
    }
    
} else {
    visitTable.querySelector(`tbody`).innerHTML =`<tr>
                    <td colspan="2">strong{No page visits}</td>
                </tr>`
}
