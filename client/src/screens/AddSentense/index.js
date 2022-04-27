import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { saveSentence } from "../../store/actions/sentence";

const useVisits = (action) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, []);
};

export default function AddSentense() {
  const [sentence, setSentense] = useState("");
  const dispatch = useDispatch();
  const { saved } = useSelector((state) => state.sentenceReducer);
  useEffect(() => {
    if (saved) {
      alert("sentense is saved successfully");
      dispatch({ type: "RESET_SAVED_STATUS" });
    }
  }, [saved]);

  //   useVisits(loadVisits);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(saveSentence(sentence)).then((status) => {
      console.log("called inside .then", status, "sanved:", saved);
    });
    console.log("saved?", saved);
  }

  return (
    <div>
      <div class="container">
        <h2>Add Sentense</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => {
              setSentense(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            value={sentence}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
