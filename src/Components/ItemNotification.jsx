import "../Sass/itemNotification.scss";

const ItemNotification = ({
  name,
  description,
  title,
  img,
  date,
  file,
  message,
  active,
}) => {
  return (
    <>
      <div className={`containerItem ${active ?'active':''}`}>
        <img src={img} alt="avatar" className="avatar" />
        <section className="contentItem">
          <div className="dataItem">
            <div className="contentData ">
              <div className="contentText">
                <p className="paragraph">
                  <span className="name">{name}</span>
                <span className="description">{description}</span>
                <span className="title">{title}</span>
                </p>
                {active && <span className="alertNotification"></span>}
                
              </div>

              <div className="dateItem">{date}</div>
            </div>
            {message != "" && <div className="messageItem">{message}</div>}
          </div>
          {file != "" && (
            <div className="fileItem">
              <img src={file} alt="chess" className="chess" />
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default ItemNotification;
