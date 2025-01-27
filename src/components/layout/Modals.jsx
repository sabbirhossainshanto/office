import { useSelector } from "react-redux";
import DeleteMarket from "../modal/Markets/DeleteMarket";
import ReverseMarket from "../modal/Markets/ReverseMarket";

const Modals = () => {
  const { showDeleteMarket, showReverseMarket } = useSelector(
    (state) => state.global
  );
  return (
    <>
      {showDeleteMarket && <DeleteMarket />}{" "}
      {showReverseMarket && <ReverseMarket />}
    </>
  );
};

export default Modals;
