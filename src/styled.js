import styled from "styled-components"

export const MainContainerWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`
export const MainContainer = styled.div`
    width: 100%;
    height: 600px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const CommentHeading = styled.h3`
   margin-left: 80px;
   margin-top:10px;
   
   
   `
   export const CommentSection = styled.div`
       width: 90%;
       height: auto;
       background-color: #ddd;
       border-top: 1px solid grey;
       
   `
   export const CommentWrapper = styled.div`
       width: 100%;
       height: auto;
       /* background-color: psurple; */
       /* border-top: 1px solid grey; */
       
   `
   export const TextAreaWrapper = styled.div`
       width: 100%;
       height: 300px;
       /* background-color: yellow; */
       /* border-top: 1px solid grey; */
       
   `
   export const TextArea = styled.textarea`
     width: 100%;
     height: 230px;
       
   `
   export const AddReplyBtn = styled.button`
   padding: 10px 16px;
   border: none;
   background-color: blue;
   color: white;
     
       
   `