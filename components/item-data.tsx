import { VariableSizeGrid, GridChildComponentProps } from "react-window";

import records from "./data.json";

type Record = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
};

const columnWidths = {
  id: 40,
  firstName: 100,
  lastName: 100,
  email: 300,
  city: 100,
};

type Data = Record[];

const Cell = ({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) => {
  const record = (data as Data)[rowIndex];
  const key = (Object.keys(record) as Array<keyof Record>)[columnIndex];

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
          (Object.keys(records[0]) as Array<keyof Record>)[index]
        ];
      }}
      height={300}
      rowCount={records.length}
      rowHeight={(index) => 50}
      width={600}
      itemData={records}
    >
      {Cell}
    </VariableSizeGrid>
  );
};

export default GridWithItemData;
