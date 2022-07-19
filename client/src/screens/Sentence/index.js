import React, { useEffect } from "react";
// import Table from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { loadVisits } from "../../store/actions/visits";
import { listSentences } from "../../store/actions/sentence";

import MUIDataTable from "mui-datatables";

const columns = [
  { name: "_id", label: "Id" },
  { name: "sentence", label: "Sentence" },
];

const options = {
  filterType: "checkbox",
};

export default function Visit() {
  const { savedSentences } = useSelector((state) => state.sentenceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSentences());
  }, []);

  useEffect(() => {
    // if (data.length !== 0) {
    //   setIsLoading(false);
    // }
    "saved sentece value updated====================>>>>>>>>>>>";
  }, [savedSentences]);

  const { rows } = savedSentences;
  console.log(rows, "new sentences===============");

  return (
    <div>
      <div className="container">
        <h2>Sentences</h2>
        <MUIDataTable
          title={"Saved Sentences List"}
          data={rows}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
}
