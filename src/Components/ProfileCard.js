import { Avatar } from "./Avatar";
import { BioBlerb } from "./BioBlerb";
import { SkillList } from "./SkillList";
import { Footer } from "./Footer";

export default function ProfileCard() {
    return(
        <>
        <div className="card">
            <Avatar/>
            <BioBlerb/>
            <SkillList/>
            <Footer/>
        </div>
        </>
    )
}