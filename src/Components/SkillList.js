import {skillsData} from "../skillData"
import { SkillItem } from "./SkillItem"
export function SkillList() {

    const generateSkillItems = () => {
        const skillItems = skillsData.map( (skill)=>{
            return(
                <SkillItem  skillName={skill.name}
                            key={crypto.randomUUID()} />
            )
        })
        return skillItems
    }

    return(
        <>
        <div className="skillList">
            {generateSkillItems()}
        </div>
        </>
    )
}