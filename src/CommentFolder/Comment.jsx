import { React, useRef, useState } from "react";
import {
  AddReplyBtn,
  CommentHeading,
  CommentSection,
  CommentWrapper,
  MainContainer,
  MainContainerWrapper,
  TextArea,
  TextAreaWrapper,
} from "../styled";
function CommentComp({ commentState, setCommentState }) {
  const [textState, setTextState] = useState("");
  const [replyData, setReplyData] = useState({});

  console.log(replyData);

  const replyFocus = useRef("");

  const textAreaFocus = () => {
    if (replyData.id) {
        console.log(replyData,"wkkjak");
     const a =   commentState.map((ID)=>{
            console.log(ID,"sjkjaks");
            if(replyData.id === ID.id){
                const b = [...replyData.reply]
                b.push(textState)
              return  {...replyData,reply:b  }
            }else{
                return ID
            }
        })
        setCommentState(a)
        console.log(a,"AAAAA");
      setTextState("");
    } else {
      setCommentState((prev) => {
        return [
          ...prev,
          {
            id: commentState.length,
            OwnerName: "geeksforgeeks",
            comnt: textState,
            reply:[]
          },
        ];
      });
      setTextState("");
    }
    setReplyData(null);
  };

  const replyFunc = (id) => {
    console.log(id);
    replyFocus.current.focus();
    setReplyData(id);

    
  };


  console.log(commentState,"sakjka");


  return (
    <MainContainerWrapper>
      <CommentHeading>Comments</CommentHeading>

      <MainContainer>
        <CommentSection>
          <CommentWrapper>
            {commentState.map((ele) => (
              <>
                <h4>{ele.OwnerName}</h4>
                <p>{ele.comnt}</p>
                <p
                  onClick={() => replyFunc(ele)}
                  style={{
                    color: "grey",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  Reply
                </p>
                {ele?.reply?.map((rep) => (
                  <div style={{ marginLeft: "10px" }}>
                    {/* <h4>{rep.OwnerName}</h4> */}
                    <p>{rep}</p>
                  </div>
                ))}
              </>
            ))}
          </CommentWrapper>
          <TextAreaWrapper>
            <TextArea
              ref={replyFocus}
              value={textState}
              onChange={(e) => setTextState(e.target.value)}
            ></TextArea>
            <AddReplyBtn onClick={textAreaFocus}>
              {replyData?.id ? "Add reply" : "Add Comment"}
            </AddReplyBtn>
          </TextAreaWrapper>
        </CommentSection>
      </MainContainer>
    </MainContainerWrapper>
  );
}

export default CommentComp;
