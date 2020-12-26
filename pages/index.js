import Head from 'next/head';
import { useState } from 'react';


const Main = () => {

    const [stateTask, setStateTask] = useState([
        {
            id: 1,
            title: "Task 1",
            description: "create Index Page",
            status: "in progress"
        },
        {
            id: 2,
            title: "Task 2",
            description: "create Login Page",
            status: "wait"
        },
        {
            id: 3,
            title: "Task 3",
            description: "create Landing Page",
            status: "wait"
        }
    ]);

    const handleDragItem = (e) => {
        e.preventDefault(); 
    }

    const handleDrop = (e, param) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('id');
        setStateTask(stateTask.map(state => (state.id == id ? {...state, status: param}: state) ));
    }

    const handleDragStart = (e, param) => {
        console.log(`PAaram drag`, param);
        e.dataTransfer.setData('id', param);
    }

    return(
        <>
            <Head>
                <title>Try Drag &amp; Drop</title>
            </Head>
            <div>
                <nav className="bg-blue-800 p-2 mb-2 text-white px-5">
                    <div>Learn Drag &amp; Drop</div>
                </nav>
                <main className="flex w-full p-5 min-h-screen">
                    <div className="w-1/3 px-3">
                        <div className="bg-red-400 h-full px-2">
                            <h1 className="text-lg px-2 mb-2">List Task</h1>
                            <div
                                className="h-full"
                                onDragOver={(e)=>handleDragItem(e)}
                                onDrop={(e)=>handleDrop(e, "wait")}
                            >
                                {stateTask.filter((state) => state.status == 'wait').map((dt) => (
                                    <div
                                        onDragStart={(e)=>handleDragStart(e, dt.id)} 
                                        className="mt-2 p-3 bg-white cursor-pointer" 
                                        draggable 
                                        key={dt.id}
                                    >
                                        <div className="my-1">Title : {dt.title}</div>
                                        <div className="text-sm my-1">Description : {dt.description}</div>
                                        <div className="text-xs my-1">status : {dt.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-3">
                        <div className="bg-yellow-400 h-full px-2">
                            <h1 className="text-lg px-2 mb-2">In Progress</h1>
                            <div 
                                className="h-full"
                                onDragOver={(e)=>handleDragItem(e)} 
                                onDrop={(e)=>handleDrop(e, "in progress")}
                            >
                                {stateTask.filter((state) => state.status == 'in progress').map((dt)=>(
                                    <div
                                        onDragStart={(e)=>handleDragStart(e, dt.id)} 
                                        className="mt-2 p-3 bg-white cursor-pointer" 
                                        draggable 
                                        key={dt.id}
                                    >
                                        <div className="my-1">Title : {dt.title}</div>
                                        <div className="text-sm my-1">Description : {dt.description}</div>
                                        <div className="text-xs my-1">status : {dt.status}</div>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-3">
                        <div className="bg-green-400 h-full px-2">
                            <h1 className="text-lg px-2 mb-2">Completed</h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Main;