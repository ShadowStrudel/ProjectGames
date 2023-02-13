import React from "react";
import styled from "styled-components";
import fondo from "../../assets/wallpaper/wallpaperlanding.jpg"

export const Container = styled.main`
background-image: url(${fondo});
background-size: cover;
height: 100vh;
width: 100%;
min-width: 320px;
display: flex;
align-items: center;
justify-content: center;
button{
width: 259px;
height: 88px;
border-radius: 16px;
border: rgba(55, 146, 178, 0.5) solid 1px;
background-color: rgba(132, 255, 253, 0.5);
font-size: 36px;
cursor: pointer;
color: white;
box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.4);
/* border: rgba(0, 0, 0, 0.5) solid 1px;  */
-webkit-text-stroke: 1.4px rgba(0, 0, 0, 0.5);
transition: all 0.6s ease;
:hover{
    color: yellow;
    width: 290px;
    height: 100px;
}
}

`

