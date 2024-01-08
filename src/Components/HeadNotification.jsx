import '../Sass/headNotification.scss'

const HeadNotification = () => {
  return (
    <>
      <div className="containerHead">
        <section className="countNotification">
          <span className="title">
            Notifications
          </span>
          <span className="count">
            3
          </span>
        </section>
        <section className="nav">
          Mark all as read
        </section>
      </div>
    </>
  )
}

export default HeadNotification