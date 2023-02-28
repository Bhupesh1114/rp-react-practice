import styled from "styled-components";

export const CalendarStyled = styled.div`
    max-width: 1000px;
    margin: 20px auto 100px auto;
    height : 450px;
    text-align: center;
    border : 1px solid;
    .wrapper{
        display: flex;
        height: inherit;
        // border: 1px solid;
        .calendarWrapper{
            width: 50%;
            .days{
                display: grid;
                grid-template-columns: repeat(7,1fr);
                 padding: 0px 10px;
                 align-items: center;
                 margin-top: 20px;
                //  border: 2px solid green;

                 .day{
                    margin-bottom: 0px;
                }
                
             }
             .dates{
                padding: 20px;
                border: 1px solid;
                display: grid;
                grid-template-columns: repeat(7,1fr);
                gap: 10px;
                .date1:nth-child(1){
                    grid-column: ${props => props.datePosition1 && props.datePosition1 + 1};
                }
                .date2:nth-child(1){
                    grid-column:${props => props.datePosition2 && props.datePosition2 + 1};
                }
                
                .date1, .date2{
                    border: 1px solid;
                    padding: 10px;
                    cursor: pointer;
                    border-radius : 5px;
                }
                
                // .date1:hover, .date2:hover{
                //     background-color: black;
                //     color: #fff;
                // }
            }

        }
    }


.btns{
    display : flex;
    justify-content : space-between;
    button{
        background-color : #000;
        color : #fff;
        padding : 5px;
        border-radius : 5px;
        cursor : pointer;
    }
}

.currentDate{
    color : red;
    border : 1px solid red;
    border-radius : 5px;
}

.bgBlue{
    background-color : blue;
    color :#fff;
    border : none;

}
.lightBgBlue{
    background-color : tomato; 
}
`