import logo from './logo.svg';
import './App.css';

function App() {
   const men = ['Anoar','Jafor','Salmansa', 'Alomgir','Bapparaj'];
   const women=['Bobita','Sabnor','Moushomi','seka']
   const job=['FoodBall','dorsok','banker','programer','houseWife','SekaKhaoa']
  return (
    <div className="App">
      <header className="App-header">
       
        <p>my first react paragraph</p>
        <Person name={men[0]} job={job[0]}></Person>
        <Person name={men[4]} job={job[5]}></Person>
        <Person name={men[2]} job={job[3]}></Person>
        <Person name={men[3]} job={job[2]}></Person>
        <Person name={women[0]} job={job[4]}></Person>

    
      </header>
    </div>
  );
}
 
function Person(props){
  const personStyle={
    border:'2px solid yellow',
    margin:'20px',
    width:'500px',
  }
  return (
    <div style={personStyle}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
