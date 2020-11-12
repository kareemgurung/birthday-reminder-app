import React, {useState} from 'react';
import List from './List';
import Birthdays from '../Data';

function App() {

    const [birthdays, setBirthdays] = useState(Birthdays);
    const [isMouseOver, setIsMouseOver] = useState(false);
    
    function addBirthday(birthday) {
        return (
          <List
            key={birthdays.id}
            name={birthday.name}
            age={birthday.age}
            image={birthday.image}
          />
        );
    }
   
    function handleClick() {
        setBirthdays([ ]);
        
    }

    function handleMouse() {
        setIsMouseOver(prevValue => !prevValue);
    }

    return (
      <main>
        <section className="container">
          <h3>{birthdays.length} Birthdays today</h3>
          {birthdays.map(addBirthday)}
          <button
           onClick={handleClick}
           onMouseOver={handleMouse}
           onMouseOut={handleMouse}
           style={isMouseOver ? {background: "black", outline: "black"} : null} 
          >
              Clear All
          </button>
        </section>
      </main>
    );
}

export default App;