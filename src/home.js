import Card from "./context"
import "./Home.css"

function Home(){
  return (
   
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="BadBank Landing Module"
      title="Welcome to Prime Time"
      text="Interact with the menu to begin!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
    
  
  );  

}

export default Home;