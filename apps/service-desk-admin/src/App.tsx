import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UniformIssueList } from "./uniformIssue/UniformIssueList";
import { UniformIssueCreate } from "./uniformIssue/UniformIssueCreate";
import { UniformIssueEdit } from "./uniformIssue/UniformIssueEdit";
import { UniformIssueShow } from "./uniformIssue/UniformIssueShow";
import { DeliveryScheduleIssueList } from "./deliveryScheduleIssue/DeliveryScheduleIssueList";
import { DeliveryScheduleIssueCreate } from "./deliveryScheduleIssue/DeliveryScheduleIssueCreate";
import { DeliveryScheduleIssueEdit } from "./deliveryScheduleIssue/DeliveryScheduleIssueEdit";
import { DeliveryScheduleIssueShow } from "./deliveryScheduleIssue/DeliveryScheduleIssueShow";
import { GoodsIssueList } from "./goodsIssue/GoodsIssueList";
import { GoodsIssueCreate } from "./goodsIssue/GoodsIssueCreate";
import { GoodsIssueEdit } from "./goodsIssue/GoodsIssueEdit";
import { GoodsIssueShow } from "./goodsIssue/GoodsIssueShow";
import { OtherIssueList } from "./otherIssue/OtherIssueList";
import { OtherIssueCreate } from "./otherIssue/OtherIssueCreate";
import { OtherIssueEdit } from "./otherIssue/OtherIssueEdit";
import { OtherIssueShow } from "./otherIssue/OtherIssueShow";
import { EquipmentIssueList } from "./equipmentIssue/EquipmentIssueList";
import { EquipmentIssueCreate } from "./equipmentIssue/EquipmentIssueCreate";
import { EquipmentIssueEdit } from "./equipmentIssue/EquipmentIssueEdit";
import { EquipmentIssueShow } from "./equipmentIssue/EquipmentIssueShow";
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
        title={"ServiceDesk"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UniformIssue"
          list={UniformIssueList}
          edit={UniformIssueEdit}
          create={UniformIssueCreate}
          show={UniformIssueShow}
        />
        <Resource
          name="DeliveryScheduleIssue"
          list={DeliveryScheduleIssueList}
          edit={DeliveryScheduleIssueEdit}
          create={DeliveryScheduleIssueCreate}
          show={DeliveryScheduleIssueShow}
        />
        <Resource
          name="GoodsIssue"
          list={GoodsIssueList}
          edit={GoodsIssueEdit}
          create={GoodsIssueCreate}
          show={GoodsIssueShow}
        />
        <Resource
          name="OtherIssue"
          list={OtherIssueList}
          edit={OtherIssueEdit}
          create={OtherIssueCreate}
          show={OtherIssueShow}
        />
        <Resource
          name="EquipmentIssue"
          list={EquipmentIssueList}
          edit={EquipmentIssueEdit}
          create={EquipmentIssueCreate}
          show={EquipmentIssueShow}
        />
      </Admin>
    </div>
  );
};

export default App;
