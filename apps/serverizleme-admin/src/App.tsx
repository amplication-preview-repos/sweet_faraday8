import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServerList } from "./server/ServerList";
import { ServerCreate } from "./server/ServerCreate";
import { ServerEdit } from "./server/ServerEdit";
import { ServerShow } from "./server/ServerShow";
import { MetricsList } from "./metrics/MetricsList";
import { MetricsCreate } from "./metrics/MetricsCreate";
import { MetricsEdit } from "./metrics/MetricsEdit";
import { MetricsShow } from "./metrics/MetricsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"serverizleme"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Server"
          list={ServerList}
          edit={ServerEdit}
          create={ServerCreate}
          show={ServerShow}
        />
        <Resource
          name="Metrics"
          list={MetricsList}
          edit={MetricsEdit}
          create={MetricsCreate}
          show={MetricsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
