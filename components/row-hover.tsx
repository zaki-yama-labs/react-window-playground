import { Dispatch, SetStateAction, useState } from "react";
import { FixedSizeGrid, GridChildComponentProps } from "react-window";

type ItemData = {
  hoveredRowIndex: number | null;
  setHoveredRowIndex: Dispatch<SetStateAction<number | null>>;
};

const Cell = ({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) => {
  const { hoveredRowIndex, setHoveredRowIndex } = data as ItemData;
  const className = `cell ${hoveredRowIndex === rowIndex ? "row-hovered" : ""}`;
  return (
    <div
      className={className}
      style={style}
      onMouseEnter={() => {
        console.log("mouseenter", rowIndex, columnIndex);
        setHoveredRowIndex(rowIndex);
      }}
    >
      Item {rowIndex},{columnIndex}
    </div>
  );
};

/**
 * Grid with color on hovered row.
 * ref. https://github.com/bvaughn/react-window/issues/252
 */
const GridWithRowHover = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  return (
    <FixedSizeGrid
      className="grid"
      columnCount={1000}
      columnWidth={100}
      height={150}
      rowCount={1000}
      rowHeight={50}
      width={300}
      itemData={{
        hoveredRowIndex,
        setHoveredRowIndex,
      }}
    >
      {Cell}
    </FixedSizeGrid>
  );
};

export default GridWithRowHover;
