import useQuery from "../api/useQuery";

const ActivitiesList = () => {
  const { data, loading, error } = useQuery("/activities", "activities");
  console.log(data);
  if (loading) return <p>loading...</p>;
  if (error) return <p>no activities found</p>;
  return (
    <ul>
      {data.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
};

export default ActivitiesList;
