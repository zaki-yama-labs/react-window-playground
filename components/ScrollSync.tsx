import { useRef } from "react";
import {
  VariableSizeGrid,
  GridChildComponentProps,
  GridOnScrollProps,
} from "react-window";
import scrollbarSize from "dom-helpers/scrollbarSize";

import styles from "./ScrollSync.module.css";

const LeftGridCell = ({
  columnIndex,
  rowIndex,
  style,
}: GridChildComponentProps) => (
  <div className={styles.leftGridCell} style={style}>
    Left#{rowIndex},{columnIndex}
  </div>
);

const RightGridCell = ({
  columnIndex,
  rowIndex,
  style,
}: GridChildComponentProps) => (
  <div className={styles.rightGridCell} style={style}>
    Right#{rowIndex},{columnIndex}
  </div>
);

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

export const GridWithScrollSync = () => {
  const leftGridRef = useRef<VariableSizeGrid>(null);
  const rightGridRef = useRef<VariableSizeGrid>(null);

  const onScroll = ({ scrollTop }: GridOnScrollProps) => {
    if (leftGridRef.current) {
      leftGridRef.current.scrollTo({ scrollTop });
    }
    if (rightGridRef.current) {
      rightGridRef.current.scrollTo({ scrollTop });
    }
  };

  return (
    <div className={styles.container}>
      <div style={{ width: columnWidths[0], overflow: "hidden" }}>
        <VariableSizeGrid
          ref={leftGridRef}
          onScroll={onScroll}
          className={styles.leftGrid}
          style={{ overflowX: "hidden", overflowY: "auto" }}
          width={columnWidths[0] + scrollbarSize()}
          height={300}
          columnWidth={(index) => columnWidths[index]}
          rowHeight={(index) => rowHeights[index]}
          columnCount={1}
          rowCount={1000}
        >
          {LeftGridCell}
        </VariableSizeGrid>
      </div>
      <VariableSizeGrid
        ref={rightGridRef}
        onScroll={onScroll}
        className={styles.rightGrid}
        width={600}
        height={300}
        columnWidth={(index) => columnWidths[index]}
        rowHeight={(index) => rowHeights[index]}
        columnCount={999}
        rowCount={1000}
      >
        {RightGridCell}
      </VariableSizeGrid>
    </div>
  );
};
