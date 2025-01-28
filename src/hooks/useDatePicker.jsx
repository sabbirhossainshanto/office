import moment from "moment/moment";
import { useState } from "react";
const useDatePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    endDate: new Date(),
  });

  const onChange = (dates) => {
    setDateRange((prevState) => ({
      ...prevState,
      startDate: dates ? dates[0] : null,
      endDate: dates ? dates[1] : null,
    }));
  };

  const fromDate = moment(dateRange?.startDate).format("YYYY-MM-DD");
  const toDate = moment(dateRange?.endDate).format("YYYY-MM-DD");

  return {
    onChange,
    fromDate,
    toDate,
    dateRange,
    setDateRange,
  };
};

export default useDatePicker;
