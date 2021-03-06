const generateCard = require("./createhtmlcard");

module.exports = function generateHTML(team) {

  // dynamically build team from list provided
  let teamListHtml = ""; 

  // loop though list of teams
  for (let i = 0; i < team.length; i += 1) {
    // keep track of new row for setting row div and /div
    let isNewRow = true;
    // loop through each team
    for (let j = 0; j < team[i].length; j += 1) {
      // grab employee out of team list in list of teams
      const empl = team[i][j];

      //if it should new row add row tag
      if (isNewRow) { 
        teamListHtml += `<div class="row">`;
      }
      // each col only has one element so each needs a col div
      teamListHtml += `<div class="col-sm-6">`;
      // generate card for employee
      teamListHtml += generateCard(empl);

      // checks for end of row or last empl in team  to close row 
      if ( !isNewRow || j === (team[i].length-1) ) { 
        teamListHtml += `</div>`; 
        isNewRow = true;
      } else {
        // in row so sets to false so new row is not created
        isNewRow = false;
      }

      teamListHtml += `</div>`; 
    }
  }

  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  <title>Check Mate - Team</title>
        <style>
        @page {
          margin: 0;
        }
       *,
       *::after,
       *::before {
       box-sizing: border-box;
       }
       html, body {
       padding: 0;
       margin: 0;
       }
       html, body, .wrapper {
       height: 100%;
       }
       .wrapper {
       background-color: rgb(99, 109, 143);
       padding-top: 100px;
       }
       body {
       background-image: url('./images/background.jpg');
       -webkit-print-color-adjust: exact !important;
       font-family: 'Open Sans Condensed', sans-serif;
       }
       main {
       background-color: rgb(63, 77, 90);
       height: auto;
       padding-top: 30px;
       }
       h1, h2, h3, h4, h5, h6 {
       font-family: 'BioRhyme', serif;
       margin: 0;
       }
       h1 {
       font-size: 3em;
       }
       h2 {
       font-size: 2.5em;
       }
       h3 {
       font-size: 2em;
       }
       h4 {
       font-size: 1.5em;
       }
       h5 {
       font-size: 1.3em;
       }
       h6 {
       font-size: 1.2em;
       }
       .photo-header {
       position: relative;
       margin: 0 auto;
       margin-bottom: -50px;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       background-color: rgb(112, 127, 146);
       color: black;
       padding: 10px;
       width: 95%;
       border-radius: 6px;
       }
       .photo-header img {
       width: 250px;
       height: 250px;
       border-radius: 50%;
       object-fit: cover;
       margin-top: -75px;
       border: 6px solid #FEE24C;
       box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
       }
       .photo-header h1, .photo-header h2 {
       width: 100%;
       text-align: center;
       }
       .photo-header h1 {
       margin-top: 10px;
       }

       .container {
       padding: 20px;
       padding-left: 100px;
       padding-right: 100px;
       }

       .row {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         margin-top: 20px;
         margin-bottom: 10px;
       }

       .card {
         padding: 10px;
         border-radius: 6px;
         background-color: lightgray;
         color: black;
         margin: 20px;
         text-align: left;
       }

       .card-header-Engineer {
         background-color: lightgray;
         padding: 5px;
       }
       .card-header-Intern {
         background-color: lightgrey;
         padding: 5px;
       }
       .card-header-Manager {
         background-color: lightgrey;
         padding: 5px;
       }
       
       .col {
       flex: 1;
       text-align: center;
       }

       @media print { 
        body { 
          zoom: .75; 
        } 
       }
    </style>
    </head>
  <body class="wrapper">
  <div class="photo-header">
   <img src="./images/devteam.png" alt="check mate" />
   <h2>Welcome to the Check Mate Employee Organization!</h2>
   <h5>Please note: This is a fictional company meant for educational use and not meant for anything else.</h5>
 </div>
  <!--end photo-header-->
</div>
  <main class="container">
  ${teamListHtml}
  </main>
<footer>
<div style="height: 300px">
</div>
</footer>
</body>
</html>
`;

  return HTML;
};