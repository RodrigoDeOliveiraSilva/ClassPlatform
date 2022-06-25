import { ArrowFatRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){

    const{slug} = useParams<{slug: string}>()

    return(
        <div className=" flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {slug
                ? <Video lessonSlug={slug}/> 
                : <div className="flex-1 text- text-center text-blue-500 font-bold text-4xl items-center mt-4 ">
                    <span >
                    Selecione uma aula a direita
                    </span>
                    
                    <ArrowFatRight size={`20%`} className=" w-full flex " />
                </div>}
                <Sidebar/> 
            </main>
        </div>
        
    )
}