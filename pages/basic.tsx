import type { NextPage } from "next";
import {
  VariableSizeGrid as Grid,
  GridChildComponentProps,
} from "react-window";

const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);

const Basic: NextPage = () => {
  // These item sizes are arbitrary.
  // Yours should be based on the content of the item.
  const columnWidths = new Array(1000)
    .fill(true)
    .map(() => 75 + Math.round(Math.random() * 50));
  const rowHeights = new Array(1000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 50));

  return (
    <Grid
      columnCount={1000}
      columnWidth={(index) => columnWidths[index]}
      height={150}
      rowCount={1000}
      rowHeight={(index) => rowHeights[index]}
      width={300}
    >
      {Cell}
    </Grid>
  );
};

export default Basic;
