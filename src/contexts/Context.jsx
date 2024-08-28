import React, { useContext, useEffect, useState } from "react";




const API_URL = `http://www.omdbapi.com/?apikey=e452fab7`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading,setLoading]  = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError,setIsError] = useState({show:"false",msg:""})
    const [userSearch,setUserSearch] = useState('deadpool');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const getMovies = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setLoading(false);
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show:true,
                    msg:data.error,
                })
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        let timeOut =  setTimeout(()=>{
            getMovies(`${API_URL}&s=${userSearch}`)

        },800)
        return ()=> clearTimeout(timeOut);
    }, [userSearch]);
    return <AppContext.Provider value={{isLoading,isError,movie,userSearch,setUserSearch,selectedMovie,setSelectedMovie}}>{children}</AppContext.Provider>


};

// global hooks
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };