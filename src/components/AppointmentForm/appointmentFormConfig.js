const appointmentFormConfig = [
  { controlType: "input", label: "Data", type: "date", name: "date" },
  { controlType: "input", label: "Godzina", type: "time", name: "time" },
  {
    controlType: "select",
    label: "Usługa",
    name: "serviceType",
  },
  {
    controlType: "select",
    label: "Specjalista",
    name: "doctor",
  },
  { controlType: "input", label: "Imię", type: "text", name: "firstName" },
  { controlType: "input", label: "Nazwisko", type: "text", name: "lastName" },
  { controlType: "input", label: "Email", type: "email", name: "email" },
  { controlType: "input", label: "Telefon", type: "tel", name: "phone" },
];

export default appointmentFormConfig;
