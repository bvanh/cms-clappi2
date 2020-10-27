const columnsExport = [
  {
    label: "UserID",
    field: "fake_id",
  },
  {
    label: "UserName",
    field: "username",
  },
  {
    label: "Mobile",
    field: "mobile",
  },
  {
    label: "Email",
    field: "email",
  },
  {
    label: "Gender",
    field: "gender",
  },
  {
    label: "Status",
    field: "status",
  },
];
const columnsTable = [
  {
    title: "UserID",
    dataIndex: "fake_id",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "UserName",
    dataIndex: "username",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
export { columnsExport, columnsTable };
