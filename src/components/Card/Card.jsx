import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css'
const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="inline-block transition-transform duration-[0.2s] relative overflow-hidden cursor-pointer min-w-[200px] h-[350px] z-0 border m-[0.19rem] rounded-[10px] border-solid border-[rgb(99,99,99)] hover:z-[1000] hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:scale-[1.2]">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={350} duration={3} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="inline-block transition-transform duration-[0.2s] relative overflow-hidden cursor-pointer min-w-[200px] h-[350px] z-0 border m-[0.19rem] rounded-[10px] border-solid border-[rgb(99,99,99)] hover:z-[1000] hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] hover:scale-[1.2]">
                <img className="h-[350px] min-w-[250px]" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="absolute h-[290px] flex flex-col w-[100%] justify-end bg-[linear-gradient(rgb(0,0,0,0),rgb(0,0,0,1))] opacity-0 transition-opacity duration-[0.2s] pt-0 pb-4 px-4 bottom-0 hover:opacity-100">
                    <div className="font-black text-base mb-[0.4rem]">{movie?movie.original_title:""}</div>
                    <div className="text-xs mb-1">
                        {movie?movie.release_date:""}
                        <span className="float-right">{movie?movie.vote_average.toFixed(1):""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="italic text-xs mb-1">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Card