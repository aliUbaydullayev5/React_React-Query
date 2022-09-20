import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

const App = () => {

    const [page, setPage] = useState('planets');

    return(
        <div>
            <Navbar setPage={setPage} />
            <div>
                {page === 'planets' ? <Planets /> : <People />}
            </div>
        </div>
    )
}

export default App;