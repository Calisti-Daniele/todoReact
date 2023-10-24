
const Col = ({children, size, classe = "", customStyle}) => {

    const className = `col${size ? `-${size}` : ''} ${classe} p-3 overflow-scroll vh-100`;

    return (
        <div className={className} style={customStyle}>
            {children}
        </div>
    )
}

export default Col;