// TODO function to check type of employee (class)
const generateCard = function (answers) {};
// TODO display card info based on employee class
// TODO

const htmlTemplate = function (manager, employees) {
  console.log(manager, employees);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team!</title>
    <link rel="icon" type="image/x-icon" href="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-team-folders-soft-fill-soft-fill-juicy-fish.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pangolin&display=swap" rel="stylesheet">
    <style>
    * {font-family:pangolin}
    </style>
</head>
 
<body>
    <header class="bg-secondary bg-gradient">
        <div class="p-5 d-flex justify-content-center">
            <h1 class="p-3 display-1 text-white">My Team</h1>
        </div>
    </header>

 <div class="container">
 


  <div class="row m-5">
    <div class="col-3 m-3 p-3">
      <div class="card" style="width:18rem">
        <div class="card-body bg-light.bg-gradient">
          <h5 class="card-title">${manager.name}</h5>
          <span class="icon">
          <img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-Briefcase-business-and-marketing-bearicons-flat-bearicons.png"/>
          </span>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: ${employee.email}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          <li class="list-group-item">GitHub: ${employee.github}</li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</body>
</html>
    `;
};

module.exports = htmlTemplate;

// engineer icon: <img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-computer-big-data-wanicon-flat-wanicon.png"/>

// intern icon: <img src="https://img.icons8.com/color/48/000000/motarboard.png"/>
