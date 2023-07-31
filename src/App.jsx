import {useEffect, useRef, useState} from "react";

function App() {
    // square table with 10 x 10 constant size
    const [table, setTable] = useState({
        size: 10,
    });

    const [isGameStarted, setIsGameStarted] = useState(false);
    const gameItems = useRef([]);
    const [selectedGameItems, setSelectedGameItems] = useState([]);
    const gameLevel = useRef(0);

    const updateSelectedItems = () => {
        gameItems.current = [];
        gameItems.current.push([0, 0]);

        for (let i = 0; i < gameLevel.current; i++) {
            const x = Math.round(Math.random() * table.size) - 1;
            const y = Math.round(Math.random() * table.size) - 1;
            gameItems.current.push([x, y]);
        }
        // random selected
    }

    useEffect(() => {
        if (isGameStarted) {
            // generate selected items
            updateSelectedItems();
        }
    }, [isGameStarted])

    // one square box in table

    // find next point item (boolean table)

    // number of view item
    return (<div>
        <button onClick={() => setIsGameStarted(true)}>
            Start
        </button>
    </div>);
}

export default App
