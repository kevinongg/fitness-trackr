import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

const DeleteActivity = ({ id }) => {
  const { token } = useAuth();
  const { mutate, error } = useMutation("DELETE", `/activities/${id}`, [
    "activities",
  ]);

  const removeActivity = async () => {
    await mutate();
    {
      error && <output>{error}</output>;
    }
  };

  return (
    <div>
      {token && !error && <button onClick={removeActivity}> Delete</button>}

      <button>{error && <output>{error}</output>}</button>
    </div>
  );
};

export default DeleteActivity;
