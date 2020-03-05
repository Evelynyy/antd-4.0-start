import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";

export default function Index() {
  const dispatch = useDispatch();
  const { counter, summary } = useSelector(state => state.dashboard);

  return (
    <div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum commodi
        explicabo eaque dolorum? Nihil vero perspiciatis corporis sint, soluta
        neque at vitae minima adipisci quibusdam perferendis sed nesciunt unde
        ut.
      </div>
      <div>{summary}</div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
