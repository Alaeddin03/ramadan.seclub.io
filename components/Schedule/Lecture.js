import React from 'react'


export function calculateDuration(startTime, endTime) {
  const startTimeArray = startTime.split(":");
  const startHours = startTimeArray[0];
  const startMinutes = startTimeArray[1];

  const endTimeArray = endTime.split(":");
  const endHours = endTimeArray[0];
  const endMinutes = endTimeArray[1];

  const durationHours = parseInt(endHours) - parseInt(startHours);
  const durationMinutes = parseInt(endMinutes) - parseInt(startMinutes);

  const totalDurationInMinutes = durationHours * 60 + durationMinutes

  return totalDurationInMinutes; 
}

// this function is used to shift the lecture down, e.g. lecture starts at 11:30 not 11:00 
function calculateMargin(startTime) {
  const time = startTime.split(":");
  const minutes = time[1];

  if (minutes === "00") { 
      return 0;
  }
  return minutes;
}

function calculateRow(startTime) {
  const time = startTime.split(":");
  const hours = time[0];
  return hours - 5;
}

function calculateColumn(day) {
  if (day === 'sun') return 1;
  if (day === 'mon') return 2;
  if (day === 'tue') return 3;
  if (day === 'wed') return 4;
  if (day === 'thu') return 5;
  if (day === 'fri') return 6;
  if (day === 'sat') return 7;
}

export default function Lecture({classTitle, startTime, endTime, day, color, colorAccent, location}) {
  
  
  return (
    <>
      <div 
          className={`absolute rounded-md z-10 text-white text-xs font-bold text-center ml-[0.5vw] w-[10vw] min-w-[65px] flex flex-col items-center justify-around`}
          style={{
            backgroundColor: `${color}`,
            borderLeft: `4px solid ${colorAccent}`,
            gridRow: `${calculateRow(startTime)}`,
            gridColumn: `${calculateColumn(day)}`,
            height: `${calculateDuration(startTime, endTime)}px`,
            marginTop: `${calculateMargin(startTime)}px`
          }}
          >
            <span className='text-base'>{classTitle}</span>
            <span className='text-xs'>{startTime} - {endTime}</span>
            <span className='text-xs'>{location}</span>
        </div>
    </>
  )
}
