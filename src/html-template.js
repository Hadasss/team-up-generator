// TODO function to check type of employee (class)
const cardGen = function (answers) {
  let managerTemp = "",
    engTemp = "",
    intTemp = "";
  // let finishedTemplate = "";
  answers.forEach((employee) => {
    if (employee.getRole() == "Manager") {
      managerTemp += `

  <div class="card bg-light shadow p-0 m-2" style="width:18rem">
    <div class="card-body bg-primary">
      <h3 class="card-title text-light">${employee.name}</h3>
      <h5 class="text-light">💼 ${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush m-4">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: ${employee.email}</li>
      <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
    </ul>
  </div>

`;
    } else if (employee.getRole() == "Engineer") {
      engTemp += `

  <div class="card bg-light shadow p-0 m-2" style="width:18rem">
    <div class="card-body bg-primary">
      <h3 class="card-title text-light">${employee.name}</h3>
      <h5 class="text-light">🖥️ ${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush m-4">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: ${employee.email}</li>
      <li class="list-group-item">GitHub: ${employee.github}</li>
    </ul>
  </div>

`;
    } else {
      intTemp += `

  <div class="card bg-light shadow p-0 m-2" style="width:18rem">
    <div class="card-body bg-primary">
      <h3 class="card-title text-light">${employee.name}</h3>
      <h5 class="text-light">🎓 ${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush m-4">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: ${employee.email}</li>
      <li class="list-group-item">School: ${employee.school}</li>
    </ul>
  </div>

`;
    }
  });
  // finishedTemplate = managerTemp + engTemp + intTemp;
  // return finishedTemplate;
  return managerTemp + engTemp + intTemp;
};

const htmlTemplate = function (employees) {
  console.log(employees);
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
    img {size: 20%}
    </style>
</head>
 
<body>
    <header class="bg-secondary bg-gradient">
        <div class="p-5 d-flex justify-content-center">
            <h1 class="p-3 display-1 text-white">My Team</h1>
        </div>
    </header>

  <div class="container">
    <div class="row m-2 row-cols-1 row-cols-md-2 g-4">
${cardGen(employees)}
    </div
  </div>
</body>
</html>
`;
};

module.exports = htmlTemplate;

/* <span class="icon">
<img src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-computer-big-data-wanicon-flat-wanicon.png"/>
</span> */

/* <span class="icon">
<img src="https://img.icons8.com/color/48/000000/motarboard.png"/>
</span> */

/* <span class="icon">
<img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-Briefcase-business-and-marketing-bearicons-flat-bearicons.png"/>
</span> */
