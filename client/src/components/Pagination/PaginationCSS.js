import styled from "styled-components"

export const Container = styled.section`
display: flex;
width: 100%;
height: 60px;
align-items: center;
justify-content: center;
background-color: rgba(131, 215, 250, 0.71);
border-top: white solid 2px;
margin-top: 15px;
button{
    cursor: pointer;
    width: 80px;
    height:35px;
    font-size: 18px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: all 0.6s ease;
    :hover{
        border-top: black solid 1px;
        border-left: black solid 1px;
        border-right: black solid 1px;
    
}
}
    input{
        width: 32px;
        height: 28px;
        border-radius: 10px;
        font-size: 18px;
        text-align: center;
        margin-right: 10px;
    }
    p{
        text-align: center;
        font-size: 18px;
        margin-right: 25px;
    }
`
export const Previous = styled.button`
    margin-right: 25px;
`



export const Img = styled.img`
transform: rotate(180deg);
position: fixed;
bottom: 10px;
right: 15px;
width: 40px;
height: 40px;
transition: all 0.6s ease;
:hover{
    width: 50px;
    height: 50px;
}
`

