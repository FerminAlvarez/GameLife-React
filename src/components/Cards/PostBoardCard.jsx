import Board from '../Game/Board'

export default function PostBoardCard({ initGrid, title, description, avatar, name, created_at }) {
    const cols = initGrid[0].length;
    const rows = initGrid.length;

    return (
        <>
            <div className="flex flex-col bg-white shadow-lg rounded-lg mx-auto my-5 mx-72 w-9/12">
                <div className="flex px-4 py-6">
                    <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={avatar} alt="avatar" />
                    <div className='w-full'>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{name} </h2>
                            <small className="text-sm text-gray-700 ">{created_at.split('T')[0]}</small>
                        </div>

                        <h2 className="text-md font-semibold text-gray-900">{title} </h2>
                        <p className="mt-3 text-gray-700 text-sm">
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