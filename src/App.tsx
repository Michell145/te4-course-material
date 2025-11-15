import Exercise1Component from "./component/exersice1.component";
import Greetingcomponent from "./component/Greeting.component";
import Count from "./component/Count.component";
import Dark from "./component/Dark.component";
import AgeCounter from "./component/Age.component";
import Movie from "./component/Movie.component";

function App() {
  return (
    <div>
      <Exercise1Component />
      <hr />
      <Greetingcomponent />
      <hr />
      <Count />
      <hr />
      <Dark/>
      <hr />
      <AgeCounter/>
      <hr />
      <Movie/>
    
      
    </div>
  );
}

export default App;
