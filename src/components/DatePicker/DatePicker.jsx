import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range'
import { useState } from 'react';

const AdoptForm = () => {
  const [ date, setDate ] = useState(new Date());

  const handleSelect = (date) => {
    setDate(date)
    console.log(date);
  }
    
  return (
    <div className="AdoptForm">
      <Calendar
        date={new Date()}
        minDate={new Date()}
        onChange={handleSelect}
        showMonthAndYearPickers={true}
      />
    </div>
  );
}

export default AdoptForm;