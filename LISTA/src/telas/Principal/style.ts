import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#4F4F4F",
    justifyContent:"center",
  
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2f363d",
  },
  input: {
    flex: 1,
    height: 50,
    color: "#fff",
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#3a4149",
  },
  button: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3a4149",
  },
  taskList: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#2f363d",
    padding: 10,
  },
  taskText: {
    flex: 1,
    color: "#fff",
  },
 
  completedTask: {
    flex: 1,
    color: "#fff",
    textDecorationLine: "line-through",
  },
  buttonRemove: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#d11a2a",
  },
  buttonComplete: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#3a4149",
  },
  buttonCompleteText: {
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#2f363d",
  },
  footerText: {
    color: "#fff",
  },
});

export default styles;
