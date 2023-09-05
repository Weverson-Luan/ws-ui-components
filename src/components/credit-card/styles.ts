/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";
import { themeStyleNative } from "../../styles/theme/theme";


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "flex-start",
    marginBottom: 30
  },
  content: {
    width: '100%',
    height: 170,
    alignItems: 'flex-start',
    backgroundColor: '#6A1B9A',
    borderRadius: 8
  },
  icon: {
     width: "100%",
     alignItems: "flex-end", 
     paddingRight: 12 
  },
  strip: {
    width: '100%',
    height: 40,
    marginTop: 6,
    paddingRight: 16,
    backgroundColor: "#000000",
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rowVersion: {
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 16,
  },
  rowVersionChildren: {
    width: 40,
    height: 26,
    backgroundColor: themeStyleNative.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  datainformation: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  validate: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
}
})
/**
 * EXPORTS
 */
export {
  styles
}