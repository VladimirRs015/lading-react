import React from 'react'
import "./styles.css"
interface IProps {
    image: string,
    title: string,
    textFirst: boolean,
}
const InfoItem: React.FunctionComponent<IProps> = (props) => {
    const { image, title, textFirst, children } = props
    function order() {
        let order = {
            text: textFirst ? 'order-0' : 'order-1',
            image: textFirst ? 'order-1' : 'order-0'
        }
        return order
    }
    return (
        <div className="columns column is-12 height-full is-justify-content-space-between">
            <div className={`column is-6 ${order().text}`}>
                <h3 className="title is-4 has-text-centered">{title}</h3>
                <p>{children}</p>
            </div>
            <div className={`column is-flex is-justify-content-center is-5 ${order().image}`}
            >
                <img style={{maxWidth:"300px"}}  src={image} alt="" />
            </div>
        </div>
    )
}
export default InfoItem