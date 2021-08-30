import { testDB, urls } from "./urls";
import axios from "axios";

export const onAppointmentsFormSubmit = async (values) => {
  axios({
    method: "POST",
    url: `${testDB}${urls.APPOINTMENTS}`,
    data: JSON.stringify(values, null, 2),
    headers: { "Content-Type": "application/json" },
  });
};
