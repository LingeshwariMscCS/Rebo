import React from 'react'; // Import React
import { UserContext } from './context'; // Import UserContext if defined in a separate file
import Card from './context'; // Import Card component if defined in a separate file
import "./Withdraw.css"
function Withdraw() {
  const ctx = React.useContext(UserContext);

  function handle(data) {
    ctx.users.push({ name: data.name, withdraw: data.withdraw });
    return true;
  }

  return (
   
    <Card
      bgcolor="primary"
      header="Withdraw"
      withdraw={handle}
      submitButtonWithdraw="Withdrawl Successful"
    />
   
  );
}

export default Withdraw;
