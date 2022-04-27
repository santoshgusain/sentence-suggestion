import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, name: "Hello", col2: "World" },
  { id: 2, name: "DataGridPro", col2: "is Awesome" },
  { id: 3, name: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "#", width: "50" },
  { field: "name", headerName: "Name", width: "300" },
  { field: "email", headerName: "Email", width: "350" },
  { field: "mobile", headerName: "Mobile", width: "250" },
  { field: "role", headerName: "Role", width: "250" },
  { field: "department", headerName: "Department", width: "250" },
];

export default function App({ rows: customRows }) {
  console.log(customRows,"custom rows here=====");
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={customRows ?? rows}
        columns={columns}
        density="compact"
        FilterPanel="GridFilterPanel"
      />
    </div>
  );
}
