import React from 'react'

function CellComponent({ id, cell, cells, setCells, handleResetGame, first, setFirst, winner, checkArray }) {
    
    function handleGame(e) {
        let taken =
			e.target.firstChild.classList.contains('circle') ||
			e.target.firstChild.classList.contains('cross');

        if(!taken && !winner || !taken && checkArray) {
            if(first === 'circle'){
                e.target.firstChild.classList.add('circle');
                setFirst('cross');
                handleCellChange('circle');
            }else if(first === 'cross'){
                e.target.firstChild.classList.add('cross');
                setFirst('circle');
                handleCellChange('cross');
            }
        }   
    }

    function handleCellChange(classname) {
        let updateArrayCell = cells.map((el, index) => {
                if(index === id){
                    return classname;
                }else {
                    return el;
                }
            });
        setCells(updateArrayCell);
    }
    

    return (
        <div 
            className='square' 
            id={id}
            onClick={((e) => handleGame(e))} // e -> event
        >
            <div className={cell}></div>
        </div>
    )
}

export default CellComponent