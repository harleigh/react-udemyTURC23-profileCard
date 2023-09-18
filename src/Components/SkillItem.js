
/**
 * A skill item is
 *      Name of Skill
 *      An emoji?
 *      Color of Skill?
 */
export function SkillItem({skillName, skillLevelEmoji}) {
    const colorCollection = [ "red", "blue", "green", "lawngreen", "deeppink",
                              "brown", "cornflowerblue", "cyan", "darkorchid",
                              "aqua", "fuchsia", "gray", "green", "lime", "maroon"]
    const rndColor = colorCollection[Math.floor(Math.random()*colorCollection.length)]

    //console.log(Math.floor(Math.random()*colorCollection.length))

    return (
        <>
        <div className="skillItem"
             style={{backgroundColor: rndColor.toString()}} >
            <span>{skillName + skillLevelEmoji}</span>
        </div>
        </>
    )
}