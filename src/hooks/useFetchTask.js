import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTasks } from "../features/task/taskThunks";

const useFetchTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loadingGet, hasFetched} = useSelector((state) => state.tasks);

  useEffect(() => {
    if (!loadingGet && !hasFetched) {
      dispatch(getTasks());
    }
  }, [dispatch, loadingGet, hasFetched]);
};

export default useFetchTasks;