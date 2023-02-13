import styled from "styled-components"
import fondo from "../../assets/wallpaper/fondodetalles.jpeg"

export const Container = styled.main`
background-image: url(${fondo});
background-size: cover;
height: auto;
min-height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
button{
    position: absolute;
    bottom: 50px;
    width: 245px;
    height: 75px;
    border-radius:33px;
    background-color:rgba(96, 182, 191, 1);
    border: rgba(255, 255, 255, 1) solid 2px;
    font-size: 36px;
    color: white;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.6s ease;
:hover{
    transform: scale(110%)
}
}
`

export const LeftBlock = styled.section`
img{
    width: 803px;
    height: 431px;
    margin-top: 55px;
    box-shadow:0 11px 13px rgba(0, 0, 0, 0.56);
    border-radius: 8px;
    transition: all 0.6s ease;
:hover{
    transform: scale(102%)
}
}


`

export const RightBlock = styled.section`
    width: 803px;
    max-width: 803px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow:0 11px 13px rgba(0, 0, 0, 0.56);
    margin: 480px 0 50px;
    padding-right: 25px;
    line-height: 20px;
    transition: all 0.6s ease;
    :hover{
    transform: scale(102%)
}
    h1{
       font-size: 40px;
       color: rgba(96, 182, 191, 1);
       font-family: Mister Pixel 16 pt - Small Caps;
       margin-top: 35px;
       margin-left: 76px;
       margin-bottom: 50px;
    }
    h2{
        margin-left: 400px;
        color:rgba(38, 101, 140, 1);
        font-size: 40px;
        margin-bottom: -3px;
    }
    h3{
        font-size: 24px;
        color: rgba(30, 81, 119, 1);
        margin-left: 70px;

    }
    h4{
        color: rgba(30, 81, 119, 1);
        font-size: 22px;
        margin-left: 25px;
    }
    p{
        font-size: 20px;
        color: rgba(30, 81, 119, 1);
        margin-left: 20px;
    }
`

export const PlatsGen = styled.section`
display: flex;
align-items: center;
section{
padding: 20px 20px 0 0;
margin-left: 20px;
align-items: center;
display: flex;
overflow-x: scroll;
overscroll-behavior-x: contain;
scroll-snap-type: x proximity;
::-webkit-scrollbar{
    background: transparent;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: rgb(34, 60, 62);
    border-radius: 10px;
}
}
`

export const Description = styled.section`
display: flex;
flex-direction: row;
align-items: center;
height: 50px;
margin: 40px 0 15px;
p{
overflow-y: scroll;
overscroll-behavior-y: contain;
scroll-snap-type: y proximity;
::-webkit-scrollbar{
    background-color: transparent;
}
height: 50px;
}
`

export const Numbers = styled.section`
display: flex;
flex-direction: row;
align-items: center;
margin: 20px 0;
height: 50px;
`