import styled from '@emotion/styled';

export interface CellProps {
  width: number;
  height: number;
  left: number;
  top: number;
  center: number;
  area: number;
  middle: boolean;
}

export const Cell = styled.div<any>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};
  ${({ center }) => center && `text-align: center`};
  ${({ area }) => area && `grid-area: ${area}`};
  ${({ middle }) => middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `};
`;

const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const fr = value =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = "8px" }) => gap;

const flow = ({ flow = "row" }) => flow;

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

export interface GridProps {
  height: number | string;
  rows: number | string;
  columnGap: number;
  rowGap: number;
  areas: string[];
  justifyContent: number | string;
  alignContent: string;
  columns: number | string;
}

export const Grid = styled.div<any>`
  display: grid;
  height: ${({ height = "auto" }) => height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${fr(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => fr(columns)};
  grid-gap: ${gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;
