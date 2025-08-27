
import PropertyCardsContainer from "../components/PropertyCardsContainer/PropertyCardsContainer";
import PropertyFilter from "../components/PropertyFilter/PropertyFilter";

const Investments = () => {
   
  return (
    <div className=" h-screen p-10 px-20 flex flex-col gap-10">
      <div className="border h-1/10 rounded-lg">
        <PropertyFilter />
      </div>
      <div className="h-8/10">
        <PropertyCardsContainer />
      </div>
    </div>
  );
};

export default Investments;
