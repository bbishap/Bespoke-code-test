import IonIcon from "@reacticons/ionicons";
import "./table.scss";

interface Props {
  data: Data[];
}

interface Data {
  startTime: string;
  seating: number;
}

const Table = ({ data }: Props) => {
  const getEndTime = (startTime: string) => {
    const splitText = startTime.split(":");
    let hour = Number(splitText[0]);
    let minute = Number(splitText[1]);
    if (minute + 15 === 60) {
      hour = hour + 1;
      minute = 0;
    } else {
      minute = minute + 15;
    }
    return `${hour} : ${minute.toString().padStart(2, "0")}`;
  };
  return (
    <div className="table">
      <div className="table_header table_row">
        <div className="table_item">
          <div className="sn"></div>
          Slot Timing
        </div>
        <div className="table_item">Seating Capacity</div>
        <div className="table_item">Manage</div>
      </div>
      {data.length > 0 ? (
        data.map((item, key) => (
          <div className="table_row table_body" key={key * 80}>
            <div className="table_item">
              <div className="sn">
                <input type="checkbox" />
              </div>
              {item.startTime} - {getEndTime(item.startTime)}
            </div>
            <div className="table_item">{item.seating}</div>
            <div className="table_item icon">
              <IonIcon name="pencil" />
              <IonIcon name="trash" />
            </div>
          </div>
        ))
      ) : (
        <div className="table-no-data">Please create slots first</div>
      )}
    </div>
  );
};

export default Table;
