export default function AboutActivity({ params }: { params: { activityId: string } }) {
  //fetch  {params.activityId}
  return <div>
    {params.activityId}
  </div>;
}
