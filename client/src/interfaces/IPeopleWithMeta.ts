import IPeople from "../../../server/interfaces/IPeople";
import IMeta from "./IMeta";

interface PeopleWithMeta extends IMeta {
  data: IPeople[],
};

export default PeopleWithMeta;
