import React from "react";
import baseColors from "../../Constant/color";

function InputField({ placeholder, children, type }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      style={{
        height: 35,
        margin: 5,
        borderColor: baseColors.Grey,
        borderStyle:"solid",
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        textAlignVertical: "top",
        // paddingHorizontal: 50,
        // paddingVertical: 10,
        // marginHorizontal: 2,
        // marginVertical: 5,
        fontSize: 15,
        color: baseColors.Dark,
      }}
    >
      {children}
    </input>
  );
}

export default InputField;

// import React from "react";
// // import { SafeAreaView, StyleSheet, TextInput } from "react-native";
// import _ from "lodash";
// import baseColors from "../../Constant/color";

// function InputField({
//   placeholder,
//   keyboardType,
//   secureTextEntry,
//   styles: customStyles,
//   multiline,
//   numberOfLines,
//   children,
//   placeholderTextColor,
//   maxLength,
//   type
// }) {
//   const [number, onChangeNumber] = React.useState("");

//   let styles = defaultStyles.input;
//   if (!_.isEmpty(customStyles)) {
//     styles = { styles, ...customStyles };
//   }

//   return (
//     // <div className="input-group input-group " >
//     <input
//       style={style.input}
//       onChangeText={onChangeNumber}
//       value={number}
//       placeholder={placeholder}
//       multiline={multiline}
//       keyboardType={keyboardType}
//       secureTextEntry={secureTextEntry}
//       numberOfLines={numberOfLines}
//       placeholderTextColor={placeholderTextColor}
//       maxLength={maxLength}
//       type={type}
//       // className="form-control"
//     >
//       {children}
//     </input>
//     // </div>
//   );

// }

// const defaultStyles = {
//   input: {
// height: 40,
// margin: 12,
// borderColor: baseColors.sucessColor,
// borderWidth: 1,
// borderRadius: 50,
// padding: 10,
// textAlignVertical: "top",
// paddingHorizontal: 10,
// paddingVertical :10,
// marginHorizontal: 2,
// marginVertical: 5,
// fontSize:15,
// color:baseColors.Dark
//   },
// };

// export default InputField;
