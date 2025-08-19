import useQuery from "../api/useQuery";
import DeleteActivity from "./DeleteActivity";

const ActivitiesList = () => {
  const { data, loading, error } = useQuery("/activities", "activities");
  console.log(data);

  if (loading) return <p>loading...</p>;
  if (error) return <p>no activities found</p>;

  return (
    <ul>
      {data?.map((activity) => {
        return (
          <li key={activity.id}>
            {activity.name} <DeleteActivity id={activity.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ActivitiesList;
