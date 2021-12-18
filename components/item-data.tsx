import { VariableSizeGrid, GridChildComponentProps } from "react-window";

import records from "./data.json";

type Record = typeof records[0];

const columnWidths = {
  id: 40,
  firstName: 100,
  lastName: 100,
  email: 300,
  city: 100,
};

const Cell = ({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) => {
  const record = data[rowIndex];
  const key = Object.keys(record)[columnIndex];

  return (
    <div className="cell" style={style}>
      {record[key]}
    </div>
  );
};

const GridWithItemData = () => {
  return (
    <VariableSizeGrid
      className="grid"
      columnCount={5}
      columnWidth={(index) => {
        return columnWidths[
          (Object.keys(records[0]) as (keyof Record)[])[index]
        ];
      }}
      height={150}
      rowCount={records.length}
      rowHeight={(index) => 50}
      width={300}
      itemData={records}
    >
      {Cell}
    </VariableSizeGrid>
  );
};

export default GridWithItemData;