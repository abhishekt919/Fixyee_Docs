import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/units/fixyee-units-api",
    },
    {
      type: "category",
      label: "Units",
      items: [
        {
          type: "doc",
          id: "api/units/get-units-list",
          label: "Get Units List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/units/create-unit",
          label: "Create Unit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/units/get-unit-by-id",
          label: "Get Unit by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/units/get-active-units",
          label: "Get Active Units",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/units/delete-unit",
          label: "Delete Unit",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
