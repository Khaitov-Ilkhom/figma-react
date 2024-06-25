import classes from "./Navbar.module.css"
import {newGames, popularGameCard} from "../../utils/index.js";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}><a href="#">Game</a></li>
                    <li className={classes.li}><a href="#">Live Score</a></li>
                    <li className={classes.li}><a href="#">Statistics</a></li>
                    <li className={classes.li}><a href="#">Analitics</a></li>
                    <li className={classes.li}><a href="#">Forecasts</a></li>
                </ul>
            </nav>
            <div className={classes.hero}>
                <div className={classes.heros}>
                    <h2>The Forbidden Kingdom Adventure War</h2>
                    <button type="button">More Details</button>
                </div>
            </div>
            <div className={classes.wrapper}>
                <h2>Most popular Game</h2>
                <div className={classes.cards}>
                    {
                        popularGameCard.map((card, index) =>
                            <div key={index} className={classes.card}>
                                <img src={card.img} alt=""/>
                                <div className={classes.title}>
                                    <h4>{card.title}</h4>
                                    <p><span><FaStar/> </span> {card.rating}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={classes.wrapper}>
                <h2>Most popular Game</h2>
                <div className={classes.cards2}>
                    {
                        newGames.map((card2, index) =>
                            <div key={index} className={classes.card2}>
                                <img src={card2.img} alt=""/>
                                <div className={classes.title2}>
                                    <h4>{card2.title}</h4>
                                    <span>{card2.type}</span>
                                    <p>{card2.rating} <span> <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar