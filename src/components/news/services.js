const columnsExport = [
    {
      label: "NewsID",
      field: "news_id",
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
      title: "Title",
      dataIndex: "subject",
      scopedSlots: { customRender: "name" },
    },
    {
      title: "type",
      dataIndex: "type",
    },
    {
      title: "NewsID",
      dataIndex: "news_id",
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
  