const hCol = [
    {data:"userId"},
    {data:"id"},
    {data:"title"},
    {data:"completed"},
]

      const getFetchResponse = fetch('https://jsonplaceholder.typicode.com/todos/1')

      const jsonUrl = "https://jsonplaceholder.typicode.com/todos/"

const Table = document.querySelector("#myTable")
Table.innerHTML = `
<thead><tr></tr></thead>
<tbody></tbody>
<tfooter></tfooter>`

/*
const radioButton = `<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onclick="sortThisClass()">
<label class="form-check-label" for="inlineRadio1">All</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
<label class="form-check-label" for="inlineRadio2">Checked</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
<label class="form-check-label" for="inlineRadio3">Uncheck</label>
</div>`
*/

/* Add button to something
$("tr").addClass("allthing")
const newDiv = document.createElement("div")
newDiv.innerHTML = radioButton
document.getElementById("myTable_filter").prepend(newDiv)
*/

/*
function addButtonToTable(table){
    table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) )
}
*/
function switchListener(table){
  // Eventlistener sur les boutons de sélection
  $('tr').on('click', function (event) {
    let classList = event.currentTarget.classList
    console.log('td click event');
    if(classList.contains("allthing")){
    table.$(event.currentTarget).removeClass('allthing');
    $(this).addClass('selected')}
   else{if(classList.contains("selected")){
    table.$(event.currentTarget).removeClass('selected')
  };
    $(this).addClass('allthing')} })}

function sortThisClass(targetClass){
                    console.log("sortThisClass = ",targetClass)
                    $.fn.dataTable.ext.search.push(
                      function(settings, data, dataIndex) {console.log("click")
                        return $(table.row(dataIndex).node()).hasClass(targetClass);
                      }
                    )}

   // $(document).ready(function() {
        $.ajax({
        type: "GET",
        mimeType: "json",
        url: jsonUrl,
        success: function (obj, textstatus) {
            
                // Création des headers.
                for (let header in obj[0]){
                console.log(header)
                newTh = document.createElement("th")
                newTh.innerText = header
                Table.querySelector("thead tr").append(newTh)
            }

                var table = $('#myTable').DataTable({
                    "processing": true,
                    "data": obj,
                    "select":true,
                    "paging":false,
                      "select":{
                        "style":"multi"},
                    "columns": hCol,
                    columnDefs: [
                        { targets: [0, 1,2,3], visible: true}
                    ],
                    "dom": '<"top"if>Brt<"bottom"lpi><"clear">'

                    /* 
                    // Initialiser des boutons :
                    buttons: [
                        {
                            select:"os",
                            text: 'Check',
                            className: "inlineRadio1",
                            action: function ( e, dt, node, config ) {
                                
                                console.log("e = ",e)
                                console.log("dt = ",dt) 
                                console.log("node = ",node) 
                                console.log("config = ",config) 
                                console.log("custom = ",e.currentTarget.parentElement.parentElement)
                            }},
                           {
                                select:"os",
                                text: 'Uncheck',
                                className: "inlineRadio2",
                                action: function ( e, dt, node, config ) {
                                    console.log("e = ",e)
                                    console.log("dt = ",dt) 
                                    console.log("node = ",node) 
                                    console.log("config = ",config) 
                                    console.log("custom = ",e.currentTarget.parentElement.parentElement)
                                }},
                                {
                                    select:"os",
                                    text: 'All',
                                    action: function ( e, dt, node, config ) {
                                        console.log("e = ",e)
                                        console.log("dt = ",dt) 
                                        console.log("node = ",node) 
                                        console.log("config = ",config) 
                                        console.log("custom = ",e.currentTarget.parentElement.parentElement)
                                    }}
                        ]
                        */
                    
                    
                })
     
                $("tr").addClass("allthing") 

            switchListener(table)
            

                    addCheckBox(table)
               // addThingtoTable()
             //  addButtonToTable($('#myTable'))
            // table.buttons().container()
            // .appendTo( $('tr', table.table().container() ) )
                
        },
        dataSrc:"",
        error: function (obj, textstatus) {
            alert(obj.msg);
        },
        
    })
//});

function addCheckBox(table){
$(document).ready( function () {
    console.log("addCheckBox activate")
    $.fn.dataTable.ext.search.push(
      function( settings, searchData, index, rowData, counter ) {
        const allRows = document.querySelectorAll("tbody tr")
        var positions = $('input:checkbox[name="pos"]:checked').map(function() {

          return "selected";
        }).get();
  
        if (positions.length === 0) {
          return true;
        }
        const thisRow = allRows[index]
        
       //  console.log(thisRow.className)
    
    if(thisRow === undefined){return true}
    const rowClassName = thisRow.className
  //  console.log("rowClassName.indexOf(positions) = ",rowClassName.indexOf(positions))
        if (rowClassName.indexOf(positions) !== -1) {
          return true;
        }
      //  console.log(positions,rowData,index,counter)
      //  console.log(document.querySelectorAll("tr")[0])
        return false;
      } 
    );
     
    table.draw();
   // var table = $('#example').DataTable();
    
   $('input[name="pos"]').on('change', function () {
    console.log("click")
      table.draw();
   });
  
  } );
  
}