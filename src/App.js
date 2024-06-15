import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CommentComp from "./CommentFolder/Comment";

const commentData = [

  {
    id: "0",
    OwnerName: "geeksforgeeks",
    comnt:"good work",
    reply:["this is my reply"]
  }
]



function App() {
  const [commentState, setCommentState] = useState(commentData);
  return (
    <div className="App">
      <CommentComp commentState={commentState} setCommentState={setCommentState}  />
    </div>
  );
}

export default App;
