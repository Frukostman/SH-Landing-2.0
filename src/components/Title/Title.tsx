interface Title {
    text: string,
    titleColor: string,
    rectangleColor: string,
}

export const Title = ({text='white', titleColor='light', rectangleColor='BGC_Background'}) => {

    return(
        <>  
            <h3 className={ `title ${titleColor}` }> {text} </h3>   
            <div className={`rectangle ${rectangleColor}`}></div>
        </>
    )

}
