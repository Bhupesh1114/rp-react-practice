import styled from "styled-components";


type propsType = {
    padding? : string
}

export const MainCard = styled.div<propsType>`
padding: ${props => props.padding ? props.padding : "20px"};
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
background-color: #fff;
border-radius: 10px;
margin: 30px 0px;
overflow: hidden;
.mainHeading{
    font-size: 20px;
    margin-bottom: 18px;
    font-weight: 700;
}
.cardsContainer{
    margin:0px 0px 14px 0px;
}
`;