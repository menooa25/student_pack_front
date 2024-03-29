import { requestLessonListSearch } from "api/services";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLessons } from "../lessonTable";
const Search = () => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await requestLessonListSearch(searchValue);
      dispatch(setLessons(data));
    };
    if (!isInitial) {
      const timout = setTimeout(sendRequest, 300);
      return () => clearTimeout(timout);
    } else setIsInitial(false);
  }, [searchValue]);
  return (
    <div className="form-control">
      <input
        dir="rtl"
        type="text"
        value={searchValue}
        onChange={({ target: { value } }) => setSearchValue(value)}
        placeholder="جستجو"
        className="input input-bordered input-xs  center rounded-md"
      />
    </div>
  );
};

export default Search;
