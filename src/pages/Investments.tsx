import { useNavigate } from "react-router-dom";
import PropertyCardsContainer from "../components/PropertyCardsContainer/PropertyCardsContainer";
// import PropertyFilter from "../components/PropertyFilter/PropertyFilter";
import { MdAddBox } from "react-icons/md";

const Investments = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/create-new");
  };
  return (
    <div className=" h-screen p-10 px-20 flex flex-col gap-10">
      {/* <div className="border h-1/10 rounded-lg"><PropertyFilter /></div> */}
      <div
        className="text-3xl flex items-center border shadow-md w-60 rounded-lg bg-yellow-200 transform transition-transform duration-200 
               hover:-translate-y-1 cursor-pointer"
        onClick={handleAdd}
      >
        <MdAddBox />
        <h1 className="text-2xl">Add an investment</h1>
      </div>
      <div className="h-8/10">
        <PropertyCardsContainer />
      </div>
    </div>
  );
};

export default Investments;
