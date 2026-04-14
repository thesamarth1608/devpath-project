import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTasks } from "../features/task/taskThunks";
getTasks

const useFetchTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loadingGet } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (!loadingGet && tasks.length === 0) {
      dispatch(getTasks());
    }
  }, [dispatch, loadingGet, tasks.length]);
};

export default useFetchTasks;