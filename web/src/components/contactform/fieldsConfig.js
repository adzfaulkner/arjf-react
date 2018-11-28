const subjectOptions = [
  {
    label: 'Enquiry',
    value: 'Enquiry',
  },
  {
    label: 'General',
    value: 'General',
  },
  {
    label: "Other",
    value: 'Other',
  },
];

export default [
  { label: 'Name', name: 'name', type: 'text', placeholder: 'Name', required: true, noValueError: 'You must provide your name' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'Email', required: true, noValueError: 'You must provide your email address' },
  { label: 'Subject', name: 'subject', type: 'select', placeholder: '--Please Select--', required: true, options: subjectOptions, noValueError: 'You must provide a subject for your enquiry' },
  { label: 'Message', name: 'message', type: 'textarea', required: true, noValueError: 'You must enter a message' }
];
