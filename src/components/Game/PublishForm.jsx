
import { useState } from 'react';
import { saveGrid } from '../../services/BoardService';
import { useNavigate } from 'react-router';
export default function PublishForm({ initGrid }) {
    let [title, setTitle] = useState()
    let [description, setDescription] = useState()
    return (
        <form onSubmit={() => {
            saveGrid(initGrid, title, description);
        }}>
            <div className='flex flex-col items-center'>
                <input type="text" minLength="5" placeholder="Title" className="input input-bordered w-full max-w-xs m-5" required onChange={e => setTitle(e.target.value)} />

                <textarea minLength="5" placeholder="Description" className="textarea textarea-bordered w-full max-w-xs m-5" required onChange={e => setDescription(e.target.value)} />
                <input type="submit" className="btn btn-secondary mb-5" value="PUBLISH" />
            </div>
        </form>
    )
}