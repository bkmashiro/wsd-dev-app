import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form>
        <label>
          <p>Task title:</p>
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          <p>Due date:</p>
          <input type="date" name="deadline" required />
        </label>
        <br />
        <label>
          <p>Details:</p>

          <input type="text" name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
