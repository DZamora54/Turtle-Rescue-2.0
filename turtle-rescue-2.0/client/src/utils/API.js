import axios from "axios";
export default {
  // Gets all turtles
  getTurtles: function() {
    return axios.get("/api/turtles");
  },
  // Gets the turtle with the given id
  getTurtles: function(id) {
    return axios.get("/api/turtles/" + id);
  },
  // Deletes the turtle with the given id
  deleteTurtle: function(id) {
    return axios.delete("/api/turtles/" + id);
  },
  // Saves a turtle to the database
  saveTurtle: function(turtleData) {
    return axios.post("/api/turtles", turlteData);
  }
};
