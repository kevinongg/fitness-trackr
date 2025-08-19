import { useAuth } from "../auth/AuthContext";
import ActivitiesList from "./ActivitesList";
import ActivitiesForm from "./ActivitiesForm";

export default function ActivitiesPage() {
  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ActivitiesList />
      {token ? <ActivitiesForm /> : null}
    </>
  );
}
