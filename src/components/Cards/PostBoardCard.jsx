import {useState } from 'react';
import Board from '../Game/Board'

export default function PostBoardCard({ initGrid, title, description, avatar, name, created_at }) {
    const cols = initGrid[0].length;
    const rows = initGrid.length;

    return (
        <>
            <div class="flex flex-col bg-white shadow-lg rounded-lg mx-auto my-5 mx-72 w-9/12">
                <div class="flex px-4 py-6">
                    <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src={avatar} alt="avatar" />
                    <div className='w-full'>
                        <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{name} </h2>
                            <small class="text-sm text-gray-700 ">{created_at.split('T')[0]}</small>
                        </div>

                        <h2 class="text-md font-semibold text-gray-900">{title} </h2>
                        <p class="mt-3 text-gray-700 text-sm">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="board items-center flex">
                    <Board initGrid={initGrid} cols={cols} rows={rows} />
                </div>
            </div>

        </>
    );
}