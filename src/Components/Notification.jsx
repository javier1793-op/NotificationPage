import '../Sass/notification.scss'
import HeadNotification from './HeadNotification'
import ItemNotification from './ItemNotification'

import Mark from '../Img/avatar-mark-webber.webp'
import Angela from '../Img/avatar-angela-gray.webp'
import Jacob from '../Img/avatar-jacob-thompson.webp'
import Rizky from '../Img/avatar-rizky-hasanuddin.webp'
import kimberly from '../Img/avatar-kimberly-smith.webp'
import Nathan from '../Img/avatar-nathan-peterson.webp'
import Anna from '../Img/avatar-anna-kim.webp'
import Chess from '../Img/image-chess.webp'

const Notification = () => {

  const data = [
    
      {
        "id": 1,
        "img": `${Mark}`,
        "name": "Mark Webber",
        "description": "reacted to your recent post",
        "title": "My first tournament today!",
        "date":"1m ago",
        "file": "",
        "message": "",
        "active": true
      },
    
      {
        "id": 2,
        "img": `${Angela}`,
        "name": "Angela Gray",
        "description": "followed you",
        "title": "",
        "date":"5m ago",
        "file": "",
        "message": "",
        "active": true
      },
      {
        "id": 3,
        "img": `${Jacob}`,
        "name": "Jacob Thompson",
        "description": "has joined your group",
        "title": "Chess Club",
        "date":"1 day ago",
        "file": "",
        "message": "",
        "active": true
      },
      {
        "id": 4,
        "img": `${Rizky}`,
        "name": "Rizky Hasanuddin",
        "description": "sent you a private message",
        "title": "",
        "date":"5 day ago",
        "file": "",
        "message": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I´m already having lots of fun and improving my game",
        "active": false
      },
      {
        "id": 5,
        "img": `${kimberly}`,
        "name": "Kimberly Smith",
        "description": "commented on your picture ",
        "title": "",
        "date":"1 week ago",
        "file": `${Chess}`,
        "message": "",
        "active": false
      },
      {
        "id": 6,
        "img": `${Nathan}`,
        "name": "Nathan Peterson",
        "description": "reacted to your recent post",
        "title": "5 end-game strategies to increase your win rate",
        "date":"2 week ago",
        "file": ``,
        "message": "",
        "active": false
      },
      {
        "id": 7,
        "img": `${Anna}`,
        "name": "Anna Kim",
        "description": "left the group",
        "title": "Chess Group",
        "date":"2 week ago",
        "file": ``,
        "message": "",
        "active": false
      },
    
  ]

  return (
    <>
        <div className="containerNotification">
            <HeadNotification/>
            <section className="contentNotification">
              {data.map((item)=>(
                <ItemNotification
                  key={item.key}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                  title={item.title}
                  date={item.date}
                  file={item.file}
                  message={item.message}
                  active={item.active}
                />
              ))}
            </section>
        </div>
    </>
  )
}

export default Notification