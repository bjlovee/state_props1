import "./styles.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeListArr from "./data";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Header2 from "./components/Header2";
// import EmployeePage from "./components/EmployeePage";

export default function App() {
  const Employee = EmployeeListArr.map((ele, idx) => {
    return (
      <EmployeeList key={idx} img={ele.img} name={ele.name} title={ele.title} />
    );
  });

  const Search = SearchBar(() => {});
  const Header1 = Header(() => {});
  const HeaderTwo = Header2(() => {});

  // const EmployeePage0 = EmployeePage((ele, idx) => {
  //   return <EmployeePage img={ele.img} name={ele.name} title={ele.title} />;
  // });

  return (
    <div className="App">
      <section className="Header">{Header1}</section>
      <section className="Search">{Search}</section>
      <section className="Header2">{HeaderTwo}</section>
      {/* <section className="EmployeePage">{EmployeePage0}</section> */}
      <section className="Employee">{Employee}</section>
    </div>
  );
}
