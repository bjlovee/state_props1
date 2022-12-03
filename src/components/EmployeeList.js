import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <EmployeeListItem img={props.img} alt={props.name} />
      <EmployeeListItem name={props.name} />
      <EmployeeListItem title={props.title} />
    </div>
  );
}
