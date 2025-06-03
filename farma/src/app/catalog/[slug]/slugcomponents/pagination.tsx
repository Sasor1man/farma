import { FunctionComponent } from "react";

interface PaginationProps {
  number: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
}

const activeCheck = (current: number, num: number) => {
  return current === num
    ? `w-[40] bg-blue-500 flex items-center justify-center text-white rounded-[8px]`
    : `w-[40] bg-blue-200 flex items-center justify-center text-white rounded-[8px]`;
};

const renderPageDiv = (
  num: number,
  func: (n: number) => void,
  currentPage: number
) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(
      <div
        className={activeCheck(currentPage, i)}
        key={i}
        onClick={() => func(i)}
      >
        {i + 1}
      </div>
    );
  }
  return result.map((e) => e);
};

const Pagination: FunctionComponent<PaginationProps> = ({
  number,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <div className="h-[40px] flex justify-center gap-[16px] mt-[60px]">
      {renderPageDiv(number, setCurrentPage, currentPage)}
    </div>
  );
};

export default Pagination;
