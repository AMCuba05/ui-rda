import './styles.css'
import {CommonText} from "../CommonText";

export const ColoredTag = ({children,state}) => {
    return<div className={state ? `tag-${state}` : 'tag-default'}>
        <CommonText>{children}</CommonText>
    </div>
}
