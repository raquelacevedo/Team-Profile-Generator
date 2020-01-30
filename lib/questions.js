questions = {
    general: [
      {
        type: "input",
        name: "first_name",
        message: "Enter the Employee's First Name:"
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter the Employeess Last Name:"
      },
      {
        type: "list",
        name: "role",
        message: "Enter the Employee's role:",
        choices: ["Engineer", "Intern", "Manager"]
      }
    ],
  
    manager: [
      {
        type: "input",
        name: "office",
        message: "Enter the Employee's Office Number:"
      }
    ],
  
    intern: [
      {
        type: "input",
        name: "school",
        message: "Enter the Employees's School:"
      }
    ],
  
    engineer: [
      {
        type: "input",
        name: "github",
        message: "Enter the Employee's Github Account:"
      }
    ],
  
    again: [
      {
        type: "confirm",
        name: "again",
        message: "Would you like to add another Employee?",
        default: true
      } 
    ]
  };
  
  module.exports = questions;