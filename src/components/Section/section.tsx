import React from 'react'
interface IProps {
    title: string,
}
const section: React.FunctionComponent<IProps> = (props) => {
    let { title, children } = props
    return (
        <section className="section">
            <h2 className="title is-3 has-text-centered">{title}</h2>
            {children}
        </section>
    )
}
export default section;