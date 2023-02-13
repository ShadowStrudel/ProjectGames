import styled from "styled-components"
import fondo from "../../assets/wallpaper/mainoriginal.jpg"

export const Container = styled.main`
background-image: url(${fondo});
background-attachment: fixed;
::-webkit-scrollbar{
    background-color:#99f5ffd9;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: rgb(34, 60, 62);
    border-radius: 10px;
}
`

export const Grid = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr ;
justify-items: center;
align-items: center;
column-gap:81px;
row-gap: 212px;
margin-bottom: 45px;
a{
    text-decoration: none;
    transition: all 0.6s ease;
:hover{
    transform: scale(110%)
};
}
`