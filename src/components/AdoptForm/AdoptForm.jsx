import './adoptform.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import { useState } from 'react';

const AdoptForm = () => {
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    console.log(ranges);
  }
    
  return (
    <div className="AdoptForm">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#ED4B9E"]}
        onChange={handleSelect}
        showMonthAndYearPickers={true}
      />
    </div>
  );
}

export default AdoptForm;