export default function EmployeePage(props) {
  return (
    <div className="EmployeePage" style={{ width: "18rem" }}>
      <EmployeePage img={props.img} alt={props.name} />
      <EmployeePage name={props.name} />
      <EmployeePage title={props.title} />
    </div>
  );
}
