import classes from "./Dashboard.module.css"
import userIcon from "../images/Admin.svg"
import {liveGaming} from "../../utils/index.js";
import cardImg from "../images/img.png"
import { IoIosNotificationsOutline } from "react-icons/io";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.admin}>
                <div className={classes.user}>
                    <img src={userIcon} alt=""/>
                    <p>William jonson</p>
                </div>
                <span className={classes.icon}><IoIosNotificationsOutline/></span>
            </div>
            <div className={classes.cards}>
                {
                    liveGaming.map((card, index) =>
                        <div key={index} className={classes.card}>
                            <img src={card.img} alt=""/>
                            <div className={classes.title}>
                                <h4>{card.title}</h4>
                                <span>{card.type}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={classes.lastCard}>
                <img src={cardImg} alt=""/>
                <div className={classes.cardBody}>
                    <h3>Need for Speed</h3>
                    <p className={classes.type}>Racing</p>
                    <p className={classes.rating}>4.5 <span> <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span></p>
                    <p className={classes.desc}>
                        Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.
                    </p>
                    <button className={classes.btn} type="button">Download now</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard