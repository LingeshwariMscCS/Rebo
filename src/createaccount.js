import React from 'react'; // Import React
import { UserContext } from './context'; // Import UserContext if defined in a separate file
import Card from './context'; // Import Card component if defined in a separate file
import './CreateAccount.css';

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let userNumber = users.length;

  function handle(data) {
    ctx.users.push({ id: userNumber, name: data.name, email: data.email, password: data.password, balance: 100 });
    return true;
  }

  return (
   
    <Card
      bgcolor="primary"
      header="Create Account"
      handle={handle}
      submitButton="Create another account"
    />
   
  );
}

export default CreateAccount;
