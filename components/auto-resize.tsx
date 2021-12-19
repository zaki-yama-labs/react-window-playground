import { VariableSizeGrid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import styles from "./auto-resize.module.css";

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

const GridWithAutoResize = () => {
  return (
    <>
      <p>
        Resize the grid by dragging the bottom right corner of the container.
      </p>
      <div className={styles.container}>
        <AutoSizer>
          {({ width, height }) => (
            <VariableSizeGrid
              className={styles.grid}
              columnCount={1000}
              columnWidth={(index) => columnWidths[index]}
              height={height}
              rowCount={1000}
              rowHeight={(index) => rowHeights[index]}
              width={width}
            >
              {Cell}
            </VariableSizeGrid>
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default GridWithAutoResize;
