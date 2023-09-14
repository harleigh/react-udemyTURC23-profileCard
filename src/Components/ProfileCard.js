import { Avatar } from "./Avatar";
import { BioBlerb } from "./BioBlerb";
import { SkillList } from "./SkillList";

export default function ProfileCard() {
    return(
        <>
        <div className="card">
            <Avatar/>
            <BioBlerb/>
            <SkillList/>
        </div>
        </>
    )
}