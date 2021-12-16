import React from "react";
 const FormButton = ({ children, ...otherInputProps }) => {
     return (
         <button { ...otherInputProps }
                 style={{
                     backgroundColor: '#00a01e',
                     width: '50%',
                     position: 'relative',
                     borderRadius: '30px',
                     marginTop: '2rem',
                     left: '25%'
                 }} >{children}</button>
     )
 }

 export default FormButton