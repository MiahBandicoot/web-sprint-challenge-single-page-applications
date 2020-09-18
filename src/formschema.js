import * as yup from 'yup'

 const formschema = yup.object().shape({
    name:yup
    .string()
    .min(2,'Name must be more then one character')
    .required('Name is required'),
    size:yup
    .string()
    .oneOf(['12"','16"','24"'])
    .required('Please chose a size.'),
    specInst:yup
    .string()
    .min(0, 'Instructions not required')
})
export default formschema