import React from 'react'; // Import React
import { UserContext } from './context'; // Import UserContext if defined in a separate file
import Card from './context'; // Import Card component if defined in a separate file
import "./AllData.css"
function AllData() {
  const ctx = React.useContext(UserContext);

  let users = [...ctx.users];
  console.log(JSON.stringify(users));

  function userNumber(i) {
    return (`User Account ${i + 1} Table`);
  }

  function userInfo(user) {
    return [user.name, user.email, user.password, user.balance];
  }

  return (
    <>
    
      {users.map((user, i) => (
        <Card
          index={i}
          key={i}
          bgcolor="info"
          txtcolor="white"
          header="All data Summary"
          text={userNumber(i)}
          allData={userInfo(user)}
        />
      ))}
      
    </>
  );
}

export default AllData;
