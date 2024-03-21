import React from 'react'; // Import React
import { UserContext } from './context'; // Import UserContext if defined in a separate file
import Card from './context'; // Import Card component if defined in a separate file
import "./Deposit.css"
function Deposit() {
  const ctx = React.useContext(UserContext);

  function handle(data) {
    ctx.users.push({ name: data.name, deposit: data.deposit });
    return true;
  }

  return (
  
    <Card
      bgcolor="primary"
      header="Deposit"
      deposit={handle}
      submitButtonDeposit="Deposit Successful"
    />
   
  );
}

export default Deposit;
