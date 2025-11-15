import Counter from "./component/Counter.Component";
import MyInput from "./component/input.Component";
import LikeButtonComponent from "./component/like.button.component";
import AgeCounterComponent from "./component/age.counter.component";
import ContactForm from "./component/contact.form.component";
import ListComponent from "./component/list.component";


function App() {
  return (
    <div>
      <hr />
      <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactForm />
      <hr />
      <ListComponent />
      <hr /> 
    </div>
  );
}

export default App;
