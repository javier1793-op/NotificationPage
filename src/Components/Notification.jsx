import '../Sass/notification.scss'
import HeadNotification from './HeadNotification'
import ItemNotification from './ItemNotification'

const Notification = () => {
  return (
    <>
        <div className="containerNotification">
            <HeadNotification/>
            <section className="contentNotification">
                <ItemNotification/>
            </section>
        </div>
    </>
  )
}

export default Notification