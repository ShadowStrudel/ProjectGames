import styled from "styled-components"



export const Img = styled.img`
width: 191px;
height: 164px;
border-radius: 10px;
`
export const Container = styled.article`
padding-top: 56px;
width: 297px;
height: 358px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 7px;
border: rgba(255, 255, 255, 1) solid 2px;
background-color: rgba(131, 215, 250, 0.71);
font-family: Mister Pixel 16 pt - Small Caps;
text-align: center;
h2{
    color: rgba(0, 0, 0, 0.5);
    font-size: 30px;
};
p{
    font-size: 15px; 
    color: black;
    font-size: 20px;
};
section{
    height: 100px;
    overflow-y: scroll;
overscroll-behavior-y: contain;
scroll-snap-type: y proximity;
margin-bottom: 15px;
::-webkit-scrollbar{
    background-color: transparent;
}
span{
    color: black;
}
}


`

