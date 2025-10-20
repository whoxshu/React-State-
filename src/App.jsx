import './App.css'
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import { sum } from './helper';
import Form from './Form';
import CommentsForm from './CommentsForm';
import Comment from "./Comment";

 function App() {
  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // };

  return (
    <>
{/* <Lottery  n={3} winCondition={winCondition}></Lottery>*/}
{/* <Form></Form> */}
 {/* <CommentsForm></CommentsForm>  */}
<Comment></Comment>
    </>
  );
};

export default App
