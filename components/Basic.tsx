import { VariableSizeGrid, GridChildComponentProps } from "react-window";

import styles from "./Basic.module.css";

const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
  <div className={styles.cell} style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

/**
 * Basic grid component.
 * ref. https://react-window.vercel.app/#/examples/grid/variable-size
 */
export const BasicGrid = () => {
  return (
    <VariableSizeGrid
      className={styles.grid}
      columnCount={1000}
      columnWidth={(index) => columnWidths[index]}
      height={300}
      rowCount={1000}
      rowHeight={(index) => rowHeights[index]}
      width={600}
    >
      {Cell}
    </VariableSizeGrid>
  );
};
