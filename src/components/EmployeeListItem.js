export default function EmployeeListItem(props) {
  return (
    <div className="EmployeeListItem">
      <img src={props.img} className="EmployeeListItem-img" alt="" />
      <h4 className="EmployeeListItem-name">{props.name}</h4>
      <h6 className="EmployeeListItem-title">{props.title}</h6>
    </div>
  );
}
