import React, { useEffect } from "react";
import Table from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { loadVisits } from "../../store/actions/visits";

const useVisits = (action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, []);
};

export default function Visit() {
  const { visits } = useSelector((state) => state.visitReducer);
  useVisits(loadVisits);

  console.log(visits, "==========");
  return (
    <div>
      <div class="container">
        <h2>Activities history</h2>
        <Table rows={visits} />
      </div>
    </div>
  );
}
