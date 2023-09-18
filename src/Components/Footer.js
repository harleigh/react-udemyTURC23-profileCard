import {emojiLevel} from "../skillData"


export function Footer () {

    const displayLegend = () => {
        //Object.entries(emojiLevel) gives an array of [key value]
        const keyItems = Object.entries(emojiLevel).map(
            ([skillLevel, emoji]) => {
                return (
                    <li className="skillLegendItem"key={crypto.randomUUID()}>
                        {skillLevel}:{emoji}
                    </li>
                )
            }
        )
        return keyItems
    }

    return (
        <>
        <h4>Skill Level Emoji Legend: </h4>
        <ul className="nobulletList">
            {displayLegend()}
        </ul>
        
        </>
    )
}