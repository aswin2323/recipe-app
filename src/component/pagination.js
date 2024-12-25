export default function Pagination({nPages, current, setCurrent}){

    const pageNumber = [...Array(nPages+1).keys()].slice(1)

    const goToNextPage = () => {
        if(current !== nPages) setCurrent(current + 1);
    }
    const goToPrevPage = () =>{
        if(current !== 1) setCurrent(current - 1);
    }
    return(
        <div>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                        href='#'>
                        Previous
                    </a>
                </li>
                {pageNumber.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${current == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrent(pgNumber)}  
                            className='page-link' 
                            href='#'>                        
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </div>
    )
}