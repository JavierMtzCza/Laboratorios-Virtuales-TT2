
const Cards = () => {

    const images = [
    "/memorama/imagen1.svg",
    "/vite.svg",
    
    ]
    const newImages = images.flatMap(item => [item, item])
    console.log(newImages);
    return (
        
        <div className="cards">
         <h2> Score:100</h2>
         <ul>
            {
                images.map((item, index) =>(
                    <li key={index}>
                        <div className="content">
                            <div className="front">
                                <img src={item} alt="" />
                            </div>
                        </div>
                    </li>
                ))
            }
         </ul>
        </div>
        
       
    );
}

export default Cards;