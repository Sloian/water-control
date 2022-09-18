import style from "./History.module.css";
import Title from "../Base/Title/Title";
import Button from "../Base/Button/Button";

const History = ({ historyData, clearHistory }) => {
  const data = Object.entries(historyData).reverse();
  return (
    <div className={style.container}>
      <Title titleText={"History"} />
      <div className={style.history}>
        {data.map(([time, ml], index) => (
          <div key={index + 1}>
            <h4 className={style.history_info}>
              You drunk at {time}- {ml} ml
            </h4>
          </div>
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button
          buttonText={"Clear history"}
          onClick={clearHistory}
          extraClass={`btn-lg btn-block ${style.clear_history}`}
        />
      </div>
    </div>
  );
};

export default History;
