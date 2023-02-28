import React, {useState, useEffect, useRef} from 'react';
import {CalendarStyled} from "../../styledComponents/CalendarStyled"

const Calender = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentMonthNext, setCurrentMonthNext] = useState(currentMonth + 1);
    const [currentYear , setCurrentYear] = useState(new Date().getFullYear());
    const [currentYearNext , setCurrentYearNext] = useState(currentYear);

    const [selectCheckInDate, setSelectCheckInDate] = useState("");
    const [allHoverdBtns, setAllHoverdBtns] = useState("");
    const [selectCheckOutDate, setSelectCheckOutDate] = useState("");

    const checkInDateRef = useRef();
    const selectedDatesRef = useRef([]);
    // const currrentMonth = new Date().getMonth() + 1;
    // let currentYear = new Date().getFullYear();
   
    // let currentYearNext = currentYear;
    // let currentMonthNext ;

    selectCheckInDate && console.log(allHoverdBtns)
    
    const handleSelectCheckInDate = (index) => {
        if(selectCheckInDate){
            if(index === checkInDateRef.current){
                setSelectCheckInDate("");
            }
        }else{
            checkInDateRef.current = index;
            setSelectCheckInDate(index);
        }    
    }

    const handleMouseEnter = (index) => {
        selectCheckInDate && setAllHoverdBtns(index);
        if(selectCheckInDate && allHoverdBtns){
            selectedDatesRef.current = [];
            for(let i=selectCheckInDate; i<=allHoverdBtns;i++){
                selectedDatesRef.current.push(i);
            }
        }
        console.log( selectedDatesRef.current);
    }

    const handleRightClick = (value) => {
        setCurrentMonth(currentMonth + value);
        setCurrentMonthNext(currentMonthNext + value);
    }
    
    const handleLeftClick = (value) => {
    setCurrentMonth(currentMonth + value);
    setCurrentMonthNext(currentMonthNext + value);
    }

    useEffect(() => {
     if(currentMonth === 12){
        setCurrentMonthNext(1);
        setCurrentYearNext(currentYearNext + 1);
     }
     if(currentMonth > 12){
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
     }
     if(currentMonthNext === 0){
       setCurrentMonthNext(12);
       setCurrentYearNext(currentYearNext - 1);
     }

     if(currentMonth === 0){
        setCurrentMonth(12);
        setCurrentYear(currentYear - 1)
        setCurrentYearNext(currentYearNext - 1);
     }
    }, [currentMonth])
    
    
    const numberOfDaysInMonth = {
        1 : 31,
        2 : currentYear % 4 ? 28 : 29,    /*Added 28 days only*/
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    }
    const days = ["Sun","Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    const Months = {
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December"
    }


    const currentMonthFirstDateDay = new Date(`${currentYear}-${currentMonth}-1`).getDay()
    const currentMonthNextFirstDateDay = new Date(`${currentYearNext}-${currentMonthNext}-1`).getDay();

    // console.log(new Date(`${currentYear}-${currrentMonth}-1`).getDay());
    // console.log(new Date(`${currentYearNext}-${currrentMonthNext}-1`).getDay());
  
  return (
    <CalendarStyled datePosition1={currentMonthFirstDateDay} datePosition2 = {currentMonthNextFirstDateDay}>
     {/* <h2>Date Picker</h2> */}
     <div className="wrapper">
     <div className="calendarWrapper">
        <p>{Months[currentMonth]} {currentYear}</p>
        <div className="days">
         {days.map((day,index) => {
            return <p className="day" key={index}>{day}</p>
         })}
        </div>
        <div className="dates">
            {new Array(numberOfDaysInMonth[currentMonth]).fill(1).map((_,index) => {
                return <button 
                onClick={() =>  handleSelectCheckInDate(index)}
                // onMouseEnter={() => handleMouseEnter(index)}
                className={`${(index +1) === new Date().getDate() && 
                    currentMonth === new Date().getMonth() + 1  && 
                    currentYear === new Date().getFullYear() ? "currentDate" : "date1"} ${selectCheckInDate === index  && "bgBlue"} ${selectedDatesRef.current.includes(index) && index !== selectCheckInDate && "lightBgBlue"}`} key={index}>{index +1}</button>
            })}
        </div>
     </div>
     <div className="calendarWrapper">
     <p>{Months[currentMonthNext]} {currentYearNext}</p>
     <div className="days">
         {days.map((day,index) => {
            return <p className="day" key={index}>{day}</p>
         })}
        </div>
        <div className="dates">
        {new Array(numberOfDaysInMonth[currentMonthNext]).fill(1).map((_,index) => {
                return <button className={(index +1) === new Date().getDate() && currentMonthNext === new Date().getMonth() + 1  && currentYearNext === new Date().getFullYear() ? "currentDate" : "date2"} key={index}>{index +1}</button>
            })}
        </div>
     </div>
     </div>
      <div className="btns">
        <button onClick={() => handleLeftClick(-1)}>Left</button>
        <button onClick={() => handleRightClick(1)}>Right</button>
      </div>
    </CalendarStyled>
  )
}

export default Calender