import { v4 as uuidv4 } from "uuid";

const initialData = [
  {
    id: uuidv4(),
    name: "CSPM Executive Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Alpha Insights",
        text: "Detailed analysis of Alpha metrics and trends.",
        isVisible: true,
      },
      {
        id: uuidv4(),
        name: "Beta Metrics",
        text: "Comprehensive overview of Beta performance indicators.",
        isVisible: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "CWPP Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Gamma Overview",
        text: "Gamma dashboard providing key insights and data points.",
        isVisible: true,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Registry Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Delta Analytics",
        text: "Analytics and trends for Delta operations.",
        isVisible: true,
      },
    ],
  },
];

export default initialData;
