import React, { FC } from "react";
import { PaginationWrapper, PageNumber, PageNav } from "./PaginationStyle";

interface CustomPaginationProps {
  value: number,
  range: number,
  onChange: (n: number) => void,
}

export const CustomPagination: FC<CustomPaginationProps> = (props) => {

  const { value, range, onChange } = props;

  let pattern = null;

  switch (true) {
    case range < 7:
      pattern = [...new Array(range)].map((_, i) => i + 1);
      break;
    case value < 4:
      pattern = [1, 2, 3, 4, 5, "...", range];
      break;
    case value > range - 4:
      pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, "...", value - 1, value, value + 1, "...", range];
  }

  function changePage(n: any) {
    if (typeof n === "number" && n > 0 && n <= range) {
      onChange(n);
    }
  }

  return range > 1 ? (
    <PaginationWrapper>
      <PageNav
        disabled={value <= 1}
        onClick={() => changePage(range - (range - 1))}
      >
        First
      </PageNav>
      {pattern.map((label, index) => (
        <PageNumber
          key={index}
          onClick={() => changePage(label)}
          isActive={value === label}
        >
          {label}
        </PageNumber>
      ))}
      <PageNav disabled={value >= range} onClick={() => changePage(range)}>
        Last
      </PageNav>
    </PaginationWrapper>
  ) : (
    <></>
  );
};

