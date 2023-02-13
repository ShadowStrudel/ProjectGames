import styled from "styled-components"

export const Container = styled.nav`
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
`
export const Searchedor = styled.section`
position: absolute;
right: 27px;
top: 12px;
input{
    transition: all 0.6s ease;
   margin-top: 17px;
   width: 0px;
   height: 30px;
   font-size: 18px;
   outline: none;
   border: gray solid 1px;
   border-radius: 30px;
   :focus{
    padding: 0 65px 0 20px;
    width: 190px;
    ::placeholder{
        background-color: white;
    }
   }
   
}

:hover{
    input{
        padding: 0 65px 0 20px;
        width: 190px;
    }
}
`
export const Barra = styled.section`
margin-top: 82px;
margin-bottom: 82px;
width: 721px;
height: 236px;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(139, 230, 252, 0.84);
border: rgba(244, 255, 255, 0.78) solid 6px;
border-radius: 7px;
h1{
    font-family: "Mister Pixel 16 pt - Small Caps", sans-serif;
    font-size: 36px;
};
`
export const Filtros = styled.section`
width: 720px;
height: 235px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`
export const NewGame = styled.section`
    div{
    width:202px;
    height: 44px;
    background-color: rgba(255, 254, 74, 0.64);
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;    
    border-radius: 8px;
    border: rgba(30, 81, 119, 1) solid 1.5px;
    box-shadow: 0px 3px 4px black;
    transition: all 0.6s ease;
    :hover{
        transform: scale(103%)
    }
    }
    a{
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.35);
        text-decoration: none;
        font-family: Mister Pixel 16 pt - Small Caps;
        color: rgba(30, 81, 119, 1);
    };
`
export const Img = styled.img`
width 31.43px;
height: 30px;
transition: all 0.6s ease;
:hover{
    transform: scale(120%)
}
`
export const Play = styled.img`
width 15px;
height: 15px;
`
export const Lupa = styled.img`
width 70px;
height: 70px;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
`
export const Boton = styled.button`
background-color: transparent;
border: none;
`
export const FiltrosLeftRight = styled.section`
height: 95px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

select{
    width: 143px;
    height: 22px;
    background-color: transparent;
    border: rgba(30, 81, 119, 1) solid 1.5px;
    text-align: center;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.67);
    font-size: 15px;
    font-weight: bold;
    color: rgba(30, 81, 119, 1);
    font-family: Mister Pixel 16 pt - Small Caps;
    margin-left: 8.5px;
    option{
        background-color: rgb(128, 213, 250);
        border: none;
    }
}
div{
    display: flex;
    flex-direction: row
    width: 183px;
    align-items: center;
    justify-content: space-between;
}
`

