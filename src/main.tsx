import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/style.css";
import "./css/satoshi.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Icon } from "@iconify/react";
import NiceModal from "@ebay/nice-modal-react";

const MANTINE_PRIMARY_COLOR = [
  "#CBEBFF",
  "#88D2FF",
  "#4EBCFF",
  "#1CA9FF",
  "#0096F9",
  "#0080D3",
  "#016DB2",
  "#005B96",
  "#004C7D",
  "#003F68",
  "#003456",
];

const MANTINE_BACKGROUND_COLOR = ["#F2F4F6", "#F2F4F8", "#F6F6F6", "#FBFBFB"];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MantineCompDefaultProps = {
  Select: {
    rightSection: <Icon icon="akar-icons:chevron-down" width={12} />,
    styles: { rightSection: { pointerEvents: "none" } },
  },
  DatePicker: {
    rightSection: (
      <Icon
        icon="ic:round-date-range"
        color="#C1C7CD"
        width={24}
        className="mr-2"
      />
    ),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <MantineProvider
          theme={{
            fontFamily: "Satoshi, Inter, Roboto, system-ui",
            colors: {
              primary: MANTINE_PRIMARY_COLOR,
              bg: MANTINE_BACKGROUND_COLOR,
            },
            primaryColor: "primary", // key of theme.colors
            respectReducedMotion: true,
            components: {
              Select: {
                defaultProps: MantineCompDefaultProps.Select,
              },
              DatePicker: {
                defaultProps: MantineCompDefaultProps.DatePicker,
              },
            },
          }}
        >
          <QueryClientProvider client={queryClient}>
            <NiceModal.Provider>
              <Router>
                <App />
              </Router>
            </NiceModal.Provider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MantineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
