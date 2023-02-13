import styled from "styled-components";
import fondo from "../../assets/wallpaper/createGame.jpg";


export const Container = styled.main`
background-image: url(${fondo});
background-size: cover;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

export const LeftContainer = styled.section`
height: 808px;
width: 635px;
background-color:rgba(255, 255, 255, 1);
border-radius: 8px;
box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.64);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
h1{
    margin-top: 90px;
    font-size: 40px;
    color: rgba(12, 43, 92, 1);
    font-family: Mister Pixel 16 pt - Small Caps;
}

`

export const Formm = styled.section`
input{
    padding: 0 20px;
    width: 364px;
    height: 52px;
    margin-bottom: 10px;
    border: 1px solid #969696;
    border-radius: 19px;
    font-size: 22px;
}
select{
    width: 364px;
    height: 52px;
    margin-bottom: 10px;
    border: 1px solid #969696;
    border-radius: 19px;
    font-size: 22px;
}
div{
width: 470px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
}
span{
    font-size: 25px;
    margin-left: 10px;
}
img{
    width: 25px;
    height: 25px;

}
h1{
    display: none;  
    font-size: 25px;
    margin left: 25px;
}
`
export const Rating = styled.section`
display: flex;
flex-direction: row;
div{
    display: flex;
    width: 410px;
    flex-direction: column;
    align-items: start;
    justify-content: space-
    line-height: 5px;
}
input{
    padding: 0 0;

}
p{
    font-size: 20px;
}
.input-rating{
    width: 55px;
    text-align: center;
    
}
`
export const Buttons = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Guardar = styled.button`
    
    background-color: rgba(12, 43, 92, 1);
    width: 266px;
    height: 57px;
    border-radius: 33px;
    font-size: 36px;
    color: white;
    font-family: Mister Pixel 16 pt - Small Caps;
    cursor: pointer;
    transition: all 0.6s ease;
    :hover{
        width: 275px;
        height: 65px;
        font-size: 41px;
        background-color: yellow;
        color: red;
    }
`

export const Volver = styled.button`
    margin-top: 10px;
    border: rgba(12, 43, 92, 1) solid 1px;
    color: rgba(12, 43, 92, 1);
    width: 246px;
    height: 40px;
    border-radius: 33px;
    font-size: 31px;
    font-family: Mister Pixel 16 pt - Small Caps;
    cursor: pointer;
    margin-bottom: 35px;
    transition: all 0.6s ease;
    :hover{
        width: 255px;
        height: 55px;
        font-size: 35px;
    }
`

export const RihgtContainer = styled.section`
width: 659px;
height: 659px;
background-color: rgba(12, 43, 92, 1);
border-radius: 8px;
box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.64);
display: flex;
flex-direction: column; 
justify-content: start;
align-items: center;
padding-bottom: 20px;
h1{
    color: white;
}

`

export const Generos = styled.section`
height: 329px;
height: 50%;
color: #0c2b5c;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
overscroll-behavior-y: contain;
scroll-snap-type: y proximity;
::-webkit-scrollbar{
    background: transparent;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: rgba(12,43,92,1);
    border-radius: 10px;
}
border: white solid 1px;
border-radius: 10px;
width: 50%;
box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.64);
background-color: white;
padding-top: 10px;
span{
    font-size: 25px;
}
div{
    width: 280px;
    min-height: 35px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}   
button{
    font-size: 20px;
   padding-left: 50px;
    color: red;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.6s ease;
    :hover{
        font-size: 30px;
       
    }
}
`
export const Platforms = styled.section`
width: 50%;
color: #0c2b5c;
height: 50%;
overflow-y: scroll;
overscroll-behavior-y: contain;
scroll-snap-type: y proximity;
::-webkit-scrollbar{
    background: transparent;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: rgba(12,43,92,1);
    border-radius: 10px;
}
display: flex;
flex-direction: column;
align-items: center;
border: white solid 1px;
border-radius: 10px;
box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.64);
background-color: white;
padding-top: 10px;
span{
    font-size: 25px;
}
div{
    width: 280px;
    min-height: 35px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}   
button{
    font-size: 20px;
   padding-left: 50px;
    color: red;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.6s ease;
    :hover{
        font-size: 30px;
       
    }
}
`

