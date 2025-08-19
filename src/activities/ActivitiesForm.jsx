import { useState } from "react";
import useMutation from "../api/useMutation";

const ActivitiesForm = () => {
  const { mutate, data, loading, error } = useMutation("POST", "/activities", [
    "activities",
  ]);

  const addActivity = async (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    await mutate({ name, description });
  };

  return (
    <form action={addActivity}>
      <h2>Add a new activity</h2>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Description
        <input type="text" name="description" required />
      </label>
      <button>Add activity</button>
      {error && <output>{error}</output>}
    </form>
  );
};

export default ActivitiesForm;
