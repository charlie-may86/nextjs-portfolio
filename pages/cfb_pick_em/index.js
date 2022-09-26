import { NebContextProvider } from "../../context/NebContext";
import SubmitPicks from "../../components/cfb-pickem/submit-picks";
import NebPickEm from "../../components/cfb-pickem/neb-pickem";

const CfbPickEm = () => {
  return (
    <NebContextProvider>
      <h1>This is cfb pickem app</h1>
      <SubmitPicks />
      <NebPickEm />
    </NebContextProvider>
  );
};

export default CfbPickEm;
