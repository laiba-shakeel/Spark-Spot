import React from "react";
import _ from "lodash";
import baseColors from "../../../Constant/color";

// TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
// #007bff
function FormButton({
  onPress,
  children,
  value,
  styles: customStyles,
}) {
  let styles = defaultStyles.appButtonContainer;
  if (!_.isEmpty(customStyles)) {
    styles = { styles, ...customStyles };
  }


  return (
    <button onPress={onPress} style={styles} value={value}>
      {children}
    </button>
  );
}

const defaultStyles = {
  appButtonContainer: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    border: baseColors.sucessColor,
    color: baseColors.primaryTextColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
    margin: 10,
    width: 100,
    justifyContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 2,
    padding: 10,
    borderColor: baseColors.dangerTextColor,
  },
};

export default FormButton;