$('#navbar').load('navbar.html');
//callback function is a function which is passed as parameter into other function and then invoked to complete a action or a routine
//------------------------------------------------------------
//  const devices=[];   //intially an empty array is created so that the value can be pushed inside the array
//  devices.push({user:"Mary",name:"Mary's iphone"}); //pushing different values inside the array
//  devices.push({user:"Alex",name:"Alex's surafce pro"});
//  devices.push({ user: "Mary", name: "Mary's MacBook" });
//-------------------------------------------------------
//const devices = localStorage.getItem('devices') || [];
//
const devices = JSON.parse(localStorage.getItem('devices')) || [];
//------------------------------------------------------------------------
//  devices.forEach(function(device) {  //for each method is used to provide the call back for every element in the devices array
//     const table = document.querySelector('#devices');//query selecter is used for accesing devices id of the table
//     const row = document.createElement('tr');//creating row element specified by the tr element
  
//     const user = document.createElement('td'); //user data is created
//     const userText = document.createTextNode(device.user);//text node is used for puting data in the row
//     user.appendChild(userText);
  
//     const name = document.createElement('td');
//     const nameText = document.createTextNode(device.name);
//     name.appendChild(nameText);
  
//     row.appendChild(user); //append child is used for adding the data in the rows for user and name
//     row.appendChild(name);
  
//     table.appendChild(row); //rows are added to the table using append child
//   });
  devices.forEach(function(device) { //j query is used to write a shorter code performing the same task
    //the tag with id devives is accesed and then the table body is accessd 
    $('#devices tbody').append(` 
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });
  //// event listener in js attaches an event handler(things that happen to html elements) and determines how it would react based upon the callback function
//   document.querySelector('#add-device').addEventListener('click', function() {
//     const user = document.querySelector('#user').value; //the function is an anonymous function
//     const name = document.querySelector('#name').value;
//     devices.push({ user: user, name: name });
//     console.log(devices);
//   });
  $('#add-device').on('click', function() { //j query replaces event listener with on 
    const user = $('#user').val(); //user value is called using .val method
    const name = $('#name').val(); //name value from the name row
    devices.push({ user: user, name: name });//values are pushed in thre devices array
    console.log(devices);//value displayed on the console
    localStorage.setItem('devices', JSON.stringify(devices));//adds and updates key value pair
    location.href = '/';// the location to perform this is the devive-list.html web page
  });