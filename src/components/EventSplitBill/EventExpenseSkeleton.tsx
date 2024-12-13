import {
  IonCol,
  IonContent,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
} from "@ionic/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { EventExpenseSummaryProps } from "@goflock/types";
const EventExpenseSkeleton: React.FC<EventExpenseSummaryProps> = ({
  event,
  eventRelation,
}) => {
  return (
    <IonPage>
      <Header
        title={`Expenses`}
        showMenu={false}
        showContactList={false}
        showProfile={false}
      />
      <IonContent className="ion-padding">
        <IonSegment className="segment-tabs" value={"transactions"}>
          <IonSegmentButton value="transactions">Transactions</IonSegmentButton>
          <IonSegmentButton value="expenses">Expense Summary</IonSegmentButton>
        </IonSegment>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "80px",
                marginTop: "5px",
                borderRadius: "5px",
              }}
            >
              <IonRow>
                <IonCol>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "120px" }}
                  ></IonSkeletonText>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "70px" }}
                  ></IonSkeletonText>
                </IonCol>
                <IonRow>
                  <IonCol>
                    <IonSkeletonText
                      animated={true}
                      style={{
                        width: "45px",
                        height: "10px",
                        marginLeft: "30px",
                      }}
                    ></IonSkeletonText>
                    <IonRow style={{ marginLeft: "20px" }}>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></IonSkeletonText>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      ></IonSkeletonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "80px",
                marginTop: "5px",
                borderRadius: "5px",
              }}
            >
              <IonRow>
                <IonCol>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "120px" }}
                  ></IonSkeletonText>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "70px" }}
                  ></IonSkeletonText>
                </IonCol>
                <IonRow>
                  <IonCol>
                    <IonSkeletonText
                      animated={true}
                      style={{
                        width: "45px",
                        height: "10px",
                        marginLeft: "30px",
                      }}
                    ></IonSkeletonText>
                    <IonRow style={{ marginLeft: "20px" }}>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></IonSkeletonText>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      ></IonSkeletonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "80px",
                marginTop: "5px",
                borderRadius: "5px",
              }}
            >
              <IonRow>
                <IonCol>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "120px" }}
                  ></IonSkeletonText>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "70px" }}
                  ></IonSkeletonText>
                </IonCol>
                <IonRow>
                  <IonCol>
                    <IonSkeletonText
                      animated={true}
                      style={{
                        width: "45px",
                        height: "10px",
                        marginLeft: "30px",
                      }}
                    ></IonSkeletonText>
                    <IonRow style={{ marginLeft: "20px" }}>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></IonSkeletonText>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      ></IonSkeletonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "80px",
                marginTop: "5px",
                borderRadius: "5px",
              }}
            >
              <IonRow>
                <IonCol>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "120px" }}
                  ></IonSkeletonText>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "70px" }}
                  ></IonSkeletonText>
                </IonCol>
                <IonRow>
                  <IonCol>
                    <IonSkeletonText
                      animated={true}
                      style={{
                        width: "45px",
                        height: "10px",
                        marginLeft: "30px",
                      }}
                    ></IonSkeletonText>
                    <IonRow style={{ marginLeft: "20px" }}>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></IonSkeletonText>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      ></IonSkeletonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "80px",
                marginTop: "5px",
                borderRadius: "5px",
              }}
            >
              <IonRow>
                <IonCol>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "120px" }}
                  ></IonSkeletonText>
                  <IonSkeletonText
                    animated={true}
                    style={{ width: "70px" }}
                  ></IonSkeletonText>
                </IonCol>
                <IonRow>
                  <IonCol>
                    <IonSkeletonText
                      animated={true}
                      style={{
                        width: "45px",
                        height: "10px",
                        marginLeft: "30px",
                      }}
                    ></IonSkeletonText>
                    <IonRow style={{ marginLeft: "20px" }}>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      ></IonSkeletonText>
                      <IonSkeletonText
                        animated={true}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      ></IonSkeletonText>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
      <Footer
        event={event}
        activeTab={"expenses"}
        settings={event?.settings}
        eventRelation={eventRelation}
      />
    </IonPage>
  );
};
export default EventExpenseSkeleton;
