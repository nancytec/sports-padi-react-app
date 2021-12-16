import React from "react";
 const FormInput = ({ handleChange, ...otherInputProps  }) => {
     return (
         <input onChange={handleChange}  { ...otherInputProps }
                style={{
                    fontFamily: 'Flutter',
                    backgroundColor: '#B6e3c0',
                    borderRadius: '30px',
                    height: '50px',
                }}
         />
     )
 }

 export default FormInput